import Link from "next/link";
import GridContainer from "../grid-container";
import CategoryHeader from "./category-header";
import type { Sponsor } from "@/lib/sponsors";

export default function PartnersSection({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="relative max-w-full">
      <div
        aria-hidden="true"
        className="hidden h-4 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 2xl:visible 2xl:flex dark:text-white/25"
      >
        text-4xl <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span> tracking-tighter text-balance
      </div>

      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <CategoryHeader className="text-sky-500 dark:text-sky-400">Sponsors</CategoryHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Supported by the best.
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25"
      >
        text-base <span className="inline dark:hidden">text-gray-950</span>
        <span className="hidden dark:inline">text-white</span>
      </div>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          Tailwind is supported by incredible partners and sponsors who make it possible for a team of talented
          designers and engineers to maintain the framework full-time.
        </p>
      </GridContainer>

      <GridContainer className="mt-10">
        <div className="px-2 max-sm:px-4">
          <Link
            href="/sponsors"
            className="inline-flex items-center justify-center gap-2 rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Become a sponsor
            <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5">
              <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path>
            </svg>
          </Link>
        </div>
      </GridContainer>

      <section>
        <div className="relative isolate mt-16">
          <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <div className="border-r border-gray-950/5 dark:border-white/10"></div>
            <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
            <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
            <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
          </div>
          <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
            {sponsors.map((company, index) => (
              <li key={index} className="max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y">
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener sponsored"
                  className="grid place-content-center transition-colors hover:bg-gray-950/2.5 sm:px-2 sm:py-4 dark:hover:bg-white/2.5"
                >
                  <company.logo className="w-full max-w-80" aria-label={`${company.name} logo`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
