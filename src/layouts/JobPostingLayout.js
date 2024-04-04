import { NavItems, NavPopover } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { SearchButton } from '@/components/Search'
import { ThemeToggle } from '@/components/ThemeToggle'
import { formatDate } from '@/utils/formatDate'
import { mdxComponents } from '@/utils/mdxComponents'
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'

const dateFormat = {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
}

function BackgroundBeams() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden">
      <div className="flex w-[108rem] flex-none justify-end">
        <picture>
          <source srcSet={require('@/img/beams/docs@30.avif').default.src} type="image/avif" />
          <img
            src={require('@/img/beams/docs@tinypng.png').default.src}
            alt=""
            className="w-[71.75rem] max-w-none flex-none dark:hidden"
            decoding="async"
          />
        </picture>
        <picture>
          <source srcSet={require('@/img/beams/docs-dark@30.avif').default.src} type="image/avif" />
          <img
            src={require('@/img/beams/docs-dark@tinypng.png').default.src}
            alt=""
            className="hidden w-[90rem] max-w-none flex-none dark:block"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="mx-auto max-w-8xl px-4 lg:px-8">
      <div className="relative flex h-[60px] items-center justify-between text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
        <Link href="/">
          <span className="sr-only">Tailwind CSS home page</span>
          <Logo className="h-5 w-auto" />
        </Link>
        <div className="flex items-center">
          <SearchButton className="-my-1 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 lg:hidden">
            <span className="sr-only">Search</span>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m19 19-3.5-3.5" />
              <circle cx="11" cy="11" r="6" />
            </svg>
          </SearchButton>
          <NavPopover className="-my-1 ml-2" display="lg:hidden" />
          <div className="hidden items-center lg:flex">
            <nav>
              <ul className="flex items-center gap-x-8">
                <NavItems />
              </ul>
            </nav>
            <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
              <ThemeToggle />
              <a
                href="https://github.com/tailwindlabs/tailwindcss"
                className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              >
                <span className="sr-only">Tailwind CSS on GitHub</span>
                <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function ApplyButton() {
  return (
    <button
      className="cursor-not-allowed rounded-full bg-slate-950 px-3 py-2.5 text-sm/7 font-semibold text-white dark:bg-white dark:text-slate-950 opacity-50"
      disabled
    >
      Apply for this job
    </button>
  )
}

function LocationIcon() {
  return (
    <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path className="fill-slate-500/35 dark:fill-slate-300/35" d="M4 11H12L14 15H2L4 11Z" />
      <path
        className="fill-slate-500/75 dark:fill-slate-300/75"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.46447 2.46447C6.41709 0.511845 9.58291 0.511845 11.5355 2.46447C13.4882 4.41709 13.4882 7.58291 11.5355 9.53553L8 13.0711L4.46447 9.53553C2.51184 7.58291 2.51184 4.41709 4.46447 2.46447ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
      />
    </svg>
  )
}

function CashIcon() {
  return (
    <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        className="fill-slate-500/75 dark:fill-slate-300/75"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 1H0V9H14V1ZM7 7C8.10457 7 9 6.10457 9 5C9 3.89543 8.10457 3 7 3C5.89543 3 5 3.89543 5 5C5 6.10457 5.89543 7 7 7Z"
      />
      <path
        className="fill-slate-500/35 dark:fill-slate-300/35"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7H2V15H16V7ZM9 13C10.1046 13 11 12.1046 11 11C11 9.89543 10.1046 9 9 9C7.89543 9 7 9.89543 7 11C7 12.1046 7.89543 13 9 13Z"
      />
    </svg>
  )
}

