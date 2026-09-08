import Stripe from "stripe";
import { stripeConfig } from "@/config/stripe";
import { getStripePriceId } from "@/config/stripe-products";
import { features } from "@/config/features";
import type { CurrencyCode } from "@/config/payments";
import { company } from "@/config/company";

/** Lazily instantiate the Stripe client. Returns null if not configured. */
let stripeClient: Stripe | null = null;

export function getStripe(): Stripe | null {
  if (!stripeConfig.isConfigured) return null;
  if (!stripeClient) {
    stripeClient = new Stripe(stripeConfig.secretKey, {
      apiVersion: "2025-08-27.basil" as Stripe.LatestApiVersion,
      typescript: true,
    });
  }
  return stripeClient;
}

export type CreateCheckoutParams = {
  productId: string;
  planId?: string;
  currency: CurrencyCode;
  type: "one-time" | "subscription";
  customerEmail?: string;
  productSlug: string;
  productName: string;
};

/**
 * Resolves the Stripe Price ID from trusted server-side configuration.
 * The browser never supplies a price — only a product/plan/currency selection.
 */
export async function createCheckoutSession(
  params: CreateCheckoutParams
): Promise<{ url: string | null; sessionId: string; mock?: boolean }> {
  const stripe = getStripe();

  // Mock mode: no live Stripe. Return a mock session that redirects to success.
  if (!stripe || features.isMock) {
    const mockSessionId = `mock_${params.productId}_${Date.now()}`;
    return {
      url: `${stripeConfig.successUrl}?session_id=${mockSessionId}&mock=1`,
      sessionId: mockSessionId,
      mock: true,
    };
  }

  const priceId = getStripePriceId(
    params.productId,
    params.currency,
    params.type === "subscription" ? "recurring" : "oneTime"
  );
  if (!priceId) {
    throw new Error(
      `No Stripe Price ID configured for product ${params.productId} (${params.currency} ${params.type}).`
    );
  }

  const mode: Stripe.Checkout.SessionCreateParams.Mode =
    params.type === "subscription" ? "subscription" : "payment";

  const session = await stripe.checkout.sessions.create({
    mode,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${company.siteUrl}${stripeConfig.successUrl}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${company.siteUrl}${stripeConfig.cancelUrl}`,
    customer_email: params.customerEmail,
    metadata: {
      productId: params.productId,
      productSlug: params.productSlug,
      productName: params.productName,
      planId: params.planId ?? "",
    },
    ...(stripeConfig.taxEnabled && { automatic_tax: { enabled: true } }),
  });

  return { url: session.url, sessionId: session.id };
}

/** Safe retrieval of a checkout session for the success page (live mode). */
export async function retrieveCheckoutSession(sessionId: string) {
  const stripe = getStripe();
  if (!stripe) return null;
  try {
    return await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return null;
  }
}

/** Creates a Stripe Billing Portal session for subscription management. */
export async function createPortalSession(customerId: string): Promise<{ url: string } | null> {
  const stripe = getStripe();
  if (!stripe) return null;
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${company.siteUrl}/account`,
  });
  return { url: session.url };
}
