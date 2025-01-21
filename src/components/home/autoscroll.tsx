"use client";

import { ComponentProps, useRef } from "react";

const DELAY = 1500;

export function Autoscroll(props: ComponentProps<"div">) {
  let shouldAutoScroll = useRef(true);

  return (
    <div
      ref={(container) => {
        if (!container) return;
        let idx = 0;

        let timer: ReturnType<typeof setTimeout> | null = null;
        let targets = Array.from(container.querySelectorAll("[data-target]"));

        function next() {
          if (!container) return;
          if (shouldAutoScroll.current) {
            let node = targets[idx++ % targets.length] as HTMLElement;
            if (!node) return;

            container.scrollTo({
              left: node.offsetLeft - (container.clientWidth / 2 - node.offsetWidth / 2),
              behavior: "smooth",
            });
          }

          timer = setTimeout(next, DELAY);
        }

        next();

        return () => {
          if (timer !== null) {
            clearTimeout(timer);
          }
        };
      }}
      onMouseOver={() => {
        shouldAutoScroll.current = false;
      }}
      onMouseLeave={() => {
        shouldAutoScroll.current = true;
      }}
      onPointerMove={() => {
        shouldAutoScroll.current = false;
      }}
      onPointerLeave={() => {
        shouldAutoScroll.current = true;
      }}
      onTouchStart={() => {
        shouldAutoScroll.current = false;
      }}
      onTouchEnd={() => {
        shouldAutoScroll.current = true;
      }}
      onTouchCancel={() => {
        shouldAutoScroll.current = true;
      }}
      {...props}
    />
  );
}
