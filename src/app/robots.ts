import type { MetadataRoute } from "next";
import { company } from "@/config/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/checkout/success", "/checkout/cancelled", "/cart"],
    },
    sitemap: `${company.siteUrl}/sitemap.xml`,
    host: company.siteUrl,
  };
}
