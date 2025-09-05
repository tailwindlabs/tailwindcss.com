import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/tanstack.react.svg";

export let tile: Tile = {
  title: "TanStack Start",
  description: "Full-stack React and Solid framework powered by TanStack Router.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with TanStack Start",
  description: "Setting up Tailwind CSS in a TanStack Start project.",
};

export let steps: Step[] = [
  {
    title: "Create project",
    body: (
      <p>
        Start by creating a new TanStack Start project by following the{" "}
        <a href="https://tanstack.com/start/latest/docs/framework/react/build-from-scratch">
          Build a Project from Scratch
        </a>{" "}
        guide on the TanStack Start website.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mkdir myApp
        cd myApp
        npm init -y
        # Follow instructions in the "Build a Project from Scratch" guide
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
        Add the <code>@tailwindcss/vite</code> plugin to your Vite plugins in your Vite config file.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from 'vite';
        import tsConfigPaths from 'vite-tsconfig-paths';
        import { tanstackStart } from '@tanstack/react-start/plugin/vite';
        // ...

        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            tsConfigPaths(),
            tanstackStart(),
          ],
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Create a <code>./src/styles/app.css</code> file and add an <code>@import</code> for Tailwind CSS.
      </p>
    ),
    code: {
      name: "src/styles/app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Import CSS file in the root component",
    body: (
      <p>Add the triple-slash directive on top of the file and import the CSS file with the right query parameter.</p>
    ),
    code: {
      name: "src/routes/__root.tsx",
      lang: "tsx",
      code: js`
        // [!code highlight:2]
        /// <reference types="vite/client" />
        import type { ReactNode } from 'react'
        import { createRootRoute, Outlet } from '@tanstack/react-router'
        import { Meta, Scripts } from '@tanstack/start'

        // [!code highlight:2]
        import appCss from '../styles/app.css?url'

        export const Route = createRootRoute({
          head: () => ({
            meta: [
              // ...
            ],
            // [!code highlight:7]
            links: [
              {
                rel: 'stylesheet',
                href: appCss,
              },
            ],
          }),
          component: RootComponent,
        })
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
    body: (
      <p>
        Start using Tailwind's utility classes to style your content while making sure to import the newly created CSS
        file.
      </p>
    ),
    code: {
      name: "src/routes/index.tsx",
      lang: "tsx",
      code: js`
        import { createFileRoute } from '@tanstack/react-router'
        export const Route = createFileRoute('/')({
          component: Home,
        })

        function Home() {
          return (
            // [!code highlight:4]
            <h1 class="text-3xl font-bold underline">
              Hello World!
            </h1>
          )
        }
      `,
    },
  },
];
