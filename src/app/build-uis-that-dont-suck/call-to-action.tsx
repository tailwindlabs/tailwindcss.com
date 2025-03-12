"use client";

import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export function SignUpForm() {
  return (
    <form className="flex" method="POST" action="https://app.kit.com/forms/7712177/subscriptions">
      <div className="flex max-w-full items-center rounded-full bg-white">
        <input
          required
          type="email"
          id="email"
          name="email_address"
          className="w-3xs min-w-0 shrink grow rounded-full bg-transparent px-4 py-2 text-sm/6 text-gray-950 focus:outline-none"
          placeholder="Enter your email"
          aria-label="Email address"
        />
        <button className="mr-0.5 shrink-0 overflow-hidden rounded-full bg-gray-950 px-3 py-1.5 text-sm/6 font-semibold text-nowrap text-white hover:bg-gray-950/85">
          Get the course
        </button>
      </div>
    </form>
  );
}

export function HeroActions({
  onWatchPreview = () => {},
  onClosePreview = () => {},
}: {
  onWatchPreview?: () => void;
  onClosePreview?: () => void;
}) {
  let [signUpState, setSignUpState] = useState<"closed" | "open">("closed");
  let input = useRef<HTMLInputElement>(null);
  let getCourseButton = useRef(null);
  let containerRef = useRef<HTMLInputElement>(null);
  let [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!input.current) return;

    // Check if the related target (where focus is going) is within our container
    if (input.current.value.length === 0 && !containerRef.current?.contains(e.relatedTarget)) {
      setSignUpState("closed");
    }
  };

  return (
    <div className="group relative flex gap-4">
      <div className="isolate flex items-center">
        <motion.div
          ref={containerRef}
          layout
          transition={{ duration: signUpState === "open" ? 0.1 : 0.2, ease: "circOut" }}
          className="relative flex items-center bg-white data-[state=open]:overflow-hidden"
          style={{ borderRadius: 20 }}
          data-state={signUpState}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {signUpState === "open" && (
              <motion.form
                action="https://app.kit.com/forms/7712177/subscriptions"
                method="POST"
                className="flex items-center"
                layout
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
                  className="w-3xs rounded-full bg-transparent px-4 py-2 text-sm/6 text-gray-950 focus:outline-none"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="mr-0.5 shrink-0 overflow-hidden rounded-full bg-gray-950 px-3 py-1.5 text-sm/6 font-semibold text-nowrap text-white hover:bg-gray-950/85"
                >
                  Sign up
                </button>
              </motion.form>
            )}
            {signUpState === "closed" && (
              <motion.button
                layout
                ref={getCourseButton}
                key="get-course-button"
                onClick={() => {
                  setSignUpState("open");
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
        {signUpState === "closed" && (
          <Button
            as={motion.button}
            onClick={() => {
              onWatchPreview();
              setIsDialogOpen(true);
            }}
            layout
            transition={{ duration: 0.3 }}
            className="inline-flex flex-nowrap items-baseline gap-1.5 self-center rounded-full bg-white/25 px-4 py-2 pl-3 text-sm/6 font-semibold whitespace-nowrap text-white hover:bg-white/30 focus:not-data-focus:outline-none"
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
            <span>
              Watch <span className="max-sm:hidden">the</span> intro <span className="max-sm:hidden">video</span>
            </span>
          </Button>
        )}
      </AnimatePresence>
      <Dialog
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          onClosePreview();
        }}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/85" />
        <div className="fixed inset-0 grid place-items-center">
          <DialogPanel className="w-full max-w-7xl p-4 sm:p-8">
            <video autoPlay controls className="aspect-video w-full rounded-2xl">
              <source src="https://assets.tailwindcss.com/build-uis-that-dont-suck/intro.mp4" type="video/mp4" />
            </video>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
