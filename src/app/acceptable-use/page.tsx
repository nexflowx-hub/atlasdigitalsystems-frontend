import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: `The rules of acceptable use for ${company.legalName} products and services, including AI products and automation systems.`,
};

export default function AcceptableUsePage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Acceptable Use Policy"
        subtitle={`This Acceptable Use Policy sets out the rules for using ${company.legalName} products and services responsibly and lawfully.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Purpose</h2>
          <p>
            This Acceptable Use Policy (“AUP”) describes the rules that apply
            when using the website, software, SaaS applications, AI products,
            digital products and professional services operated by{" "}
            {company.legalName} (“Atlas,” “we,” “us”). The AUP is part of our
            Terms of Service. Capitalized terms used but not defined here have
            the meaning given in the Terms.
          </p>

          <h2>2. General Principle</h2>
          <p>
            You agree to use the Service only for lawful purposes and in a
            manner that respects the rights of others. You are responsible for
            your activity and for the activity of anyone using your account or
            credentials.
          </p>

          <h2>3. Illegal Use</h2>
          <p>
            You must not use the Service to violate any applicable law or
            regulation, including laws relating to intellectual property,
            data protection, consumer protection, anti-spam, export control
            and sanctions.
          </p>

          <h2>4. Fraud</h2>
          <p>
            You must not use the Service to commit, assist or facilitate
            fraud, deception, money laundering, identity theft or any other
            financial crime.
          </p>

          <h2>5. Malware and Harmful Code</h2>
          <p>
            You must not upload, transmit or distribute viruses, worms,
            trojans, ransomware or any other malicious or harmful code, or
            use the Service to create or distribute malware.
          </p>

          <h2>6. Abuse and Harassment</h2>
          <p>
            You must not use the Service to harass, threaten, defame, stalk or
            otherwise abuse any person, or to encourage others to do so.
          </p>

          <h2>7. Privacy Violations</h2>
          <p>
            You must not use the Service to collect, store or disclose
            personal information in violation of applicable privacy laws or
            without proper consent. You are responsible for ensuring that any
            data you submit to the Service is collected and processed lawfully.
          </p>

          <h2>8. Intellectual Property Violations</h2>
          <p>
            You must not use the Service to infringe the copyrights,
            trademarks, trade secrets, patents or other intellectual property
            rights of any party. You must not submit content that you do not
            have the right to use.
          </p>

          <h2>9. Service Disruption</h2>
          <p>
            You must not interfere with, disrupt or overload the Service,
            including by launching denial-of-service attacks, attempting to
            overwhelm capacity, or accessing systems in a way that degrades
            performance for other users.
          </p>

          <h2>10. Credential Abuse</h2>
          <p>
            You must not share, sell, transfer or otherwise misuse account
            credentials, or attempt to access accounts, systems or data that
            you are not authorized to access.
          </p>

          <h2>11. Circumvention</h2>
          <p>
            You must not attempt to circumvent authentication, access
            controls, rate limits, billing, usage limits, security features
            or any other restrictions built into the Service.
          </p>

          <h2>12. AI Misuse</h2>
          <p>
            When using Atlas AI products, you must not generate, request or
            facilitate content that is illegal, harmful, fraudulent, sexually
            exploitative (including of minors), violent, hateful, harassing
            or otherwise abusive. You must not use AI products to deceive
            people about whether content is human- or AI-generated where
            disclosure is required by law, or to generate content that
            impersonates a real person without their consent.
          </p>

          <h2>13. Automation Abuse</h2>
          <p>
            You must not use automated systems — such as bots, scrapers or
            crawlers — to access the Service in a way that exceeds the
            intended functionality, violates rate limits, or otherwise
            disrupts operations, except where automation is expressly
            authorized by Atlas.
          </p>

          <h2>14. Enforcement</h2>
          <p>
            We may investigate suspected violations and take action we believe
            is appropriate, including issuing warnings, suspending or
            terminating access, removing content, and reporting activity to
            law enforcement. We may cooperate with law enforcement in
            response to lawful requests.
          </p>

          <h2>15. Reporting Violations</h2>
          <p>
            If you become aware of a violation of this AUP, please report it
            to our security team at{" "}
            <a href={`mailto:${company.emails.security}`}>
              {company.emails.security}
            </a>
            . Reports may be made anonymously where permitted by law.
          </p>

          <h2>16. Changes</h2>
          <p>
            We may update this AUP from time to time. If we make material
            changes, we will provide notice through the Service or by other
            reasonable means.
          </p>

          <h2>17. Contact</h2>
          <p>
            If you have questions about this AUP, please contact our legal
            team at{" "}
            <a href={`mailto:${company.emails.legal}`}>
              {company.emails.legal}
            </a>
            .
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
