import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Install the Copper CLI',
    body: () => (
      <p>
        Start by installing <code>copper</code> &amp; <code>wire</code> if you haven't done so
        already.
        <br />
        Check out their{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.gocopper.dev/getting-started"
        >
          getting started guide
        </a>{' '}
        if you run into any issues.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'go install github.com/gocopper/cli/cmd/copper@v1\ngo install github.com/google/wire/cmd/wire@latest',
    },
  },
  {
    title: 'Create your project',
    body: () => (
      <p>
        Create a new <code>copper</code> project. The easiest way to use <code>tailwindcss</code> is
        to create the project with
        <br />
        <code>-frontend=go:tailwind</code>. It will setup Tailwind out-of-the-box for you.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'copper create -frontend=go:tailwind github.com/nasa/starship',
    },
  },
  {
    title: 'Run the app server',
    body: () => (
      <p>
        Once the project is created, <code>cd</code> into the project directory and use the{' '}
        <code>copper</code> CLI to start the app server.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'cd starship\ncopper run -watch',
    },
  },
  {
    title: 'Run the Tailwind server',
    body: () => <p>In a separate terminal, run the Tailwind server.</p>,
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'cd starship/web\nnpm run dev',
    },
  },
  {
    title: 'Start using Tailwind in your project',
    body: () => (
      <p>
        Open{' '}
        <a target="_blank" rel="noopener noreferrer" href="http://localhost:5901">
          the welcome page
        </a>
        , styled using <code>tailwindcss</code>. Edit the source code in{' '}
        <code>web/src/pages/index.html</code>.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `{{ define "content" }}
  <div class="h-screen text-center bg-stone-100">
    <img src="/static/logo.svg" alt="Copper Logo" class="pt-20 mx-auto" />
      <h1 class="text-4xl font-bold">Hello, Copper</h1>
  </div>
{{ end }}`,
    },
  },
]

export default function UsingCopper({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Copper"
      description="Setting up Tailwind CSS in a Copper project."
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

UsingCopper.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Copper',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
