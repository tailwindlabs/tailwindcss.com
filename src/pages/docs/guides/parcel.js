import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new Parcel project if you don’t have one set up already. The most common
        approach is to add Parcel as a dev-dependency to your project as outlined in their{' '}
        <a href="https://parceljs.org/getting-started/webapp/">getting started guide</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'mkdir my-project\ncd my-project\nnpm init -y\nnpm install -D parcel\nmkdir src\ntouch src/index.html',
    },
  },
  {
    title: 'Install Tailwind CSS',
    body: () => (
      <p>
        Install <code>tailwindcss</code> and its peer dependencies via npm, and then run the init
        command to generate <code>tailwind.config.js</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss@3 postcss\nnpx tailwindcss init',
    },
  },
  {
    title: 'Configure PostCSS',
    body: () => (
      <p>
        Create a <code>.postcssrc</code> file in your project root, and enable the{' '}
        <code>tailwindcss</code> plugin.
      </p>
    ),
    code: {
      name: '.postcssrc',
      lang: 'json',
      code: `{
  "plugins": {
    "tailwindcss": {}
  }
}`,
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
  module.exports = {
>   content: [
>     "./src/**/*.{html,js,ts,jsx,tsx}",
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
        Create a <code>./src/index.css</code> file and add the <code>@tailwind</code> directives for
        each of Tailwind’s layers.
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
        Run your build process with <code>npx parcel src/index.html</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx parcel src/index.html',
    },
  },
  {
    title: 'Start using Tailwind in your project',
    body: () => (
      <p>
        Add your CSS file to the <code>{'<head>'}</code> and start using Tailwind’s utility classes
        to style your content.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="./index.css" type="text/css" rel="stylesheet">
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

export default function UsingParcel({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Parcel"
      description="Setting up Tailwind CSS in a Parcel project."
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

UsingParcel.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Parcel',
    description: 'Setting up Tailwind CSS in a Parcel project.',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
