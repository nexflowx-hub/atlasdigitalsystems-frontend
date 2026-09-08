import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { solutions, getSolutionBySlug } from "@/data/solutions";
import { products, getProductBySlug } from "@/data/products";
import { services, getServiceBySlug } from "@/data/services";
import { ProductCard } from "@/components/site/product-card";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) {
    return { title: "Solution not found" };
  }
  return {
    title: `${solution.name} Solutions`,
    description: solution.description,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const relatedProducts = solution.relatedProductSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<ReturnType<typeof getProductBySlug>> => Boolean(p));
  const relatedServices = solution.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(s));

  void products;

  return (
    <>
      <PageHeader
        eyebrow="SOLUTION"
        title={solution.headline}
        subtitle={solution.description}
      >
        <div className="mt-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
            <solution.icon className="h-5 w-5" />
          </span>
          <Badge variant="outline" className="border-atlas-blue/30 text-atlas-cyan">
            {solution.name}
          </Badge>
        </div>
      </PageHeader>

      {/* Outcomes */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="OUTCOMES"
              title="What this solution delivers."
              subtitle="Practical outcomes you can plan around — not abstract value statements."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {solution.outcomes.map((o) => (
                <li key={o} className="card-atlas flex items-start gap-3 rounded-xl p-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-atlas-cyan" />
                  <span className="text-sm font-medium text-white">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <PageSection>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="RELATED PRODUCTS"
              title="Products for this solution."
            />
            <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href="/products">All products</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </PageSection>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <PageSection>
          <SectionHeading
            eyebrow="RELATED SERVICES"
            title="Services that pair well."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-atlas group rounded-xl p-5"
              >
                <p className="text-xs uppercase tracking-wider text-atlas-muted">{s.category}</p>
                <h3 className="mt-2 font-display text-base font-semibold text-white">{s.name}</h3>
                <p className="mt-1 text-sm text-atlas-muted line-clamp-2">{s.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-atlas-cyan group-hover:text-white">
                  View service
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </PageSection>
      )}

      {/* CTA */}
      <PageSection bordered={false}>
        <div className="rounded-2xl border border-atlas-border bg-atlas-card/40 p-8 text-center lg:p-12">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Apply this to your business.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            Talk to our team to scope a combination of products and services that fits your operation.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
              <Link href="/business">
                For business
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
        <div className="mt-8">
          <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
            <Link href="/solutions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All solutions
            </Link>
          </Button>
        </div>
      </PageSection>
    </>
  );
}
