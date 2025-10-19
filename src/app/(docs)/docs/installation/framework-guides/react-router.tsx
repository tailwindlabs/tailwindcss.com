import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/react-router.react.svg";
import LogoDark from "@/docs/img/guides/react-router-white.react.svg";

export let tile: Tile = {
  title: "React Router",
  description: "A standards‑focused router you can deploy anywhere.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Install Tailwind CSS with React Router",
  description: "Setting up Tailwind CSS in a React Router project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new React Router project if you don’t have one set up already. The most common approach is
        to use <a href="https://reactrouter.com/start/framework/installation">Create React Router</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-react-router@latest my-project
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
        import { reactRouter } from "@react-router/dev/vite";
        import { defineConfig } from "vite";
        import tsconfigPaths from "vite-tsconfig-paths";
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            reactRouter(),
            tsconfigPaths(),
          ],
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./app/app.css</code> that imports Tailwind CSS.
      </p>
    ),
    code: {
      name: "app.css",
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
      name: "home.tsx",
      lang: "tsx",
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
