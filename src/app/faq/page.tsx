import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { FAQList } from "./faq-list";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Atlas products, payments, billing, refunds, services, security and privacy.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions."
        subtitle="Answers about Atlas products, payments, billing, refunds, services, security and privacy."
      />

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="HELP CENTER"
              title="Browse by category."
              subtitle="Filter the questions by topic, or read them all."
            />
            <p className="mt-6 text-sm text-atlas-muted">
              Can&apos;t find what you&apos;re looking for? Our support team is available by email and phone.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                <Link href="/support">
                  Support center
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
                <a href={`mailto:${company.emails.support}`}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Email support
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQList />
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection bordered={false}>
        <div className="rounded-2xl border border-atlas-border bg-atlas-card/40 p-8 text-center lg:p-12">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Still need help?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            Contact our support team and we will respond by email. For billing questions, please reach the billing team directly.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
              <Link href="/contact">Contact support</Link>
            </Button>
            <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <a href={`mailto:${company.emails.support}`}>{company.emails.support}</a>
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
