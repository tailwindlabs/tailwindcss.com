import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/meteor.react.svg";

export let tile: Tile = {
  title: "Meteor",
  description: "The full stack JavaScript framework for developing cross-platform apps.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Meteor",
  description: "Setting up Tailwind CSS in a Meteor project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Meteor project if you don't have one set up already. The most common approach is to use{" "}
        <a href="https://docs.meteor.com/about/install.html">the Meteor CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx meteor create my-project
        cd my-project
      `,
    },
  },
  {
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
        npm install tailwindcss @tailwindcss/postcss postcss postcss-load-config
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
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> for Tailwind CSS to your <code>./client/main.css</code> file.
      </p>
    ),
    code: {
      name: "main.css",
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
    body: <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export const App = () => (
          // [!code highlight:4]
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        )
      `,
    },
  },
];
