"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import type { Product } from "@/types/product";
import { categoryLabels } from "@/types/product";
import { useCart } from "@/lib/cart-store";
import { useCurrency } from "@/lib/currency-context";
import { useTranslations } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function billingLabel(model: Product["billingModel"]): string {
  switch (model) {
    case "one-time":
      return "One-time";
    case "subscription":
      return "Subscription";
    case "contact":
      return "Custom";
  }
}

export function ProductPurchaseCard({ product }: { product: Product }) {
  const t = useTranslations();
  const { currency, format } = useCurrency();
  const addItem = useCart((s) => s.addItem);

  const initialPlanId =
    product.plans?.find((p) => p.highlighted)?.id ?? product.plans?.[0]?.id;
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(
    initialPlanId
  );

  const isActive = product.status === "active";
  const isPreview =
    product.status === "preview" || product.status === "early-access";
  const isContact =
    product.status === "contact-sales" || product.billingModel === "contact";
  const isSubscription = product.billingModel === "subscription";

  const selectedPlan = product.plans?.find((p) => p.id === selectedPlanId);
  const displayPrice = isSubscription
    ? selectedPlan?.price?.[currency] ?? product.plans?.[0]?.price?.[currency]
    : product.price?.[currency];

  const handleAdd = () => {
    if (isSubscription && selectedPlan) {
      addItem(product, {
        planId: selectedPlan.id,
        currency,
        price: selectedPlan.price?.[currency],
      });
    } else {
      addItem(product, {
        currency,
        price: product.price?.[currency],
      });
    }
  };

  return (
    <div className="card-atlas rounded-xl p-6 lg:sticky lg:top-24">
      {/* Pricing */}
      {isSubscription && product.plans && product.plans.length > 0 ? (
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
            {t("common.billingFrequency")}
          </p>
          <div className="mt-3 space-y-2">
            {product.plans.map((plan) => {
              const planPrice = plan.price?.[currency];
              const isSelected = selectedPlanId === plan.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  aria-pressed={isSelected}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg border p-3 text-left transition-colors",
                    isSelected
                      ? "border-atlas-blue bg-atlas-blue/10"
                      : "border-atlas-border hover:border-atlas-blue/40"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                        isSelected
                          ? "border-atlas-blue bg-atlas-blue"
                          : "border-atlas-muted"
                      )}
                    >
                      {isSelected && <Check className="h-3 w-3 text-white" />}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {plan.name}
                      </p>
                      {plan.description && (
                        <p className="text-xs text-atlas-muted">
                          {plan.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    {planPrice !== undefined && planPrice > 0 ? (
                      <>
                        <p className="font-display text-base font-bold text-white">
                          {format(planPrice)}
                        </p>
                        {plan.period && (
                          <p className="text-xs text-atlas-muted">
                            {plan.period}
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="font-display text-base font-bold text-white">
                        Free
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
            {t("common.price")}
          </p>
          {displayPrice !== undefined ? (
            <p className="mt-2 font-display text-4xl font-bold text-white">
              {displayPrice === 0 ? "Free" : format(displayPrice)}
            </p>
          ) : (
            <p className="mt-2 text-sm text-atlas-muted">
              {t("common.contactSales")}
            </p>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="mt-6">
        {isActive && !isContact && (
          <Button
            onClick={handleAdd}
            className="w-full bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
          >
            {isSubscription
              ? t("common.getStarted")
              : t("featured.addToCart")}
          </Button>
        )}
        {isContact && (
          <Button
            asChild
            className="w-full bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
          >
            <Link href="/contact">{t("common.requestProposal")}</Link>
          </Button>
        )}
        {isPreview && (
          <Button
            asChild
            variant="outline"
            className="w-full border-atlas-border text-white hover:bg-atlas-blue/10"
          >
            <Link href="/contact">{t("common.learnMore")}</Link>
          </Button>
        )}
      </div>

      <Separator className="my-6 bg-atlas-border" />

      {/* Meta */}
      <dl className="space-y-3 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-atlas-muted">{t("common.productType")}</dt>
          <dd className="text-right text-white">
            {product.badge ?? categoryLabels[product.category]}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-atlas-muted">{t("common.billingFrequency")}</dt>
          <dd className="text-right text-white">
            {billingLabel(product.billingModel)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-atlas-muted">{t("common.delivery")}</dt>
          <dd className="text-right text-white">{product.deliveryModel}</dd>
        </div>
        {product.licence && (
          <div className="flex justify-between gap-4">
            <dt className="text-atlas-muted">{t("common.licence")}</dt>
            <dd className="text-right text-white">{product.licence}</dd>
          </div>
        )}
        {product.support && (
          <div className="flex justify-between gap-4">
            <dt className="text-atlas-muted">{t("common.support")}</dt>
            <dd className="text-right text-white">{product.support}</dd>
          </div>
        )}
        <div className="flex justify-between gap-4">
          <dt className="text-atlas-muted">{t("common.seller")}</dt>
          <dd className="text-right text-white">{product.seller}</dd>
        </div>
      </dl>

      {product.refundSummary && (
        <>
          <Separator className="my-6 bg-atlas-border" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
              {t("common.refundSummary")}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-atlas-muted">
              {product.refundSummary}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
