import type { CurrencyCode } from "@/config/payments";

export type ProductCategory =
  | "ai"
  | "software"
  | "automation"
  | "data"
  | "digital"
  | "service"
  | "bundle"
  | "saas";

export type ProductStatus =
  | "active"
  | "preview"
  | "early-access"
  | "coming-soon"
  | "contact-sales";

export type BillingModel = "one-time" | "subscription" | "contact";

export type PriceTiers = Partial<Record<CurrencyCode, number>>;

export type PricingPlan = {
  id: string;
  name: string;
  price: PriceTiers;
  period?: string; // e.g. "/month"
  description?: string;
  features: string[];
  highlighted?: boolean;
  stripeProductId?: string;
};

export type FAQ = { question: string; answer: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: ProductCategory;
  division: "ai" | "software" | "automate" | "data" | "cloud" | "labs";
  status: ProductStatus;
  billingModel: BillingModel;
  /** Single price for one-time / starting price for subscriptions. */
  price?: PriceTiers;
  /** Multiple plans for SaaS. */
  plans?: PricingPlan[];
  features: string[];
  includes?: string[];
  deliveryModel: string;
  licence?: string;
  support?: string;
  seller: string;
  refundSummary: string;
  faqs?: FAQ[];
  badge?: string;
  featured?: boolean;
  sort?: number;
  createdAt?: string;
  /** Path to a hyperrealistic product visual in /public. */
  image?: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  ai: "AI",
  software: "Software",
  automation: "Automation",
  data: "Data",
  digital: "Digital Product",
  service: "Service",
  bundle: "Bundle",
  saas: "SaaS",
};

export const statusLabels: Record<ProductStatus, string> = {
  active: "Active",
  preview: "Preview",
  "early-access": "Early Access",
  "coming-soon": "Coming Soon",
  "contact-sales": "Contact Sales",
};

export const statusVariants: Record<
  ProductStatus,
  "default" | "secondary" | "destructive" | "outline"
> = {
  active: "default",
  preview: "secondary",
  "early-access": "outline",
  "coming-soon": "secondary",
  "contact-sales": "outline",
};
