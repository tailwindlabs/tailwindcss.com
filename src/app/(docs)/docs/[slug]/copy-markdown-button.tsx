"use client";

import { useRef, useState } from "react";

export function CopyMarkdownButton({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const markdownRef = useRef<string | null>(null);

  const prefetch = async () => {
    if (markdownRef.current) return;
    try {
      const response = await fetch(`/docs/${slug}.md`);
      if (response.ok) {
        markdownRef.current = await response.text();
      }
    } catch {
      // Silently fail prefetch
    }
  };

  const handleCopy = async () => {
    if (copied) return;

    try {
      if (!markdownRef.current) {
        const response = await fetch(`/docs/${slug}.md`);
        if (!response.ok) throw new Error("Failed to fetch");
        markdownRef.current = await response.text();
      }

      await navigator.clipboard.writeText(markdownRef.current);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy markdown:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      onMouseEnter={prefetch}
      onFocus={prefetch}
      className="text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
    >
      {copied ? "Copied!" : "Copy page"}
    </button>
  );
}
