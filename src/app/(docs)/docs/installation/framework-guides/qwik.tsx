import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/qwik.react.svg";

export let tile: Tile = {
  title: "Qwik",
  description: "Build instantly-interactive web apps without effort.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Qwik",
  description: "Setting up Tailwind CSS in an Qwik project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Qwik project if you don't have one set up already. The most common approach is to use{" "}
        <a href="https://qwik.dev/docs/getting-started/#create-an-app-using-the-cli">Create Qwik</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create qwik@latest empty my-project
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
        import { qwikVite } from "@builder.io/qwik/optimizer";
        import { qwikCity } from "@builder.io/qwik-city/vite";
        // …

        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig(({ command, mode }): UserConfig => {
          return {
            plugins: [
              // [!code highlight:2]
              tailwindcss(),
              qwikCity(),
              qwikVite(),
              tsconfigPaths(),
            ],

            // …
          }
        })
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./src/global.css</code> that imports Tailwind CSS.
      </p>
    ),
    code: {
      name: "global.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
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
      code: shell`
        npm run dev
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: "index.tsx",
      lang: "tsx",
      code: js`
        import { component$ } from '@builder.io/qwik'

        export default component$(() => {
          return (
            // [!code highlight:4]
            <h1 class="text-3xl font-bold underline">
              Hello World!
            </h1>
          )
        })
      `,
    },
  },
];
