import React from "react";
import { Header } from "@/components/header";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-gray-950">
      <div className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
        <Header />
      </div>
      <div className="mx-auto w-full max-w-384 px-6 lg:px-10">
        <div className="text-gray-950 dark:text-white">{children}</div>
      </div>
    </div>
  );
}
