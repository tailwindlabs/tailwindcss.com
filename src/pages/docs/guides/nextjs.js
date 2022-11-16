import { useRouteHash } from '@/hooks/useRouteHash'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import { TabBar } from '@/components/Guides/TabBar.jsx'

let tabs = [
  {
    name: 'Stable',
    key: 'stable',
    href: '#',
    intro: () => (
      <p>
        The quickest way to start using Tailwind CSS in your Next.js project is to use the{' '}
        <a href="https://github.com/vercel/next.js/tree/c3e5caf1109a2eb42801de23fc78e42a08e5da6e/examples/with-tailwindcss">
          Next.js + Tailwind CSS Example
        </a>
        . This will automatically configure your Tailwind setup based on the official Next.js
        example. If you'd like to configure Tailwind manually, continue with the rest of this guide.
      </p>
    ),
    steps: [
      {
        title: 'Create your project',
        body: () => (
          <p>
            Start by creating a new Next.js project if you don’t have one set up already. The most
            common approach is to use{' '}
            <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npx create-next-app@latest my-project --typescript --eslint\ncd my-project',
        },
      },
      {
        title: 'Install Tailwind CSS',
        body: () => (
          <p>
            Install <code>tailwindcss</code> and its peer dependencies via npm, and then run the
            init command to generate both <code>tailwind.config.js</code> and{' '}
            <code>postcss.config.js</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
        },
      },
      {
        title: 'Configure your template paths',
        body: () => (
          <p>
            Add the paths to all of your template files in your <code>tailwind.config.js</code>{' '}
            file.
          </p>
        ),
        code: {
          name: 'tailwind.config.js',
          lang: 'js',
          code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./pages/**/*.{js,ts,jsx,tsx}",
>     "./components/**/*.{js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
        },
      },
      {
        title: 'Add the Tailwind directives to your CSS',
        body: () => (
          <p>
            Add the <code>@tailwind</code> directives for each of Tailwind’s layers to your{' '}
            <code>./styles/globals.css</code> file.
          </p>
        ),
        code: {
          name: 'globals.css',
          lang: 'css',
          code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
        },
      },
      {
        title: 'Start your build process',
        body: () => (
          <p>
            Run your build process with <code>npm run dev</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm run dev',
        },
      },
      {
        title: 'Start using Tailwind in your project',
        body: () => <p>Start using Tailwind’s utility classes to style your content.</p>,
        code: {
          name: 'index.tsx',
          lang: 'jsx',
          code: `  export default function Home() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
        },
      },
    ],
  },
  {
    name: (
      <>
        <span>
          Using the{' '}
          <code className="font-mono font-medium px-1 py-0.5 text-[13px] leading-5 rounded">
            app
          </code>{' '}
          directory
        </span>
      </>
    ),
    key: 'app-directory',
    href: '#app-directory',
    intro: () => (
      <p>
        If you’re beta testing the new{' '}
        <a href="https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory">
          app directory
        </a>{' '}
        in Next.js 13, you’ll need to include the <code>./app</code> directory in your content paths
        and ensure your CSS file is imported in your main layout file.
      </p>
    ),
    steps: [
      {
        title: 'Create your project',
        body: () => (
          <p>
            Start by creating a new Next.js project if you don’t have one set up already. The most
            common approach is to use{' '}
            <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npx create-next-app@latest my-project --experimental-app --typescript --eslint\ncd my-project',
        },
      },
      {
        title: 'Install Tailwind CSS',
        body: () => (
          <p>
            Install <code>tailwindcss</code> and its peer dependencies via npm, and then run the
            init command to generate both <code>tailwind.config.js</code> and{' '}
            <code>postcss.config.js</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
        },
      },
      {
        title: 'Configure your template paths',
        body: () => (
          <p>
            Add the paths to all of your template files in your <code>tailwind.config.js</code>{' '}
            file.
          </p>
        ),
        code: {
          name: 'tailwind.config.js',
          lang: 'js',
          code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./app/**/*.{js,ts,jsx,tsx}",
>     "./pages/**/*.{js,ts,jsx,tsx}",
>     "./components/**/*.{js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
        },
      },
      {
        title: 'Add the Tailwind directives to your CSS',
        body: () => (
          <p>
            Add the <code>@tailwind</code> directives for each of Tailwind’s layers to your{' '}
            <code>./app/globals.css</code> file.
          </p>
        ),
        code: {
          name: 'globals.css',
          lang: 'css',
          code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
        },
      },
      {
        title: 'Start your build process',
        body: () => (
          <p>
            Run your build process with <code>npm run dev</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm run dev',
        },
      },
      {
        title: 'Start using Tailwind in your project',
        body: () => <p>Start using Tailwind’s utility classes to style your content.</p>,
        code: {
          name: 'page.tsx',
          lang: 'jsx',
          code: `  export default function Home() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
        },
      },
    ],
  },
  {
    name: 'Using Turbopack',
    key: 'using-turbopack',
    href: '#turbopack',
    intro: () => (
      <p>
        <a href="https://turbo.build/pack">Turbopack</a> is currently in alpha and doesn’t yet
        expose any public plugin APIs, so the best way to integrate Tailwind CSS is using Tailwind
        CLI to compile your CSS alongside your development server.
      </p>
    ),
    steps: [
      {
        title: 'Create your project',
        body: () => (
          <p>
            Start by creating a new Next.js project if you don’t have one set up already. The most
            common approach is to use{' '}
            <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npx create-next-app@latest my-project --typescript --eslint\ncd my-project',
        },
      },
      {
        title: 'Install Tailwind CSS',
        body: () => (
          <p>
            Install <code>tailwindcss</code>, its peer dependencies, and <code>concurrently</code>{' '}
            via npm, and then run the init command to generate a <code>tailwind.config.js</code>{' '}
            file.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss autoprefixer concurrently\nnpx tailwindcss init',
        },
      },
      {
        title: 'Configure your template paths',
        body: () => (
          <p>
            Add the paths to all of your template files in your <code>tailwind.config.js</code>{' '}
            file.
          </p>
        ),
        code: {
          name: 'tailwind.config.js',
          lang: 'js',
          code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./pages/**/*.{js,ts,jsx,tsx}",
>     "./components/**/*.{js,ts,jsx,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
        },
      },
      {
        title: 'Update your package.json scripts',
        body: () => (
          <p>
            Update the scripts in your <code>package.json</code> file to build both your development
            and production CSS.
          </p>
        ),
        code: {
          name: 'package.json',
          lang: 'diff-json5',
          code: `"scripts": {
-   "dev": "next dev",
-   "build": "next build",
+   "dev": "concurrently \\\"next dev --turbo\\\" \\\"tailwindcss -i styles/globals.css -o styles/dist.css -w\\\"",
+   "build": "tailwindcss -m -i styles/globals.css -o styles/dist.css && next build",
    "start": "next start",
    "lint": "next lint"
}`,
        },
      },
      {
        title: 'Add the Tailwind directives to your CSS',
        body: () => (
          <p>
            Add the <code>@tailwind</code> directives for each of Tailwind’s layers to your{' '}
            <code>./styles/globals.css</code> file.
          </p>
        ),
        code: {
          name: 'globals.css',
          lang: 'css',
          code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
        },
      },
      {
        title: 'Import the compiled CSS file',
        body: () => (
          <p>
            Update your <code>./pages/_app.tsx</code> file to import the compiled CSS file.
          </p>
        ),
        code: {
          name: '_app.tsx',
          lang: 'diff-js',
          code: `- import '../styles/globals.css'
+ import '../styles/dist.css'

  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

  export default MyApp`,
        },
      },
      {
        title: 'Start your build process',
        body: () => (
          <p>
            Run your build process with <code>npm run dev</code>.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm run dev',
        },
      },
      {
        title: 'Start using Tailwind in your project',
        body: () => <p>Start using Tailwind’s utility classes to style your content.</p>,
        code: {
          name: 'index.tsx',
          lang: 'jsx',
          code: `  export default function Home() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
        },
      },
    ],
  },
]

export default function UsingNextJs({ code }) {
  let hash = useRouteHash()

  let selectedTabIndex = tabs.findIndex((tab) => tab.href === hash)

  if (selectedTabIndex === -1) {
    selectedTabIndex = 0
  }

  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Next.js"
      description="Setting up Tailwind CSS in a Next.js v10+ project."
    >
      <TabBar tabs={tabs} selectedTabIndex={selectedTabIndex} />
      <Steps
        intro={tabs[selectedTabIndex].intro}
        steps={tabs[selectedTabIndex].steps}
        code={code[selectedTabIndex]}
      />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: tabs.map((tab) => highlightedCodeSnippets(tab.steps)),
    },
  }
}

UsingNextJs.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Next.js',
    description: 'Setting up Tailwind CSS in a Next.js v10+ project.',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
