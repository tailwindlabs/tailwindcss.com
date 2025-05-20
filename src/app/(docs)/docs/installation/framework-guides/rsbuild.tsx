import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/rsbuild.react.svg";

export let tile: Tile = {
  title: "Rsbuild",
  description: "The Rspack Powered Build Tool.",
  Logo
};

export let page: Page = {
  title: "Install Tailwind CSS with Rsbuild",
  description: "Setting up Tailwind CSS in a Rsbuild project.",
};

export let tabs: Tab[] = [
  {
    slug: "react",
    title: "Using React",
  },
  {
    slug: "vue",
    title: "Using Vue",
  },
];

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Rsbuild project if you don’t have one set up already. The most common approach is to use{" "}
        <a href="https://rsbuild.dev/guide/start/quick-start#creating-an-rsbuild-project">Rsbuild CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create rsbuild@latest
      `,
    },
  },

  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>@tailwindcss/postcss</code> and its peer dependencies.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm add tailwindcss @tailwindcss/postcss -D
      `,
    },
  },
  {
    title: "Enable PostCSS support",
    body: (
      <p>
        In your <code>rsbuild.config.js</code> file, enable the PostCSS loader. See{" "}
        <a href="https://rsbuild.dev/guide/basic/tailwindcss">the documentation</a> for more information.
      </p>
    ),
    code: {
      name: "rsbuild.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from '@rsbuild/core'
        import tailwindCssPostcss from '@tailwindcss/postcss'
        export default defineConfig({
          tools: {
            postcss: {
              postcssOptions: {
                plugins: [tailwindCssPostcss()],
              },
            },
          }
        })
      `,
    },
  },
  {
    tabs: ["react"],
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./src/index.css</code> that imports Tailwind CSS.
      </p>
    ),
    code: {
      name: "index.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    tabs: ["vue"],
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./src/style.css</code> that imports Tailwind CSS.
      </p>
    ),
    code: {
      name: "style.css",
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
    tabs: ["react"],
    title: "Start using Tailwind in your project",
    body: <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export default function App() {
          return (
            // [!code highlight:4]
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
  {
    tabs: ["vue"],
    title: "Start using Tailwind in your project",
    body: <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: "App.vue",
      lang: "vue",
      code: html`
        <template>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            <!-- prettier-ignore -->
            Hello world!
          </h1>
        </template>
      `,
    },
  },
];
