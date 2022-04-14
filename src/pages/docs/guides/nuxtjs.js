import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new Nuxt.js project if you don’t have one set up already. The most
        common approach is to use{' '}
        <a href="https://v3.nuxtjs.org/getting-started/quick-start">nuxi init</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx nuxi init my-project\ncd my-project',
    },
  },
  {
    title: 'Install Tailwind CSS',
    body: () => (
        <p>
          Using npm install <code>@nuxtjs/tailwindcss</code>, and then run the init command to generate the{' '}
          <code>tailwind.config.js</code> file.
        </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D @nuxtjs/tailwindcss\nnpx tailwindcss init',
    },
  },
  {
    title: 'Add Tailwind to your Nuxt.js configuration',
    body: () => (
      <p>
        Add <code>@nuxtjs/tailwindcss</code> to the{' '}
        <code>buildModules</code> object of your <code>nuxt.config.js</code> file.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
>   buildModules : ['@nuxtjs/tailwindcss']
  }`,
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
  {
    title: 'Customize your Tailwind',
    body: () => (
      <p>
        You can customize the module behavior by using the <code>tailwindcss</code> property{' '}
        in your <code>nuxt.config.js</code> file.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
>   tailwindcss: {
>     // Options
>   }
  }`,
    },
  },
]

export default function UsingNextJS({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Nuxt.js"
      description="Setting up Tailwind CSS in a Nuxt.js project."
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

UsingNextJS.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Nuxt.js',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
