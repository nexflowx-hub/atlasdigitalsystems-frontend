import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Code2,
  Database,
  Megaphone,
  Rocket,
  Settings2,
  TrendingUp,
  Users,
} from "lucide-react";

export type Solution = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  outcomes: string[];
  relatedProductSlugs: string[];
  relatedServiceSlugs: string[];
};

export const solutions: Solution[] = [
  {
    slug: "business",
    name: "Business",
    headline: "Run a smarter, more efficient operation.",
    description:
      "Software, AI and automation designed around practical business needs — from operations to strategy.",
    icon: Settings2,
    outcomes: ["Streamline operations", "Centralise business data", "Automate repetitive work"],
    relatedProductSlugs: ["atlas-business-os", "atlas-business-automation-pack"],
    relatedServiceSlugs: ["technology-consulting", "automation"],
  },
  {
    slug: "startups",
    name: "Startups",
    headline: "Launch and scale with the right technology.",
    description:
      "From idea to launch — frameworks, software and AI tools built for founders and early-stage teams.",
    icon: Rocket,
    outcomes: ["Validate and position", "Build your MVP", "Automate from day one"],
    relatedProductSlugs: ["atlas-startup-launch-system", "atlas-business-os"],
    relatedServiceSlugs: ["software-development", "ai-implementation"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    headline: "Plan, create and automate marketing.",
    description:
      "Campaign workflows, content planning and email frameworks powered by AI and automation.",
    icon: Megaphone,
    outcomes: ["Plan content", "Automate campaigns", "Generate copy with AI"],
    relatedProductSlugs: ["atlas-marketing-automation-kit", "atlas-ai-business-toolkit"],
    relatedServiceSlugs: ["automation"],
  },
  {
    slug: "sales",
    name: "Sales",
    headline: "Qualify, propose and follow up — systematically.",
    description:
      "Lead qualification, proposal templates and follow-up systems that turn process into revenue.",
    icon: TrendingUp,
    outcomes: ["Qualify leads", "Send proposals faster", "Never miss a follow-up"],
    relatedProductSlugs: ["atlas-sales-system", "atlas-business-os"],
    relatedServiceSlugs: ["automation"],
  },
  {
    slug: "operations",
    name: "Operations",
    headline: "Automate the work that slows teams down.",
    description:
      "Workflow automation and AI that connects tasks, tools and business processes.",
    icon: Settings2,
    outcomes: ["Automate workflows", "Reduce manual work", "Connect your tools"],
    relatedProductSlugs: ["atlas-business-automation-pack", "atlas-automate"],
    relatedServiceSlugs: ["automation"],
  },
  {
    slug: "data",
    name: "Data",
    headline: "Turn information into actionable insight.",
    description:
      "Analyse documents, spreadsheets and business data in one intuitive workspace.",
    icon: Database,
    outcomes: ["Analyse documents", "Visualise data", "Generate reports"],
    relatedProductSlugs: ["atlas-data-workspace"],
    relatedServiceSlugs: ["data-solutions"],
  },
  {
    slug: "software",
    name: "Software",
    headline: "Build the software your business needs.",
    description:
      "Custom software, internal tools and SaaS — scoped, built and delivered by engineering.",
    icon: Code2,
    outcomes: ["Build internal tools", "Ship an MVP", "Scale a SaaS product"],
    relatedProductSlugs: ["atlas-ai-workspace"],
    relatedServiceSlugs: ["software-development", "technical-architecture"],
  },
  {
    slug: "teams",
    name: "Teams",
    headline: "Equip your team with AI and automation.",
    description:
      "Team AI setup, shared workspaces and automation that compound across your organisation.",
    icon: Users,
    outcomes: ["Shared AI workspaces", "Team automation", "Consistent processes"],
    relatedProductSlugs: ["atlas-ai-workspace", "atlas-business-os"],
    relatedServiceSlugs: ["ai-implementation"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
