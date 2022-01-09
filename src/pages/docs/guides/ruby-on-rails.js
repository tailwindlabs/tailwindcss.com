import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <>
        <p>
          Start by creating a new Rails project if you don't have one set up already. The most
          common approach is to use the{' '}
          <a href="https://guides.rubyonrails.org/command_line.html">Rails Command Line</a>{' '}
        </p>

        <p>
          If you are running Rails v7+, you can setup tailwind by passing a CSS flag flag when
          creating a new project <code>rails new my_app --css tailwind </code>.
        </p>
      </>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'rails new my_app\ncd my_app',
    },
  },
  {
    title: 'Add CSS Bundling for Rails Gem to your Gemfile',
    body: () => (
      <p>
        Add the <a href="https://github.com/rails/cssbundling-rails">cssbundling-rails</a> gem to
        your Gemfile.
      </p>
    ),
    code: {
      name: 'Gemfile',
      lang: 'ruby',
      code: `gem "cssbundling-rails"`,
    },
  },
  {
    title: 'Install the gem',
    body: () => <p>Install the gem using bundler</p>,
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: './bin/bundle install',
    },
  },
  {
    title: 'Install Tailwind',
    body: () => (
      <p>
        Install Tailwind on your Rails app and configure it to bundle and process your CSS. The{' '}
        <code>./bin/rails css:install:tailwind</code> command will install <code>tailwindcss</code>{' '}
        and its peer dependencies. Furthermore, it will also add the CSS build script to{' '}
        <code>package.json</code>
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: './bin/rails css:install:tailwind',
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
      code: `  module.exports = {
>   content: [
>     "./app/views/**/*.html.erb",
>     "./app/helpers/**/*.rb",
>     "./app/javascript/**/*.js",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: 'Add Tailwind directives to your CSS',
    body: () => (
      <p>
        Add the <code>@tailwind</code> directives for each of Tailwind's layers to your{' '}
        <code>./app/assets/stylesheets/application.tailwind.css</code> file.
      </p>
    ),
    code: {
      name: 'application.tailwind.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Link the CSS file',
    body: () => (
      <p>
        Link the CSS build <code>./app/assets/builds/application.css</code> file in your layout.
      </p>
    ),
    code: {
      name: 'layouts/application.html.erb',
      lang: 'html',
      code: `  <head>
    <title>Title</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
>   <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
  </head>`,
    },
  },
  {
    title: 'Start your build process',
    body: () => (
      <p>
        Run your build process with <code>.bin/dev</code>
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: './bin/dev',
    },
  },
  {
    title: 'Start using Tailwind in your project',
    body: () => <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: 'index.html.erb',
      lang: 'html',
      code: `  <div>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </div>`,
    },
  },
]

export default function UsingRails({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Ruby on Rails"
      description="Setting up Tailwind CSS in Ruby on Rails v6+ project."
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

UsingRails.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Ruby on Rails',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
