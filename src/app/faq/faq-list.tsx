"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, faqCategories, getFAQsByCategory } from "@/data/faqs";

export function FAQList() {
  const [active, setActive] = useState<string>("All");

  const items = useMemo(
    () => getFAQsByCategory(active as Parameters<typeof getFAQsByCategory>[0]),
    [active]
  );

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {faqCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              active === cat
                ? "border-atlas-blue bg-atlas-blue/15 text-atlas-cyan"
                : "border-atlas-border text-atlas-muted hover:border-atlas-blue/40 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="mt-6 space-y-3">
        {items.map((item, i) => (
          <AccordionItem
            key={`${item.category}-${i}`}
            value={`item-${i}`}
            className="card-atlas overflow-hidden rounded-xl border border-atlas-border px-5"
          >
            <AccordionTrigger className="hover:no-underline">
              <span className="flex items-center gap-3 pr-4 text-left">
                <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-atlas-cyan">
                  {item.category}
                </span>
                <span className="text-sm font-semibold text-white">
                  {item.question}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="pl-[88px] text-sm leading-relaxed text-atlas-muted">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {items.length === 0 && (
        <p className="mt-6 text-sm text-atlas-muted">No questions in this category yet.</p>
      )}
    </div>
  );
}

// Ensure faqs is referenced (also exported via getFAQsByCategory).
void faqs;
