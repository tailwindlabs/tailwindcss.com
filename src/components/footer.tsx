import clsx from "clsx";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export function FooterSitemap({ className }: { className?: string }) {
  return (
    <footer className="bg-white text-sm/loose text-gray-950 dark:bg-gray-950 dark:text-white">
      <div className={clsx("flex gap-4 p-4 md:hidden", className)}>
        <div className="flex flex-1 flex-col gap-10">
          <div>
            <TailwindCSS />
          </div>
          <div>
            <Resources />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          <div>
            <TailwindPlus />
          </div>
          <div>
            <Community />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "mx-auto hidden w-full grid-cols-4 justify-between gap-y-0 md:grid md:grid-cols-4 md:gap-6 md:gap-x-4 lg:gap-8",
          className,
        )}
      >
        <div className="border-x border-b border-gray-950/5 py-10 pl-2 not-md:border-0 md:border-b-0 dark:border-white/10">
          <TailwindCSS />
        </div>
        <div className="border-x border-b border-gray-950/5 py-10 pl-2 not-md:border-0 md:border-b-0 dark:border-white/10">
          <TailwindPlus />
        </div>
        <div className="border-x border-b border-gray-950/5 py-10 pl-2 not-md:border-0 sm:border-b-0 dark:border-white/10">
          <Resources />
        </div>
        <div className="border-x border-gray-950/5 py-10 pl-2 not-md:border-0 dark:border-white/10">
          <Community />
        </div>
      </div>
    </footer>
  );
}

export function FooterMeta({ className }: { className?: string }) {
  return (
    <div className="px-2 pt-10 pb-24">
      <div
        className={clsx(
          "mx-auto flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8",
          className,
        )}
      >
        <ThemeToggle />
        <div className="flex flex-col gap-4 text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400">
          <span>Copyright ©&nbsp;{new Date().getFullYear()}&nbsp;Tailwind Labs Inc.</span>
          <span className="max-sm:hidden">&middot;</span>
          <Link href="/brand" className="hover:underline">
            Trademark Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

function TailwindCSS() {
  return (
    <>
      <h3 className="font-semibold">Tailwind CSS</h3>
      <ul className="mt-4 grid gap-4">
        <li>
          <Link href="/docs" className="hover:underline">
            Documentation
          </Link>
        </li>
        <li>
          <Link href="https://play.tailwindcss.com/" className="hover:underline">
            Playground
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/showcase" className="hover:underline">
            Showcase
          </Link>
        </li>
        <li>
          <Link href="/sponsor" className="hover:underline">
            Sponsor
          </Link>
        </li>
      </ul>
    </>
  );
}

function TailwindPlus() {
  return (
    <>
      <h3 className="mb-2 font-semibold">
        <a href="/plus?ref=footer" className="hover:underline">
          Tailwind Plus
        </a>
      </h3>
      <ul className="mt-4 grid gap-4">
        <li>
          <a href="/plus/ui-blocks?ref=footer" className="hover:underline">
            UI Blocks
          </a>
        </li>
        <li>
          <a href="/plus/templates?ref=footer" className="hover:underline">
            Templates
          </a>
        </li>
        <li>
          <a href="/plus/ui-kit?ref=footer" className="hover:underline">
            UI Kit
          </a>
        </li>
      </ul>
    </>
  );
}

function Resources() {
  return (
    <>
      <h3 className="font-semibold">Resources</h3>
      <ul className="mt-4 grid gap-4">
        <li>
          <Link href="https://www.refactoringui.com" className="hover:underline">
            Refactoring UI
          </Link>
        </li>
        <li>
          <Link href="https://headlessui.com" className="hover:underline">
            Headless UI
          </Link>
        </li>
        <li>
          <Link href="https://heroicons.com" className="hover:underline">
            Heroicons
          </Link>
        </li>
        <li>
          <Link href="https://heropatterns.com" className="hover:underline">
            Hero Patterns
          </Link>
        </li>
      </ul>
    </>
  );
}

function Community() {
  return (
    <>
      <h3 className="font-semibold">Community</h3>
      <ul className="mt-4 grid gap-4">
        <li>
          <Link href="https://github.com/tailwindlabs/tailwindcss" className="hover:underline">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/sponsor#insiders" className="hover:underline">
            Discord
          </Link>
        </li>
        <li>
          <Link href="https://x.com/tailwindcss" className="hover:underline">
            X
          </Link>
        </li>
      </ul>
    </>
  );
}
