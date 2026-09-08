"use client";

import Link from "next/link";
import { ArrowRight, Package, Repeat, ShieldCheck, CreditCard } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/site/product-card";
import { products } from "@/data/products";
import { useTranslations } from "@/lib/i18n/context";

export function DigitalProductsSection() {
  const t = useTranslations();
  const digital = products.filter((p) => p.category === "digital" || p.category === "bundle").slice(0, 3);

  return (
    <section className="relative border-b border-atlas-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={t("digital.eyebrow")}
            title={t("digital.title")}
            subtitle={t("digital.subtitle")}
          />
          <Link href="/digital-products" className="inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white">
            {t("featured.viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {digital.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Package} title="Instant delivery" desc="Digital access after payment confirmation." />
          <Feature icon={Repeat} title="Business licence" desc="Use within a single organisation." />
          <Feature icon={CreditCard} title="Secure checkout" desc="Processed via Stripe Checkout." />
          <Feature icon={ShieldCheck} title="Backed by policy" desc="Clear refund and delivery terms." />
        </div>
      </div>
    </section>
  );
}

export function SaasProductsSection() {
  const t = useTranslations();
  const saas = products.filter((p) => p.category === "saas").slice(0, 3);

  return (
    <section className="relative border-b border-atlas-border py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid-fine opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("saas.eyebrow")}
          title={t("saas.title")}
          subtitle={t("saas.subtitle")}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {saas.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: typeof Package; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-atlas-border bg-atlas-card/50 p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-atlas-blue/10 text-atlas-cyan">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-atlas-muted">{desc}</p>
      </div>
    </div>
  );
}
