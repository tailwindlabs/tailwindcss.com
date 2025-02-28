import { Logo } from "@/components/logo";
import { HeroActions, SignUpForm } from "./call-to-action";
import { GridContainer } from "./layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build UIs that don't suck",
  description: "A free videos series from the creator of Tailwind CSS.",
  openGraph: {
    type: "website",
    title: "Build UIs that don't suck",
    description: "A free video series from the creator of Tailwind CSS.",
    images: "https://tailwindcss.com/api/og?path=/course",
    url: "https://tailwindcss.com/course",
  },
};

export default async function Course() {
  return (
    <div className="dark relative px-4 py-8 sm:px-0">
      <div>
        <div className="absolute inset-x-0 top-0 left-1/5 -z-10 aspect-video opacity-50">
          <video autoPlay loop muted playsInline className="absolute size-full object-right">
            <source
              src="https://assets.tailwindcss.com/build-uis-that-dont-suck/background-loop.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 size-full bg-linear-to-r from-gray-950 to-75%"></div>
          <div className="absolute inset-0 size-full bg-linear-to-t from-gray-950 to-50%"></div>
        </div>
        <GridContainer>
          <div className="p-2">
            <Logo className="h-7" />
          </div>
        </GridContainer>
        <div className="mt-20 flex flex-col gap-4 sm:mt-24">
          <GridContainer>
            <p className="font-mono text-sm/6 tracking-wider text-gray-400 uppercase">5-part mini-course</p>
            <h1 className="mt-2 text-5xl tracking-tighter text-balance text-white sm:text-8xl">
              Build UIs that don’t suck.
            </h1>
          </GridContainer>
          <GridContainer>
            <p className="max-w-2xl text-lg/7 font-medium text-gray-400">
              <strong className="font-medium text-white">Short, tactical video lessons</strong> from the creator of
              Tailwind CSS, delivered directly to your inbox{" "}
              <strong className="font-medium text-white">every day for a week</strong>.
            </p>
          </GridContainer>
          <GridContainer>
            <HeroActions />
          </GridContainer>
        </div>
      </div>
      <div className="px-2 pt-14 pb-28">
        <div className="max-w-xl space-y-8 text-base/7 text-gray-400 marker:text-white/60 **:[li]:pl-2 **:[strong]:font-medium **:[strong]:text-white **:[ul]:list-[square] **:[ul]:space-y-4 **:[ul]:pl-8">
          <p>
            When you build UI components that are used by <strong>tens of thousands of developers</strong>, you learn to
            really care about the details, like:
          </p>
          <ul>
            <li>
              <strong>Building layouts that don't break</strong> when the content is longer than you planned for in
              Figma
            </li>
            <li>
              Making a table scrollable, <strong>without the content getting cropped</strong> by the page padding
            </li>
            <li>
              <strong>Automatically aligning icons</strong> in dropdown menus, even when some items are just text
            </li>
            <li>
              Making an entire card clickable, <strong>without destroying the experience</strong> for screen readers
            </li>
            <li>
              <strong>Fine-tuning click targets for mobile</strong>, without making everything else harder to maintain
            </li>
            <li>
              Getting the border radius <strong>mathematically perfect</strong> on nested elements, without hard-coding
              magic numbers
            </li>
          </ul>
          <p>
            <strong>“Build UIs that don’t suck”</strong> is a crash course in some of the coolest tricks I've picked up
            over the years building things that need to be both beautiful and bullet-proof.
          </p>

          <p>
            <strong>Every day for a week I'll send you a short video lesson</strong> walking you through an interesting
            UI problem, <strong>as well as the code</strong> so you can play with it yourself and adapt it for your own
            projects.
          </p>
        </div>
        <div className="mt-8">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
