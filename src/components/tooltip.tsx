"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";

export interface TooltipOptions {
  /** Unique identifier for the tooltip element */
  id: string;

  /** Padding around edges of the screen */
  padding?: number;

  /** Top margin, accounts for header height */
  marginTop?: number;

  /** Custom CSS classes to apply to the tooltip */
  className?: string;

  /** Vertical offset (negative moves up, positive moves down) */
  offsetY?: number;
}

interface TooltipState {
  /** The current X position of the mouse */
  mouseX: number;

  /** The current Y position of the mouse */
  mouseY: number;

  /** The currently active tooltip trigger element */
  activeTrigger: HTMLElement | null;
}

/**
 * @usage
 * // Add once at app root
 * <SharedTooltip />
 *
 * // Then use anywhere via data attributes
 * <button data-tooltip-trigger data-tooltip-content="Save document" className="group">
 *   <SaveIcon  data-[tooltip-hover=true]:opacity-100 /> // for extra styles on children
 * </button>
 *
 * // Or with the TooltipTrigger component
 * <TooltipTrigger content="Delete item" as="button">
 *   <TrashIcon />
 * </TooltipTrigger>
 */

export function SharedTooltip({ id, padding = 0, marginTop = 0, offsetY = 0, className = "" }: TooltipOptions) {
  let tooltipRef = useRef<HTMLDivElement | null>(null);
  let stateRef = useRef<TooltipState>({
    mouseX: 0,
    mouseY: 0,
    activeTrigger: null,
  });

  let hideTimer = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let contentObserver = new MutationObserver(() => {
      if (!state.activeTrigger) return;

      update(state.activeTrigger, true);
    });

    let state = stateRef.current;

    function update(trigger: HTMLElement | null, observation: boolean = false) {
      let el = tooltipRef.current;
      if (!el || !el.parentElement) return;

      // A trigger with no content basically doesn't exist
      let content = trigger?.getAttribute("data-tooltip-content") ?? null;
      if (!content) trigger = null;

      // The trigger hasn't changed so nothing to update
      //
      // We skip this if we're called from an observer because that means the
      // tooltip text changed which may need to be repositioned
      if (trigger === state.activeTrigger && !observation) return;

      // Mark the current trigger as inactive
      state.activeTrigger?.removeAttribute("data-tooltip-hover");
      state.activeTrigger?.removeAttribute("aria-describedby");

      // Update the tooltip to represent the new trigger
      state.activeTrigger = trigger;

      if (!trigger) {
        hideTimer.current = window.setTimeout(() => el.removeAttribute("data-show"), 100);
        return;
      }

      hideTimer.current && window.clearTimeout(hideTimer.current);

      // Monitor this trigger for changes
      if (trigger && !observation) {
        contentObserver.disconnect();
        contentObserver.observe(trigger, {
          attributes: true,
          attributeFilter: ["data-tooltip-content"],
        });
      }

      // Set text first to measure intrinsic width
      el.textContent = content;

      // Computing bounding rects requires the tooltip to be visible
      el.setAttribute("data-show", "");

      // Compute the transform needed to place the tooltip at the trigger
      let triggerRect = trigger.getBoundingClientRect();
      let containerRect = el.parentElement.getBoundingClientRect();
      let tooltipRect = el.getBoundingClientRect();

      // Align tooltip (0, 0) with the trigger (0, 0)
      let x = triggerRect.left - containerRect.left;
      let y = triggerRect.top - containerRect.top;

      // Center horizontally with the trigger
      x += triggerRect.width / 2;
      x -= tooltipRect.width / 2;

      // Place the tooltip center at the top of the trigger
      y -= tooltipRect.height / 2;
      y += offsetY;

      // Reposition horizontally if clipped
      let xMin = padding;
      let xMax = window.innerWidth - containerRect.left - tooltipRect.width - padding;
      x = Math.min(Math.max(x, xMin), xMax);

      // Flip vertically if clipped by the header
      let minY = marginTop - containerRect.top;
      if (y < minY) {
        y = triggerRect.bottom - containerRect.top;
        y += tooltipRect.height / 2;
        y -= offsetY;
      }

      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      trigger.setAttribute("aria-describedby", id);
      trigger.setAttribute("data-tooltip-hover", "true");
    }

    function handlePointer(e: PointerEvent) {
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;

      // Schedule update if we may need to update the tooltip
      let target = e.target as Element | Document | null;
      if (state.activeTrigger || (target && "closest" in target && target.closest("[data-tooltip-trigger]"))) {
        checkTooltipState();
      }
    }

    function checkTooltipState() {
      // We use a RAF check to figure out what trigger is under the cursor
      // because Chrome and Safari block mouse events briefly after scroll
      //
      // Using `elementFromPoint` works around this
      //
      // @see https://codereview.chromium.org/1157303006/ - Chrome issue
      // @see https://groups.google.com/a/chromium.org/g/blink-dev/c/KIoVljZw5fc/ - Chrome team solution
      requestAnimationFrame(() => {
        let el = document.elementFromPoint(state.mouseX, state.mouseY);
        let trigger = el?.closest("[data-tooltip-trigger]") as HTMLElement | null;

        update(trigger);
      });
    }

    window.addEventListener("scroll", checkTooltipState, { passive: true });
    document.addEventListener("pointermove", handlePointer, { passive: true });
    document.addEventListener("pointerleave", handlePointer, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkTooltipState);
      document.removeEventListener("pointermove", handlePointer);
      document.removeEventListener("pointerleave", handlePointer);
    };
  }, [padding, marginTop, offsetY]);

  return (
    <div
      ref={tooltipRef}
      id={id}
      role="tooltip"
      aria-hidden="true"
      className={clsx(className, "pointer-events-none absolute")}
    ></div>
  );
}

export interface TooltipTriggerProps extends React.ComponentProps<"div"> {
  content: string;
  children?: React.ReactNode;
}

export function TooltipTrigger({ content, children, ...props }: TooltipTriggerProps) {
  return (
    <div data-tooltip-trigger data-tooltip-content={content} {...props}>
      {children}
    </div>
  );
}
