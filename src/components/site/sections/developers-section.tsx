"use client";

import Link from "next/link";
import { ArrowRight, Code2, KeyRound, Boxes, Webhook, FileText, Activity, Lock } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/lib/i18n/context";

const devFeatures = [
  { icon: Code2, key: "api", desc: "Programmatic access to Atlas capabilities." },
  { icon: KeyRound, key: "auth", desc: "API keys and secure authentication." },
  { icon: Boxes, key: "sdks", desc: "SDKs for popular languages." },
  { icon: Webhook, key: "webhooks", desc: "Real-time event delivery." },
  { icon: FileText, key: "docs", desc: "Guides, references and examples." },
  { icon: Activity, key: "status", desc: "Operational visibility." },
];

export function DevelopersSection() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden border-b border-atlas-border py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-atlas-blue/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2">
              <SectionHeading
                eyebrow={t("developers.eyebrow")}
                title={t("developers.title")}
                subtitle={t("developers.subtitle")}
              />
            </div>
            <div className="mt-6">
              <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
                {t("developers.earlyAccess")}
              </Badge>
            </div>
            <p className="mt-4 max-w-md text-sm text-atlas-muted">
              The Atlas API is in Early Access. Conceptual examples are clearly marked as Preview. No live endpoints are published until functionality exists.
            </p>
            <Link
              href="/developers"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white"
            >
              {t("developers.explore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Code preview card */}
          <div className="card-atlas relative overflow-hidden rounded-xl">
            <div className="flex items-center gap-2 border-b border-atlas-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-amber-500/60" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/60" />
              <span className="ml-2 font-mono text-xs text-atlas-muted">example.sh</span>
              <Badge variant="outline" className="ml-auto border-atlas-blue/30 text-atlas-cyan">Preview</Badge>
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

        {/* Feature grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {devFeatures.map((f) => (
            <div key={f.key} className="flex items-start gap-3 rounded-lg border border-atlas-border bg-atlas-card/50 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-atlas-blue/10 text-atlas-cyan">
                <f.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{t(`developers.${f.key}`)}</p>
                <p className="text-xs text-atlas-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
