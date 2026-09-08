import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Atlas solutions — practical technology for Business, Startups, Marketing, Sales, Operations, Data, Software and Teams.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="SOLUTIONS"
        title="Solutions for real business outcomes."
        subtitle="Atlas products and services organized around what you are trying to achieve — not abstract categories."
      />

      <PageSection bordered={false}>
        <SectionHeading
          eyebrow="ALL SOLUTIONS"
          title="Browse by goal."
          subtitle="Each solution links to a detail page with outcomes, related products and services."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="card-atlas group flex flex-col rounded-xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                  <s.icon className="h-5 w-5" />
                </span>
                <Badge variant="outline" className="border-atlas-blue/30 text-atlas-cyan">
                  {s.name}
                </Badge>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {s.headline}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-atlas-muted">
                {s.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {s.outcomes.map((o) => (
                  <li key={o} className="text-xs text-atlas-white/70">
                    • {o}
                  </li>
                ))}
              </ul>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan group-hover:text-white">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-atlas-border bg-atlas-card/40 p-6">
          <div>
            <h2 className="font-display text-xl font-bold text-white">
              Need a custom combination?
            </h2>
            <p className="mt-1 text-sm text-atlas-muted">
              Talk to our team — we will combine products and services around your goals.
            </p>
          </div>
          <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
            <Link href="/business">
              For business
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageSection>
    </>
  );
}
