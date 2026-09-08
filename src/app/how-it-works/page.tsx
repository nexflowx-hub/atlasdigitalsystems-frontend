import type { Metadata } from "next";
import Link from "next/link";
import {
  MonitorSmartphone,
  Download,
  Wrench,
  ArrowRight,
  Webhook,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Atlas purchases work — Software, Digital Product and Professional Service journeys, plus what happens after payment.",
  alternates: { canonical: "/how-it-works" },
};

const journeys = [
  {
    icon: MonitorSmartphone,
    key: "software",
    title: "Software (SaaS)",
    intro:
      "Recurring subscriptions to Atlas AI Workspace, Atlas Automate and Atlas Data Workspace.",
    steps: [
      { t: "Choose a plan", d: "Pick the plan that fits — Free, Pro or Business. Most products have a free starting point." },
      { t: "Create an account", d: "Sign up to your Atlas workspace. Account creation happens before payment." },
      { t: "Complete payment", d: "Subscribe through our configured payment provider. Methods depend on your region." },
      { t: "Receive digital access", d: "Access is provisioned to your account. Subscription benefits start immediately." },
      { t: "Use the software", d: "Sign in and start using the product. Cancel at any time — cancellation takes effect at the end of the billing period." },
    ],
  },
  {
    icon: Download,
    key: "digital",
    title: "Digital Product (one-time)",
    intro:
      "One-time purchases such as the Business Automation Pack, AI Business Toolkit and Startup Launch System.",
    steps: [
      { t: "Choose a product", d: "Browse digital products and add the one you want to your cart." },
      { t: "Review the licence", d: "Digital products are sold under a Business Licence for use within a single organisation." },
      { t: "Checkout", d: "Complete checkout through our configured payment provider." },
      { t: "Payment confirmed", d: "Once the payment provider confirms payment, an event triggers fulfilment." },
      { t: "Receive digital access", d: "Access is granted to download or use the product. A receipt is emailed." },
    ],
  },
  {
    icon: Wrench,
    key: "service",
    title: "Professional Service",
    intro:
      "Productized services such as Technology Assessment, AI Business Setup, Automation Starter and Custom Software Sprint.",
    steps: [
      { t: "Select a service", d: "Pick the service that matches your need, or contact us for guidance." },
      { t: "Submit requirements", d: "Send your requirements, objectives and current setup through the contact form." },
      { t: "Scope review", d: "We review and propose a scoped engagement with deliverables." },
      { t: "Proposal & agreement", d: "We agree on the proposal, timeline, milestones and acceptance criteria." },
      { t: "Delivery", d: "We build, review and hand over the work — with documentation and training where relevant." },
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="HOW IT WORKS"
        title="Three ways to get started."
        subtitle="Software, digital products and professional services each follow a clear, repeatable journey — from first click to delivery."
      />

      {/* Three journeys */}
      <PageSection>
        <div className="space-y-12">
          {journeys.map((j) => (
            <div key={j.key} className="card-atlas rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                      <j.icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                      {j.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-atlas-muted">
                    {j.intro}
                  </p>
                </div>
                <ol className="flex-1 space-y-4">
                  {j.steps.map((s, i) => (
                    <li key={s.t} className="flex items-start gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-atlas-blue/40 bg-atlas-void text-xs font-bold text-atlas-cyan">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{s.t}</p>
                        <p className="mt-1 text-sm leading-relaxed text-atlas-muted">
                          {s.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* What happens after payment */}
      <PageSection>
        <SectionHeading
          eyebrow="AFTER PAYMENT"
          title="What happens after payment."
          subtitle="For digital products, fulfilment is automated and triggered by the payment provider — we do not rely on manual steps."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="card-atlas rounded-xl p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
              <CreditCard className="h-4 w-4" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-white">
              1. Payment confirmed
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
              The payment provider confirms the transaction. For card payments, this typically happens within seconds.
            </p>
          </div>
          <div className="card-atlas rounded-xl p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
              <Webhook className="h-4 w-4" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-white">
              2. Webhook triggers fulfilment
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
              A signed webhook event is sent to our system. We verify the event signature before acting on it.
            </p>
          </div>
          <div className="card-atlas rounded-xl p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-white">
              3. Access granted
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
              After verification, we grant download or workspace access and email a receipt. Refund eligibility is defined in the Refund Policy.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-lg border border-atlas-border bg-atlas-card/40 p-5">
          <p className="text-sm text-atlas-muted">
            <span className="font-semibold text-white">Note:</span> If a webhook is delayed, our system can also reconcile by querying the payment provider directly. If you have not received access within a few minutes, contact{" "}
            <a href="mailto:support@atlasdigitalsystems.co" className="text-atlas-cyan hover:text-white">
              support@atlasdigitalsystems.co
            </a>
            .
          </p>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection bordered={false}>
        <div className="rounded-2xl border border-atlas-border bg-atlas-card/40 p-8 text-center lg:p-12">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            Browse the catalogue, talk to sales, or read the FAQ.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright">
              <Link href="/products">
                Explore products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href="/business">For business</Link>
            </Button>
            <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
              <Link href="/faq">Read FAQ</Link>
            </Button>
          </div>
        </div>
        <Badge variant="outline" className="mt-4 border-atlas-blue/30 text-atlas-cyan">
          Atlas Digital Systems
        </Badge>
      </PageSection>
    </>
  );
}
