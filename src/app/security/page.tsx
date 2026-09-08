import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Security",
  description: `The security practices ${company.legalName} applies across its products, infrastructure and operations.`,
};

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Security"
        subtitle={`An overview of the security practices ${company.legalName} applies across its products, infrastructure and operations.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Overview</h2>
          <p>
            {company.legalName} (“Atlas”) designs its products and operations
            with security in mind. This page provides a factual overview of
            the security practices we apply. We do not currently hold SOC 2,
            ISO 27001 or PCI-DSS certifications. We may pursue additional
            certifications in the future; this page will be updated to reflect
            any certifications obtained.
          </p>

          <h2>2. Transport Layer Security</h2>
          <p>
            We use Transport Layer Security (TLS) to encrypt data in transit
            between end-user devices and our services. TLS is enforced for
            web traffic and for API connections where supported. We monitor
            for outdated protocols and configurations and update them as
            needed.
          </p>

          <h2>3. Software Engineering Practices</h2>
          <p>
            Our engineering teams follow secure software development
            practices, including code review, dependency management and
            testing. We use version control, automated builds and repeatable
            deployment pipelines to reduce manual error. Changes are reviewed
            before being released to production environments.
          </p>

          <h2>4. Access Control</h2>
          <p>
            Access to systems that support the Service is restricted to
            authorized personnel on a need-to-know basis. We use unique user
            accounts, role-based access controls, and centralized
            authentication. Administrative access is monitored and reviewed
            periodically.
          </p>

          <h2>5. Secure Infrastructure</h2>
          <p>
            The Service runs on cloud infrastructure operated by established
            providers. We rely on the security capabilities of these providers
            — including network segmentation, monitoring and physical
            security of data centres — and configure our own workloads in line
            with current guidance.
          </p>

          <h2>6. Environment Secrets</h2>
          <p>
            Secrets such as API keys, tokens and service credentials are
            stored in dedicated secret-management tooling and loaded into
            runtime environments as needed. Secrets are not committed to
            source code repositories. We rotate credentials on a regular
            schedule and when a suspected exposure occurs.
          </p>

          <h2>7. Payment Separation</h2>
          <p>
            Payment information is processed through Stripe Checkout. Atlas
            does not need to directly store complete card details when Stripe
            Checkout is used. Sensitive card data is handled by Stripe, Inc.
            and its affiliates, subject to their security and compliance
            programmes.
          </p>

          <h2>8. Provider Security</h2>
          <p>
            We select infrastructure, AI and service providers carefully and
            review their published security practices. Where required, we put
            written agreements in place that describe each provider’s
            responsibilities. We rely on the security programmes of these
            providers for the portions of the Service they operate.
          </p>

          <h2>9. Incident Management</h2>
          <p>
            We maintain processes for detecting, investigating and responding
            to security incidents. When an incident is confirmed, we work to
            contain it, assess its impact, and notify affected users and
            regulators where required by law or contract.
          </p>

          <h2>10. Vulnerability Reporting</h2>
          <p>
            We welcome responsible disclosure of suspected vulnerabilities.
            If you believe you have identified a security issue, please report
            it to our security team at{" "}
            <a href={`mailto:${company.emails.security}`}>
              {company.emails.security}
            </a>
            . Please include a description of the issue, steps to reproduce
            it, and any relevant technical details. We ask that you avoid
            accessing, modifying or destroying data that does not belong to
            you.
          </p>

          <h2>11. Certifications</h2>
          <p>
            We do not currently hold SOC 2, ISO 27001 or PCI-DSS
            certifications. We may pursue these or other certifications in the
            future. If we obtain a certification, we will update this page to
            reflect it. For up-to-date information, please contact our
            security team.
          </p>

          <h2>12. Limitations</h2>
          <p>
            No system can be made completely secure. This page describes our
            practices, not guarantees. We continuously work to improve
            security, but we cannot promise that the Service will be free from
            vulnerabilities or that security incidents will never occur.
          </p>

          <h2>13. Changes</h2>
          <p>
            We may update this Security page from time to time. If we make
            material changes, we will provide notice through the Service or by
            other reasonable means.
          </p>

          <h2>14. Contact</h2>
          <p>
            If you have questions about security at Atlas, please contact our
            security team at{" "}
            <a href={`mailto:${company.emails.security}`}>
              {company.emails.security}
            </a>
            .
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
