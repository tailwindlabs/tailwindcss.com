import React from "react";
import GridContainer from "@/components/grid-container";
import heroBackground from "./hero-background.jpg";
import Link from "next/link";
import { CallToAction } from "./call-to-action";

const LogoMark = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.0005 0C17.5999 0 13.6006 3.33355 11.9998 10.0007C14.4001 6.6671 17.2002 5.41727 20.4 6.25016C22.2256 6.72526 23.5311 8.1052 24.9749 9.633C27.3282 12.1208 30.0521 15 36.0002 15C42.3999 15 46.4001 11.6664 48 5.00033C45.6006 8.33388 42.8005 9.58372 39.6007 8.74984C37.7741 8.27474 36.4686 6.8948 35.0249 5.36799C32.6716 2.87817 29.9486 0 24.0005 0ZM11.9998 15C5.60014 15 1.59991 18.3336 0 25.0007C2.40033 21.6671 5.2004 20.4173 8.39927 21.2502C10.2259 21.7253 11.5314 23.1052 12.9751 24.633C15.3284 27.1208 18.0514 30 24.0005 30C30.4001 30 34.4003 26.6674 36.0002 20.0003C33.5999 23.3339 30.7998 24.5837 27.6 23.7508C25.7744 23.2747 24.4689 21.8948 23.0251 20.368C20.6718 17.8801 17.9479 15 11.9998 15Z"
      fill="var(--color-sky-400)"
    />
  </svg>
);

export function HeroSection() {
  return (
    <section className="relative" id="hero">
      <div className="absolute inset-1 h-1/2 overflow-hidden rounded-t-2xl mask-b-from-40% sm:h-2/3 md:h-full">
        <img
          alt=""
          src={heroBackground.src}
          className="absolute inset-0 h-full w-full rounded-t-2xl mask-l-from-40% object-cover object-[30%_50%] opacity-40 outline-1 -outline-offset-1 outline-gray-950/10 dark:outline-white/10"
        />
      </div>
      <div className="relative max-w-xl p-2">
        <Link href="/">
          <LogoMark className="mt-7 h-8" />
        </Link>
        <GridContainer className="mt-18 py-2">
          <p className="font-mono text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-300">
            By the creator of Tailwind CSS
          </p>
          <h1 className="mt-2 text-6xl tracking-tight text-balance md:text-8xl"> Tailwind CSS by Example</h1>
        </GridContainer>
        <GridContainer className="mt-8 py-1">
          <p className="text-base/7 text-gray-700 dark:text-gray-300">
            A video course that teaches you how to build beautiful, responsive UIs—without writing a single line of
            custom CSS. Learn by doing, with real-world examples that take you from simple layouts to fully polished
            components.
          </p>
        </GridContainer>
        <GridContainer className="mt-6 py-2">
          <CallToAction />
        </GridContainer>
        <GridContainer className="mt-16 py-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="size-4 fill-gray-400 dark:fill-gray-500"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
              </svg>
            ))}
          </div>
          <p className="mt-3 text-sm/7 font-medium">
            “This course finally made Tailwind click for me—everything just feels faster, cleaner, and more intuitive
            now.”
          </p>
          <p className="mt-3 text-sm/7 font-normal text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-sky-500 dark:text-sky-400">— Dan Hollick</span>, Author of Making
            Software
          </p>
        </GridContainer>
      </div>
    </section>
  );
}
