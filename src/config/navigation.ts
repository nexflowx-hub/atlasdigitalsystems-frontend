import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Brain,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  LayoutGrid,
  LifeBuoy,
  Newspaper,
  Scale,
  Settings2,
  Workflow,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavSection = {
  label: string;
  items: NavItem[];
};

export const productMenu: NavItem[] = [
  {
    label: "Atlas AI",
    href: "/ai",
    description: "Artificial intelligence tools for practical business work.",
    icon: Brain,
  },
  {
    label: "Atlas Software",
    href: "/software",
    description: "SaaS and business applications.",
    icon: Code2,
  },
  {
    label: "Atlas Automate",
    href: "/automate",
    description: "Connect tasks, AI and business processes.",
    icon: Workflow,
  },
  {
    label: "Atlas Data",
    href: "/data",
    description: "Turn information into actionable insights.",
    icon: Database,
  },
  {
    label: "Atlas Cloud",
    href: "/cloud",
    description: "Technology designed for deployment and scale.",
    icon: Cloud,
  },
  {
    label: "Atlas Labs",
    href: "/labs",
    description: "New products. Real possibilities.",
    icon: FlaskConical,
  },
  {
    label: "All Products",
    href: "/products",
    description: "Browse the full product catalogue.",
    icon: LayoutGrid,
  },
];

export const solutionMenu: NavItem[] = [
  { label: "Business", href: "/solutions/business", icon: Boxes },
  { label: "Startups", href: "/solutions/startups", icon: Boxes },
  { label: "Marketing", href: "/solutions/marketing", icon: Boxes },
  { label: "Sales", href: "/solutions/sales", icon: Boxes },
  { label: "Operations", href: "/solutions/operations", icon: Boxes },
  { label: "Data", href: "/solutions/data", icon: Database },
  { label: "Software", href: "/solutions/software", icon: Code2 },
  { label: "Teams", href: "/solutions/teams", icon: Boxes },
];

export const developerMenu: NavItem[] = [
  { label: "API", href: "/developers/api", icon: Code2 },
  { label: "Documentation", href: "/developers/docs", icon: Newspaper },
  { label: "Integrations", href: "/developers/integrations", icon: Settings2 },
  { label: "Developer Portal", href: "/developers", icon: LifeBuoy },
];

export const resourceMenu: NavItem[] = [
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Help Center", href: "/support", icon: LifeBuoy },
  { label: "FAQ", href: "/faq", icon: LifeBuoy },
  { label: "Security", href: "/security", icon: Scale },
];

export const companyMenu: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Company Information", href: "/company-information" },
  { label: "Contact", href: "/contact" },
  { label: "For Business", href: "/business" },
];

export const mainNav: NavSection[] = [
  { label: "Products", items: productMenu },
  { label: "Solutions", items: solutionMenu },
  { label: "Developers", items: developerMenu },
  { label: "Resources", items: resourceMenu },
  { label: "Company", items: companyMenu },
];
