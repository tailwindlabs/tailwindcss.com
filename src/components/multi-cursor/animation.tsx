"use client";

import clsx from "clsx";
import { createContext, useContext, useEffect, useState } from "react";

export interface AnimationContextBag {
  /** Where the cursor is at */
  cursor: number;

  /** The lines with a cursor (and selection) on them */
  lines: number[];

  /** The range of characters that are currently selected */
  selection: [number, number];

  /** The current, in-progress class name */
  text: string;

  /** The class name to use in the example */
  className: string;
}

let AnimationContext = createContext<AnimationContextBag>({
  cursor: 0,
  selection: [0, 0],
  lines: [],
  text: "",
  className: "",
});

export function MultiCursorAnimation({ children }: { children: React.ReactNode }) {
  const STEP_DELAY = 300;
  const TYPE_DELAY = 75;
  const END_DELAY = 75;

  let [cursor, setCursor] = useState<number>(0);
  let [selection, setSelection] = useState<[number, number]>([0, 0]);
  let [text, setText] = useState<string>("font-medium");
  let [className, setClassName] = useState<string>("font-medium");
  let [lines, setLines] = useState<number[]>([0]);

  useEffect(() => {
    let cancel = false;

    async function run() {
      while (true) {
        if (cancel) return;

        // Move cursor to start
        setCursor(0);
        setSelection([0, 0]);
        await new Promise((resolve) => setTimeout(resolve, STEP_DELAY));
        if (cancel) return;

        // Move cursor to end of first word: `font`
        setCursor(4);
        setSelection([0, 4]);
        await new Promise((resolve) => setTimeout(resolve, STEP_DELAY));
        if (cancel) return;

        // Move cursor to end of class
        setCursor(11);
        setSelection([0, 11]);
        await new Promise((resolve) => setTimeout(resolve, STEP_DELAY));
        if (cancel) return;

        // Select next 3 matches match
        for (let i = 1; i <= 3; ++i) {
          setLines((lines) => [...lines, i]);
          await new Promise((resolve) => setTimeout(resolve, STEP_DELAY));
          if (cancel) return;
        }

        // Delete up to `font-`
        for (let i = 11; i >= 5; --i) {
          setText(`font-medium`.slice(0, i));
          setCursor(i);
          setSelection([i, i]);
          await new Promise((resolve) => setTimeout(resolve, TYPE_DELAY));
          if (cancel) return;
        }

        // Type bold
        for (let i = 5; i <= 9; ++i) {
          setText(`font-bold`.slice(0, i));
          setCursor(i);
          setSelection([i, i]);
          await new Promise((resolve) => setTimeout(resolve, TYPE_DELAY));
          if (cancel) return;
        }

        setClassName("font-bold");

        // Clear matches
        setLines([0]);

        // Move cursor to end of first word: `font-`
        setCursor(5);
        setSelection([5, 5]);
        await new Promise((resolve) => setTimeout(resolve, STEP_DELAY));
        if (cancel) return;

        // Move cursor to beginning
        setCursor(0);
        setSelection([0, 0]);
        await new Promise((resolve) => setTimeout(resolve, STEP_DELAY));
        if (cancel) return;

        // Move cursor to end of first word: `font`
        setCursor(4);
        setSelection([0, 4]);
        await new Promise((resolve) => setTimeout(resolve, STEP_DELAY));
        if (cancel) return;

        // Move cursor to end of class
        setCursor(9);
        setSelection([0, 9]);
        await new Promise((resolve) => setTimeout(resolve, STEP_DELAY));
        if (cancel) return;

        // Select next 3 matches match
        for (let i = 1; i <= 3; ++i) {
          setLines((lines) => [...lines, i]);
          await new Promise((resolve) => setTimeout(resolve, STEP_DELAY));
          if (cancel) return;
        }

        // Delete up to `font-`
        for (let i = 9; i >= 5; --i) {
          setText(`font-bold`.slice(0, i));
          setCursor(i);
          setSelection([i, i]);
          await new Promise((resolve) => setTimeout(resolve, TYPE_DELAY));
          if (cancel) return;
        }

        // Type medium
        for (let i = 5; i <= 11; ++i) {
          setText(`font-medium`.slice(0, i));
          setCursor(i);
          setSelection([i, i]);
          await new Promise((resolve) => setTimeout(resolve, TYPE_DELAY));
          if (cancel) return;
        }

        setClassName("font-medium");
        setLines([0]);

        await new Promise((resolve) => setTimeout(resolve, END_DELAY));
      }
    }

    run();

    return () => {
      cancel = true;
    };
  }, []);

  return (
    <AnimationContext
      value={{
        cursor,
        selection,
        text,
        lines,
        className,
      }}
    >
      {children}
    </AnimationContext>
  );
}

export function MultiCursorPreview() {
  let { className } = useContext(AnimationContext);

  return (
    <div className="not-prose rounded border border-gray-950/10 px-4 py-2 dark:border-white/5">
      <nav className="flex justify-center space-x-4">
        <a
          href="#/dashboard"
          className={clsx(
            "rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-950/50 dark:hover:text-white",
            className,
          )}
        >
          Home
        </a>
        <a
          href="#/team"
          className={clsx(
            "rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-950/50 dark:hover:text-white",
            className,
          )}
        >
          Team
        </a>
        <a
          href="#/projects"
          className={clsx(
            "rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-950/50 dark:hover:text-white",
            className,
          )}
        >
          Projects
        </a>
        <a
          href="#/reports"
          className={clsx(
            "rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-950/50 dark:hover:text-white",
            className,
          )}
        >
          Reports
        </a>
      </nav>
    </div>
  );
}

export function TypingAnimation(props: Record<string, any>) {
  let { cursor, text, selection, lines } = useContext(AnimationContext);

  let isActiveLine = lines.includes(props.index);

  return text.split("").map((char, idx) => (
    <span {...props} key={idx} className="relative whitespace-nowrap">
      {isActiveLine && cursor === idx && (
        <span
          key={"before"}
          className="transition-opacity duration-300 group-data-finished:opacity-0 after:absolute after:inline-block after:h-[1.4em] after:w-px after:border-r-2 after:border-sky-400 after:bg-transparent after:content-['']"
        ></span>
      )}
      <span
        key={"what"}
        className={clsx(
          "whitespace-nowrap",
          isActiveLine && selection[0] <= idx && idx <= selection[1] && "bg-sky-500/10",
        )}
      >
        {char}
      </span>
      {isActiveLine && cursor === idx + 1 && (
        <span
          key={"after"}
          className="transition-opacity duration-300 group-data-finished:opacity-0 after:absolute after:inline-block after:h-[1.4em] after:w-px after:border-r-2 after:border-sky-400 after:bg-transparent after:content-['']"
        ></span>
      )}
    </span>
  ));
}
