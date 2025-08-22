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
              Tailwind CSS by Example
            </h1>
          </div>
          <div className="mt-8 border-t border-black/5 p-2 max-md:border-y max-md:px-4 dark:border-white/10">
            <p className="text-sm/6 text-gray-600 dark:text-gray-400">
              Join the waitlist for early video previews and behind-the-scenes updates.
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
            Learn how the creator of Tailwind CSS uses it to build beautiful, robust user interfaces that are a joy to
            maintain.
          </p>
          {/*<p className="text-lg/7">
            Go behind the scenes with the creator of Tailwind CSS and see exactly how it's used to build fast,
            beautiful, and maintainable interfaces.
          </p>*/}
          <p className="text-sm/7">
            In this course, you'll watch complete UIs come together step by step. Every decision is explained along the
            way—why it's made, what the trade-offs are, and the best practices that keep projects clean and scalable.
          </p>
          <h3 className="text-xl/7 font-medium tracking-tighter">Why this course?</h3>
          <p className="text-sm/7">
            Most Tailwind tutorials make it look easy. Drop a few classes on a button, add{" "}
            <code className="text-xs">hover:bg-blue-500</code>, and you're done.
          </p>
          <p className="text-sm/7">But when you try to build something real, the questions start piling up:</p>
          <ul className="text-sm/7">
            <li className="italic">How do I keep layouts consistent across dozens of pages?</li>
            <li className="italic">What's the best way to organize code so it stays maintainable?</li>
            <li className="italic">Should I extract components, or just keep everything inline?</li>
            <li className="italic">How do I avoid the "giant unreadable class string" problem?</li>
            <li className="italic">Am I even using Tailwind the way it was intended?</li>
          </ul>
          <p className="text-sm/7">
            Simple examples are fine for learning the basics, but they don't prepare you for building a real product
            that's going to live for years.
          </p>
          <p className="text-sm/7">
            This course is where those questions finally get answered — straight from the person who built Tailwind CSS.
          </p>
        </div>
        <GridContainer className="mt-10 grid grid-cols-2 gap-2 md:col-span-3 md:grid-cols-3 md:gap-x-6 lg:gap-x-12">
          <ImageGrid images={[form_example_01, form_example_02, form_example_03]} />
          <ImageGrid images={[landing_page_example_01, landing_page_example_02, landing_page_example_03]} />
          <ImageGrid images={[music_player_example_01, music_player_example_02, music_player_example_03]} />
          <ImageGrid images={[hero_example_01, hero_example_02, hero_example_03]} />
        </GridContainer>
        <div className="prose mt-10 grid max-w-2xl p-2 max-md:px-4 md:col-span-2 md:col-start-2">
          <h3 className="text-xl/7 font-medium tracking-tighter">What you'll learn</h3>
          <p className="text-sm/7">
            This course isn't a checklist of framework features. It's a hands-on series where everything is taught in
            the context of building real user interfaces — the way Tailwind was designed to be used.
          </p>
          <p className="text-sm/7">Along the way, you'll pick up things like:</p>
          <ul>
            <li>How to think in utility classes instead of writing custom CSS</li>
            <li>Practical techniques for handling states (hover, focus, active) without clutter</li>
            <li>Responsive layout patterns that actually scale</li>
            <li>Strategies for customizing themes without creating maintenance headaches</li>
            <li>Proven approaches for structuring components and pages that stay maintainable as projects grow</li>
            <li>Workflows, shortcuts, and trade-offs that only come from building with Tailwind at scale</li>
          </ul>
          <p className="text-sm/7">
            By the end, you'll not only know <em>what</em> to do with Tailwind, but{" "}
            <em>how the person who created it</em> approaches real-world projects.
          </p>
          <h3 className="text-xl/7 font-medium tracking-tighter">Who it's for</h3>
          <p className="text-sm/7">
            This course is for anyone who wants to use Tailwind more confidently and effectively.
          </p>
          <ul className="text-sm/7">
            <li>
              <strong>If you're new to Tailwind:</strong> You'll get a clear, practical foundation that goes beyond the
              docs and shows you how to actually ship projects.
            </li>
            <li>
              <strong>If you're already experienced:</strong> You'll see how the creator of Tailwind uses it in
              practice, picking up patterns, workflows, and best practices you won't find anywhere else.
            </li>
          </ul>
          <p className="text-sm/7">
            Wherever you are in your Tailwind journey, you'll walk away with the confidence that you're building UIs the
            right way.
          </p>
          <div className="not-prose relative mt-10 max-w-md">
            <SignUpForm />
          </div>
          <p className="mt-10 text-sm/7">
            Sign up for the waitlist to get early access, free sample lessons, and behind-the-scenes updates as the
            course comes together.
          </p>
          <Signature className="w-36 fill-gray-900 dark:fill-gray-200" />
          <p className="text-sm/7 font-semibold">– Adam Wathan, creator of Tailwind CSS</p>
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
