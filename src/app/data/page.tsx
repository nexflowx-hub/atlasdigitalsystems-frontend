import type { Metadata } from "next";
import { Database, BarChart3, FileText, LineChart } from "lucide-react";
import { DivisionPage } from "@/components/site/division-page";

export const metadata: Metadata = {
  title: "Atlas Data",
  description:
    "Atlas Data — Understand. Analyse business information, documents and structured data in one intuitive workspace.",
  alternates: { canonical: "/data" },
};

export default function DataDivisionPage() {
  return (
    <DivisionPage
      divisionKey="data"
      divisionName="Atlas Data"
      verb="Understand."
      eyebrow="DIVISION — DATA"
      description="Analyse business information, documents and structured data through one intuitive workspace. Turn information into actionable insight."
      sections={[
        {
          icon: Database,
          eyebrow: "WHAT WE BUILD",
          title: "Data, structured.",
          body: "Atlas Data products are built around the practical need to understand information — documents, spreadsheets, business data — and turn it into insights, summaries, charts and reports.",
          bullets: [
            "Document and CSV/Excel analysis",
            "Business insights and dashboards",
            "Reports and visualisations",
            "Structured data analysis",
          ],
        },
        {
          icon: BarChart3,
          eyebrow: "PRODUCTS",
          title: "Atlas Data Workspace.",
          body: "A SaaS workspace for analysing business information, documents and structured data. Currently in Preview — Early Access while the real backend is connected.",
        },
        {
          icon: FileText,
          eyebrow: "SERVICES",
          title: "Data Solutions.",
          body: "A productized service for document analysis, structured data analysis, business insights and reports. Provide inputs; we analyse and structure the data.",
        },
        {
          icon: LineChart,
          eyebrow: "OUTCOMES",
          title: "From data to decisions.",
          body: "The opportunity is structure — a repeatable workflow that takes raw inputs and produces insights, summaries and reports that support decisions.",
        },
      ]}
      cta={{
        title: "Turn information into insight.",
        body: "Start with Atlas Data Workspace, scope a Data Solutions engagement, or talk to our team.",
        primary: { label: "Explore products", href: "/products" },
        secondary: { label: "For business", href: "/business" },
      }}
    />
  );
}
