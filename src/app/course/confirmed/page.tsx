import { Logo } from "@/components/logo";
import GridContainer from "@/components/grid-container";
import DotGridImage from "../dot-grid-image";
import { Signature } from "../signature";

export default async function Subscribed() {
  return (
    <div className="relative grid min-h-dvh grid-cols-1 place-items-center py-8 sm:px-0">
      <GridContainer className="grid gap-6 sm:grid-cols-[auto_1fr] md:gap-10">
        <div className="relative grid border-black/5 p-2 max-sm:justify-center max-sm:px-4 sm:border-r md:border-x dark:border-white/10">
          <DotGridImage
            darkMode={true}
            width={472}
            height={667}
            className="aspect-[472/667] h-[320px] not-dark:hidden"
          />
          <DotGridImage darkMode={false} width={472} height={667} className="aspect-[472/667] h-[320px] dark:hidden" />
          <Signature className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto fill-gray-900 lg:-translate-x-1/5 dark:fill-gray-200" />
        </div>
        <div className="grid content-center border-l border-black/5 md:border-x dark:border-white/10">
          <div className="grid border-y border-black/5 p-2 max-md:border-t-0 max-sm:justify-center max-sm:px-4 dark:border-white/10">
            <Logo className="h-7" />
          </div>
          <div className="mt-2 border-y border-black/5 p-2 max-sm:px-4 dark:border-white/10">
            <p className="font-mono text-sm font-medium text-gray-700 uppercase max-sm:text-center dark:text-gray-400">
              Tailwind CSS by Example
            </p>
            <h1 className="text-5xl tracking-tighter text-balance text-gray-900 max-sm:text-center lg:text-8xl dark:text-white">
              You're in!
            </h1>
          </div>
          <div className="mt-4 border-y border-black/5 p-2 max-md:border-b-0 max-sm:px-4 dark:border-white/10">
            <p className="max-w-xl text-lg/7 font-medium text-pretty text-gray-500 max-sm:text-center dark:text-gray-400">
              Stay tuned for sneak peaks, early video previews, and behind-the-scenes updates soon.
            </p>
          </div>
        </div>
      </GridContainer>
    </div>
  );
}
