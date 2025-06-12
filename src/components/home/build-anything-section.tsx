import Image from "next/image";
import React from "react";
import GridContainer from "../grid-container";
import { BentoItem } from "./bento";
import clerk from "./build-anything-section/clerk.png";
import feastables from "./build-anything-section/feastables.png";
import googleIo from "./build-anything-section/googleio.png";
import gumroad from "./build-anything-section/gumroad.png";
import midjourney from "./build-anything-section/midjourney.png";
import nasa from "./build-anything-section/nasa.png";
import opal from "./build-anything-section/opal.png";
import openai from "./build-anything-section/openai.png";
import poolside from "./build-anything-section/poolside.png";
import reddit from "./build-anything-section/reddit.png";
import rivian from "./build-anything-section/rivian.png";
import shopify from "./build-anything-section/shopify.png";
import skims from "./build-anything-section/skims.png";
import ted from "./build-anything-section/ted.png";
import verge from "./build-anything-section/verge.png";
import CategoryHeader from "./category-header";

export default function BuildAnythingSection() {
  return (
    <div className="relative max-w-full">
      <div
        aria-hidden="true"
        className="h-6 max-w-screen items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 2xl:flex dark:text-white/25"
      >
        text-4xl <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span> tracking-tighter
      </div>

      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <CategoryHeader className="text-fuchsia-500 dark:text-fuchsia-400">Tailwind in the wild</CategoryHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4">
          Build whatever you want, without touching your CSS file.
        </h2>
      </GridContainer>

      <div className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25">
        text-base <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span>
      </div>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          Because Tailwind is so low-level, it never encourages you to design the same site twice. Some of your favorite
          sites are built with Tailwind, and you probably had no idea.
        </p>
      </GridContainer>

      <GridContainer className="mt-18">
        <div className="h-auto bg-gray-950/5 p-2 dark:bg-white/10">
          <BentoItem className="flex h-full flex-row overflow-hidden p-0!">
            <div className="hidden flex-col gap-2 lg:flex">
              <a
                href="https://openai.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>openai.com</ExternalLinkLabel>
                <Image src={openai} alt="OpenAI" width={303} />
              </a>
              <a
                href="https://opalcamera.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>opalcamera.com</ExternalLinkLabel>
                <Image src={opal} alt="Opal" width={303} />
              </a>
              <a
                href="https://feastables.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>feastables.com</ExternalLinkLabel>
                <Image src={feastables} alt="Feastables" width={303} />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://gumroad.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>gumroad.com</ExternalLinkLabel>
                <Image src={gumroad} alt="Gumroad" width={200} />
              </a>
              <a
                href="https://skims.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>skims.com</ExternalLinkLabel>
                <Image src={skims} alt="Skims" width={200} />
              </a>
              <a
                href="https://reddit.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>reddit.com</ExternalLinkLabel>
                <Image src={reddit} alt="Reddit" width={200} />
              </a>
            </div>
            <div className="hidden flex-col gap-2 sm:flex">
              <a
                href="https://rivian.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>rivian.com</ExternalLinkLabel>
                <Image src={rivian} alt="Rivian" width={500} />
              </a>
              <a
                href="https://shopify.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>shopify.com</ExternalLinkLabel>
                <Image src={shopify} alt="Shopify" width={500} />
              </a>
              <a
                href="https://clerk.dev/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>clerk.dev</ExternalLinkLabel>
                <Image src={clerk} alt="Clerk" width={500} />
              </a>
            </div>
            <div className="hidden flex-col gap-2 xl:flex">
              <a
                href="https://www.theverge.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>theverge.com</ExternalLinkLabel>
                <Image src={verge} alt="The Verge" width={200} />
              </a>
              <a
                href="https://io.google/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>io.google</ExternalLinkLabel>
                <Image src={googleIo} alt="Google IO" width={200} />
              </a>
              <a
                href="https://ted.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>ted.com</ExternalLinkLabel>
                <Image src={ted} alt="TED Talks" width={200} />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://poolside.ai/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>poolside.ai</ExternalLinkLabel>
                <Image src={poolside} alt="Poolside" width={293} />
              </a>
              <a
                href="https://midjourney.com/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>midjourney.com</ExternalLinkLabel>
                <Image src={midjourney} alt="Midjourney" width={293} />
              </a>
              <a
                href="https://www.jpl.nasa.gov/"
                rel="noreferrer"
                target="_blank"
                className="group relative opacity-75 transition-opacity hover:opacity-100"
              >
                <ExternalLinkLabel>jpl.nasa.gov</ExternalLinkLabel>
                <Image src={nasa} alt="NASA/JPL" width={293} />
              </a>
            </div>
          </BentoItem>
        </div>
      </GridContainer>
    </div>
  );
}

function ExternalLinkLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform flex-row items-center gap-[calc(1rem/16*7)] rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-sm/6 font-medium text-white opacity-0 inset-ring inset-ring-white/10 transition-opacity group-hover:flex group-hover:opacity-100">
      {children}
      <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
        <path
          fillRule="evenodd"
          d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
