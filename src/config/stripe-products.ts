import type { CurrencyCode } from "./payments";

/**
 * Maps internal product IDs to Stripe Price IDs per currency.
 * Price IDs are loaded from environment variables — never hardcode secrets.
 * Only `active` products should have Price IDs configured and live checkout.
 */
export type StripePriceMap = Partial<Record<CurrencyCode, string>>;

export type StripeProductMapping = {
  productId: string;
  /** One-time prices for digital products / services. */
  oneTime?: StripePriceMap;
  /** Recurring (subscription) prices for SaaS plans. */
  recurring?: StripePriceMap;
};

export const stripeProducts: StripeProductMapping[] = [
  {
    productId: "atlas-ai-workspace",
    recurring: {
      USD: process.env.STRIPE_PRICE_ATLAS_AI_PRO_USD || "",
    },
  },
  {
    productId: "atlas-ai-workspace-business",
    recurring: {
      USD: process.env.STRIPE_PRICE_ATLAS_AI_BUSINESS_USD || "",
    },
  },
  {
    productId: "atlas-automate",
    recurring: {
      USD: process.env.STRIPE_PRICE_ATLAS_AUTOMATE_USD || "",
    },
  },
  {
    productId: "atlas-data-workspace",
    recurring: {
      USD: process.env.STRIPE_PRICE_ATLAS_DATA_USD || "",
    },
  },
  {
    productId: "atlas-business-automation-pack",
    oneTime: {
      USD: process.env.STRIPE_PRICE_BUSINESS_AUTOMATION_PACK_USD || "",
    },
  },
  {
    productId: "atlas-ai-business-toolkit",
    oneTime: {
      USD: process.env.STRIPE_PRICE_AI_BUSINESS_TOOLKIT_USD || "",
    },
  },
  {
    productId: "atlas-startup-launch-system",
    oneTime: {
      USD: process.env.STRIPE_PRICE_STARTUP_LAUNCH_SYSTEM_USD || "",
    },
  },
  {
    productId: "atlas-marketing-automation-kit",
    oneTime: {
      USD: process.env.STRIPE_PRICE_MARKETING_AUTOMATION_KIT_USD || "",
    },
  },
  {
    productId: "atlas-sales-system",
    oneTime: {
      USD: process.env.STRIPE_PRICE_SALES_SYSTEM_USD || "",
    },
  },
  {
    productId: "atlas-business-os",
    oneTime: {
      USD: process.env.STRIPE_PRICE_BUSINESS_OS_USD || "",
    },
  },
];

export function getStripePriceId(
  productId: string,
  currency: CurrencyCode,
  type: "oneTime" | "recurring"
): string | undefined {
  const mapping = stripeProducts.find((p) => p.productId === productId);
  if (!mapping) return undefined;
  return mapping[type]?.[currency];
}
