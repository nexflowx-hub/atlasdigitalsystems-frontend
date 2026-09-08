"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { currencies, defaultCurrency, formatPrice, type CurrencyCode } from "@/config/payments";

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  format: (amount: number, currency?: CurrencyCode) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);
const STORAGE_KEY = "atlas-currency";
const CHANGE_EVENT = "atlas-currency-change";

function detectFromBrowser(): CurrencyCode {
  if (typeof window === "undefined") return defaultCurrency;
  const locale = window.navigator.language || "";
  if (locale.startsWith("pt-BR")) return "BRL";
  if (locale.startsWith("en-GB")) return "GBP";
  if (["fr", "de", "es", "it", "pt-PT"].some((l) => locale.startsWith(l))) return "EUR";
  return defaultCurrency;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): CurrencyCode {
  if (typeof window === "undefined") return defaultCurrency;
  const stored = window.localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
  if (stored && currencies[stored]) return stored;
  return detectFromBrowser();
}

function getServerSnapshot(): CurrencyCode {
  return defaultCurrency;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const currency = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setCurrency = useCallback((next: CurrencyCode) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      window.dispatchEvent(new Event(CHANGE_EVENT));
    }
  }, []);

  const format = useCallback(
    (amount: number, cur?: CurrencyCode) => formatPrice(amount, cur ?? currency),
    [currency]
  );

  const value = useMemo(() => ({ currency, setCurrency, format }), [currency, setCurrency, format]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
