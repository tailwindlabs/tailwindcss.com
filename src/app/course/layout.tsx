import BaseContainer from "@/components/grid-container";
import React from "react";

export function GridContainer({ children }: { children: React.ReactNode }) {
  return (
    <BaseContainer>
      <div className="px-0 py-2 sm:px-2">{children}</div>
    </BaseContainer>
  );
}

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="max-w-screen overflow-x-hidden [html:has(&)]:bg-gray-950">
      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] sm:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-xl))_var(--gutter-width)]">
        {/* Candy cane */}
        <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10 sm:block"></div>

        {/* Main content area */}
        <div className="text-white">{children}</div>

        {/* Candy cane */}
        <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10 sm:col-start-3 sm:block"></div>
      </div>
    </div>
  );
}
