import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "API Reference",
  description:
    "Atlas API reference teaser — Early Access. Examples are clearly marked as Preview and are not live endpoints.",
  alternates: { canonical: "/developers/api" },
};

const exampleEndpoints = [
  {
    method: "POST",
    path: "/v1/chat",
    desc: "Send a chat completion request (Preview — not a live endpoint).",
  },
  {
    method: "POST",
    path: "/v1/documents/analyze",
    desc: "Analyse a document and return structured insights (Preview — not a live endpoint).",
  },
  {
    method: "POST",
    path: "/v1/automate/workflows/run",
    desc: "Trigger a workflow run in Atlas Automate (Preview — not a live endpoint).",
  },
  {
    method: "GET",
    path: "/v1/data/datasets/:id",
    desc: "Retrieve a dataset by ID (Preview — not a live endpoint).",
  },
];

export default function DevelopersApiPage() {
  return (
    <>
      <PageHeader
        eyebrow="DEVELOPERS — API"
        title="API reference (Preview)."
        subtitle="The Atlas API reference is in Early Access. Endpoints below are conceptual examples — not live endpoints. They are clearly marked as Preview."
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
          eyebrow="EXAMPLE ENDPOINTS"
          title="Conceptual surface."
          subtitle="These endpoints illustrate the shape of the planned Atlas API. They are not live — do not integrate against them in production."
        />

        <div className="mt-10 overflow-hidden rounded-xl border border-atlas-border">
          <div className="flex items-center justify-between border-b border-atlas-border bg-atlas-card/60 px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-atlas-muted">
              Endpoints
            </p>
            <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
              Example — Preview (not a live endpoint)
            </Badge>
          </div>
          <ul className="divide-y divide-atlas-border">
            {exampleEndpoints.map((e) => (
              <li key={e.path} className="bg-atlas-void/30 px-5 py-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <span className="inline-flex w-fit items-center rounded-md border border-atlas-blue/40 bg-atlas-blue/10 px-2 py-0.5 font-mono text-xs font-semibold text-atlas-cyan">
                    {e.method}
                  </span>
                  <code className="font-mono text-sm text-white">{e.path}</code>
                  <span className="text-sm text-atlas-muted sm:ml-auto">{e.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      {/* Example request/response */}
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-base font-semibold text-white">Example request</h3>
            <Badge variant="outline" className="mt-2 border-amber-500/40 bg-amber-500/10 text-amber-300">
              Example — Preview (not a live endpoint)
            </Badge>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-atlas-border bg-atlas-void/60 p-4 font-mono text-xs leading-relaxed text-atlas-white/90">
              <code>{`curl https://api.atlasdigitalsystems.co/v1/chat \\
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
          <div>
            <h3 className="font-display text-base font-semibold text-white">Example response</h3>
            <Badge variant="outline" className="mt-2 border-amber-500/40 bg-amber-500/10 text-amber-300">
              Example — Preview (not a live endpoint)
            </Badge>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-atlas-border bg-atlas-void/60 p-4 font-mono text-xs leading-relaxed text-atlas-white/90">
              <code>{`{
  "id": "resp_01HABCDEF",
  "object": "chat.completion",
  "created": 1737000000,
  "model": "atlas-business",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Summary: …"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 12,
    "completion_tokens": 48,
    "total_tokens": 60
  }
}`}</code>
            </pre>
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection bordered={false}>
        <div className="rounded-2xl border border-atlas-border bg-atlas-card/40 p-8 text-center lg:p-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Build with Atlas.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            Read the documentation or explore integrations. To request Early Access when slots open, contact the developers team.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
              <Link href="/developers/docs">
                Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href="/developers/integrations">Integrations</Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
