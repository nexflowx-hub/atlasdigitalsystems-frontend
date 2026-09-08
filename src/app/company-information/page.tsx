import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Company Information",
  description: `Official company information for ${company.legalName}, including legal name, entity type, jurisdiction and contact details.`,
};

function InfoCard({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="card-atlas rounded-xl p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-atlas-cyan">
        {label}
      </p>
      <div
        className={`mt-2 text-sm font-medium leading-relaxed text-white sm:text-base ${
          mono ? "font-mono" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}

export default function CompanyInformationPage() {
  return (
    <>
      <PageHeader
        eyebrow="INSTITUTIONAL"
        title="Company Information"
        subtitle={`Official company information for ${company.legalName}, provided for customers, partners and payment service provider onboarding reviewers.`}
      />

      <PageSection>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl space-y-3">
            <p className="text-sm leading-relaxed text-atlas-muted sm:text-base">
              This page provides a clear and factual summary of who we are,
              what we do, where we are organized and how to contact us. The
              information below is intended to make our corporate identity
              easy to verify for customers, partners and payment service
              provider onboarding reviewers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <InfoCard
              label="Trading Name"
              value={company.brandName}
            />
            <InfoCard
              label="Legal Name"
              value={company.legalName}
            />
            <InfoCard
              label="Entity Type"
              value={company.entityType}
            />
            <InfoCard
              label="Jurisdiction"
              value={company.jurisdiction}
            />
            <InfoCard
              label="Delaware File Number"
              value={company.delawareFileNumber}
              mono
            />
            <InfoCard
              label="Domain"
              value={
                <a
                  href={`https://${company.domain}`}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.domain}
                </a>
              }
              mono
            />
            <InfoCard
              label="Primary Business"
              value={
                <span className="text-atlas-muted">{company.primaryBusiness}</span>
              }
            />
            <InfoCard
              label="Website"
              value={
                <a
                  href={company.siteUrl}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.siteUrl.replace(/^https?:\/\//, "")}
                </a>
              }
              mono
            />
            <InfoCard
              label="Copyright Year"
              value={`© ${company.copyrightYear} ${company.legalName}`}
            />
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Contact Directory
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-atlas-muted sm:text-base">
            Use the following channels to reach {company.legalName}. For
            billing and account questions, please include your order identifier
            or account email so we can assist you faster.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <InfoCard
              label="General Contact"
              value={
                <a
                  href={`mailto:${company.emails.general}`}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.emails.general}
                </a>
              }
              mono
            />
            <InfoCard
              label="Customer Support"
              value={
                <a
                  href={`mailto:${company.emails.support}`}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.emails.support}
                </a>
              }
              mono
            />
            <InfoCard
              label="Sales"
              value={
                <a
                  href={`mailto:${company.emails.sales}`}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.emails.sales}
                </a>
              }
              mono
            />
            <InfoCard
              label="Billing"
              value={
                <a
                  href={`mailto:${company.emails.billing}`}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.emails.billing}
                </a>
              }
              mono
            />
            <InfoCard
              label="Privacy"
              value={
                <a
                  href={`mailto:${company.emails.privacy}`}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.emails.privacy}
                </a>
              }
              mono
            />
            <InfoCard
              label="Security"
              value={
                <a
                  href={`mailto:${company.emails.security}`}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.emails.security}
                </a>
              }
              mono
            />
            <InfoCard
              label="Legal"
              value={
                <a
                  href={`mailto:${company.emails.legal}`}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.emails.legal}
                </a>
              }
              mono
            />
            <InfoCard
              label="Developers"
              value={
                <a
                  href={`mailto:${company.emails.developers}`}
                  className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                >
                  {company.emails.developers}
                </a>
              }
              mono
            />
            <InfoCard
              label="Telephone"
              value={
                <span>
                  <a
                    href={`tel:${company.phone.e164}`}
                    className="text-atlas-cyan underline underline-offset-2 hover:text-white"
                  >
                    {company.phone.display}
                  </a>
                  <span className="mt-1 block text-xs text-atlas-muted">
                    {company.phone.note}
                  </span>
                </span>
              }
            />
          </div>
        </div>
      </PageSection>

      <PageSection bordered={false}>
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Who, What, Where, How
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <InfoCard
              label="Who"
              value={
                <span className="text-atlas-muted">
                  {company.legalName}, a {company.entityType} operating the
                  Atlas brand of software, AI and automation products.
                </span>
              }
            />
            <InfoCard
              label="What"
              value={
                <span className="text-atlas-muted">
                  {company.primaryBusiness}
                </span>
              }
            />
            <InfoCard
              label="Where"
              value={
                <span className="text-atlas-muted">
                  Organized in {company.jurisdiction}. Registered under
                  Delaware file number {company.delawareFileNumber}.
                </span>
              }
            />
            <InfoCard
              label="How"
              value={
                <span className="text-atlas-muted">
                  Reach us by email at {company.emails.general} or by phone
                  at {company.phone.display} ({company.phone.note}).
                </span>
              }
            />
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-atlas-muted sm:text-sm">
            {company.legalName} does not publish its Employer Identification
            Number (EIN) on this page. Where a tax identifier is required for
            a specific transaction or onboarding process, please contact our
            billing team at {company.emails.billing}.
          </p>
        </div>
      </PageSection>
    </>
  );
}
