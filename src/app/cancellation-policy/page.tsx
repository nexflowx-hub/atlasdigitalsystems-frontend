import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: `How to cancel ${company.legalName} subscriptions, digital products, professional services and custom projects, and what happens after cancellation.`,
};

export default function CancellationPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Cancellation Policy"
        subtitle={`This Cancellation Policy explains how you can cancel ${company.legalName} subscriptions, products and services and what to expect after cancellation.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Overview</h2>
          <p>
            {company.legalName} (“Atlas”) offers subscriptions, digital
            products, professional services and custom software development.
            This Policy explains how to cancel each type of product or service
            and the effect of cancellation.
          </p>

          <h2>2. Monthly Subscriptions</h2>
          <p>
            Monthly SaaS subscriptions can be cancelled at any time. When you
            cancel a monthly subscription, the cancellation takes effect at the
            end of the current monthly billing period. You will retain access
            to the subscription until the end of that period, after which
            access is removed and recurring billing stops.
          </p>

          <h2>3. Annual Subscriptions</h2>
          <p>
            Where available, annual subscriptions provide access for a
            twelve-month period billed in advance. Annual subscriptions renew
            automatically at the end of each annual term unless cancelled
            before the renewal date. Cancellation of an annual subscription
            takes effect at the end of the current annual term.
          </p>

          <h2>4. Automatic Renewal</h2>
          <p>
            Subscriptions renew automatically using the payment method on file
            until you cancel. If you do not want to renew, you must cancel
            before the renewal date. Cancellation does not automatically
            trigger a refund for the unused portion of the current period
            except where required by applicable law.
          </p>

          <h2>5. How to Cancel</h2>
          <p>You can cancel a subscription in any of the following ways:</p>
          <ul>
            <li>
              Through your account settings, where self-service cancellation
              is available.
            </li>
            <li>
              By contacting our support team at{" "}
              <a href={`mailto:${company.emails.support}`}>
                {company.emails.support}
              </a>
              .
            </li>
            <li>
              By contacting our billing team at{" "}
              <a href={`mailto:${company.emails.billing}`}>
                {company.emails.billing}
              </a>{" "}
              or by phone at{" "}
              <a href={`tel:${company.phone.e164}`}>
                {company.phone.display}
              </a>
              .
            </li>
          </ul>

          <h2>6. Effective Cancellation Date</h2>
          <p>
            The effective cancellation date is the end of your current billing
            period, unless otherwise required by applicable law or agreed in
            writing. If you cancel mid-period, you may continue to use the
            Service until the end of that period.
          </p>

          <h2>7. Access After Cancellation</h2>
          <p>
            After cancellation takes effect, your access to the subscription,
            its features and any associated data may be limited or removed.
            We recommend exporting any data you wish to retain before the end
            of your billing period. We may retain certain data after
            cancellation as described in our Privacy Policy and as required by
            law.
          </p>

          <h2>8. Digital Products</h2>
          <p>
            Digital products that have already been delivered are typically
            non-cancellable and non-refundable, except where required by
            applicable law or where there is a verified delivery failure,
            billing error or duplicate charge. See our{" "}
            <a href="/refund-policy">Refund Policy</a> for more detail.
          </p>

          <h2>9. Professional Service Cancellations</h2>
          <p>
            Professional services can be cancelled subject to the terms of the
            applicable statement of work or services agreement. Where work has
            been performed up to the cancellation date, fees for completed
            milestones are typically non-refundable. Notice periods and
            early-termination terms are described in the relevant agreement.
          </p>

          <h2>10. Custom Project Cancellations</h2>
          <p>
            Custom software development projects can be cancelled subject to
            the terms of the applicable development agreement. Fees for
            accepted milestones are typically non-refundable. Cancellation may
            also trigger wind-down costs and the return or destruction of
            Atlas materials and confidential information.
          </p>

          <h2>11. Enterprise Agreements</h2>
          <p>
            Enterprise customers may be subject to a separate master
            agreement that contains custom cancellation, renewal and
            termination terms. Where a conflict exists between this Policy and
            an executed enterprise agreement, the enterprise agreement
            controls.
          </p>

          <h2>12. Failed Payments and Involuntary Cancellation</h2>
          <p>
            If a recurring payment fails, we or our payment processor may
            attempt to charge the payment method again or request updated
            payment information. If payment remains unsuccessful, Atlas may
            suspend or cancel the subscription in accordance with the Terms of
            Service.
          </p>

          <h2>13. Changes</h2>
          <p>
            We may update this Cancellation Policy from time to time. If we
            make material changes, we will provide notice through the Service
            or by other reasonable means.
          </p>

          <h2>14. Contact</h2>
          <p>
            If you have questions about cancelling a subscription or service,
            please contact our support team at{" "}
            <a href={`mailto:${company.emails.support}`}>
              {company.emails.support}
            </a>{" "}
            or our billing team at{" "}
            <a href={`mailto:${company.emails.billing}`}>
              {company.emails.billing}
            </a>
            .
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
