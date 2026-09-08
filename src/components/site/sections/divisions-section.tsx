"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Brain, Code2, Workflow, Database, Cloud, FlaskConical } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { useTranslations } from "@/lib/i18n/context";
import { company } from "@/config/company";

const divisionMeta: Record<string, { icon: typeof Brain; desc: string }> = {
  ai: { icon: Brain, desc: "AI tools for practical business work." },
  software: { icon: Code2, desc: "SaaS and business applications." },
  automate: { icon: Workflow, desc: "Connect tasks, AI and business processes." },
  data: { icon: Database, desc: "Turn information into actionable insights." },
  cloud: { icon: Cloud, desc: "Technology designed for deployment and scale." },
  labs: { icon: FlaskConical, desc: "New products. Real possibilities." },
};

export function DivisionsSection() {
  const t = useTranslations();

  return (
    <section className="relative border-b border-atlas-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("divisions.eyebrow")}
          title={t("divisions.title")}
          subtitle={t("divisions.subtitle")}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {company.divisions.map((d, i) => {
            const meta = divisionMeta[d.key];
            const Icon = meta.icon;
            return (
              <Link
                key={d.key}
                href={d.href}
                className="card-atlas group relative flex flex-col overflow-hidden rounded-xl p-6"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-atlas-blue/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-atlas-muted">
                    {d.verb}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
                  {meta.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan">
                  {t("divisions.explore")}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
