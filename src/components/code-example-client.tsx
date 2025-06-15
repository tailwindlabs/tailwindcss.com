"use client";
import { useState } from "react";

export function CodeExampleFilename({ filename, example }: { filename: string; example?: { lang: string; code: string } }) {
  const [copyText, setCopyText] = useState("Copy");

  const codeCopier = async () => {
    try {
      if (example != undefined) {
        await navigator.clipboard.writeText(example.code);
        setCopyText("Copied!");
        setTimeout(() => {
          setCopyText("Copy");
        }, 5000);
      }
    } catch (error) {
      console.log("Coping Faild!");
    }
  };

  return (
    <div className="flex w-full items-center justify-between px-3 pt-0.5 pb-1.5 text-xs/5 text-gray-400 dark:text-white/50">
      {filename}
      {example != undefined && (
        <button onClick={codeCopier} className="rounded-xl border p-1 px-2 hover:text-white active:bg-gray-950">
          {copyText}
        </button>
      )}
    </div>
  );
}