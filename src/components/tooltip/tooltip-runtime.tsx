"use client";

import { useEffect, useRef } from "react";

// Default id
const TOOLTIP_ELEMENT_ID = "color-tooltip";
const DEFAULT_TOOLTIP_CLASSES =
  "pointer-events-none absolute z-10 top-0 left-0 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/6 font-medium whitespace-nowrap text-white opacity-0 inset-ring inset-ring-white/10 data-[show]:opacity-100 data-[show]:transition-opacity data-[show]:duration-200 data-[show]:delay-100 will-change-[transform,opacity]";

interface TooltipOptions {
  /** Horizontal padding from edges of the screen */
  paddingX?: number;
  /** Top margin, accounts for header height */
  marginTop?: number;
  /** Custom CSS classes to apply to the tooltip */
  className?: string;
  /** Disable tooltip on touch devices */
  disableOnTouchDevice?: boolean;
  /** Vertical offset (negative moves up, positive moves down) */
  offsetY?: number;
  /** Vertical offset when tooltip is flipped below the trigger */
  altPositionOffsetY?: number;
  /** Whether tooltip content should update reactively */
  reactiveContent?: boolean;
}

type TooltipState = {
  /** The current x position of the mouse */
  mouseX: number;
  /** The current y position of the mouse */
  mouseY: number;
  /** The currently active tooltip trigger element */
  active: HTMLElement | null;
  /** The tooltip element itself */
  tooltip: HTMLDivElement | null;
  /** Request animation frame ID for batching updates */
  rafId: number;
  /** Observer for watching tooltip content changes */
  contentObserver: MutationObserver | null;
};

/**
 * @usage
 * // Add once at app root
 * <TooltipRuntime />
 *
 * // Then use anywhere via data attributes
 * <button data-tooltip-trigger data-tooltip-content="Save document">
 *   <SaveIcon />
 * </button>
 *
 * // Or with the TooltipTrigger component
 * <TooltipTrigger content="Delete item" as="button">
 *   <TrashIcon />
 * </TooltipTrigger>
 */

/**
 * @description
 * TooltipRuntime - Single-instance tooltip with Chrome/Safari scroll fix
 *
 * Problem: Chrome/Safari block mouse events for ~100ms after scroll.
 * Solution: Use elementFromPoint() during scroll to check hover state directly
 *
 * Optimizations:
 * - Single tooltip moved via translate3d (GPU-accelerated)
 * - 3 global listeners: pointermove, scroll, pointerleave
 * - Conditional Batched RAF scheduling (only when near triggers)
 * - Single DOM query per frame during interaction
 * - MutationObserver attached only to active trigger
 * - Zero work when idle
 * Scales efficiently to 500+ triggers with minimal memory footprint.
 *
 * @see https://codereview.chromium.org/1157303006/ - Chrome issue
 * @see https://groups.google.com/a/chromium.org/g/blink-dev/c/KIoVljZw5fc/ - Chrome team solution
 */

export function TooltipRuntime({
  paddingX = 0,
  marginTop = 0,
  offsetY = 0,
  altPositionOffsetY = 0,
  className = DEFAULT_TOOLTIP_CLASSES,
  disableOnTouchDevice = false,
  reactiveContent = true, // reactive by default
}: TooltipOptions = {}) {
  const stateRef = useRef<TooltipState>({
    mouseX: 0,
    mouseY: 0,
    active: null,
    tooltip: null,
    rafId: 0,
    contentObserver: null,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const state = stateRef.current;

    // Exit early on coarse pointers if requested
    if (disableOnTouchDevice && window.matchMedia("(pointer: coarse)").matches) return;

    // Create tooltip element once
    const tooltip = document.createElement("div");
    tooltip.id = TOOLTIP_ELEMENT_ID;
    tooltip.className = className;
    tooltip.style.cssText = "position:absolute;pointer-events:none;";
    tooltip.setAttribute("role", "tooltip");
    tooltip.setAttribute("aria-hidden", "true");
    // set in DOM
    document.body.appendChild(tooltip);
    // set in state
    state.tooltip = tooltip;

    // Position tooltip relative to trigger with edge clamping
    const position = (trigger: HTMLElement) => {
      const el = state.tooltip;
      if (!el) return;
      const content = trigger.getAttribute("data-tooltip-content");
      if (!content) return;

      // Set text first to measure intrinsic width
      el.textContent = content;

      const triggerRect = trigger.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // width is not stable: min and max x calculations necessary
      const tipWidth = el.offsetWidth;
      const minLeft = scrollX + paddingX;
      const maxLeft = scrollX + window.innerWidth - paddingX - tipWidth;

      // Center above trigger
      let xPosition = triggerRect.left + scrollX + triggerRect.width / 2 - tipWidth / 2;
      xPosition = Math.max(minLeft, Math.min(xPosition, maxLeft));

      // Prefer above; flip below if clipped (account for topbar w/ marginTop)
      let yPosition = triggerRect.top + scrollY + offsetY;
      if (yPosition < scrollY + marginTop) {
        // offset height is stable in this case
        yPosition = triggerRect.bottom + scrollY + altPositionOffsetY;
      }

      el.style.transform = `translate3d(${xPosition}px, ${yPosition}px, 0)`;
    };

    const hide = () => {
      // Disconnect observer when hiding
      state.contentObserver?.disconnect();
      state.contentObserver = null;

      // Remove active state
      state.active = null;
      state.tooltip?.removeAttribute("data-show");
    };

    // Show tooltip for trigger and setup content observer
    const show = (trigger: HTMLElement) => {
      // Swap active + clean up content observer
      hide();
      state.active = trigger;

      if (state.tooltip) {
        state.tooltip.removeAttribute("data-show"); // Essential!
        position(trigger);
        state.tooltip.setAttribute("data-show", "");
      }
      // Attach observer ONLY to the active trigger
      if (reactiveContent) {
        state.contentObserver = new MutationObserver(() => {
          // Only re-position if this trigger is still active
          if (state.active === trigger) {
            position(trigger);
          }
        });
        state.contentObserver.observe(trigger, {
          attributes: true,
          attributeFilter: ["data-tooltip-content"],
        });
      }
    };

    // RAF-batched check for tooltip trigger under cursor
    const checkTooltipState = () => {
      if (state.rafId) cancelAnimationFrame(state.rafId);
      state.rafId = requestAnimationFrame(() => {
        state.rafId = 0;

        const trigger = document
          .elementFromPoint(state.mouseX, state.mouseY)
          ?.closest("[data-tooltip-trigger]") as HTMLElement | null;

        if (trigger !== state.active) {
          trigger ? show(trigger) : hide();
        }
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      // check if active or target is a trigger and schedule update
      const target = e.target as Element;
      if (state.active || target?.closest("[data-tooltip-trigger]")) {
        checkTooltipState();
      }
    };

    window.addEventListener("scroll", checkTooltipState, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", hide, { passive: true });

    return () => {
      if (state.rafId) cancelAnimationFrame(state.rafId);
      if (state.contentObserver) state.contentObserver.disconnect();
      window.removeEventListener("scroll", checkTooltipState);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", hide);
      state.tooltip?.remove();
    };
  }, [className, paddingX, marginTop, disableOnTouchDevice, offsetY, altPositionOffsetY, reactiveContent]);

  return null;
}
