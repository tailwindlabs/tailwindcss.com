import { Logo } from "@/components/logo";
import { GridContainer } from "../grid-container";

export default async function Course() {
  return (
    <div className="dark relative grid min-h-dvh grid-cols-1 place-items-center px-4 py-8 sm:px-0">
      <div>
        <GridContainer>
          <div className="flex justify-center p-2">
            <Logo className="h-7" />
          </div>
        </GridContainer>
        <div className="mt-6 space-y-4">
          <GridContainer>
            <h1 className="text-center text-5xl tracking-tighter text-balance text-white lg:text-8xl">
              Check your email.
            </h1>
          </GridContainer>
          <GridContainer>
            <p className="mx-auto max-w-xl text-center text-lg/7 font-medium text-pretty text-gray-400">
              You should get a confirmation email any minute —{" "}
              <strong className="font-medium text-white">open it up</strong> and{" "}
              <strong className="font-medium text-white">confirm your email</strong> and I'll send you the first video.
            </p>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
