import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-atlas-border">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-atlas-void/0 to-atlas-void" />
      <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-atlas-blue/10 blur-[100px]" />
      <div className={cn("relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20", className)}>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-cyan">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-atlas-muted sm:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageSection({
  children,
  className,
  bordered = true,
}: {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section className={cn(bordered && "border-b border-atlas-border", "py-14 lg:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
