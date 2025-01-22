"use client";

import { NavListLink } from "@/components/nav-list";
import { usePathname } from "next/navigation";

export function DocsSidebarLink({ title, path, nested = false }: { title: string; path: string; nested?: boolean }) {
  let pathname = usePathname();

  return (
    <NavListLink
      aria-current={pathname === path || pathname?.startsWith(`${path}/`) ? "page" : undefined}
      href={path}
      nested={nested}
    >
      {title}
    </NavListLink>
  );
}
