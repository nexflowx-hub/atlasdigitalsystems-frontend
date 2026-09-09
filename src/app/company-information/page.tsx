import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Company Information",
  description: `Official company and merchant information for ${company.legalName}.`,
};

function InfoCard({ label, value, mono = false }: { label: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <div className="card-atlas rounded-xl p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-atlas-cyan">{label}</p>
      <div className={`mt-2 text-sm font-medium leading-relaxed text-white sm:text-base ${mono ? "font-mono" : ""}`}>{value}</div>
    </div>
  );
}

export default function CompanyInformationPage() {
  return (
    <>
      <PageHeader
        eyebrow="INSTITUTIONAL"
        title="Company Information"
        subtitle={`Corporate identity, merchant information and customer contact details for ${company.legalName}.`}
      />

      <PageSection>
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            ATLAS DIGITAL SYSTEMS is operated by {company.legalName}, a Delaware limited liability company. We develop and sell our own software, SaaS, AI and automation products, digital resources and clearly scoped technology services directly to customers.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <InfoCard label="Trading Name" value={company.brandName} />
            <InfoCard label="Legal Name" value={company.legalName} />
            <InfoCard label="Entity Type" value={company.entityType} />
            <InfoCard label="Jurisdiction" value={company.jurisdiction} />
            {company.delawareFileNumber && <InfoCard label="Delaware File Number" value={company.delawareFileNumber} mono />}
            {company.businessAddress && <InfoCard label="Business Address" value={company.businessAddress} />}
            <InfoCard label="Primary Business" value={<span className="text-atlas-muted">{company.primaryBusiness}</span>} />
            <InfoCard label="Domain" value={<a href={company.siteUrl} className="text-atlas-cyan underline underline-offset-2 hover:text-white">{company.domain}</a>} mono />
            <InfoCard label="Telephone" value={<span><a href={`tel:${company.phone.e164}`} className="text-atlas-cyan underline underline-offset-2 hover:text-white">{company.phone.display}</a><span className="mt-1 block text-xs text-atlas-muted">{company.phone.note}</span></span>} />
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Merchant &amp; fulfilment model</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            Atlas is the direct seller of the products and services presented on this website. We do not operate this store as a third-party seller marketplace and do not accept customer payments on behalf of unrelated merchants.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoCard label="Software / SaaS" value={<span className="text-atlas-muted">Delivered electronically through online access according to the product description and plan status.</span>} />
            <InfoCard label="Digital Products" value={<span className="text-atlas-muted">Delivered electronically after confirmed payment according to each product's delivery terms.</span>} />
            <InfoCard label="Professional Services" value={<span className="text-atlas-muted">Delivered remotely or digitally according to the agreed scope, milestones and timeline.</span>} />
            <InfoCard label="Physical Shipping" value={<span className="text-atlas-muted">Atlas does not normally sell or ship physical goods unless a product page explicitly states otherwise.</span>} />
          </div>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <Link href="/delivery-policy" className="text-atlas-cyan hover:text-white">Delivery Policy →</Link>
            <Link href="/refund-policy" className="text-atlas-cyan hover:text-white">Refund Policy →</Link>
            <Link href="/cancellation-policy" className="text-atlas-cyan hover:text-white">Cancellation Policy →</Link>
            <Link href="/payment-methods" className="text-atlas-cyan hover:text-white">Payment Methods →</Link>
          </div>
        </div>
      </PageSection>

      <PageSection bordered={false}>
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Contact Directory</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {Object.entries({
              "General Contact": company.emails.general,
              "Customer Support": company.emails.support,
              Sales: company.emails.sales,
              Billing: company.emails.billing,
              Privacy: company.emails.privacy,
              Security: company.emails.security,
              Legal: company.emails.legal,
              Developers: company.emails.developers,
            }).map(([label, email]) => (
              <InfoCard key={label} label={label} value={<a href={`mailto:${email}`} className="text-atlas-cyan underline underline-offset-2 hover:text-white">{email}</a>} mono />
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-atlas-muted sm:text-sm">
            {company.legalName} does not publish its Employer Identification Number (EIN) on this public page. Where tax documentation is required for a legitimate transaction, contact {company.emails.billing}.
          </p>
        </div>
      </PageSection>
    </>
  );
}
