import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, KeyRound, Gauge, AlertCircle, ListOrdered, Rocket } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProseContent } from "@/components/site/prose-content";

export const metadata: Metadata = {
  title: "Developer Documentation",
  description:
    "Conceptual developer documentation for the Atlas API. Early Access — clearly marked as Preview.",
  alternates: { canonical: "/developers/docs" },
};

export default function DevelopersDocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="DEVELOPERS — DOCS"
        title="Documentation (Preview)."
        subtitle="The Atlas API documentation is conceptual. Sections below describe the planned surface and are clearly marked as Preview."
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
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <nav className="sticky top-24 space-y-1 text-sm">
              {[
                { id: "getting-started", label: "Getting Started", icon: Rocket },
                { id: "authentication", label: "Authentication", icon: KeyRound },
                { id: "rate-limits", label: "Rate Limits", icon: Gauge },
                { id: "errors", label: "Errors", icon: AlertCircle },
                { id: "pagination", label: "Pagination", icon: ListOrdered },
              ].map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-atlas-muted transition-colors hover:bg-atlas-blue/10 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9">
            <ProseContent>
              <h2 id="getting-started">Getting Started</h2>
              <p>
                The Atlas API is in <strong>Early Access</strong>. The interface described here is conceptual and marked as Preview. No live endpoints are published until the underlying functionality exists.
              </p>
              <p>
                When the API becomes available, the typical workflow will be:
              </p>
              <ol>
                <li>Create an Atlas account.</li>
                <li>Generate an API key from the developer settings.</li>
                <li>Send authenticated requests to <code className="rounded bg-atlas-void px-1.5 py-0.5 font-mono text-xs text-atlas-cyan">api.atlasdigitalsystems.co/v1/…</code> (Preview — not a live endpoint).</li>
                <li>Handle responses and errors as described below.</li>
              </ol>

              <h2 id="authentication">Authentication</h2>
              <p>
                Authentication will use API keys sent as a bearer token in the <code className="rounded bg-atlas-void px-1.5 py-0.5 font-mono text-xs text-atlas-cyan">Authorization</code> header:
              </p>
              <pre className="overflow-x-auto rounded-lg border border-atlas-border bg-atlas-void/60 p-4 font-mono text-xs text-atlas-white/90"><code>{`# Example — Preview (not a live endpoint)
curl https://api.atlasdigitalsystems.co/v1/chat \\
  -H "Authorization: Bearer $ATLAS_API_KEY"`}</code></pre>
              <p>
                Treat API keys as secrets. Do not embed them in client-side code or commit them to source control. Use environment variables or a secrets manager.
              </p>

              <h2 id="rate-limits">Rate Limits</h2>
              <p>
                API requests will be subject to rate limits. Exact limits will be published when the API is live. When rate-limited, responses will return HTTP <code className="rounded bg-atlas-void px-1.5 py-0.5 font-mono text-xs text-atlas-cyan">429</code> with a <code className="rounded bg-atlas-void px-1.5 py-0.5 font-mono text-xs text-atlas-cyan">Retry-After</code> header.
              </p>

              <h2 id="errors">Errors</h2>
              <p>
                Errors will be returned with a consistent JSON shape and a meaningful HTTP status code. The planned shape:
              </p>
              <pre className="overflow-x-auto rounded-lg border border-atlas-border bg-atlas-void/60 p-4 font-mono text-xs text-atlas-white/90"><code>{`// Example — Preview (not a live endpoint)
{
  "error": {
    "type": "invalid_request_error",
    "message": "Missing required field: messages",
    "code": "missing_field"
  }
}`}</code></pre>

              <h2 id="pagination">Pagination</h2>
              <p>
                List endpoints will support cursor-based pagination. Responses will include <code className="rounded bg-atlas-void px-1.5 py-0.5 font-mono text-xs text-atlas-cyan">next_cursor</code> when more results are available. Pass it as the <code className="rounded bg-atlas-void px-1.5 py-0.5 font-mono text-xs text-atlas-cyan">cursor</code> query parameter on the next request.
              </p>
            </ProseContent>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
                <Link href="/developers/api">
                  View API reference
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                <Link href="/developers/integrations">Integrations</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
