import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

import { ReactComponent as AdonisLogo } from '@/img/guides/adonis.svg'
import { ReactComponent as AdonisLogoWhite } from '@/img/guides/adonis-white.svg'
import { ReactComponent as AngularLogo } from '@/img/guides/angular.svg'
import { ReactComponent as AngularLogoWhite } from '@/img/guides/angular-white.svg'
import { ReactComponent as AstroLogo } from '@/img/guides/astro.svg'
import { ReactComponent as AstroLogoWhite } from '@/img/guides/astro-white.svg'
import { ReactComponent as CraLogo } from '@/img/guides/cra.svg'
import { ReactComponent as EmberLogo } from '@/img/guides/ember.svg'
import { ReactComponent as GatsbyLogo } from '@/img/guides/gatsby.svg'
import { ReactComponent as LaravelLogo } from '@/img/guides/laravel.svg'
import { ReactComponent as MeteorLogo } from '@/img/guides/meteor.svg'
import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import { ReactComponent as NextJsLogoWhite } from '@/img/guides/nextjs-white.svg'
import { ReactComponent as NuxtJsLogo } from '@/img/guides/nuxtjs.svg'
import { ReactComponent as ParcelLogo } from '@/img/guides/parcel.svg'
import { ReactComponent as PhoenixLogo } from '@/img/guides/phoenix.svg'
import { ReactComponent as QwikLogo } from '@/img/guides/qwik.svg'
import { ReactComponent as RailsLogo } from '@/img/guides/rails.svg'
import { ReactComponent as RailsLogoWhite } from '@/img/guides/rails-white.svg'
import { ReactComponent as RemixLogo } from '@/img/guides/remix.svg'
import { ReactComponent as RemixLogoWhite } from '@/img/guides/remix-white.svg'
import { ReactComponent as RspackLogo } from '@/img/guides/rspack.svg'
import { ReactComponent as SolidJSLogo } from '@/img/guides/solidjs.svg'
import { ReactComponent as SvelteLogo } from '@/img/guides/svelte.svg'
import { ReactComponent as SymfonyLogo } from '@/img/guides/symfony.svg'
import { ReactComponent as SymfonyLogoWhite } from '@/img/guides/symfony-white.svg'
import { ReactComponent as ViteLogo } from '@/img/guides/vite.svg'
import { ReactComponent as DotnetLogo } from '@/img/guides/dotnet.svg'

