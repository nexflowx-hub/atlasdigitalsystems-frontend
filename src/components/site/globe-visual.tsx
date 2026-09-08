"use client";

import { useSyncExternalStore } from "react";

/**
 * Original animated digital globe / orbital network visual.
 * Pure SVG + CSS — no heavy dependencies. Respects prefers-reduced-motion.
 */
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

export function GlobeHeroVisual() {
  const reduced = useSyncExternalStore(subscribeMotion, getMotionSnapshot, getMotionServerSnapshot);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-atlas-blue/20 blur-3xl" />
      <div className="absolute inset-[15%] rounded-full bg-atlas-cyan/10 blur-2xl" />

      {/* Orbital rings */}
      <div
        className={`absolute inset-[2%] rounded-full border border-atlas-blue/20 ${reduced ? "" : "animate-spin-slow"}`}
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-atlas-cyan shadow-[0_0_12px_2px_rgba(23,200,255,0.8)]" />
      </div>
      <div
        className={`absolute inset-[12%] rounded-full border border-atlas-cyan/15 ${reduced ? "" : "animate-spin-reverse"}`}
        style={{ transform: "rotate(45deg)" }}
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-atlas-blue shadow-[0_0_10px_2px_rgba(0,141,255,0.8)]" />
      </div>

      {/* Globe */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-[18%] h-[64%] w-[64%]"
        role="img"
        aria-label="Digital globe representing global software and data"
      >
        <defs>
          <radialGradient id="globe-grad" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#0C2A47" />
            <stop offset="55%" stopColor="#061229" />
            <stop offset="100%" stopColor="#040B13" />
          </radialGradient>
          <radialGradient id="globe-highlight" cx="32%" cy="28%" r="40%">
            <stop offset="0%" stopColor="rgba(23,200,255,0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="meridian-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(23,200,255,0.5)" />
            <stop offset="100%" stopColor="rgba(0,141,255,0.15)" />
          </linearGradient>
        </defs>

        {/* Sphere */}
        <circle cx="200" cy="200" r="160" fill="url(#globe-grad)" stroke="rgba(0,141,255,0.3)" strokeWidth="1" />
        <circle cx="200" cy="200" r="160" fill="url(#globe-highlight)" />

        {/* Meridians (longitude) */}
        <g
          stroke="url(#meridian-grad)"
          strokeWidth="1"
          fill="none"
          className={reduced ? "" : "animate-spin-slow"}
          style={{ transformOrigin: "200px 200px" }}
        >
          <ellipse cx="200" cy="200" rx="160" ry="160" />
          <ellipse cx="200" cy="200" rx="120" ry="160" />
          <ellipse cx="200" cy="200" rx="70" ry="160" />
          <ellipse cx="200" cy="200" rx="20" ry="160" />
        </g>

        {/* Parallels (latitude) */}
        <g stroke="rgba(0,141,255,0.25)" strokeWidth="1" fill="none">
          <ellipse cx="200" cy="200" rx="160" ry="40" />
          <ellipse cx="200" cy="200" rx="160" ry="90" />
          <ellipse cx="200" cy="200" rx="160" ry="135" />
          <line x1="40" y1="200" x2="360" y2="200" stroke="rgba(23,200,255,0.4)" />
        </g>

        {/* City-light dots representing digital activity */}
        <g fill="#17C8FF">
          <circle cx="150" cy="130" r="2"><animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" /></circle>
          <circle cx="250" cy="160" r="1.5"><animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" /></circle>
          <circle cx="200" cy="220" r="2"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" /></circle>
          <circle cx="140" cy="250" r="1.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="5s" repeatCount="indefinite" /></circle>
          <circle cx="280" cy="240" r="2"><animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.2s" repeatCount="indefinite" /></circle>
          <circle cx="170" cy="180" r="1"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite" /></circle>
          <circle cx="230" cy="120" r="1.5"><animate attributeName="opacity" values="0.6;1;0.6" dur="4.2s" repeatCount="indefinite" /></circle>
          <circle cx="300" cy="200" r="1"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.8s" repeatCount="indefinite" /></circle>
          <circle cx="120" cy="200" r="1.5"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="4.5s" repeatCount="indefinite" /></circle>
          <circle cx="260" cy="280" r="1"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.3s" repeatCount="indefinite" /></circle>
        </g>

        {/* Connection arcs */}
        <g stroke="rgba(23,200,255,0.5)" strokeWidth="1" fill="none">
          <path d="M150 130 Q200 80 250 160" strokeDasharray="2 3">
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M200 220 Q260 200 280 240" strokeDasharray="2 3">
            <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
          </path>
          <path d="M140 250 Q170 210 170 180" strokeDasharray="2 3">
            <animate attributeName="opacity" values="1;0;1" dur="4.5s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>

      {/* Floating highlight card — bottom right */}
      <div className="absolute -bottom-2 right-0 max-w-[230px] animate-float">
        <div className="glass-strong rounded-xl p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-atlas-cyan shadow-[0_0_8px_2px_rgba(23,200,255,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-atlas-cyan">
              Atlas
            </span>
          </div>
          <p className="mt-2 font-display text-sm font-bold text-white">
            Innovate. Automate. Grow.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-atlas-muted">
            Technology that works around you.
          </p>
        </div>
      </div>
    </div>
  );
}
