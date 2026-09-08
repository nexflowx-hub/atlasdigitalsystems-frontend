"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/site/product-card";
import { getFeaturedProducts } from "@/data/products";
import { useTranslations } from "@/lib/i18n/context";

export function FeaturedProductsSection() {
  const t = useTranslations();
  const featured = getFeaturedProducts();

  return (
    <section className="relative border-b border-atlas-border py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid-fine opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={t("featured.eyebrow")}
            title={t("featured.title")}
            subtitle={t("featured.subtitle")}
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan hover:text-white"
          >
            {t("featured.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
