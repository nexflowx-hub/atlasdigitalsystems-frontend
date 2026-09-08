import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles from ATLAS DIGITAL SYSTEMS on software, AI, automation and data — practical perspectives for business technology.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader
        eyebrow="BLOG"
        title="Notes on building with software, AI and automation."
        subtitle="Practical perspectives on technology for business — written by the Atlas team."
      />

      <PageSection bordered={false}>
        <SectionHeading
          eyebrow="ALL ARTICLES"
          title="Recent posts."
          subtitle="Browse the latest articles. Click any card to read the full piece."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="card-atlas group flex flex-col overflow-hidden rounded-xl"
            >
              <div className="relative h-36 overflow-hidden border-b border-atlas-border bg-gradient-to-br from-atlas-deep to-atlas-void">
                <div className="absolute inset-0 bg-grid-fine opacity-40" />
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-atlas-blue/20 blur-2xl" />
                <div className="absolute left-4 top-4">
                  <Badge variant="outline" className="border-atlas-blue/40 bg-atlas-blue/10 text-atlas-cyan">
                    {a.category}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-atlas-cyan">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-atlas-muted line-clamp-3">
                  {a.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-atlas-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(a.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {a.readingTime}
                  </span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-atlas-cyan group-hover:text-white">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  );
}
