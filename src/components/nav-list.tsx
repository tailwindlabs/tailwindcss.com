import { CloseButton } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";

export function NavList({ children, ...rest }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col gap-3" {...rest}>
      {children}
    </div>
  );
}

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export function NavListHeading({ children, level = 3 }: React.PropsWithChildren<{ level?: HeadingLevel }>) {
  let Element: `h${HeadingLevel}` = `h${level}`;
  return (
    <Element className="font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase sm:text-xs/6 dark:text-gray-400">
      {children}
    </Element>
  );
}

export function NavListItems({ children, nested = false }: React.PropsWithChildren<{ nested?: boolean }>) {
  return (
    <ul
      className={clsx(
        "flex flex-col gap-2 border-l dark:border-[color-mix(in_oklab,_var(--color-gray-950),white_20%)]",
        nested ? "border-transparent" : "border-[color-mix(in_oklab,_var(--color-gray-950),white_90%)]",
      )}
    >
      {children}
    </ul>
  );
}

export function NavListItem({ children }: React.PropsWithChildren) {
  return <li className="-ml-px flex flex-col items-start gap-2">{children}</li>;
}

export function NavListLink({
  href,
  children,
  nested = false,
  ...props
}: React.PropsWithChildren<{ href: string; nested?: boolean }>) {
  return (
    <CloseButton
      as={Link}
      className={clsx(
        "inline-block border-l border-transparent text-base/8 text-gray-600 hover:border-gray-950/25 hover:text-gray-950 sm:text-sm/6 dark:text-gray-300 dark:hover:border-white/25 dark:hover:text-white",
        "aria-[current]:border-gray-950 aria-[current]:font-semibold aria-[current]:text-gray-950 dark:aria-[current]:border-white dark:aria-[current]:text-white",
        nested ? "pl-8 sm:pl-7.5" : "pl-5 sm:pl-4",
      )}
      href={href}
      {...props}
    >
      {children}
    </CloseButton>
  );
}
