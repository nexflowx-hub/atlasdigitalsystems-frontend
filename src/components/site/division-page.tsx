import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/product-card";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

export type DivisionSection = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
};

export type DivisionPageProps = {
  divisionKey: string;
  divisionName: string;
  verb: string;
  description: string;
  eyebrow: string;
  earlyAccess?: boolean;
  experimental?: boolean;
  sections: DivisionSection[];
  cta?: {
    title: string;
    body: string;
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  cloudNote?: string;
  labsNote?: string;
};

export function DivisionPage({
  divisionName,
  verb,
  description,
  eyebrow,
  earlyAccess,
  experimental,
  sections,
  cta,
  cloudNote,
  labsNote,
  divisionKey,
}: DivisionPageProps) {
  const related = products.filter((p) => p.division === divisionKey);

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={`${divisionName}. ${verb}`} subtitle={description}>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {earlyAccess && (
            <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
              Early Access
            </Badge>
          )}
          {experimental && (
            <Badge variant="outline" className="border-violet-500/40 bg-violet-500/10 text-violet-300">
              Experimental
            </Badge>
          )}
        </div>
      </PageHeader>

      {/* Sections */}
      {sections.map((s, i) => (
        <PageSection key={s.title}>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
                  {s.eyebrow}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-atlas-muted sm:text-base">
                {s.body}
              </p>
              {s.bullets && (
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-atlas-white/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="lg:col-span-7">
              {i === 0 && cloudNote && (
                <div className="rounded-xl border border-atlas-border bg-atlas-card/40 p-5">
                  <p className="text-sm leading-relaxed text-atlas-muted">
                    <span className="font-semibold text-white">Note on positioning:</span>{" "}
                    {cloudNote}
                  </p>
                </div>
              )}
              {i === 0 && labsNote && (
                <div className="rounded-xl border border-violet-500/30 bg-violet-500/5 p-5">
                  <p className="text-sm leading-relaxed text-atlas-muted">
                    <span className="font-semibold text-white">Experimental area:</span>{" "}
                    {labsNote}
                  </p>
                </div>
              )}
              {/* Show related products only on the first section's right column for visual consistency */}
              {i === 0 && related.length > 0 && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {related.slice(0, 4).map((p) => (
                    <DivisionProductMini key={p.slug} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </PageSection>
      ))}

      {/* All related products */}
      {related.length > 0 && (
        <PageSection>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="PRODUCTS"
              title={`Products in ${divisionName}.`}
              subtitle="Browse all products from this division."
            />
            <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href="/products">All products</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </PageSection>
      )}

      {/* CTA */}
      {cta && (
        <PageSection bordered={false}>
          <div className="rounded-2xl border border-atlas-border bg-atlas-card/40 p-8 text-center lg:p-12">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
              {cta.body}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {cta.primary && (
                <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
                  <Link href={cta.primary.href}>
                    {cta.primary.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {cta.secondary && (
                <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                  <Link href={cta.secondary.href}>{cta.secondary.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </PageSection>
      )}
    </>
  );
}

function DivisionProductMini({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card-atlas group flex flex-col rounded-xl p-4"
    >
      <div className="flex items-center justify-between">
        <Badge variant="outline" className="border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
          {product.badge ?? product.category}
        </Badge>
        <ArrowRight className="h-4 w-4 text-atlas-muted transition-transform group-hover:translate-x-1 group-hover:text-atlas-cyan" />
      </div>
      <h3 className="mt-3 font-display text-base font-bold text-white">{product.name}</h3>
      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-atlas-muted">
        {product.tagline}
      </p>
    </Link>
  );
}
