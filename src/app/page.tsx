import { HeroSection } from "@/components/site/sections/hero-section";
import { DivisionsSection } from "@/components/site/sections/divisions-section";
import { FeaturedProductsSection } from "@/components/site/sections/featured-products-section";
import { BusinessSection } from "@/components/site/sections/business-section";
import { DigitalProductsSection, SaasProductsSection } from "@/components/site/sections/catalog-sections";
import { HowItWorksSection } from "@/components/site/sections/how-it-works-section";
import { DevelopersSection } from "@/components/site/sections/developers-section";
import { PricingSection } from "@/components/site/sections/pricing-section";
import { SecuritySection, PaymentMethodsSection } from "@/components/site/sections/security-payments-section";
import { FAQSection, CTASection } from "@/components/site/sections/faq-cta-section";
import { company } from "@/config/company";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.brandName,
  legalName: company.legalName,
  url: company.siteUrl,
  description: company.positioning.institutional,
  telephone: "+1-302-595-5455",
  email: company.emails.general,
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "Delaware",
  },
  areaServed: "Global",
  knowsAbout: ["Software", "SaaS", "Artificial Intelligence", "Automation", "Data"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.brandName,
  url: company.siteUrl,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSection />
      <DivisionsSection />
      <FeaturedProductsSection />
      <BusinessSection />
      <DigitalProductsSection />
      <SaasProductsSection />
      <HowItWorksSection />
      <DevelopersSection />
      <PricingSection />
      <SecuritySection />
      <PaymentMethodsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
