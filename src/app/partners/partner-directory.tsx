"use client";

import { clsx } from "clsx";
import { useLayoutEffect, useRef, useState } from "react";
import { directoryCategories } from "@/lib/sponsors";

type DirectoryCategory = (typeof directoryCategories)[number];

const categoryStorageKey = "tailwindcss.com:partners:category";
const categorySlugByName = new Map(
  directoryCategories.map((category) => [
    category,
    category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
  ]),
);
const categoryNameBySlug = new Map(Array.from(categorySlugByName, ([category, slug]) => [slug, category]));
const categoryNames = new Set<string>(directoryCategories);

function isDirectoryCategory(category: string): category is DirectoryCategory {
  return categoryNames.has(category);
}

function getCategoryFromHash(hash: string): DirectoryCategory {
  const slug = hash.replace(/^#/, "");

  return categoryNameBySlug.get(slug) ?? "All";
}

function getHashFromCategory(category: DirectoryCategory) {
  if (category === "All") return "";

  return `#${categorySlugByName.get(category)!}`;
}

function getStoredCategory(): DirectoryCategory {
  let category: string | null = null;

  try {
    category = window.sessionStorage.getItem(categoryStorageKey);
  } catch {}

  return category && isDirectoryCategory(category) ? category : "All";
}

function storeCategory(category: DirectoryCategory) {
  try {
    window.sessionStorage.setItem(categoryStorageKey, category);
  } catch {}
}

export function PartnerDirectory({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<DirectoryCategory | null>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const syncCategory = () => {
      const category = window.location.hash ? getCategoryFromHash(window.location.hash) : getStoredCategory();

      setActiveCategory(category);
      storeCategory(category);

      if (!window.location.hash && category !== "All") {
        const url = `${window.location.pathname}${window.location.search}${getHashFromCategory(category)}`;
        window.history.replaceState(window.history.state, "", url);
      }
    };

    syncCategory();
    window.addEventListener("hashchange", syncCategory);
    window.addEventListener("popstate", syncCategory);

    return () => {
      window.removeEventListener("hashchange", syncCategory);
      window.removeEventListener("popstate", syncCategory);
    };
  }, []);

  useLayoutEffect(() => {
    if (!listRef.current || activeCategory === null) return;
    const items = listRef.current.querySelectorAll<HTMLElement>("li[data-categories]");
    for (const item of items) {
      const categories = item.dataset.categories ?? "";
      const visible = activeCategory === "All" ? true : categories.split(",").includes(activeCategory);
      item.hidden = !visible;
    }

    controlsRef.current?.classList.remove("invisible");
    listRef.current.classList.remove("invisible");
  }, [activeCategory]);

  function selectCategory(category: DirectoryCategory) {
    const url = `${window.location.pathname}${window.location.search}${getHashFromCategory(category)}`;

    setActiveCategory(category);
    storeCategory(category);
    window.history.replaceState(window.history.state, "", url);
  }

  return (
    <section id="directory" className="mt-20 scroll-mt-24 sm:mt-24 lg:mt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_7fr] lg:items-start lg:gap-20">
        <div>
          <h2 className="inline-block rounded-md bg-gray-950/5 px-3 py-1 font-mono text-xs/5 tracking-widest text-gray-950 uppercase dark:bg-white/10 dark:text-white">
            <a href="#directory">
              <span aria-hidden="true">01 / </span>
              Partner directory
            </a>
          </h2>
          <p className="mt-8 text-lg/7 font-medium tracking-tight text-pretty">
            <strong className="font-medium text-gray-950 dark:text-white">Tailwind CSS ecosystem.</strong>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Browse the companies that make Tailwind CSS possible.
            </span>
          </p>
        </div>
        <div>
          <div ref={controlsRef} className="invisible flex flex-wrap gap-2">
            {directoryCategories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => selectCategory(category)}
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
          <div className="invisible mt-6" ref={listRef}>
            {children}
            <div className="border-t border-gray-950/5 dark:border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
