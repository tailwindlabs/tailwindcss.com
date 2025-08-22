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
import card from "./card.jpg";

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
    images: card.src,
    url: "https://tailwindcss.com/tailwind-css-by-example",
  },
};

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

export default async function Course() {
  return (
    <div className="grid md:grid-cols-[1fr_--spacing(6)_1fr_--spacing(6)_1fr] lg:grid-cols-[1fr_--spacing(12)_1fr_--spacing(12)_1fr]">
      <div className="col-start-2 row-span-full row-start-1 grid border-x border-black/5 max-md:hidden dark:border-white/10"></div>
      <GridContainer className="col-span-full col-start-1 row-start-1 mt-12 mb-16 grid md:my-36 md:grid-cols-3 md:gap-x-6 lg:gap-x-12">
        <div className="grid-span-1 relative grid grid-cols-1 items-center justify-center justify-self-center after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-black/5 max-sm:px-4 sm:grid-cols-[1fr_1fr] sm:pl-16 md:grid-cols-1 md:p-2 md:pl-0 dark:after:bg-white/10">
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
          <div className="relative font-mono text-xs font-medium text-gray-700 uppercase sm:translate-y-1/2 sm:py-5 md:hidden dark:text-gray-400">
            <p className="max-sm:hidden">
              Adam Wathan, <br />
              Creator of Tailwind CSS
            </p>
            <Signature className="pointer-events-none absolute -translate-y-3/4 fill-gray-900 max-sm:inset-x-0 max-sm:mx-auto sm:-translate-x-1/4 sm:-translate-y-[110%] dark:fill-gray-200" />
          </div>
        </div>
        <div className="relative grid content-between border-black/5 max-md:mt-10 max-md:border-t md:col-span-2 dark:border-white/10">
          <div className="border-b border-black/5 p-2 max-md:px-4 dark:border-white/10">
            <p className="font-mono text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
              By the creator of Tailwind CSS
            </p>
            <h1 className="mt-2 text-6xl tracking-tighter text-balance text-gray-900 md:text-7xl lg:text-8xl dark:text-white">
              Tailwind CSS by Example.
            </h1>
          </div>
          <div className="mt-8 border-t border-black/5 p-2 max-md:border-y max-md:px-4 dark:border-white/10">
            <p className="text-sm/6 text-gray-600 dark:text-gray-400">
              Join the waitlist for early previews and behind-the-scenes updates.
            </p>
            <div className="relative mt-2 max-w-md">
              <SignUpForm />
            </div>
          </div>
        </div>
        <div className="relative py-5 pl-16 font-mono text-xs font-medium text-gray-700 uppercase after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 max-md:hidden md:col-span-3 dark:text-gray-400 dark:after:bg-white/10">
          <p>
            Adam Wathan, <br />
            Creator of Tailwind CSS
          </p>
          <Signature className="pointer-events-none absolute mx-auto -translate-x-1/4 -translate-y-[110%] fill-gray-900 dark:fill-gray-200" />
        </div>
        <div className="prose grid max-w-2xl border-black/5 p-2 max-md:mt-10 max-md:border-t max-md:px-4 md:col-span-2 md:col-start-2 dark:border-white/10">
          <p className="text-lg/7">
            Learn how the creator of Tailwind CSS rapidly builds beautiful, robust user interfaces that are a joy to
            maintain.
          </p>
          <p className="text-sm/7">
            In this course, you'll watch <strong>complete UIs come together step-by-step</strong>, with every decision
            and trade-off explained along the way. No simplified examples, just <strong>real-world designs</strong> with
            real-world challenges like the things you work on every day.
          </p>
          <h3 className="text-xl/7 font-medium tracking-tighter">What you'll learn</h3>
          <p className="text-sm/7">
            We'll speedrun the fundamentals to make sure you know your way around the framework, but after that it's all
            about turning <strong>complex, modern UI designs into bullet-proof, maintainable code</strong>.
          </p>
          <p className="text-sm/7">We'll dig in to topics like:</p>
          <ul>
            <li>
              <strong>Breaking down designs into composable pieces</strong> that avoid coupling and duplication
            </li>
            <li>
              Approaching layout and spacing in a way that makes things <strong>resilient to unexpected content</strong>
            </li>
            <li>
              <strong>Using modern CSS features</strong> to reduce the need for complex JavaScript
            </li>
            <li>
              Handling dynamic, database-driven styles in <strong>user-themeable applications</strong>
            </li>
            <li>
              When to write <strong>custom CSS</strong> and how to approach it
            </li>
            <li>
              <strong>How to design component APIs</strong> when using utility-first CSS
            </li>
          </ul>
          <p className="text-sm/7">
            And tons more, over the course of building a bunch of expertly designed, custom interfaces from complete
            scratch.
          </p>
        </div>
        <GridContainer className="mt-10 grid grid-cols-2 gap-2 md:col-span-3 md:grid-cols-3 md:gap-x-6 lg:gap-x-12">
          <ImageGrid images={[form_example_01, form_example_02, form_example_03]} />
          <ImageGrid images={[landing_page_example_01, landing_page_example_02, landing_page_example_03]} />
          <ImageGrid images={[music_player_example_01, music_player_example_02, music_player_example_03]} />
          <ImageGrid images={[hero_example_01, hero_example_02, hero_example_03]} />
        </GridContainer>
        <div className="prose mt-10 grid max-w-2xl p-2 max-md:px-4 md:col-span-2 md:col-start-2">
          <p className="text-sm/7">
            Sign up for the waitlist to get early preview videos and behind-the-scenes updates as the course comes
            together.
          </p>
          <div className="not-prose relative mt-10 max-w-md">
            <SignUpForm />
          </div>
          <p className="mt-10 text-sm/7">
            Wherever you are in your Tailwind journey, after this course you'll walk away with the confidence that
            you're building UIs the right way.
          </p>
        </div>
        <div className="mt-10 grid max-w-2xl p-2 max-md:px-4 md:col-span-2 md:col-start-2">
          <Signature className="w-36 fill-gray-900 dark:fill-gray-200" />
          <p className="text-sm/6 font-semibold">Adam Wathan</p>
          <p className="text-sm/6 text-gray-700 dark:text-gray-400">Creator of Tailwind CSS</p>
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
