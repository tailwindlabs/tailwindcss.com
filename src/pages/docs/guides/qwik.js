import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new Qwik project if you don't have one set up already. The most common
        approach is to use <a href="https://qwik.builder.io/docs/getting-started/">create qwik</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm create qwik@latest my-app\ncd my-app',
    },
  },
  {
    title: 'Install Tailwind CSS',
    body: () => (
      <p>
        Run the <code>qwik add tailwind</code> command to install and configure{' '}
        <code>tailwindcss</code> on an existing Qwik project. This will also generate the{' '}
        <code>tailwind.config.js</code> and <code>postcss.config.js</code> files.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run qwik add tailwind',
    },
  },
  {
    title: 'Add the Tailwind directives to your CSS',
    body: () => (
      <p>
        Add the <code>@tailwind</code> directives for each of Tailwind’s layers to your{' '}
        <code>./src/global.css</code> file.
      </p>
    ),
    code: {
      name: 'global.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Start the dev server',
    body: () => (
      <p>
        Run the dev server via <code>npm run dev</code>.
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
    body: () => <p>Start using Tailwind's utility classes to style your content.</p>,
    code: {
      name: 'index.tsx',
      lang: 'jsx',
      code: `import { component$} from '@builder.io/qwik';
export default component$(() => {
  return <h1 class="text-3xl font-bold underline">Hello World!</h1>;
}`,
    },
  },
]

export default function UsingQwik({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Qwik"
      description="Setting up Tailwind CSS in a Qwik project."
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

UsingQwik.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Qwik',
    description: 'Setting up Tailwind CSS in an Qwik project.',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
