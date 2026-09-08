/**
 * ATLAS DIGITAL SYSTEMS — central company configuration.
 * All company facts live here so they can be updated in one place.
 * Environment variables override defaults where provided.
 */
export const company = {
  brandName: "ATLAS DIGITAL SYSTEMS",
  legalName: "ATLAS DIGITAL SYSTEMS, LLC",
  shortName: "Atlas",
  domain: "atlasdigitalsystems.co",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://atlasdigitalsystems.co",
  entityType: "Limited Liability Company",
  jurisdiction: "Delaware, United States",
  delawareFileNumber:
    process.env.NEXT_PUBLIC_DELAWARE_FILE_NUMBER || "[DELAWARE_FILE_NUMBER]",
  businessAddress:
    process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "[ATLAS_BUSINESS_ADDRESS]",
  primaryBusiness:
    "Software, SaaS, artificial intelligence, automation and digital technology products.",
  copyrightYear: 2026,
  emails: {
    general:
      process.env.NEXT_PUBLIC_GENERAL_EMAIL || "hello@atlasdigitalsystems.co",
    support:
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@atlasdigitalsystems.co",
    sales: process.env.NEXT_PUBLIC_SALES_EMAIL || "sales@atlasdigitalsystems.co",
    billing:
      process.env.NEXT_PUBLIC_BILLING_EMAIL || "billing@atlasdigitalsystems.co",
    privacy:
      process.env.NEXT_PUBLIC_PRIVACY_EMAIL || "privacy@atlasdigitalsystems.co",
    security:
      process.env.NEXT_PUBLIC_SECURITY_EMAIL ||
      "security@atlasdigitalsystems.co",
    legal: process.env.NEXT_PUBLIC_LEGAL_EMAIL || "legal@atlasdigitalsystems.co",
    developers:
      process.env.NEXT_PUBLIC_DEVELOPERS_EMAIL ||
      "developers@atlasdigitalsystems.co",
  },
  phone: {
    display: "+1 302-595-5455",
    e164: process.env.NEXT_PUBLIC_PHONE || "+13025955455",
    note: "Voice & SMS",
  },
  social: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
  },
  positioning: {
    primary: "Build smarter. Operate faster.",
    supporting:
      "Software, AI and automation products designed to turn complex work into practical systems.",
    institutional:
      "ATLAS DIGITAL SYSTEMS develops software, SaaS applications, artificial intelligence tools, automation systems, data products and digital technology solutions for businesses and professionals.",
  },
  divisions: [
    { key: "ai", name: "Atlas AI", verb: "Think.", href: "/ai" },
    { key: "software", name: "Atlas Software", verb: "Build.", href: "/software" },
    { key: "automate", name: "Atlas Automate", verb: "Connect.", href: "/automate" },
    { key: "data", name: "Atlas Data", verb: "Understand.", href: "/data" },
    { key: "cloud", name: "Atlas Cloud", verb: "Run.", href: "/cloud" },
    { key: "labs", name: "Atlas Labs", verb: "Explore.", href: "/labs" },
  ],
} as const;

export type Company = typeof company;
