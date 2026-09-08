"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Product } from "@/types/product";
import type { CurrencyCode } from "@/config/payments";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  currency: CurrencyCode;
  billingModel: "one-time" | "subscription";
  planId?: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, opts?: { planId?: string; currency?: CurrencyCode; price?: number }) => void;
  removeItem: (productId: string, planId?: string) => void;
  updateQuantity: (productId: string, quantity: number, planId?: string) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
  total: () => number;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product, opts) => {
        const currency = opts?.currency ?? "USD";
        const planId = opts?.planId;
        const plan = product.plans?.find((p) => p.id === planId);
        const price = opts?.price ?? plan?.price?.[currency] ?? product.price?.[currency] ?? 0;
        const billingModel: "one-time" | "subscription" =
          product.billingModel === "subscription" ? "subscription" : "one-time";

        const existing = get().items.find(
          (i) => i.productId === product.id && i.planId === planId
        );
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.productId === product.id && i.planId === planId
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                productId: product.id,
                slug: product.slug,
                name: product.name,
                price,
                currency,
                billingModel,
                planId,
                quantity: 1,
              },
            ],
            isOpen: true,
          });
        }
      },
      removeItem: (productId, planId) =>
        set({
          items: get().items.filter(
            (i) => !(i.productId === productId && i.planId === planId)
          ),
        }),
      updateQuantity: (productId, quantity, planId) =>
        set({
          items: get()
            .items.map((i) =>
              i.productId === productId && i.planId === planId
                ? { ...i, quantity: Math.max(1, quantity) }
                : i
            )
            .filter((i) => i.quantity > 0),
        }),
      clear: () => set({ items: [] }),
      setOpen: (open) => set({ isOpen: open }),
      total: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: "atlas-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
