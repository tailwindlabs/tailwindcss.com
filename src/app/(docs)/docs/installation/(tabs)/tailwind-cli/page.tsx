import dedent from "dedent";
import Link from "next/link";
import { Metadata } from "next";
import { type Step, Steps } from "@/components/installation-steps";

export const metadata: Metadata = {
  title: "Tailwind CLI",
  description:
    "The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool.",
  openGraph: {
    type: "article",
    title: "Tailwind CLI",
    description: "The simplest and fastest way to get up and running with Tailwind CSS from scratch.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/tailwind-cli",
    url: "https://tailwindcss.com/docs/installation/tailwind-cli",
  },
};

const steps: Step[] = [
  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>tailwindcss</code> and <code>@tailwindcss/cli</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npm install tailwindcss @tailwindcss/cli",
    },
  },
  {
    title: "Import Tailwind in your CSS",
    body: (
      <p>
        Add the <code>@import "tailwindcss";</code> import to your main CSS file.
      </p>
    ),
    code: {
      name: "src/input.css",
      lang: "css",
      code: '@import "tailwindcss";',
    },
  },
  {
    title: "Start the Tailwind CLI build process",
    body: <p>Run the CLI tool to scan your source files for classes and build your CSS.</p>,
    code: {
      name: "Terminal",
      lang: "shell",
      code: "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch",
    },
  },
  {
    title: "Start using Tailwind in your HTML",
    body: (
      <p>
        Add your compiled CSS file to the <code>{"<head>"}</code> and start using Tailwind’s utility classes to style
        your content.
      </p>
    ),
    code: {
      name: "src/index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="./output.css" rel="stylesheet">
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
        <h3 className="sr-only" data-title="true">
          Installing Tailwind CLI
        </h3>
        <p>
          The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI
          tool. The CLI is also available as a{" "}
          <Link href="https://github.com/tailwindlabs/tailwindcss/releases/latest">standalone executable</Link> if you
          want to use it without installing Node.js.
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
