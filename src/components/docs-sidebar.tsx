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
        "inline-flex items-center gap-3 text-base/8 text-gray-600 sm:text-sm/7 dark:text-gray-300",
        "**:data-outline:stroke-gray-400 dark:**:data-outline:stroke-gray-500 **:[svg]:size-5 **:[svg]:sm:size-4",
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
            <path
              data-highlight
              d="M11.5 7V3L8 5 4.5 3v4L8 9l3.5-2ZM8 13V9l-3.5 2L1 9v4l3.5 2L8 13ZM15 13V9l-3.5 2L8 9v4l3.5 2 3.5-2Z"
            />
            <path
              data-outline
              d="M4.5 3v4m0-4L8 1l3.5 2m-7 0L8 5m3.5-2v4m0-4L8 5m3.5 2L8 9m3.5-2L15 9M4.5 7 8 9M4.5 7 1 9m7 0V5m0 4v4m0-4-3.5 2M8 9l3.5 2M1 9v4l3.5 2M1 9l3.5 2M8 13l-3.5 2M8 13l3.5 2m-7 0v-4M15 9v4l-3.5 2M15 9l-3.5 2m0 4v-4"
            />
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
        <TopNavLink href="/course">
          <svg viewBox="0 0 16 16" fill="none">
            <path data-highlight d="M8 2 1 6l7 4 7-4-7-4Z" />
            <path
              data-outline
              strokeLinecap="round"
              d="M3.5 7.429V13A7.466 7.466 0 0 0 8 14.5a7.466 7.466 0 0 0 4.5-1.5V7.43m-9 0L8 10l4.5-2.571m-9 0-2-1.143m11 1.143L15 6 8 2 1 6l.5.286m0 5.214V6.286"
            />
          </svg>
          Course
        </TopNavLink>
        <div className="shrink-0 rounded-full bg-sky-300/20 px-2 font-mono text-[0.6875rem]/4.5 font-medium text-sky-700 uppercase">
          New
        </div>
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
