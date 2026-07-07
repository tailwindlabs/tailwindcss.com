import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/eleventy-white.react.svg";

export let tile: Tile = {
  title: "Eleventy",
  description: "Eleventy is a simpler static site generator",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Eleventy",
  description: "Setting up Tailwind CSS in an Eleventy project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Eleventy project if you don’t have one set up already. The most common approach is outlined in their{" "}
        <a href="https://www.11ty.dev/docs/">getting started guide</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mkdir my-project
        cd my-project
        npm init -y
        npm pkg set type="module"
        npm install @11ty/eleventy
        mkdir src
        touch src/index.html
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
    title: "Install the Eleventy Vite Plugin",
    body: (
      <p>
        Install <code>@11ty/eleventy-plugin-vite</code> and its peer dependencies via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install @11ty/eleventy-plugin-vite
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Create <code>src/styles.css</code> file and add an <code>@import</code> for Tailwind CSS.
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
    title: "Configure Eleventy",
    body: (
      <p>
        Create a <code>eleventy.config.js</code> file in your project root, and add the <code>@11ty/eleventy-plugin-vite</code>{" "} and <code>@11ty/eleventy-plugin-vite</code>{" "}
        plugin. Include an <code>addPassthroughCopy</code> to copy your CSS to the output folder.
      </p>
    ),
    code: {
      name: "eleventy.config.js",
      lang: "js",
      code: js`
        import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
        import tailwindcss from '@tailwindcss/vite'

        export default (eleventyConfig) => {
          eleventyConfig.addPassthroughCopy("src/styles.css");

          eleventyConfig.addPlugin(EleventyVitePlugin, { 
            viteOptions: { 
              plugins: [ tailwindcss() ] 
            } 
          });
        };

        export const config = {
          dir: {
            input: "src",
          },
        };
      `,
    },
  },
 
  {
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>npx eleventy --serve</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx eleventy --serve
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: (
      <p>
        Add your CSS file to the <code>{"<head>"}</code> and start using Tailwind’s utility classes to style your
        content.
      </p>
    ),
    code: {
      name: "src/index.html",
      lang: "html",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <link href="./styles.css" type="text/css" rel="stylesheet" />
          </head>
          <body>
            <!-- [!code highlight:4] -->
            <h1 class="text-3xl font-bold underline  text-amber-500">
              <!-- prettier-ignore -->
              Hello world!
            </h1>
          </body>
        </html>
      `,
    },
  },
];
