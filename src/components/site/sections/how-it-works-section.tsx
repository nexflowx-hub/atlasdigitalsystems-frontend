"use client";

import Link from "next/link";
import { MonitorSmartphone, Download, Wrench, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { useTranslations } from "@/lib/i18n/context";

const journeys = [
  {
    icon: MonitorSmartphone,
    key: "software",
    steps: ["Choose plan", "Create account", "Complete payment", "Receive digital access", "Use software"],
  },
  {
    icon: Download,
    key: "digital",
    steps: ["Choose product", "Review licence", "Checkout", "Payment confirmed", "Receive digital access"],
  },
  {
    icon: Wrench,
    key: "service",
    steps: ["Select service", "Submit requirements", "Scope review", "Proposal & agreement", "Delivery"],
  },
];

export function HowItWorksSection() {
  const t = useTranslations();

  return (
    <section className="relative border-b border-atlas-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("howitworks.eyebrow")}
          title={t("howitworks.title")}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {journeys.map((j) => (
            <div key={j.key} className="card-atlas rounded-xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                  <j.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {t(`howitworks.${j.key}`)}
                </h3>
              </div>
              <ol className="mt-6 space-y-3">
                {j.steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-atlas-blue/40 bg-atlas-void text-xs font-bold text-atlas-cyan">
                      {i + 1}
                    </span>
                    <span className="text-sm text-atlas-white/80">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/how-it-works" className="inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white">
            {t("howitworks.viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
