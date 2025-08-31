import { css, html, js, Page, shell, Step, Tile, twig } from "./utils";
import Logo from "@/docs/img/guides/symfony.react.svg";
import LogoDark from "@/docs/img/guides/symfony-white.react.svg";

export let tile: Tile = {
  title: "Symfony",
  description: "A PHP framework to create websites and web applications.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Install Tailwind CSS with Symfony",
  description: "Setting up Tailwind CSS in a Symfony project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Symfony project if you don’t have one set up already. The most common approach is to use{" "}
        <a href="https://symfony.com/download">the Symfony Installer</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        symfony new --webapp my-project
        cd my-project
      `,
    },
  },
  {
    title: "Install Webpack Encore",
    body: (
      <p>
        Install Webpack Encore, which handles building your assets. See{" "}
        <a href="https://symfony.com/doc/current/frontend.html">the documentation</a> for more information.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        composer remove symfony/ux-turbo symfony/asset-mapper symfony/stimulus-bundle
        composer require symfony/webpack-encore-bundle symfony/ux-turbo symfony/stimulus-bundle
      `,
    },
  },
  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Using npm, install <code>@tailwindcss/postcss</code> and its peer dependencies, as well as{" "}
        <code>postcss-loader</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
      `,
    },
  },
  {
    title: "Enable PostCSS support",
    body: (
      <p>
        In your <code>webpack.config.js</code> file, enable the PostCSS Loader. See{" "}
        <a href="https://symfony.com/doc/current/frontend/encore/postcss.html">the documentation</a> for more
        information.
      </p>
    ),
    code: {
      name: "webpack.config.js",
      lang: "js",
      code: js`
        Encore
          .enablePostCssLoader()
        ;
      `,
    },
  },
  {
    title: "Configure PostCSS Plugins",
    body: (
      <p>
        Create a <code>postcss.config.mjs</code> file in the root of your project and add the{" "}
        <code>@tailwindcss/postcss</code> plugin to your PostCSS configuration.
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: js`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        };
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./assets/styles/app.css</code> that imports Tailwind CSS and an{" "}
        <code>@source</code> that ignores the public dir to prevent recompile loops in watch mode.
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
        @source not "../../public";
      `,
    },
  },
  {
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>npm run watch</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run watch
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: (
      <p>
        Make sure your compiled CSS is included in the <code>{"<head>"}</code> then start using Tailwind’s utility
        classes to style your content.
      </p>
    ),
    code: {
      name: "base.html.twig",
      lang: "twig",
      code: twig`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <!-- [!code highlight:4] -->
            {% block stylesheets %}
              {{ encore_entry_link_tags('app') }}
            {% endblock %}
          </head>
          <body>
            <!-- [!code highlight:4] -->
            <h1 class="text-3xl font-bold underline">
              <!-- prettier-ignore -->
              Hello world!
            </h1>
          </body>
        </html>
      `,
    },
  },
];
