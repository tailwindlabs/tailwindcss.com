import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new AdonisJS project if you don’t have one set up already. The most
        common approach is to use{' '}
        <a href="https://docs.adonisjs.com/guides/installation">Create AdonisJS</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init adonisjs@latest my-project -- --kit=web\ncd my-project',
    },
  },
  {
    title: 'Install Tailwind CSS',
    body: () => (
      <p>
        Install <code>tailwindcss</code> and its peer dependencies, then generate your{' '}
        <code>tailwind.config.js</code> and <code>postcss.config.js</code> files.
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
        Add the paths to all of your template files in your <code>tailwind.config.js</code> file.
        <br />
        Add Inertia path if you are using Inertia.js.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  /** @type {import('tailwindcss').Config} */
  export default {
>   content: [
>     "./resources/**/*.edge",
>     "./resources/**/*.{js,ts,jsx,tsx,vue}",
>     // If you are using Inertia.js
>     "./inertia/**/*.{js,ts,jsx,tsx,vue}",
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
        <code>./resources/css/app.css</code> or <code>./inertia/css/app.css</code> file, depending
        on Edge or Inertia.js.
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'For Inertia, remove Tailwind CDN from your layout',
    body: () => (
      <p>
        If you're using Inertia, make sure to remove the Tailwind CDN in the{' '}
        <code>./resources/views/inertia_layout.edge</code> to avoid duplicate Tailwind imports.
      </p>
    ),
    code: {
      name: 'inertia_layout.edge',
      lang: 'diff-html',
      code: `  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>AdonisJS x Inertia x React</title>

  <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=instrument-sans:400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

  <style>
    :root {
      --sand-1: #fdfdfc;
      --sand-2: #f9f9f8;
      --sand-3: #f1f0ef;
      --sand-4: #e9e8e6;
      --sand-5: #e2e1de;
      --sand-6: #dad9d6;
      --sand-7: #cfceca;
      --sand-8: #bcbbb5;
      --sand-9: #8d8d86;
      --sand-10: #82827c;
      --sand-11: #63635e;
      --sand-12: #21201c;
    }
  </style>

-  <script src="https://cdn.tailwindcss.com"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Instrument Sans', 'sans-serif'],
          },
          colors: {
            primary: {
              DEFAULT: '#5A45FF',
            },
            sand: {
              1: 'var(--sand-1)',
              2: 'var(--sand-2)',
              3: 'var(--sand-3)',
              4: 'var(--sand-4)',
              5: 'var(--sand-5)',
              6: 'var(--sand-6)',
              7: 'var(--sand-7)',
              8: 'var(--sand-8)',
              9: 'v and import it herear(--sand-9)',
              10: 'var(--sand-10)',
              11: 'var(--sand-11)',
              12: 'var(--sand-12)',
            },
          },
        },
      },
    }
  </script>

  @viteReactRefresh()
  @inertiaHead()
  @vite(['inertia/app/app.tsx', \`inertia/pages/\${page.component}.tsx\`])
</head>

<body class="min-h-screen w-screen font-sans">
  @inertia()
</body>

</html>`,
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
    body: () => (
      <p>
        If you're using Edge, make sure your compiled CSS is included in the <code>{'<head>'}</code>{' '}
        then start using Tailwind’s utility classes to style your content.
      </p>
    ),
    code: {
      name: 'home.edge',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <!-- Only when using Edge -->
>   @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
]

export default function UsingAdonis({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with AdonisJS"
      description="Setting up Tailwind CSS in an AdonisJS project."
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

UsingAdonis.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Adonis',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}