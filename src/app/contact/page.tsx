import type { Metadata } from "next";
import {
  Mail,
  Phone,
  Building2,
  ShieldCheck,
  Lock,
  Code2,
  CreditCard,
  Headphones,
} from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "./contact-form";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ATLAS DIGITAL SYSTEMS — general, sales, support, billing, privacy, security, developers and legal.",
  alternates: { canonical: "/contact" },
};

const contactCards = [
  {
    icon: Headphones,
    label: "General",
    email: company.emails.general,
    description: "General questions about Atlas.",
  },
  {
    icon: Building2,
    label: "Sales",
    email: company.emails.sales,
    description: "Pricing, proposals and business inquiries.",
  },
  {
    icon: Mail,
    label: "Support",
    email: company.emails.support,
    description: "Product help and account assistance.",
  },
  {
    icon: CreditCard,
    label: "Billing",
    email: company.emails.billing,
    description: "Invoices, charges and billing questions.",
  },
  {
    icon: Lock,
    label: "Privacy",
    email: company.emails.privacy,
    description: "Data and privacy inquiries.",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    email: company.emails.security,
    description: "Security reports and questions.",
  },
  {
    icon: Code2,
    label: "Developers",
    email: company.emails.developers,
    description: "API, SDKs and developer access.",
  },
  {
    icon: Phone,
    label: "Telephone",
    email: company.phone.display,
    description: `${company.phone.note} — voice and SMS.`,
    tel: company.phone.e164,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Get in touch with the right team."
        subtitle="Reach the appropriate department directly, or send us a message and we will respond via email."
      />

      {/* Contact cards */}
      <PageSection>
        <SectionHeading
          eyebrow="DEPARTMENTS"
          title="Contact the right team."
          subtitle="Each department has a direct inbox. We will respond via email."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <div key={card.label} className="card-atlas rounded-xl p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
                <card.icon className="h-4 w-4" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-atlas-muted">
                {card.label}
              </p>
              {card.tel ? (
                <a
                  href={`tel:${card.tel}`}
                  className="mt-1 block font-display text-base font-semibold text-white hover:text-atlas-cyan"
                >
                  {card.email}
                </a>
              ) : (
                <a
                  href={`mailto:${card.email}`}
                  className="mt-1 block break-all font-display text-base font-semibold text-white hover:text-atlas-cyan"
                >
                  {card.email}
                </a>
              )}
              <p className="mt-2 text-xs leading-relaxed text-atlas-muted">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Form */}
      <PageSection bordered={false}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="SEND A MESSAGE"
              title="Tell us what you need."
              subtitle="Fill out the form and the right team will get back to you by email. We do not share your information except as described in our Privacy Policy."
            />
            <div className="mt-6 space-y-3 text-sm text-atlas-muted">
              <p>
                <span className="font-semibold text-white">Response time:</span>{" "}
                We aim to respond within 1–2 business days for most inquiries.
              </p>
              <p>
                <span className="font-semibold text-white">For urgent issues:</span>{" "}
                Existing customers can reach support directly at{" "}
                <a href={`mailto:${company.emails.support}`} className="text-atlas-cyan hover:text-white">
                  {company.emails.support}
                </a>
                .
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </PageSection>
    </>
  );
}
