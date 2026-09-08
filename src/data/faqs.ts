export type FAQCategory =
  | "General"
  | "Products"
  | "Software"
  | "AI"
  | "Automation"
  | "Digital Products"
  | "Subscriptions"
  | "Payments"
  | "Billing"
  | "Refunds"
  | "Services"
  | "Security"
  | "Privacy";

export type FAQItem = {
  category: FAQCategory;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  // General
  {
    category: "General",
    question: "What is Atlas Digital Systems?",
    answer:
      "ATLAS DIGITAL SYSTEMS, LLC is a United States technology company based in Delaware that develops software, SaaS applications, artificial intelligence tools, automation systems, data products and digital technology solutions for businesses and professionals.",
  },
  {
    category: "General",
    question: "What products does Atlas sell?",
    answer:
      "Atlas sells SaaS subscriptions (Atlas AI Workspace, Atlas Automate, Atlas Data Workspace), one-time digital products (Business Automation Pack, AI Business Toolkit, Startup Launch System, and more), and productized professional services (Technology Assessment, AI Business Setup, Automation Starter, Custom Software Sprint).",
  },
  {
    category: "General",
    question: "Where is Atlas Digital Systems registered?",
    answer:
      "ATLAS DIGITAL SYSTEMS, LLC is a Delaware Limited Liability Company registered in the United States. Our primary domain is atlasdigitalsystems.co.",
  },
  // Products
  {
    category: "Products",
    question: "What is Atlas AI?",
    answer:
      "Atlas AI is our artificial intelligence division. It includes products like Atlas AI Workspace, an AI-powered workspace for business writing, research, document analysis, planning and productivity.",
  },
  {
    category: "Products",
    question: "What is Atlas Automate?",
    answer:
      "Atlas Automate is our automation division. It lets you build and manage automated workflows connecting tasks, business processes and AI.",
  },
  {
    category: "Products",
    question: "Are digital products delivered electronically?",
    answer:
      "Yes. All digital products are delivered electronically. Access is granted after payment is confirmed, typically via Stripe webhook confirmation.",
  },
  // Software
  {
    category: "Software",
    question: "What kind of software does Atlas build?",
    answer:
      "Atlas builds SaaS applications, business applications, internal tools and software solutions designed for practical business work.",
  },
  // AI
  {
    category: "AI",
    question: "Is Atlas AI output always correct?",
    answer:
      "No. AI-generated information may be incorrect, incomplete or outdated and should be verified by a human. AI output is not legal, medical or investment advice.",
  },
  // Automation
  {
    category: "Automation",
    question: "Can I automate my existing business processes?",
    answer:
      "Yes. Atlas Automate and our Automation Starter service are designed to connect tasks, tools and AI across your existing processes.",
  },
  // Digital Products
  {
    category: "Digital Products",
    question: "What licence comes with a digital product?",
    answer:
      "Digital products are sold under a Business Licence for use within a single organisation, unless otherwise stated on the product page.",
  },
  // Subscriptions
  {
    category: "Subscriptions",
    question: "How do subscriptions work?",
    answer:
      "SaaS subscriptions are billed on a recurring monthly basis through Stripe. You can cancel at any time, with cancellation taking effect at the end of the current billing period.",
  },
  // Payments
  {
    category: "Payments",
    question: "What payment methods are supported?",
    answer:
      "Payments are processed through our configured payment provider (Stripe). Available methods may include cards, Apple Pay, Google Pay and Link, depending on your region and currency. Methods are only available once enabled by the provider.",
  },
  {
    category: "Payments",
    question: "Which company bills me?",
    answer:
      "All charges are processed by ATLAS DIGITAL SYSTEMS, LLC, a Delaware Limited Liability Company.",
  },
  // Billing
  {
    category: "Billing",
    question: "How do I contact billing?",
    answer:
      "For any billing questions, email billing@atlasdigitalsystems.co or call +1 302-595-5455 (Voice & SMS).",
  },
  {
    category: "Billing",
    question: "Can I cancel my subscription?",
    answer:
      "Yes. You can cancel at any time. Cancellation takes effect at the end of your current billing period. See the Cancellation Policy for details.",
  },
  // Refunds
  {
    category: "Refunds",
    question: "Can I request a refund?",
    answer:
      "Refund eligibility depends on the product type. SaaS, digital products, professional services and custom software each have specific terms. See the Refund Policy for full details.",
  },
  // Services
  {
    category: "Services",
    question: "Does Atlas provide custom software?",
    answer:
      "Yes. Our Custom Software Sprint is a defined development sprint for a scoped product feature, internal tool or MVP component. Use Request Proposal when scope needs validation.",
  },
  // Security
  {
    category: "Security",
    question: "How does Atlas handle payment security?",
    answer:
      "Payments are processed through our configured payment provider. When Stripe Checkout is used, Atlas does not need to directly store complete card details. We do not claim certifications we have not obtained.",
  },
  // Privacy
  {
    category: "Privacy",
    question: "How does Atlas handle my data?",
    answer:
      "Our privacy practices are described in detail in the Privacy Policy. For privacy questions, email privacy@atlasdigitalsystems.co.",
  },
];

export function getFAQsByCategory(category: FAQCategory | "All"): FAQItem[] {
  if (category === "All") return faqs;
  return faqs.filter((f) => f.category === category);
}

export const faqCategories: (FAQCategory | "All")[] = [
  "All",
  "General",
  "Products",
  "Software",
  "AI",
  "Automation",
  "Digital Products",
  "Subscriptions",
  "Payments",
  "Billing",
  "Refunds",
  "Services",
  "Security",
  "Privacy",
];
