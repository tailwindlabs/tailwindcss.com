"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavList, NavListHeading, NavListItem, NavListItems, NavListLink } from "./nav-list";

export type TOCEntry = {
  level: number;
  text: string;
  slug: string;
  children: TOCEntry[];
};

export default function TableOfContents({ tableOfContents }: { tableOfContents: TOCEntry[] }) {
  let [activeSection, setActiveSection] = useState<string | null>(null);
  let activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  let userScrollLockRef = useRef<number>(0);
  let isAutoScrollingRef = useRef(false);

  function scrollActiveLinkIntoView(container: HTMLElement, activeLink: HTMLAnchorElement) {
    let containerRect = container.getBoundingClientRect();
    let linkRect = activeLink.getBoundingClientRect();
    let nextTop = container.scrollTop + (linkRect.top - containerRect.top) - container.clientHeight / 2 + linkRect.height / 2;

    isAutoScrollingRef.current = true;
    container.scrollTo({ top: nextTop, behavior: "smooth" });
    window.setTimeout(() => {
      isAutoScrollingRef.current = false;
    }, 250);
  }

  useEffect(() => {
    const root = document.querySelector('[data-content="true"]');
    if (!root) return;

    let elements = root.children;
    let sections: Map<Element, string> = new Map();
    let currentSectionId: string | null = null;
    for (let element of elements) {
      if (element.id && (element.tagName === "H2" || element.tagName === "H3")) currentSectionId = element.id;
      if (!currentSectionId) continue;

      sections.set(element, `#${currentSectionId}`);
    }

    let visibleElements = new Set<Element>();

    const callback = (entries: IntersectionObserverEntry[]) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          visibleElements.add(entry.target);
        } else {
          visibleElements.delete(entry.target);
        }
      }

      let firstVisibleSection = Array.from(sections.entries()).find(([element]) => visibleElements.has(element));
      if (!firstVisibleSection) return;
      setActiveSection(firstVisibleSection[1]);
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-56px 0px",
    });

    Array.from(sections.keys()).forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    let container = document.querySelector<HTMLElement>('[data-toc-scroll-container="true"]');
    let activeLink = activeLinkRef.current;

    if (!container || !activeLink || !activeSection) return;
    if (performance.now() < userScrollLockRef.current) return;

    let containerRect = container.getBoundingClientRect();
    let linkRect = activeLink.getBoundingClientRect();
    let edgeThreshold = 56;

    if (linkRect.top < containerRect.top + edgeThreshold || linkRect.bottom > containerRect.bottom - edgeThreshold) {
      scrollActiveLinkIntoView(container, activeLink);
    }
  }, [activeSection]);

  useEffect(() => {
    let container = document.querySelector<HTMLElement>('[data-toc-scroll-container="true"]');
    if (!container) return;

    let lockTimer: ReturnType<typeof setTimeout> | null = null;

    let lockUserScrolling = () => {
      if (isAutoScrollingRef.current) return;

      userScrollLockRef.current = performance.now() + 800;

      if (lockTimer !== null) {
        clearTimeout(lockTimer);
      }

      lockTimer = setTimeout(() => {
        userScrollLockRef.current = 0;
      }, 800);
    };

    container.addEventListener("pointerdown", lockUserScrolling, { passive: true });
    container.addEventListener("pointermove", lockUserScrolling, { passive: true });
    container.addEventListener("pointerup", lockUserScrolling, { passive: true });
    container.addEventListener("pointercancel", lockUserScrolling, { passive: true });
    container.addEventListener("wheel", lockUserScrolling, { passive: true });
    container.addEventListener("touchstart", lockUserScrolling, { passive: true });
    return () => {
      container.removeEventListener("pointerdown", lockUserScrolling);
      container.removeEventListener("pointermove", lockUserScrolling);
      container.removeEventListener("pointerup", lockUserScrolling);
      container.removeEventListener("pointercancel", lockUserScrolling);
      container.removeEventListener("wheel", lockUserScrolling);
      container.removeEventListener("touchstart", lockUserScrolling);

      if (lockTimer !== null) {
        clearTimeout(lockTimer);
      }
    };
  }, []);

  return (
    <NavList>
      <NavListHeading>On this page</NavListHeading>
      <NavListItems data-toc="true">
        {tableOfContents.map(({ text, slug, children }, i) => (
          <NavListItem key={i}>
            <NavListLink
              ref={slug === activeSection ? activeLinkRef : undefined}
              aria-current={activeSection === slug ? "location" : undefined}
              href={slug}
            >
              {text}
            </NavListLink>
            {children.length > 0 && (
              <NavListItems nested>
                {children.map(({ text, slug }, i) => (
                  <NavListItem key={i}>
                    <NavListLink
                      ref={slug === activeSection ? activeLinkRef : undefined}
                      nested
                      aria-current={activeSection === slug ? "location" : undefined}
                      href={slug}
                    >
                      {text}
                    </NavListLink>
                  </NavListItem>
                ))}
              </NavListItems>
            )}
          </NavListItem>
        ))}
      </NavListItems>
    </NavList>
  );
}
