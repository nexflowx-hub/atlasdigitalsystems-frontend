"use client";

import Link from "next/link";
import {
  ArrowRight,
  Lock,
  KeyRound,
  CreditCard,
  ServerCog,
  FileCheck2,
  Megaphone,
  WalletCards,
  Repeat2,
  BadgeDollarSign,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { useTranslations } from "@/lib/i18n/context";

const securityPoints = [
  { icon: Lock, title: "TLS in transit", desc: "Modern encrypted transport for supported web traffic." },
  { icon: KeyRound, title: "Access control", desc: "Least-privilege patterns across application systems." },
  { icon: ServerCog, title: "Server-side secrets", desc: "Sensitive environment credentials stay outside client bundles." },
  { icon: FileCheck2, title: "Input validation", desc: "Structured validation around checkout and public forms." },
  { icon: CreditCard, title: "Payment separation", desc: "Hosted checkout keeps complete card entry away from Atlas forms." },
  { icon: Megaphone, title: "Security contact", desc: "Report security concerns to security@atlasdigitalsystems.co." },
];

const paymentCapabilities = [
  { icon: WalletCards, title: "Hosted checkout", desc: "Provider-hosted payment flow when enabled." },
  { icon: CreditCard, title: "Cards & wallets", desc: "Only methods actually enabled at checkout are presented." },
  { icon: Repeat2, title: "Recurring billing", desc: "Architecture prepared for active SaaS subscriptions." },
  { icon: BadgeDollarSign, title: "Regional pricing", desc: "Configured USD, GBP, EUR and BRL product prices." },
];

export function SecuritySection() {
  const t = useTranslations();

  return (
    <section className="relative border-b border-atlas-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow={t("security.eyebrow")} title={t("security.title")} subtitle={t("security.subtitle")} />
            <p className="mt-4 max-w-md text-sm leading-6 text-atlas-muted">
              Security controls are documented according to the features currently implemented. Certifications are only displayed if and when they are actually obtained.
            </p>
            <Link href="/security" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white">
              {t("security.explore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {securityPoints.map((p) => (
              <div key={p.title} className="flex items-start gap-3 rounded-xl border border-atlas-border bg-atlas-card/55 p-4 transition-colors hover:border-atlas-blue/35">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-atlas-blue/10 text-atlas-cyan"><p.icon className="h-4 w-4" /></span>
                <div><p className="text-sm font-semibold text-white">{p.title}</p><p className="mt-0.5 text-xs leading-5 text-atlas-muted">{p.desc}</p></div>
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
            <SectionHeading eyebrow={t("payments.eyebrow")} title={t("payments.title")} subtitle={t("payments.subtitle")} />
            <p className="mt-4 max-w-lg text-sm leading-6 text-atlas-muted">
              The website presents only payment methods that are enabled for the actual checkout configuration. Until online checkout is activated, Atlas does not simulate a public paid order.
            </p>
            <Link href="/payment-methods" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white">
              {t("payments.explore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="card-atlas rounded-2xl p-6 sm:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-atlas-cyan">Checkout architecture</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {paymentCapabilities.map((item) => (
                <div key={item.title} className="rounded-xl border border-atlas-border bg-atlas-deep/70 p-4">
                  <item.icon className="h-5 w-5 text-atlas-cyan" />
                  <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-atlas-muted">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-atlas-muted">
              Card-network and wallet brand marks are shown only when their official assets are configured and the method is actually available for the transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
