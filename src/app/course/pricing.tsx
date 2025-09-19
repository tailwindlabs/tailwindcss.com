"use client";

import LinkButton from "@/components/home/link-button";
import GridContainer from "@/components/grid-container";
import Link from "next/link";
import { useMemo } from "react";

const packages = {
  essentials: {
    name: "Essentials",
    price: 199,
  },
  complete: {
    name: "Complete",
    price: 299,
  },
};

export function CheckIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 22 22" {...props}>
      <path className="fill-sky-400/25" d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11Z" />
      <path
        className="fill-sky-400/25"
        d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Zm0 1c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        className="fill-sky-400"
        d="m14.684 7.82-4.079 6.992L7.293 11.5 8 10.793l2.395 2.395 3.425-5.872.864.504Z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function PricingFeatures({
  dark = false,
  items,
}: {
  dark?: boolean;
  items: { name: string; description: string }[];
}) {
  return (
    <div className="@container">
      <ul
        className="group grid grid-cols-1 gap-x-10 gap-y-6 text-sm/7 text-gray-600 data-dark:text-gray-300 @3xl:grid-cols-2 dark:text-gray-300"
        role="list"
        data-dark={dark ? "true" : undefined}
      >
        {items.map(({ name, description }) => (
          <li key={name} className="grid max-w-2xl grid-cols-[auto_1fr] gap-6">
            <CheckIcon className="h-7 w-5.5" />
            <p>
              <strong className="font-semibold text-gray-950 group-data-dark:text-white dark:text-white">{name}</strong>{" "}
              — {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Pricing() {
  return (
    <section className="mt-50" id="pricing">
      <GridContainer className="grid items-stretch lg:grid-cols-2 lg:gap-6">
        <div className="relative grid gap-y-4 after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gray-950/5 lg:justify-between dark:after:bg-white/10">
          <div>
            <div className="relative grid grid-cols-1 gap-y-2 px-4 py-2 after:absolute after:right-0 after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 sm:px-2 dark:after:bg-white/10">
              <h2 className="text-[2.5rem]/none tracking-tight text-pretty">Get Tailwind CSS by Example</h2>
            </div>
            <GridContainer direction="to-left" className="mt-6 px-4 py-2 sm:px-2">
              <p className="max-w-2xl text-sm/7">
                A video course that teaches you how to build beautiful, responsive UIs—without writing a single line of
                custom CSS.
              </p>
            </GridContainer>
          </div>
          <div className="relative self-end bg-gray-950/5 p-2 before:absolute before:top-0 before:right-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:bg-white/5 dark:before:bg-white/10">
            {/* Essentials */}
            <div className="grid gap-6 rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-gray-950/10 sm:rounded-4xl sm:p-10 dark:bg-transparent dark:outline-white/10">
              <div className="grid gap-4">
                <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty text-gray-600 uppercase dark:text-gray-300">
                  The basics
                </p>
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-x-4">
                    <p className="text-6xl font-light *:font-medium">
                      $<span className="font-semibold">{packages.essentials.price}</span>
                    </p>
                    <div>
                      <p className="text-sm/6 font-semibold">one time payment</p>
                      <p className="text-sm/6 text-gray-600 dark:text-gray-300">plus local taxes</p>
                    </div>
                  </div>
                  <LinkButton
                    className=""
                    href="#"
                    aria-label={`Buy the essentials package for ${packages.essentials.price}`}
                  >
                    Buy Essentials Package
                  </LinkButton>
                </div>
                <p className="text-sm/7 dark:text-gray-300">For individuals working on their next big idea.</p>
              </div>
              <div className="h-px w-full bg-gray-950/5" />
              <PricingFeatures
                items={[
                  {
                    name: "Modules 1 & 2",
                    description:
                      "everything you need to build beautiful marketing sites, application UIs, ecommerce stores, and more.",
                  },
                  {
                    name: "Source code",
                    description:
                      "beautifully designed, expertly crafted website templates built with modern technologies like React and Next.js.",
                  },
                ]}
              />
            </div>
            {/* Complete */}
          </div>
        </div>
        <div className="grid border-l border-gray-950/5 bg-gray-950/5 p-2 dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-6 self-stretch rounded-2xl bg-gray-950 p-6 outline-1 -outline-offset-1 outline-white/10 sm:rounded-4xl sm:p-10">
            <div className="grid gap-4">
              <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty text-gray-300 uppercase">
                The complete package
              </p>
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-x-4">
                  <p className="text-6xl font-light text-white *:font-medium">
                    $<span className="font-semibold">{packages.complete.price}</span>
                  </p>
                  <div>
                    <p className="text-sm/6 font-semibold text-white">one time payment</p>
                    <p className="text-sm/6 text-gray-300">plus local taxes</p>
                  </div>
                </div>
                <LinkButton
                  href="#"
                  variant="dark"
                  className=""
                  aria-label={`Buy the complete package for ${packages.complete.price}`}
                >
                  Buy Complete Package
                </LinkButton>
              </div>
              <p className="text-sm/7 text-gray-300">For product teams and agencies.</p>
            </div>
            <div className="h-px w-full bg-white/10" />
            <PricingFeatures
              dark
              items={[
                {
                  name: "The whole course",
                  description:
                    "everything you need to build beautiful marketing sites, application UIs, ecommerce stores, and more.",
                },
                {
                  name: "Source code for every lesson",
                  description:
                    "beautifully designed, expertly crafted website templates built with modern technologies like React and Next.js.",
                },
                {
                  name: "Figma design files",
                  description: "a starter kit for building your own component systems with React and Tailwind CSS.",
                },
                {
                  name: "Downloadable videos",
                  description:
                    "beautifully designed, expertly crafted website templates built with modern technologies like React and Next.js.",
                },
              ]}
            />
          </div>
        </div>
      </GridContainer>
      <GridContainer className="mt-10 p-2">
        <p className="prose max-w-2xl text-sm/7">
          Looking for a Team license?{" "}
          <a
            href="#faq-can-i-buy-a-team-license"
            onClick={() => {
              let el = document.getElementById("faq-can-i-buy-a-team-license");
              if (el) el.setAttribute("open", "true");
            }}
          >
            View Team pricing options.
          </a>
        </p>
      </GridContainer>
    </section>
  );
}
