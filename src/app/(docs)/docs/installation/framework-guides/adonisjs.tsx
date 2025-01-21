import { css, js, shell, html, type Page, type Step, type Tile } from "./utils";
import Logo from "@/docs/img/guides/adonis.react.svg";
import LogoDark from "@/docs/img/guides/adonis-white.react.svg";

export let tile: Tile = {
  title: "AdonisJS",
  description: "A fully featured web framework for Node.js.",

  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Install Tailwind CSS with AdonisJS",
  description: "Setting up Tailwind CSS in an AdonisJS project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new AdonisJS project if you don’t have one set up already. The most common approach is to
        use <a href="https://docs.adonisjs.com/guides/getting-started/installation">Create AdonisJS</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm init adonisjs@latest my-project -- --kit=web
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
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from 'vite'
        import adonisjs from '@adonisjs/vite/client'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            adonisjs({
              // …
            }),
          ],
        })
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./resources/css/app.css</code> that imports Tailwind CSS's styles.
        Additionally, tell Tailwind CSS to scan your <code>resources/views</code> directory for utilities.
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
        @source "../views";
      `,
    },
  },
  {
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npm run dev",
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
      name: "home.edge",
      lang: "edge",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            @vite(['resources/css/app.css', 'resources/js/app.js'])
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
