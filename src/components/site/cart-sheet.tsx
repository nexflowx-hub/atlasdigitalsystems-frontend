"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useCurrency } from "@/lib/currency-context";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "@/lib/i18n/context";

export function CartSheet() {
  const { items, isOpen, setOpen, removeItem, updateQuantity, total, count } = useCart();
  const { format } = useCurrency();
  const t = useTranslations();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-atlas-border bg-atlas-night p-0 text-atlas-white sm:max-w-md"
      >
        <SheetHeader className="border-b border-atlas-border px-5 py-4">
          <SheetTitle className="flex items-center gap-2 text-white">
            <ShoppingBag className="h-5 w-5 text-atlas-cyan" />
            {t("nav.cart")} {count() > 0 && `(${count()})`}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-atlas-blue/10">
              <ShoppingBag className="h-7 w-7 text-atlas-muted" />
            </div>
            <div>
              <p className="font-medium text-white">Your cart is empty</p>
              <p className="mt-1 text-sm text-atlas-muted">
                Explore our products to get started.
              </p>
            </div>
            <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright" onClick={() => setOpen(false)}>
              <Link href="/products">{t("nav.getStarted")}</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.productId + (item.planId ?? "")} className="flex gap-3">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-atlas-border bg-atlas-deep">
                      <ShoppingBag className="h-5 w-5 text-atlas-cyan" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.slug}`}
                          onClick={() => setOpen(false)}
                          className="text-sm font-semibold text-white hover:text-atlas-cyan"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.productId, item.planId)}
                          className="text-atlas-muted hover:text-red-400"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-atlas-muted">
                        {item.billingModel === "subscription" ? "Subscription" : "One-time"}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-1 rounded-md border border-atlas-border">
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 1, item.planId)}
                            className="flex h-7 w-7 items-center justify-center text-atlas-muted hover:text-white"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1, item.planId)}
                            className="flex h-7 w-7 items-center justify-center text-atlas-muted hover:text-white"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-white">
                          {format(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-atlas-border px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-atlas-muted">Subtotal</span>
                <span className="font-semibold text-white">{format(total())}</span>
              </div>
              <p className="mt-1 text-xs text-atlas-muted">
                Taxes calculated at checkout where applicable.
              </p>
              <Separator className="my-4 bg-atlas-border" />
              <Button asChild className="w-full bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow" onClick={() => setOpen(false)}>
                <Link href="/checkout">
                  Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="mt-2 w-full text-atlas-muted hover:text-white" onClick={() => setOpen(false)}>
                <Link href="/products">Continue shopping</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
