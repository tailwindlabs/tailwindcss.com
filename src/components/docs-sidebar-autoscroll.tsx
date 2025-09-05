"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function DocsSidebarAutoscroll({ children }: { children: React.ReactNode }) {
  let ref = useRef<HTMLDivElement>(null);
  let pathname = usePathname();

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
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
