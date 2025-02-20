import BaseContainer from "@/components/grid-container";
import { Logo } from "@/components/logo";
import { HeroActions, SignUpForm } from "./call-to-action";

function GridContainer({ children }: { children: React.ReactNode }) {
  return (
    <BaseContainer>
      <div className="px-0 py-2 sm:px-2">{children}</div>
    </BaseContainer>
  );
}

export default async function Course() {
  return (
    <div className="dark relative px-4 py-8 sm:px-0">
      <div>
        <div className="absolute inset-x-0 top-0 -z-10 aspect-video opacity-75">
          <video autoPlay loop muted playsInline className="absolute size-full object-right">
            <source src="https://assets.tailwindcss.com/course-demos/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 size-full bg-linear-to-r from-gray-950 from-30%"></div>
          <div className="absolute inset-0 size-full bg-linear-to-t from-gray-950 to-50%"></div>
        </div>
        <GridContainer>
          <div className="p-2">
            <Logo className="h-7" />
          </div>
        </GridContainer>
        <div className="mt-20 flex flex-col gap-4 sm:mt-24">
          <GridContainer>
            <p className="font-mono text-sm/6 tracking-wider text-gray-400 uppercase">5-day mini-course</p>
            <h1 className="mt-2 text-5xl tracking-tighter text-balance text-white sm:text-8xl">
              Build UIs that don't suck.
            </h1>
          </GridContainer>
          <GridContainer>
            <p className="max-w-2xl text-lg/7 font-medium text-gray-400">
              <strong className="font-medium text-white">Short, tactical video lessons</strong> from the creator of
              TailwindCSS, delivered directly to your inbox{" "}
              <strong className="font-medium text-white">every day for a week</strong>.
            </p>
          </GridContainer>
          <GridContainer>
            <HeroActions />
          </GridContainer>
        </div>
      </div>
      <div className="px-2 pt-14 pb-28">
        <div className="max-w-xl space-y-8 text-[0.9375rem]/7 text-gray-300">
          <p>
            When you build UI components that are used by tens of thousands of developers, you learn to really care
            about the details, like:
          </p>
          <ul className="list-[square] space-y-4 pl-8 marker:text-white/60">
            <li className="pl-2">
              Building layouts that don't break when the content is longer than you planned for in Figma
            </li>
            <li className="pl-2">Getting avatars to stand out from the page, no matter what colors are in the image</li>
            <li className="pl-2">
              Fine-tuning click targets for mobile, without making everything else harder to maintain
            </li>
            <li className="pl-2">Making sure keyboards shortcuts are perfectly aligned in menus</li>
            <li className="pl-2">Getting the border radius mathematically perfect on nested elements</li>
            <li className="pl-2">
              Adding horizontal scrolling to a table, without the content getting cropped by the page padding
            </li>
          </ul>
          <p>
            Build UIs that don't suck is a crash course in some of the coolest tricks I've picked up over the years
            building things that need to be both beautiful and bullet-proof.
          </p>

          <p>
            Every day for a week I'll send you a short video lesson walking you through an interesting UI problem, as
            well as the code so you can play with it yourself and adapt it for your own projects.
          </p>
        </div>
        <div className="mt-8">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
