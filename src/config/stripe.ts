/**
 * Stripe configuration. Secret keys are NEVER exposed to the client.
 * Only publishable keys use the NEXT_PUBLIC_ prefix.
 */
export const stripeConfig = {
  // Server-only secret key — used in API routes only.
  secretKey: process.env.STRIPE_SECRET_KEY || "",
  // Safe to expose to the client.
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  // Webhook signing secret — server only.
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "",
  // Stripe Tax (opt-in).
  taxEnabled: process.env.STRIPE_TAX_ENABLED === "true",
  // Whether Stripe is configured (test or live keys present).
  isConfigured: Boolean(process.env.STRIPE_SECRET_KEY),
  // Checkout redirect routes.
  successUrl: "/checkout/success",
  cancelUrl: "/checkout/cancelled",
} as const;

export type StripeConfig = typeof stripeConfig;
