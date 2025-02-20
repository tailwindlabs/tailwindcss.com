"use client";

import { useRef } from "react";
import clsx from "clsx";
import { Button, Tooltip, TooltipPanel, TooltipTrigger } from "@headlessui/react";

export function Color({ name, shade, value }: { name: string; shade: string; value: string }) {
  const panelRef = useRef<HTMLDivElement>(null);

  const colorVariableName = `--color-${name}-${shade}`;

  function copyHexToClipboard(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    let panel = panelRef.current;
    if (!panel) {
      return;
    }
    let prevValue = panel.innerText;
    navigator.clipboard.writeText(value);
    panel.innerText = "Copied to clipboard!";
    setTimeout(() => {
      panel.innerText = prevValue;
    }, 1300);
  }

  return (
    <Tooltip as="div" showDelayMs={100} hideDelayMs={0} className="contents">
      <TooltipTrigger>
        <Button
          type="button"
          onClick={copyHexToClipboard}
          style={{ backgroundColor: `var(${colorVariableName})` }}
          className={clsx(
            "aspect-1/1 w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10",
          )}
        />
      </TooltipTrigger>
      <TooltipPanel
        as="div"
        anchor="top"
        ref={panelRef}
        className="pointer-events-none z-10 translate-y-2 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/6 font-medium whitespace-nowrap text-white opacity-100 inset-ring inset-ring-white/10 transition-[opacity] starting:opacity-0"
      >
        {value}
      </TooltipPanel>
    </Tooltip>
  );
}
