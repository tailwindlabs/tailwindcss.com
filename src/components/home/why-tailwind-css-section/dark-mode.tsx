"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { CSSProperties, useRef, useState } from "react";
import darkModeDark from "./dark-mode.dark.png";
import darkModeLight from "./dark-mode.light.png";

export function DarkMode() {
  let [isDragging, setIsDragging] = useState(false);
  let constraintsRef = useRef(null);
  let x = useMotionValue(0);

  return (
    <div className="@container">
      <div
        className="my-4 -mb-16 sm:my-0 @min-[--theme(--breakpoint-sm)]:-mx-8"
        data-dragging={isDragging ? true : undefined}
      >
        <motion.div
          style={{ x }}
          className="absolute inset-x-1/2 inset-y-0 z-10 h-screen w-1 -translate-x-1/2 bg-sky-400"
        />
        <div ref={constraintsRef}>
          <motion.div
            title="Drag to resize"
            className="absolute inset-1/2 z-10 flex size-10 shrink-0 -translate-1/2 cursor-ew-resize items-center justify-center rounded-full bg-sky-500"
            drag="x"
            dragElastic={0}
            dragMomentum={false}
            dragConstraints={constraintsRef}
            style={{ x }}
            onDoubleClick={() => {
              x.set(0);
            }}
            onDragStart={() => {
              setIsDragging(true);
              document.documentElement.classList.add("select-none", "**:cursor-ew-resize");
            }}
            onDragEnd={() => {
              setIsDragging(false);
              document.documentElement.classList.remove("select-none", "**:cursor-ew-resize");
            }}
          >
            <svg className="relative z-10" width={15} height={8} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m1 4 3-3M1 4l3 3M1 4h13m0 0-3-3m3 3-3 3"
                className="stroke-white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute inset-1 rounded-full bg-sky-500 not-in-data-dragging:animate-ping" />
          </motion.div>
        </div>

        <div className="isolate flex h-full w-full items-center justify-center">
          <div className="relative grid h-112 w-[375px] grid-cols-1 grid-rows-1 overflow-hidden rounded-t-4xl bg-gray-950/10 outline outline-gray-950/10 dark:outline-white/10">
            <div className="col-start-1 row-start-1">
              <motion.img
                ref={(el) => {
                  if (!el) return;
                  el.style.setProperty("--midpoint", `calc(${el.clientWidth}px / 2)`);
                  let observer = new ResizeObserver(() => {
                    el.style.setProperty("--midpoint", `calc(${el.clientWidth}px / 2)`);
                  });
                  observer.observe(el);
                  return () => observer.disconnect();
                }}
                style={{ "--offset": useTransform(x, (x) => `${-x}px`) } as CSSProperties}
                className="absolute inset-0 [clip:rect(0px,calc(var(--midpoint)-var(--offset)),621px,0px)]"
                src={darkModeLight.src}
              />
            </div>
            <div className="col-start-1 row-start-1">
              <img src={darkModeDark.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
