"use client";

import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll, type Transition } from "framer-motion";
import { useRef, useState } from "react";
import { Example } from "./example";
import { Stripes } from "./stripes";

const viewport = {
  lvh: 491,
  svh: 443,
  navBarHeight: 48,
  width: 300,
  padding: 5,
};

const transition: Transition = {
  duration: 0.2,
  ease: "linear",
  type: "tween",
};

export function DynamicViewportExample({
  unit = "dvh",
  colorStyles = "dark:bg-blue-500 bg-blue-500 border border-blue-400",
}) {
  const [hidden, setHidden] = useState(false);
  const parent = useRef(null);

  const { scrollY } = useScroll({ container: parent });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <Example className="relative overflow-hidden">
      <div className="relative grid justify-items-center">
        <Stripes
          ref={parent}
          style={{
            width: `${viewport.width}px`,
            height: `${viewport.lvh}px`,
          }}
          className="no-scrollbar relative overflow-y-scroll overscroll-none rounded-lg border border-slate-300 text-center text-xs dark:border-slate-700"
        >
          <motion.div
            className="absolute w-full snap-start overflow-hidden"
            transition={{
              ...transition,
            }}
            variants={{
              visible: {
                y: 0,
                height: `${viewport.lvh}px`,
              },
              hidden: {
                y: `-${viewport.navBarHeight - 2}px`,
                height: `${viewport.lvh + viewport.navBarHeight - 1}px`,
              },
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
          >
            <div className="grid h-[48px] w-full grid-cols-[auto_1fr_auto] items-center justify-start gap-4 rounded-t-lg border-b border-slate-300 bg-slate-100 px-3 dark:border-slate-600 dark:bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-slate-600 dark:text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-slate-600 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-400">
                tailwindcss.com
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-slate-600 dark:text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            <motion.div
              className="pointer-events-none h-full w-full p-[7px]"
              transition={{
                ...transition,
                duration: 0.2,
                delay: unit === "dvh" ? 0.4 : 0,
              }}
              variants={{
                visible: {
                  maxHeight: `${unit === "lvh" ? viewport.lvh : viewport.svh - 2}px`,
                },
                hidden: {
                  maxHeight: `${unit === "svh" ? viewport.svh : viewport.lvh - 1}px`,
                },
              }}
              initial="visible"
              animate={hidden ? "hidden" : "visible"}
            >
              <div
                className={clsx(
                  colorStyles,
                  "grid h-full w-full grid-rows-[1fr_auto_1fr] content-center items-center justify-items-center gap-5 self-center overflow-hidden rounded-md py-4 font-mono font-bold text-slate-50",
                )}
              >
                <div className="grid h-full grid-rows-[1px_1fr] justify-items-center">
                  <div className="h-full w-[12px] bg-white/60"></div>
                  <div className="h-full w-[1.5px] bg-white/40"></div>
                </div>
                <p>h-{unit}</p>

                <div className="grid h-full grid-rows-[1fr_1px] justify-items-center">
                  <div className="h-full w-[1.5px] bg-white/40"></div>
                  <div className="h-full w-[12px] bg-white/60"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Stripes>
        {unit === "lvh" && (
          <motion.div
            transition={{
              ...transition,
            }}
            variants={{
              visible: {
                bottom: `-${viewport.navBarHeight}px`,
                height: `${viewport.navBarHeight}px`,
              },
              hidden: {
                bottom: "5px",
                height: "0px",
              },
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            // For some reason putting this in a tailwind class doesn't work
            style={{ width: `${viewport.width - 16}px` }}
            className={clsx(colorStyles, "absolute right-0 left-0 mx-auto rounded-b-md opacity-20")}
          ></motion.div>
        )}{" "}
      </div>
      <div
        style={{ backgroundPosition: "10px 10px" }}
        className="bg-grid-slate-100 dark:bg-grid-slate-700/25 pointer-events-none absolute inset-0 z-[-1] [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
      />
      <div className="pointer-events-none absolute inset-0 z-[-1] rounded-xl border border-black/5 dark:border-white/5" />
    </Example>
  );
}
