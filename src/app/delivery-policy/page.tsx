import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Delivery Policy",
  description: `How ${company.legalName} delivers SaaS, digital products, AI credits, professional services and custom software development.`,
};

export default function DeliveryPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Delivery Policy"
        subtitle={`This Delivery Policy explains how ${company.legalName} delivers software, SaaS, AI products, digital products, professional services and custom development.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Overview</h2>
          <p>
            {company.legalName} (“Atlas”) provides digital and software-based
            products and services. We do not normally ship physical goods.
            All products and services are delivered electronically, unless
            otherwise agreed in writing.
          </p>

          <h2>2. SaaS Products</h2>
          <p>
            SaaS subscriptions are provisioned electronically. After a
            successful order, access is enabled through your account, and you
            can begin using the product immediately. Provisioning typically
            occurs within minutes of payment confirmation.
          </p>

          <h2>3. Digital Products</h2>
          <p>
            Digital products — such as downloadable software, templates,
            configurations, datasets and documentation — are delivered
            electronically. After a successful order, you will receive a
            download link or access instructions by email and through your
            account. Delivery typically occurs immediately after payment
            confirmation.
          </p>

          <h2>4. AI Credits</h2>
          <p>
            AI credits are allocated digitally to your account after payment
            confirmation. Credits can be used across supported AI products
            according to the published pricing and usage rules. Allocated
            credits are visible in your account dashboard.
          </p>

          <h2>5. Professional Services</h2>
          <p>
            Professional services, including implementation, integration,
            advisory and managed services, are delivered according to an
            agreed scope of work. The schedule, milestones, deliverables and
            acceptance criteria are described in the relevant statement of
            work or services agreement.
          </p>

          <h2>6. Software Development</h2>
          <p>
            Custom software development is delivered according to the
            milestones and scope set out in the applicable development
            agreement. Deliverables are made available through agreed
            channels, such as repositories, environments or release packages,
            and are subject to the acceptance process in the agreement.
          </p>

          <h2>7. Delivery Confirmation</h2>
          <p>
            For SaaS, digital products and AI credits, delivery is generally
            confirmed through an email receipt and in-product access. For
            professional services and custom development, delivery is
            confirmed through milestone acceptance or another agreed process.
          </p>

          <h2>8. Delivery Issues</h2>
          <p>
            If you experience a delivery issue — for example, you did not
            receive access or a download link — please contact our support
            team promptly. We will investigate and either re-deliver the
            product, provide equivalent access or, where delivery is not
            possible within a reasonable time, process a refund in accordance
            with our Refund Policy.
          </p>

          <h2>9. No Physical Shipment</h2>
          <p>
            Atlas does not normally ship physical goods. If a physical item is
            ever included with a product (such as branded merchandise as part
            of a promotion), shipping terms will be described at the point of
            sale or in the order confirmation.
          </p>

          <h2>10. Changes</h2>
          <p>
            We may update this Delivery Policy from time to time. If we make
            material changes, we will provide notice through the Service or by
            other reasonable means.
          </p>

          <h2>11. Contact</h2>
          <p>
            If you have questions about delivery, please contact our support
            team at{" "}
            <a href={`mailto:${company.emails.support}`}>
              {company.emails.support}
            </a>
            .
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
