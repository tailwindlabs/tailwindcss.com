"use client";

import { DocSearchModal } from "@docsearch/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

const INDEX_NAME = "tailwindcss";
const API_KEY = "5fc87cef58bb80203d2207578309fab6";
const APP_ID = "KNPXZI5B0M";

function isTailwindPlusURL(url: string) {
  return (
    url.startsWith("https://tailwindui.com") ||
    url.startsWith("https://tailwindcss.com/plus") ||
    url.startsWith("/plus")
  );
}

function isExternalURL(url: string) {
  if (url.startsWith("https://tailwindui.com")) {
    return false;
  }

  return /^https?:\/\//.test(url) && !url.startsWith(window.location.origin);
}

function rewriteURL(url: string) {
  if (!url.startsWith("https://tailwindui.com")) {
    return url;
  }

  url = url.replace("https://tailwindui.com/", "https://tailwindcss.com/plus/");
  // Temporary thing while `https://tailwindui.com/` is rewritten to /plus
  url = url.replace("/plus/plus/", "/plus/");
  url = url.replace("/plus/components", "/plus/ui-blocks");
  url = url.replace("/plus/templates/catalyst", "/plus/ui-kit");
  url = url.replace("/plus/all-access", "/plus/#pricing");
  url = url.replace("/plus/documentation", "/plus/ui-blocks/documentation");

  return url;
}

const SearchContext = createContext<any>({});

export function SearchProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState("");

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (e: any) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery],
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
  });

  useEffect(() => {
    // Prepend "Components" to Tailwind UI results that are shown in the "recent" view
    if (!isOpen) {
      let key = `__DOCSEARCH_RECENT_SEARCHES__${INDEX_NAME}`;
      try {
        let data = JSON.parse(localStorage.getItem(key) as any);
        for (let item of data) {
          if (isTailwindPlusURL(item.url) && !item.hierarchy.lvl1.startsWith("Components")) {
            item.hierarchy.lvl1 = `Components / ${item.hierarchy.lvl1}`;
          }
        }
        localStorage.setItem(key, JSON.stringify(data));
      } catch {}
    }
  }, [isOpen]);

  let searchContext = useMemo(
    () => ({
      isOpen,
      onOpen,
      onClose,
      onInput,
    }),
    [isOpen, onOpen, onClose, onInput],
  );

  return (
    <>
      <link rel="preconnect" href={`https://${APP_ID}-dsn.algolia.net`} crossOrigin="anonymous" />
      <SearchContext.Provider value={searchContext}>{children}</SearchContext.Provider>
      {isOpen &&
        createPortal(
          <div
            onClick={(event) => {
              // @ts-ignore
              let link = event.target.closest("a");
              if (!link) return;
              if (isExternalURL(link.href) && link.target !== "_blank") {
                event.preventDefault();
                window.open(link.href, "_blank");
              }
            }}
          >
            <DocSearchModal
              initialQuery={initialQuery}
              initialScrollY={window.scrollY}
              searchParameters={{
                facetFilters: [["version:v4", "version:plus"]],
                distinct: 1,
                attributesToRetrieve: [
                  "hierarchy.lvl0",
                  "hierarchy.lvl1",
                  "hierarchy.lvl2",
                  "hierarchy.lvl3",
                  "hierarchy.lvl4",
                  "hierarchy.lvl5",
                  "hierarchy.lvl6",
                  "content",
                  "type",
                  "url",
                  "product",
                  "product_category",
                ],
              }}
              placeholder="Search documentation"
              onClose={onClose}
              indexName={INDEX_NAME}
              apiKey={API_KEY}
              appId={APP_ID}
              navigator={{
                navigate({ itemUrl }) {
                  setIsOpen(false);
                  if (isExternalURL(itemUrl)) {
                    window.open(itemUrl, "_blank");
                  } else if (!isTailwindPlusURL(itemUrl)) {
                    router.push(itemUrl);
                  } else {
                    router.push(itemUrl);
                  }
                },
              }}
              hitComponent={Hit}
              transformItems={(items) => {
                items = items.map((item) => {
                  item.url = rewriteURL(item.url);
                  return item;
                });

                // TODO: Remove this once only new stuff is indexed
                items = items.filter((item) => {
                  // Remove old prev-Tailwind plus search results
                  // @ts-ignore
                  if (item.hierarchy?.lvl0 === "Components") {
                    return false;
                  }

                  return true;
                });

                return items.map((item, index) => {
                  // We transform the absolute URL into a relative URL to
                  // leverage Next's preloading.
                  const a = document.createElement("a");
                  a.href = item.url;

                  const hash = a.hash === "#content-wrapper" || a.hash === "#header" ? "" : a.hash;

                  if (item.hierarchy?.lvl0) {
                    item.hierarchy.lvl0 = item.hierarchy.lvl0.replace(/&amp;/g, "&");
                  }

                  if (item._highlightResult?.hierarchy?.lvl0?.value) {
                    item._highlightResult.hierarchy.lvl0.value = item._highlightResult.hierarchy.lvl0.value.replace(
                      /&amp;/g,
                      "&",
                    );
                  }

                  let isTailwindUI = isTailwindPlusURL(item.url);

                  if (isTailwindUI && item.hierarchy.lvl0 === "UI Blocks") {
                    if (item.hierarchy?.lvl0) {
                      item.hierarchy.lvl0 = "Components";
                    }

                    if (item._highlightResult?.hierarchy?.lvl0?.value) {
                      item._highlightResult.hierarchy.lvl0.value = "Components";
                    }
                  }

                  return {
                    ...item,
                    hierarchy: {
                      ...item.hierarchy,
                      ...(isTailwindUI
                        ? // @ts-ignore
                          { lvl1: `${item.product} / ${item.product_category}` }
                        : {}),
                    },
                    url: `${a.pathname}${hash}`,
                    __is_result: () => true,
                    __is_parent: () => item.type === "lvl1" && items.length > 1 && index === 0,
                    __is_child: () =>
                      item.type !== "lvl1" && items.length > 1 && items[0].type === "lvl1" && index !== 0,
                    __is_first: () => index === 1,
                    __is_last: () => index === items.length - 1 && index !== 0,
                    __is_tailwindui: () => isTailwindUI,
                    __is_tailwindcss: () => !isTailwindUI,
                  };
                });
              }}
            />
          </div>,
          document.body,
        )}
    </>
  );
}

