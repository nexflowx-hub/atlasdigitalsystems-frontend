"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, ShoppingBag, Menu, X, Globe } from "lucide-react";
import { AtlasLogo } from "@/components/site/atlas-logo";
import { mainNav } from "@/config/navigation";
import { locales } from "@/config/locales";
import { currencies } from "@/config/payments";
import { useI18n } from "@/lib/i18n/context";
import { useCurrency } from "@/lib/currency-context";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  const { t, locale, setLocale } = useI18n();
  const { currency, setCurrency } = useCurrency();
  const count = useCart((s) => s.count());
  const setOpen = useCart((s) => s.setOpen);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-atlas-border/60 bg-atlas-void/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: logo */}
        <Link href="/" className="flex items-center" aria-label="ATLAS DIGITAL SYSTEMS home">
          <AtlasLogo />
        </Link>

        {/* Center: desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((section) => (
            <DropdownMenu key={section.label}>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-atlas-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-blue">
                {t(`nav.${section.label.toLowerCase()}`)}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[340px] border-atlas-border bg-atlas-panel/95 p-2 text-atlas-white backdrop-blur-xl"
                sideOffset={8}
              >
                {section.items.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-atlas-blue/10 focus:bg-atlas-blue/10"
                    >
                      {item.icon && (
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-atlas-blue/10 text-atlas-cyan">
                          <item.icon className="h-4 w-4" />
                        </span>
                      )}
                      <span className="flex flex-col">
                        <span className="text-sm font-semibold text-white">{item.label}</span>
                        {item.description && (
                          <span className="text-xs text-atlas-muted">{item.description}</span>
                        )}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-1.5">
          {/* Search */}
          <button
            className="hidden h-9 w-9 items-center justify-center rounded-md text-atlas-white/70 transition-colors hover:bg-atlas-blue/10 hover:text-white sm:inline-flex"
            aria-label={t("nav.search")}
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          {/* Language / currency */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex h-9 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-atlas-white/70 transition-colors hover:bg-atlas-blue/10 hover:text-white">
              <Globe className="h-[18px] w-[18px]" />
              <span className="hidden md:inline">{locale}</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 border-atlas-border bg-atlas-panel/95 backdrop-blur-xl">
              <DropdownMenuLabel className="text-xs uppercase tracking-wider text-atlas-muted">
                Language
              </DropdownMenuLabel>
              {locales.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLocale(l.code)}
                  className={cn("cursor-pointer", locale === l.code && "bg-atlas-blue/10")}
                >
                  <span className="mr-2 text-xs font-mono text-atlas-cyan">{l.flag}</span>
                  <span className="text-sm">{l.nativeLabel}</span>
                  <span className="ml-auto text-xs text-atlas-muted">{l.code}</span>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator className="bg-atlas-border" />
              <DropdownMenuLabel className="text-xs uppercase tracking-wider text-atlas-muted">
                Currency
              </DropdownMenuLabel>
              {Object.values(currencies).map((c) => (
                <DropdownMenuItem
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={cn("cursor-pointer", currency === c.code && "bg-atlas-blue/10")}
                >
                  <span className="mr-2 font-mono text-atlas-cyan">{c.symbol}</span>
                  <span className="text-sm">{c.code}</span>
                  <span className="ml-auto text-xs text-atlas-muted">{c.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart */}
          <button
            onClick={() => setOpen(true)}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-atlas-white/70 transition-colors hover:bg-atlas-blue/10 hover:text-white"
            aria-label={t("nav.cart")}
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-atlas-blue px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>

          {/* CTA */}
          <Button asChild size="sm" className="hidden bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow sm:inline-flex">
            <Link href="/products">{t("nav.getStarted")}</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-atlas-white lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px] border-atlas-border bg-atlas-night p-0 text-atlas-white">
              <SheetHeader className="border-b border-atlas-border px-5 py-4">
                <SheetTitle className="flex items-center justify-between">
                  <AtlasLogo />
                  <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                    <X className="h-5 w-5 text-atlas-muted" />
                  </button>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 overflow-y-auto p-4">
                {mainNav.map((section) => (
                  <div key={section.label} className="mb-3">
                    <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-atlas-muted">
                      {section.label}
                    </p>
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-atlas-white/80 hover:bg-atlas-blue/10 hover:text-white"
                      >
                        {item.icon && <item.icon className="h-4 w-4 text-atlas-cyan" />}
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="mt-2 border-t border-atlas-border pt-4">
                  <Button asChild className="w-full bg-atlas-blue text-white hover:bg-atlas-blue-bright">
                    <Link href="/products" onClick={() => setMobileOpen(false)}>
                      {t("nav.getStarted")}
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
