import React from "react";
import type { Metadata } from "next";
import { Pricing } from "./pricing";
import { Faqs } from "./faq";
import { CourseContent } from "./course-content";
import { Testimonials } from "./testimonials";
import { HeroSection } from "./hero-section";

// TODO: add og image
export const metadata: Metadata = {
  title: "Tailwind CSS by Example",
  description:
    "A video course that teaches you how to build beautiful, responsive UIs—without writing a single line of custom CSS.",
  openGraph: {
    type: "website",
    title: "Tailwind CSS by Example",
    description:
      "A video course that teaches you how to build beautiful, responsive UIs—without writing a single line of custom CSS.",
    // images: card.src,
    url: "https://tailwindcss.com/course",
  },
};

export default async function Course() {
  return (
    <main className="pb-30">
      <HeroSection />
      <CourseContent />
      <Testimonials />
      <Pricing />
      <Faqs />
    </main>
  );
}
