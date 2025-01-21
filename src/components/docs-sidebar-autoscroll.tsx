"use client";

import { useLayoutEffect, useRef } from "react";

export function DocsSidebarAutoscroll({ children }: { children: React.ReactNode }) {
  let ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let element = ref.current;
    if (!element) return;

    let activeLink = element.querySelector("[data-autoscroll] [aria-current=page]");
    if (!activeLink) return;

    if ("scrollIntoViewIfNeeded" in activeLink) {
      (activeLink as any).scrollIntoViewIfNeeded();
    } else {
      activeLink.scrollIntoView();
    }
  }, []);

  return <div ref={ref}>{children}</div>;
}
