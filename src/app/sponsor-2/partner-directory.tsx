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
    <section id="directory" className="mt-40 scroll-mt-24">
      <div className="line-y">
        <div className="px-4 py-2 sm:px-2">
          <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-sky-500">
            <a href="#directory">Partner directory</a>
          </p>
          <p className="mt-2 max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">
            Companies that support Tailwind CSS.
          </p>
          <p className="mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400">
            Discover the companies investing in the future of Tailwind CSS. These organizations are helping ensure the
            framework you rely on continues to thrive.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-2 px-4 sm:px-2">
        {directoryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={clsx(
              "rounded-full px-4 py-1.5 text-sm/6 font-medium transition-colors",
              activeCategory === category
                ? "bg-gray-950 text-white dark:bg-white dark:text-gray-950"
                : "text-gray-600 ring-1 ring-gray-950/10 hover:bg-gray-950/5 dark:text-gray-400 dark:ring-white/15 dark:hover:bg-white/5",
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
    </section>
  );
}
