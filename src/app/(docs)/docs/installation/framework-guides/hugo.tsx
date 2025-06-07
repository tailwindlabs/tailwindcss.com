import { css, html, Page, shell, Step, Tile, yaml } from "./utils";
import Logo from "@/docs/img/guides/hugo.react.svg";

export let tile: Tile = {
  title: "Hugo",
  description: "Static site generator written in Go.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Hugo",
  description: "Setting up Tailwind CSS in a Hugo project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Hugo project if you don't have one set up already.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        hugo new site --format yaml my-site
        cd my-site
      `,
    },
  },
  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install the Tailwind CSS CLI v4.1 or later.
      </p>
    ),

    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install --save-dev tailwindcss @tailwindcss/cli
      `,
    },
  },
  {
    title: "Configure build parameters",
    body: (
      <p>
        Add these build parameters to your site configuration.
      </p>
    ),
    code: {
      name: "hugo.yaml",
      lang: "yaml",
      code: yaml`
        build:
          buildStats:
            enable: true
          cachebusters:
          - source: assets/notwatching/hugo_stats\.json
            target: css
          - source: (postcss|tailwind)\.config\.js
            target: css
        module:
          mounts:
          - source: assets
            target: assets
          - disableWatch: true
            source: hugo_stats.json
            target: assets/notwatching/hugo_stats.json
      `,
    },
  },
  {
    title: "Create CSS entry file",
    body: <p>If you want Tailwind CSS to ignore your `hugo_stats.json`, list it in your `.gitignore` file.</p>,
    code: {
      name: "assets/css/main.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
        @source "hugo_stats.json";
      `,
    },
  },
  {
    title: "Create partial template",
    body: <p>Create a partial template to process the CSS with the Tailwind CSS CLI.</p>,
    code: {
      name: "layouts/_partials/css.html",
      lang: "html",
      code: html`
        {{ with (templates.Defer (dict "key" "global")) }}
          {{ with resources.Get "css/main.css" }}
            {{ $opts := dict "minify" (not hugo.IsDevelopment) }}
            {{ with . | css.TailwindCSS $opts }}
              {{ if hugo.IsDevelopment }}
                <link rel="stylesheet" href="{{ .RelPermalink }}">
              {{ else }}
                {{ with . | fingerprint }}
                  <link rel="stylesheet" href="{{ .RelPermalink }}" integrity="{{ .Data.Integrity }}" crossorigin="anonymous">
                {{ end }}
              {{ end }}
            {{ end }}
          {{ end }}
        {{ end }}
      `,
    },
  },
  {
    title: "Start your build process",
    body: (
      <p>
        Start the preview of your site.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        hugo server -M
      `,
    },
  },
  {
    title: "Start using Tailwind in your Hugo project",
    body: (
      <p>
        Add the partial template to the <code>{"<head>"}</code> of your base template and start using Tailwind’s utility classes to style the
        content of your templates and pages.
      </p>
    ),
    code: {
      name: "layouts/all.html",
      lang: "html",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            {{ partialCached "css.html" . }}
          </head>
          <body>
            <!-- [!code highlight:4] -->
            <h1 class="text-3xl font-bold underline">
              <!-- prettier-ignore -->
              Hello world!
            </h1>
          </body>
        </html>
      `,
    },
  },
];
