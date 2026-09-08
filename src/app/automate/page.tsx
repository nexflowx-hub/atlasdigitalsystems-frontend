import type { Metadata } from "next";
import { Workflow, Zap, Plug, RefreshCw } from "lucide-react";
import { DivisionPage } from "@/components/site/division-page";

export const metadata: Metadata = {
  title: "Atlas Automate",
  description:
    "Atlas Automate — Connect. Workflow automation connecting tasks, business processes and AI across the tools you use.",
  alternates: { canonical: "/automate" },
};

export default function AutomateDivisionPage() {
  return (
    <DivisionPage
      divisionKey="automate"
      divisionName="Atlas Automate"
      verb="Connect."
      eyebrow="DIVISION — AUTOMATE"
      description="Workflow automation connecting tasks, business processes and AI — across the tools you already use. Build, run and manage automations in one place."
      sections={[
        {
          icon: Workflow,
          eyebrow: "WHAT WE BUILD",
          title: "Automation that runs.",
          body: "Atlas Automate is a SaaS product for building and managing automated workflows that connect tasks, business processes and AI. Triggers, actions and integrations — without the manual overhead.",
          bullets: [
            "Workflow builder with triggers and actions",
            "AI-assisted automation",
            "Business process automation",
            "Integrations with the tools you use",
          ],
        },
        {
          icon: Zap,
          eyebrow: "PRODUCTS",
          title: "Atlas Automate (SaaS).",
          body: "Subscription SaaS that lets you build and manage automated workflows. Currently in Preview — Early Access while the real backend is connected.",
        },
        {
          icon: Plug,
          eyebrow: "DIGITAL PRODUCTS",
          title: "Automation packs and kits.",
          body: "One-time digital products like the Business Automation Pack (20 structured workflows) and the Marketing Automation Kit (campaign workflows, email frameworks, content planning).",
        },
        {
          icon: RefreshCw,
          eyebrow: "SERVICES",
          title: "Automation Starter.",
          body: "A productized service for implementing one clearly defined business workflow. Scope, build, test and handover — with documentation.",
        },
      ]}
      cta={{
        title: "Automate the work that slows you down.",
        body: "Start with Atlas Automate, scope an Automation Starter engagement, or browse automation digital products.",
        primary: { label: "Explore products", href: "/products" },
        secondary: { label: "For business", href: "/business" },
      }}
    />
  );
}
