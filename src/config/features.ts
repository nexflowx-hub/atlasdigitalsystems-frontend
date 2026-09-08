/**
 * Feature flags and application mode.
 * APP_MODE = "mock" keeps the catalogue/pricing/cart working locally
 * without live Stripe or a backend. Switch to "live" when going to production.
 */
export const features = {
  appMode: (process.env.APP_MODE as "mock" | "live") || "mock",
  paymentProvider: process.env.PAYMENT_PROVIDER || "stripe",
  contactProvider: process.env.CONTACT_PROVIDER || "mock",
  aiProvider: process.env.AI_PROVIDER || "mock",
  isLive: process.env.APP_MODE === "live",
  isMock: process.env.APP_MODE !== "live",
} as const;

export type Features = typeof features;
