import type { Metadata } from "next";
import Link from "next/link";
import {
  Package,
  Repeat,
  ShieldCheck,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/site/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Digital Products",
  description:
    "One-time digital products and bundles — workflows, toolkits and systems delivered digitally after payment confirmation.",
  alternates: { canonical: "/digital-products" },
  openGraph: {
    title: `Digital Products | ${company.brandName}`,
    description:
      "One-time digital products and bundles — workflows, toolkits and systems delivered digitally after payment confirmation.",
    url: "/digital-products",
    type: "website",
    siteName: company.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `Digital Products | ${company.brandName}`,
    description:
      "One-time digital products and bundles — workflows, toolkits and systems delivered digitally after payment confirmation.",
  },
};

const FEATURES = [
  {
    icon: Package,
    title: "Instant delivery",
    desc: "Digital access after payment confirmation.",
  },
  {
    icon: Repeat,
    title: "Business licence",
    desc: "Use within a single organisation.",
  },
  {
    icon: CreditCard,
    title: "Secure checkout",
    desc: "Processed via Stripe Checkout.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by policy",
    desc: "Clear refund and delivery terms.",
  },
];

export default function DigitalProductsPage() {
  const digital = products
    .filter((p) => p.category === "digital" || p.category === "bundle")
    .sort((a, b) => (a.sort ?? 99) - (b.sort ?? 99));

  return (
    <>
      <PageHeader
        eyebrow="DIGITAL PRODUCTS"
        title="One-time purchases. Immediate value."
        subtitle="Workflows, toolkits and systems delivered digitally — access after payment confirmation."
      />

      <PageSection>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {digital.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* Features strip */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 rounded-lg border border-atlas-border bg-atlas-card/50 p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-atlas-blue/10 text-atlas-cyan">
                <f.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{f.title}</p>
                <p className="text-xs text-atlas-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* What's inside section */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="WHAT YOU GET"
              title="Structured systems, not just files."
              subtitle="Each digital product is a structured package — workflows, templates and guides designed for real business work."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Structured workflows and templates",
                "Implementation guides and instructions",
                "AI prompt sets and toolkits",
                "Editable business documents",
                "Business licence for one organisation",
                "Secure digital access after checkout",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-lg border border-atlas-border bg-atlas-card/50 p-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-atlas-blue/15 text-atlas-cyan">
                    <Package className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection bordered={false}>
        <div className="relative overflow-hidden rounded-2xl border border-atlas-border bg-gradient-to-br from-atlas-deep to-atlas-void p-8 sm:p-10">
          <div className="absolute inset-0 bg-grid-fine opacity-30" />
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-atlas-blue/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Looking for software or services?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-atlas-muted">
                Explore the full {company.legalName} catalogue — SaaS,
                automation, data products and professional services.
              </p>
            </div>
            <Button
              asChild
              className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
            >
              <Link href="/products">
                Browse all products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
