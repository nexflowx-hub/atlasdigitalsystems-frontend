"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { defaultLocale, type Locale } from "@/config/locales";
import { enUS } from "@/lib/i18n/messages/en-US";
import { ptBR } from "@/lib/i18n/messages/pt-BR";
import { ptPT } from "@/lib/i18n/messages/pt-PT";
import { es } from "@/lib/i18n/messages/es";
import { fr } from "@/lib/i18n/messages/fr";

type Messages = Record<string, string>;

const messageMap: Record<Locale, Messages> = {
  "en-US": enUS,
  "pt-BR": ptBR,
  "pt-PT": ptPT,
  es,
  fr,
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "atlas-locale";
const CHANGE_EVENT = "atlas-locale-change";

function detectFromBrowser(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const browser = window.navigator.language as Locale;
  if (messageMap[browser]) return browser;
  const base = browser.split("-")[0];
  if (base === "pt") return "pt-BR";
  if (base === "es") return "es";
  if (base === "fr") return "fr";
  return defaultLocale;
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

function getSnapshot(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && messageMap[stored]) return stored;
  return detectFromBrowser();
}

function getServerSnapshot(): Locale {
  return defaultLocale;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((next: Locale) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
      window.dispatchEvent(new Event(CHANGE_EVENT));
    }
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      const messages = messageMap[locale] ?? messageMap[defaultLocale];
      let value = messages[key] ?? messageMap[defaultLocale][key] ?? key;
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          value = value.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        }
      }
      return value;
    },
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

export function useTranslations() {
  return useI18n().t;
}
