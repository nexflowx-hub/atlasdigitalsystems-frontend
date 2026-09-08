import type { Metadata } from "next";
import { Cloud, Server, Network, ShieldCheck } from "lucide-react";
import { DivisionPage } from "@/components/site/division-page";

export const metadata: Metadata = {
  title: "Atlas Cloud",
  description:
    "Atlas Cloud — Run. Technology architecture and deployment positioning for software, AI and automation systems.",
  alternates: { canonical: "/cloud" },
};

export default function CloudDivisionPage() {
  return (
    <DivisionPage
      divisionKey="cloud"
      divisionName="Atlas Cloud"
      verb="Run."
      eyebrow="DIVISION — CLOUD"
      description="Technology architecture and deployment positioning for software, AI and automation systems. We do not operate proprietary datacenters or global cloud regions — we deploy on established cloud infrastructure."
      cloudNote="Atlas does not own datacenters, global cloud regions, or proprietary cloud infrastructure. 'Atlas Cloud' refers to our technology architecture and deployment positioning — we deploy on established cloud infrastructure with managed services where appropriate."
      sections={[
        {
          icon: Cloud,
          eyebrow: "POSITIONING",
          title: "Architecture and deployment.",
          body: "Atlas Cloud is our deployment positioning — how we design, deploy and operate the systems we build. We use established cloud providers and managed services rather than operating our own infrastructure.",
          bullets: [
            "Technology architecture design",
            "Deployment positioning on established cloud providers",
            "Scalability planning",
            "Integration architecture",
          ],
        },
        {
          icon: Server,
          eyebrow: "HOW WE DEPLOY",
          title: "Established cloud infrastructure.",
          body: "Our software and services are deployed on established cloud infrastructure with managed compute, storage and networking. We select deployment patterns that fit the workload — not a one-size-fits-all cloud.",
        },
        {
          icon: Network,
          eyebrow: "SERVICES",
          title: "Technical Architecture.",
          body: "A productized service for technology architecture and deployment positioning — architecture design, deployment positioning, scalability planning and integration architecture.",
        },
        {
          icon: ShieldCheck,
          eyebrow: "SECURITY",
          title: "Security by design.",
          body: "We use TLS for transport, access controls for sensitive surfaces, environment-managed secrets and payment processing through our configured provider. We do not claim certifications we have not obtained.",
        },
      ]}
      cta={{
        title: "Scope your architecture.",
        body: "Talk to our team about technology architecture and deployment positioning for your systems.",
        primary: { label: "For business", href: "/business" },
        secondary: { label: "Contact us", href: "/contact" },
      }}
    />
  );
}
