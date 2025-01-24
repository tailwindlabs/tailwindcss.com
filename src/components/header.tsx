"use client";

import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconButton } from "./icon-button";
import { SearchButton } from "./search";

function Logo(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 162 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.668 2c-4.445 0-7.223 2.222-8.334 6.667 1.667-2.222 3.611-3.055 5.833-2.5 1.268.317 2.175 1.236 3.178 2.255C18.979 10.081 20.87 12 25 12c4.445 0 7.223-2.222 8.334-6.666-1.666 2.222-3.61 3.055-5.833 2.5-1.269-.318-2.175-1.237-3.178-2.255C22.69 3.919 20.8 2 16.668 2zM8.334 12C3.889 12 1.11 14.222 0 18.667c1.667-2.222 3.612-3.056 5.833-2.5 1.269.316 2.175 1.236 3.178 2.255C10.645 20.081 12.536 22 16.668 22c4.444 0 7.222-2.222 8.333-6.666-1.667 2.222-3.611 3.055-5.833 2.5-1.268-.317-2.175-1.238-3.177-2.255C14.356 13.92 12.463 12 8.334 12z"
        className="fill-sky-400"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 10.427h-2.908v5.63c0 1.501.985 1.477 2.909 1.383v2.276c-3.895.47-5.443-.61-5.443-3.66v-5.63H42.4V7.988h2.158v-3.15l2.534-.751v3.901H50v2.44zm11.088-2.44h2.533v11.729h-2.533v-1.689c-.892 1.243-2.276 1.994-4.105 1.994-3.19 0-5.841-2.698-5.841-6.17 0-3.494 2.65-6.169 5.84-6.169 1.83 0 3.215.75 4.106 1.97V7.988zm-3.706 9.618c2.111 0 3.706-1.572 3.706-3.754s-1.595-3.753-3.706-3.753c-2.111 0-3.706 1.572-3.706 3.753 0 2.182 1.595 3.754 3.706 3.754zM67.844 6.228c-.891 0-1.618-.75-1.618-1.619.002-.43.173-.842.476-1.145a1.612 1.612 0 012.283 0c.304.303.475.715.477 1.145 0 .868-.727 1.619-1.618 1.619zm-1.267 13.488V7.987h2.534v11.729h-2.534zm5.466 0V2.59h2.533v17.124h-2.533zM91.021 7.987h2.674l-3.683 11.729h-2.487l-2.44-7.905-2.463 7.905h-2.486L76.453 7.987h2.674l2.276 8.092 2.463-8.092h2.416l2.44 8.092 2.299-8.092zm5.817-1.759c-.892 0-1.619-.75-1.619-1.619.003-.43.174-.842.477-1.145a1.612 1.612 0 012.284 0c.303.303.475.715.477 1.145 0 .868-.727 1.619-1.619 1.619zm-1.266 13.488V7.987h2.533v11.729H95.57zm11.634-12.034c2.628 0 4.504 1.783 4.504 4.833v7.2h-2.533v-6.943c0-1.783-1.032-2.72-2.627-2.72-1.666 0-2.979.985-2.979 3.377v6.287h-2.534V7.987h2.534V9.49c.774-1.22 2.04-1.807 3.635-1.807zm16.515-4.386h2.533v16.42h-2.533v-1.69c-.891 1.244-2.275 1.994-4.105 1.994-3.19 0-5.841-2.697-5.841-6.17 0-3.494 2.651-6.168 5.841-6.168 1.83 0 3.214.75 4.105 1.97V3.296zm-3.707 14.309c2.112 0 3.707-1.572 3.707-3.754s-1.595-3.753-3.707-3.753c-2.111 0-3.706 1.572-3.706 3.753 0 2.182 1.595 3.754 3.706 3.754zm14.732 2.416c-3.542 0-6.193-2.698-6.193-6.17 0-3.494 2.651-6.169 6.193-6.169 2.299 0 4.293 1.196 5.231 3.026l-2.182 1.267c-.516-1.102-1.665-1.806-3.072-1.806-2.065 0-3.636 1.572-3.636 3.682 0 2.111 1.571 3.683 3.636 3.683 1.407 0 2.556-.727 3.119-1.806l2.182 1.243c-.985 1.853-2.979 3.05-5.278 3.05zm9.453-8.797c0 2.135 6.311.844 6.311 5.185 0 2.346-2.041 3.612-4.574 3.612-2.346 0-4.035-1.056-4.786-2.745l2.182-1.266c.375 1.055 1.313 1.689 2.604 1.689 1.126 0 1.993-.376 1.993-1.315 0-2.087-6.31-.914-6.31-5.113 0-2.205 1.9-3.589 4.293-3.589 1.924 0 3.519.892 4.34 2.44l-2.135 1.196c-.422-.915-1.243-1.337-2.205-1.337-.915 0-1.713.399-1.713 1.243zm10.815 0c0 2.135 6.31.844 6.31 5.185 0 2.346-2.041 3.612-4.575 3.612-2.345 0-4.034-1.056-4.785-2.745l2.182-1.266c.375 1.055 1.313 1.689 2.603 1.689 1.126 0 1.995-.376 1.995-1.315 0-2.087-6.31-.914-6.31-5.113 0-2.205 1.899-3.589 4.292-3.589 1.924 0 3.519.892 4.34 2.44l-2.135 1.196c-.422-.915-1.243-1.337-2.205-1.337-.915 0-1.712.399-1.712 1.243z"
        fill="currentColor"
      />
    </svg>
  );
}

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
        className="mt-2 w-28 rounded-xl bg-white p-1 py-1 text-xs/7 font-medium text-gray-950 tabular-nums ring shadow-sm ring-gray-950/5 [--anchor-offset:calc(var(--spacing)*-1)] dark:bg-gray-950 dark:text-white dark:ring-white/10"
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
