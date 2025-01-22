"use client";

import React from "react";
import { motion } from "framer-motion";

export function TransitionsSection() {
  const variants = {
    start: { translateX: "0cqw" },
    end: {
      translateX: "100cqw",
    },
  };

  return (
    <div className="flex h-full flex-col justify-between px-6 py-10 sm:p-10">
      <div className="grid grid-cols-[auto_1fr] gap-8 sm:gap-11">
        <svg
          className="size-16 rounded-lg bg-white text-gray-800 shadow-sm sm:size-18 dark:bg-gray-900 dark:text-white dark:inset-ring dark:inset-ring-white/5"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 56.9441L56 8.94409" stroke="currentColor" strokeOpacity={0.3}></path>
          <path d="M8 56.9441L56 8.94409" stroke="currentColor">
            <animate
              attributeName="stroke-dasharray"
              dur="4.5s"
              keyTimes="0;0.167;0.5;0.667;1"
              values="0,96;67.75,96;67.75,96;0,96;0,96"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <div className="flex w-full min-w-0 flex-col justify-between pt-1 pb-4">
          <p className="flex font-mono text-xs text-nowrap text-clip text-gray-700 dark:text-gray-200">
            <span className="hidden sm:visible">transition duration-750</span>
            <span className="font-medium text-gray-950 dark:text-white">linear</span>
          </p>
          <div className="@container relative grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-5">
            <motion.div
              className="absolute size-8 rounded-lg bg-sky-400 shadow-lg shadow-sky-400/50 transition-none sm:size-10"
              variants={variants}
              animate="end"
              transition={{ ease: "linear", repeat: Infinity, duration: 0.75, repeatDelay: 1.5, repeatType: "mirror" }}
            />
            <div className="size-2 rounded-full border border-gray-950/20 dark:border-gray-700" />
            <div className="h-px w-full bg-gray-950/20 dark:bg-gray-700" />
            <div className="size-2 rounded-full border border-gray-950/20 dark:border-gray-700" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-8 sm:gap-11">
        <svg
          className="size-16 rounded-lg bg-white text-gray-800 shadow-sm sm:size-18 dark:bg-gray-900 dark:text-white dark:inset-ring dark:inset-ring-white/5"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 57C8 57 32 9 56 9" stroke="currentColor" strokeOpacity={0.3}></path>
          <path d="M8 57C8 57 32 9 56 9" stroke="currentColor">
            <animate
              attributeName="stroke-dasharray"
              dur="4.5s"
              keyTimes="0;0.167;0.5;0.667;1"
              values="0,100;71,100;71,100;0,100;0,100"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <div className="flex w-full min-w-0 flex-col justify-between pt-1 pb-4">
          <p className="flex font-mono text-xs text-nowrap text-clip text-gray-700 dark:text-gray-200">
            <span className="hidden sm:visible">transition duration-750</span>
            <span className="font-medium text-gray-950 dark:text-white">ease-out</span>
          </p>
          <div className="@container relative grid max-w-full grid-cols-[auto_1fr_auto] items-center px-4 sm:px-5">
            <motion.div
              className="absolute size-8 rounded-lg bg-purple-400 shadow-lg shadow-purple-400/50 transition-none sm:size-10"
              variants={variants}
              animate="end"
              transition={{
                ease: [0, 0, 0.2, 1],
                repeat: Infinity,
                duration: 0.75,
                repeatDelay: 1.5,
                repeatType: "mirror",
              }}
            />
            <div className="size-2 rounded-full border border-gray-950/20 dark:border-gray-700" />
            <div className="h-px w-full bg-gray-950/20 dark:bg-gray-700" />
            <div className="size-2 rounded-full border border-gray-950/20 dark:border-gray-700" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-8 sm:gap-11">
        <svg
          className="size-16 rounded-lg bg-white text-gray-800 shadow-sm sm:size-18 dark:bg-gray-900 dark:text-white dark:inset-ring dark:inset-ring-white/5"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 57C32 57 32 9 56 9" stroke="currentColor" strokeOpacity={0.3}></path>
          <path d="M8 57C32 57 32 9 56 9" stroke="currentColor">
            <animate
              attributeName="stroke-dasharray"
              dur="4.5s"
              keyTimes="0;0.167;0.5;0.667;1"
              values="0,100;71.73,100;71.73,100;0,100;0,100"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <div className="flex w-full min-w-0 flex-col justify-between pt-1 pb-4">
          <p className="flex-1 font-mono text-xs text-nowrap text-clip text-gray-700 dark:text-gray-200">
            <span className="hidden sm:visible">transition duration-750</span>
            <span className="font-medium text-gray-950 dark:text-white">ease-in-out</span>
          </p>
          <div className="@container relative grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-5">
            <motion.div
              className="absolute size-8 rounded-lg bg-pink-400 shadow-lg shadow-pink-400/50 transition-none sm:size-10"
              variants={variants}
              animate="end"
              transition={{
                ease: [0.4, 0, 0.2, 1],
                repeat: Infinity,
                duration: 0.75,
                repeatDelay: 1.5,
                repeatType: "mirror",
              }}
            />
            <div className="size-2 rounded-full border border-gray-950/20 dark:border-gray-700" />
            <div className="h-px w-full bg-gray-950/20 dark:bg-gray-700" />
            <div className="size-2 rounded-full border border-gray-950/20 dark:border-gray-700" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-8 sm:gap-11">
        <svg
          className="size-16 rounded-lg bg-white text-gray-800 shadow-sm sm:size-18 dark:bg-gray-900 dark:text-white dark:inset-ring dark:inset-ring-white/5"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 57C32 57 56 9 56 9" stroke="currentColor" strokeOpacity={0.3}></path>
          <path d="M8 57C32 57 56 9 56 9" stroke="currentColor">
            <animate
              attributeName="stroke-dasharray"
              dur="4.5s"
              keyTimes="0;0.167;0.5;0.667;1"
              values="0,96;70.2,96;70.2,96;0,96;0,96"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <div className="flex w-full min-w-0 flex-col justify-between pt-1 pb-4">
          <p className="flex font-mono text-xs text-nowrap text-clip text-gray-700 dark:text-gray-200">
            <span className="hidden sm:visible">transition duration-750</span>
            <span className="font-medium text-gray-950 dark:text-white">ease-in</span>
          </p>
          <div className="@container relative grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-5">
            <motion.div
              className="absolute size-8 rounded-lg bg-indigo-400 shadow-lg shadow-indigo-400/50 transition-none sm:size-10"
              variants={variants}
              animate="end"
              transition={{
                ease: [0.4, 0, 1, 1],
                repeat: Infinity,
                duration: 0.75,
                repeatDelay: 1.5,
                repeatType: "mirror",
              }}
            />

            <div className="size-2 rounded-full border border-gray-950/20 dark:border-gray-700" />
            <div className="h-px w-full bg-gray-950/20 dark:bg-gray-700" />
            <div className="size-2 rounded-full border border-gray-950/20 dark:border-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
