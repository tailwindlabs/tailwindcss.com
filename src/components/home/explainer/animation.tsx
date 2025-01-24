"use client";

import clsx from "clsx";
import { useInView } from "framer-motion";
import { createContext, Fragment, useContext, useEffect, useRef, useState } from "react";

export interface EditorKeyframe {
  class?: string;
  terminal: React.ReactNode[];
}

interface TypedText {
  text: string;
  isFinished: boolean;
}

type AnimationState = "idle" | "running" | "finished";

interface AnimationContextBag {
  state: AnimationState;
  classes: TypedText[];
  terminal: React.ReactNode[];

  modified: boolean;
}

let AnimationContext = createContext<AnimationContextBag>({
  state: "idle",
  classes: [],
  terminal: [],
  modified: false,
});

export function EditorAnimation({ children, timeline }: { children: React.ReactNode; timeline: EditorKeyframe[] }) {
  let [state, setState] = useState<AnimationState>("idle");
  let [modified, setModified] = useState(false);
  let [classes, setClasses] = useState<TypedText[]>([]);
  let [terminal, setTerminal] = useState<React.ReactNode[]>([]);

  let container = useRef<HTMLDivElement>(null);
  let isInView = useInView(container, {
    amount: 0.25, // at least 25%
  });

  useEffect(() => {
    let cancelled = false;

    async function run() {
      let classIndex = -1;

      for (let i = 0; i < timeline.length; i++) {
        setState("running");

        let className = timeline[i].class;

        if (className) {
          classIndex++;

          setModified(true);

          for (let j = 0; j <= className.length; j++) {
            setClasses((classes) => {
              let copy = [...classes];
              copy[classIndex] = {
                text: className.slice(0, j),
                isFinished: false,
              };
              return copy;
            });

            await new Promise((resolve) => setTimeout(resolve, 75));
            if (cancelled) return;
          }

          setClasses((classes) => {
            let copy = [...classes];
            copy[classIndex] = {
              text: className,
              isFinished: true,
            };
            return copy;
          });

          setModified(false);
        }

        setTerminal((terminal) => {
          let copy = [...terminal];
          copy.push(...timeline[i].terminal);
          return copy;
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (cancelled) return;
      }

      setState("finished");
    }

    if (isInView) {
      run();
    }

    return () => {
      cancelled = true;

      setState("idle");
      setModified(false);
      setClasses([]);
      setTerminal([]);
    };
  }, [isInView]);

  return (
    <AnimationContext
      value={{
        state,
        classes,
        terminal,
        modified,
      }}
    >
      <div
        ref={container}
        className="group"
        data-modified={modified || null}
        data-running={state === "running" || null}
        data-finished={state === "finished" || null}
      >
        {children}
      </div>
    </AnimationContext>
  );
}

export function ModifiedWindowDotAnimation() {
  let { modified } = useContext(AnimationContext);

  return (
    <span
      className={clsx(
        "inline-flex size-1.5 items-center justify-center rounded-full bg-white/20",
        "transition-opacity",
        modified ? "opacity-100 duration-100 ease-linear" : "opacity-0 duration-300 ease-in",
      )}
    ></span>
  );
}

export function TypingAnimation() {
  let { classes } = useContext(AnimationContext);

  return classes.map((run, index) => (
    <Fragment key={index}>
      {index > 0 ? " " : ""}
      <span
        className={clsx("whitespace-nowrap", run.isFinished && "animate-flash-code")}
        ref={run.isFinished ? scrollAnchorToBottom : null}
      >
        {run.text}
      </span>
    </Fragment>
  ));
}

export function TerminalAnimation() {
  let { terminal } = useContext(AnimationContext);

  return terminal.map((line, i) => (
    <span key={i} className={clsx("line not-last:opacity-40")} ref={scrollAnchorToBottom}>
      <span className={clsx("animate-flash-code")}>{line}</span>
    </span>
  ));
}

export function ShowOutputClassAnimation({ children, index }: { children: React.ReactNode; index: number }) {
  let { classes } = useContext(AnimationContext);

  let latestClass = classes.findLastIndex((run) => run.isFinished);

  if (index > latestClass) {
    return null;
  }

  return (
    <div className={"**:[.line]:**:not-data-indent:animate-flash-code"} ref={scrollAnchorToBottom}>
      {children}
    </div>
  );
}

function scrollAnchorToBottom(el: HTMLElement | null) {
  let container = el?.closest("[data-scroll-anchor]");
  if (!container) return;

  container.scrollTop = container.scrollHeight;
}
