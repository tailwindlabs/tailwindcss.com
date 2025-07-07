"use client";

import { useRef } from "react";
import { createZeroUI } from "./zero-ui-custom-build";

/**
 * ZeroTooltip
 * -----------
 * Uses a minimal, local build of React Zero-UI to eliminate React-based hover
 * rerenders. The helper mutates a scoped `data-tooltip` attribute, which Tailwind
 * v4 styles via the  `@custom-variant tooltip-on` rule (defined in globals.css).
 *
 * Only this component relies on the helper; no global state or extra deps added.
 */
export function ZeroTooltip({ color, tooltip, shadeIdx }: { color: string; tooltip: string; shadeIdx: number }) {
  // Local UI state: "on" | "off"
  const { set } = createZeroUI("tooltip");

  /* refs for anchor & popover */
  const anchorRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  /* clamp popover to viewport */
  const position = () => {
    const anchor = anchorRef.current;
    const tooltip = popoverRef.current;
    if (!anchor || !tooltip) return;

    const a = anchor.getBoundingClientRect();
    const t = tooltip.getBoundingClientRect();

    let left = a.left + (a.width - t.width) / 2;
    let top = a.top - 24;

    const padding = 16;
    const maxLeft = window.innerWidth - t.width - padding;
    const maxTop = window.innerHeight - t.height - padding;

    left = Math.min(Math.max(left, padding), maxLeft);
    top = Math.min(top, maxTop);

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  };

  /* hover handlers */
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    set("on", { scope: e.currentTarget });
    position();
  };

  const handleLeave = () => {
    set("off", { scope: anchorRef.current! });
  };

  return (
    <div
      ref={anchorRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative"
      /* Initial attribute value. Zero-UI's build step normally injects this. */
      data-tooltip="off"
    >
      {/* decor lines for the first column */}
      {shadeIdx === 0 && (
        <>
          <div className="pointer-events-none absolute -top-1 -left-1 h-screen border-l border-gray-950/5 dark:border-white/10" />
          <div className="pointer-events-none absolute -top-1 -left-1 h-16 origin-top-left translate-px rotate-225 border-l border-gray-950/5 sm:h-24 dark:border-white/10" />
        </>
      )}

      {/* colored square */}
      <div
        className="h-(--height) w-(--width) bg-(--color) inset-ring inset-ring-gray-950/10 transition-opacity group-hover:opacity-75 hover:opacity-100 dark:inset-ring-white/10"
        style={{ "--color": `var(--color-${color})` } as React.CSSProperties}
      />

      {/* popover tooltip — hoisted to top-layer */}
      <div
        ref={popoverRef}
        className="pointer-events-none fixed z-9999 rounded-full border border-gray-950 bg-gray-950/90 pt-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/6 font-medium whitespace-nowrap text-white opacity-0 inset-ring inset-ring-white/10 transition-opacity dark:border-white/10 tooltip-on:opacity-100 tooltip-on:delay-100"
      >
        {tooltip}
      </div>
    </div>
  );
}
