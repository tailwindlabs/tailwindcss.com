"use client";

import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function SignUpForm() {
  return (
    <div className="flex">
      <div className="flex items-center rounded-full bg-white">
        <input
          autoFocus
          type="email"
          id="email"
          className="w-3xs rounded-full bg-transparent px-4 py-2 text-sm/6 text-gray-950 focus:outline-none"
          placeholder="Enter your email"
          aria-label="Email address"
        />
        <button className="mr-0.5 shrink-0 overflow-hidden rounded-full bg-gray-950 px-3 py-1.5 text-sm/6 font-semibold text-nowrap text-white hover:bg-gray-950/85">
          Sign up
        </button>
      </div>
    </div>
  );
}

export function HeroActions() {
  let [isExpanded, setIsExpanded] = useState(false);
  let input = useRef<HTMLInputElement>(null);
  let getCourseButton = useRef(null);
  let containerRef = useRef<HTMLInputElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!input.current) return;

    // Check if the related target (where focus is going) is within our container
    if (input.current.value.length === 0 && !containerRef.current?.contains(e.relatedTarget)) {
      setIsExpanded(false);
    }
  };

  return (
    <div className="group relative flex gap-4">
      <div className="isolate flex items-center">
        <motion.div
          ref={containerRef}
          layout
          transition={{ duration: isExpanded ? 0.1 : 0.2, ease: "circOut" }}
          className="relative flex items-center bg-white data-expanded:overflow-hidden"
          style={{ borderRadius: 20 }}
          data-expanded={isExpanded || undefined}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {isExpanded ? (
              <motion.div
                className="flex items-center"
                layout
                onKeyDown={(e) => {
                  if (e.key === "Escape" && input.current) {
                    input.current.value = "";
                    setIsExpanded(false);
                  }
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.1 }}
              >
                <input
                  autoFocus
                  ref={input}
                  onBlur={handleBlur}
                  type="email"
                  id="email"
                  className="w-3xs rounded-full bg-transparent px-4 py-2 text-sm/6 text-gray-950 focus:outline-none"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
                <button className="mr-0.5 shrink-0 overflow-hidden rounded-full bg-gray-950 px-3 py-1.5 text-sm/6 font-semibold text-nowrap text-white hover:bg-gray-950/85">
                  Sign up
                </button>
              </motion.div>
            ) : (
              <motion.button
                layout
                ref={getCourseButton}
                key="get-course-button"
                onClick={() => {
                  setIsExpanded(true);
                }}
                type="button"
                className="inline-flex rounded-full bg-transparent px-4 py-2 text-sm/6 font-semibold text-gray-950 hover:bg-gray-100 focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:outline-solid"
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.2 }}
              >
                Get the free course &rarr;
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {!isExpanded && (
          <motion.button
            layout
            transition={{ duration: 0.3 }}
            className="inline-flex flex-nowrap items-baseline gap-1.5 self-center rounded-full bg-white/25 px-4 py-2 pl-3 text-sm/6 font-semibold whitespace-nowrap text-white hover:bg-white/30"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <svg width={20} height={20} fill="none" className="self-center stroke-white">
              <path d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path
                d="M13.91 9.67a.37.37 0 0 1 0 .66l-5.6 3.11a.38.38 0 0 1-.56-.33V6.9c0-.29.3-.47.56-.33l5.6 3.11Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Watch intro video
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
