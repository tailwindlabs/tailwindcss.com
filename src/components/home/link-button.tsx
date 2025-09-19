import clsx from "clsx";
import Link from "next/link";
import React, { JSX } from "react";

const baseStyles = "inline-flex justify-center rounded-full text-sm/6 font-semibold";
const sizeStyles = {
  default: "px-4 py-2",
  tight: "px-3.5 py-1",
};
const variantStyles = {
  primary: clsx(
    // Base styles
    "focus-visible:outline-2 focus-visible:outline-offset-2",

    // Light mode
    "bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-gray-950",

    // Dark mode
    "dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:hover:bg-gray-200 dark:focus-visible:outline-white dark:focus-visible:outline-white",
  ),
  dark: clsx(
    // Base styles
    "focus-visible:outline-2 focus-visible:outline-offset-2",

    // Dark styles
    "bg-white text-gray-950 hover:bg-gray-200 focus-visible:outline-white ",

    // Dark styles in dark mode
    "dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:hover:bg-gray-200 dark:focus-visible:outline-white dark:focus-visible:outline-white",
  ),
  outline: clsx(
    // Base styles
    "ring-1",

    // Light mode
    "text-gray-950 ring-gray-950/10 hover:ring-gray-950/20",

    // Dark mode
    "dark:text-white dark:ring-white/10 dark:hover:ring-white/20",
  ),
};
export default function LinkButton({
  className,
  children,
  href,
  variant = "primary",
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
}): JSX.Element {
  return (
    <Link
      href={href}
      // className={clsx(
      //   className,
      //   "inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600",
      // )}
      className={clsx(className, baseStyles, variantStyles[variant], sizeStyles[size])}
    >
      {children}
    </Link>
  );
}
