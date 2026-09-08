import type { Metadata } from "next";
import { Brain, Sparkles, Users, MessageSquare } from "lucide-react";
import { DivisionPage } from "@/components/site/division-page";

export const metadata: Metadata = {
  title: "Atlas AI",
  description:
    "Atlas AI — Think. AI-powered workspaces, business assistants, prompt systems and team AI for practical business work.",
  alternates: { canonical: "/ai" },
};

export default function AiDivisionPage() {
  return (
    <DivisionPage
      divisionKey="ai"
      divisionName="Atlas AI"
      verb="Think."
      eyebrow="DIVISION — AI"
      description="AI-powered workspaces, business assistants and prompt systems designed for practical business work — writing, research, document analysis, planning and productivity."
      sections={[
        {
          icon: Brain,
          eyebrow: "WHAT WE BUILD",
          title: "AI for everyday business work.",
          body: "Atlas AI products are designed around the work that happens every day — writing emails, drafting proposals, summarizing meetings, analyzing documents and planning. The goal is practical assistance, not novelty.",
          bullets: [
            "AI chat and document tools",
            "Business writing and research support",
            "Prompt systems and team AI setup",
            "Human review built into the workflow",
          ],
        },
        {
          icon: Sparkles,
          eyebrow: "PRODUCTS",
          title: "Atlas AI Workspace.",
          body: "An AI-powered workspace that brings chat, document tools, research support, business writing and planning into one structured environment. Free plan available; Pro and Business plans for expanded capabilities.",
        },
        {
          icon: Users,
          eyebrow: "TEAMS",
          title: "Team AI setup.",
          body: "Through AI Business Setup, we configure team AI, knowledge organization and automation planning — so AI assistance is consistent across your organization.",
        },
        {
          icon: MessageSquare,
          eyebrow: "RESPONSIBLE AI",
          title: "AI output is a draft, not a decision.",
          body: "AI-generated information may be incorrect, incomplete or outdated. Always verify output against original sources. AI output is not legal, medical or investment advice.",
        },
      ]}
      cta={{
        title: "Put AI to work.",
        body: "Start with a free plan, scope an AI Business Setup, or talk to our team about your use case.",
        primary: { label: "Explore products", href: "/products" },
        secondary: { label: "For business", href: "/business" },
      }}
    />
  );
}
