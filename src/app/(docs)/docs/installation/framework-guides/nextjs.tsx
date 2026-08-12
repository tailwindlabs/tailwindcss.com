import { css, js, shell, Page, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/nextjs.react.svg";
import LogoDark from "@/docs/img/guides/nextjs-white.react.svg";

export let tile: Tile = {
  title: "Next.js",
  description: "Full-featured React framework with great developer experience.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Install Tailwind CSS with Next.js",
  description: "Setting up Tailwind CSS in a Next.js project.",
};

export let tabs: Tab[] = [
  {
    slug: "webpack",
    title: "Using webpack",
  },
  {
    slug: "postcss",
    title: "Using PostCSS",
  },
];

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Next.js project if you don't have one set up already. The most common approach is to use{" "}
        <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-next-app@latest my-project --typescript --eslint --app
        cd my-project
      `,
    },
  },
  {
    tabs: ["postcss"],
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
    tabs: ["webpack"],
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>@tailwindcss/webpack</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/webpack
      `,
    },
  },
  {
    tabs: ["postcss"],
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
        const config = {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        };

        export default config;
      `,
    },
  },
  {
    tabs: ["webpack"],
    title: "Configure the webpack loader",
    body: (
      <p>
        Add the <code>@tailwindcss/webpack</code> loader to your <code>next.config.mjs</code> file.
      </p>
    ),
    code: {
      name: "next.config.mjs",
      lang: "js",
      code: js`
        /** @type {import('next').NextConfig} */
        const nextConfig = {
          // [!code highlight:9]
          webpack(config) {
            config.module.rules.push({
              test: /\.css$/i,
              use: ['@tailwindcss/webpack'],
            })
            return config
          },
        }

        export default nextConfig
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./app/globals.css</code> that imports Tailwind CSS.
      </p>
    ),
    code: {
      name: "globals.css",
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
    body: <p>Start using Tailwind's utility classes to style your content.</p>,
    code: {
      name: "page.tsx",
      lang: "jsx",
      code: js`
        export default function Home() {
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
];
