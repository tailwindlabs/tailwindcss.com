import { css, js, html, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/svelte.react.svg";

export let tile: Tile = {
  title: "SvelteKit",
  description: "The fastest way to build apps of all sizes with Svelte.js.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with SvelteKit",
  description: "Setting up Tailwind CSS in a SvelteKit project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new SvelteKit project if you don't have one set up already. The most common approach is
        outlined in the <a href="https://svelte.dev/docs/kit/creating-a-project">SvelteKit</a> documentation.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx sv create my-project
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
        import { sveltekit } from '@sveltejs/kit/vite';
        import { defineConfig } from 'vite';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            sveltekit(),
          ],
        });
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Create a <code>./src/app.css</code> file and add an <code>@import</code> that imports Tailwind CSS.
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
    title: "Import the CSS file",
    body: (
      <p>
        Create a <code>./src/routes/+layout.svelte</code> file and import the newly-created <code>app.css</code> file.
      </p>
    ),
    code: {
      name: "+layout.svelte",
      lang: "svelte",
      code: html`
        <script>
          let { children } = $props();
          // [!code highlight:2]
          import "../app.css";
        </script>

        {@render children()}
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
        Start using Tailwind’s utility classes to style your content, making sure to import your Tailwind CSS theme for
        any <code>&lt;style&gt;</code> blocks that need to be processed by Tailwind.
      </p>
    ),
    code: {
      name: "+page.svelte",
      lang: "svelte",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>

        <style lang="postcss">
          /* [!code highlight:2] */
          @reference "tailwindcss";

          :global(html) {
            background-color: theme(--color-gray-100);
          }
        </style>
      `,
    },
  },
];
