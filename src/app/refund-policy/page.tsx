import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund eligibility and process for ${company.legalName} subscriptions, digital products, professional services and custom software projects.`,
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Refund Policy"
        subtitle={`This Refund Policy explains the circumstances in which ${company.legalName} may issue refunds and how to request one.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Overview</h2>
          <p>
            {company.legalName} (“Atlas”) offers a range of products and
            services, including SaaS subscriptions, digital products,
            professional services and custom software development. Refund
            eligibility depends on the type of product, the timing of the
            request and the circumstances involved. This Policy explains the
            general rules that apply; specific terms in your order or
            agreement may add to (but not reduce) these protections.
          </p>

          <h2>2. SaaS Subscriptions</h2>
          <p>
            SaaS subscriptions are billed in advance on a recurring basis.
            Subscriptions can be cancelled at any time, and cancellation
            takes effect at the end of the current billing period. We
            generally do not issue refunds for the unused portion of an
            active billing period unless required by applicable law or unless
            a separate agreement provides otherwise.
          </p>

          <h2>3. Digital Products</h2>
          <p>
            Digital products — including downloadable software, templates,
            configurations, datasets, documentation and licences — are
            generally non-refundable once they have been delivered and made
            accessible to you. Exceptions may apply in the following
            circumstances:
          </p>
          <ul>
            <li>
              <strong>Duplicate charges:</strong> where the same product is
              charged more than once.
            </li>
            <li>
              <strong>Billing errors:</strong> where an incorrect amount or
              incorrect product is charged.
            </li>
            <li>
              <strong>Technical failures:</strong> where a technical failure
              on our side prevents the product from being delivered or made
              accessible.
            </li>
          </ul>

          <h2>4. Professional Services</h2>
          <p>
            Refunds for professional services, including implementation,
            integration, advisory and managed services, are governed by the
            applicable statement of work or services agreement. Where work has
            been performed in good faith, fees for completed milestones are
            typically non-refundable.
          </p>

          <h2>5. Custom Software Projects</h2>
          <p>
            Refunds for custom software development projects are governed by
            the applicable development agreement. Milestone-based fees for
            accepted deliverables are typically non-refundable. For milestones
            that have not been accepted or work that has not been performed,
            refund eligibility will be determined under the agreement.
          </p>

          <h2>6. Duplicate Charges</h2>
          <p>
            If you believe you have been charged more than once for the same
            product, please contact our billing team with the relevant order
            identifiers. We will investigate and, where a duplicate is
            confirmed, refund the duplicate charge.
          </p>

          <h2>7. Billing Errors</h2>
          <p>
            If you are charged an incorrect amount or charged for a product
            you did not order, please notify our billing team promptly.
            Verified billing errors will be corrected, and any overcharge will
            be refunded to the original payment method where possible.
          </p>

          <h2>8. Technical Failures</h2>
          <p>
            If a technical failure on our side prevents a digital product from
            being delivered or accessed, please contact our support team. We
            will either re-deliver the product, provide equivalent access, or
            issue a refund where delivery is not possible within a reasonable
            time.
          </p>

          <h2>9. Refund Request Process</h2>
          <p>To request a refund, please:</p>
          <ol>
            <li>
              Email our billing team at{" "}
              <a href={`mailto:${company.emails.billing}`}>
                {company.emails.billing}
              </a>{" "}
              with the subject line “Refund Request.”
            </li>
            <li>
              Include your order identifier, account email and a brief
              description of the reason for the request.
            </li>
            <li>
              Provide any supporting documentation that may help us evaluate
              the request, such as receipts or correspondence.
            </li>
          </ol>
          <p>
            Our team will review your request and respond with a decision
            within a reasonable period.
          </p>

          <h2>10. Processing Timeframe</h2>
          <p>
            Approved refunds are typically processed within five to ten
            business days. The time it takes for a refund to appear on your
            statement depends on your bank or payment processor and may take
            longer. Refunds are issued to the original payment method where
            possible.
          </p>

          <h2>11. Chargebacks</h2>
          <p>
            We encourage you to contact our billing team before initiating a
            chargeback. Most issues can be resolved quickly through direct
            contact. Initiating a chargeback does not guarantee a refund and
            may result in the suspension of access to the Service pending
            review.
          </p>

          <h2>12. Legal Rights</h2>
          <p>
            This Policy does not affect any statutory rights you may have under
            applicable consumer protection law. Some jurisdictions provide
            additional rights to refunds in specific circumstances.
          </p>

          <h2>13. Changes</h2>
          <p>
            We may update this Refund Policy from time to time. If we make
            material changes, we will provide notice through the Service or by
            other reasonable means.
          </p>

          <h2>14. Contact</h2>
          <p>
            If you have questions about this Refund Policy or a specific
            refund request, please contact our billing team at{" "}
            <a href={`mailto:${company.emails.billing}`}>
              {company.emails.billing}
            </a>{" "}
            or by phone at{" "}
            <a href={`tel:${company.phone.e164}`}>{company.phone.display}</a>{" "}
            ({company.phone.note}).
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
