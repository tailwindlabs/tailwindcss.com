import { SignUpForm } from "./call-to-action";
import { GridContainer } from "./grid-container";

import type { Metadata } from "next";
import { HeroSection } from "./hero-section";

import card from "./card.jpg";

export const metadata: Metadata = {
  title: "Build UIs that don't suck",
  description: "A free videos series from the creator of Tailwind CSS.",
  openGraph: {
    type: "website",
    title: "Build UIs that don't suck",
    description: "A free video series from the creator of Tailwind CSS.",
    images: card.src,
    url: "https://tailwindcss.com/build-uis-that-dont-suck",
  },
};

export default async function Course() {
  return (
    <div className="dark relative px-4 py-8 sm:px-0">
      <header>
        <HeroSection />
      </header>
      <main className="pt-14 pb-28">
        <GridContainer>
          <div className="max-w-xl space-y-8 text-base/7 text-gray-400 marker:text-white/60 **:[li]:pl-2 **:[strong]:font-medium **:[strong]:text-white **:[ul]:list-[square] **:[ul]:space-y-4 **:[ul]:pl-8">
            <p>
              When you build UI components that are used by <strong>tens of thousands of developers</strong>, you learn
              to really care about the details, like:
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
                Getting the border radius <strong>mathematically perfect</strong> on nested elements, without
                hard-coding magic numbers
              </li>
            </ul>
            <p>
              <strong>“Build UIs that don’t suck”</strong> is a crash course in some of the coolest tricks I've picked
              up over the years building things that need to be both beautiful and bullet-proof.
            </p>

            <p>
              <strong>Every day for a week I'll send you a short video lesson</strong> walking you through an
              interesting UI problem, <strong>as well as the code</strong> so you can play with it yourself and adapt it
              for your own projects.
            </p>
          </div>
          <div className="mt-8">
            <SignUpForm />
          </div>
        </GridContainer>
      </main>
    </div>
  );
}
