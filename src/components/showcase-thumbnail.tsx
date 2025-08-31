"use client";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";
import GridContainer from "./grid-container";

interface Showcase {
  name: string;
  url: string;
  thumbnail: string;
  video: string;
  description: string;
  isTemplate?: boolean;
  dark?: {
    thumbnail: string;
    video: string;
  };
}

const BEFORE_AND_AFTER_ONLY_IN_FIRST_COLUMN_OF_CURRENT_GRID = [
  "before:hidden after:hidden",
  "xl:[.grid>div:nth-child(4n+1)_&]:before:block xl:[.grid>div:nth-child(4n+1)_&]:after:block",
  "lg:max-xl:[.grid>div:nth-child(3n+1)_&]:before:block lg:max-xl:[.grid>div:nth-child(3n+1)_&]:after:block",
  "sm:max-lg:[.grid>div:nth-child(2n+1)_&]:before:block sm:max-lg:[.grid>div:nth-child(2n+1)_&]:after:block",
  "max-sm:before:block max-sm:after:block",
].join(" ");

export default function ShowcaseThumbnail({ showcase, priority = false }: { showcase: Showcase; priority?: boolean }) {
  let videoContainerRef = useRef<HTMLDivElement>(null);
  let videoRef = useRef<HTMLVideoElement>(null);
  let videoDarkRef = useRef<HTMLVideoElement>(null);
  let state = useRef("idle");

  function forceLayout() {
    void videoRef.current?.offsetWidth;
  }

  function showVideo() {
    forceLayout();
    let container = videoContainerRef.current;
    if (!container) return;
    container.style.opacity = "1";
    container.style.transition = "";
  }

  function hideVideo(durationSeconds = 0.5) {
    forceLayout();
    let container = videoContainerRef.current;
    if (!container) return;
    container.style.opacity = "0";
    container.style.transition = `opacity ${durationSeconds}s linear`;
  }

  function onEnded() {
    state.current = "looping";
    hideVideo();
  }

  function getVideo() {
    return showcase.dark &&
      (document.documentElement.classList.contains("dark") ||
        (document.documentElement.classList.contains("system") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches))
      ? videoDarkRef.current!
      : videoRef.current!;
  }

  return (
    <div
      className="group dark:border-bg-white/10 relative isolate border-x border-gray-950/5 transition-colors hover:bg-gray-950/5 max-sm:border-0 sm:max-lg:nth-[2n]:border-r-transparent sm:max-lg:nth-[2n+1]:border-l-transparent lg:max-xl:nth-[3n]:border-r-transparent lg:max-xl:nth-[3n+1]:border-l-transparent xl:nth-[4n]:border-r-transparent xl:nth-[4n+1]:border-l-transparent dark:border-white/10 dark:hover:bg-white/2.5"
      onMouseEnter={() => {
        if (state.current === "idle") {
          state.current = "playing";
          getVideo().play();
          showVideo();
        } else if (state.current === "leaving") {
          state.current = "looping";
        }
      }}
      onMouseLeave={() => {
        state.current = "leaving";
        hideVideo();
      }}
    >
      <a href={showcase.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"></a>
      <GridContainer className={clsx("p-2", BEFORE_AND_AFTER_ONLY_IN_FIRST_COLUMN_OF_CURRENT_GRID)}>
        <div className="relative aspect-[672/494] overflow-hidden rounded-xl outline outline-gray-950/5">
          <Image
            src={showcase.thumbnail}
            alt=""
            className={clsx("absolute inset-0 h-full w-full", showcase.dark && "dark:hidden")}
            priority={priority}
            unoptimized
          />
          {showcase.dark && (
            <Image
              src={showcase.dark.thumbnail}
              alt=""
              className="absolute inset-0 hidden h-full w-full dark:block"
              priority={priority}
              unoptimized
            />
          )}
          <div
            ref={videoContainerRef}
            onTransitionEnd={() => {
              if (state.current === "leaving") {
                state.current = "idle";
                getVideo().currentTime = 0;
                getVideo().pause();
              } else if (state.current === "looping") {
                state.current = "playing";
                getVideo().currentTime = 0;
                getVideo().play();
                showVideo();
              }
            }}
          >
            <video
              ref={videoRef}
              preload="none"
              muted
              playsInline
              className={clsx(
                "absolute inset-0 h-full w-full [mask-image:radial-gradient(white,black)]",
                showcase.dark && "dark:hidden",
              )}
              onEnded={onEnded}
            >
              <source src={showcase.video} type="video/mp4" />
            </video>
            {showcase.dark && (
              <video
                ref={videoDarkRef}
                preload="none"
                muted
                playsInline
                className="absolute inset-0 hidden h-full w-full [mask-image:radial-gradient(white,black)] dark:block"
                onEnded={onEnded}
              >
                <source src={showcase.dark.video} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </GridContainer>
      <GridContainer className={clsx("mt-2 p-2", BEFORE_AND_AFTER_ONLY_IN_FIRST_COLUMN_OF_CURRENT_GRID)}>
        <div className="flex flex-wrap items-center">
          <h2 className="text-sm/6 font-medium">{showcase.name}</h2>
          {showcase.isTemplate && (
            <p
              aria-label="This site is a Tailwind Plus template"
              className="ml-2 rounded-full border border-transparent bg-sky-100 px-1.5 text-[0.6875rem] leading-5 font-semibold text-sky-500 dark:bg-gray-600/50 dark:text-gray-200 dark:group-hover:bg-sky-500 dark:group-hover:text-white"
            >
              Template
            </p>
          )}
          <p className="line-clamp-1 w-full flex-none font-mono text-xs/6 text-neutral-600 dark:text-neutral-400">
            {showcase.description}
          </p>
        </div>
      </GridContainer>
    </div>
  );
}
