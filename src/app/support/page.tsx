import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Boxes,
  MonitorSmartphone,
  ShoppingCart,
  CreditCard,
  Receipt,
  RefreshCw,
  Download,
  RotateCcw,
  ShieldCheck,
  Mail,
  Phone,
} from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Support",
  description:
    "ATLAS DIGITAL SYSTEMS support center — getting started, products, software, orders, payments, billing, subscriptions, downloads, refunds, security and contact.",
  alternates: { canonical: "/support" },
};

const supportCategories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Account setup, first steps and choosing the right product.",
    href: "/faq",
    cta: "Read FAQ",
  },
  {
    icon: Boxes,
    title: "Products",
    description: "Questions about specific Atlas products and what they include.",
    href: "/products",
    cta: "Browse products",
  },
  {
    icon: MonitorSmartphone,
    title: "Software",
    description: "SaaS subscriptions, access and workspace questions.",
    href: "/faq",
    cta: "Software FAQ",
  },
  {
    icon: ShoppingCart,
    title: "Orders",
    description: "Order status, receipts and purchase history.",
    href: "/contact",
    cta: "Contact support",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Payment methods, charges and the payment provider.",
    href: "/faq",
    cta: "Payments FAQ",
  },
  {
    icon: Receipt,
    title: "Billing",
    description: "Invoices, charges and billing questions.",
    href: "/contact",
    cta: "Contact billing",
  },
  {
    icon: RefreshCw,
    title: "Subscriptions",
    description: "Subscription management, cancellation and renewal.",
    href: "/faq",
    cta: "Subscriptions FAQ",
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Accessing digital products you have purchased.",
    href: "/faq",
    cta: "Digital Products FAQ",
  },
  {
    icon: RotateCcw,
    title: "Refunds",
    description: "Refund eligibility and how to request a refund.",
    href: "/faq",
    cta: "Refunds FAQ",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Payment security, account security and reporting issues.",
    href: "/security",
    cta: "Security overview",
  },
  {
    icon: Mail,
    title: "Contact",
    description: "Reach the right team — sales, support, billing and more.",
    href: "/contact",
    cta: "Open contact",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="SUPPORT"
        title="How can we help?"
        subtitle="Browse support topics, read the FAQ, or contact our team directly. We will respond via email."
      />

      {/* Quick contact */}
      <PageSection>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card-atlas flex items-center gap-4 rounded-xl p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
              <Mail className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-atlas-muted">Email support</p>
              <a
                href={`mailto:${company.emails.support}`}
                className="block font-display text-base font-semibold text-white hover:text-atlas-cyan"
              >
                {company.emails.support}
              </a>
            </div>
          </div>
          <div className="card-atlas flex items-center gap-4 rounded-xl p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
              <Phone className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-atlas-muted">Phone</p>
              <a
                href={`tel:${company.phone.e164}`}
                className="block font-display text-base font-semibold text-white hover:text-atlas-cyan"
              >
                {company.phone.display} — {company.phone.note}
              </a>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Support topics grid */}
      <PageSection bordered={false}>
        <SectionHeading
          eyebrow="TOPICS"
          title="Browse by topic."
          subtitle="Each topic links to the most relevant resource — FAQ, contact, or product page."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportCategories.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="card-atlas group flex flex-col rounded-xl p-5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                  <c.icon className="h-4 w-4" />
                </span>
                <ArrowRight className="h-4 w-4 text-atlas-muted transition-transform group-hover:translate-x-1 group-hover:text-atlas-cyan" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-atlas-muted">
                {c.description}
              </p>
              <p className="mt-3 text-xs font-medium text-atlas-cyan group-hover:text-white">
                {c.cta}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-atlas-border bg-atlas-card/40 p-8 text-center lg:p-12">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Still need help?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            Read the FAQ, contact the right department, or send us a message through the contact form.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
              <Link href="/contact">
                Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href="/faq">Read FAQ</Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
