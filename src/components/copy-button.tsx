"use client";

import clsx from "clsx";
import { useState } from "react";

export function CopyButton({ value, className }: { value: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (copied) return;

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={clsx("absolute inset-y-0 grid size-4 text-white/33 transition-colors hover:text-white/75", className)}
      title="Copy to clipboard"
    >
      <div className="absolute -inset-2.5"></div>
      <svg
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={clsx(
          "col-start-1 row-start-1 fill-none stroke-current text-sky-400 transition-opacity duration-300 ease-in-out",
          !copied && "opacity-0",
        )}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={clsx(
          "col-start-1 row-start-1 fill-none stroke-current transition-opacity duration-300 ease-in-out",
          copied && "opacity-0",
        )}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
        />
      </svg>
    </button>
  );
}
