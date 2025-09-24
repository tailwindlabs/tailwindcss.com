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
    <section className="mt-30" id="pricing">
      <GridContainer className="grid items-stretch lg:grid-cols-2 lg:gap-6">
        <div className="relative grid gap-y-4 after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gray-950/5 lg:justify-between dark:after:bg-white/10">
          <div>
            <div className="relative grid grid-cols-1 gap-y-2 px-4 py-2 after:absolute after:right-0 after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 sm:px-2 dark:after:bg-white/10">
              <h2 className="text-[2.5rem]/none tracking-tight text-pretty">Get Tailwind CSS by Example</h2>
            </div>
            <GridContainer direction="to-left" className="mt-4 px-4 py-2 sm:px-2">
              <p className="max-w-2xl text-base/7">
                Learn how to build modern, dynamic interfaces with Tailwind CSS directly from the person who created it.
              </p>
            </GridContainer>
          </div>
          {/* Essentials */}
          <div className="relative self-end bg-gray-950/5 p-2 before:absolute before:top-0 before:right-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:bg-white/5 dark:before:bg-white/10">
            <div className="grid gap-6 rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-gray-950/10 sm:rounded-4xl sm:p-10 dark:bg-transparent dark:outline-white/10">
              <div className="grid gap-4">
                <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty text-gray-600 uppercase dark:text-gray-300">
                  The essentials
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
                    Get the Essentials
                  </LinkButton>
                </div>
                <p className="text-sm/7 dark:text-gray-300">
                  Perfect if you’re just getting started with Tailwind CSS.{" "}
                </p>
              </div>
              <div className="h-px w-full bg-gray-950/5" />
              <PricingFeatures
                items={[
                  {
                    name: "The first 10 lessons",
                    description:
                      "includes all of “Patterns and Practices” as well as the first three “By Example” lessons.",
                  },
                  {
                    name: "Source code",
                    description:
                      "get the completed source code for the lessons included in the package, to use however you want.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        {/* Complete */}
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
              <p className="text-sm/7 text-gray-300">
                Get the whole course, as well as source code and design files for everything.
              </p>
            </div>
            <div className="h-px w-full bg-white/10" />
            <PricingFeatures
              dark
              items={[
                {
                  name: "The entire course",
                  description: " includes all three sections with 19 video lessons, totalling ~7 hours of content.",
                },
                {
                  name: "Source code for every lesson",
                  description: "get the completed source code for every example, to use however you want.",
                },
                {
                  name: "Offline videos",
                  description: "download video files for every lesson, so you can watch them anytime, anywhere.",
                },
                {
                  name: "Figma design files",
                  description:
                    " grab the design files for every example, free for you to remix into your own projects.",
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
