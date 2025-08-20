import GridContainer from "@/components/grid-container";
import Image from "next/image";
import type { Metadata } from "next";
import form_example_01 from "./form-example-01.png";
import form_example_02 from "./form-example-02.png";
import form_example_03 from "./form-example-03.png";
import landing_page_example_01 from "./landing-page-example-01.png";
import landing_page_example_02 from "./landing-page-example-02.png";
import landing_page_example_03 from "./landing-page-example-03.png";
import music_player_example_01 from "./music-player-example-01.png";
import music_player_example_02 from "./music-player-example-02.png";
import music_player_example_03 from "./music-player-example-03.png";
import hero_example_01 from "./hero-example-01.png";
import hero_example_02 from "./hero-example-02.png";
import hero_example_03 from "./hero-example-03.png";
import DotGridImage from "./dot-grid-image";
import { Signature } from "./signature";

// TODO: add og image
// import card from "./card.jpg";

function SignUpForm() {
  return (
    <form className="relative" method="POST" action="https://app.kit.com/forms/8458453/subscriptions">
      <input
        required
        type="email"
        id="email"
        name="email_address"
        aria-label="Email address"
        className="w-full rounded-full bg-black/2.5 px-4 py-2 text-sm/6 text-gray-950 outline -outline-offset-1 outline-black/5 placeholder:text-gray-500 dark:bg-white"
        placeholder="Enter your email"
      />
      <button className="absolute inset-y-0.5 right-0.5 ml-2 rounded-full bg-black px-4 text-sm font-medium text-white hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-black">
        Join the waitlist
      </button>
    </form>
  );
}

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
    url: "https://tailwindcss.com/tailwind-css-by-example",
  },
};

