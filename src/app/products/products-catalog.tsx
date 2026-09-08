"use client";

import { useMemo, useState } from "react";
import { PackageSearch } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProductCard } from "@/components/site/product-card";
import { useTranslations } from "@/lib/i18n/context";
import { useCurrency } from "@/lib/currency-context";
import { products } from "@/data/products";
import type { Product, ProductCategory } from "@/types/product";
import type { CurrencyCode } from "@/config/payments";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type FilterKey = "all" | ProductCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI" },
  { key: "software", label: "Software" },
  { key: "automation", label: "Automation" },
  { key: "data", label: "Data" },
  { key: "digital", label: "Digital Products" },
  { key: "service", label: "Services" },
  { key: "bundle", label: "Bundles" },
  { key: "saas", label: "SaaS" },
];

type SortKey = "featured" | "newest" | "price-asc" | "price-desc" | "alpha";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "newest", label: "Newest" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "alpha", label: "Alphabetical" },
];

function resolvePrice(product: Product, currency: CurrencyCode): number {
  const planPrice =
    product.plans?.find((p) => p.highlighted)?.price?.[currency] ??
    product.plans?.[0]?.price?.[currency];
  return planPrice ?? product.price?.[currency] ?? 0;
}

export function ProductsCatalog() {
  const t = useTranslations();
  const { currency } = useCurrency();
  const [active, setActive] = useState<FilterKey>("all");
  const [sort, setSort] = useState<SortKey>("featured");

  const visibleProducts = useMemo(() => {
    const list: Product[] =
      active === "all"
        ? [...products]
        : products.filter((p) => p.category === active);

    switch (sort) {
      case "featured":
        list.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (a.sort ?? 99) - (b.sort ?? 99);
        });
        break;
      case "newest":
        // Higher sort field = more recently added to the catalogue.
        list.sort((a, b) => (b.sort ?? 0) - (a.sort ?? 0));
        break;
      case "price-asc":
        list.sort((a, b) => resolvePrice(a, currency) - resolvePrice(b, currency));
        break;
      case "price-desc":
        list.sort((a, b) => resolvePrice(b, currency) - resolvePrice(a, currency));
        break;
      case "alpha":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return list;
  }, [active, sort, currency]);

  return (
    <>
      <PageHeader
        eyebrow="CATALOGUE"
        title="Products"
        subtitle="Software, AI, automation, data, digital products and services."
      />

      <PageSection>
        {/* Filter + sort bar */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Product categories"
          >
            {FILTERS.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f.key)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "border-atlas-blue bg-atlas-blue text-white"
                      : "border-atlas-border text-atlas-muted hover:border-atlas-blue/50 hover:text-white"
                  )}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-atlas-muted sm:inline">
              Sort by
            </span>
            <Select
              value={sort}
              onValueChange={(v) => setSort(v as SortKey)}
            >
              <SelectTrigger
                aria-label="Sort products"
                className="h-9 w-full border-atlas-border bg-atlas-card text-sm text-white sm:w-[220px]"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-atlas-border bg-atlas-card text-white">
                {SORTS.map((s) => (
                  <SelectItem key={s.key} value={s.key}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Result count */}
        <p className="mt-6 text-sm text-atlas-muted" aria-live="polite">
          {visibleProducts.length}{" "}
          {visibleProducts.length === 1 ? "product" : "products"}
        </p>

        {/* Product grid */}
        {visibleProducts.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-atlas-border bg-atlas-card/50 p-12 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-atlas-blue/10 text-atlas-cyan">
              <PackageSearch className="h-6 w-6" />
            </span>
            <p className="font-medium text-white">{t("common.empty")}</p>
            <p className="text-sm text-atlas-muted">
              Try a different category or sort option.
            </p>
          </div>
        )}
      </PageSection>
    </>
  );
}
