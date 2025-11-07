import { NavList, NavListHeading, NavListItem, NavListItems } from "@/components/nav-list";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import index from "../app/(docs)/docs/index";
import { DocsSidebarLink } from "./docs-sidebar-link";

export function TopNavLink(props: { href: string } & React.ComponentPropsWithoutRef<"a">) {
  const Component = props.href.startsWith("/plus") ? "a" : Link;

  return (
    <Component
      className={clsx(
        "group",
        "inline-flex items-center gap-3 text-base/8 text-gray-600 sm:text-sm/7 dark:text-gray-300",
        "**:data-outline:stroke-gray-400 dark:**:data-outline:stroke-gray-500 **:[svg]:first:size-5 **:[svg]:first:sm:size-4",
        "hover:text-gray-950 hover:**:data-highlight:fill-gray-300 hover:**:data-outline:stroke-gray-950",
        "dark:hover:text-white dark:hover:**:data-highlight:fill-gray-600 dark:hover:**:data-outline:stroke-white",
        "aria-[current]:font-semibold aria-[current]:text-gray-950 aria-[current]:**:data-highlight:fill-gray-300 aria-[current]:**:data-outline:stroke-gray-950",
        "dark:aria-[current]:text-white dark:aria-[current]:**:data-highlight:fill-gray-600 dark:aria-[current]:**:data-outline:stroke-white",
      )}
      {...props}
    />
  );
}