function LineExtensions({ body }) {
  let base = 'absolute from-slate-950/10 to-transparent dark:from-white/10'

  return body ? (
    <>
      <span className={`${base} -right-px top-[-33px] h-8 w-px bg-gradient-to-t max-xl:hidden`} />
      <span className={`${base} -top-px right-[-33px] h-px w-8 bg-gradient-to-r`} />
      <span className={`${base} -bottom-px right-[-33px] h-px w-8 bg-gradient-to-r`} />
      <span className={`${base} -bottom-px left-[-33px] h-px w-8 bg-gradient-to-l`} />
      <span className={`${base} -left-px bottom-[-33px] h-8 w-px bg-gradient-to-b`} />
      <span className={`${base} -right-px bottom-[-33px] h-8 w-px bg-gradient-to-b`} />
    </>
  ) : (
    <>
      <span className={`${base} -left-px top-[-33px] h-8 w-px bg-gradient-to-t`} />
      <span className={`${base} -right-px top-[-33px] h-8 w-px bg-gradient-to-t`} />
      <span className={`${base} -left-px bottom-[-33px] h-8 w-px bg-gradient-to-b max-xl:hidden`} />
      <span className={`${base} -top-px left-[-33px] h-px w-8 bg-gradient-to-l`} />
      <span className={`${base} -top-px right-[-33px] h-px w-8 bg-gradient-to-r xl:hidden`} />
      <span className={`${base} -bottom-px left-[-33px] h-px w-8 bg-gradient-to-l`} />
      <span
        className={`${base} -bottom-px right-[-33px] h-px w-8 bg-gradient-to-r max-xl:hidden`}
      />
    </>
  )
}

function BottomGlow() {
  return (
    <div className="absolute inset-x-0 -bottom-2 flex h-2 justify-center overflow-hidden">
      <div className="-mt-px flex h-[2px] w-full max-w-sm">
        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
      </div>
    </div>
  )
}

export function JobPostingLayout({ children, meta }) {
  return (
    <>
      <BackgroundBeams />
      <Header />
      <div className="mx-auto max-w-4xl overflow-hidden sm:overflow-visible sm:px-8 xl:max-w-8xl xl:px-8">
        <div className="mt-12 grid grid-cols-1 items-start border-slate-950/10 dark:border-white/10 sm:mt-16 sm:border-t xl:grid-cols-[34rem_minmax(0,1fr)]">
          <div className="relative top-0 border-b border-slate-950/10 px-8 pb-12 pt-8 dark:border-white/10 sm:border-x sm:px-12 sm:py-16 xl:sticky xl:border-r-0">
            <LineExtensions />
            <BottomGlow />
            <p className="text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">
              We’re hiring
            </p>
            <h1 className="mt-2 text-[length:clamp(1rem,7vw,3.5rem)] font-semibold leading-none tracking-tighter text-black dark:text-white xl:text-6xl/none">
              {meta.title}
            </h1>
            <dl className="mt-4 flex gap-8 text-sm/7 sm:mt-8">
              <div className="flex items-center gap-2">
                <LocationIcon />
                <dt className="sr-only">Location</dt>
                <dd className="text-slate-700 dark:text-slate-400">
                  Remote <span className="text-slate-500">(ET – CET)</span>
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <CashIcon />
                <dt className="sr-only">salary</dt>
                <dd className="text-slate-700 dark:text-slate-400">{meta.salary}</dd>
              </div>
            </dl>
            <p className="mt-7">
              <ApplyButton />
            </p>
            <p className="mt-7 text-sm/7 text-slate-500">
              Closed on{' '}
              <time dateTime={meta.dateCloses}>{formatDate(meta.dateCloses, dateFormat)}</time>
            </p>
          </div>
          <div className="relative border-slate-950/10 px-8 pb-16 pt-12 dark:border-white/10 sm:mb-24 sm:border-x sm:border-b sm:px-12 sm:pt-16">
            <LineExtensions body />
            <div className="prose prose-slate leading-7 dark:prose-dark [--scroll-mt:2rem]">
              <MDXProvider components={mdxComponents}>{children}</MDXProvider>
            </div>
            <div className="mt-12">
              <ApplyButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
