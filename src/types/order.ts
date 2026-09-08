import type { CurrencyCode } from "@/config/payments";

export type OrderStatus =
  | "pending"
  | "paid"
  | "processing"
  | "fulfilled"
  | "cancelled"
  | "failed";

export type OrderItem = {
  productId: string;
  name: string;
  price: number;
  currency: CurrencyCode;
  quantity: number;
};

export type Order = {
  id: string;
  sessionId?: string;
  customerEmail?: string;
  items: OrderItem[];
  total: number;
  currency: CurrencyCode;
  status: OrderStatus;
  createdAt: string;
};

/**
 * Future database-ready order model. In V1 the site operates in mock mode:
 * checkout is handled by Stripe Checkout Sessions and webhook confirmation.
 * When a database is added, these entities map directly to tables.
 */
export type OrderEntity = Order;
