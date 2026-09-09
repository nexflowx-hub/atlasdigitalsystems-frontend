import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";
import { stripeConfig } from "@/config/stripe";

export const metadata: Metadata = {
  title: "Payment Methods",
  description: `Payment methods, currencies and billing practices for ${company.legalName}.`,
};

export default function PaymentMethodsPage() {
  const stripeState = stripeConfig.isConfigured
    ? "Stripe Checkout is configured as the hosted payment flow for eligible online purchases."
    : "Atlas is preparing Stripe Checkout as its primary hosted online checkout integration. Until online checkout is enabled, the website will not simulate a public payment.";

  return (
    <>
      <PageHeader
        eyebrow="PAYMENTS"
        title="Payment Methods"
        subtitle={`Payment, currency and billing information for ${company.legalName}.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">Last updated: {company.copyrightYear}</p>

          <h2>1. Payment Provider</h2>
          <p>{stripeState}</p>
          <p>
            When hosted checkout is active, customers enter complete card details on the payment provider's secure checkout page. Atlas does not need to directly collect or store complete card numbers.
          </p>

          <h2>2. Available Payment Methods</h2>
          <p>
            The methods actually offered to a customer are the methods displayed during checkout. Availability may vary by product, currency, customer location, device and the payment provider's account configuration.
          </p>
          <p>
            Eligible card networks may include Visa, Mastercard and American Express. Eligible digital wallets may include Apple Pay, Google Pay and Link when they are enabled and supported for the transaction. A method not displayed at checkout should not be treated as accepted for that purchase.
          </p>

          <h2>3. Currencies</h2>
          <p>Atlas product data can contain explicitly configured prices in:</p>
          <ul>
            <li>United States Dollar (USD)</li>
            <li>British Pound (GBP)</li>
            <li>Euro (EUR)</li>
            <li>Brazilian Real (BRL)</li>
          </ul>
          <p>
            These are configured regional prices, not a promise of live foreign-exchange conversion. If your payment account is denominated in a different currency, your bank or card issuer may apply its own conversion rate or fees.
          </p>

          <h2>4. One-Time Purchases</h2>
          <p>
            Eligible digital products are charged once. The product page and checkout identify the item, price, currency, seller and delivery model before payment.
          </p>

          <h2>5. Subscriptions</h2>
          <p>
            Active SaaS products may use recurring billing. The plan price and billing frequency are shown before checkout. Recurring charges continue until the subscription ends or is cancelled according to our <a href="/cancellation-policy">Cancellation Policy</a> and any product-specific terms.
          </p>

          <h2>6. Digital Delivery</h2>
          <p>
            Software and SaaS products are provided electronically according to the relevant product status and delivery process. Downloadable digital products are delivered electronically after confirmed payment. Professional services are delivered according to the agreed scope and timeline. See our <a href="/delivery-policy">Delivery Policy</a>.
          </p>

          <h2>7. Failed or Pending Payments</h2>
          <p>
            If a payment fails or remains pending, an order is not treated as fulfilled merely because a browser reaches a success page. Atlas relies on verified server-side payment status before fulfilment.
          </p>

          <h2>8. Refund Processing</h2>
          <p>
            Approved refunds are returned to the original payment method where possible. Timing depends on the payment provider and the customer's bank. See our <a href="/refund-policy">Refund Policy</a> for eligibility and request procedures.
          </p>

          <h2>9. Taxes</h2>
          <p>
            Applicable taxes may be calculated during checkout depending on product type, customer location and applicable rules. Where tax is collected, the amount will be shown before the customer completes payment.
          </p>

          <h2>10. Billing Support</h2>
          <p>
            For billing questions, duplicate charges, payment issues or refund requests, contact <a href={`mailto:${company.emails.billing}`}>{company.emails.billing}</a> or call <a href={`tel:${company.phone.e164}`}>{company.phone.display}</a> ({company.phone.note}).
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
