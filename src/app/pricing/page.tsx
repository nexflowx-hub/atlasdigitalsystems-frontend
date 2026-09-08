import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Atlas SaaS subscriptions, one-time digital products and professional services. Tax calculated at checkout.",
  alternates: { canonical: "/pricing" },
};

// USD formatting helper (server-side, static).
function usd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export default function PricingPage() {
  const aiWorkspace = products.find((p) => p.slug === "atlas-ai-workspace");
  const automate = products.find((p) => p.slug === "atlas-automate");
  const dataWorkspace = products.find((p) => p.slug === "atlas-data-workspace");

  const digitalProducts = products.filter((p) => p.category === "digital" || p.category === "bundle");

  return (
    <>
      <PageHeader
        eyebrow="PRICING"
        title="Transparent pricing for every stage."
        subtitle="SaaS subscriptions, one-time digital products and productized services. Applicable taxes may be calculated during checkout."
      />

      {/* Atlas AI Workspace plans */}
      <PageSection>
        <SectionHeading
          eyebrow="SAAS — ATLAS AI WORKSPACE"
          title="Atlas AI Workspace plans."
          subtitle="AI-powered workspace for business writing, research, document analysis and productivity. Currently in Preview."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {(aiWorkspace?.plans ?? []).map((plan) => {
            const amount = plan.price?.USD ?? 0;
            return (
              <div
                key={plan.id}
                className={cn(
                  "card-atlas relative flex flex-col rounded-xl p-6",
                  plan.highlighted && "border-atlas-blue/60 atlas-glow"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-6 rounded-full bg-atlas-blue px-3 py-1 text-xs font-bold text-white">
                    Popular
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white">{plan.name}</h3>
                  <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
                    Preview
                  </Badge>
                </div>
                {plan.description && (
                  <p className="mt-1 text-sm text-atlas-muted">{plan.description}</p>
                )}
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-white">
                    {amount === 0 ? "Free" : usd(amount)}
                  </span>
                  {amount > 0 && plan.period && (
                    <span className="text-sm text-atlas-muted">{plan.period}</span>
                  )}
                </div>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-atlas-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-atlas-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={cn(
                    "mt-6",
                    plan.highlighted
                      ? "bg-atlas-blue text-white hover:bg-atlas-blue-bright"
                      : "border border-atlas-border bg-transparent text-white hover:bg-atlas-blue/10"
                  )}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <Link href={`/products/atlas-ai-workspace`}>
                    {amount === 0 ? "Get started free" : "Get started"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </PageSection>

      {/* Atlas Automate + Atlas Data (from) */}
      <PageSection>
        <SectionHeading
          eyebrow="SAAS — AUTOMATION & DATA"
          title="Other SaaS subscriptions."
          subtitle="Currently in Preview. Each subscription is billed monthly."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {[automate, dataWorkspace].filter(Boolean).map((p) => {
            const amount = p!.price?.USD ?? 0;
            return (
              <div key={p!.slug} className="card-atlas rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-white">{p!.name}</h3>
                  <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
                    Preview
                  </Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
                  {p!.tagline}
                </p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-xs text-atlas-muted">From</span>
                  <span className="font-display text-3xl font-bold text-white">{usd(amount)}</span>
                  <span className="text-sm text-atlas-muted">/month</span>
                </div>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {p!.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-atlas-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-atlas-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-atlas-blue text-white hover:bg-atlas-blue-bright">
                  <Link href={`/products/${p!.slug}`}>
                    Get started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </PageSection>

      {/* Atlas One (future bundle) */}
      <PageSection>
        <div className="card-atlas relative overflow-hidden rounded-2xl p-8 lg:p-10">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-atlas-blue/20 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-atlas-cyan" />
                <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
                  Coming Soon
                </Badge>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Atlas One — the all-in-one bundle.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
                A future subscription bundle that brings together Atlas AI Workspace, Atlas Automate and Atlas Data Workspace in a single plan. Not purchasable yet — join the waitlist to be notified.
              </p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-xs text-atlas-muted">Preview price</span>
                <span className="font-display text-3xl font-bold text-white">{usd(99)}</span>
                <span className="text-sm text-atlas-muted">/month</span>
              </div>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Button asChild size="lg" variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                <Link href="/contact">
                  Join waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-atlas-muted">
          Do not make unavailable packages purchasable. Atlas One is not available for purchase today.
        </p>
      </PageSection>

      {/* Digital products pricing table */}
      <PageSection bordered={false}>
        <SectionHeading
          eyebrow="DIGITAL PRODUCTS"
          title="One-time purchases."
          subtitle="Workflows, toolkits and systems delivered digitally. Prices in USD."
        />
        <div className="mt-10 overflow-hidden rounded-xl border border-atlas-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-atlas-card/60 text-xs uppercase tracking-wider text-atlas-muted">
              <tr>
                <th className="px-5 py-3 font-semibold">Product</th>
                <th className="hidden px-5 py-3 font-semibold sm:table-cell">Tagline</th>
                <th className="px-5 py-3 text-right font-semibold">Price (USD)</th>
                <th className="px-5 py-3 text-right font-semibold"> </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-atlas-border">
              {digitalProducts.map((p) => (
                <tr key={p.slug} className="bg-atlas-void/30 hover:bg-atlas-card/40">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-white">{p.name}</div>
                    <div className="text-xs text-atlas-muted sm:hidden">{p.tagline}</div>
                  </td>
                  <td className="hidden px-5 py-4 text-atlas-muted sm:table-cell">
                    {p.tagline}
                  </td>
                  <td className="px-5 py-4 text-right font-display font-bold text-white">
                    {usd(p.price?.USD ?? 0)}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Button asChild size="sm" variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                      <Link href={`/products/${p.slug}`}>View</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-atlas-muted">
          Applicable taxes may be calculated during checkout. Do not make unavailable packages purchasable.
        </p>
      </PageSection>
    </>
  );
}
