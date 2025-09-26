import { Logo } from "@/components/logo";
import GridContainer from "@/components/grid-container";

export default async function Subscribed() {
  return (
    <div className="dark relative grid min-h-dvh grid-cols-1 place-items-center px-4 py-8 sm:px-0">
      <div>
        <GridContainer>
          <div className="flex justify-center p-2">
            <Logo className="h-7" />
          </div>
        </GridContainer>
        <div className="mt-6 space-y-6">
          <GridContainer>
            <h1 className="text-center text-5xl tracking-tighter text-balance text-white lg:text-8xl">You’re in!</h1>
          </GridContainer>
          <GridContainer>
            <p className="mx-auto max-w-xl text-center text-lg/7 font-medium text-pretty text-gray-400">
              Stay tuned for sneak peaks, early video previews, and behind-the-scenes updates soon.
            </p>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
