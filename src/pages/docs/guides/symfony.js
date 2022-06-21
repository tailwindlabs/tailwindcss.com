import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new Symfony project if you don’t have one set up already. The most
        common approach is to use{' '}
        <a href="https://symfony.com/doc/current/setup.html#creating-symfony-applications">the Symfony Installer</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'symfony new my_project_directory --webapp\ncd my_project_directory',
    },
  },
  {
    title: 'Install Webpack Encore',
    body: () => (
      <p>
        Install <code>Webpack Encore</code> in a Symfony application.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'composer require symfony/webpack-encore-bundle\nnpm install',
    },
  },
  {
    title: 'Install Tailwind CSS',
    body: () => (
      <p>
        Install <code>tailwindcss</code> and its peer dependencies via npm, and create your{' '}
        <code>tailwind.config.js</code> file.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer postcss-loader\nnpx tailwindcss init',
    },
  },
  {
    title: 'Adding plugins to your PostCSS configuration',
    body: () => (
      <p>
        Create <code>postcss.config.js</code> file and add the plugins.
      </p>
    ),
    code: {
      name: 'postcss.config.js',
      lang: 'js',
      code: `  module.exports = {
>   plugins: {
>     tailwindcss: {},
>     autoprefixer: {},
>   }
  };`,
    },
  },
  {
    title: 'Enable PostCSSLoader in your Webpack Encore configuration.',
    body: () => (
      <p>
        In your <code>webpack.config.js</code> file, add its lines.
      </p>
    ),
    code: {
      name: 'webpack.config.js',
      lang: 'js',
      code: `  const Encore = require('@symfony/webpack-encore');

  if (!Encore.isRuntimeEnvironmentConfigured()) {
      Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
  }

  Encore

      ...

>     .enablePostCssLoader((options) => {
>         options.postcssOptions = {
>             config: './postcss.config.js'
>         };
>     })

  ;

  module.exports = Encore.getWebpackConfig();`,
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
>     "./assets/**/*.js",
>     "./src/**/*.php",
>     "./templates/**/*.html.twig"
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
        <code>./assets/styles/app.css</code> file.
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
        Run your build process with <code>npm run watch</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run watch',
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
      name: 'base.html.twig',
      lang: 'html',
      code: `  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>{% block title %}Welcome!{% endblock %}</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⚫️</text></svg>">
    {# Run \`composer require symfony/webpack-encore-bundle\` to start using Symfony UX #}
    {% block stylesheets %}
        {{ encore_entry_link_tags('app') }}
    {% endblock %}

    {% block javascripts %}
        {{ encore_entry_script_tags('app') }}
    {% endblock %}
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  {% block body %}{% endblock %}
  </body>
  </html>`,
    },
  },
]

export default function UsingSymfony({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Symfony"
      description="Setting up Tailwind CSS in a Symfony project."
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

UsingSymfony.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with Symfony',
    section: 'Installation',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
