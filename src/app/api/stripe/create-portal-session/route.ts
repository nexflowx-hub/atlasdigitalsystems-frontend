import { NextResponse } from "next/server";
import { createPortalSession } from "@/lib/stripe";
import { stripeConfig } from "@/config/stripe";

/**
 * POST /api/stripe/create-portal-session
 *
 * Creates a Stripe Billing Portal session for an existing Stripe Customer,
 * allowing the customer to manage subscriptions, payment methods and invoices
 * directly via Stripe's hosted portal.
 *
 * IMPORTANT:
 *  - Do not expose portal functionality unless actual Stripe Customer IDs
 *    exist. The customerId MUST be a real Stripe Customer ID returned from
 *    Stripe (e.g. from a checkout.session.completed webhook), never a value
 *    supplied and trusted from the browser without prior verification.
 *  - In mock mode (Stripe not configured), this route returns 400.
 */

type CreatePortalBody = {
  customerId?: string;
};

export async function POST(request: Request) {
  // Portal requires a configured Stripe account. Mock mode does not support it.
  if (!stripeConfig.isConfigured) {
    return NextResponse.json(
      { error: "Customer portal is not available in this environment." },
      { status: 400 }
    );
  }

  let body: CreatePortalBody;
  try {
    body = (await request.json()) as CreatePortalBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { customerId } = body;

  if (!customerId || typeof customerId !== "string") {
    return NextResponse.json(
      { error: "Missing customerId." },
      { status: 400 }
    );
  }

  // Basic shape check — Stripe Customer IDs are prefixed with "cus_".
  if (!customerId.startsWith("cus_")) {
    return NextResponse.json(
      { error: "Invalid customer identifier." },
      { status: 400 }
    );
  }

  try {
    const result = await createPortalSession(customerId);
    if (!result) {
      return NextResponse.json(
        { error: "Unable to create portal session." },
        { status: 502 }
      );
    }
    return NextResponse.json({ url: result.url });
  } catch (err) {
    // Log the real error server-side; return a generic message.
    console.error(
      "[stripe/create-portal-session] Failed for customer",
      customerId,
      err
    );
    return NextResponse.json(
      { error: "Unable to create portal session." },
      { status: 502 }
    );
  }
}
