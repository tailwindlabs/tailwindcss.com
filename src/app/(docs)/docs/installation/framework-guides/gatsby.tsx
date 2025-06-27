import { astro, css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/gatsby.react.svg";

export let tile: Tile = {
  title: "Gatsby",
  description: "Framework for building static sites with React and GraphQL.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Gatsby",
  description: "Setting up Tailwind CSS in a Gatsby project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Gatsby project if you don’t have one set up already. The most common approach is to use{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli">Gatsby CLI</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        gatsby new my-project
        cd my-project
      `,
    },
  },
  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Using npm, install <code>@tailwindcss/postcss</code>, its peer dependencies, and{" "}
        <code>gatsby-plugin-postcss</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install @tailwindcss/postcss tailwindcss postcss gatsby-plugin-postcss
      `,
    },
  },
  {
    title: "Enable the Gatsby PostCSS plugin",
    body: (
      <p>
        In your <code>gatsby-config.js</code> file, enable <code>gatsby-plugin-postcss</code>. See{" "}
        <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/">the plugin's documentation</a> for more
        information.
      </p>
    ),
    code: {
      name: "gatsby-config.js",
      lang: "js",
      code: js`
        module.exports = {
          plugins: [
            // [!code highlight:2]
            'gatsby-plugin-postcss',
            // ...
          ],
        }
      `,
    },
  },
  {
    title: "Configure PostCSS Plugins",
    body: (
      <p>
        Create a <code>postcss.config.js</code> file in the root of your project and add the{" "}
        <code>@tailwindcss/postcss</code> plugin to your PostCSS configuration.
      </p>
    ),
    code: {
      name: "postcss.config.js",
      lang: "js",
      code: js`
        module.exports = {
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
        Create a <code>./src/styles/global.css</code> file and add an <code>@import</code> for Tailwind CSS.
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
    title: "Import the CSS file",
    body: (
      <p>
        Create a <code>gatsby-browser.js</code> file at the root of your project if it doesn’t already exist, and import
        your newly-created <code>./src/styles/global.css</code> file.
      </p>
    ),
    code: {
      name: "gatsby-browser.js",
      lang: "js",
      code: js`
        import './src/styles/global.css';
      `,
    },
  },
  {
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>gatsby develop</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        gatsby develop
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: "index.js",
      lang: "js",
      code: js`
        export default function IndexPage() {
          return (
            <Layout>
              /* [!code highlight:4] */
              <h1 className="text-3xl font-bold underline">
                Hello world!
              </h1>
            </Layout>
          )
        }
      `,
    },
  },
];
