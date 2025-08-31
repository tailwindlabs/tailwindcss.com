import { css, elixir, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/phoenix.react.svg";

export let tile: Tile = {
  title: "Phoenix",
  description: "A framework to build rich, interactive applications with Elixir.",
  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with Phoenix",
  description: "Setting up Tailwind CSS in a Phoenix project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Phoenix project if you don't have one set up already. You can follow their{" "}
        <a href="https://hexdocs.pm/phoenix/installation.html">installation guide</a> to get up and running.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix phx.new myproject
        cd myproject
      `,
    },
  },
  {
    title: "Install the Tailwind plugin",
    body: (
      <p>
        Add the Tailwind plugin to your dependencies and run <code>mix deps.get</code> to install it.
      </p>
    ),
    code: {
      name: "mix.exs",
      lang: "elixir",
      code: elixir`
        defp deps do
          [
            # …
            # [!code highlight:2]
            {:tailwind, "~> 0.3", runtime: Mix.env() == :dev},
          ]
        end
      `,
    },
  },
  {
    title: "Configure the Tailwind plugin",
    body: (
      <p>
        In your <code>config/config.exs</code> file you can set which version of Tailwind CSS you want to use and
        customize your asset paths.
      </p>
    ),
    code: {
      name: "config.exs",
      lang: "elixir",
      code: elixir`
        config :tailwind,
          # [!code highlight:2]
          version: "4.1.10",
          myproject: [
            args: ~w(
              # [!code highlight:3]
              --input=assets/css/app.css
              --output=priv/static/assets/app.css
            ),
            # [!code highlight:2]
            cd: Path.expand("..", __DIR__)
          ]
      `,
    },
  },
  {
    title: "Update your deployment script",
    body: (
      <p>
        Configure your <code>assets.deploy</code> alias to build your CSS on deployment.
      </p>
    ),
    code: {
      name: "mix.exs",
      lang: "elixir",
      code: elixir`
        defp aliases do
          [
            # …
            "assets.deploy": [
              # [!code highlight:2]
              "tailwind myproject --minify",
              "esbuild myproject --minify",
              "phx.digest"
            ]
          ]
        end
      `,
    },
  },
  {
    title: "Enable watcher in development",
    body: (
      <p>
        Add Tailwind to your list of watchers in your <code>./config/dev.exs</code> file.
      </p>
    ),
    code: {
      name: "dev.exs",
      lang: "elixir",
      code: elixir`
        watchers: [
          # Start the esbuild watcher by calling Esbuild.install_and_run(:default, args)
          esbuild: {Esbuild, :install_and_run, [:myproject, ~w(--sourcemap=inline --watch)]},
          # [!code highlight:2]
          tailwind: {Tailwind, :install_and_run, [:myproject, ~w(--watch)]}
        ]
      `,
    },
  },
  {
    title: "Install Tailwind CSS",
    body: <p>Run the install command to download the standalone Tailwind CLI.</p>,
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix tailwind.install
      `,
    },
  },
  {
    title: "Import Tailwind CSS",
    body: (
      <p>
        Add an <code>@import</code> to <code>./assets/css/app.css</code> that imports Tailwind CSS.
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
    title: "Remove the default CSS import",
    body: (
      <p>
        Remove the CSS import from <code>./assets/js/app.js</code>, as Tailwind is now handling this for you.
      </p>
    ),
    code: {
      name: "app.js",
      lang: "js",
      code: js`
        // [!code --:3]
        // Remove this line if you add your own CSS build pipeline (e.g postcss).
        import "../css/app.css"
      `,
    },
  },
  {
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>mix phx.server</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mix phx.server
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: "index.html.heex",
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