function TopNav() {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <TopNavLink href="/docs/installation" aria-current="page">
          <svg viewBox="0 0 16 16" fill="none">
            <path
              data-highlight
              d="M3.5 1.5C2.4264 1.5 1.40926 1.74169 0.5 2.17363V13.1736C1.40926 12.7417 2.4264 12.5 3.5 12.5C5.21352 12.5 6.78323 13.1157 8 14.1379V3.13789C6.78323 2.11568 5.21352 1.5 3.5 1.5Z"
            />
            <path
              data-outline
              d="M8 14.1379C9.21677 13.1157 10.7865 12.5 12.5 12.5C13.5736 12.5 14.5907 12.7417 15.5 13.1736V2.17363C14.5907 1.74169 13.5736 1.5 12.5 1.5C10.7865 1.5 9.21677 2.11568 8 3.13789M8 14.1379C6.78323 13.1157 5.21352 12.5 3.5 12.5C2.4264 12.5 1.40926 12.7417 0.5 13.1736V2.17363C1.40926 1.74169 2.4264 1.5 3.5 1.5C5.21352 1.5 6.78323 2.11568 8 3.13789M8 14.1379V3.13789"
            />
          </svg>
          Documentation
        </TopNavLink>
      </li>
      <li>
        <TopNavLink href="/plus/ui-blocks?ref=sidebar">
          <svg viewBox="0 0 16 16" fill="none">
            <path data-outline d="m11 8 .5.25L15 10.5 8 15l-7-4.5 3.5-2.25L5 8" />
            <path data-highlight d="M8 1 1 5.5 8 10l7-4.5L8 1Z" />
            <path data-outline d="M8 1 1 5.5 8 10l7-4.5L8 1Z" />
          </svg>
          Components
        </TopNavLink>
      </li>
      <li>
        <TopNavLink href="/plus/templates?ref=sidebar">
          <svg viewBox="0 0 16 16" fill="none">
            <path
              data-highlight
              d="M12.5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V4.5V12.5C1.5 13.6046 2.39543 14.5 3.5 14.5H5.5V4.5H14.5V3.5C14.5 2.39543 13.6046 1.5 12.5 1.5Z"
            />
            <path
              data-outline
              d="M5.5 4.5H14.5M5.5 4.5H1.5M5.5 4.5V14.5M14.5 4.5V3.5C14.5 2.39543 13.6046 1.5 12.5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V4.5M14.5 4.5V12.5C14.5 13.6046 13.6046 14.5 12.5 14.5H5.5M1.5 4.5V12.5C1.5 13.6046 2.39543 14.5 3.5 14.5H5.5"
            />
          </svg>
          Templates
        </TopNavLink>
      </li>
      <li>
        <TopNavLink href="/plus/ui-kit?ref=sidebar">
          <svg viewBox="0 0 16 16" fill="none">
            <path data-highlight d="M15.5 11.5V4.5L8 8.5L0.5 4.5V11.5L8 15.5L15.5 11.5Z" />
            <path
              data-outline
              d="M0.5 4.5V11.5L8 15.5M0.5 4.5L8 0.5L15.5 4.5M0.5 4.5L8 8.5M15.5 4.5V11.5L8 15.5M15.5 4.5L8 8.5M8 15.5V8.5"
            />
          </svg>
          UI Kit
        </TopNavLink>
      </li>
      <li>
        <TopNavLink href="https://play.tailwindcss.com/">
          <svg viewBox="0 0 16 16" fill="none">
            <rect data-highlight x="1.5" y="1.5" width="13" height="13" rx="2" />
            <rect data-outline x="1.5" y="1.5" width="13" height="13" rx="2" />
            <path data-outline d="M6.5 6L4.5 8L6.5 10" strokeLinecap="round" strokeLinejoin="round" />
            <path data-outline d="M9.5 6L11.5 8L9.5 10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Playground
        </TopNavLink>
      </li>
      <li className="flex items-center gap-3">
        <TopNavLink href="/build-uis-that-dont-suck">
          <svg viewBox="0 0 16 16" fill="none">
            <path data-highlight d="M8 2 1 6l7 4 7-4-7-4Z" />
            <path
              data-outline
              strokeLinecap="round"
              d="M3.5 7.429V13A7.466 7.466 0 0 0 8 14.5a7.466 7.466 0 0 0 4.5-1.5V7.43m-9 0L8 10l4.5-2.571m-9 0-2-1.143m11 1.143L15 6 8 2 1 6l.5.286m0 5.214V6.286"
            />
          </svg>

          <span>Course</span>
          <span className="relative px-1.5 font-mono text-[0.625rem]/[1.125rem] font-medium tracking-widest text-sky-800 uppercase dark:text-sky-300">
            <span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30" />
            New
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className="absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50"
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
          </span>
        </TopNavLink>
      </li>
      <li className="flex items-center gap-3">
        <TopNavLink href="/sponsor#insiders">
          <svg viewBox="0 0 16 16" fill="none">
            <path
              data-outline
              d="M5.5 4.5h-3a2 2 0 00-2 2v4c0 1.1.9 2 2 2h1v3l3-3h2a2 2 0 002-2v-1m0 0l2 2v-3h1a2 2 0 002-2v-4a2 2 0 00-2-2h-6a2 2 0 00-2 2v4c0 1.1.9 2 2 2h2l1 1z"
              strokeLinejoin="round"
            />
            <path
              data-highlight
              d="M13.5 1c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 00-.5.5v1.8L9.85 8.14A.5.5 0 009.5 8h-2A1.5 1.5 0 016 6.5v-4C6 1.67 6.67 1 7.5 1h6z"
            />
          </svg>

          <span>Community</span>
        </TopNavLink>
      </li>
    </ul>
  );
}

export function DocsSidebar() {
  return (
    <nav className="flex flex-col gap-8">
      <TopNav />
      {Object.entries(index).map(([category, entries]) => (
        <NavList key={category} data-autoscroll>
          <NavListHeading>{category}</NavListHeading>
          <NavListItems>
            {entries.map(([title, path, children]) => (
              <NavListItem key={path}>
                <DocsSidebarLink title={title} path={path} />

                {Array.isArray(children) && children.length > 0 && (
                  <NavListItems nested>
                    {children.map(([title, path]) => (
                      <NavListItem key={path}>
                        <DocsSidebarLink title={title} path={path} nested />
                      </NavListItem>
                    ))}
                  </NavListItems>
                )}
              </NavListItem>
            ))}
          </NavListItems>
        </NavList>
      ))}
    </nav>
  );
}
