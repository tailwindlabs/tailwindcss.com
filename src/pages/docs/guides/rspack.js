import { useRouteHash } from '@/hooks/useRouteHash'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import { TabBar } from '@/components/Guides/TabBar.jsx'

let tabs = [
  {
    name: 'Using React',
    href: '#react',
    steps: [
      {
        title: 'Create your project',
        body: () => (
          <p>
            Start by creating a new Rspack project if you don’t have one set up already. The most
            common approach is to use{' '}
            <a href="https://www.rspack.dev/guide/quick-start.html#using-the-rspack-cli">
              Rspack CLI
            </a>
            .
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm create rspack@latest',
        },
      },
      {
        title: 'Install Tailwind CSS',
        body: () => (
          <p>
            Install <code>tailwindcss</code> and its peer dependencies, then generate your{' '}
            <code>tailwind.config.js</code> file.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss autoprefixer postcss-loader\nnpx tailwindcss init',
        },
      },
      {
        title: 'Configure rspack.config.js',
        body: () => (
          <p>
            Configure <code>postcss-loader</code> in <code>rspack.config.js</code>, and add{' '}
            <code>tailwindcss</code> to <code>postcssOptions.plugins</code>.
          </p>
        ),
        code: {
          name: 'rspack.config.js',
          lang: 'js',
          code: `  // https://www.rspack.dev/guide/language-support.html#tailwind-css
  module.exports = {
    // ...
    module: {
      rules: [
>       {
>         test: /\\.css$/,
>         use: [
>           {
>             loader: 'postcss-loader',
>             options: {
>               postcssOptions: {
>                 plugins: {
>                   tailwindcss: {},
>                   autoprefixer: {},
>                 },
>               },
>             },
>           },
>         ],
>         type: 'css',
>       },
    // ...`,
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
  export default {
>   content: [
>     "./src/**/*.{js,ts,jsx,tsx}",
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
            <code>./src/index.css</code> file.
          </p>
        ),
        code: {
          name: 'index.css',
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
          name: 'App.jsx',
          lang: 'jsx',
          code: `  export default function App() {
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
    name: 'Using Vue',
    href: '#vue',
    steps: [
      {
        title: 'Create your project',
        body: () => (
          <p>
            Start by creating a new Rspack project if you don’t have one set up already. The most
            common approach is to use{' '}
            <a href="https://www.rspack.dev/guide/quick-start.html#using-the-rspack-cli">
              Rspack CLI
            </a>
            .
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm create rspack@latest',
        },
      },
      {
        title: 'Install Tailwind CSS',
        body: () => (
          <p>
            Install <code>tailwindcss</code> and its peer dependencies, then generate your{' '}
            <code>tailwind.config.js</code> file.
          </p>
        ),
        code: {
          name: 'Terminal',
          lang: 'terminal',
          code: 'npm install -D tailwindcss postcss autoprefixer postcss-loader\nnpx tailwindcss init',
        },
      },
      {
        title: 'Configure rspack.config.js',
        body: () => (
          <p>
            Configure <code>postcss-loader</code> in <code>rspack.config.js</code>, and add{' '}
            <code>tailwindcss</code> to <code>postcssOptions.plugins</code>.
          </p>
        ),
        code: {
          name: 'rspack.config.js',
          lang: 'js',
          code: `  // https://www.rspack.dev/guide/language-support.html#tailwind-css
  module.exports = {
    // ...
    module: {
      rules: [
>       {
>         test: /\\.css$/,
>         use: [
>           {
>             loader: 'postcss-loader',
>             options: {
>               postcssOptions: {
>                 plugins: {
>                   tailwindcss: {},
>                   autoprefixer: {},
>                 },
>               },
>             },
>           },
>         ],
>         type: 'css',
>       },
    // ...`,
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
  export default {
>   content: [
>     "./index.html",
>     "./src/**/*.{vue,js,ts,jsx,tsx}",
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
            <code>./src/style.css</code> file.
          </p>
        ),
        code: {
          name: 'style.css',
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
          name: 'App.vue',
          lang: 'html',
          code: `  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`,
        },
      },
    ],
  },
]

export default function UsingRspack({ code }) {
  let hash = useRouteHash()

  let selectedTabIndex = tabs.findIndex((tab) => tab.href === hash)

  if (selectedTabIndex === -1) {
    selectedTabIndex = 0
  }

  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Rspack"
      description="Setting up Tailwind CSS in a Rspack project."
    >
      <TabBar tabs={tabs} selectedTabIndex={selectedTabIndex} />
      <Steps steps={tabs[selectedTabIndex].steps} code={code[selectedTabIndex]} />
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

UsingRspack.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Rspack',
    description: 'Setting up Tailwind CSS in a Rspack project.',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
