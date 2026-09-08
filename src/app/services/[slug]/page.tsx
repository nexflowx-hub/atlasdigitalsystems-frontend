import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ArrowLeft, Phone, Mail } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug } from "@/data/services";
import { company } from "@/config/company";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: service.name,
    description: service.tagline,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

function usd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const isContactSales = service.status === "contact-sales";
  const ctaLabel = isContactSales ? "Request Proposal" : (service.ctaLabel ?? "Get Started");
  const ctaHref = "/contact";

  // JSON-LD Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: company.legalName,
      url: company.siteUrl,
    },
    serviceType: service.category,
    areaServed: "Global",
    offers: service.startingPrice
      ? {
          "@type": "Offer",
          price: service.startingPrice.USD,
          priceCurrency: "USD",
          availability: isContactSales
            ? "https://schema.org/PreOrder"
            : "https://schema.org/InStock",
        }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow={service.category.toUpperCase()}
        title={service.name}
        subtitle={service.tagline}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {isContactSales ? (
            <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-300">
              Contact Sales
            </Badge>
          ) : (
            <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-300">
              Active
            </Badge>
          )}
          {service.startingPrice && (
            <span className="text-sm text-atlas-muted">
              Starting at{" "}
              <span className="font-display text-base font-bold text-white">
                {usd(service.startingPrice.USD ?? 0)}
              </span>
            </span>
          )}
        </div>
      </PageHeader>

      {/* Overview */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="OVERVIEW"
              title="What this engagement covers."
            />
            <p className="mt-5 text-sm leading-relaxed text-atlas-muted sm:text-base">
              {service.longDescription ?? service.description}
            </p>
            <h2 className="mt-8 font-display text-lg font-semibold text-white">Scope</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.scope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-atlas-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-atlas-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Side card */}
          <aside className="lg:col-span-5">
            <div className="card-atlas sticky top-24 rounded-xl p-6">
              <h3 className="font-display text-base font-semibold text-white">Engagement details</h3>
              <dl className="mt-4 space-y-4 text-sm">
                {service.startingPrice && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-atlas-muted">Starting price</dt>
                    <dd className="mt-1 font-display text-2xl font-bold text-white">
                      {usd(service.startingPrice.USD ?? 0)}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs uppercase tracking-wider text-atlas-muted">Delivery</dt>
                  <dd className="mt-1 text-atlas-white/85">{service.delivery}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-atlas-muted">Category</dt>
                  <dd className="mt-1 text-atlas-white/85">{service.category}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-atlas-muted">Status</dt>
                  <dd className="mt-1 text-atlas-white/85">
                    {isContactSales ? "Contact sales to scope" : "Active"}
                  </dd>
                </div>
              </dl>
              <Button asChild className="mt-6 w-full bg-atlas-blue text-white hover:bg-atlas-blue-bright">
                <Link href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button asChild variant="outline" size="sm" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                  <a href={`mailto:${company.emails.sales}`}>
                    <Mail className="mr-1.5 h-3.5 w-3.5" />
                    Sales
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                  <a href={`tel:${company.phone.e164}`}>
                    <Phone className="mr-1.5 h-3.5 w-3.5" />
                    Call
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </PageSection>

      {/* Process */}
      <PageSection>
        <SectionHeading
          eyebrow="PROCESS"
          title="How the engagement works."
          subtitle="A clear, four-step process — submit, scope, agree, deliver."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((p, i) => (
            <div key={p.step} className="card-atlas rounded-xl p-6">
              <span className="font-mono text-sm text-atlas-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-white">{p.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-atlas-muted">{p.detail}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Related services */}
      <PageSection bordered={false}>
        <SectionHeading eyebrow="MORE SERVICES" title="Related engagements." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 3)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-atlas group rounded-xl p-5"
              >
                <p className="text-xs uppercase tracking-wider text-atlas-muted">{s.category}</p>
                <h3 className="mt-2 font-display text-base font-semibold text-white">{s.name}</h3>
                <p className="mt-1 text-sm text-atlas-muted line-clamp-2">{s.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-atlas-cyan group-hover:text-white">
                  View
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
        </div>

        <div className="mt-10">
          <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All services
            </Link>
          </Button>
        </div>
      </PageSection>
    </>
  );
}
