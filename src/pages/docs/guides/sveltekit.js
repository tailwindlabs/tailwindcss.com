import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new SvelteKit project if you don’t have one set up already. The most common approach is to use this<a href="https://kit.svelte.dev/docs#introduction-getting-started">Getting Started with SvelteKit Introduction</a>. <small>Note: *Once SvelteKit is out of beta the <code>@next</code> will no longer be needed.</small>
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init svelte@next',
    },
  },
  {
    title: 'Install Tailwind CSS',
    body: () => (
      <p>
        <a href="https://github.com/svelte-add/svelte-add#readme">Svelte Add</a> is a community project to easily add integrations to Svelte apps. To add <a href="https://github.com/svelte-add/tailwindcss">TailwindCSS with svelte-add</a> run <code>npx svelte-add@latest tailwindcss</code> and run <code>npm i</code> to install the dependencies. This will automatically generate the <code>tailwind.config.cjs</code>, the <code>postcss.config.cjs</code>, and add preprocess to the <code>svelte.config.js</code>. It will also create an <code>src/app.css</code> file with the TailwindCSS imports and the <code>src/routes/__layout.svelte</code> file to import the CSS file that will wrap the application. <small>Note: *Once it is out of beta, the <code>@latest</code> will no longer be needed.</small>
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx svelte-add@latest tailwindcss',
    },
  }
]

export default function UsingSvelteKit({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with SvelteKit"
      description="Setting up Tailwind CSS in a SvelteKit project."
    >
      <div className="relative z-10 max-w-3xl mb-16 prose">
        <p>
          The quickest way to start using Tailwind CSS in your SvelteKit project is to use the <a href="https://kit.svelte.dev/docs#introduction-getting-started">SvelteKit Introduction Guide</a>. Then add <a href="https://github.com/svelte-add/tailwindcss">TailwindCSS with svelte-add</a> to automatically setup your project.
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

UsingNextJS.layoutProps = {
  meta: {
    title: 'Installation: Tailwind CSS with SvelteKit',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
