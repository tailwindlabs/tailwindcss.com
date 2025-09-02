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
      className={clsx("flex size-8 items-center justify-center", className)}
      title="Copy to clipboard"
    >
      <div className="grid size-4">
        <svg
          viewBox="0 0 16 16"
          strokeWidth={1}
          className={clsx(
            "col-start-1 row-start-1 fill-none stroke-current text-sky-400 transition-opacity duration-300 ease-in-out",
            !copied && "opacity-0",
          )}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 8.5L7.5 12.5L12.5 3.5" />
        </svg>

        <svg
          viewBox="0 0 16 16"
          strokeWidth={1}
          className={clsx(
            "col-start-1 row-start-1 fill-none stroke-current transition-opacity duration-300 ease-in-out",
            copied && "opacity-0",
          )}
        >
          <path d="M5.5 2.5V2.5C5.5 3.05228 5.94772 3.5 6.5 3.5H9.5C10.0523 3.5 10.5 3.05228 10.5 2.5V2.5M5.5 2.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V2.5M5.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V12.5C2.5 13.6046 3.39543 14.5 4.5 14.5H11.5C12.6046 14.5 13.5 13.6046 13.5 12.5V4.5C13.5 3.39543 12.6046 2.5 11.5 2.5H10.5" />
        </svg>
      </div>
    </button>
  );
}
