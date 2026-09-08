"use client";

import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck, KeyRound, CreditCard, ServerCog, FileCheck2, Megaphone } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { useTranslations } from "@/lib/i18n/context";

const securityPoints = [
  { icon: Lock, title: "TLS encryption", desc: "Data in transit protected with modern TLS." },
  { icon: KeyRound, title: "Access control", desc: "Principle of least privilege across systems." },
  { icon: ServerCog, title: "Secure infrastructure", desc: "Hardened, regularly reviewed environments." },
  { icon: FileCheck2, title: "Environment secrets", desc: "Secrets managed server-side, never exposed." },
  { icon: CreditCard, title: "Payment separation", desc: "Card details handled by Stripe Checkout." },
  { icon: Megaphone, title: "Incident management", desc: "Reporting via security@atlasdigitalsystems.co." },
];

export function SecuritySection() {
  const t = useTranslations();

  return (
    <section className="relative border-b border-atlas-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow={t("security.eyebrow")}
              title={t("security.title")}
              subtitle={t("security.subtitle")}
            />
            <p className="mt-4 max-w-md text-sm text-atlas-muted">
              We make factual claims only. We do not claim certifications we have not obtained.
            </p>
            <Link href="/security" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white">
              {t("security.explore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {securityPoints.map((p) => (
              <div key={p.title} className="flex items-start gap-3 rounded-lg border border-atlas-border bg-atlas-card/50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-atlas-blue/10 text-atlas-cyan">
                  <p.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{p.title}</p>
                  <p className="text-xs text-atlas-muted">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PaymentMethodsSection() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden border-b border-atlas-border py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid-fine opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow={t("payments.eyebrow")}
              title={t("payments.title")}
              subtitle={t("payments.subtitle")}
            />
            <p className="mt-4 max-w-md text-sm text-atlas-muted">
              Atlas does not need to directly store complete card details when Stripe Checkout is used. Available methods depend on your region, currency and account configuration.
            </p>
            <Link href="/payment-methods" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white">
              {t("payments.explore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="card-atlas rounded-xl p-6">
            <div className="grid grid-cols-3 gap-3">
              {["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay", "Link"].map((m) => (
                <div
                  key={m}
                  className="flex h-16 items-center justify-center rounded-lg border border-atlas-border bg-atlas-deep text-center text-xs font-semibold text-atlas-white/70"
                >
                  {m}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-atlas-muted">
              Illustrative payment method slots. Official brand assets should be placed in /public/payments/ before production launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
