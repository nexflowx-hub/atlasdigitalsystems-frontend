import type { CurrencyCode } from "@/config/payments";

export type PaymentMethod = {
  id: string;
  name: string;
  description: string;
  available: boolean;
};

export type CheckoutLineItem = {
  productId: string;
  name: string;
  price: PriceTiers;
  billingModel: "one-time" | "subscription";
  quantity: number;
};

export type PriceTiers = Partial<Record<CurrencyCode, number>>;

export type CreateCheckoutSessionInput = {
  productId: string;
  planId?: string;
  currency: CurrencyCode;
  type: "one-time" | "subscription";
  customerEmail?: string;
};

export type CheckoutSessionResult = {
  url: string | null;
  sessionId: string;
  mock?: boolean;
};
