"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import GridContainer from "../grid-container";
import { BentoItem } from "./bento";
import CategoryHeader from "./category-header";
import templatesCol1 from "./templates-col-1.png";
import templatesCol2 from "./templates-col-2.png";
import templatesCol3 from "./templates-col-3.png";
import uiKitCol1 from "./ui-kit-col-1.png";
import uiKitCol1Dark from "./ui-kit-col-1-dark.png";
import uiKitCol2 from "./ui-kit-col-2.png";
import uiKitCol2Dark from "./ui-kit-col-2-dark.png";
import uiKitCol3 from "./ui-kit-col-3.png";
import uiKitCol3Dark from "./ui-kit-col-3-dark.png";
import uiBlocksCol1Row1 from "./ui-blocks-col-1-row-1.png";
import uiBlocksCol1Row1Dark from "./ui-blocks-col-1-row-1-dark.png";
import uiBlocksCol1Row2 from "./ui-blocks-col-1-row-2.png";
import uiBlocksCol1Row2Dark from "./ui-blocks-col-1-row-2-dark.png";
import uiBlocksCol1Row3 from "./ui-blocks-col-1-row-3.png";
import uiBlocksCol1Row3Dark from "./ui-blocks-col-1-row-3-dark.png";
import uiBlocksCol1Row4 from "./ui-blocks-col-1-row-4.png";
import uiBlocksCol1Row4Dark from "./ui-blocks-col-1-row-4-dark.png";
import uiBlocksCol2Row1 from "./ui-blocks-col-2-row-1.png";
import uiBlocksCol2Row1Dark from "./ui-blocks-col-2-row-1-dark.png";
import uiBlocksCol2Row2 from "./ui-blocks-col-2-row-2.png";
import uiBlocksCol2Row2Dark from "./ui-blocks-col-2-row-2-dark.png";
import uiBlocksCol2Row3 from "./ui-blocks-col-2-row-3.png";
import uiBlocksCol2Row3Dark from "./ui-blocks-col-2-row-3-dark.png";
import uiBlocksCol2Row4 from "./ui-blocks-col-2-row-4.png";
import uiBlocksCol2Row4Dark from "./ui-blocks-col-2-row-4-dark.png";
import uiBlocksCol2Row5 from "./ui-blocks-col-2-row-5.png";
import uiBlocksCol2Row5Dark from "./ui-blocks-col-2-row-5-dark.png";
import uiBlocksCol2Row6 from "./ui-blocks-col-2-row-6.png";
import uiBlocksCol2Row6Dark from "./ui-blocks-col-2-row-6-dark.png";
import uiBlocksCol3Row1 from "./ui-blocks-col-3-row-1.png";
import uiBlocksCol3Row1Dark from "./ui-blocks-col-3-row-1-dark.png";
import uiBlocksCol3Row2 from "./ui-blocks-col-3-row-2.png";
import uiBlocksCol3Row2Dark from "./ui-blocks-col-3-row-2-dark.png";
import uiBlocksCol3Row3 from "./ui-blocks-col-3-row-3.png";
import uiBlocksCol3Row3Dark from "./ui-blocks-col-3-row-3-dark.png";
import uiBlocksCol3Row4 from "./ui-blocks-col-3-row-4.png";
import uiBlocksCol3Row4Dark from "./ui-blocks-col-3-row-4-dark.png";
import uiBlocksCol3Row5 from "./ui-blocks-col-3-row-5.png";
import uiBlocksCol3Row5Dark from "./ui-blocks-col-3-row-5-dark.png";
import uiBlocksCol3Row6 from "./ui-blocks-col-3-row-6.png";
import uiBlocksCol3Row6Dark from "./ui-blocks-col-3-row-6-dark.png";
import uiBlocksCol3Row7 from "./ui-blocks-col-3-row-7.png";
import uiBlocksCol3Row7Dark from "./ui-blocks-col-3-row-7-dark.png";
import uiBlocksCol4Row1 from "./ui-blocks-col-4-row-1.png";
import uiBlocksCol4Row1Dark from "./ui-blocks-col-4-row-1-dark.png";
import uiBlocksCol4Row2 from "./ui-blocks-col-4-row-2.png";
import uiBlocksCol4Row2Dark from "./ui-blocks-col-4-row-2-dark.png";
import uiBlocksCol4Row3 from "./ui-blocks-col-4-row-3.png";
import uiBlocksCol4Row3Dark from "./ui-blocks-col-4-row-3-dark.png";

