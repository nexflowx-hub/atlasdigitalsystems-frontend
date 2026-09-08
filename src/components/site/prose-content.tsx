import { cn } from "@/lib/utils";

/** Long-form legal / informational content with consistent typography. */
export function ProseContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-6 text-atlas-muted",
        "[&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3",
        "[&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2",
        "[&_p]:text-sm [&_p]:leading-relaxed sm:[&_p]:text-base",
        "[&_li]:text-sm sm:[&_li]:text-base [&_li]:leading-relaxed [&_li]:ml-1",
        "[&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5",
        "[&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5",
        "[&_a]:text-atlas-cyan [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-white",
        "[&_strong]:text-white [&_strong]:font-semibold",
        "[&_blockquote]:border-l-2 [&_blockquote]:border-atlas-blue/40 [&_blockquote]:pl-4 [&_blockquote]:italic",
        className
      )}
    >
      {children}
    </div>
  );
}
