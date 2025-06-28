import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installing Tailwind CSS with Vite",
  description:
    "Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.",
  openGraph: {
    type: "article",
    title: "Installing with Vite",
    description: "Integrate Tailwind CSS with frameworks like Laravel, SvelteKit, React Router, and SolidJS.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/using-vite",
    url: "https://tailwindcss.com/docs/installation/using-vite",
  },
};

const steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use{" "}
        <a href="https://vite.dev/guide/#scaffolding-your-first-vite-project">Create Vite</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm create vite@latest my-project
        cd my-project
      `,
    },
  },
  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>tailwindcss</code> and <code>@tailwindcss/vite</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
  {
    title: "Configure the Vite plugin",
    body: (
      <p>
        Add the <code>@tailwindcss/vite</code> plugin to your Vite configuration.
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "js",
      code: dedent`
        import { defineConfig } from 'vite'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
          ],
        })
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to your CSS file that imports Tailwind CSS.
      </p>
    ),
    code: {
      name: "CSS",
      lang: "css",
      code: dedent`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>npm run dev</code> or whatever command is configured in your{" "}
        <code>package.json</code> file.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm run dev
      `,
    },
  },
  {
    title: "Start using Tailwind in your HTML",
    body: (
      <p>
        Make sure your compiled CSS is included in the <code>{"<head>"}</code>{" "}
        <em>(your framework might handle this for you)</em>, then start using Tailwind’s utility classes to style your
        content.
      </p>
    ),
    code: {
      name: "HTML",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="/src/style.css" rel="stylesheet">
        </head>
        <body>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </body>
        </html>
      `,
    },
  },
];

export default function Page() {
  return (
    <>
      <div id="content-wrapper" className="prose relative z-10 mb-10 max-w-3xl" data-content="true">
        <h3 data-title="true" className="sr-only">
          Installing Tailwind CSS as a Vite plugin
        </h3>
        <p>
          Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like
          Laravel, SvelteKit, React Router, Nuxt, and SolidJS.
        </p>
      </div>
      <Steps steps={steps} />
      <div className="my-4 md:my-16">
        <Cta label="Explore our framework guides" href="/docs/installation/framework-guides">
          <strong className="font-semibold text-gray-950 dark:text-white">Are you stuck?</strong> Setting up Tailwind
          with Vite can be a bit different across different build tools. Check our framework guides to see if we have
          more specific instructions for your particular setup.
        </Cta>
      </div>
    </>
  );
}
