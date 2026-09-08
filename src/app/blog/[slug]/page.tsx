import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProseContent } from "@/components/site/prose-content";
import { articles, getArticleBySlug } from "@/data/articles";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Article not found" };
  }
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  // JSON-LD Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    articleSection: article.category,
    author: {
      "@type": "Organization",
      name: "ATLAS DIGITAL SYSTEMS, LLC",
      url: "https://atlasdigitalsystems.co",
    },
    publisher: {
      "@type": "Organization",
      name: "ATLAS DIGITAL SYSTEMS, LLC",
      url: "https://atlasdigitalsystems.co",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow={article.category.toUpperCase()}
        title={article.title}
        subtitle={article.excerpt}
      >
        <div className="mt-5 flex items-center gap-4 text-xs text-atlas-muted">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(article.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {article.readingTime}
          </span>
          <Badge variant="outline" className="border-atlas-blue/30 text-atlas-cyan">
            {article.category}
          </Badge>
        </div>
      </PageHeader>

      <PageSection>
        <div className="mx-auto max-w-3xl">
          <ProseContent>
            <p className="text-base font-medium text-white sm:text-lg">{article.excerpt}</p>
            <p>{article.content}</p>
          </ProseContent>
        </div>
      </PageSection>

      {/* Related */}
      <PageSection bordered={false}>
        <h2 className="font-display text-2xl font-bold text-white">Related articles</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="card-atlas group rounded-xl p-5"
            >
              <Badge variant="outline" className="border-atlas-blue/40 bg-atlas-blue/10 text-atlas-cyan">
                {a.category}
              </Badge>
              <h3 className="mt-3 font-display text-base font-bold text-white group-hover:text-atlas-cyan">
                {a.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-atlas-muted">
                {a.excerpt}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-atlas-cyan group-hover:text-white">
                Read
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All articles
            </Link>
          </Button>
        </div>
      </PageSection>
    </>
  );
}
