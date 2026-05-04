"use client";

import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { directoryCategories } from "@/lib/sponsors";

export function PartnerDirectory({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<string>("Featured");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll<HTMLElement>("li[data-tier]");
    for (const item of items) {
      const categories = item.dataset.categories ?? "";
      const visible =
        activeCategory === "Featured" ? true : categories.split(",").includes(activeCategory);
      item.hidden = !visible;
    }
  }, [activeCategory]);

  return (
    <section id="directory" className="mt-20 scroll-mt-24 sm:mt-24 lg:mt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_7fr] lg:items-start lg:gap-20">
        <div>
          <p className="inline-block rounded-md bg-gray-950/5 px-3 py-1 font-mono text-xs/5 tracking-widest uppercase text-gray-950 dark:bg-white/10 dark:text-white">
            <a href="#directory">01 / Partner directory</a>
          </p>
          <p className="mt-8 text-lg/7 font-medium tracking-tight text-pretty">
            <strong className="font-medium text-gray-950 dark:text-white">Companies that support Tailwind CSS.</strong>{" "}
            <span className="text-gray-500 dark:text-gray-400">Discover the companies investing in the future of Tailwind CSS.</span>
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {directoryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "rounded-md px-3 py-1 text-xs/5 font-medium transition-colors",
                  activeCategory === category
                    ? "bg-gray-950 text-white dark:bg-white dark:text-gray-950"
                    : "text-gray-950 ring-1 ring-gray-950/10 hover:bg-gray-950/5 dark:text-white dark:ring-white/15 dark:hover:bg-white/5",
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-6" ref={listRef}>
            {children}
            <div className="border-t border-gray-950/5 dark:border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
