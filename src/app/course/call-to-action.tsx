"use client";
import React, { useRef, useState } from "react";
import LinkButton from "@/components/home/link-button";
import { AnimatePresence, motion } from "motion/react";

export function CallToAction() {
  let [signUpState, setSignUpState] = useState<"closed" | "open">("closed");
  let input = useRef<HTMLInputElement>(null);
  let containerRef = useRef<HTMLInputElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!input.current) return;

    // Check if the related target (where focus is going) is within our container
    if (input.current.value.length === 0 && !containerRef.current?.contains(e.relatedTarget)) {
      setSignUpState("closed");
    }
  };

  return (
    <div className="group relative flex flex-wrap gap-4">
      <LinkButton className="max-sm:hidden" href="#pricing">
        Get the course
      </LinkButton>
      <div className="isolate flex items-center">
        <motion.div
          ref={containerRef}
          layout
          transition={{ duration: signUpState === "open" ? 0.1 : 0.2, ease: "circOut" }}
          className="relative flex items-center data-[state=open]:overflow-hidden data-[state=open]:bg-white data-[state=open]:outline data-[state=open]:-outline-offset-1 data-[state=open]:outline-black/10 dark:ring-white/10"
          style={{ borderRadius: 20 }}
          data-state={signUpState}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {signUpState === "open" && (
              <motion.form
                action="https://app.kit.com/forms/8458453/subscriptions"
                method="POST"
                className="flex items-center"
                layout="position"
                onKeyDown={(e) => {
                  if (e.key === "Escape" && input.current) {
                    input.current.value = "";
                    setSignUpState("closed");
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
                  required
                  ref={input}
                  onBlur={handleBlur}
                  type="email"
                  name="email_address"
                  className="w-xs rounded-full bg-transparent px-4 py-2 text-sm/6 text-gray-950 focus:outline-none sm:w-sm"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />

                <button
                  type="submit"
                  className="absolute inset-y-0.5 right-0.5 rounded-full bg-black px-4 pb-0.5 text-sm font-semibold text-white hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-black dark:inset-y-px dark:right-px"
                >
                  Sign up
                </button>
              </motion.form>
            )}
            {signUpState === "closed" && (
              <motion.button
                layout
                key="get-course-button"
                onClick={() => {
                  setSignUpState("open");
                }}
                type="button"
                className="inline-flex cursor-pointer justify-center gap-x-1 rounded-full px-4 py-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20 dark:text-white dark:ring-white/10 dark:hover:ring-white/20"
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
                Get <span className="max-sm:hidden">two</span> free lessons &rarr;
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence initial={false} mode="popLayout">
        {signUpState === "closed" && (
          <motion.div
            className="shrink-0 grow-0 sm:hidden"
            layout="position"
            transition={{ duration: 0.3 }}
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
            <LinkButton className="max-h-10" href="#pricing">
              Get the course
            </LinkButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
