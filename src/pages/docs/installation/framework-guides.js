import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import { ReactComponent as LaravelLogo } from '@/img/guides/laravel.svg'
import { ReactComponent as ViteLogo } from '@/img/guides/vite.svg'
import { ReactComponent as NuxtJsLogo } from '@/img/guides/nuxtjs.svg'
import { ReactComponent as GatsbyLogo } from '@/img/guides/gatsby.svg'
import { ReactComponent as CraLogo } from '@/img/guides/cra.svg'

export default function FrameworkGuides() {
  return (
    <InstallationLayout>
      <div className="max-w-3xl mb-16 prose">
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
          },
          {
            name: 'SvelteKit',
            slug: 'sveltekit',
            description: 'The fastest way to build apps of all sizes with Svelte.js.',
            logo: SvelteLogo
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
            name: 'Nuxt.js',
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
            name: 'Create React App',
            slug: 'create-react-app',
            description: 'CLI tool for scaffolding a new single-page React application.',
            logo: CraLogo,
          },
        ].map(({ name, description, logo: Logo, slug }) => (
          <li key={name} className="relative flex flex-row-reverse">
            <div className="flex-auto ml-6">
              <h3 className="mb-2 font-semibold leading-6 text-gray-900">
                <Link href={`/docs/guides/${slug}`}>
                  <a className="before:absolute before:inset-0">{name}</a>
                </Link>
              </h3>
              <p className="text-sm leading-6 text-gray-700">{description}</p>
            </div>
            <div className="flex items-center justify-center flex-none overflow-hidden bg-white rounded-full shadow w-14 h-14 ring-1 ring-gray-900/5">
              <Logo />
            </div>
          </li>
        ))}
      </ul>
      <div className="max-w-3xl mt-16 prose">
        <p>
          Don't see your framework of choice? Try using{' '}
          <Link href="/docs/installation">
            <a>Tailwind CLI</a>
          </Link>{' '}
          or installing Tailwind{' '}
          <Link href="/docs/installation/using-postcss">
            <a>as a PostCSS plugin</a>
          </Link>{' '}
          instead.
        </p>
      </div>
    </InstallationLayout>
  )
}

FrameworkGuides.layoutProps = {
  meta: {
    title: 'Installation: Framework Guides',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
