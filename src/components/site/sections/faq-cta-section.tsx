"use client";

import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/site/section-heading";
import { faqs } from "@/data/faqs";
import { useTranslations } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const t = useTranslations();
  const [open, setOpen] = useState<number | null>(0);
  const items = faqs.slice(0, 6);

  return (
    <section className="relative border-b border-atlas-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow={t("faq.eyebrow")}
              title={t("faq.title")}
              subtitle={t("faq.subtitle")}
            />
            <Link href="/faq" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white">
              {t("faq.viewAll")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-3">
              {items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={i} className="card-atlas overflow-hidden rounded-xl">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-mono text-atlas-cyan">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-sm font-semibold text-white">{item.question}</span>
                      </span>
                      <span className={cn("shrink-0 text-atlas-cyan transition-transform", isOpen && "rotate-180")}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pl-12 text-sm leading-relaxed text-atlas-muted">
                        {item.answer}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  const t = useTranslations();
  return (
    <section className="relative overflow-hidden border-b border-atlas-border py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-atlas-blue/15 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t("cta.title")}
        </h2>
        <p className="mt-5 mx-auto max-w-xl text-base leading-relaxed text-atlas-muted sm:text-lg">
          {t("cta.body")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-md bg-atlas-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-atlas-blue-bright btn-glow"
          >
            {t("cta.primary")}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-atlas-border bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-atlas-blue/10"
          >
            {t("cta.secondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
