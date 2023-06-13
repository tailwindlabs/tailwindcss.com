import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new RedwoodJS project if you don't have one set up already. The most common
        approach is to use{' '}
        <a href="https://redwoodjs.com/docs/quick-start">
          create-redwood-app
        </a>
        .
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'yarn create redwood-app my-app\ncd my-app',
    },
  },
  {
    title: 'Install Tailwind CSS',
    body: () => (
      <p>
        Run the <code>rw setup ui</code> command to install <code>tailwindcss</code> as well as generate a <code>tailwind.config.js</code> file.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'yarn rw setup ui tailwindcss',
    },
  },
  {
    title: 'Start your build process',
    body: () => (
      <p>
        Run your build process with <code>yarn rw dev</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'yarn rw dev',
    },
  },
  {
    title: 'Start using Tailwind in your project',
    body: () => <p>Start using Tailwind's utility classes to style your content.</p>,
    code: {
      name: 'index.html',
      lang: 'html',
      code: `<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`,
    },
  },
]

export default function UsingRedwood({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with RedwoodJS"
      description="Setting up Tailwind CSS in an RedwoodJS project."
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

UsingRedwood.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with RedwoodJS',
    description: 'Setting up Tailwind CSS in a RedwoodJS project.',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
