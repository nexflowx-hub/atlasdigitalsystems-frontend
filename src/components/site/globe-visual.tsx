"use client";

import { useSyncExternalStore } from "react";

/**
 * Modern, professional animated digital globe.
 * Layered composition: realistic Earth sphere with continents + city lights,
 * atmospheric rim glow, orbital satellite rings, floating data nodes, and
 * a glassmorphism "Innovate. Automate. Grow." card. Respects prefers-reduced-motion.
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
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      {/* Outer atmospheric glow */}
      <div className="absolute inset-[-10%] rounded-full bg-atlas-blue/20 blur-[100px]" />
      <div className="absolute inset-[5%] rounded-full bg-atlas-cyan/10 blur-[70px]" />

      {/* Outermost faint orbit ring with satellite */}
      <div
        className={`absolute inset-[-4%] rounded-full border border-atlas-blue/10 ${reduced ? "" : "animate-spin-slow"}`}
        style={{ animationDuration: "40s" }}
      >
        <span className="absolute left-1/2 top-[-3px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-atlas-cyan shadow-[0_0_14px_3px_rgba(23,200,255,0.9)]" />
      </div>

      {/* Mid orbit ring — tilted */}
      <div
        className={`absolute inset-[2%] rounded-full border border-atlas-cyan/15 ${reduced ? "" : "animate-spin-reverse"}`}
        style={{ transform: "rotateX(72deg)", animationDuration: "28s" }}
      >
        <span className="absolute left-1/2 top-[-2px] h-2 w-2 -translate-x-1/2 rounded-full bg-atlas-blue shadow-[0_0_12px_3px_rgba(0,141,255,0.9)]" />
      </div>

      {/* Inner orbit ring — counter-tilted */}
      <div
        className={`absolute inset-[8%] rounded-full border border-atlas-blue/20 ${reduced ? "" : "animate-spin-slow"}`}
        style={{ transform: "rotateX(108deg)", animationDuration: "20s" }}
      >
        <span className="absolute left-1/2 top-[-2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
      </div>

      {/* The Globe — realistic Earth */}
      <div className="absolute inset-[16%]">
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full drop-shadow-[0_25px_50px_rgba(0,141,255,0.35)]"
          role="img"
          aria-label="Digital globe representing global software, AI and data"
        >
          <defs>
            {/* Earth sphere gradient — deep ocean blue */}
            <radialGradient id="earth-sphere" cx="38%" cy="32%" r="78%">
              <stop offset="0%" stopColor="#0E3A66" />
              <stop offset="45%" stopColor="#082241" />
              <stop offset="100%" stopColor="#030B16" />
            </radialGradient>
            {/* Atmospheric rim highlight */}
            <radialGradient id="atmosphere" cx="50%" cy="50%" r="50%">
              <stop offset="85%" stopColor="rgba(0,141,255,0)" />
              <stop offset="95%" stopColor="rgba(23,200,255,0.35)" />
              <stop offset="100%" stopColor="rgba(0,141,255,0)" />
            </radialGradient>
            {/* Specular highlight */}
            <radialGradient id="specular" cx="32%" cy="28%" r="35%">
              <stop offset="0%" stopColor="rgba(120,200,255,0.45)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            {/* Continent gradient */}
            <linearGradient id="continent-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0A2540" />
              <stop offset="100%" stopColor="#061829" />
            </linearGradient>
            {/* Clip to sphere */}
            <clipPath id="globe-clip">
              <circle cx="200" cy="200" r="160" />
            </clipPath>
          </defs>

          {/* Atmospheric outer glow */}
          <circle cx="200" cy="200" r="172" fill="url(#atmosphere)" />

          {/* Ocean sphere */}
          <circle cx="200" cy="200" r="160" fill="url(#earth-sphere)" />

          {/* Continents (stylized landmasses) */}
          <g clipPath="url(#globe-clip)" fill="url(#continent-grad)" stroke="rgba(23,200,255,0.15)" strokeWidth="0.5">
            {/* North America */}
            <path d="M70 120 Q90 95 130 100 Q160 105 175 125 Q170 150 150 165 Q120 170 95 160 Q72 145 70 120 Z" />
            {/* South America */}
            <path d="M140 195 Q155 185 170 195 Q175 225 165 255 Q150 280 138 270 Q128 240 135 210 Z" />
            {/* Europe */}
            <path d="M195 115 Q215 110 230 120 Q228 135 215 140 Q200 138 193 128 Z" />
            {/* Africa */}
            <path d="M205 150 Q225 145 240 160 Q245 195 232 225 Q218 245 205 235 Q195 205 200 175 Z" />
            {/* Asia */}
            <path d="M235 110 Q280 100 320 115 Q335 135 325 160 Q300 170 270 165 Q245 155 235 135 Z" />
            {/* Australia */}
            <path d="M290 210 Q315 205 325 220 Q320 235 300 238 Q285 230 288 218 Z" />
          </g>

          {/* Latitude/longitude grid — subtle */}
          <g clipPath="url(#globe-clip)" stroke="rgba(23,200,255,0.18)" strokeWidth="0.6" fill="none">
            {/* meridians */}
            <ellipse cx="200" cy="200" rx="160" ry="160" />
            <ellipse cx="200" cy="200" rx="120" ry="160" />
            <ellipse cx="200" cy="200" rx="70" ry="160" />
            <ellipse cx="200" cy="200" rx="20" ry="160" />
            {/* parallels */}
            <ellipse cx="200" cy="200" rx="160" ry="40" />
            <ellipse cx="200" cy="200" rx="160" ry="90" />
            <ellipse cx="200" cy="200" rx="160" ry="135" />
            <line x1="40" y1="200" x2="360" y2="200" stroke="rgba(23,200,255,0.25)" />
          </g>

          {/* City lights — warm amber dots representing activity */}
          <g clipPath="url(#globe-clip)">
            <g fill="#FFD27A">
              <circle cx="110" cy="135" r="1.8"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite" /></circle>
              <circle cx="130" cy="145" r="1.2"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" /></circle>
              <circle cx="155" cy="220" r="1.5"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" /></circle>
              <circle cx="210" cy="130" r="1.6"><animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" /></circle>
              <circle cx="225" cy="180" r="1.3"><animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" /></circle>
              <circle cx="250" cy="135" r="1.8"><animate attributeName="opacity" values="0.4;1;0.4" dur="4.2s" repeatCount="indefinite" /></circle>
              <circle cx="280" cy="140" r="1.2"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.8s" repeatCount="indefinite" /></circle>
              <circle cx="300" cy="220" r="1.5"><animate attributeName="opacity" values="0.6;1;0.6" dur="3.3s" repeatCount="indefinite" /></circle>
              <circle cx="315" cy="155" r="1.3"><animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.5s" repeatCount="indefinite" /></circle>
              <circle cx="195" cy="200" r="1.4"><animate attributeName="opacity" values="0.7;1;0.7" dur="2.9s" repeatCount="indefinite" /></circle>
            </g>
            {/* Connection arcs between cities */}
            <g stroke="rgba(23,200,255,0.5)" strokeWidth="0.8" fill="none">
              <path d="M110 135 Q165 100 210 130" strokeDasharray="2 3">
                <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
              </path>
              <path d="M210 130 Q245 110 280 140" strokeDasharray="2 3">
                <animate attributeName="opacity" values="1;0;1" dur="4.5s" repeatCount="indefinite" />
              </path>
              <path d="M225 180 Q260 195 300 220" strokeDasharray="2 3">
                <animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite" />
              </path>
              <path d="M155 220 Q185 210 195 200" strokeDasharray="2 3">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
              </path>
            </g>
          </g>

          {/* Specular highlight (light from upper-left) */}
          <circle cx="200" cy="200" r="160" fill="url(#specular)" />

          {/* Rim light — bright cyan edge on the lit side */}
          <circle
            cx="200" cy="200" r="160"
            fill="none"
            stroke="rgba(23,200,255,0.5)"
            strokeWidth="1.5"
          />
          <circle
            cx="200" cy="200" r="159"
            fill="none"
            stroke="rgba(0,141,255,0.25)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Floating data nodes around the globe */}
      <div className={`absolute inset-0 ${reduced ? "" : "animate-float"}`} style={{ animationDuration: "8s" }}>
        <div className="absolute left-[8%] top-[30%] flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-atlas-cyan shadow-[0_0_8px_2px_rgba(23,200,255,0.8)]" />
          <span className="h-px w-8 bg-gradient-to-r from-atlas-cyan/60 to-transparent" />
        </div>
        <div className="absolute right-[6%] top-[22%] flex items-center gap-1.5">
          <span className="h-px w-10 bg-gradient-to-l from-atlas-blue/60 to-transparent" />
          <span className="h-2 w-2 rounded-full bg-atlas-blue shadow-[0_0_10px_2px_rgba(0,141,255,0.9)]" />
        </div>
        <div className="absolute left-[14%] bottom-[26%] flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-white shadow-[0_0_6px_1px_rgba(255,255,255,0.7)]" />
          <span className="h-px w-6 bg-gradient-to-r from-white/50 to-transparent" />
        </div>
      </div>

      {/* Glassmorphism callout card — bottom right, overlapping globe */}
      <div className="absolute -bottom-2 right-0 max-w-[240px] animate-float" style={{ animationDuration: "7s", animationDelay: "1s" }}>
        <div className="glass-strong rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-atlas-cyan/60 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-atlas-cyan shadow-[0_0_8px_2px_rgba(23,200,255,0.9)]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-atlas-cyan">
              Atlas
            </span>
          </div>
          <p className="mt-2.5 font-display text-base font-bold leading-tight text-white">
            Innovate. Automate. Grow.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-atlas-muted">
            Technology that works around you.
          </p>
        </div>
      </div>

      {/* Top-left floating mini stat chip */}
      <div className="absolute left-0 top-[14%] hidden sm:block">
        <div className="glass rounded-xl px-3 py-2 shadow-xl">
          <p className="font-display text-lg font-bold text-atlas-cyan">12+</p>
          <p className="text-[10px] uppercase tracking-wider text-atlas-muted">Products</p>
        </div>
      </div>
    </div>
  );
}
