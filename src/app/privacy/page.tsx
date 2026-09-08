import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.legalName} collects, uses, discloses and protects information when you use our website, products and services.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Privacy Policy"
        subtitle={`This Privacy Policy explains how ${company.legalName} collects, uses, discloses and protects information in connection with our website, products and services.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Company Identity</h2>
          <p>
            This Privacy Policy is published by{" "}
            <strong>{company.legalName}</strong>, a {company.entityType}{" "}
            organized in {company.jurisdiction}. In this Policy, “Atlas,”
            “we,” “us” and “our” refer to {company.legalName}. “Service” refers
            to our website, software, SaaS applications, AI products, digital
            products and professional services.
          </p>

          <h2>2. Data We Collect</h2>
          <p>
            We collect information that is necessary to provide, secure and
            improve the Service. The categories of information we may collect
            include:
          </p>
          <ul>
            <li>
              <strong>Account information:</strong> name, email address,
              password metadata, organization details and role.
            </li>
            <li>
              <strong>Order information:</strong> products ordered, billing
              address, subscription details and purchase history.
            </li>
            <li>
              <strong>Billing metadata:</strong> the type of payment method,
              the last characters of the card or account identifier and
              related transaction identifiers. We do not need to directly
              store complete card details when Stripe Checkout is used.
            </li>
            <li>
              <strong>AI inputs:</strong> prompts, instructions, files and
              documents you submit to Atlas AI products.
            </li>
            <li>
              <strong>Documents and files:</strong> content you upload for
              processing, storage or analysis.
            </li>
            <li>
              <strong>AI outputs:</strong> responses, summaries, generations
              and other content produced by AI products based on your inputs.
            </li>
            <li>
              <strong>Technical information:</strong> IP address, browser
              type, device information, operating system, referring URLs and
              usage logs.
            </li>
            <li>
              <strong>Cookies and similar technologies:</strong> identifiers
              used to operate the Service and, where you consent, to measure
              performance and improve experience.
            </li>
            <li>
              <strong>Analytics:</strong> aggregated and, where consented,
              individual-level analytics about how the Service is used.
            </li>
            <li>
              <strong>Communications:</strong> records of your inquiries,
              support requests and other correspondence with us.
            </li>
          </ul>

          <h2>3. Purposes of Processing</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>provide, operate and maintain the Service;</li>
            <li>create and manage accounts and subscriptions;</li>
            <li>process orders, payments and refunds;</li>
            <li>deliver AI products and generate AI outputs;</li>
            <li>respond to inquiries and provide support;</li>
            <li>monitor security, prevent fraud and investigate abuse;</li>
            <li>comply with legal obligations; and</li>
            <li>
              improve, develop and personalize the Service, subject to
              applicable law and your consent where required.
            </li>
          </ul>

          <h2>4. Service Providers</h2>
          <p>
            We work with service providers that help us operate, secure and
            improve the Service. These providers process information on our
            behalf under written agreements and only for the purposes we
            specify.
          </p>

          <h2>5. Stripe and Payment Processors</h2>
          <p>
            Payment information is processed by Stripe, Inc. or its affiliates
            and other payment processors. Atlas does not need to directly
            store complete card details when Stripe Checkout is used. The
            processing of payment data is governed by the applicable payment
            processor’s terms and privacy policy.
          </p>

          <h2>6. Cloud Infrastructure</h2>
          <p>
            We use cloud infrastructure providers to host, store and process
            data needed to operate the Service. These providers may process
            data in their facilities located in various regions, subject to
            appropriate contractual protections.
          </p>

          <h2>7. AI Infrastructure Providers</h2>
          <p>
            Atlas AI products rely on AI infrastructure providers that may
            process prompts, documents and AI outputs in order to generate
            responses. We select providers carefully and configure them in
            line with our product design and the controls described in this
            Policy.
          </p>

          <h2>8. International Processing</h2>
          <p>
            Atlas is based in {company.jurisdiction}. Because we use cloud and
            AI infrastructure that may operate in multiple regions, your
            information may be processed in countries other than your own,
            including the United States. Where required, we put appropriate
            safeguards in place for cross-border transfers.
          </p>

          <h2>9. Data Retention</h2>
          <p>
            We retain information for as long as necessary to provide the
            Service, comply with legal obligations, resolve disputes and
            enforce agreements. When information is no longer needed, we
            delete it or anonymize it, subject to applicable law.
          </p>

          <h2>10. Security</h2>
          <p>
            We use reasonable administrative, technical and physical safeguards
            to protect information. These include encryption in transit,
            access controls and secure infrastructure practices. No system is
            completely secure, and we cannot guarantee the security of
            information transmitted over the internet. See our{" "}
            <a href="/security">Security page</a> for more information.
          </p>

          <h2>11. Your Rights</h2>
          <p>
            Subject to applicable law, you may have the right to access,
            correct, delete or restrict the use of your personal information,
            as well as the right to object to certain processing or to request
            data portability. To exercise these rights, contact us at{" "}
            <a href={`mailto:${company.emails.privacy}`}>
              {company.emails.privacy}
            </a>
            . We will respond in line with applicable law.
          </p>

          <h2>12. U.S. Privacy Considerations</h2>
          <p>
            For residents of U.S. states with comprehensive privacy laws,
            this Policy describes the categories of personal information we
            collect, the business and commercial purposes for which it is
            used, and the rights available to you under those laws. We do not
            sell personal information in the ordinary course of business.
          </p>

          <h2>13. International Users</h2>
          <p>
            If you are located outside the United States, your information may
            be processed in the United States. By using the Service, you
            consent to the transfer and processing of your information in the
            United States and other jurisdictions as described in this Policy.
            Some jurisdictions may provide you with additional rights.
          </p>

          <h2>14. Children</h2>
          <p>
            The Service is not directed to children under the age of 16, and
            we do not knowingly collect personal information from them. If you
            believe we have collected information from a child, please contact
            us so we can investigate and delete it where appropriate.
          </p>

          <h2>15. Cookies</h2>
          <p>
            We use cookies and similar technologies to operate and secure the
            Service. Optional analytics and marketing technologies are only
            loaded after you provide consent. For more detail, see our{" "}
            <a href="/cookies">Cookie Policy</a>.
          </p>

          <h2>16. Policy Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will provide notice through the Service or by
            other reasonable means. Your continued use of the Service after
            changes take effect constitutes acceptance of the updated Policy.
          </p>

          <h2>17. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy
            practices, please contact our privacy team at{" "}
            <a href={`mailto:${company.emails.privacy}`}>
              {company.emails.privacy}
            </a>
            .
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
