import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Productized professional services from ATLAS DIGITAL SYSTEMS — Technology Consulting, AI Implementation, Automation, Software Development, Data Solutions and Technical Architecture.",
  alternates: { canonical: "/services" },
};

function usd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICES"
        title="Productized professional services."
        subtitle="Scoped engagements with clear starting prices, agreed deliverables and milestone-based delivery. Each service links to a detail page."
      />

      <PageSection bordered={false}>
        <SectionHeading
          eyebrow="CATALOGUE"
          title="All services."
          subtitle="Filter not needed — browse the full catalogue. Click any card for scope, process and CTA."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const isContactSales = s.status === "contact-sales";
            const cta = isContactSales ? "Request Proposal" : s.ctaLabel ?? "Get Started";
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-atlas group flex flex-col rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                    {s.category}
                  </Badge>
                  {isContactSales ? (
                    <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
                      Contact Sales
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-300">
                      Active
                    </Badge>
                  )}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-atlas-muted">
                  {s.tagline}
                </p>
                <div className="mt-5 flex items-baseline gap-2">
                  {s.startingPrice ? (
                    <>
                      <span className="text-xs text-atlas-muted">Starting at</span>
                      <span className="font-display text-2xl font-bold text-white">
                        {usd(s.startingPrice.USD ?? 0)}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm text-atlas-muted">Contact for pricing</span>
                  )}
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan group-hover:text-white">
                  {cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-atlas-border bg-atlas-card/40 p-6">
          <div>
            <h2 className="font-display text-xl font-bold text-white">
              Not sure which service you need?
            </h2>
            <p className="mt-1 text-sm text-atlas-muted">
              Talk to our team — we will recommend the right engagement for your goals.
            </p>
          </div>
          <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
            <Link href="/contact">
              Talk to us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageSection>
    </>
  );
}
