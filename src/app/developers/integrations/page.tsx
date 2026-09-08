import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Webhook,
  Plug,
  Code2,
  GitBranch,
} from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Atlas integrations concept page — Early Access. Planned SDKs, webhooks and partner integrations are clearly marked as Preview.",
  alternates: { canonical: "/developers/integrations" },
};

const integrationConcepts = [
  {
    icon: Boxes,
    title: "SDKs",
    desc: "Planned SDKs for popular languages — JavaScript/TypeScript, Python and others.",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    desc: "Real-time event delivery for payment, automation and workspace events (planned).",
  },
  {
    icon: Plug,
    title: "Native integrations",
    desc: "Direct connections to common business tools (planned, not yet available).",
  },
  {
    icon: Code2,
    title: "REST API",
    desc: "Programmatic access to Atlas capabilities (Early Access — Preview).",
  },
  {
    icon: GitBranch,
    title: "Versioning",
    desc: "Stable versioning with deprecation notices when the API is live (planned).",
  },
];

export default function DevelopersIntegrationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="DEVELOPERS — INTEGRATIONS"
        title="Integrations (Preview)."
        subtitle="Atlas integrations are in Early Access. Items below describe the planned surface — they are not yet available and are clearly marked as Preview."
      >
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
            Early Access
          </Badge>
          <Badge variant="outline" className="border-atlas-blue/30 text-atlas-cyan">
            Preview
          </Badge>
        </div>
      </PageHeader>

      <PageSection>
        <SectionHeading
          eyebrow="PLANNED SURFACE"
          title="What we are building toward."
          subtitle="Integrations are conceptual. No live integrations or SDKs are published today."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrationConcepts.map((c) => (
            <div key={c.title} className="card-atlas rounded-xl p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                <c.icon className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Webhook example */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="WEBHOOKS"
              title="Conceptual webhook event."
              subtitle="When a payment is confirmed or a workflow completes, an event can be delivered to your endpoint. This shape is illustrative only."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="card-atlas relative overflow-hidden rounded-xl">
              <div className="flex items-center gap-2 border-b border-atlas-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-amber-500/60" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/60" />
                <span className="ml-2 font-mono text-xs text-atlas-muted">webhook.json</span>
                <Badge variant="outline" className="ml-auto border-amber-500/40 bg-amber-500/10 text-amber-300">
                  Example — Preview
                </Badge>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-atlas-white/90">
                <code>{`// Example — Preview (not a live endpoint)
{
  "id": "evt_01HABCDEF",
  "type": "payment.succeeded",
  "created": 1737000000,
  "data": {
    "object": {
      "id": "pi_123",
      "amount": 4900,
      "currency": "usd",
      "status": "succeeded"
    }
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection bordered={false}>
        <div className="rounded-2xl border border-atlas-border bg-atlas-card/40 p-8 text-center lg:p-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Be notified when integrations ship.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            To request Early Access or be notified when SDKs and webhooks become available, contact the developers team.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
              <Link href="/developers/docs">
                Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <a href="mailto:developers@atlasdigitalsystems.co">Contact developers</a>
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
