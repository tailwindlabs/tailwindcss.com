import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/laravel.react.svg";

export let tile: Tile = {
  title: "Laravel",
  description: "PHP web application framework with expressive, elegant syntax.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Laravel",
  description: "Setting up Tailwind CSS in a Laravel project.",
};

export let tabs: Tab[] = [
  {
    slug: "vite",
    title: "Using Vite",
  },
  {
    slug: "mix",
    title: "Using Laravel Mix",
  },
];

export let steps: Step[] = [
  {
    tabs: ["vite"],
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Laravel project if you don’t have one set up already. The most common approach is to use{" "}
        <a href="https://laravel.com/docs#creating-an-application">the Laravel installer</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        laravel new my-project
        cd my-project
      `,
    },
  },

  {
    tabs: ["vite"],
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
    tabs: ["mix"],
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>@tailwindcss/postcss</code> and its peer dependencies via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "Configure Vite Plugin",
    body: (
      <p>
        Add the <code>@tailwindcss/vite</code> plugin to your Vite configuration.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from 'vite'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            // …
          ],
        })
      `,
    },
  },

  {
    tabs: ["mix"],
    title: "Add Tailwind to your Laravel Mix configuration",
    body: (
      <p>
        In your <code>webpack.mix.js</code> file, add <code>tailwindcss</code> as a PostCSS plugin.
      </p>
    ),
    code: {
      name: "webpack.mix.js",
      lang: "js",
      code: js`
        mix
          .js("resources/js/app.js", "public/js")
          .postCss("resources/css/app.css", "public/css", [
            // [!code highlight:2]
            require("@tailwindcss/postcss"),
          ]);
      `,
    },
  },

  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./resources/css/app.css</code> that imports Tailwind CSS. Additionally,
        tell Tailwind CSS to scan some directories for utilities.
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";

        @source '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php';
        @source '../../storage/framework/views/*.php';
        @source '../**/*.blade.php';
        @source '../**/*.js';
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run dev
      `,
    },
  },

  {
    tabs: ["mix"],
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
    tabs: ["vite"],
    title: "Start using Tailwind in your project",
    body: (
      <p>
        Make sure your compiled CSS is included in the <code>{"<head>"}</code> then start using Tailwind’s utility
        classes to style your content.
      </p>
    ),
    code: {
      name: "app.blade.php",
      lang: "blade",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            @vite('resources/css/app.css')
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
  {
    tabs: ["mix"],
    title: "Start using Tailwind in your project",
    body: (
      <p>
        Make sure your compiled CSS is included in the <code>{"<head>"}</code> then start using Tailwind’s utility
        classes to style your content.
      </p>
    ),
    code: {
      name: "app.blade.php",
      lang: "blade",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
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
