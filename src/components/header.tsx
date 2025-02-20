"use client";

import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconButton } from "./icon-button";
import { SearchButton } from "./search";
import { Logo } from "./logo";

function GitHubLogo(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z" />
    </svg>
  );
}

function TailwindMark(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 34 24" fill="none" {...props}>
      <path fill="transparent" d="M0 0H34V24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.668 2c-4.445 0-7.223 2.222-8.334 6.667 1.667-2.222 3.611-3.055 5.833-2.5 1.268.317 2.175 1.236 3.178 2.255C18.979 10.081 20.87 12 25 12c4.445 0 7.223-2.222 8.334-6.666-1.666 2.222-3.61 3.055-5.833 2.5-1.269-.318-2.175-1.237-3.178-2.255C22.69 3.919 20.8 2 16.668 2zM8.334 12C3.889 12 1.11 14.222 0 18.667c1.667-2.222 3.612-3.056 5.833-2.5 1.269.316 2.175 1.236 3.178 2.255C10.645 20.081 12.536 22 16.668 22c4.444 0 7.222-2.222 8.333-6.666-1.667 2.222-3.611 3.055-5.833 2.5-1.268-.317-2.175-1.238-3.177-2.255C14.356 13.92 12.463 12 8.334 12z"
        fill="color(display-p3 .2196 .7412 .9725)"
      />
    </svg>
  );
}

function VersionPicker() {
  return (
    <Menu>
      <MenuButton
        className="flex items-center gap-0.5 rounded-2xl bg-gray-950/5 py-0.5 pr-1.5 pl-2.5 text-xs/5 font-medium text-gray-950 tabular-nums hover:bg-gray-950/7.5 data-active:bg-gray-950/7.5 dark:bg-white/10 dark:text-white dark:hover:bg-white/12.5 dark:data-active:bg-white/12.5"
        aria-label="Select version of library"
      >
        v4.0
        <ChevronDownIcon className="size-4 fill-gray-400" />
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        className="mt-2 w-28 rounded-xl bg-white p-1 py-1 text-xs/7 font-medium text-gray-950 tabular-nums shadow-sm ring ring-gray-950/5 [--anchor-offset:calc(var(--spacing)*-1)] dark:bg-gray-950 dark:text-white dark:ring-white/10"
      >
        <MenuItem disabled>
          <div className="flex items-center justify-between gap-2 rounded-lg px-2.5 data-active:bg-gray-950/5 dark:data-active:bg-white/10">
            v4.0
            <CheckIcon className="size-4" />
          </div>
        </MenuItem>
        <MenuItem>
          <a
            href="https://v3.tailwindcss.com"
            className="flex items-center justify-between gap-2 rounded-lg px-2.5 data-active:bg-gray-950/5 dark:data-active:bg-white/10"
          >
            v3.4.17
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://v2.tailwindcss.com"
            className="flex items-center justify-between gap-2 rounded-lg px-2.5 data-active:bg-gray-950/5 dark:data-active:bg-white/10"
          >
            v2.2.19
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://v1.tailwindcss.com"
            className="flex items-center justify-between gap-2 rounded-lg px-2.5 data-active:bg-gray-950/5 dark:data-active:bg-white/10"
          >
            v1.9.6
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://tailwindcss-v0.netlify.app"
            className="flex items-center justify-between gap-2 rounded-lg px-2.5 data-active:bg-gray-950/5 dark:data-active:bg-white/10"
          >
            v0.7.4
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export function Header(props: React.PropsWithChildren) {
  let [navIsOpen, setNavIsOpen] = useState(false);
  let router = useRouter();

  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
        <div className="flex gap-4">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Home"
            onContextMenu={(evt) => {
              evt.preventDefault();
              router.push("/brand");
            }}
          >
            <Logo className="h-6 text-black dark:text-white" />
          </Link>
          <VersionPicker />
        </div>
        <div className="flex items-center gap-6 max-md:hidden">
          <SearchButton className="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1 outline -outline-offset-1 outline-gray-950/8 dark:bg-white/5 dark:outline-white/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>

            <kbd className="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&]:block">⌘K</kbd>
            <kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">
              Ctrl&nbsp;K
            </kbd>
          </SearchButton>
          {[
            ["Docs", "/docs"],
            ["Components", "https://tailwindui.com/?ref=top"],
            ["Blog", "/blog"],
            ["Showcase", "/showcase"],
          ].map(([text, href]) => (
            <Link href={href} key={href} className="text-sm/6 text-gray-950 dark:text-white">
              {text}
            </Link>
          ))}
          <Link href="https://github.com/tailwindlabs/tailwindcss" aria-label="GitHub repository">
            <GitHubLogo className="size-5 fill-black/40 dark:fill-gray-400" />
          </Link>
        </div>
        <div className="flex items-center gap-2.5 md:hidden">
          <SearchButton aria-label="Search" className="inline-grid size-7 place-items-center rounded-md">
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </SearchButton>

          <IconButton aria-label="Navigation" onClick={() => setNavIsOpen(!navIsOpen)}>
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </IconButton>

          <Dialog
            open={navIsOpen}
            onClose={() => setNavIsOpen(false)}
            className="fixed inset-0 bg-white focus:outline-none md:hidden dark:bg-gray-950"
          >
            <DialogPanel className="size-full overflow-y-auto">
              <div className="flex h-14 items-center justify-between px-4 py-4 sm:px-6">
                <TailwindMark className="h-6" />
                <IconButton aria-label="Navigation" onClick={() => setNavIsOpen(false)}>
                  <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                  </svg>
                </IconButton>
              </div>
              <div className="grid grid-cols-1 gap-1 px-1 pb-1 sm:px-3 sm:pb-3">
                {[
                  ["Docs", "/docs"],
                  ["Components", "https://tailwindui.com/?ref=top"],
                  ["Blog", "/blog"],
                  ["Showcase", "/showcase"],
                  ["GitHub", "https://github.com/tailwindlabs/tailwindcss"],
                ].map(([text, href]) => (
                  <Link
                    href={href}
                    key={href}
                    className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
