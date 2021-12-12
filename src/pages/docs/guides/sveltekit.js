import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new SvelteKit project if you don’t have one set up already. The most
        common approach is to use this
        <a href="https://kit.svelte.dev/docs#introduction-getting-started">
          Getting Started with SvelteKit Introduction
        </a>
        .{' '}
        <small>
          Note: *Once SvelteKit is out of beta the <code>@next</code> will no longer be needed.
        </small>
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
        <a href="https://github.com/svelte-add/svelte-add#readme">Svelte Add</a> is a community
        project to easily add integrations to Svelte apps. To add{' '}
        <a href="https://github.com/svelte-add/tailwindcss">TailwindCSS with svelte-add</a> run{' '}
        <code>npx svelte-add@latest tailwindcss</code> and run <code>npm i</code> to install the
        dependencies. This will automatically generate the <code>tailwind.config.cjs</code>, the{' '}
        <code>postcss.config.cjs</code>, and add preprocess to the <code>svelte.config.js</code>. It
        will also create an <code>src/app.css</code> file with the Tailwind CSS imports and the{' '}
        <code>src/routes/__layout.svelte</code> file to import the CSS file that will wrap the
        application. Tailwind CSS is now setup and configured in your SvelteKit project. You are
        ready to start adding Tailwind CSS classes to your routes and components. Here are the base
        configurations, any of these can be edited to your configurations.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx svelte-add@latest tailwindcss',
    },
  },
  {
    title: 'svelte.config.js',
    body: () => (
      <p>
        Added preprocess to the <code>svelte.config.js</code> file.
      </p>
    ),
    code: {
      name: 'Javascript',
      lang: 'javascript',
      code: `
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
postcss: true
    })
  ],
  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};
export default config;     
      `,
    },
  },
  {
    title: 'tailwind.config.cjs',
    body: () => (
      <p>
        Generated <code>tailwind.config.cjs</code> with Svelte extentions and jit compiler. Add
        custom configurations the theme here.
      </p>
    ),
    code: {
      name: 'Javascript',
      lang: 'javascript',
      code: `const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
module.exports = config;     
      `,
    },
  },
  {
    title: 'postcss.config.cjs',
    body: () => (
      <p>
        Generated <code>postcss.config.cjs</code> with default Tailwind CSS configuration.
      </p>
    ),
    code: {
      name: 'Javascript',
      lang: 'javascript',
      code: `const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer(),
    !dev &&
    cssnano({
      preset: 'default'
    })
  ]
};
module.exports = config;   
      `,
    },
  },
  {
    title: 'src/app.css',
    body: () => (
      <p>
        Generated <code>src/app.css</code> with Tailwind CSS imports. Add any global styles to this
        file in PostCSS syntax.
      </p>
    ),
    code: {
      name: 'CSS',
      lang: 'css',
      code: `/* Write your global styles here, in PostCSS syntax */
@tailwind base;
@tailwind components;
@tailwind utilities;  
`,
    },
  },
  {
    title: 'src/routes/__layout.svelte',
    body: () => (
      <p>
        Generated <code>src/routes/__layout.svelte</code> with css file imported and wrapped around
        the application. Other layout components, like <code>Header</code> or <code>Footer</code>{' '}
        can be added to this file. The <code>{`</slot>`}</code> is where the other routes get
        inserted.
      </p>
    ),
    code: {
      name: 'Svelte',
      lang: 'html',
      code: `<script>
  import '../app.css';
</script>

<slot />  
`,
    },
  },
]

export default function UsingSvelteKit({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with SvelteKit"
      description="Setting up Tailwind CSS in a SvelteKit project."
    >
      <div className="relative z-10 max-w-3xl mb-16 prose">
        <p>
          The quickest way to start using Tailwind CSS in your SvelteKit project is to use the{' '}
          <a href="https://kit.svelte.dev/docs#introduction-getting-started">
            SvelteKit Introduction Guide
          </a>
          . Then add{' '}
          <a href="https://github.com/svelte-add/tailwindcss">Tailwind CSS with svelte-add</a> to
          automatically setup your project. That's it, it is that easy to get Tailwind CSS configured
          in a SvelteKit project!
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

UsingSvelteKit.layoutProps = {
  meta: {
    title: 'Installation: Tailwind CSS with SvelteKit',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
