import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function LinkButton({
  className,
  children,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        "inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600",
      )}
    >
      {children}
    </Link>
  );
}