export default function FrameworkGuides() {
  return (
    <InstallationLayout>
      <div id="content-wrapper" className="prose prose-slate mb-10 max-w-3xl dark:prose-dark">
        <h3 className="sr-only">Framework Guides</h3>
        <p>
          Framework-specific guides that cover our recommended approach to installing Tailwind CSS
          in a number of popular environments.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            name: 'Next.js',
            slug: 'nextjs',
            description: 'Full-featured React framework with great developer experience.',
            logo: NextJsLogo,
            logoDark: NextJsLogoWhite,
          },
          {
            name: 'Laravel',
            slug: 'laravel',
            description: 'PHP web application framework with expressive, elegant syntax.',
            logo: LaravelLogo,
          },
          {
            name: 'Vite',
            slug: 'vite',
            description: 'Fast and modern development server and build tool.',
            logo: ViteLogo,
          },
          {
            name: 'Nuxt',
            slug: 'nuxtjs',
            description: 'Intuitive Vue framework for building universal applications.',
            logo: NuxtJsLogo,
          },
          {
            name: 'Gatsby',
            slug: 'gatsby',
            description: 'Framework for building static sites with React and GraphQL.',
            logo: GatsbyLogo,
          },
          {
            name: 'SolidJS',
            slug: 'solidjs',
            description: 'A tool for building simple, performant, and reactive user interfaces.',
            logo: SolidJSLogo,
          },
          {
            name: 'SvelteKit',
            slug: 'sveltekit',
            description: 'The fastest way to build apps of all sizes with Svelte.js.',
            logo: SvelteLogo,
          },
          {
            name: '.NET',
            slug: 'dotnet',
            description: 'The free, open-source, cross-platform framework for building modern apps and powerful cloud services.',
            logo: DotnetLogo
          },
          {
            name: 'Angular',
            slug: 'angular',
            description: 'Platform for building mobile and desktop web applications.',
            logo: AngularLogo,
            logoDark: AngularLogoWhite,
          },
          {
            name: 'Ruby on Rails',
            slug: 'ruby-on-rails',
            description:
              'Full-stack framework with all the tools needed to build amazing web apps.',
            logo: RailsLogo,
            logoDark: RailsLogoWhite,
          },
          {
            name: 'Remix',
            slug: 'remix',
            description: 'Full stack framework focused on web fundamentals and modern UX.',
            logo: RemixLogo,
            logoDark: RemixLogoWhite,
          },
          {
            name: 'Phoenix',
            slug: 'phoenix',
            description: 'A framework to build rich, interactive applications with Elixir.',
            logo: PhoenixLogo,
          },
          {
            name: 'Parcel',
            slug: 'parcel',
            description: 'The zero-configuration build tool for the web.',
            logo: ParcelLogo,
          },
          {
            name: 'Symfony',
            slug: 'symfony',
            description: 'A PHP framework to create websites and web applications.',
            logo: SymfonyLogo,
            logoDark: SymfonyLogoWhite,
          },
          {
            name: 'Meteor',
            slug: 'meteor',
            description: 'The full stack JavaScript framework for developing cross-platform apps.',
            logo: MeteorLogo,
          },
          {
            name: 'Create React App',
            slug: 'create-react-app',
            description: 'CLI tool for scaffolding a new single-page React application.',
            logo: CraLogo,
          },
          {
            name: 'AdonisJS',
            slug: 'adonisjs',
            description: 'A fully featured web framework for Node.js.',
            logo: AdonisLogo,
            logoDark: AdonisLogoWhite,
          },
          {
            name: 'Ember.js',
            slug: 'emberjs',
            description: 'A JavaScript framework for ambitious web developers.',
            logo: EmberLogo,
          },
          {
            name: 'Astro',
            slug: 'astro',
            description: 'The all-in-one web framework designed for speed.',
            logo: AstroLogo,
            logoDark: AstroLogoWhite,
          },
          {
            name: 'Qwik',
            slug: 'qwik',
            description: 'Build instantly-interactive web apps without effort.',
            logo: QwikLogo,
          },
          {
            name: 'Rspack',
            slug: 'rspack',
            description: 'A fast Rust-based web bundler.',
            logo: RspackLogo,
          },
        ].map(({ name, description, logo: Logo, logoDark: LogoDark, slug }) => (
          <li key={name} className="relative flex flex-row-reverse">
            <div className="peer group ml-6 flex-auto">
              <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                <Link
                  href={`/docs/guides/${slug}`}
                  className="before:absolute before:-inset-3 before:rounded-2xl"
                >
                  {name}
                  <svg
                    viewBox="0 0 3 6"
                    className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    <path
                      d="M0 0L3 3L0 6"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </h4>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">{description}</p>
            </div>
            <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
              {LogoDark !== undefined ? (
                <>
                  <Logo className="block dark:hidden" />
                  <LogoDark className="hidden dark:block" />
                </>
              ) : (
                <Logo className="dark:block" />
              )}
            </div>
            <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
          </li>
        ))}
      </ul>
      <div className="mt-16 prose prose-slate max-w-3xl dark:prose-dark">
        <p>
          Don't see your framework of choice? Try using{' '}
          <Link href="/docs/installation">Tailwind CLI</Link> or installing Tailwind{' '}
          <Link href="/docs/installation/using-postcss">as a PostCSS plugin</Link> instead.
        </p>
      </div>
    </InstallationLayout>
  )
}

FrameworkGuides.layoutProps = {
  meta: {
    title: 'Framework Guides',
    description:
      'Framework-specific guides that cover our recommended approach to installing Tailwind CSS in a number of popular environments.',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
