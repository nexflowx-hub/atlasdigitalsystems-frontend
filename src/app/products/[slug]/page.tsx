import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Package,
  FileText,
  LifeBuoy,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import {
  categoryLabels,
  statusLabels,
  statusVariants,
} from "@/types/product";
import type { FAQ } from "@/types/product";
import { company } from "@/config/company";
import { PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/site/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductPurchaseCard } from "./product-purchase-card";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Product not found",
      description: "The requested product could not be found.",
    };
  }

  const title = `${product.name} | ${company.brandName}`;
  const description = product.description;

  return {
    title: product.name,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `/products/${product.slug}`,
      type: "website",
      siteName: company.brandName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function buildProductSchema(productSlug: string) {
  const product = getProductBySlug(productSlug);
  if (!product) return null;

  const availability =
    product.status === "active"
      ? "https://schema.org/InStock"
      : product.status === "coming-soon"
        ? "https://schema.org/PreOrder"
        : "https://schema.org/PreOrder";

  const seller = {
    "@type": "Organization",
    name: company.legalName,
    url: company.siteUrl,
  };

  const offers =
    product.billingModel === "subscription" && product.plans?.length
      ? product.plans
          .filter((p) => p.price?.USD !== undefined)
          .map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            price: plan.price?.USD,
            priceCurrency: "USD",
            description: plan.description,
            availability,
            seller,
          }))
      : product.price?.USD !== undefined
        ? [
            {
              "@type": "Offer",
              price: product.price.USD,
              priceCurrency: "USD",
              availability,
              seller,
            },
          ]
        : [];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: categoryLabels[product.category],
    brand: { "@type": "Brand", name: company.brandName },
    seller,
    offers,
  };
}

function FAQList({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border-atlas-border"
        >
          <AccordionTrigger className="text-left text-sm font-semibold text-white hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-atlas-muted">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug);
  const schema = buildProductSchema(slug);

  const meta = [
    { icon: Truck, label: "Delivery", value: product.deliveryModel },
    ...(product.licence
      ? [{ icon: FileText, label: "Licence", value: product.licence }]
      : []),
    ...(product.support
      ? [{ icon: LifeBuoy, label: "Support", value: product.support }]
      : []),
    { icon: Package, label: "Seller", value: product.seller },
    {
      icon: ShieldCheck,
      label: "Refund summary",
      value: product.refundSummary,
    },
  ];

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-atlas-border">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-atlas-void/0 to-atlas-void" />
        <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-atlas-blue/10 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-atlas-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className="border-atlas-blue/40 bg-atlas-blue/10 text-atlas-cyan"
            >
              {product.badge ?? categoryLabels[product.category]}
            </Badge>
            <Badge variant={statusVariants[product.status]}>
              {statusLabels[product.status]}
            </Badge>
            <Badge variant="outline" className="border-atlas-border text-atlas-muted">
              {categoryLabels[product.category]}
            </Badge>
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-atlas-muted sm:text-lg">
            {product.tagline}
          </p>
        </div>
      </section>

      {/* Two-column body */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left column: description + features + includes */}
          <div className="lg:col-span-7">
            <div className="prose-atlas">
              <h2 className="font-display text-2xl font-bold text-white">
                Overview
              </h2>
              <p className="mt-3 text-base leading-relaxed text-atlas-muted">
                {product.description}
              </p>
              {product.longDescription && (
                <p className="mt-4 text-base leading-relaxed text-atlas-muted">
                  {product.longDescription}
                </p>
              )}
            </div>

            {product.features.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-2xl font-bold text-white">
                  Features
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 rounded-lg border border-atlas-border bg-atlas-card/50 p-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-atlas-blue/15 text-atlas-cyan">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.includes && product.includes.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-2xl font-bold text-white">
                  What&apos;s included
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-atlas-blue/15 text-atlas-cyan">
                        <Package className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-atlas-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mobile meta details */}
            <div className="mt-10 space-y-3 lg:hidden">
              {meta.map((m) => (
                <div
                  key={m.label}
                  className="flex items-start gap-3 rounded-lg border border-atlas-border bg-atlas-card/50 p-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-atlas-blue/10 text-atlas-cyan">
                    <m.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-atlas-muted">
                      {m.label}
                    </p>
                    <p className="text-sm text-white">{m.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: sticky purchase card */}
          <div className="lg:col-span-5">
            <ProductPurchaseCard product={product} />
          </div>
        </div>
      </PageSection>

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <PageSection>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently asked questions."
                subtitle={`Common questions about ${product.name}.`}
              />
            </div>
            <div className="lg:col-span-7">
              <FAQList faqs={product.faqs} />
            </div>
          </div>
        </PageSection>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <PageSection>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="RELATED"
              title="Related products"
              subtitle="More from the same category."
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white"
            >
              View all products <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </PageSection>
      )}

      {/* CTA strip */}
      <PageSection bordered={false}>
        <div className="relative overflow-hidden rounded-2xl border border-atlas-border bg-gradient-to-br from-atlas-deep to-atlas-void p-8 sm:p-10">
          <div className="absolute inset-0 bg-grid-fine opacity-30" />
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-atlas-blue/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to get started?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-atlas-muted">
                Explore the full catalogue or contact the {company.legalName}{" "}
                team for proposals and business inquiries.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow">
                <Link href="/products">Browse products</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-atlas-border text-white hover:bg-atlas-blue/10"
              >
                <Link href="/contact">Contact sales</Link>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="mt-10 bg-atlas-border" />
      </PageSection>
    </>
  );
}
