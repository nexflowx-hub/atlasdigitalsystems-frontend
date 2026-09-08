import type { MetadataRoute } from "next";
import { company } from "@/config/company";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "", "/products", "/digital-products", "/pricing", "/business",
    "/developers", "/developers/docs", "/developers/api", "/developers/integrations",
    "/how-it-works", "/about", "/company-information", "/contact", "/faq",
    "/services", "/solutions", "/support", "/blog",
    "/ai", "/software", "/automate", "/data", "/cloud", "/labs",
    "/cart", "/checkout", "/payment-methods", "/security",
    "/terms", "/privacy", "/cookies", "/refund-policy", "/cancellation-policy",
    "/delivery-policy", "/acceptable-use", "/ai-policy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${base}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes, ...solutionRoutes, ...articleRoutes];
}
