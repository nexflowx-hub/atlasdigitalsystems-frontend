import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "software-development",
    slug: "software-development",
    name: "Software Development",
    tagline: "Custom software, internal tools and MVP components.",
    description:
      "Defined software development for scoped product features, internal tools or MVP components.",
    longDescription:
      "Atlas builds custom software against a clearly defined scope. Engagements run as sprints with agreed deliverables, milestones and acceptance criteria.",
    startingPrice: { USD: 1500, GBP: 1200, EUR: 1380, BRL: 7500 },
    status: "contact-sales",
    category: "Engineering",
    scope: ["Custom software", "Internal tools", "MVP components", "Feature development"],
    delivery: "Milestone and scope based.",
    process: [
      { step: "Requirements", detail: "Submit requirements and objectives." },
      { step: "Scope review", detail: "We review and propose a scoped sprint." },
      { step: "Proposal", detail: "Agreement, timeline and deliverables." },
      { step: "Delivery", detail: "Build, review and handover." },
    ],
    ctaLabel: "Request Proposal",
  },
  {
    id: "ai-implementation",
    slug: "ai-implementation",
    name: "AI Implementation",
    tagline: "AI workflows, prompt systems and team AI setup.",
    description:
      "AI workflows, business prompt systems, team AI setup, basic knowledge organisation and automation planning.",
    startingPrice: { USD: 799, GBP: 639, EUR: 739, BRL: 3999 },
    status: "active",
    category: "AI",
    scope: ["AI workflows", "Business prompt systems", "Team AI setup", "Knowledge organisation", "Automation planning"],
    delivery: "Delivered remotely according to agreed scope.",
    process: [
      { step: "Discovery", detail: "Understand your business and AI goals." },
      { step: "Design", detail: "Design prompt systems and workflows." },
      { step: "Setup", detail: "Configure team AI and knowledge base." },
      { step: "Handover", detail: "Documentation and training." },
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "automation",
    slug: "automation",
    name: "Automation",
    tagline: "Implementation of clearly defined business workflows.",
    description:
      "Implementation of one clearly defined business workflow connecting tasks, processes and AI.",
    startingPrice: { USD: 499, GBP: 399, EUR: 459, BRL: 2499 },
    status: "active",
    category: "Automation",
    scope: ["Workflow implementation", "Process automation", "AI automation", "Integrations"],
    delivery: "Delivered remotely according to agreed scope.",
    process: [
      { step: "Scope", detail: "Define the workflow to automate." },
      { step: "Build", detail: "Implement and connect the workflow." },
      { step: "Test", detail: "Validate against success criteria." },
      { step: "Handover", detail: "Documentation and handover." },
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "technology-consulting",
    slug: "technology-consulting",
    name: "Technology Consulting",
    tagline: "Strategic technology review and roadmap.",
    description:
      "A business technology questionnaire, technology review, automation opportunities, software recommendations, risk observations and an action roadmap.",
    startingPrice: { USD: 199, GBP: 159, EUR: 184, BRL: 999 },
    status: "active",
    category: "Consulting",
    scope: ["Technology review", "Automation opportunities", "Software recommendations", "Risk observations", "Action roadmap"],
    delivery: "Digital consultation and report.",
    process: [
      { step: "Questionnaire", detail: "Complete the technology questionnaire." },
      { step: "Review", detail: "We review your stack and processes." },
      { step: "Report", detail: "Receive findings and recommendations." },
      { step: "Roadmap", detail: "Action roadmap with priorities." },
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "data-solutions",
    slug: "data-solutions",
    name: "Data Solutions",
    tagline: "Document analysis, structured data analysis and reporting.",
    description:
      "Analysis of business information, documents and structured data, with insights, summaries, charts and reports.",
    status: "contact-sales",
    category: "Data",
    scope: ["Document analysis", "CSV/Excel analysis", "Business insights", "Reports", "Dashboards"],
    delivery: "Delivered remotely according to agreed scope.",
    process: [
      { step: "Inputs", detail: "Provide documents and data sources." },
      { step: "Analysis", detail: "We analyse and structure the data." },
      { step: "Insights", detail: "Receive insights and visualisations." },
      { step: "Report", detail: "Final report and handover." },
    ],
    ctaLabel: "Request Proposal",
  },
  {
    id: "technical-architecture",
    slug: "technical-architecture",
    name: "Technical Architecture",
    tagline: "Architecture design for deployment and scale.",
    description:
      "Technology architecture and deployment positioning for software, AI and automation systems.",
    status: "contact-sales",
    category: "Architecture",
    scope: ["Architecture design", "Deployment positioning", "Scalability planning", "Integration architecture"],
    delivery: "Delivered remotely according to agreed scope.",
    process: [
      { step: "Requirements", detail: "Understand system requirements." },
      { step: "Architecture", detail: "Design the target architecture." },
      { step: "Review", detail: "Review trade-offs and risks." },
      { step: "Plan", detail: "Implementation plan and handover." },
    ],
    ctaLabel: "Request Proposal",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
