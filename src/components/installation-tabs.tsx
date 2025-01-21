"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface Tab {
  title: string;
  url: string;
}

export function TabBar({ tabs }: { tabs: Tab[] }) {
  let pathname = usePathname();

  return (
    <div className="-mx-4 mb-6 flex overflow-auto sm:-mx-6">
      <div className="min-w-full flex-none px-4 sm:px-6">
        <ul className="mb-px flex gap-x-6 border-b border-gray-950/5 whitespace-nowrap dark:border-white/10">
          {tabs.map((tab) => (
            <li key={tab.title}>
              <h2>
                <Link
                  href={tab.url}
                  scroll={false}
                  className={clsx(
                    "-mb-px flex border-b pb-2 text-sm/7 font-medium",
                    pathname === tab.url
                      ? "border-current text-gray-950 dark:text-white"
                      : "border-transparent text-gray-700 hover:border-gray-950/25 dark:text-gray-200 dark:hover:border-white/25",
                  )}
                >
                  {tab.title}
                </Link>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
