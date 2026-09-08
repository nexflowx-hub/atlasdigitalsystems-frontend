import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Payment Methods",
  description: `The payment methods, currencies and billing practices supported by ${company.legalName}.`,
};

export default function PaymentMethodsPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Payment Methods"
        subtitle={`An overview of the payment methods, currencies and billing practices supported by ${company.legalName}.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Payment Provider</h2>
          <p>
            Payments for {company.legalName} (“Atlas”) products and services
            are processed by Stripe, Inc. or its affiliates (our payment
            processor). Atlas does not need to directly store complete card
            details when Stripe Checkout is used. Sensitive card data is
            handled by Stripe subject to its security and compliance
            programmes.
          </p>

          <h2>2. Available Cards</h2>
          <p>
            Where supported by Stripe in your region, the following card
            networks are accepted:
          </p>
          <ul>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>American Express</li>
          </ul>
          <p>
            Card acceptance is enabled only when the relevant network is
            enabled for your account by the payment processor. Availability
            may vary by country, currency and product.
          </p>

          <h2>3. Digital Checkout</h2>
          <p>
            Where supported by Stripe in your region and device, the following
            digital checkout methods may be available:
          </p>
          <ul>
            <li>Apple Pay</li>
            <li>Google Pay</li>
            <li>Link</li>
          </ul>
          <p>
            Digital checkout methods are only available once enabled by the
            payment processor for your region and configuration. Availability
            may depend on your browser, device and card network.
          </p>

          <h2>4. Payment Method Slots</h2>
          <p>
            The Atlas checkout presents a defined set of payment method slots.
            Each slot is filled only when the corresponding method has been
            enabled by Stripe for your region and currency. If a method is not
            shown at checkout, it is not currently available for your
            transaction.
          </p>

          <h2>5. Currencies</h2>
          <p>
            Where supported, Atlas accepts payment in the following
            currencies:
          </p>
          <ul>
            <li>United States Dollar (USD)</li>
            <li>British Pound (GBP)</li>
            <li>Euro (EUR)</li>
            <li>Brazilian Real (BRL)</li>
          </ul>
          <p>
            Currency availability may vary by product, region and payment
            method. Displayed prices are converted according to the rates and
            rules of the payment processor at the time of the transaction.
          </p>

          <h2>6. Subscriptions</h2>
          <p>
            Subscription products are billed automatically on a recurring
            basis using the payment method on file. Recurring charges
            continue until you cancel the subscription or until the
            subscription otherwise ends. For more detail, see our
            Cancellation Policy.
          </p>

          <h2>7. Payment Confirmation</h2>
          <p>
            Once your payment is authorized by the payment processor, you will
            receive an email receipt and access to the purchased product or
            service will be enabled. For SaaS, digital products and AI
            credits, access is typically enabled within minutes of payment
            confirmation.
          </p>

          <h2>8. Failed Payments</h2>
          <p>
            If a payment fails, we or the payment processor may attempt to
            charge the payment method again or request updated payment
            information. If payment remains unsuccessful, access to the
            affected product or service may be suspended or cancelled in
            accordance with our Terms of Service.
          </p>

          <h2>9. Refund Processing</h2>
          <p>
            Approved refunds are processed back to the original payment method
            where possible. The time it takes for a refund to appear on your
            statement depends on your bank or payment processor. For more
            detail, see our <a href="/refund-policy">Refund Policy</a>.
          </p>

          <h2>10. Security of Payments</h2>
          <p>
            Atlas does not need to directly store complete card details when
            Stripe Checkout is used. We use TLS to encrypt data in transit and
            rely on Stripe’s security programme for the handling of sensitive
            card data. No payment system is completely secure, and we cannot
            guarantee that payment data will never be exposed. See our{" "}
            <a href="/security">Security page</a> for more information.
          </p>

          <h2>11. Taxes</h2>
          <p>
            Applicable taxes may be calculated during checkout based on your
            billing address, product type and applicable tax rules. Where
            Atlas is required to collect tax, the tax amount will be displayed
            before you complete your purchase.
          </p>

          <h2>12. Changes</h2>
          <p>
            We may update the available payment methods and currencies from
            time to time. If we make material changes, we will provide notice
            through the Service or by other reasonable means.
          </p>

          <h2>13. Billing Support</h2>
          <p>
            For billing questions, including refunds, duplicate charges and
            failed payments, please contact our billing team at{" "}
            <a href={`mailto:${company.emails.billing}`}>
              {company.emails.billing}
            </a>{" "}
            or by phone at{" "}
            <a href={`tel:${company.phone.e164}`}>
              {company.phone.display}
            </a>{" "}
            ({company.phone.note}).
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
