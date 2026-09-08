import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/lib/i18n/context";
import { CurrencyProvider } from "@/lib/currency-context";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CartSheet } from "@/components/site/cart-sheet";
import { WebChatWidget } from "@/components/site/webchat-widget";
import { company } from "@/config/company";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.brandName} — Software, AI & Automation`,
    template: `%s | ${company.brandName}`,
  },
  description: company.positioning.institutional,
  keywords: [
    "Atlas Digital Systems",
    "software",
    "SaaS",
    "AI",
    "automation",
    "data",
    "digital products",
    "technology",
    "Delaware",
    "United States",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  applicationName: company.brandName,
  category: "Technology",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "pt-BR": "/",
      "pt-PT": "/",
      es: "/",
      fr: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR", "pt_PT", "es_ES", "fr_FR"],
    url: company.siteUrl,
    siteName: company.brandName,
    title: `${company.brandName} — ${company.positioning.primary}`,
    description: company.positioning.supporting,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.brandName} — ${company.positioning.primary}`,
    description: company.positioning.supporting,
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${mono.variable} antialiased`}
      >
        <I18nProvider>
          <CurrencyProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <CartSheet />
              <WebChatWidget />
            </div>
            <Toaster />
            <SonnerToaster />
          </CurrencyProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