function Hit({ hit, children }: { hit: any; children: React.ReactNode }) {
  if (isTailwindPlusURL(hit.url)) {
    return (
      <a
        href={hit.url}
        className={clsx({
          "DocSearch-Hit--Result": hit.__is_result?.(),
          "DocSearch-Hit--Parent": hit.__is_parent?.(),
          "DocSearch-Hit--FirstChild": hit.__is_first?.(),
          "DocSearch-Hit--LastChild": hit.__is_last?.(),
          "DocSearch-Hit--Child": hit.__is_child?.(),
          "DocSearch-Hit--TailwindUI": hit.__is_tailwindui?.(),
        })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={hit.url}
      className={clsx({
        "DocSearch-Hit--Result": hit.__is_result?.(),
        "DocSearch-Hit--Parent": hit.__is_parent?.(),
        "DocSearch-Hit--FirstChild": hit.__is_first?.(),
        "DocSearch-Hit--LastChild": hit.__is_last?.(),
        "DocSearch-Hit--Child": hit.__is_child?.(),
        "DocSearch-Hit--TailwindUI": hit.__is_tailwindui?.(),
      })}
    >
      {children}
    </Link>
  );
}

export function SearchButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  let searchButtonRef = useRef(null);
  let { onOpen, onInput } = useContext(SearchContext);

  useEffect(() => {
    // @ts-ignore
    function onKeyDown(event) {
      if (searchButtonRef && searchButtonRef.current === document.activeElement && onInput) {
        if (/[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
          onInput(event);
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onInput, searchButtonRef]);

  return (
    <button type="button" ref={searchButtonRef} onClick={onOpen} {...props}>
      {children}
    </button>
  );
}

function useDocSearchKeyboardEvents({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      function open() {
        // We check that no other DocSearch modal is showing before opening
        // another one.
        if (!document.body.classList.contains("DocSearch--active")) {
          onOpen();
        }
      }

      if (
        (event.keyCode === 27 && isOpen) ||
        (event.key === "k" && (event.metaKey || event.ctrlKey) && !event.shiftKey) ||
        (!isEditingContent(event) && event.key === "/" && !isOpen)
      ) {
        event.preventDefault();

        if (isOpen) {
          onClose();
        } else if (!document.body.classList.contains("DocSearch--active")) {
          open();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onOpen, onClose]);
}

// @ts-ignore
function isEditingContent(event) {
  let element = event.target;
  let tagName = element.tagName;
  return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
}
