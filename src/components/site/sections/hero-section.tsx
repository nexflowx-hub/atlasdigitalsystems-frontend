"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Box, Zap, Headphones } from "lucide-react";
import { GlobeHeroVisual } from "@/components/site/globe-visual";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n/context";

const factualHighlights = [
  {
    icon: Box,
    title: "Direct products",
    desc: "Software, SaaS and digital products sold by Atlas.",
  },
  {
    icon: Zap,
    title: "Digital delivery",
    desc: "Online access and electronically delivered resources.",
  },
  {
    icon: Headphones,
    title: "US support",
    desc: "+1 302-595-5455 · Voice & SMS",
  },
];

export function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden border-b border-atlas-border">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(0,141,255,0.12),transparent_34%),radial-gradient(circle_at_90%_15%,rgba(23,200,255,0.06),transparent_25%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-atlas-void/0 via-atlas-void/25 to-atlas-void" />
      <div className="hero-noise pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-[1480px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-5 lg:px-8 lg:py-20 xl:py-24">
        {/* Main copy */}
        <div className="min-w-0 lg:col-span-5 xl:pr-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-atlas-blue/30 bg-atlas-blue/5 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-atlas-cyan" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-atlas-cyan">
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem]">
            {t("hero.headline1")}
            <br />
            <span className="text-glow text-gradient-blue">{t("hero.headline2")}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-atlas-muted sm:text-lg">
            {t("hero.supporting")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
            >
              <Link href="/products">
                {t("hero.ctaPrimary")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-atlas-border bg-atlas-night/25 text-white backdrop-blur hover:bg-atlas-blue/10"
            >
              <Link href="/business">{t("hero.ctaSecondary")}</Link>
            </Button>
          </div>

          <p className="mt-6 max-w-lg text-xs leading-relaxed text-atlas-muted/80">
            ATLAS DIGITAL SYSTEMS, LLC · Delaware, United States · Software, AI and automation for modern businesses.
          </p>
        </div>

        {/* Earth */}
        <div className="min-w-0 lg:col-span-4">
          <GlobeHeroVisual />
        </div>

        {/* Truthful capability rail — visual counterpart to the mockup metrics column */}
        <aside className="min-w-0 lg:col-span-3 lg:pl-4">
          <div className="glass-strong rounded-2xl p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-atlas-cyan">
              Technology for real business
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white">
              Products you can understand. Delivery you can verify.
            </h2>
            <p className="mt-3 text-sm leading-6 text-atlas-muted">
              Atlas combines recurring software, one-time digital products and clearly scoped technology services under one US merchant.
            </p>

            <div className="mt-6 space-y-3">
              {factualHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-atlas-border bg-atlas-void/45 p-3.5 transition-colors hover:border-atlas-blue/35"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-atlas-blue/10 text-atlas-cyan">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-5 text-atlas-muted">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/company-information"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-atlas-cyan transition-colors hover:text-white"
            >
              Company information <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
