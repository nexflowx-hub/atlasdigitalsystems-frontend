"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useCurrency } from "@/lib/currency-context";
import { useTranslations } from "@/lib/i18n/context";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, count } = useCart();
  const { format } = useCurrency();
  const t = useTranslations();

  return (
    <>
      <PageHeader
        eyebrow={t("nav.cart") || "CART"}
        title="Your cart"
        subtitle="Review the items in your cart before continuing to secure checkout."
      />

      <PageSection bordered={false} className="py-12 lg:py-16">
        {items.length === 0 ? (
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-6 rounded-2xl border border-atlas-border bg-atlas-card/40 p-10 text-center sm:p-14">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-atlas-blue/10 atlas-glow">
              <ShoppingBag className="h-9 w-9 text-atlas-cyan" />
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-white">
                Your cart is empty
              </h2>
              <p className="text-sm leading-relaxed text-atlas-muted">
                Explore our software, SaaS, AI and digital products to find
                practical systems for your business.
              </p>
            </div>
            <Button
              asChild
              className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
            >
              <Link href="/products">
                Explore products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-10">
            {/* Items list */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-white">
                  Items ({count()})
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-atlas-muted hover:text-white"
                  onClick={() => useCart.getState().clear()}
                >
                  Clear cart
                </Button>
              </div>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item.productId + (item.planId ?? "")}
                    className="card-atlas flex flex-col gap-4 rounded-xl p-4 sm:flex-row sm:items-center sm:p-5"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-atlas-border bg-atlas-deep">
                      <ShoppingBag className="h-6 w-6 text-atlas-cyan" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          href={`/products/${item.slug}`}
                          className="text-base font-semibold text-white hover:text-atlas-cyan"
                        >
                          {item.name}
                        </Link>
                        <Badge
                          variant="outline"
                          className="border-atlas-border text-atlas-muted"
                        >
                          {item.billingModel === "subscription"
                            ? "Subscription"
                            : "One-time"}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-atlas-muted">
                        {item.billingModel === "subscription"
                          ? "Billed recurrently until cancelled."
                          : "Single payment, digital delivery."}
                      </p>
                      <p className="mt-1 text-xs text-atlas-muted">
                        Currency: {item.currency}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                      <div className="flex items-center gap-1 rounded-md border border-atlas-border bg-atlas-night">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.quantity - 1,
                              item.planId
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center text-atlas-muted hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.quantity + 1,
                              item.planId
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center text-atlas-muted hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-bold text-white">
                          {format(item.price * item.quantity, item.currency)}
                        </p>
                        <p className="text-xs text-atlas-muted">
                          {format(item.price, item.currency)} each
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.productId, item.planId)}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-atlas-muted hover:bg-red-500/10 hover:text-red-400"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button asChild variant="ghost" className="text-atlas-muted hover:text-white">
                  <Link href="/products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue shopping
                  </Link>
                </Button>
              </div>
            </div>

            {/* Order summary */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="card-atlas rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-white">
                  Order summary
                </h3>
                <Separator className="my-4 bg-atlas-border" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-atlas-muted">Subtotal</span>
                    <span className="font-medium text-white">
                      {format(total())}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-atlas-muted">Taxes</span>
                    <span className="text-atlas-muted">
                      Calculated at checkout
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-atlas-muted">Delivery</span>
                    <span className="text-atlas-muted">Digital</span>
                  </div>
                </div>

                <Separator className="my-4 bg-atlas-border" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Total</span>
                  <span className="font-display text-2xl font-bold text-white">
                    {format(total())}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-atlas-muted">
                  Applicable taxes may be calculated during checkout depending
                  on product, customer location and applicable rules.
                </p>

                <Button
                  asChild
                  className="mt-6 w-full bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
                  size="lg"
                >
                  <Link href="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <div className="mt-5 flex items-start gap-2 rounded-md border border-atlas-border bg-atlas-night/60 p-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-atlas-cyan" />
                  <p className="text-xs leading-relaxed text-atlas-muted">
                    Payments are processed through our configured payment
                    provider. Atlas does not need to directly store complete
                    card details when Stripe Checkout is used.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </PageSection>
    </>
  );
}
