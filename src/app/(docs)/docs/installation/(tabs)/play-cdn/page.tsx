import Link from "next/link";
import { Metadata } from "next";
import { Steps, type Step } from "@/components/installation-steps";
import dedent from "dedent";

export const metadata: Metadata = {
  title: "Play CDN",
  description: "Use the Play CDN to try Tailwind right in the browser without any build step.",
  openGraph: {
    type: "article",
    title: "Play CDN",
    description: "Try Tailwind CSS right in the browser without any build step.",
    images: "https://tailwindcss.com/api/og?path=/docs/installation/play-cdn",
    url: "https://tailwindcss.com/docs/installation/play-cdn",
  },
};

const steps: Step[] = [
  {
    title: "Add the Play CDN script to your HTML",
    body: (
      <p>
        Add the Play CDN script tag to the <code>&lt;head&gt;</code> of your HTML file, and start using Tailwind’s
        utility classes to style your content.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
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
  {
    title: "Try adding some custom CSS",
    body: (
      <p>
        Use <code>type="text/tailwindcss"</code> to add custom CSS that supports all of Tailwind's CSS features.
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            <!-- [!code highlight:6] -->
            <style type="text/tailwindcss">
              @theme {
                --color-clifford: #da373d;
              }
            </style>
          </head>
          <body>
            <!-- [!code word:text-clifford] -->
            <h1 class="text-3xl font-bold underline text-clifford">
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
          Using Play CDN
        </h3>
        <p>
          Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for
          development purposes only, and is not intended for production.
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
