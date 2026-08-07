import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/ember.react.svg";

export let tile: Tile = {
  title: "Ember.js",
  description: "A JavaScript framework for ambitious web developers.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Ember.js",
  description: "Setting up Tailwind CSS in an Ember.js project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Ember.js project if you don't have one set up already. The most common approach is
        outlined in the{" "}
        <a href="https://guides.emberjs.com/release/getting-started/quick-start/#toc_create-a-new-application">
          Ember.js Quick Start
        </a>
        . New Ember.js projects use Vite.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx ember-cli@latest new my-project --no-welcome
        cd my-project
      `,
    },
  },
  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>@tailwindcss/vite</code> and its peer dependencies via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
  {
    title: "Configure Vite Plugin",
    body: (
      <p>
        Add the <code>@tailwindcss/vite</code> plugin to your Vite configuration.
      </p>
    ),
    code: {
      name: "vite.config.mjs",
      lang: "js",
      code: js`
        import { defineConfig } from 'vite';
        import { extensions, classicEmberSupport, ember } from '@embroider/vite';
        import { babel } from '@rollup/plugin-babel';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            classicEmberSupport(),
            ember(),
            // extra plugins here
            babel({
              babelHelpers: 'runtime',
              extensions,
            }),
          ],
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./app/styles/app.css</code> that imports Tailwind CSS.
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Link the CSS file",
    body: (
      <p>
        In your <code>./index.html</code> file, replace the <code>@embroider/virtual/app.css</code> stylesheet link with
        a direct link to <code>./app/styles/app.css</code> so Vite processes it.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: html`
        {{content-for "head"}}

        <link integrity="" rel="stylesheet" href="/@embroider/virtual/vendor.css" />
        <!-- [!code --:2] -->
        <link integrity="" rel="stylesheet" href="/@embroider/virtual/app.css" />
        <!-- [!code ++:2] -->
        <link integrity="" rel="stylesheet" href="/app/styles/app.css" />

        {{content-for "head-footer"}}
      `,
    },
  },
  {
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>npm run start</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run start
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: <p>Start using Tailwind's utility classes to style your content.</p>,
    code: {
      name: "application.gjs",
      lang: "glimmer-js",
      code: js`
        import { pageTitle } from 'ember-page-title';

        <template>
          {{pageTitle "MyProject"}}

          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>

          {{outlet}}
        </template>
      `,
    },
  },
];
