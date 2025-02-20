"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

function highlight(input: string) {
  return (
    <code>
      {input.split(/(<[^>]+>)|(\/\*.*?\*\/)/g).map((part, i) => {
        if (part?.startsWith("<") && part.endsWith(">")) {
          // Variables
          return (
            <var key={i} className="font-normal italic opacity-100">
              {part}
            </var>
          );
        } else if (part?.startsWith("/*") && part.endsWith("*/")) {
          // Comments
          return (
            <span key={i} className="text-gray-400 italic">
              {part}
            </span>
          );
        } else {
          return part;
        }
      })}
    </code>
  );
}

export function ApiTable({ rows }: { rows: [string, string][] }) {
  let [isExpanded, setIsExpanded] = useState(false);

  let isExpandable = rows.length > 15;

  let aboveTheFold = isExpandable ? rows.slice(0, 10) : rows;
  let belowTheFold = isExpandable ? rows.slice(10) : [];

  let ref = useRef<HTMLTableSectionElement>(null);

  useEffect(
    function () {
      let element = ref.current;
      if (!element) return;

      if (!("onbeforematch" in document.body)) {
        element.hidden = !isExpanded;
        return;
      }

      if (isExpanded) {
        element.removeAttribute("hidden");
      } else {
        element.setAttribute("hidden", "until-found");
      }

      function onBeforeMatch() {
        setIsExpanded(true);
      }

      element.addEventListener("beforematch", onBeforeMatch);
      return () => {
        element.removeEventListener("beforematch", onBeforeMatch);
      };
    },
    [isExpanded],
  );

  return (
    <div id="quick-reference" className="not-prose relative isolate scroll-mt-16">
      <div className="w-full overflow-x-auto whitespace-nowrap">
        <table className="grid w-full grid-cols-[auto_auto] border-b border-gray-900/10 dark:border-white/10">
          <thead className="col-span-2 grid grid-cols-subgrid">
            <tr className="col-span-2 grid grid-cols-subgrid">
              <th className="px-2 py-2.5 text-left text-sm/7 font-semibold text-gray-950 dark:text-white">Class</th>
              <th className="px-2 py-2.5 text-left text-sm/7 font-semibold text-gray-950 dark:text-white">Styles</th>
            </tr>
          </thead>
          <tbody className="col-span-2 grid grid-cols-subgrid border-t border-gray-900/10 dark:border-white/10">
            {aboveTheFold.map(([utility, styles], i) => (
              <ApiTableRow key={i} utility={utility} styles={styles} />
            ))}
          </tbody>
          {isExpandable ? (
            <tbody className="col-span-2 grid grid-cols-subgrid" hidden={true} ref={ref}>
              {belowTheFold.map(([utility, styles], i) => (
                <ApiTableRow key={i} utility={utility} styles={styles} className="first:border-t" />
              ))}
            </tbody>
          ) : null}
        </table>
      </div>
      {isExpandable && (
        <div
          className={clsx(
            "z-10 flex justify-center bg-linear-to-t from-white to-white/40 text-gray-950 hover:text-gray-950/70 dark:from-gray-950 dark:to-gray-950/40 dark:text-white dark:hover:text-white/70",
            isExpanded ? "sticky bottom-0 h-12 to-white/80 py-1" : "absolute bottom-0 h-26 w-full translate-y-1/2 py-8",
          )}
        >
          <button
            className="rounded-full border border-gray-950 bg-gray-950 px-3 py-1 font-mono text-xs/7 font-medium tracking-widest text-white uppercase dark:border-gray-700 dark:bg-gray-700"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
}

function ApiTableRow({
  utility,
  styles,
  className,
}: {
  utility: string;
  styles: string[] | string;
  className?: string;
}) {
  return (
    <tr
      className={clsx(
        "col-span-2 grid grid-cols-subgrid not-last:border-b not-last:border-gray-950/5 dark:not-last:border-white/5",
        className,
      )}
    >
      <td className="px-2 py-2 align-top font-mono text-xs/6 font-medium text-sky-500 dark:text-sky-400">
        {highlight(utility)}
      </td>
      <td className="px-2 py-2 align-top font-mono text-xs/6 text-violet-600 dark:text-violet-400">
        {(Array.isArray(styles) ? styles : [styles]).map((style, i) => (
          <div key={i} className="*:whitespace-pre!">
            {highlight(style)}
          </div>
        ))}
      </td>
    </tr>
  );
}
