"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Product } from "@/types/product";
import { categoryLabels, statusLabels } from "@/types/product";
import { useCurrency } from "@/lib/currency-context";
import { useCart } from "@/lib/cart-store";
import { useTranslations } from "@/lib/i18n/context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { currency, format } = useCurrency();
  const addItem = useCart((s) => s.addItem);
  const t = useTranslations();

  const price =
    product.plans?.find((p) => p.highlighted)?.price?.[currency] ??
    product.plans?.[0]?.price?.[currency] ??
    product.price?.[currency];

  const canBuy = product.status === "active";
  const isPreview = product.status === "preview" || product.status === "early-access";
  const isContact = product.status === "contact-sales" || product.billingModel === "contact";

  const handleAdd = () => {
    const planId = product.plans?.find((p) => p.highlighted)?.id ?? product.plans?.[0]?.id;
    addItem(product, { planId, currency, price });
  };

  return (
    <article
      className="card-atlas group relative flex flex-col overflow-hidden rounded-xl"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Visual top */}
      <div className="relative h-36 overflow-hidden border-b border-atlas-border bg-gradient-to-br from-atlas-deep to-atlas-void">
        <div className="absolute inset-0 bg-grid-fine opacity-40" />
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-atlas-blue/20 blur-2xl" />
        <div className="absolute left-4 top-4">
          <Badge
            variant="outline"
            className={cn(
              "border-atlas-blue/40 bg-atlas-blue/10 text-atlas-cyan",
              product.badge === "Service" && "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
              product.badge === "Digital Product" && "border-violet-500/40 bg-violet-500/10 text-violet-300",
              product.badge === "Bundle" && "border-amber-500/40 bg-amber-500/10 text-amber-300"
            )}
          >
            {product.badge ?? categoryLabels[product.category]}
          </Badge>
        </div>
        <div className="absolute bottom-3 right-4 flex items-center gap-1.5">
          {isPreview && (
            <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
              {statusLabels[product.status]}
            </span>
          )}
        </div>
        <Sparkles className="absolute bottom-3 left-4 h-5 w-5 text-atlas-blue/40" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-white">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-atlas-muted">
          {product.tagline}
        </p>

        <div className="mt-4 flex items-baseline gap-1.5">
          {price !== undefined && price > 0 ? (
            <>
              {product.billingModel === "subscription" && (
                <span className="text-xs text-atlas-muted">{t("common.from")}</span>
              )}
              <span className="font-display text-2xl font-bold text-white">{format(price)}</span>
              {product.billingModel === "subscription" && (
                <span className="text-sm text-atlas-muted">{t("common.month")}</span>
              )}
            </>
          ) : product.plans?.[0]?.price?.[currency] === 0 ? (
            <span className="font-display text-2xl font-bold text-white">Free</span>
          ) : (
            <span className="text-sm text-atlas-muted">{t("common.contactSales")}</span>
          )}
        </div>

        <div className="mt-5 flex flex-1 items-end gap-2">
          {canBuy && !isContact && (
            <Button
              size="sm"
              onClick={handleAdd}
              className="flex-1 bg-atlas-blue text-white hover:bg-atlas-blue-bright"
            >
              {product.billingModel === "subscription" ? t("featured.getStarted") : t("featured.addToCart")}
            </Button>
          )}
          {isContact && (
            <Button asChild size="sm" variant="outline" className="flex-1 border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href="/contact">{t("common.requestProposal")}</Link>
            </Button>
          )}
          {isPreview && (
            <Button asChild size="sm" variant="outline" className="flex-1 border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href={`/products/${product.slug}`}>{t("featured.learnMore")}</Link>
            </Button>
          )}
          <Button asChild size="sm" variant="ghost" className="text-atlas-muted hover:text-white">
            <Link href={`/products/${product.slug}`} aria-label={`Learn more about ${product.name}`}>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
