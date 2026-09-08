"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Rocket, TrendingUp, Settings2, Database, Megaphone, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n/context";

const cards = [
  { icon: Rocket, key: "startBusiness" },
  { icon: TrendingUp, key: "improveSales" },
  { icon: Settings2, key: "automateOperations" },
  { icon: Database, key: "analyseData" },
  { icon: Megaphone, key: "buildMarketing" },
  { icon: Code2, key: "buildSoftware" },
];

export function BusinessSection() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden border-b border-atlas-border py-16 lg:py-24">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-atlas-blue/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Left: visual panel with office photo */}
          <div className="relative">
            <div className="card-atlas relative h-full min-h-[360px] overflow-hidden rounded-2xl">
              <Image
                src="/images/business-office.png"
                alt="Modern dark technology office conference room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              {/* Dark gradient overlays for legibility + brand blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-atlas-void via-atlas-void/50 to-atlas-void/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-atlas-void/60 to-transparent" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-atlas-blue/20 blur-3xl" />

              <div className="relative flex h-full flex-col justify-end p-8 lg:p-10">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-atlas-blue/30 bg-atlas-blue/10 px-3 py-1 backdrop-blur-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
                    {t("business.eyebrow")}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {t("business.title")}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-atlas-white/80">
                  {t("business.body")}
                </p>
                <Button asChild size="lg" className="mt-7 w-fit bg-white text-atlas-void hover:bg-atlas-white">
                  <Link href="/business">
                    {t("business.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: use case cards */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
              {t("usecases.eyebrow")}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              {t("usecases.title")}
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {cards.map((c) => (
                <Link
                  key={c.key}
                  href="/solutions/business"
                  className="card-atlas group flex items-center gap-3 rounded-xl p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-white">
                    {t(`usecases.${c.key}`)}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-atlas-muted transition-transform group-hover:translate-x-1 group-hover:text-atlas-cyan" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
