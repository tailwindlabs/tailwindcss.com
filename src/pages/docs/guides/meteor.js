import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'
import Link from "next/link";

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new Meteor project if you don't have one set up already. The most
        common approach is to use{' '}
        <a href="https://www.meteor.com/developers/install">
          Meteor CLI
        </a>
        .
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'meteor create --tailwind my-project\ncd my-project',
    },
  },
  {
    title: 'Start your build process',
    body: () => (
      <p>
        Run your project with <code>meteor</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'meteor',
    },
  },
  {
    title: 'Start using Tailwind in your project',
    body: () => <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: 'imports/ui/Hello.jsx',
      lang: 'jsx',
      code: `<h3 className="text-3xl text-gray-900 font-bold">
    Welcome to Meteor!
</h3>`,
    },
  },
]

export default function UsingMeteor({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Meteor"
      description="Setting up Tailwind CSS in a Meteor project."
    >
      <div className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark">
        <p>
          By default using the flag <code>--tailwind</code> in the creation of your project will install Tailwind CSS and React in your project.
          If you want to use any other front-end framework, You can follow their guides in the {' '}
          <Link href="/docs/installation/framework-guides">
            Frameworks Section
          </Link>{' '}
           of Tailwind CSS.
        </p>
      </div>
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightCode } = require('../../../../remark/utils')

  return {
    props: {
      code: steps.map(({ code }) => {
        let isArray = Array.isArray(code)
        code = isArray ? code : [code]
        code = code.map((code) => {
          if (code.lang && code.lang !== 'terminal') {
            return highlightCode(code.code, code.lang)
          }
          return code.code
        })
        return isArray ? code : code[0]
      }),
    },
  }
}

UsingMeteor.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Meteor',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
