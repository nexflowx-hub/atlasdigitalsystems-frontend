import type { Product } from "@/types/product";

/**
 * ATLAS product catalogue — single source of truth.
 * Drives homepage, catalogue, product detail, checkout and structured data.
 * Pricing is NEVER duplicated; every page reads from this file.
 */
export const products: Product[] = [
  // ── SaaS ──────────────────────────────────────────────────────────────
  {
    id: "atlas-ai-workspace",
    slug: "atlas-ai-workspace",
    name: "Atlas AI Workspace",
    tagline: "An AI-powered workspace for business writing, research and productivity.",
    description:
      "An AI-powered workspace for business writing, research, document analysis, planning and productivity.",
    longDescription:
      "Atlas AI Workspace brings together AI chat, document tools, research support, business writing and planning into one structured environment. It is designed for professionals who need practical AI assistance for everyday business work.",
    category: "saas",
    division: "ai",
    status: "preview",
    billingModel: "subscription",
    badge: "SaaS",
    featured: true,
    sort: 1,
    plans: [
      {
        id: "free",
        name: "Free",
        price: { USD: 0, GBP: 0, EUR: 0, BRL: 0 },
        period: "/month",
        description: "Get started with core AI tools.",
        features: ["AI Chat (limited)", "Basic document tools", "1 workspace"],
      },
      {
        id: "pro",
        name: "Pro",
        price: { USD: 29, GBP: 23, EUR: 27, BRL: 149 },
        period: "/month",
        description: "For individual professionals.",
        features: ["AI Chat (expanded)", "Document tools", "Research support", "Business writing", "Planning tools"],
        highlighted: true,
        stripeProductId: "atlas-ai-workspace",
      },
      {
        id: "business",
        name: "Business",
        price: { USD: 79, GBP: 63, EUR: 73, BRL: 399 },
        period: "/month",
        description: "For teams and growing businesses.",
        features: ["Everything in Pro", "Structured AI tools", "Team workspaces", "Priority support"],
        stripeProductId: "atlas-ai-workspace-business",
      },
    ],
    features: ["AI Chat", "Document tools", "Research support", "Business writing", "Planning", "Structured AI tools"],
    deliveryModel: "Cloud-hosted SaaS, electronically provisioned.",
    licence: "Subscription — Atlas Cloud Services Terms.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Subscription cancellations take effect at the end of the current billing period. See the Refund Policy and Cancellation Policy for details.",
    faqs: [
      { question: "Is Atlas AI Workspace available now?", answer: "It is currently in Preview / Early Access while the real AI backend is connected." },
      { question: "Can I use it for free?", answer: "Yes, a Free plan is available with core AI tools. Upgrade to Pro or Business for expanded capabilities." },
    ],
  },
  {
    id: "atlas-automate",
    slug: "atlas-automate",
    name: "Atlas Automate",
    tagline: "Build and manage automated workflows connecting tasks, AI and business processes.",
    description:
      "Build and manage automated workflows connecting tasks, business processes and AI.",
    category: "saas",
    division: "automate",
    status: "preview",
    billingModel: "subscription",
    badge: "SaaS",
    featured: true,
    sort: 2,
    price: { USD: 39, GBP: 31, EUR: 36, BRL: 199 },
    features: ["Workflow builder", "AI automation", "Business process automation", "Integrations", "Triggers & actions"],
    deliveryModel: "Cloud-hosted SaaS, electronically provisioned.",
    licence: "Subscription — Atlas Cloud Services Terms.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Subscription cancellations take effect at the end of the current billing period. See the Cancellation Policy for details.",
    faqs: [
      { question: "What can I automate?", answer: "Tasks, business processes and AI-assisted workflows across connected tools and data." },
    ],
  },
  {
    id: "atlas-data-workspace",
    slug: "atlas-data-workspace",
    name: "Atlas Data Workspace",
    tagline: "Analyse business information, documents and structured data in one workspace.",
    description:
      "Analyse business information, documents and structured data through one intuitive workspace.",
    category: "saas",
    division: "data",
    status: "preview",
    billingModel: "subscription",
    badge: "SaaS",
    featured: true,
    sort: 3,
    price: { USD: 29, GBP: 23, EUR: 27, BRL: 149 },
    features: ["Analytics", "Document analysis", "CSV/Excel analysis", "Business insights", "Reports", "Charts"],
    deliveryModel: "Cloud-hosted SaaS, electronically provisioned.",
    licence: "Subscription — Atlas Cloud Services Terms.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Subscription cancellations take effect at the end of the current billing period. See the Cancellation Policy for details.",
  },
  {
    id: "atlas-business-assistant",
    slug: "atlas-business-assistant",
    name: "Atlas Business Assistant",
    tagline: "An AI assistant for small businesses.",
    description:
      "An AI assistant for small businesses — email writing, proposal support, meeting summaries, planning, reports and documentation.",
    category: "saas",
    division: "ai",
    status: "coming-soon",
    billingModel: "subscription",
    badge: "SaaS",
    sort: 4,
    price: { USD: 19, GBP: 15, EUR: 18, BRL: 99 },
    features: ["Email writing", "Proposal support", "Meeting summaries", "Planning", "Reports", "Business documentation"],
    deliveryModel: "Cloud-hosted SaaS, electronically provisioned.",
    licence: "Subscription — Atlas Cloud Services Terms.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Subscription cancellations take effect at the end of the current billing period.",
  },
  // ── Digital Products (one-time) ───────────────────────────────────────
  {
    id: "atlas-business-automation-pack",
    slug: "atlas-business-automation-pack",
    name: "Atlas Business Automation Pack",
    tagline: "20 structured workflows, templates and guides to automate your business.",
    description:
      "A complete pack of 20 structured workflows, automation templates, an implementation guide, AI instructions and business process templates.",
    category: "digital",
    division: "automate",
    status: "active",
    billingModel: "one-time",
    badge: "Digital Product",
    featured: true,
    sort: 5,
    price: { USD: 49, GBP: 39, EUR: 45, BRL: 299 },
    features: ["20 structured workflows", "Automation templates", "Implementation guide", "AI instructions", "Business process templates"],
    includes: ["20 workflow files", "Automation template library", "Implementation guide (PDF)", "AI instruction set", "Business process templates"],
    deliveryModel: "Digital download / secure access after payment confirmation.",
    licence: "Business Licence — single organisation use.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Digital products are generally non-refundable once delivered, except in cases of duplicate charge, billing error or technical failure. See the Refund Policy.",
    faqs: [
      { question: "How is this delivered?", answer: "Digitally. Access is provided after payment is confirmed via Stripe webhook." },
      { question: "What licence do I get?", answer: "A Business Licence for use within a single organisation." },
    ],
  },
  {
    id: "atlas-ai-business-toolkit",
    slug: "atlas-ai-business-toolkit",
    name: "Atlas AI Business Toolkit",
    tagline: "Business AI prompts, templates, workflows and decision frameworks.",
    description:
      "Business AI prompts, business templates, productivity workflows, decision frameworks and planning tools.",
    category: "digital",
    division: "ai",
    status: "active",
    billingModel: "one-time",
    badge: "Digital Product",
    sort: 6,
    price: { USD: 39, GBP: 31, EUR: 36, BRL: 239 },
    features: ["Business AI prompts", "Business templates", "Productivity workflows", "Decision frameworks", "Planning tools"],
    includes: ["AI prompt library", "Business templates", "Productivity workflows", "Decision frameworks", "Planning tools"],
    deliveryModel: "Digital download / secure access after payment confirmation.",
    licence: "Business Licence — single organisation use.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Digital products are generally non-refundable once delivered, except in cases of duplicate charge, billing error or technical failure.",
  },
  {
    id: "atlas-startup-launch-system",
    slug: "atlas-startup-launch-system",
    name: "Atlas Startup Launch System",
    tagline: "A complete system to take an idea from market to launch.",
    description:
      "A structured system covering Idea, Market, Positioning, Customer, Offer, Pricing, Website, Marketing and Launch.",
    category: "digital",
    division: "software",
    status: "active",
    billingModel: "one-time",
    badge: "Digital Product",
    featured: true,
    sort: 7,
    price: { USD: 59, GBP: 47, EUR: 54, BRL: 349 },
    features: ["Idea to launch framework", "Market & positioning", "Customer & offer", "Pricing strategy", "Website & marketing", "Launch playbook"],
    includes: ["PDF workbooks", "DOCX templates", "XLSX planning sheets", "Markdown resources"],
    deliveryModel: "Digital download / secure access after payment confirmation.",
    licence: "Business Licence — single organisation use.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Digital products are generally non-refundable once delivered, except in cases of duplicate charge, billing error or technical failure.",
  },
  {
    id: "atlas-marketing-automation-kit",
    slug: "atlas-marketing-automation-kit",
    name: "Atlas Marketing Automation Kit",
    tagline: "Campaign workflows, email frameworks and content planning.",
    description:
      "Campaign workflows, email frameworks, content planning, social content and a lead workflow.",
    category: "digital",
    division: "automate",
    status: "active",
    billingModel: "one-time",
    badge: "Digital Product",
    sort: 8,
    price: { USD: 39, GBP: 31, EUR: 36, BRL: 239 },
    features: ["Campaign workflows", "Email frameworks", "Content planning", "Social content", "Lead workflow"],
    includes: ["Campaign workflow templates", "Email frameworks", "Content calendar", "Social content templates", "Lead workflow"],
    deliveryModel: "Digital download / secure access after payment confirmation.",
    licence: "Business Licence — single organisation use.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Digital products are generally non-refundable once delivered, except in cases of duplicate charge, billing error or technical failure.",
  },
  {
    id: "atlas-sales-system",
    slug: "atlas-sales-system",
    name: "Atlas Sales System",
    tagline: "Lead qualification, proposals and a follow-up system.",
    description:
      "Lead qualification, proposal templates, a follow-up system, an objection framework and sales workflows.",
    category: "digital",
    division: "software",
    status: "active",
    billingModel: "one-time",
    badge: "Digital Product",
    sort: 9,
    price: { USD: 49, GBP: 39, EUR: 45, BRL: 299 },
    features: ["Lead qualification", "Proposal templates", "Follow-up system", "Objection framework", "Sales workflows"],
    includes: ["Lead qualification framework", "Proposal templates", "Follow-up sequences", "Objection handling", "Sales workflows"],
    deliveryModel: "Digital download / secure access after payment confirmation.",
    licence: "Business Licence — single organisation use.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Digital products are generally non-refundable once delivered, except in cases of duplicate charge, billing error or technical failure.",
  },
  {
    id: "atlas-business-os",
    slug: "atlas-business-os",
    name: "Atlas Business OS",
    tagline: "The premium bundle — operations, marketing, sales, AI and automation.",
    description:
      "A premium bundle covering business operations, marketing, sales, AI, automation, project management and templates.",
    category: "bundle",
    division: "software",
    status: "active",
    billingModel: "one-time",
    badge: "Bundle",
    sort: 10,
    price: { USD: 79, GBP: 63, EUR: 73, BRL: 449 },
    features: ["Business operations", "Marketing", "Sales", "AI", "Automation", "Project management", "Templates"],
    includes: ["Operations templates", "Marketing kit", "Sales system", "AI toolkit", "Automation pack", "Project management templates"],
    deliveryModel: "Digital download / secure access after payment confirmation.",
    licence: "Business Licence — single organisation use.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Digital products are generally non-refundable once delivered, except in cases of duplicate charge, billing error or technical failure.",
  },
  // ── Services ──────────────────────────────────────────────────────────
  {
    id: "technology-assessment",
    slug: "technology-assessment",
    name: "Technology Assessment",
    tagline: "A structured review of your business technology and automation opportunities.",
    description:
      "A business technology questionnaire, technology review, automation opportunities, software recommendations, risk observations and an action roadmap.",
    category: "service",
    division: "cloud",
    status: "active",
    billingModel: "contact",
    badge: "Service",
    featured: true,
    sort: 11,
    price: { USD: 199, GBP: 159, EUR: 184, BRL: 999 },
    features: ["Business technology questionnaire", "Technology review", "Automation opportunities", "Software recommendations", "Risk observations", "Action roadmap"],
    deliveryModel: "Digital consultation and report.",
    licence: "Professional services agreement.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Professional services are scoped per agreement. Cancellation and refund terms are defined in the service agreement.",
  },
  {
    id: "ai-business-setup",
    slug: "ai-business-setup",
    name: "AI Business Setup",
    tagline: "AI workflows, prompt systems and team AI setup for your business.",
    description:
      "AI workflows, business prompt systems, team AI setup, basic knowledge organisation and automation planning.",
    category: "service",
    division: "ai",
    status: "active",
    billingModel: "contact",
    badge: "Service",
    featured: true,
    sort: 12,
    price: { USD: 799, GBP: 639, EUR: 739, BRL: 3999 },
    features: ["AI workflows", "Business prompt systems", "Team AI setup", "Knowledge organisation", "Automation planning"],
    deliveryModel: "Delivered remotely according to agreed scope.",
    licence: "Professional services agreement.",
    support: "support@atlasdigitalsystems.co",
    seller: "ATLAS DIGITAL SYSTEMS, LLC",
    refundSummary:
      "Professional services are scoped per agreement. Cancellation and refund terms are defined in the service agreement.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).sort((a, b) => (a.sort ?? 99) - (b.sort ?? 99));
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, limit);
}
