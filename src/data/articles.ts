export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string;
};

export const articles: Article[] = [
  {
    slug: "building-software-with-ai",
    title: "Building Software with AI: A Practical Approach",
    excerpt:
      "How AI changes the way teams design, build and operate software — and the practical patterns that make it work.",
    category: "Engineering",
    date: "2026-01-12",
    readingTime: "6 min read",
    content:
      "AI is changing how software is built. The most successful teams treat AI as a collaborator: structured prompts, clear context and human review. In this article we cover the practical patterns that make AI-assisted development reliable.",
  },
  {
    slug: "automation-first-operations",
    title: "Automation-First Operations for Growing Teams",
    excerpt:
      "Why growing teams should design operations around automation from day one — and how to start.",
    category: "Automation",
    date: "2026-01-08",
    readingTime: "5 min read",
    content:
      "Operations that scale are operations that are designed to be automated. We look at how to identify the first workflows to automate, how to connect them to AI, and how to keep humans in the loop where it matters.",
  },
  {
    slug: "data-to-insights",
    title: "From Data to Insights: A Structured Workflow",
    excerpt:
      "A repeatable workflow for turning documents, spreadsheets and business data into decisions.",
    category: "Data",
    date: "2026-01-03",
    readingTime: "7 min read",
    content:
      "Most businesses have more data than they can use. The opportunity is structure: a repeatable workflow that takes raw inputs and produces insights, summaries and reports that support decisions.",
  },
  {
    slug: "ai-for-small-business",
    title: "AI for Small Business: Where to Start",
    excerpt:
      "A grounded guide to the first AI use cases that deliver real value for small businesses.",
    category: "AI",
    date: "2025-12-20",
    readingTime: "4 min read",
    content:
      "AI does not need to be complex to be useful. For small businesses, the highest-value starting points are writing, research, document analysis and planning — the work that happens every day.",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
