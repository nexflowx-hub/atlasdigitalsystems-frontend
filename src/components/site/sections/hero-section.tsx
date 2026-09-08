"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { GlobeHeroVisual } from "@/components/site/globe-visual";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n/context";

export function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden border-b border-atlas-border">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-atlas-void/0 via-atlas-void/40 to-atlas-void" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-atlas-blue/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-atlas-cyan/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        {/* Left: copy */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-atlas-blue/30 bg-atlas-blue/5 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 text-atlas-cyan" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("hero.headline1")}
            <br />
            <span className="text-glow text-atlas-blue">{t("hero.headline2")}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-atlas-muted sm:text-lg">
            {t("hero.supporting")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow">
              <Link href="/products">
                {t("hero.ctaPrimary")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-atlas-border bg-transparent text-white hover:bg-atlas-blue/10">
              <Link href="/business">{t("hero.ctaSecondary")}</Link>
            </Button>
          </div>

          {/* Right-side copy highlights (below hero copy on mobile) */}
          <div className="mt-10">
            <p className="font-display text-lg font-bold text-white">
              {t("hero.rightTitle")}
            </p>
            <ul className="mt-4 space-y-3">
              <Highlight title={t("hero.highlight1Title")} desc={t("hero.highlight1Desc")} />
              <Highlight title={t("hero.highlight2Title")} desc={t("hero.highlight2Desc")} />
              <Highlight title={t("hero.highlight3Title")} desc={t("hero.highlight3Desc")} />
            </ul>
          </div>
        </div>

        {/* Right: globe visual */}
        <div className="relative">
          <GlobeHeroVisual />
        </div>
      </div>
    </section>
  );
}

function Highlight({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-atlas-blue" />
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-sm text-atlas-muted">{desc}</p>
      </div>
    </li>
  );
}
