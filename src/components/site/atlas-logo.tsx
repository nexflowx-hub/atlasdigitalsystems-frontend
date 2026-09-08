import { cn } from "@/lib/utils";

export function AtlasLogo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
          <defs>
            <linearGradient id="atlas-logo-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#17C8FF" />
              <stop offset="100%" stopColor="#008DFF" />
            </linearGradient>
          </defs>
          {/* Triangle "A" mark */}
          <path d="M20 4 L36 34 L28 34 L20 18 L12 34 L4 34 Z" fill="url(#atlas-logo-grad)" />
          <path d="M20 4 L36 34 L28 34 L20 18 L12 34 L4 34 Z" fill="none" stroke="#17C8FF" strokeWidth="0.5" opacity="0.6" />
          <circle cx="20" cy="28" r="2.4" fill="#040B13" />
        </svg>
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-extrabold tracking-tight text-white">
            ATLAS
          </span>
          <span className="text-[9px] font-medium tracking-[0.22em] text-atlas-muted">
            DIGITAL SYSTEMS
          </span>
        </span>
      )}
    </span>
  );
}
