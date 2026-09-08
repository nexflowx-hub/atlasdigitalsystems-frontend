import type { Metadata } from "next";
import { Code2, Layers, Wrench, Rocket } from "lucide-react";
import { DivisionPage } from "@/components/site/division-page";

export const metadata: Metadata = {
  title: "Atlas Software",
  description:
    "Atlas Software — Build. SaaS applications, business software, internal tools and MVP components built for practical business work.",
  alternates: { canonical: "/software" },
};

export default function SoftwareDivisionPage() {
  return (
    <DivisionPage
      divisionKey="software"
      divisionName="Atlas Software"
      verb="Build."
      eyebrow="DIVISION — SOFTWARE"
      description="SaaS applications, business software, internal tools and MVP components — built for practical business work, with engineering engaged on scoped sprints."
      sections={[
        {
          icon: Code2,
          eyebrow: "WHAT WE BUILD",
          title: "Software that ships.",
          body: "Atlas Software builds SaaS products, business applications, internal tools and software solutions designed for practical business work. Engineering engagements run as scoped sprints with agreed deliverables.",
          bullets: [
            "SaaS subscriptions and business apps",
            "Internal tools and MVP components",
            "Scoped development sprints",
            "Clear deliverables and milestones",
          ],
        },
        {
          icon: Layers,
          eyebrow: "PRODUCTS",
          title: "Digital products for builders.",
          body: "Atlas Software publishes one-time digital products like the Startup Launch System, Sales System and Business OS — frameworks, templates and systems that help teams build and operate.",
        },
        {
          icon: Wrench,
          eyebrow: "SERVICES",
          title: "Custom Software Sprint.",
          body: "A defined development sprint for a scoped product feature, internal tool or MVP component. Submit requirements; we review and propose a scoped engagement.",
        },
        {
          icon: Rocket,
          eyebrow: "FROM IDEA TO LAUNCH",
          title: "Frameworks that get you there.",
          body: "The Startup Launch System covers Idea, Market, Positioning, Customer, Offer, Pricing, Website, Marketing and Launch — a complete system to take an idea from market to launch.",
        },
      ]}
      cta={{
        title: "Build with Atlas.",
        body: "Explore software products, scope a Custom Software Sprint, or browse digital products for builders.",
        primary: { label: "Explore products", href: "/products" },
        secondary: { label: "For business", href: "/business" },
      }}
    />
  );
}
