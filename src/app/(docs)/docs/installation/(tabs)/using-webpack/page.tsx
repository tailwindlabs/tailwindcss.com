import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installing Tailwind CSS with webpack",
  description:
    "Installing Tailwind CSS as a webpack loader is the most seamless way to integrate it with webpack-based projects.",
  openGraph: {
    type: "article",
    title: "Installing with webpack",
    description: "Integrate Tailwind CSS as a webpack loader.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/using-webpack",
    url: "https://tailwindcss.com/docs/installation/using-webpack",
  },
};

const steps: Step[] = [
  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>tailwindcss</code>, <code>@tailwindcss/webpack</code>, and other webpack dependencies via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install tailwindcss @tailwindcss/webpack mini-css-extract-plugin css-loader
      `,
    },
  },
  {
    title: "Configure webpack",
    body: (
      <p>
        Add <code>@tailwindcss/webpack</code> as a loader in your <code>webpack.config.js</code> file, along with{" "}
        <code>css-loader</code> and <code>MiniCssExtractPlugin</code> for extracting your CSS.
      </p>
    ),
    code: {
      name: "webpack.config.js",
      lang: "js",
      code: dedent`
        const MiniCssExtractPlugin = require('mini-css-extract-plugin')

        module.exports = {
          plugins: [new MiniCssExtractPlugin()],
          module: {
            rules: [
              {
                test: /\\.css$/i,
                // [!code highlight:2]
                use: [MiniCssExtractPlugin.loader, 'css-loader', '@tailwindcss/webpack'],
              },
            ],
          },
        }
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
        Run your build process with <code>npx webpack serve</code> or whatever command is configured in your{" "}
        <code>package.json</code> file.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npx webpack serve
      `,
    },
  },
  {
    title: "Start using Tailwind in your HTML",
    body: (
      <p>
        Make sure your compiled CSS is included in the <code>{"<head>"}</code>, then start using Tailwind's utility
        classes to style your content.
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
          <link href="/dist/main.css" rel="stylesheet">
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
          Installing Tailwind CSS as a webpack loader
        </h3>
        <p>
          Installing Tailwind CSS as a webpack loader is the most seamless way to integrate it with webpack-based
          projects. It replaces the need for PostCSS in your webpack build pipeline.
        </p>
      </div>
      <Steps steps={steps} />
      <div className="my-4 md:my-16">
        <Cta label="Explore our framework guides" href="/docs/installation/framework-guides">
          <strong className="font-semibold text-gray-950 dark:text-white">Are you stuck?</strong> Setting up Tailwind
          with webpack can be a bit different across different build tools. Check our framework guides to see if we have
          more specific instructions for your particular setup.
        </Cta>
      </div>
    </>
  );
}
