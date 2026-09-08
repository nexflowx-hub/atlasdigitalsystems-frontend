import type { Metadata } from "next";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { ProseContent } from "@/components/site/prose-content";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "AI Policy",
  description: `How ${company.legalName} designs, operates and governs the artificial intelligence features in its products.`,
};

export default function AIPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="AI Policy"
        subtitle={`This AI Policy explains how ${company.legalName} designs, operates and governs the artificial intelligence features in its products.`}
      />
      <PageSection>
        <ProseContent>
          <p className="text-xs uppercase tracking-[0.18em] text-atlas-muted">
            Last updated: {company.copyrightYear}
          </p>

          <h2>1. Purpose</h2>
          <p>
            {company.legalName} (“Atlas”) develops artificial intelligence
            products and features, including generation, analysis,
            summarization and assistance capabilities. This AI Policy
            explains how we design and operate AI features, the
            responsibilities of users, and the limitations of AI outputs.
          </p>

          <h2>2. AI Model Use</h2>
          <p>
            Atlas AI products use machine-learning models to process inputs
            and generate outputs. Models are selected based on the task,
            performance characteristics and the operational requirements of
            each feature. We may change the models that power a feature
            without notice as the underlying technology evolves.
          </p>

          <h2>3. Third-party AI Providers</h2>
          <p>
            Atlas AI products may rely on third-party AI infrastructure and
            model providers. We configure these providers in line with our
            product design and the controls described in this Policy. Use of
            AI features may be subject to the policies and limitations of the
            underlying AI providers, in addition to our Terms of Service and
            Acceptable Use Policy.
          </p>

          <h2>4. Model Routing</h2>
          <p>
            For performance, cost or reliability reasons, Atlas may route
            requests to different models or providers. Routing decisions are
            made automatically by the Service based on factors such as the
            type of request, the model capabilities required and current
            availability. We do not guarantee that a specific model will be
            used for any particular request.
          </p>

          <h2>5. User Responsibility</h2>
          <p>
            You are responsible for the inputs you submit (“AI Inputs”) and for
            reviewing and verifying any content produced by the Service (“AI
            Outputs”). You are responsible for ensuring that AI Inputs do not
            contain confidential, regulated or third-party information unless
            you have the rights to submit it. You are also responsible for
            deciding whether and how to use AI Outputs in your work.
          </p>

          <h2>6. Output Limitations</h2>
          <p>
            AI Outputs may be incorrect, incomplete, outdated or otherwise
            unreliable. AI models can produce outputs that are confidently
            wrong (“hallucinations”). AI Outputs are not legal, medical,
            financial or investment advice and must not be used as a
            substitute for professional advice from a qualified professional.
            You must independently verify AI Outputs before relying on them
            for any decision.
          </p>

          <h2>7. Data Handling</h2>
          <p>
            AI Inputs and AI Outputs are treated as Customer Content as
            described in our Terms of Service and Privacy Policy. Atlas and
            its AI infrastructure providers may process AI Inputs and AI
            Outputs to deliver, secure and improve the Service. We apply
            access controls and contractual safeguards with our providers. We
            do not knowingly use customer AI Inputs to train third-party
            public models without authorization.
          </p>

          <h2>8. Human Review</h2>
          <p>
            Atlas recommends that AI Outputs be reviewed by a qualified human
            before being relied upon, published or used in consequential
            decisions. AI features are intended to assist human judgement, not
            replace it. The Service may include features that flag or filter
            potentially problematic content, but these features do not
            eliminate the need for human review.
          </p>

          <h2>9. Responsible Use</h2>
          <p>
            You must use AI products in compliance with our Acceptable Use
            Policy. Prohibited uses include generating illegal, harmful,
            fraudulent, sexually exploitative, violent, hateful or harassing
            content, impersonating real people without consent, and deceiving
            people about whether content is human- or AI-generated where
            disclosure is required by law.
          </p>

          <h2>10. Safety Controls</h2>
          <p>
            Atlas applies safety controls to AI features, which may include
            input and output filtering, content classification, abuse
            detection and rate limiting. Safety controls are not perfect and
            may not catch every problematic input or output. We may update
            safety controls as the underlying technology and risks evolve.
          </p>

          <h2>11. Model Availability</h2>
          <p>
            AI features depend on the availability of models, infrastructure
            and third-party providers. We do not guarantee that any AI feature
            will be available at all times, in all regions, or for all inputs.
            We may modify, suspend or discontinue AI features at any time.
          </p>

          <h2>12. Beta AI Features</h2>
          <p>
            From time to time, Atlas may offer beta, preview or early access AI
            features. These features may be unstable, incomplete or change
            without notice, and may be discontinued at any time. Beta AI
            features are provided “as is” with no warranties.
          </p>

          <h2>13. Changes</h2>
          <p>
            We may update this AI Policy from time to time. If we make
            material changes, we will provide notice through the Service or by
            other reasonable means.
          </p>

          <h2>14. Contact</h2>
          <p>
            If you have questions about this AI Policy, please contact our
            legal team at{" "}
            <a href={`mailto:${company.emails.legal}`}>
              {company.emails.legal}
            </a>{" "}
            or our developers team at{" "}
            <a href={`mailto:${company.emails.developers}`}>
              {company.emails.developers}
            </a>
            .
          </p>
        </ProseContent>
      </PageSection>
    </>
  );
}
