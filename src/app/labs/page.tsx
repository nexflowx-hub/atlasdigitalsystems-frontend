import type { Metadata } from "next";
import { FlaskConical, FlaskRound, Lightbulb, Beaker } from "lucide-react";
import { DivisionPage } from "@/components/site/division-page";

export const metadata: Metadata = {
  title: "Atlas Labs",
  description:
    "Atlas Labs — Explore. Experimental product area with early-access tools, experiments and prototype products. Clearly labelled as Preview or Early Access.",
  alternates: { canonical: "/labs" },
};

export default function LabsDivisionPage() {
  return (
    <DivisionPage
      divisionKey="labs"
      divisionName="Atlas Labs"
      verb="Explore."
      eyebrow="DIVISION — LABS"
      description="Experimental product area. Early-access tools, experiments and prototype products. Items here are clearly labelled as Preview or Early Access and should not be relied on for production work."
      experimental
      labsNote="Atlas Labs is an experimental product area. Early-access tools, experiments and prototype products. Items here are clearly labelled as Preview or Early Access and should not be relied on for production work."
      sections={[
        {
          icon: FlaskConical,
          eyebrow: "WHAT IT IS",
          title: "An area for experiments.",
          body: "Atlas Labs is where we explore early-access tools, experiments and prototype products. Items here are clearly labelled as Preview or Early Access. They may change, be deprecated, or never reach general availability.",
          bullets: [
            "Early-access tools and prototypes",
            "Experiments and conceptual previews",
            "Clearly labelled — not for production",
            "May change or be deprecated without notice",
          ],
        },
        {
          icon: FlaskRound,
          eyebrow: "HOW TO READ IT",
          title: "Preview, not promise.",
          body: "Treat Atlas Labs items as previews of what we are exploring — not commitments. Anything you can actually use today is published in the main catalogue and clearly marked as Active.",
        },
        {
          icon: Lightbulb,
          eyebrow: "WHAT YOU CAN DO",
          title: "Stay informed.",
          body: "We publish updates on Labs items through the blog and developer channels. To request Early Access when slots open for a specific experiment, contact the developers team.",
        },
        {
          icon: Beaker,
          eyebrow: "RESPONSIBLE USE",
          title: "Use with eyes open.",
          body: "If you try a Labs item, expect rough edges. Do not build production systems on top of items labelled Preview or Early Access. Verify any AI output against original sources.",
        },
      ]}
      cta={{
        title: "Explore the main catalogue.",
        body: "For products you can rely on today, browse the main catalogue. For developer platform news, visit the developers portal.",
        primary: { label: "Explore products", href: "/products" },
        secondary: { label: "Developers", href: "/developers" },
      }}
    />
  );
}
