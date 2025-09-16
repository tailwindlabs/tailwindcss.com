import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/tanstack.react.svg";
import LogoDark from "@/docs/img/guides/tanstack-white.react.svg";

export let tile: Tile = {
  title: "TanStack Start",
  description: "Full-stack Framework powered by TanStack Router for React and Solid.",
  Logo,
  LogoDark,
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
        Start by creating a new TanStack Start project if you don’t have one set up already. The most common approach is
        to use <a href="https://tanstack.com/start/latest/docs/framework/react/overview">Create Start App</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-start-app@latest my-project
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
        import { tanstackStart } from '@tanstack/react-start/plugin/vite';
        import { defineConfig } from 'vite';
        import tsConfigPaths from 'vite-tsconfig-paths';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss()
            tanstackStart(),
            tsConfigPaths(),
          ]
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./src/styles.css</code> that imports Tailwind CSS.
      </p>
    ),
    code: {
      name: "src/styles.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Import the CSS file in your root route",
    body: (
      <p>
        Import the CSS file in your <code>__root.tsx</code> file with the <code>?url</code> query.
      </p>
    ),
    code: {
      name: "src/routes/__root.tsx",
      lang: "tsx",
      code: js`
        // other imports...

        // [!code highlight:2]
        import appCss from '../styles.css?url'

        export const Route = createRootRoute({
          head: () => ({
            meta: [
              // your meta tags and site config
            ],
            // [!code highlight:2]
            links: [{ rel: 'stylesheet', href: appCss }],
            // other head config
          }),
          component: RootComponent,
        })
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: "src/routes/index.tsx",
      lang: "tsx",
      code: js`
        import { createFileRoute } from '@tanstack/react-router'

        export const Route = createFileRoute('/')({
          component: App,
        })

        function App() {
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