export default async function Course() {
  return (
    <div className="grid md:grid-cols-[1fr_--spacing(6)_1fr_--spacing(6)_1fr] lg:grid-cols-[1fr_--spacing(12)_1fr_--spacing(12)_1fr]">
      <div className="col-start-2 row-span-full row-start-1 grid border-x border-black/5 max-md:hidden dark:border-white/10"></div>
      <GridContainer className="col-span-full col-start-1 row-start-1 mt-12 mb-16 grid md:my-36 md:grid-cols-3 md:gap-x-6 lg:gap-x-12">
        <div className="grid-span-1 relative grid items-center justify-center p-2 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-black/5 max-md:px-4 dark:after:bg-white/10">
          <DotGridImage
            darkMode={true}
            width={472}
            height={667}
            className="aspect-[472/667] w-full max-w-[226px] not-dark:hidden"
          />
          <DotGridImage
            darkMode={false}
            width={472}
            height={667}
            className="aspect-[472/667] w-full max-w-[226px] dark:hidden"
          />
          <Signature className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto -translate-x-1/4 fill-gray-900 md:hidden dark:fill-gray-200" />
        </div>
        <div className="relative grid content-between border-black/5 max-md:mt-10 max-md:border-t md:col-span-2 dark:border-white/10">
          <div className="border-b border-black/5 p-2 max-md:px-4 dark:border-white/10">
            <p className="font-mono text-sm font-medium text-gray-700 uppercase dark:text-gray-400">
              By the creator of Tailwind CSS
            </p>
            <h1 className="mt-2 text-6xl tracking-tighter text-balance text-gray-900 md:text-7xl lg:text-8xl dark:text-white">
              Tailwind CSS by Example
            </h1>
          </div>
          <div className="mt-8 border-t border-black/5 p-2 max-md:border-y max-md:px-4 dark:border-white/10">
            <p className="text-sm/6 text-gray-600 dark:text-gray-400">
              Join the waitlist to get early access, free chapters and sneak peaks.
            </p>
            <div className="relative mt-2 max-w-md">
              <SignUpForm />
            </div>
          </div>
        </div>
        <div className="relative py-5 pl-16 font-mono text-xs font-medium text-gray-700 uppercase after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 max-md:hidden md:col-span-3 dark:text-gray-400 dark:after:bg-white/10">
          <p>
            Adam Wathan, <br />
            Wrestling enthusiast
          </p>
          <Signature className="pointer-events-none absolute mx-auto -translate-x-1/4 -translate-y-[110%] fill-gray-900 dark:fill-gray-200" />
        </div>
        <div className="prose grid max-w-2xl border-black/5 p-2 max-md:mt-10 max-md:border-t max-md:px-4 md:col-span-2 md:col-start-2 dark:border-white/10">
          <p className="text-xl/7">
            A video course that teaches you how to build beautiful, responsive UIs—without writing a single line of
            custom CSS. Learn by doing, with real-world examples that take you from simple layouts to fully polished
            components.
          </p>
          <h3 className="text-xl/7 font-medium tracking-tighter">Why are we making a course?</h3>
          <p className="text-sm/7">
            The thing that makes Tailwind so powerful is that it’s relatively un-opinionated. Sure, it has a lot of
            sensible defaults like the color palette or the spacing scale, but they are fairly low level. How you use
            them is up to you.
          </p>
          <p className="text-sm/7">
            But it turns out, some people like opinions. Over the past 8 years of building everything we make with
            Tailwind, we’ve developed a style of using it. This course is about showing you that style, through building
            beautiful, real-world, examples.
          </p>
          <h3 className="text-xl/7 font-medium tracking-tighter">What you’ll learn</h3>
          <p className="text-sm/7">
            In the first half, you'll learn the core concepts behind Tailwind—like working with utility classes,
            managing hover and focus states, customizing themes, and building responsive designs with ease.
          </p>
          <p className="text-sm/7">
            Then, in the "By Example" section, you'll see how it all comes together by building real-world UI components
            like marketing pages, checkout flows, and full dashboards—step by step, alongside the creator of Tailwind
            CSS himself.
          </p>
          <ol className="not-prose mt-12 text-sm/7">
            <li className="grid grid-cols-[auto_repeat(5,minmax(0,1fr))] gap-x-6 xl:gap-y-10">
              <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 dark:border-white/50 dark:text-white">
                <div className="col-start-1 row-start-1 grid place-content-center">
                  <div className="h-7 w-5 bg-white dark:bg-gray-950" />
                </div>
                <div className="col-start-1 row-start-1 grid place-content-center tracking-widest">1</div>
              </div>
              <div className="col-span-5">
                <span className="font-semibold">Core Concepts:</span> - The fundamental concepts of Tailwind CSS,
                including how to use utility classes, manage hover and focus states, customize themes, and build
                responsive designs.
              </div>
            </li>
            <li className="mt-6 grid grid-cols-[auto_repeat(5,minmax(0,1fr))] gap-x-6 xl:gap-y-10">
              <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 dark:border-white/50 dark:text-white">
                <div className="col-start-1 row-start-1 grid place-content-center">
                  <div className="h-7 w-5 bg-white dark:bg-gray-950" />
                </div>
                <div className="col-start-1 row-start-1 grid place-content-center tracking-widest">2</div>
              </div>
              <div className="col-span-5">
                <span className="font-semibold">By Example:</span> - Build real-world UI components using the concepts
                learned in the first half. You’ll see all the tricks and techniques we use to create beautiful,
                responsive designs.
              </div>
            </li>
          </ol>
        </div>
        <GridContainer className="mt-10 grid grid-cols-2 gap-2 md:col-span-3 md:grid-cols-3 md:gap-x-6 lg:gap-x-12">
          <ImageGrid images={[form_example_01, form_example_02, form_example_03]} />
          <ImageGrid images={[landing_page_example_01, landing_page_example_02, landing_page_example_03]} />
          <ImageGrid images={[music_player_example_01, music_player_example_02, music_player_example_03]} />
          <ImageGrid images={[hero_example_01, hero_example_02, hero_example_03]} />
        </GridContainer>
        <div className="prose mt-10 grid max-w-2xl p-2 max-md:px-4 md:col-span-2 md:col-start-2">
          <h3 className="text-xl/7 font-medium tracking-tighter">Who is it for?</h3>
          <p className="text-sm/7">
            Whether you're brand new to Tailwind CSS or looking to level up your skills, this course gives you a deep
            understanding of how to build beautiful, responsive interfaces with utility-first CSS.
          </p>
          <p className="text-sm/7">
            If you’re just starting out with Tailwind, you’ll learn the fundamentals and how to use it effectively. If
            you’re already familiar with Tailwind, you’ll see how we use it in practice to build real-world components
            and layouts.
          </p>
          <div className="not-prose relative mt-10 max-w-md">
            <SignUpForm />
          </div>
          <p className="mt-10 text-sm/7">
            If this sounds like something you’d be interested in, sign up to the waitlist to get early access, free
            chapters and sneak peaks at the course content.
          </p>
          <Signature className="w-36 fill-gray-900 dark:fill-gray-200" />
          <p className="text-sm/7 font-semibold">- Adam</p>
        </div>
      </GridContainer>
    </div>
  );
}

const ImageGrid = ({ images }: { images: { src: string }[] }) => (
  <div className="grid grid-cols-2 gap-2 p-1 md:last:hidden lg:gap-4">
    <Image
      src={images[0].src}
      alt="Hero section preview for Tailwind CSS by Example"
      width={750}
      height={456}
      quality={100}
      className="col-span-2 aspect-375/228 w-full rounded-lg object-cover outline -outline-offset-1 outline-black/5 dark:outline-white/10"
    />
    <Image
      src={images[1].src}
      alt="Hero section preview for Tailwind CSS by Example"
      width={360}
      height={298}
      quality={100}
      className="aspect-180/149 w-full rounded-lg object-cover outline -outline-offset-1 outline-black/5 max-md:hidden dark:outline-white/10"
    />
    <Image
      src={images[2].src}
      alt="Hero section preview for Tailwind CSS by Example"
      width={360}
      height={298}
      quality={100}
      className="aspect-180/149 w-full rounded-lg object-cover outline -outline-offset-1 outline-black/5 max-md:hidden dark:outline-white/10"
    />
  </div>
);
