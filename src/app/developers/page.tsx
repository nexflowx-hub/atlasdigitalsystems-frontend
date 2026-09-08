import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  KeyRound,
  Boxes,
  Webhook,
  FileText,
  Activity,
} from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "The Atlas API is in Early Access. Conceptual examples are clearly marked as Preview. No live endpoints are published until functionality exists.",
  alternates: { canonical: "/developers" },
};

const devFeatures = [
  {
    icon: Code2,
    title: "Atlas API",
    desc: "Programmatic access to Atlas capabilities — conceptual interface.",
    href: "/developers/api",
  },
  {
    icon: KeyRound,
    title: "Authentication",
    desc: "API keys and secure authentication (conceptual).",
    href: "/developers/docs",
  },
  {
    icon: Boxes,
    title: "SDKs",
    desc: "SDKs for popular languages (planned).",
    href: "/developers/integrations",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    desc: "Real-time event delivery (planned).",
    href: "/developers/docs",
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Guides, references and examples (Preview).",
    href: "/developers/docs",
  },
  {
    icon: Activity,
    title: "Status",
    desc: "Operational visibility (planned).",
    href: "/developers",
  },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHeader
        eyebrow="DEVELOPERS"
        title="Build with the Atlas API."
        subtitle="Programmatic access to Atlas capabilities. The Atlas API is in Early Access — conceptual examples are clearly marked as Preview."
      >
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
            Early Access
          </Badge>
          <span className="text-xs text-atlas-muted">
            No live endpoints are published until functionality exists.
          </span>
        </div>
      </PageHeader>

      {/* Conceptual code block */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="EXAMPLE"
              title="A conceptual preview."
              subtitle="The example below illustrates the shape of a future Atlas API call. It is clearly marked as Preview and is not a live endpoint."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
                <Link href="/developers/api">
                  View API reference
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                <Link href="/developers/docs">Documentation</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="card-atlas relative overflow-hidden rounded-xl">
              <div className="flex items-center gap-2 border-b border-atlas-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-amber-500/60" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/60" />
                <span className="ml-2 font-mono text-xs text-atlas-muted">example.sh</span>
                <Badge variant="outline" className="ml-auto border-amber-500/40 bg-amber-500/10 text-amber-300">
                  Example — Preview (not a live endpoint)
                </Badge>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-atlas-white/90">
                <code>{`# Example — Preview (not a live endpoint)

curl https://api.atlasdigitalsystems.co/v1/chat \\
  -H "Authorization: Bearer $ATLAS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "atlas-business",
    "messages": [
      { "role": "user", "content": "Summarize this document" }
    ]
  }'`}</code>
              </pre>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Feature grid */}
      <PageSection>
        <SectionHeading
          eyebrow="PLATFORM"
          title="What the Atlas API will offer."
          subtitle="The platform is in Early Access. Items below describe the planned surface — not all features are available today."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {devFeatures.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="card-atlas group flex items-start gap-3 rounded-lg p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-atlas-blue/10 text-atlas-cyan">
                <f.icon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <ArrowRight className="h-4 w-4 text-atlas-muted transition-transform group-hover:translate-x-1 group-hover:text-atlas-cyan" />
                </div>
                <p className="mt-1 text-xs text-atlas-muted">{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </PageSection>

      {/* Status + Early Access note */}
      <PageSection bordered={false}>
        <div className="rounded-2xl border border-atlas-border bg-atlas-card/40 p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
                Early Access
              </Badge>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Status &amp; access
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
                The Atlas API is in Early Access. We do not publish live endpoints until the underlying functionality exists. To request access when slots open, contact the developers team.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Button asChild size="lg" variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                <a href="mailto:developers@atlasdigitalsystems.co">Request access</a>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
