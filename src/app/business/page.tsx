import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  ClipboardCheck,
  Brain,
  Workflow,
  Code2,
} from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { company } from "@/config/company";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "For Business",
  description:
    "Technology built around your operation — Technology Assessment, AI Business Setup, Automation Starter and Custom Software Sprint.",
  alternates: { canonical: "/business" },
};

function usd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

const offerings = [
  {
    icon: ClipboardCheck,
    serviceSlug: "technology-consulting",
    label: "Technology Assessment",
    priceNote: (usd: string) => `${usd}`,
  },
  {
    icon: Brain,
    serviceSlug: "ai-implementation",
    label: "AI Business Setup",
    priceNote: (usd: string) => `from ${usd}`,
  },
  {
    icon: Workflow,
    serviceSlug: "automation",
    label: "Automation Starter",
    priceNote: (usd: string) => `from ${usd}`,
  },
  {
    icon: Code2,
    serviceSlug: "software-development",
    label: "Custom Software Sprint",
    priceNote: (usd: string) => `from ${usd}`,
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHeader
        eyebrow="FOR BUSINESS"
        title="Technology built around your operation."
        subtitle="Productized professional services with clear scope and starting prices. Designed for teams that need practical results, not theoretical advice."
      />

      {/* Offerings grid */}
      <PageSection>
        <SectionHeading
          eyebrow="SERVICES"
          title="Four ways to start."
          subtitle="Each engagement is scoped, with agreed deliverables and milestones. CTA links to the service detail page."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {offerings.map((o) => {
            const service = services.find((s) => s.slug === o.serviceSlug);
            const price = service?.startingPrice?.USD;
            return (
              <Link
                key={o.serviceSlug}
                href={`/services/${o.serviceSlug}`}
                className="card-atlas group flex flex-col rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                    <o.icon className="h-5 w-5" />
                  </span>
                  <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-300">
                    Service
                  </Badge>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {o.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-atlas-muted">
                  {service?.description}
                </p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-xs text-atlas-muted">Starting price</span>
                  <span className="font-display text-2xl font-bold text-white">
                    {price !== undefined ? o.priceNote(usd(price)) : "Contact Sales"}
                  </span>
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan group-hover:text-white">
                  View service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </PageSection>

      {/* Process */}
      <PageSection>
        <SectionHeading
          eyebrow="HOW ENGAGEMENTS WORK"
          title="A clear, four-step process."
          subtitle="Most professional services follow the same shape — submit, scope, agree, deliver."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Submit", d: "Send your requirements and objectives through the contact form or by email." },
            { n: "02", t: "Scope", d: "We review and propose a scoped engagement with deliverables and timeline." },
            { n: "03", t: "Agree", d: "We agree on the proposal, milestones and acceptance criteria." },
            { n: "04", t: "Deliver", d: "We build, review and hand over the work — with documentation." },
          ].map((s) => (
            <div key={s.n} className="card-atlas rounded-xl p-6">
              <span className="font-mono text-sm text-atlas-cyan">{s.n}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-atlas-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection bordered={false}>
        <div className="card-atlas relative overflow-hidden rounded-2xl p-8 lg:p-12">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-atlas-blue/20 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Talk to our sales team.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
                Tell us about your operation. We will recommend the right service or product, with a clear scope and starting price.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
                  <a href={`mailto:${company.emails.sales}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Talk to Sales
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                  <a href={`tel:${company.phone.e164}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {company.phone.display}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
