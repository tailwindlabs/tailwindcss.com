import { css, html, js, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/angular.react.svg";
import LogoDark from "@/docs/img/guides/angular-white.react.svg";

export let tile: Tile = {
  title: "Angular",
  description: "Platform for building mobile and desktop web applications.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Install Tailwind CSS with Angular",
  description: "Setting up Tailwind CSS in an Angular project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Angular project if you don’t have one set up already. The most common approach is to use{" "}
        <a href="https://angular.dev/tools/cli/setup-local">Angular CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ng new my-project --style css
        cd my-project
      `,
    },
  },
  {
    title: "Install Tailwind CSS automatically",
    body: (
      <p>
        If you're using a recent version of Angular, the easiest way to add Tailwind CSS is with{" "}
        <code>ng add tailwindcss</code>. This installs Tailwind and updates your project configuration for you. If
        you're using an older version of Angular or prefer to set things up yourself, skip this step and follow the
        manual steps below instead.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ng add tailwindcss
      `,
    },
  },
  {
    title: "Install Tailwind CSS manually",
    body: (
      <p>
        To install Tailwind CSS manually, install <code>@tailwindcss/postcss</code> and its peer dependencies via
        npm.
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
    title: "Configure PostCSS Plugins",
    body: (
      <p>
        Create a <code>.postcssrc.json</code> file in the root of your project and add the{" "}
        <code>@tailwindcss/postcss</code> plugin to your PostCSS configuration.
      </p>
    ),
    code: {
      name: ".postcssrc.json",
      lang: "js",
      code: js`
        {
          "plugins": {
            // [!code highlight:2]
            "@tailwindcss/postcss": {}
          }
        }
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
      name: "styles.css",
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
        Run your build process with <code>ng serve</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ng serve
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: "app.component.html",
      lang: "html",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>
      `,
    },
  },
];
