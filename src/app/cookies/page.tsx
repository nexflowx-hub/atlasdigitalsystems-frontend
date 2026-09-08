import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${company.legalName} uses cookies and similar technologies on the Atlas website and products, and how you can control them.`,
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Cookie Policy"
        subtitle={`This Cookie Policy explains how ${company.legalName} uses cookies and similar technologies on our website and products.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Introduction</h2>
          <p>
            {company.legalName} (“Atlas,” “we,” “us”) uses cookies and similar
            technologies to operate, secure and improve our website and
            products (the “Service”). This Policy explains the categories of
            technologies we use, why we use them, and the choices you have.
          </p>

          <h2>2. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a
            website. Similar technologies include web beacons, pixel tags,
            local storage and SDK identifiers. Together, these technologies
            help us keep the Service running, remember your preferences and
            understand how the Service is used.
          </p>

          <h2>3. Cookie Categories</h2>
          <p>
            We group cookies and similar technologies into the following
            categories:
          </p>

          <h3>Necessary</h3>
          <p>
            Necessary cookies are required for the Service to function. They
            enable core features such as session management, authentication,
            security, load balancing and fraud prevention. Necessary cookies
            cannot be disabled in our systems because the Service would not
            operate correctly without them.
          </p>

          <h3>Functional</h3>
          <p>
            Functional cookies allow the Service to remember choices you make,
            such as your preferred language or region, so that we can provide
            enhanced and more personalized features. Functional cookies may
            be enabled or disabled in your consent settings.
          </p>

          <h3>Preferences</h3>
          <p>
            Preference cookies store information about your selected
            preferences — for example, display settings, accessibility
            options or layout choices. These cookies are optional and only
            set after you provide consent.
          </p>

          <h3>Analytics</h3>
          <p>
            Analytics cookies help us understand how visitors interact with
            the Service by collecting aggregated and individual-level
            information about usage. We use this information to improve
            performance, reliability and design. Analytics cookies are
            optional and are not loaded before you provide consent.
          </p>

          <h3>Marketing</h3>
          <p>
            Marketing cookies may be used to measure the effectiveness of
            campaigns, deliver relevant content and limit how often you see a
            particular message. If used, marketing cookies are optional and
            are not loaded before you provide consent.
          </p>

          <h2>4. Consent</h2>
          <p>
            Where consent is required by law, we ask for your consent before
            placing optional cookies. A real consent interface is presented on
            the Service, allowing you to accept, reject or customize your
            preferences. We do not load optional analytics or marketing
            technologies before consent is given.
          </p>

          <h2>5. How Long Cookies Last</h2>
          <p>
            Session cookies are deleted when you close your browser. Persistent
            cookies remain on your device until they expire or until you delete
            them. The lifespan of each cookie depends on its purpose and is
            set when the cookie is placed.
          </p>

          <h2>6. Managing Cookies</h2>
          <p>
            You can manage or delete cookies through your browser settings.
            Most browsers allow you to refuse cookies or alert you when
            cookies are being sent. Disabling necessary cookies may affect the
            functionality of the Service.
          </p>

          <h2>7. Third-party Technologies</h2>
          <p>
            Some cookies and similar technologies are placed by third parties,
            such as payment processors, infrastructure providers or analytics
            providers. These third parties may set their own cookies subject
            to their own terms and privacy policies.
          </p>

          <h2>8. Updates</h2>
          <p>
            We may update this Cookie Policy from time to time. If we make
            material changes, we will provide notice through the Service or by
            other reasonable means. Your continued use of the Service after
            changes take effect constitutes acceptance of the updated Policy.
          </p>

          <h2>9. Contact</h2>
          <p>
            If you have questions about this Cookie Policy, please contact our
            privacy team at{" "}
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
