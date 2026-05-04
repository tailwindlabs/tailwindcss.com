import React from "react";
import { Header } from "@/components/header";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
        <Header />
      </div>
      <div className="grid flex-1 grid-cols-[1fr_var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)_1fr] grid-rows-[1fr_auto] overflow-clip [--gutter-width:--spacing(6)] [--pattern-fg:var(--color-black)]/5 lg:[--gutter-width:--spacing(10)] dark:[--pattern-fg:var(--color-white)]/10">
        {/* Candy cane */}
        <div className="col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed text-gray-950/5 max-sm:hidden"></div>

        {/* Main content area */}
        <div className="col-start-3 row-start-1 text-gray-950 max-sm:col-span-full max-sm:col-start-1 dark:text-white">
          {children}
        </div>

        {/* Candy cane */}
        <div className="col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed text-gray-950/5 max-sm:hidden"></div>
      </div>
    </div>
  );
}
