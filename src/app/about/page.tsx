import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Brain,
  Workflow,
  Database,
  ShieldCheck,
  FlaskConical,
  Building2,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "ATLAS DIGITAL SYSTEMS, LLC develops software, SaaS, AI tools, automation systems, data products and digital technology solutions for businesses and professionals.",
  alternates: { canonical: "/about" },
};

const buildAreas = [
  {
    icon: Code2,
    title: "Software",
    body: "SaaS applications and business software built for practical, day-to-day work.",
  },
  {
    icon: Brain,
    title: "AI",
    body: "AI-powered workspaces, business assistants and prompt systems for real business tasks.",
  },
  {
    icon: Workflow,
    title: "Automation",
    body: "Workflow automation that connects tasks, processes and AI across the tools you use.",
  },
  {
    icon: Database,
    title: "Data",
    body: "Document and structured-data analysis that turns information into actionable insight.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT"
        title="Technology for practical work."
        subtitle={company.positioning.institutional}
      />

      {/* Who We Are */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="A Delaware technology company building practical systems."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-4 text-sm leading-relaxed text-atlas-muted sm:text-base">
              <p>
                {company.legalName} is a {company.entityType.toLowerCase()} registered in {company.jurisdiction}. We develop software, SaaS applications, artificial intelligence tools, automation systems, data products and digital technology solutions for businesses and professionals.
              </p>
              <p>
                Our work is organized across six divisions — AI, Software, Automate, Data, Cloud and Labs — that share one technology ecosystem. The result is a catalogue that spans recurring SaaS subscriptions, one-time digital products and productized professional services.
              </p>
              <p>
                We focus on practical outcomes: software that ships, automation that runs, AI that is reviewed by humans, and data analysis that supports decisions. We do not claim capabilities we have not built or partnerships we do not have.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* What We Build */}
      <PageSection>
        <SectionHeading
          eyebrow="WHAT WE BUILD"
          title="Four core technology areas."
          subtitle="Software, AI, automation and data — connected through a shared ecosystem."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {buildAreas.map((area) => (
            <div key={area.title} className="card-atlas rounded-xl p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                <area.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Our Approach */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="OUR APPROACH"
              title="Technology for practical work."
              subtitle="We build for outcomes, not novelty. Every product is designed to be used."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {[
                "Software and AI products that solve defined business problems.",
                "Automation designed around real workflows, not theoretical ones.",
                "Human review built into AI-assisted work — output is not treated as final.",
                "Clear scope on professional services, with agreed deliverables and milestones.",
                "Honest positioning: we describe what exists, not what might exist.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-cyan" />
                  <span className="text-sm leading-relaxed text-atlas-white/85 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      {/* Atlas Labs */}
      <PageSection>
        <div className="card-atlas relative overflow-hidden rounded-2xl p-8 lg:p-10">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-atlas-blue/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-atlas-cyan" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
                  Atlas Labs
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Experimental product area.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
                Atlas Labs is where we explore early-access tools, experiments and prototype products. Items here are clearly labelled as Preview or Early Access and should not be relied on for production work.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Button asChild size="lg" className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
                <Link href="/labs">
                  Explore Atlas Labs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Responsible AI */}
      <PageSection>
        <SectionHeading
          eyebrow="RESPONSIBLE AI"
          title="AI output is a draft, not a decision."
          subtitle="AI is integrated across our products. It is not a substitute for human review."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="card-atlas rounded-xl p-5">
            <h3 className="font-display text-base font-semibold text-white">
              Output may be incorrect
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
              AI-generated information may be incorrect, incomplete or outdated. Always verify output against original sources before relying on it.
            </p>
          </div>
          <div className="card-atlas rounded-xl p-5">
            <h3 className="font-display text-base font-semibold text-white">
              Needs human review
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
              Decisions based on AI output should be reviewed by a person who understands the context. Humans stay in the loop on consequential work.
            </p>
          </div>
          <div className="card-atlas rounded-xl p-5">
            <h3 className="font-display text-base font-semibold text-white">
              Not professional advice
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
              AI output is not legal, medical or investment advice. For professional decisions, consult a qualified professional.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Security */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
              Security by design.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-atlas-muted sm:text-base">
              We use TLS for transport, access controls for sensitive surfaces, environment-managed secrets and payment processing through our configured provider. We do not claim certifications we have not obtained.
            </p>
            <Button asChild variant="outline" className="mt-6 border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href="/security">
                Read security overview
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Transport", d: "TLS for data in transit." },
                { t: "Access control", d: "Scoped access on sensitive surfaces." },
                { t: "Secrets", d: "Environment-managed, not in code." },
                { t: "Payments", d: "Processed by our configured provider." },
              ].map((s) => (
                <div key={s.t} className="rounded-lg border border-atlas-border bg-atlas-card/50 p-4">
                  <p className="text-sm font-semibold text-white">{s.t}</p>
                  <p className="mt-1 text-xs text-atlas-muted">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Company Information */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="COMPANY INFORMATION"
              title="Entity and jurisdiction."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="card-atlas rounded-xl p-6">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-atlas-cyan" />
                <Badge variant="outline" className="border-atlas-blue/30 text-atlas-cyan">
                  Legal Entity
                </Badge>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {company.legalName}
              </h3>
              <p className="mt-1 text-sm text-atlas-muted">{company.entityType}</p>
              <dl className="mt-5 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-atlas-muted">Jurisdiction</dt>
                  <dd className="mt-1 text-atlas-white/85">{company.jurisdiction}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-atlas-muted">Domain</dt>
                  <dd className="mt-1 font-mono text-atlas-white/85">{company.domain}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-atlas-muted">Primary business</dt>
                  <dd className="mt-1 text-atlas-white/85">{company.primaryBusiness}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-atlas-muted">Telephone</dt>
                  <dd className="mt-1 text-atlas-white/85">
                    {company.phone.display} — {company.phone.note}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Contact */}
      <PageSection bordered={false}>
        <div className="rounded-2xl border border-atlas-border bg-atlas-card/40 p-8 text-center lg:p-12">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Talk to us.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            For general questions, sales, support, billing, privacy, security or developer inquiries — reach the right team directly.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
              <Link href="/contact">
                Contact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <a href={`mailto:${company.emails.general}`}>
                <Mail className="mr-2 h-4 w-4" />
                {company.emails.general}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <a href={`tel:${company.phone.e164}`}>
                <Phone className="mr-2 h-4 w-4" />
                {company.phone.display}
              </a>
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
