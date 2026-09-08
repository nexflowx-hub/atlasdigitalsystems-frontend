"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { useCurrency } from "@/lib/currency-context";
import { useTranslations } from "@/lib/i18n/context";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const t = useTranslations();
  const { currency, format } = useCurrency();

  const aiWorkspace = products.find((p) => p.slug === "atlas-ai-workspace");
  const plans = aiWorkspace?.plans ?? [];

  return (
    <section className="relative border-b border-atlas-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={t("pricing.eyebrow")}
            title={t("pricing.title")}
            subtitle={t("pricing.subtitle")}
          />
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white">
            {t("pricing.viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const amount = plan.price?.[currency] ?? 0;
            return (
              <div
                key={plan.id}
                className={cn(
                  "card-atlas relative flex flex-col rounded-xl p-6",
                  plan.highlighted && "border-atlas-blue/60 atlas-glow"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-6 rounded-full bg-atlas-blue px-3 py-1 text-xs font-bold text-white">
                    Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-atlas-muted">{plan.description}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-white">
                    {amount === 0 ? "Free" : format(amount)}
                  </span>
                  {amount > 0 && <span className="text-sm text-atlas-muted">{t("pricing.month")}</span>}
                </div>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-atlas-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-atlas-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products/atlas-ai-workspace`}
                  className={cn(
                    "mt-6 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors",
                    plan.highlighted
                      ? "bg-atlas-blue text-white hover:bg-atlas-blue-bright"
                      : "border border-atlas-border text-white hover:bg-atlas-blue/10"
                  )}
                >
                  {t("common.getStarted")}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
