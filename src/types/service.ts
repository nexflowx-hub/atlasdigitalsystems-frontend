import type { CurrencyCode } from "@/config/payments";

export type ServiceStatus = "active" | "contact-sales" | "coming-soon";

export type Service = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  startingPrice?: Partial<Record<CurrencyCode, number>>;
  status: ServiceStatus;
  scope: string[];
  delivery: string;
  process: { step: string; detail: string }[];
  ctaLabel: string;
  category: string;
  icon?: string;
};
