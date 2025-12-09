import colorValues from "@/docs/utils/colors";
import { StarIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { CSSProperties, Fragment, ReactNode } from "react";
import { css, HighlightedCode, html } from "../code-example";
import GridContainer from "../grid-container";
import { Resizable, ResizableHandle, ResizablePanel } from "../resizable";
import { Autoscroll } from "./autoscroll";
import { BentoBody, BentoDescription, BentoHeader, BentoIcon, BentoItem, BentoTitle } from "./bento";
import CategoryHeader from "./category-header";
import { Editor } from "./editor";
import { _3DTransformsIcon } from "./icons/3d-transforms-icon";
import { CascadeLayersIcon } from "./icons/cascade-layers-icon";
import { ContainerQueriesIcon } from "./icons/container-queries-icon";
import { CssGridIcon } from "./icons/css-grid-icon";
import { CssVariablesIcon } from "./icons/css-variables-icon";
import { DarkModeIcon } from "./icons/dark-mode-icon";
import { FiltersIcon } from "./icons/filters-icon";
import { GradientsIcon } from "./icons/gradients-icon";
import { LogicalPropertiesIcon } from "./icons/logical-properties-icon";
import { P3ColorsIcon } from "./icons/p3-colors-icon";
import { ResponsiveDesignIcon } from "./icons/responsive-design-icon";
import { TransitionsAndAnimationsIcon } from "./icons/transitions-and-animations-icon";
import { Transforms3d } from "./transforms-3d";
import { TransitionsSection } from "./transitions-section";
import avatar1 from "./why-tailwind-css-section/avatar-1.png";
import avatar2 from "./why-tailwind-css-section/avatar-2.png";
import avatar3 from "./why-tailwind-css-section/avatar-3.png";
import avatar4 from "./why-tailwind-css-section/avatar-4.png";
import avatar5 from "./why-tailwind-css-section/avatar-5.png";
import avatar6 from "./why-tailwind-css-section/avatar-6.png";
import avatar7 from "./why-tailwind-css-section/avatar-7.png";
import cssGrid1Mobile from "./why-tailwind-css-section/css-grid-1.mobile.png";
import cssGrid1 from "./why-tailwind-css-section/css-grid-1.png";
import cssGrid2 from "./why-tailwind-css-section/css-grid-2.png";
import cssGrid3 from "./why-tailwind-css-section/css-grid-3.png";
import cssGrid4 from "./why-tailwind-css-section/css-grid-4.png";
import { DarkMode } from "./why-tailwind-css-section/dark-mode";
import filtersImg from "./why-tailwind-css-section/filters.png";
import responsive1 from "./why-tailwind-css-section/responsive-1.png";
import responsive2 from "./why-tailwind-css-section/responsive-2.png";
import responsive3 from "./why-tailwind-css-section/responsive-3.png";
import responsive4 from "./why-tailwind-css-section/responsive-4.png";
import responsive5 from "./why-tailwind-css-section/responsive-5.png";
import { SharedTooltip, TooltipTrigger } from "../tooltip";

export default function WhyTailwindCssSection() {
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
        <CategoryHeader className="text-pink-500 dark:text-pink-400">Why Tailwind CSS?</CategoryHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Built for the modern web.
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
          Tailwind is unapologetically modern, and takes advantage of all the latest and greatest CSS features to make
          the developer experience as enjoyable as possible.
        </p>
      </GridContainer>

      <GridContainer className="mt-16">
        <div className="grid w-full grid-flow-dense grid-cols-30 gap-2 bg-gray-950/5 p-2 dark:bg-white/10">
          <BentoItem className="col-span-full">
            <BentoHeader>
              <BentoIcon>
                <ResponsiveDesignIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Responsive design</BentoTitle>
                <BentoDescription>
                  Okay, it’s not exactly cutting edge, but just throw a screen size in front of literally any utility to
                  apply it at a specific breakpoint.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="group flex flex-col gap-2">
                <div className="flex justify-start not-sm:hidden">
                  <div className="flex w-10 shrink-0 grow-0 gap-2">
                    <div className="h-8 w-px shrink-0 bg-gray-950/20 dark:bg-white/30"></div>
                    <span className="text-gray-950 dark:text-white">
                      <Code>Mobile</Code>
                    </span>
                  </div>
                  <div className="ml-150 flex w-32 shrink-0 grow-0 gap-2">
                    <div className="h-8 w-px shrink-0 bg-gray-950/20 not-group-has-data-sm:bg-gray-950/5 dark:bg-white/30 dark:not-group-has-data-sm:bg-white/10"></div>
                    <span className="not-group-has-data-sm:opacity-40">
                      <Code>sm</Code>
                    </span>
                  </div>
                  <div className="flex w-64 shrink-0 grow-0 gap-2">
                    <div className="h-8 w-px shrink-0 bg-gray-950/20 not-group-has-data-md:bg-gray-950/5 dark:bg-white/30 dark:not-group-has-data-md:bg-white/10"></div>
                    <span className="not-group-has-data-md:opacity-40">
                      <Code>md</Code>
                    </span>
                  </div>
                  <div className="flex w-64 shrink-0 grow-0 gap-2">
                    <div className="h-8 w-px shrink-0 bg-gray-950/20 not-group-has-data-lg:bg-gray-950/5 dark:bg-white/30 dark:not-group-has-data-lg:bg-white/10"></div>
                    <span className="not-group-has-data-lg:opacity-40">
                      <Code>lg</Code>
                    </span>
                  </div>
                  <div className="flex w-64 shrink-0 grow-0 gap-2">
                    <div className="h-8 w-px shrink-0 bg-gray-950/20 not-group-has-data-xl:bg-gray-950/5 dark:bg-white/30 dark:not-group-has-data-xl:bg-white/10"></div>
                    <span className="not-group-has-data-xl:opacity-40">
                      <Code>xl</Code>
                    </span>
                  </div>
                </div>
                <Resizable>
                  <ResizablePanel className="@container max-sm:mr-0!">
                    <div className="relative grid gap-10 rounded-t-2xl bg-white p-6 pb-10 ring ring-gray-950/5 @min-[theme(--breakpoint-lg)]:grid-cols-2 @min-[theme(--breakpoint-lg)]:px-20 @min-[theme(--breakpoint-lg)]:py-8 @min-[theme(--breakpoint-lg)]:pb-10 dark:bg-gray-950 dark:ring-white/10">
                      <div className="flex flex-1 flex-col">
                        <div className="relative mb-4 overflow-hidden rounded-lg @max-[theme(--breakpoint-xl)]:-mx-4 @max-[theme(--breakpoint-xl)]:-mt-4 @min-[theme(--breakpoint-lg)]:hidden">
                          <div className="grid grid-cols-1 gap-2 @min-[theme(--breakpoint-sm)]:grid-cols-4">
                            <img
                              alt=""
                              src={responsive1.src}
                              className="h-48 w-full rounded-lg bg-gray-950/5 object-cover @min-[theme(--breakpoint-sm)]:col-span-2 @min-[theme(--breakpoint-sm)]:h-40"
                            />

                            <img
                              alt=""
                              src={responsive2.src}
                              className="col-span-2 h-48 w-full rounded-lg bg-gray-950/5 object-cover @max-[theme(--breakpoint-sm)]:hidden @min-[theme(--breakpoint-md)]:col-span-1 @min-[theme(--breakpoint-sm)]:h-40"
                            />

                            <img
                              alt=""
                              src={responsive3.src}
                              className="h-48 w-full rounded-lg bg-gray-950/5 object-cover @max-[theme(--breakpoint-md)]:hidden @min-[theme(--breakpoint-sm)]:h-40"
                            />
                          </div>

                          <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-linear-to-b from-transparent via-transparent to-gray-950 p-6 @min-[theme(--breakpoint-sm)]:hidden">
                            <span className="text-sm/6 font-semibold text-white/80">Entire house</span>
                            <span className="text-xl/6 font-semibold text-white">Beach House on Lake Huron</span>
                          </div>
                        </div>

                        <span className="font-medium text-gray-500 @max-[theme(--breakpoint-sm)]:hidden dark:text-gray-500">
                          Entire house
                        </span>

                        <div className="grid grid-cols-1 gap-4 @min-[theme(--breakpoint-sm)]:grid-cols-[1fr_auto] @min-[theme(--breakpoint-xl)]:grid-cols-1">
                          <div>
                            <span className="mt-2 text-3xl font-semibold text-gray-950 @max-[theme(--breakpoint-sm)]:hidden dark:text-white">
                              Beach House on Lake Huron
                            </span>

                            <span className="mt-2 flex gap-2">
                              <span className="flex items-center gap-1 text-pink-600 dark:text-pink-500">
                                <StarIcon className="size-4" />
                                <span className="text-sm/6 font-medium">2.66</span>
                              </span>
                              <span className="text-sm/6 text-gray-500">(128 reviews)</span>
                              <span className="text-pink-300 dark:text-gray-600">&middot;</span>
                              <span className="text-sm/6 font-medium text-pink-600 dark:text-pink-500">
                                Bayfield, ON
                              </span>
                            </span>
                          </div>

                          <div className="@min-[theme(--breakpoint-lg)]:hidden">
                            <button
                              type="button"
                              className="w-full rounded-lg bg-pink-500 px-3 py-2 text-sm/6 font-bold text-white @min-[theme(--breakpoint-sm)]:w-auto"
                            >
                              Check availability
                            </button>
                          </div>
                        </div>

                        <div>
                          <p className="mt-4 line-clamp-2 text-sm/6 text-gray-600 @min-[theme(--breakpoint-xl)]:max-w-md dark:text-gray-400">
                            This sunny and spacious room is for those traveling light and looking for a comfy and cozy
                            place to lay their head for a night...{" "}
                            <span className="hidden font-bold text-pink-600 before:text-white sm:@max-[theme(--breakpoint-sm)]:inline-block dark:text-pink-500">
                              Show more
                            </span>
                          </p>

                          <span className="mt-3 inline-block shrink-0 text-sm/6 font-semibold text-pink-600 dark:text-pink-500">
                            Show more
                          </span>
                        </div>

                        <div className="mt-6 @max-[theme(--breakpoint-lg)]:hidden">
                          <button
                            type="button"
                            className="w-auto rounded-lg bg-pink-500 px-3 py-2 text-sm/6 font-bold text-white"
                          >
                            Check availability
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 grid-rows-2 gap-2 @max-[theme(--breakpoint-lg)]:hidden">
                        <img
                          alt=""
                          src={responsive1.src}
                          className="col-span-4 h-[150px] w-full rounded-lg bg-gray-950/5 object-cover @min-[theme(--breakpoint-xl)]:col-span-2 @min-[theme(--breakpoint-xl)]:row-span-2 @min-[theme(--breakpoint-xl)]:aspect-square @min-[theme(--breakpoint-xl)]:h-[308px]"
                        />
                        <img
                          alt=""
                          src={responsive2.src}
                          className="col-span-2 h-[150px] w-full rounded-lg bg-gray-950/5 @max-[theme(--breakpoint-xl)]:aspect-square @min-[theme(--breakpoint-xl)]:col-span-1"
                        />
                        <img
                          alt=""
                          src={responsive3.src}
                          className="col-span-2 h-[150px] w-full rounded-lg bg-gray-950/5 @max-[theme(--breakpoint-xl)]:aspect-square @min-[theme(--breakpoint-xl)]:col-span-1"
                        />
                        <div className="contents @max-[theme(--breakpoint-xl)]:hidden">
                          <img
                            alt=""
                            src={responsive4.src}
                            className="aspect-square size-[150px] rounded-lg bg-gray-950/5"
                          />
                          <img
                            alt=""
                            src={responsive5.src}
                            className="aspect-square size-[150px] rounded-lg bg-gray-950/5"
                          />
                        </div>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle
                    className={clsx(
                      "pointer-events-auto absolute top-[186px] -right-4 z-50 -mt-6 h-12 w-1.5 cursor-ew-resize rounded-full max-lg:hidden",
                      "bg-slate-950/20 group-data-dragging:bg-slate-950/40 hover:bg-slate-950/40",
                      "dark:bg-slate-500 dark:group-data-dragging:bg-slate-300 dark:hover:bg-slate-300",
                    )}
                  />
                </Resizable>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="col-span-full md:col-span-15">
            <BentoHeader>
              <BentoIcon>
                <FiltersIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Filters</BentoTitle>
                <BentoDescription>
                  What’s a website these days without a few backdrop blurs? Keep stacking filters until your designer
                  asks you to please, please stop.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112" padding={false}>
              <div className="@container relative flex size-full items-center justify-center">
                <Autoscroll className="no-scrollbar z-10 -my-1 flex snap-x snap-mandatory gap-(--gap) overflow-x-auto py-1 [--gap:--spacing(10)] [--size:--spacing(72)]">
                  <div className="flex snap-proximity snap-end">
                    <div className="w-[calc(50vi-(var(--size)/2)-(var(--gap)))]" />
                  </div>

                  {[
                    ["blur-sm", "backdrop-blur-sm"],
                    ["brightness-150", "backdrop-brightness-150"],
                    ["grayscale", "backdrop-grayscale"],
                    ["contrast-150", "backdrop-contrast-150"],
                    ["saturate-200", "backdrop-saturate-200"],
                    ["sepia", "backdrop-sepia"],
                  ].map(([name, className]) => {
                    return (
                      <div key={name} data-target className="flex snap-center snap-always flex-col items-center gap-2">
                        <Code>{name}</Code>
                        <div className="shadow ring inset-ring ring-gray-950/10 inset-ring-white/20">
                          <div className={clsx("size-(--size) bg-white/15", className)} />
                        </div>
                      </div>
                    );
                  })}

                  <div className="flex snap-proximity snap-end">
                    <div className="w-[calc(50vi-(var(--size)/2)-(var(--gap)))]" />
                  </div>
                </Autoscroll>

                <div className="absolute inset-0 mt-8 flex items-center justify-center">
                  <img alt="" src={filtersImg.src} className="size-64 inset-ring inset-ring-gray-950/10" />
                </div>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="col-span-full md:col-span-15">
            <BentoHeader>
              <BentoIcon>
                <DarkModeIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Dark mode</BentoTitle>
                <BentoDescription>
                  If you’re not a fan of burning your retinas, just stick{" "}
                  <code className="font-medium text-gray-950 dark:text-white">dark:</code> in front of any color to
                  apply it in dark mode.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <DarkMode />
            </BentoBody>
          </BentoItem>

          <BentoItem className="col-span-full md:col-span-15 xl:col-span-12">
            <BentoHeader>
              <BentoIcon>
                <CssVariablesIcon />
              </BentoIcon>
              <div>
                <BentoTitle>CSS variables</BentoTitle>
                <BentoDescription>
                  Customizing your theme is as simple as creating a few CSS variables.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mr-16 -mb-16">
                <Editor>
                  <HighlightedCode
                    example={css`
                      @theme {
                        --font-sans: "Inter", sans-serif;
                        --font-mono: "IBM Plex Mono", monospace;

                        --text-tiny: 0.625rem;
                        --text-tiny--line-height: 1.5rem;

                        --color-mint-100: oklch(0.97 0.15 145);
                        --color-mint-200: oklch(0.92 0.18 145);
                        --color-mint-300: oklch(0.85 0.22 145);
                        --color-mint-400: oklch(0.78 0.25 145);
                        --color-mint-500: oklch(0.7 0.28 145);
                        --color-mint-600: oklch(0.63 0.3 145);
                        --color-mint-700: oklch(0.56 0.32 145);
                        --color-mint-800: oklch(0.48 0.35 145);
                        --color-mint-900: oklch(0.4 0.37 145);
                        --color-mint-950: oklch(0.3 0.4 145);
                      }
                    `}
                  />
                </Editor>
              </div>
            </BentoBody>
          </BentoItem>

          <SharedTooltip
            id="color-tooltip"
            marginTop={56}
            offsetY={-4}
            padding={8}
            className="pointer-events-none absolute top-0 left-0 z-10 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/6 font-medium whitespace-nowrap text-white opacity-0 inset-ring inset-ring-white/10 will-change-[transform,opacity] data-show:opacity-100 data-show:transition-opacity data-show:delay-100 data-show:duration-200"
          />

          <BentoItem className="col-span-full xl:col-span-18">
            <BentoHeader>
              <BentoIcon>
                <P3ColorsIcon />
              </BentoIcon>
              <div>
                <BentoTitle>P3 colors</BentoTitle>
                <BentoDescription>
                  The color palette now uses more vibrant wide gamut colors without you needing to understand what any
                  of that even means.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              {(() => {
                let colors = [
                  "red",
                  "orange",
                  "amber",
                  "yellow",
                  "lime",
                  "green",
                  "emerald",
                  "teal",
                  "cyan",
                  "sky",
                  "blue",
                  "indigo",
                  "violet",
                  "purple",
                  "fuchsia",
                  "pink",
                  "rose",
                ];
                let shades = [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

                // New width and height depending on the angle:
                //
                // theta = angle in degrees as radians
                // W = w * |cos(theta)| + h * |sin(theta)|
                // H = w * |sin(theta)| + h * |cos(theta)|

                let angle = -45; // degrees
                let angleAsRadians = (angle * Math.PI) / 180;
                let sin = Math.abs(Math.sin(angleAsRadians));
                let cos = Math.abs(Math.cos(angleAsRadians));

                return (
                  <div className="mt-8 -mr-16 -mb-16 sm:mt-0">
                    <div
                      className="group grid grid-cols-[repeat(var(--columns),var(--width))] gap-1.5 [--height:--spacing(6)] [--width:--spacing(10)] sm:[--height:--spacing(10)] sm:[--width:--spacing(16)]"
                      style={
                        {
                          "--sin": sin,
                          "--cos": cos,
                          "--angle": `${angle}deg`,
                          "--columns": colors.length + 1,
                        } as CSSProperties
                      }
                    >
                      <div />
                      {colors.map((color) => {
                        return (
                          <div key={color}>
                            <div className="pointer-events-none h-[calc(var(--width)*var(--sin)+var(--height)*var(--cos))] w-[calc(var(--width)*var(--cos)+var(--height)*var(--sin))] translate-x-5 translate-y-2 sm:translate-x-8 sm:translate-y-5">
                              <div className="rotate-(--angle)">
                                <Code>{color}</Code>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {shades.map((shade, shadeIdx) => {
                        return (
                          <Fragment key={shade}>
                            <div className="relative">
                              <div className="absolute -mt-1 w-screen border-t border-gray-950/5 dark:border-white/10"></div>
                              <div className="flex h-(--height) w-(--width) items-center">
                                <Code>{shade}</Code>
                              </div>
                            </div>
                            {colors.map((color) => {
                              let value = colorValues[`${color}-${shade}`];
                              return (
                                <TooltipTrigger key={value} content={value} className="group relative">
                                  {shadeIdx === 0 && (
                                    <>
                                      <div className="pointer-events-none absolute -top-1 -left-1 h-screen border-l border-gray-950/5 dark:border-white/10"></div>
                                      <div className="pointer-events-none absolute -top-1 -left-1 h-16 origin-top-left translate-px rotate-225 border-l border-gray-950/5 sm:h-24 dark:border-white/10"></div>
                                    </>
                                  )}

                                  <div
                                    style={{ "--color": `var(--color-${color}-${shade})` } as CSSProperties}
                                    className="h-(--height) w-(--width) bg-(--color) inset-ring inset-ring-gray-950/10 transition-opacity group-hover:opacity-75 group-data-[tooltip-hover=true]:opacity-100 dark:inset-ring-white/10"
                                  />
                                </TooltipTrigger>
                              );
                            })}
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </BentoBody>
          </BentoItem>

          <BentoItem className="col-span-full xl:col-span-15">
            <BentoHeader>
              <BentoIcon>
                <CssGridIcon />
              </BentoIcon>
              <div>
                <BentoTitle>CSS grid layout</BentoTitle>
                <BentoDescription>
                  Using grid utilities directly in your HTML makes it so much easier to reason about complex layouts.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mr-16 -mb-8 [--size:--spacing(48)] lg:flex lg:justify-center xl:block">
                <div className="-mt-18 sm:-mt-26">
                  <div className="bg-white p-6 ring ring-gray-950/5 sm:p-16 dark:bg-gray-950 dark:ring-white/10">
                    <h3 className="text-base/6 font-semibold text-gray-950 dark:text-white">Browse properties</h3>
                    <div className="mt-6 grid grid-cols-[repeat(2,var(--size))] grid-rows-[repeat(3,var(--size))] gap-2 sm:grid-cols-[repeat(3,var(--size))] sm:grid-rows-[repeat(2,var(--size))]">
                      <div className="relative col-span-2 row-span-1 overflow-hidden rounded-t-2xl sm:col-span-1 sm:row-span-2 sm:rounded-none sm:rounded-l-2xl dark:outline dark:outline-white/10">
                        <img alt="" className="not-sm:hidden" src={cssGrid1.src} />
                        <img alt="" className="sm:hidden" src={cssGrid1Mobile.src} />
                        <div className="absolute inset-0 flex items-end bg-linear-to-b from-transparent via-transparent to-gray-950">
                          <span className="p-4 text-sm/5 font-semibold text-white">Treehouses</span>
                        </div>
                      </div>
                      <div className="relative dark:outline dark:outline-white/10">
                        <img alt="" src={cssGrid2.src} />
                        <div className="absolute inset-0 flex items-end bg-linear-to-b from-transparent via-transparent to-gray-950">
                          <span className="p-4 text-sm/5 font-semibold text-white">Mansions</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden sm:rounded-tr-2xl dark:outline dark:outline-white/10">
                        <img alt="" src={cssGrid3.src} />
                        <div className="absolute inset-0 flex items-end bg-linear-to-b from-transparent via-transparent to-gray-950">
                          <span className="p-4 text-sm/5 font-semibold text-white">Lakefront cottages</span>
                        </div>
                      </div>
                      <div className="relative col-span-2 overflow-hidden rounded-b-2xl sm:rounded-bl-none dark:outline dark:outline-white/10">
                        <img alt="" className="aspect-2/1" src={cssGrid4.src} />
                        <div className="absolute inset-0 flex items-end bg-linear-to-b from-transparent via-transparent to-gray-950">
                          <span className="p-4 text-sm/5 font-semibold text-white">Designer homes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="col-span-full xl:col-span-15">
            <BentoHeader>
              <BentoIcon>
                <TransitionsAndAnimationsIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Transitions and animations</BentoTitle>
                <BentoDescription>
                  Transitions that work the way you'd expect — throw a few utilities on an element and you're in
                  business.
                </BentoDescription>
              </div>
            </BentoHeader>
            <div className="grid h-112 gap-[inherit]">
              <BentoBody padding={false}>
                <TransitionsSection />
              </BentoBody>
            </div>
          </BentoItem>

          <BentoItem className="col-span-full md:col-span-15 xl:col-span-10">
            <BentoHeader>
              <BentoIcon>
                <CascadeLayersIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Cascade layers</BentoTitle>
                <BentoDescription>
                  Tailwind uses CSS layers so you don’t have to worry about specificity issues.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mr-16 -mb-16">
                <Editor>
                  <HighlightedCode
                    example={css`
                      @layer theme, base, components, utilities;

                      @layer theme {
                        :root {
                          /* Your theme variables */
                        }
                      }

                      @layer base {
                        /* Preflight styles */
                      }

                      @layer components {
                        /* Your custom components */
                      }

                      @layer utilities {
                        /* Your utility classes */
                      }
                    `}
                  />
                </Editor>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="col-span-full md:col-span-15 xl:col-span-10">
            <BentoHeader>
              <BentoIcon>
                <LogicalPropertiesIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Logical properties</BentoTitle>
                <BentoDescription>
                  Supporting multiple language text directions is no longer a nightmare.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody padding={false} className="h-112">
              <div className="flex px-8 pt-8">
                <div className="w-full -translate-x-4">
                  <Code>ltr</Code>
                </div>
                <div className="w-full translate-x-4 translate-y-20 text-right">
                  <Code>rtl</Code>
                </div>
              </div>
              <div className="@container relative isolate flex h-full items-center justify-center">
                <div className="absolute bottom-12 -left-2 z-1 w-[60cqw] shrink-0 divide-y divide-gray-950/5 rounded-xl bg-white shadow-2xl inset-ring inset-ring-gray-950/5 dark:divide-white/5 dark:bg-gray-800 dark:inset-ring-white/5">
                  {[
                    { src: avatar4.src, name: "Will Winton", role: "Director of Operations" },
                    { src: avatar5.src, name: "Kristin Yardly", role: "Marketing Coordinator" },
                    { src: avatar6.src, name: "Emanual Cuccittini", role: "Staff Engineer" },
                    { src: avatar7.src, name: "Kiara Smith", role: "VP of Engineering" },
                  ].map((user, idx) => {
                    return (
                      <div key={idx} className="flex items-center justify-start gap-4 p-6">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src={user.src}
                            className="size-12 shrink-0 rounded-full bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 dark:outline-white/10"
                          />
                        </div>
                        <div className="flex flex-col truncate">
                          <span className="text-sm/6 font-medium text-gray-950 dark:text-white">{user.name}</span>
                          <span className="truncate text-sm/6 text-gray-500 dark:text-gray-400">{user.role}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute -right-3 bottom-12 w-[50cqw] shrink-0 divide-y divide-gray-950/5 rounded-xl bg-white shadow-2xl inset-ring inset-ring-gray-950/5 dark:divide-white/5 dark:bg-gray-800 dark:inset-ring-white/5">
                  {[
                    { src: avatar1.src, name: "سارة أحمد", role: "مديرة مشاريع" },
                    { src: avatar2.src, name: "علي محمد", role: "مطور برمجيات" },
                    { src: avatar3.src, name: "خالد عمر", role: "مصمم واجهات المستخدم" },
                  ].map((user, idx) => {
                    return (
                      <div key={idx} className="flex items-center justify-start gap-4 p-6" dir="rtl">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src={user.src}
                            className="size-12 shrink-0 rounded-full bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 dark:outline-white/10"
                          />
                        </div>
                        <div className="flex flex-col truncate">
                          <span className="text-sm/6 font-medium text-gray-950 dark:text-white">{user.name}</span>
                          <span className="truncate text-sm/6 text-gray-500 dark:text-gray-400">{user.role}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="col-span-full md:col-span-15 xl:col-span-10">
            <BentoHeader>
              <BentoIcon>
                <ContainerQueriesIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Container queries</BentoTitle>
                <BentoDescription>
                  Tag an element as a container to let children adapt to changes in its size.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mr-16 -mb-16">
                <Editor>
                  <HighlightedCode
                    example={
                      // prettier-ignore
                      html`
                        <!-- [!code classes:@container,@sm:grid-cols-2,@sm:aspect-3/2] -->
                        <div class="@container">
                          <div class="grid grid-cols-1 @sm:grid-cols-2">
                            <img
                              src="/img/photo-1.jpg"
                              class="aspect-square @sm:aspect-3/2 object-cover"
                            />
                            <img
                              src="/img/photo-2.jpg"
                              class="aspect-square @sm:aspect-3/2 object-cover"
                            />
                            <img
                              src="/img/photo-3.jpg"
                              class="aspect-square @sm:aspect-3/2 object-cover"
                            />
                            <img
                              src="/img/photo-4.jpg"
                              class="aspect-square @sm:aspect-3/2 object-cover"
                            />
                          </div>
                        </div>
                      `
                    }
                  />
                </Editor>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="col-span-full md:col-span-15">
            <BentoHeader>
              <BentoIcon>
                <GradientsIcon />
              </BentoIcon>
              <div>
                <BentoTitle>Gradients</BentoTitle>
                <BentoDescription>
                  No need to remember that complicated gradient syntax — create silky-smooth gradients with just a few
                  utility classes.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <div className="-mt-27 -mr-124 -mb-8 bg-white px-6 py-16 ring ring-gray-950/5 md:px-16 xl:-mr-26 dark:bg-gray-950 dark:ring-white/10">
                <div className="flex flex-col gap-2">
                  <span className="text-sm/7 font-medium text-gray-950/75 dark:text-white/75">
                    Power Meets Precision
                  </span>
                  <h3 className="text-4xl/12 font-semibold text-gray-950 dark:text-white">
                    Redefining real-time performance
                  </h3>
                  <p className="text-lg/7 font-medium text-gray-950/75 dark:text-white/75">
                    Our next-generation rendering engine delivers unmatched speed and efficiency, empowering creators to
                    push boundaries like never before.
                  </p>
                </div>
                <div className="mt-10 flex flex-col gap-10">
                  <div className="flex gap-6">
                    <div className="flex flex-1 flex-col gap-2.5">
                      <span className="text-base/7 font-medium text-gray-950 dark:text-white">
                        Render time performance
                      </span>
                      <div className="h-2.5 w-full rounded-full bg-linear-to-r from-emerald-500 to-sky-400 ring-1 ring-gray-950/10 ring-inset dark:from-emerald-400 dark:ring-white/10"></div>
                    </div>
                    <span className="text-3xl/12 font-semibold text-gray-950 dark:text-white">6.4x</span>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-1 flex-col gap-2.5">
                      <span className="text-base/7 font-medium text-gray-950 dark:text-white">
                        Real-time frame rate
                      </span>
                      <div className="h-2.5 w-3/4 rounded-full bg-linear-to-r from-pink-600 to-amber-300 ring-1 ring-gray-950/10 ring-inset dark:from-pink-500 dark:to-amber-200 dark:ring-white/10"></div>
                    </div>
                    <span className="text-3xl/12 font-semibold text-gray-950 dark:text-white">4.2x</span>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-1 flex-col gap-2.5">
                      <span className="text-base/7 font-medium text-gray-950 dark:text-white">
                        Multi-platform build time
                      </span>
                      <div className="h-2.5 w-1/2 rounded-full bg-linear-to-r from-purple-600 to-cyan-400 ring-1 ring-gray-950/10 ring-inset dark:from-purple-500 dark:ring-white/10"></div>
                    </div>
                    <span className="text-3xl/12 font-semibold text-gray-950 dark:text-white">2.7x</span>
                  </div>
                </div>
              </div>
            </BentoBody>
          </BentoItem>

          <BentoItem className="col-span-full md:col-span-15">
            <BentoHeader>
              <BentoIcon>
                <_3DTransformsIcon />
              </BentoIcon>
              <div>
                <BentoTitle>3D transforms</BentoTitle>
                <BentoDescription>
                  Sometimes two dimensions aren’t enough. Scale, rotate, and translate any element in 3D space to add a
                  touch of depth.
                </BentoDescription>
              </div>
            </BentoHeader>
            <BentoBody className="h-112">
              <Transforms3d />
            </BentoBody>
          </BentoItem>
        </div>
      </GridContainer>
    </div>
  );
}

function Code({ children }: { children: ReactNode }) {
  return <div className="font-mono text-[13px]/7 text-gray-950 dark:text-white">{children}</div>;
}
