"use client";

import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import { useEffect, useState } from "react";
import { IconButton } from "./icon-button";

export function MobileNav({
  header,
  breadcrumb,
  children,
}: React.PropsWithChildren<{
  header: React.ReactNode;
  breadcrumb: React.ReactNode;
}>) {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      let scrollbarPadding = window.getComputedStyle(document.documentElement)["paddingRight"];
      document.documentElement.style.setProperty("--scrollbar-padding", scrollbarPadding);
    }, 0);
  }, [isOpen]);

  return (
    <div className="flex h-14 items-center border-t border-gray-950/5 bg-white px-4 sm:px-6 lg:hidden dark:border-white/10 dark:bg-gray-950">
      <IconButton onClick={() => setIsOpen(true)} aria-label="Open navigation menu" className="-ml-1.5">
        <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 6.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </IconButton>

      {breadcrumb}

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 lg:hidden">
        <div className="fixed inset-x-0 top-28 bottom-0 bg-white/90 dark:bg-gray-950/80" />
        <DialogPanel className="fixed inset-y-0 left-0 flex w-full flex-col sm:max-w-xs">
          <div className="w-screen shrink-0 border-b border-gray-950/5 pr-(--scrollbar-padding) dark:border-white/10">
            {header}
            <div className="flex h-14 items-center border-t border-gray-950/5 bg-white px-4 sm:px-6 lg:hidden dark:border-white/10 dark:bg-gray-950">
              <IconButton
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="-ml-1.5"
                data-autofocus
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 6.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </IconButton>

              {breadcrumb}
            </div>
          </div>
          <div className="min-h-0 shrink overflow-y-auto border-r border-gray-950/5 dark:border-white/10">
            <div className="relative bg-white p-6 dark:bg-gray-950">
              {children}
              <div className="absolute top-6 right-6 flex">
                <CloseButton className="inline-flex rounded-md bg-gray-950/2 px-2 py-0.5 font-sans text-xs/5 text-gray-500 inset-ring inset-ring-gray-950/8 dark:bg-white/4 dark:inset-ring-white/16">
                  esc
                </CloseButton>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
