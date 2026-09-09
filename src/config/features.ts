/**
 * Feature flags and application mode.
 * Public production must not silently simulate successful payments. Mock
 * checkout therefore requires an explicit opt-in flag and is intended only
 * for development/preview environments.
 */
export const features = {
  appMode: (process.env.APP_MODE as "mock" | "live") || "mock",
  paymentProvider: process.env.PAYMENT_PROVIDER || "stripe",
  contactProvider: process.env.CONTACT_PROVIDER || "mock",
  aiProvider: process.env.AI_PROVIDER || "zai",
  allowMockCheckout: process.env.NEXT_PUBLIC_ENABLE_MOCK_CHECKOUT === "true",
  isLive: process.env.APP_MODE === "live",
  isMock: process.env.APP_MODE !== "live",
} as const;

export type Features = typeof features;
