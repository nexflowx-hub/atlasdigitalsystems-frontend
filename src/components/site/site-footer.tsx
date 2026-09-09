"use client";

import Link from "next/link";
import { Linkedin, Youtube, Instagram, Mail, Phone, MapPin, FileText } from "lucide-react";
import { AtlasLogo } from "@/components/site/atlas-logo";
import { company } from "@/config/company";
import { useTranslations } from "@/lib/i18n/context";

const footerNav = {
  products: [
    { label: "Atlas AI", href: "/ai" },
    { label: "Atlas Software", href: "/software" },
    { label: "Atlas Automate", href: "/automate" },
    { label: "Atlas Data", href: "/data" },
    { label: "Digital Products", href: "/digital-products" },
    { label: "All Products", href: "/products" },
  ],
  solutions: [
    { label: "Business", href: "/solutions/business" },
    { label: "Marketing", href: "/solutions/marketing" },
    { label: "Sales", href: "/solutions/sales" },
    { label: "Operations", href: "/solutions/operations" },
    { label: "Startups", href: "/solutions/startups" },
    { label: "Teams", href: "/solutions/teams" },
  ],
  developers: [
    { label: "API", href: "/developers/api" },
    { label: "Documentation", href: "/developers/docs" },
    { label: "Integrations", href: "/developers/integrations" },
    { label: "Early Access", href: "/developers" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/support" },
    { label: "Templates", href: "/digital-products" },
    { label: "Help Center", href: "/support" },
    { label: "FAQ", href: "/faq" },
    { label: "Security", href: "/security" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Company Information", href: "/company-information" },
    { label: "Contact", href: "/contact" },
    { label: "For Business", href: "/business" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cancellation Policy", href: "/cancellation-policy" },
    { label: "Delivery Policy", href: "/delivery-policy" },
    { label: "Acceptable Use", href: "/acceptable-use" },
    { label: "AI Policy", href: "/ai-policy" },
    { label: "Payment Methods", href: "/payment-methods" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: company.social.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: company.social.instagram, label: "Instagram" },
  { icon: Youtube, href: company.social.youtube, label: "YouTube" },
].filter((item) => Boolean(item.href));

export function SiteFooter() {
  const t = useTranslations();

  return (
    <footer className="relative mt-auto border-t border-atlas-border bg-atlas-night">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-atlas-blue/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-3">
            <AtlasLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-atlas-muted">{t("footer.tagline")}</p>
            {socialLinks.length > 0 && (
              <div className="mt-5 flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-atlas-border text-atlas-muted transition-colors hover:border-atlas-blue/50 hover:text-atlas-cyan"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <FooterCol title={t("footer.products")} links={footerNav.products} className="lg:col-span-2" />
          <FooterCol title={t("footer.solutions")} links={footerNav.solutions} className="lg:col-span-2" />
          <FooterCol title={t("footer.developers")} links={footerNav.developers} className="lg:col-span-2" />
          <FooterCol title={t("footer.resources")} links={footerNav.resources} className="lg:col-span-1" />
          <FooterCol title={t("footer.company")} links={footerNav.company} className="lg:col-span-2" />
        </div>

        <div className="mt-10 border-t border-atlas-border pt-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-atlas-muted">{t("footer.legal")}</span>
            {footerNav.legal.map((l) => (
              <Link key={l.href + l.label} href={l.href} className="text-xs text-atlas-muted transition-colors hover:text-atlas-cyan">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-atlas-border bg-atlas-void/60">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-atlas-blue/30 bg-atlas-blue/5 px-3 py-1">
                <FileText className="h-3.5 w-3.5 text-atlas-cyan" />
                <span className="text-xs font-medium text-atlas-cyan">Legal Entity</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">{company.legalName}</h3>
              <p className="mt-1 text-sm text-atlas-muted">{t("footer.institutional")}</p>
              <p className="mt-1 text-sm text-atlas-muted">{company.jurisdiction}</p>
              {company.businessAddress && (
                <p className="mt-2 max-w-md text-xs leading-relaxed text-atlas-muted">Business address: {company.businessAddress}</p>
              )}
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-atlas-muted">
                {company.delawareFileNumber && (
                  <span>
                    {t("footer.delawareFile")}: <span className="font-mono text-atlas-white/70">{company.delawareFileNumber}</span>
                  </span>
                )}
                <span>{t("footer.domain")}: <span className="font-mono text-atlas-white/70">{company.domain}</span></span>
              </div>
            </div>

            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-atlas-muted">Contact</p>
              <ul className="mt-3 space-y-2 text-sm">
                <ContactEmail email={company.emails.general} />
                <ContactEmail email={company.emails.support} />
                <ContactEmail email={company.emails.billing} />
                <li>
                  <a href={`tel:${company.phone.e164}`} className="flex items-center gap-2 text-atlas-white/80 hover:text-atlas-cyan">
                    <Phone className="h-4 w-4 text-atlas-cyan" />
                    {company.phone.display} — {company.phone.note}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-atlas-muted">Departments</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li><a href={`mailto:${company.emails.sales}`} className="text-atlas-white/70 hover:text-atlas-cyan">Sales</a></li>
                <li><a href={`mailto:${company.emails.privacy}`} className="text-atlas-white/70 hover:text-atlas-cyan">Privacy</a></li>
                <li><a href={`mailto:${company.emails.security}`} className="text-atlas-white/70 hover:text-atlas-cyan">Security</a></li>
                <li><a href={`mailto:${company.emails.legal}`} className="text-atlas-white/70 hover:text-atlas-cyan">Legal</a></li>
                <li><a href={`mailto:${company.emails.developers}`} className="text-atlas-white/70 hover:text-atlas-cyan">Developers</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-atlas-border pt-6 sm:flex-row">
            <p className="text-xs text-atlas-muted">© {company.copyrightYear} {company.legalName}. {t("footer.rights")}</p>
            <p className="flex items-center gap-1.5 text-xs text-atlas-muted"><MapPin className="h-3 w-3" />{company.jurisdiction}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactEmail({ email }: { email: string }) {
  return (
    <li>
      <a href={`mailto:${email}`} className="flex items-center gap-2 text-atlas-white/80 hover:text-atlas-cyan">
        <Mail className="h-4 w-4 text-atlas-cyan" />
        {email}
      </a>
    </li>
  );
}

function FooterCol({ title, links, className }: { title: string; links: { label: string; href: string }[]; className?: string }) {
  return (
    <div className={className}>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-atlas-muted">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-sm text-atlas-white/70 transition-colors hover:text-atlas-cyan">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
