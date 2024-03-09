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
        <code>./resources/css/app.css</code> file.
      </p>
    ),
    code: {
      name: 'app.css',
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
    body: () => (
      <p>
        Make sure your compiled CSS is included in the <code>{'<head>'}</code> then start using
        Tailwind’s utility classes to style your content.
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
  let { highlightCode } = require('../../../../remark/utils')

  return {
    props: {
      code: steps.map(({ code }) => {
        if (code.lang && code.lang !== 'terminal') {
          return highlightCode(code.code, code.lang)
        }
        return code.code
      }),
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
