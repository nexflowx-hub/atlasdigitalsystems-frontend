"use client";

import { useSyncExternalStore } from "react";

function subscribeMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getMotionServerSnapshot() {
  return false;
}

/**
 * Hero globe built around a geographically recognisable orthographic Earth
 * asset instead of hand-drawn continent shapes. The Earth itself remains
 * visually stable while the orbital/data layers animate around it, which
 * avoids the "flat disc spinning" effect and keeps motion physically legible.
 */
export function GlobeHeroVisual() {
  const reduced = useSyncExternalStore(
    subscribeMotion,
    getMotionSnapshot,
    getMotionServerSnapshot
  );

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] select-none">
      <div className="absolute inset-[6%] rounded-full bg-atlas-blue/20 blur-[90px]" />
      <div className="absolute inset-[20%] rounded-full bg-atlas-cyan/15 blur-[65px]" />

      {/* Deep-space halo */}
      <div className="absolute inset-[5%] rounded-full border border-atlas-blue/10 bg-[radial-gradient(circle_at_38%_30%,rgba(23,200,255,0.08),transparent_54%)]" />

      {/* Orbit 1 */}
      <div
        className={`absolute left-[2%] top-[17%] h-[66%] w-[96%] rounded-[50%] border border-atlas-blue/25 ${
          reduced ? "" : "animate-spin-slow"
        }`}
        style={{ transform: "rotate(-14deg)", animationDuration: "46s" }}
        aria-hidden="true"
      >
        <span className="absolute left-[18%] top-[-3px] h-2.5 w-2.5 rounded-full bg-atlas-cyan shadow-[0_0_18px_4px_rgba(23,200,255,0.75)]" />
      </div>

      {/* Orbit 2 */}
      <div
        className={`absolute left-[11%] top-[12%] h-[76%] w-[78%] rounded-[50%] border border-atlas-cyan/15 ${
          reduced ? "" : "animate-spin-reverse"
        }`}
        style={{ transform: "rotate(37deg)", animationDuration: "34s" }}
        aria-hidden="true"
      >
        <span className="absolute right-[12%] top-[8%] h-2 w-2 rounded-full bg-atlas-blue shadow-[0_0_14px_3px_rgba(0,141,255,0.8)]" />
      </div>

      {/* Accurate Earth visual */}
      <div
        className={`absolute inset-[14%] ${reduced ? "" : "animate-atlas-earth-float"}`}
      >
        <img
          src="/images/hero/earth-real.svg"
          alt="Earth viewed from the Atlantic, representing Atlas Digital Systems' international digital reach"
          className="h-full w-full object-contain drop-shadow-[0_28px_58px_rgba(0,141,255,0.38)]"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[linear-gradient(115deg,rgba(255,255,255,0.10),transparent_28%,transparent_64%,rgba(0,0,0,0.20))] mix-blend-screen" />
      </div>

      {/* Data nodes */}
      <div className={`absolute inset-0 ${reduced ? "" : "animate-float"}`} aria-hidden="true">
        <div className="absolute left-[7%] top-[34%] flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-atlas-cyan shadow-[0_0_10px_2px_rgba(23,200,255,0.8)]" />
          <span className="h-px w-10 bg-gradient-to-r from-atlas-cyan/70 to-transparent" />
        </div>
        <div className="absolute right-[4%] top-[26%] flex items-center gap-2">
          <span className="h-px w-12 bg-gradient-to-l from-atlas-blue/70 to-transparent" />
          <span className="h-2.5 w-2.5 rounded-full bg-atlas-blue shadow-[0_0_13px_3px_rgba(0,141,255,0.85)]" />
        </div>
        <div className="absolute bottom-[26%] left-[13%] flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_8px_2px_rgba(255,255,255,0.55)]" />
          <span className="h-px w-7 bg-gradient-to-r from-white/50 to-transparent" />
        </div>
      </div>

      {/* Factual location chip */}
      <div className="absolute left-0 top-[13%] hidden sm:block">
        <div className="glass rounded-xl px-3.5 py-2.5 shadow-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
            Delaware · USA
          </p>
          <p className="mt-1 text-xs text-atlas-white/75">Digital technology company</p>
        </div>
      </div>

      {/* Callout */}
      <div
        className={`absolute bottom-[1%] right-0 max-w-[245px] ${
          reduced ? "" : "animate-float"
        }`}
        style={{ animationDuration: "7.5s", animationDelay: "1s" }}
      >
        <div className="glass-strong rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-atlas-cyan/55 opacity-70" />
              )}
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-atlas-cyan shadow-[0_0_8px_2px_rgba(23,200,255,0.75)]" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-atlas-cyan">
              Atlas Systems
            </span>
          </div>
          <p className="mt-2.5 font-display text-base font-bold leading-tight text-white">
            Innovate. Automate. Grow.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-atlas-muted">
            Software, AI and automation built around practical business needs.
          </p>
        </div>
      </div>
    </div>
  );
}
