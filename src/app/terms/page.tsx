import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern access to and use of the ATLAS DIGITAL SYSTEMS website, software, SaaS applications, AI products, digital products and professional services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Terms of Service"
        subtitle={`These Terms of Service govern your access to and use of the website, products and services provided by ${company.legalName}. By accessing or using any part of the Service, you agree to these Terms.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to {company.brandName}. These Terms of Service (“Terms”)
            form a binding agreement between{" "}
            <strong>{company.legalName}</strong> (“Atlas,” “we,” “us,” or
            “our”) and the person or entity (“you,” “your”) accessing or using
            our website, products, applications, content and services
            (collectively, the “Service”). By using the Service, you confirm
            that you have read, understood and agree to be bound by these
            Terms. If you do not agree, you must not access or use the Service.
          </p>

          <h2>2. About ATLAS</h2>
          <p>
            {company.legalName} is a technology company that develops and
            operates software, SaaS applications, artificial intelligence tools,
            automation systems, data products and digital technology solutions
            for businesses and professionals. {company.brandName} products are
            designed to turn complex operational, analytical and creative work
            into practical, scalable systems.
          </p>

          <h2>3. Legal Entity</h2>
          <p>
            The Service is provided by{" "}
            <strong>{company.legalName}</strong>, a {company.entityType}
            {" "}organized under the laws of the State of {company.jurisdiction}.
            Atlas is registered to do business in {company.jurisdiction}. By
            entering into these Terms, you are contracting with{" "}
            {company.legalName}, not with any individual employee, contractor,
            affiliate or brand division.
          </p>

          <h2>4. Eligibility</h2>
          <p>
            You must be at least the age of majority in your jurisdiction of
            residence and must be able to form a legally binding contract to use
            the Service. If you are using the Service on behalf of an
            organization, you represent and warrant that you are authorized to
            bind that organization to these Terms.
          </p>

          <h2>5. Accounts</h2>
          <p>
            Certain features of the Service require an account. You are
            responsible for maintaining the confidentiality and security of
            your account credentials and for all activity that occurs under
            your account. You agree to notify us promptly of any unauthorized
            use or security breach. We may suspend or terminate accounts that
            we believe violate these Terms or applicable law.
          </p>

          <h2>6. Software</h2>
          <p>
            Atlas develops and licenses software products for download,
            installation and use. Unless otherwise stated in a product-specific
            agreement, software is licensed, not sold, and is provided subject
            to the licence terms set out in these Terms or in the relevant
            product documentation.
          </p>

          <h2>7. SaaS</h2>
          <p>
            Atlas offers software-as-a-service (“SaaS”) products that are
            accessed remotely over the internet. SaaS subscriptions are
            provisioned on a recurring basis and remain subject to applicable
            subscription, billing and cancellation terms in these Terms and on
            the relevant product pages.
          </p>

          <h2>8. AI Products</h2>
          <p>
            Atlas develops and provides artificial intelligence products and
            features, including generation, analysis, summarization and
            assistance capabilities. AI products may rely on third-party AI
            models and infrastructure. AI outputs may be incorrect,
            incomplete, outdated or otherwise unsuitable. AI products are
            provided “as is” and should be reviewed by a qualified human before
            use. Further information is available in our AI Policy.
          </p>

          <h2>9. Digital Products</h2>
          <p>
            Atlas offers digital products such as downloadable software,
            templates, configurations, datasets, documentation and licenses
            that are delivered electronically. Digital products are typically
            non-refundable after delivery, subject to our Refund Policy.
          </p>

          <h2>10. Professional Services</h2>
          <p>
            Atlas provides professional services such as implementation,
            integration, advisory and managed services. Professional services
            are performed according to an agreed scope of work and any
            applicable statement of work or services agreement, which may add
            to (but not reduce) the protections in these Terms.
          </p>

          <h2>11. Orders</h2>
          <p>
            Orders for products and services are submitted through the Atlas
            website or through a written agreement. An order constitutes an
            offer to purchase, which Atlas may accept or decline in its sole
            discretion. Atlas reserves the right to refuse or cancel any order,
            including orders that appear fraudulent, erroneous or prohibited.
          </p>

          <h2>12. Pricing</h2>
          <p>
            Prices for products and services are displayed on the Atlas website
            or in an agreed proposal. Prices are subject to change. Unless
            otherwise stated, prices do not include applicable taxes, duties or
            shipping-related charges. The price charged is the price in effect
            at the time your order is confirmed.
          </p>

          <h2>13. Currencies</h2>
          <p>
            Where supported, Atlas accepts payment in the following
            currencies: United States Dollar (USD), British Pound (GBP), Euro
            (EUR) and Brazilian Real (BRL). Currency availability may vary by
            product, region and payment method. Displayed prices are converted
            according to the rates and rules of the applicable payment
            processor at the time of the transaction.
          </p>

          <h2>14. Taxes</h2>
          <p>
            Applicable taxes may be calculated during checkout based on your
            billing address, product type and applicable tax rules. Where Atlas
            is required to collect tax, the tax amount will be displayed before
            you complete your purchase. If you are exempt from tax, you are
            responsible for providing valid exemption documentation. You are
            responsible for any taxes not collected by Atlas that may apply to
            your use of the Service.
          </p>

          <h2>15. Payments</h2>
          <p>
            Payments are processed by Stripe, Inc. or its affiliates (our
            payment processor). Atlas does not need to directly store complete
            card details when Stripe Checkout is used. Payment is required at
            the time of purchase unless otherwise agreed in writing. By
            submitting a payment, you authorize us and our payment processor to
            charge the selected payment method for the full amount of the
            order, including any applicable taxes and fees.
          </p>

          <h2>16. Subscriptions</h2>
          <p>
            Subscription products renew automatically according to the billing
            cycle selected at checkout (for example, monthly or annually).
            By purchasing a subscription, you authorize recurring billing until
            the subscription is cancelled or until the product is discontinued.
          </p>

          <h2>17. Recurring Billing</h2>
          <p>
            Recurring charges will be billed to the payment method on file
            until you cancel or until the subscription otherwise ends. If your
            payment method fails, we or our payment processor may attempt to
            charge the method again or request updated payment information.
            Continued access to a subscription is conditional on timely
            payment.
          </p>

          <h2>18. Cancellation</h2>
          <p>
            You may cancel a subscription at any time through your account
            settings or by contacting support. Cancellations take effect at the
            end of the current billing period unless otherwise required by
            applicable law. For more detail, see our Cancellation Policy.
          </p>

          <h2>19. Refunds</h2>
          <p>
            Refund eligibility depends on the product type and the
            circumstances of the request. Our Refund Policy explains the
            refund rules that apply to subscriptions, digital products,
            professional services and other offerings. Please review the{" "}
            <a href="/refund-policy">Refund Policy</a> for details.
          </p>

          <h2>20. Digital Delivery</h2>
          <p>
            Digital products, SaaS access and AI credits are delivered
            electronically. Delivery is typically completed by email receipt,
            in-product provisioning or account activation. For more detail, see
            our Delivery Policy.
          </p>

          <h2>21. Licences</h2>
          <p>
            Subject to your continued compliance with these Terms, Atlas grants
            you a limited, non-exclusive, non-transferable, non-sublicensable,
            revocable licence to access and use the Service for your internal
            business or personal use. No title or ownership in the Service is
            transferred to you.
          </p>

          <h2>22. Intellectual Property</h2>
          <p>
            The Service, including all software, content, branding, designs,
            documentation and underlying technology, is owned by Atlas or its
            licensors and is protected by intellectual property laws. You may
            not copy, modify, distribute, reverse engineer or create derivative
            works of the Service except as expressly permitted by these Terms
            or by applicable law.
          </p>

          <h2>23. Customer Content</h2>
          <p>
            You retain ownership of content that you submit to the Service
            (“Customer Content”). You grant Atlas a worldwide, non-exclusive
            licence to host, store, transmit, display and process Customer
            Content as necessary to operate the Service. You are responsible
            for ensuring that you have the rights to submit Customer Content and
            that it does not violate applicable law or third-party rights.
          </p>

          <h2>24. AI Inputs and Outputs</h2>
          <p>
            Inputs you provide to AI products (“AI Inputs”) and the responses
            generated (“AI Outputs”) are treated as Customer Content subject to
            these Terms. AI Outputs may be incorrect, incomplete, outdated or
            otherwise unreliable. You are responsible for reviewing and
            verifying AI Outputs before relying on them. AI Outputs are not
            legal, medical, financial or investment advice and must not be
            used as a substitute for professional advice from a qualified
            professional.
          </p>

          <h2>25. Third-party AI Models</h2>
          <p>
            Atlas AI products may use third-party AI models, providers and
            infrastructure. We do not control and cannot guarantee the
            accuracy, availability or behaviour of third-party models. Your
            use of AI features may be subject to the policies and limitations
            of the underlying AI providers, in addition to these Terms.
          </p>

          <h2>26. Third-party Services</h2>
          <p>
            The Service may integrate with or contain links to third-party
            services, websites, tools or content that we do not control. Atlas
            is not responsible for third-party services and your use of them is
            at your own risk and subject to their terms and policies.
          </p>

          <h2>27. Acceptable Use</h2>
          <p>
            You agree to use the Service only for lawful purposes and in a
            manner that does not infringe the rights of others. Our Acceptable
            Use Policy sets out prohibited conduct in more detail. Violations
            may result in suspension or termination of access.
          </p>

          <h2>28. Beta and Early Access Features</h2>
          <p>
            From time to time, Atlas may offer beta, preview or early access
            features. These features may be unstable, incomplete or change
            without notice, and may be discontinued at any time. We provide
            beta features on an “as is” basis with no warranties.
          </p>

          <h2>29. Availability</h2>
          <p>
            We strive to maintain high availability but do not guarantee that
            the Service will be uninterrupted, error-free or secure. Scheduled
            maintenance, network conditions, third-party outages and other
            factors may affect availability. We may modify, suspend or
            discontinue any part of the Service at any time.
          </p>

          <h2>30. Customer Responsibilities</h2>
          <p>
            You are responsible for your use of the Service, for the accuracy
            and legality of Customer Content, for configuring access controls
            appropriately, and for maintaining backups of any data you rely on.
            You agree to use the Service in compliance with all applicable
            laws and regulations.
          </p>

          <h2>31. Professional Services</h2>
          <p>
            Where Atlas provides implementation, integration, advisory or
            managed services, performance is governed by the applicable
            statement of work or services agreement. Customer responsibilities,
            timelines, deliverables and acceptance criteria will be described
            in the relevant agreement.
          </p>

          <h2>32. Custom Development</h2>
          <p>
            Custom software development is performed according to an agreed
            scope, milestones and acceptance process. Unless otherwise agreed
            in writing, custom development deliverables are licensed, not
            sold, and ownership of underlying Atlas technology remains with
            Atlas or its licensors.
          </p>

          <h2>33. Disclaimers</h2>
          <p>
            Except as required by law, the Service is provided “as is” and “as
            available,” without warranties of any kind, whether express,
            implied or statutory. Atlas does not warrant that the Service will
            be error-free, secure, uninterrupted or that AI Outputs or other
            results will be accurate or reliable.
          </p>

          <h2>34. Limitations of Liability</h2>
          <p>
            To the maximum extent permitted by law, neither Atlas nor its
            affiliates, officers, employees or contractors will be liable for
            any indirect, incidental, special, consequential or punitive
            damages, or for any loss of profits, data, goodwill or business
            interruption, arising out of or related to the Service, whether
            based on contract, tort or any other theory. Atlas’s aggregate
            liability for any claim arising out of or related to the Service
            will not exceed the amount you paid Atlas for the Service giving
            rise to the claim in the twelve (12) months preceding the event.
            Some jurisdictions do not allow certain limitations, so some of
            these limits may not apply to you.
          </p>

          <h2>35. Termination</h2>
          <p>
            You may stop using the Service at any time. Atlas may suspend or
            terminate your access if you violate these Terms, if your account
            becomes inactive, or if required by law. Upon termination, your
            right to use the Service ends, and you may lose access to data
            associated with your account unless otherwise required by law.
          </p>

          <h2>36. Changes</h2>
          <p>
            We may update these Terms from time to time. If we make material
            changes, we will provide notice through the Service or by other
            reasonable means. Your continued use of the Service after changes
            take effect constitutes acceptance of the updated Terms.
          </p>

          <h2>37. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of{" "}
            {company.jurisdiction}, without regard to its conflict of law
            principles. You and Atlas submit to the jurisdiction of the state
            and federal courts located in {company.jurisdiction} for any
            dispute arising out of or relating to the Service, subject to any
            mandatory consumer protection rules that apply to you.
          </p>

          <h2>38. Contact</h2>
          <p>
            If you have any questions about these Terms, please contact our
            legal team at{" "}
            <a href={`mailto:${company.emails.legal}`}>{company.emails.legal}</a>
            .
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