export default function TailwindUiSection() {
  return (
    <div className="relative max-w-full">
      <div
        aria-hidden="true"
        className="hidden h-4 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 2xl:visible 2xl:flex dark:text-white/25"
      >
        text-4xl <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span> tracking-tighter text-balance
      </div>

      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <CategoryHeader className="text-pink-600 dark:text-pink-500">Ready-made Components</CategoryHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="px-2 text-[2.5rem]/10 font-medium tracking-tighter max-sm:px-4 2xl:mt-0">
          Move even faster with Tailwind Plus.
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25"
      >
        text-base <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span>
      </div>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          Tailwind Plus is a collection of beautiful, fully responsive UI components, designed and developed by us, the
          creators of Tailwind CSS. It's got hundreds of ready-to-use examples to choose from, and is guaranteed to help
          you find the perfect starting point for what you want to build.
        </p>
      </GridContainer>

      <GridContainer className="mt-10">
        <div className="px-2 max-sm:px-4">
          <a
            href="https://tailwindcss.com/plus?ref=home"
            className="inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Explore Tailwind Plus
          </a>
        </div>
      </GridContainer>
      <TabGroup>
        <GridContainer className="mt-16">
          <div className="mt-16 grid w-full overflow-x-hidden">
            <TabList className="grid grid-cols-[repeat(3,_minmax(125px,_1fr))] divide-x divide-gray-950/10 overflow-x-auto text-gray-950 dark:divide-white/10 dark:text-white">
              <TabButton className="data-selected:bg-pink-500/5 data-selected:text-pink-600 dark:data-selected:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="74"
                  fill="none"
                  viewBox="0 0 120 72"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-data-selected:translate-y-0"
                >
                  <path
                    shapeRendering="geometricPrecision"
                    className="fill-white dark:fill-gray-950"
                    d="M56.066 6 8.435 33.5C7.478 34.053 7 34.776 7 35.5v3c0 .724.478 1.448 1.435 2L56.066 68c1.913 1.105 5.015 1.105 6.929 0l47.631-27.5c.957-.552 1.435-1.276 1.435-2v-3c0-.724-.479-1.447-1.435-2L62.995 6c-1.914-1.104-5.015-1.104-6.929 0"
                  />
                  <path
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    d="M112.09 35.496c-.001-.723-.479-1.447-1.435-2l-47.632-27.5c-1.913-1.104-5.015-1.104-6.928 0l-47.631 27.5c-.957.553-1.435 1.277-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2v-3"
                  />
                  <path
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeOpacity="0.3"
                    d="M11.062 35.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.253-.276 1.732 0l30.31 17.5c.479.277.479.724 0 1l-47.63 27.5c-.479.276-1.255.276-1.733 0zM45.703 55.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1l-47.631 27.5c-.478.276-1.254.276-1.732 0z"
                  />
                  <circle
                    shapeRendering="geometricPrecision"
                    cx="1.5"
                    cy="1.5"
                    r="1.5"
                    fill="currentColor"
                    transform="matrix(.86603 -.5 .86603 .5 16.258 35.496)"
                  />
                  <path
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    d="m22.32 33.496 3.464-2M56.961 13.496l3.465-2M49.168 17.996l4.33-2.5M42.24 21.996l3.463-2"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeOpacity="0.3"
                    d="m41.373 38.496 23.383-13.5"
                  />
                  <path
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    d="m53.498 55.496 6.928-4M69.086 46.496l6.928-4M84.674 37.496l6.929-4"
                  />
                  <path
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeOpacity="0.3"
                    d="m56.096 56.996 9.526-5.5M71.684 47.996l9.526-5.5M87.273 38.996l9.526-5.5M58.693 58.496l8.66-5M74.282 49.496l8.66-5M89.87 40.496l8.66-5M46.57 38.496l18.186-10.5"
                  />
                  <rect
                    shapeRendering="geometricPrecision"
                    width="28"
                    height="2"
                    fill="currentColor"
                    rx="0.5"
                    transform="matrix(.86603 -.5 .86603 .5 33.579 34.496)"
                  />
                  <rect
                    shapeRendering="geometricPrecision"
                    width="32"
                    height="2"
                    fill="currentColor"
                    rx="0.5"
                    transform="matrix(.86603 -.5 .86603 .5 35.311 37.496)"
                  />
                  <rect
                    shapeRendering="geometricPrecision"
                    width="10"
                    height="3"
                    fill="currentColor"
                    rx="1.5"
                    transform="matrix(.86603 -.5 .86603 .5 48.301 39.996)"
                  />
                  <rect
                    shapeRendering="geometricPrecision"
                    width="10"
                    height="3"
                    fill="currentColor"
                    fillOpacity="0.3"
                    rx="1.5"
                    transform="matrix(.86603 -.5 .86603 .5 58.693 33.996)"
                  />
                </svg>
                <div className="text-center xl:text-left">
                  <p className="font-mono text-sm font-semibold tracking-widest uppercase">Templates</p>
                  <p className="mt-2 hidden text-sm text-gray-600 lg:block dark:text-gray-400">
                    Visually-stunning, easy to customize site templates built with React and Next.js.
                  </p>
                </div>
              </TabButton>
              <TabButton className="data-selected:bg-indigo-500/5 data-selected:text-indigo-600 dark:data-selected:text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="74" fill="none" viewBox="0 0 120 72">
                  <path
                    className="fill-white dark:fill-gray-950"
                    d="M56.095 7 8.464 34.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 69c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0"
                  />
                  <path
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    d="M112.09 36.5c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0L8.464 34.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 66c-1.913 1.105-5.015 1.105-6.928 0L8.464 38.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 69c-1.913 1.105-5.015 1.105-6.928 0L8.464 41.5c-.957-.552-1.435-1.276-1.435-2v-3"
                  />

                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M11.062 37c-.478-.276-.478-.724 0-1L58.694 8.5c.478-.276 1.253-.276 1.732 0l2.598 1.5c.478.276.478.724 0 1L15.392 38.5c-.478.276-1.253.276-1.732 0z"
                    opacity="0.1"
                  />
                  <g fill="currentColor" stroke="currentColor" opacity="0.1">
                    <path d="M19.723 42c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 25c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z" />
                    <path d="M34.445 31.5c-.479-.276-.479-.724 0-1L49.167 22c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 45c-.478.276-1.253.276-1.732 0z" />
                  </g>
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M45.703 57c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 64.5c-.478.276-1.254.276-1.732 0z"
                    opacity="0.1"
                  />
                  <g className="transition-transform duration-300 group-hover:-translate-y-0.5 group-data-selected:translate-y-0">
                    <path
                      className="fill-white dark:fill-gray-950"
                      stroke="currentColor"
                      d="M11.062 32c-.478-.276-.478-.724 0-1L58.694 3.5c.478-.276 1.253-.276 1.732 0L63.024 5c.478.276.478.724 0 1L15.392 33.5c-.478.276-1.253.276-1.732 0z"
                    />
                    <path
                      className="fill-white dark:fill-gray-950"
                      stroke="currentColor"
                      d="M19.723 37c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 20c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"
                    />
                    <path
                      stroke="currentColor"
                      strokeOpacity="0.3"
                      d="M37.909 44.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1l-9.526 5.5c-.478.276-1.254.276-1.732 0z"
                    />
                    <path
                      className="fill-white dark:fill-gray-950"
                      stroke="currentColor"
                      d="M34.445 26.5c-.479-.276-.479-.724 0-1L49.167 17c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 40c-.478.276-1.253.276-1.732 0z"
                    />
                    <path
                      stroke="currentColor"
                      strokeOpacity="0.3"
                      d="M56.096 36c-.479-.276-.479-.724 0-1l9.526-5.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L59.56 37c-.479.276-1.254.276-1.732 0zM70.818 25.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.733 0l1.732 1c.478.276.478.724 0 1l-9.527 5.5c-.478.276-1.254.276-1.732 0z"
                    />
                    <path
                      className="fill-white dark:fill-gray-950"
                      stroke="currentColor"
                      d="M45.703 52c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 59.5c-.478.276-1.254.276-1.732 0z"
                    />
                    <path
                      stroke="currentColor"
                      strokeOpacity="0.3"
                      d="M93.335 34.5c-.478-.276-.478-.724 0-1l6.062-3.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1l-6.062 3.5c-.478.276-1.254.276-1.732 0zM77.746 43.5c-.478-.276-.478-.724 0-1L89.004 36c.478-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1L81.21 44.5c-.478.276-1.254.276-1.732 0z"
                    />
                  </g>
                </svg>
                <div className="text-center xl:text-left">
                  <p className="font-mono text-sm font-semibold tracking-widest uppercase">UI Blocks</p>
                  <p className="mt-2 hidden text-sm text-gray-600 lg:block dark:text-gray-400">
                    Over 500+ professionally designed, fully responsive, expertly crafted components.
                  </p>
                </div>
              </TabButton>
              <TabButton className="data-selected:bg-sky-500/5 data-selected:text-sky-600 dark:data-selected:text-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="74" fill="none" viewBox="0 0 120 72">
                  <path
                    className="fill-white dark:fill-gray-950"
                    d="M56.095 6 8.464 33.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 68c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0"
                  />
                  <g stroke="currentColor" opacity="0.1">
                    <path
                      fill="currentColor"
                      d="M60.425 52.5c-.478-.276-.478-.724 0-1L87.272 36c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 53.5c-.478.276-1.253.276-1.732 0zM54.363 49c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
                    />
                    <path strokeLinecap="round" d="m63.89 43.5 12.124-7" />
                    <path
                      fill="currentColor"
                      d="M46.57 44.5c-.48-.276-.48-.724 0-1L73.415 28c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 45.5c-.478.276-1.254.276-1.732 0z"
                    />
                    <path strokeLinecap="round" d="m43.105 42.5 10.392-6" />
                    <path
                      fill="currentColor"
                      d="M37.043 39c-.478-.276-.478-.724 0-1L63.89 22.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 40c-.478.276-1.254.276-1.732 0z"
                    />
                    <path strokeLinecap="round" d="m33.579 37 10.392-6" />
                  </g>
                  <path
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    d="M112.09 35.5c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0L8.464 33.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 65c-1.913 1.105-5.015 1.105-6.928 0L8.464 37.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 68c-1.913 1.105-5.015 1.105-6.928 0L8.464 40.5c-.957-.552-1.435-1.276-1.435-2v-3"
                  />
                  <path
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    d="M17.99 40c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0L108.057 35c.478.276.478.724 0 1L60.426 63.5c-.479.276-1.254.276-1.732 0z"
                  />
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M11.062 36c-.478-.276-.478-.724 0-1L58.694 7.5c.478-.276 1.253-.276 1.732 0L63.024 9c.478.276.478.724 0 1L15.392 37.5c-.478.276-1.253.276-1.732 0z"
                    opacity="0.1"
                  />
                  <g className="transition-transform duration-300 group-hover:-translate-y-0.5 group-data-selected:translate-y-0">
                    <path
                      className="fill-current"
                      fillOpacity={0.3}
                      stroke="currentColor"
                      d="M60.425 47.5c-.478-.276-.478-.724 0-1L87.272 31c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 48.5c-.478.276-1.253.276-1.732 0zM54.363 44c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
                    />
                    <circle
                      cx="2"
                      cy="2"
                      r="2"
                      className="fill-white dark:fill-gray-950"
                      stroke="currentColor"
                      transform="matrix(.86603 -.5 .86603 .5 56.095 41)"
                    />
                    <path stroke="currentColor" strokeLinecap="round" d="m63.89 38.5 12.124-7" />
                    <path
                      className="fill-white dark:fill-gray-950"
                      stroke="currentColor"
                      d="M46.57 39.5c-.48-.276-.48-.724 0-1L73.415 23c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 40.5c-.478.276-1.254.276-1.732 0z"
                    />
                    <path stroke="currentColor" strokeLinecap="round" d="m43.105 37.5 10.392-6" />
                    <path
                      className="fill-white dark:fill-gray-950"
                      stroke="currentColor"
                      d="M37.043 34c-.478-.276-.478-.724 0-1L63.89 17.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 35c-.478.276-1.254.276-1.732 0z"
                    />
                    <path stroke="currentColor" strokeLinecap="round" d="m33.579 32 10.392-6" />
                    <path
                      className="fill-white dark:fill-gray-950"
                      stroke="currentColor"
                      d="M11.062 31c-.478-.276-.478-.724 0-1L58.694 2.5c.478-.276 1.253-.276 1.732 0L63.024 4c.478.276.478.724 0 1L15.392 32.5c-.478.276-1.253.276-1.732 0z"
                    />
                  </g>
                </svg>
                <div className="text-center xl:text-left">
                  <p className="font-mono text-sm font-semibold tracking-widest uppercase">UI Kit</p>
                  <p className="mt-2 hidden text-sm text-gray-600 lg:block dark:text-gray-400">
                    A starter kit for building your own component systems with React and Tailwind CSS.
                  </p>
                </div>
              </TabButton>
            </TabList>
          </div>
        </GridContainer>

        <GridContainer className="mt-4">
          <TabPanels>
            <TabPanel className="bg-gray-950/5 p-2 dark:bg-white/10 dark:opacity-40">
              <BentoItem className="relative isolate h-148 w-full overflow-hidden bg-white/75! p-0! dark:bg-gray-950! dark:ring dark:ring-white/10">
                <div className="absolute -left-[300%] h-150 w-380 min-[500px]:-left-[250%] sm:-left-[200%] md:-left-[150%] lg:-left-[100%] xl:-left-[80%] 2xl:-left-[65%]">
                  <div className="grid origin-top-left scale-120 rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-3 transform-3d">
                    <motion.img
                      initial={{ y: 700 }}
                      viewport={{ once: true }}
                      whileInView={{ y: 150, transition: { duration: 120 } }}
                      src={templatesCol1.src}
                      width={450}
                      height={2156}
                      alt=""
                    />
                    <motion.img
                      initial={{ y: 50 }}
                      viewport={{ once: true }}
                      whileInView={{ y: 600, transition: { duration: 120 } }}
                      src={templatesCol2.src}
                      width={450}
                      height={2307}
                      alt=""
                    />
                    <motion.img
                      initial={{ y: 800 }}
                      viewport={{ once: true }}
                      whileInView={{ y: 250, transition: { duration: 120 } }}
                      src={templatesCol3.src}
                      width={450}
                      height={1843.5}
                      alt=""
                    />
                  </div>
                </div>
              </BentoItem>
            </TabPanel>

            <TabPanel className="bg-gray-950/5 p-2 dark:bg-white/5">
              <BentoItem className="relative isolate h-148 w-full overflow-hidden bg-white/75! p-0! dark:bg-gray-950!">
                <div className="size-430 shrink-0 scale-50 sm:scale-75 lg:scale-100 dark:bg-white/5">
                  <div className="relative top-(--top,0) right-(--right,54%) grid size-full origin-top-left rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-4 gap-8 transform-3d">
                    <motion.div
                      className="flex flex-col gap-8"
                      initial={{ translateY: 1000 }}
                      viewport={{ once: true }}
                      whileInView={{ translateY: 750, transition: { duration: 40 } }}
                    >
                      <img
                        src={uiBlocksCol1Row1.src}
                        className="aspect-970/580 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={580}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol1Row1Dark.src}
                        className="aspect-970/580 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={580}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol1Row2.src}
                        className="aspect-971/582 ring ring-gray-950/5 dark:hidden"
                        width={971}
                        height={582}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol1Row2Dark.src}
                        className="aspect-971/582 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={971}
                        height={582}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol1Row3.src}
                        className="aspect-971/820 ring ring-gray-950/5 dark:hidden"
                        width={971}
                        height={820}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol1Row3Dark.src}
                        className="aspect-971/820 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={971}
                        height={820}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol1Row4.src}
                        className="aspect-970/508 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={508}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol1Row4Dark.src}
                        className="aspect-970/508 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={508}
                        alt=""
                      />
                    </motion.div>
                    <motion.div
                      className="flex flex-col gap-8"
                      initial={{ translateY: 500 }}
                      viewport={{ once: true }}
                      whileInView={{ translateY: 750, transition: { duration: 40 } }}
                    >
                      <img
                        src={uiBlocksCol2Row1.src}
                        className="aspect-970/436 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={436}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row1Dark.src}
                        className="aspect-970/436 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={436}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row2.src}
                        className="aspect-970/700 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={700}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row2Dark.src}
                        className="aspect-970/700 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={700}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row3.src}
                        className="aspect-971/879 ring ring-gray-950/5 dark:hidden"
                        width={971}
                        height={879}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row3Dark.src}
                        className="aspect-971/879 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={971}
                        height={879}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row4.src}
                        className="aspect-970/557 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={557}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row4Dark.src}
                        className="aspect-970/557 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={557}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row5.src}
                        className="aspect-970/763 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={763}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row5Dark.src}
                        className="aspect-970/763 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={763}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row6.src}
                        className="aspect-970/922 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={922}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol2Row6Dark.src}
                        className="aspect-970/922 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={922}
                        alt=""
                      />
                    </motion.div>
                    <motion.div
                      className="flex flex-col gap-8"
                      initial={{ translateY: 1000 }}
                      viewport={{ once: true }}
                      whileInView={{ translateY: 750, transition: { duration: 40 } }}
                    >
                      <img
                        src={uiBlocksCol3Row1.src}
                        className="aspect-970/580 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={580}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row1Dark.src}
                        className="aspect-970/580 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={580}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row2.src}
                        className="aspect-971/395 ring ring-gray-950/5 dark:hidden"
                        width={971}
                        height={395}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row2Dark.src}
                        className="aspect-971/395 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={971}
                        height={395}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row3.src}
                        className="aspect-971/349 ring ring-gray-950/5 dark:hidden"
                        width={971}
                        height={349}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row3Dark.src}
                        className="aspect-971/349 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={971}
                        height={349}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row4.src}
                        className="aspect-970/975 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={975}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row4Dark.src}
                        className="aspect-970/975 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={975}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row5.src}
                        className="aspect-970/381 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={381}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row5Dark.src}
                        className="aspect-970/381 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={381}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row6.src}
                        className="aspect-970/782 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={782}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row6Dark.src}
                        className="aspect-970/782 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={782}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row7.src}
                        className="aspect-970/426 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={426}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol3Row7Dark.src}
                        className="aspect-970/426 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={426}
                        alt=""
                      />
                    </motion.div>
                    <motion.div
                      className="flex flex-col gap-8"
                      initial={{ translateY: 1150 }}
                      viewport={{ once: true }}
                      whileInView={{ translateY: 1400, transition: { duration: 40 } }}
                    >
                      <img
                        src={uiBlocksCol4Row1.src}
                        className="aspect-970/600 ring ring-gray-950/5 dark:hidden"
                        width={970}
                        height={600}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol4Row1Dark.src}
                        className="aspect-970/600 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={970}
                        height={600}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol4Row2.src}
                        className="aspect-972/854 ring ring-gray-950/5 dark:hidden"
                        width={972}
                        height={854}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol4Row2Dark.src}
                        className="aspect-972/854 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={972}
                        height={854}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol4Row3.src}
                        className="aspect-971/725 ring ring-gray-950/5 dark:hidden"
                        width={971}
                        height={725}
                        alt=""
                      />
                      <img
                        src={uiBlocksCol4Row3Dark.src}
                        className="aspect-971/725 ring ring-gray-950/5 dark:ring-white/10 not-dark:hidden"
                        width={971}
                        height={725}
                        alt=""
                      />
                    </motion.div>
                  </div>
                </div>
              </BentoItem>
            </TabPanel>

            <TabPanel className="bg-gray-950/5 p-2 dark:bg-white/5">
              <BentoItem className="relative isolate h-148 w-full overflow-hidden bg-white/75! p-0! dark:bg-gray-950!">
                <div className="absolute -left-[300%] h-150 w-380 min-[500px]:-left-[250%] sm:-left-[200%] md:-left-[150%] lg:-left-[100%] xl:-left-[80%] 2xl:-left-[65%]">
                  <div className="flex origin-top-left scale-100 rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-3 flex-row gap-4 transform-3d dark:bg-white/5">
                    <motion.img
                      initial={{ y: 700 }}
                      viewport={{ once: true }}
                      whileInView={{ y: 350, transition: { duration: 120 } }}
                      src={uiKitCol1.src}
                      className="ring ring-gray-950/5 dark:hidden"
                      width={399}
                      height={2019.5}
                      alt=""
                    />
                    <motion.img
                      initial={{ y: 700 }}
                      viewport={{ once: true }}
                      whileInView={{ y: 350, transition: { duration: 120 } }}
                      src={uiKitCol1Dark.src}
                      className="ring ring-white/10 not-dark:hidden"
                      width={399}
                      height={2019.5}
                      alt=""
                    />
                    <motion.img
                      initial={{ y: 500 }}
                      viewport={{ once: true }}
                      whileInView={{ y: 850, transition: { duration: 120 } }}
                      src={uiKitCol2.src}
                      className="ring ring-gray-950/5 dark:hidden"
                      width={822}
                      height={2019.5}
                      alt=""
                    />
                    <motion.img
                      initial={{ y: 500 }}
                      viewport={{ once: true }}
                      whileInView={{ y: 850, transition: { duration: 120 } }}
                      src={uiKitCol2Dark.src}
                      className="ring ring-white/10 not-dark:hidden"
                      width={822}
                      height={2019.5}
                      alt=""
                    />
                    <motion.img
                      initial={{ y: 800 }}
                      viewport={{ once: true }}
                      whileInView={{ y: 450, transition: { duration: 120 } }}
                      src={uiKitCol3.src}
                      className="ring ring-gray-950/5 dark:hidden"
                      width={504}
                      height={1378.5}
                      alt=""
                    />
                    <motion.img
                      initial={{ y: 800 }}
                      viewport={{ once: true }}
                      whileInView={{ y: 450, transition: { duration: 120 } }}
                      src={uiKitCol3Dark.src}
                      className="ring ring-white/10 not-dark:hidden"
                      width={504}
                      height={1378.5}
                      alt=""
                    />
                  </div>
                </div>
              </BentoItem>
            </TabPanel>
          </TabPanels>
        </GridContainer>
      </TabGroup>
    </div>
  );
}

export function TabButton(
  props: React.ComponentProps<typeof Tab> & {
    children: React.ReactNode;
    className?: string;
  },
) {
  return (
    <Tab
      className={clsx(
        "group flex items-center gap-4 p-4 text-sm/7 focus:outline-none max-lg:flex-col sm:p-6 lg:grid lg:grid-cols-[auto_1fr]",
        props.className,
      )}
      // {...props}
    >
      {props.children}
    </Tab>
  );
}
