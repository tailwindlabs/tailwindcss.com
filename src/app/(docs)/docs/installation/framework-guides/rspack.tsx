import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/rspack.react.svg";

export let tile: Tile = {
  title: "Rspack",
  description: "A fast Rust-based web bundler.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Rspack",
  description: "Setting up Tailwind CSS in a Rspack project.",
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
        Start by creating a new Rspack project if you don’t have one set up already. The most common approach is to use{" "}
        <a href="https://rspack.dev/guide/start/quick-start#using-the-rspack-cli">Rspack CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create rspack@latest
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
        npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
      `,
    },
  },
  {
    title: "Enable PostCSS support",
    body: (
      <p>
        In your <code>rspack.config.js</code> file, enable the PostCSS loader. See{" "}
        <a href="https://rspack.dev/guide/tech/css#tailwind-css">the documentation</a> for more information.
      </p>
    ),
    code: {
      name: "rspack.config.ts",
      lang: "ts",
      code: js`
        export default defineConfig({
          // ...
          module: {
            rules: [
              // [!code highlight:6]
              {
                test: /\.css$/,
                use: ["postcss-loader"],
                type: "css",
              },
              // ...
            ],
          },
        }
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

// let tabs = [
//       {
//   {
//     name: "Using Vue",
//     href: "#vue",
//     steps: [
//       {
//         title: "Start your build process",
//         body: (
//           <p>
//             Run your build process with <code>npm run dev</code>.
//           </p>
//         ),
//         code: {
//           name: "Terminal",
//           lang: "shell",
//           code: "npm run dev",
//         },
//       },
//       {
//         title: "Start using Tailwind in your project",
//         body: (
//           <p>Start using Tailwind’s utility classes to style your content.</p>
//         ),
//         code: {
//           name: "App.vue",
//           lang: "html",
//           code: `  <template>
// >   <h1 class="text-3xl font-bold underline">
// >     Hello world!
// >   </h1>
//   </template>`,
//         },
//       },
//     ],
//   },
// ];
