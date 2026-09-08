import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";
import { getProductBySlug, products } from "@/data/products";
import type { CurrencyCode } from "@/config/payments";

/**
 * POST /api/stripe/create-checkout-session
 *
 * Creates a Stripe Checkout Session for a single product. Prices are resolved
 * server-side from trusted configuration — the browser never supplies an
 * amount. The Stripe secret key is used here on the server only and is never
 * exposed to the client.
 *
 * V1 limitation: this route processes a single product per session. The
 * checkout page currently sends the first cart item. Multi-item checkout is
 * coming soon.
 *
 * Security:
 *  - Never trust price/amount from the browser.
 *  - Only "active" products can be checked out.
 *  - Never expose STRIPE_SECRET_KEY or any internal Stripe error detail.
 */

type CreateCheckoutBody = {
  productId?: string;
  planId?: string;
  currency?: string;
  type?: "one-time" | "subscription";
  customerEmail?: string;
};

const ALLOWED_CURRENCIES: ReadonlySet<CurrencyCode> = new Set([
  "USD",
  "GBP",
  "EUR",
  "BRL",
]);

function isAllowedCurrency(value: unknown): value is CurrencyCode {
  return (
    typeof value === "string" && ALLOWED_CURRENCIES.has(value as CurrencyCode)
  );
}

export async function POST(request: Request) {
  let body: CreateCheckoutBody;
  try {
    body = (await request.json()) as CreateCheckoutBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { productId, planId, currency, type, customerEmail } = body;

  // ── Validate required inputs ──────────────────────────────────────────
  if (!productId || typeof productId !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid productId." },
      { status: 400 }
    );
  }
  if (!type || (type !== "one-time" && type !== "subscription")) {
    return NextResponse.json(
      {
        error:
          "Missing or invalid type. Expected 'one-time' or 'subscription'.",
      },
      { status: 400 }
    );
  }
  if (!isAllowedCurrency(currency)) {
    return NextResponse.json(
      { error: "Missing or unsupported currency." },
      { status: 400 }
    );
  }

  // ── Resolve product from trusted server-side catalog ──────────────────
  // The browser can send a productId or slug; we look both up against the
  // canonical product list. We NEVER trust a price sent from the client.
  const product =
    products.find((p) => p.id === productId) ?? getProductBySlug(productId);

  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  // Only "active" products can be checked out. Preview / coming-soon / etc.
  // are explicitly rejected.
  if (product.status !== "active") {
    return NextResponse.json(
      { error: "Product not available for checkout." },
      { status: 400 }
    );
  }

  // Type must match the product's actual billing model. This prevents the
  // browser from forcing a subscription flow on a one-time product or vice
  // versa.
  const expectedType: "one-time" | "subscription" =
    product.billingModel === "subscription" ? "subscription" : "one-time";
  if (type !== expectedType) {
    return NextResponse.json(
      {
        error: `Checkout type mismatch. Product is billed as "${expectedType}".`,
      },
      { status: 400 }
    );
  }

  // Optional: validate planId belongs to product (for SaaS).
  if (
    planId &&
    product.plans &&
    !product.plans.some((p) => p.id === planId)
  ) {
    return NextResponse.json(
      { error: "Invalid plan for this product." },
      { status: 400 }
    );
  }

  // Optional: validate email shape if provided.
  if (
    customerEmail &&
    typeof customerEmail === "string" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)
  ) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  // ── Create the checkout session (server-side) ─────────────────────────
  try {
    const result = await createCheckoutSession({
      productId: product.id,
      planId,
      currency,
      type,
      customerEmail: customerEmail || undefined,
      productSlug: product.slug,
      productName: product.name,
    });

    if (!result.url) {
      // Stripe can return a null URL in rare cases. Surface a safe error.
      return NextResponse.json(
        { error: "Unable to create checkout session." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      url: result.url,
      sessionId: result.sessionId,
      ...(result.mock ? { mock: true } : {}),
    });
  } catch (err) {
    // Log the real error server-side for ops; return a generic message to the
    // client. Never leak STRIPE_SECRET_KEY or internal Stripe error detail.
    console.error(
      "[stripe/create-checkout-session] Failed to create session for product",
      product.id,
      err
    );
    const message =
      err instanceof Error && err.message.includes("No Stripe Price ID")
        ? "This product is not yet available for live checkout. Please try again later."
        : "Unable to start checkout. Please try again later.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
