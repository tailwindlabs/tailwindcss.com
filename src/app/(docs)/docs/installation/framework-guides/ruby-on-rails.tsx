import { css, html, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/rails.react.svg";
import LogoDark from "@/docs/img/guides/rails-white.react.svg";

export let tile: Tile = {
  title: "Ruby on Rails",
  description: "Full-stack framework with all the tools needed to build amazing web apps.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Install Tailwind CSS with Ruby on Rails",
  description: "Setting up Tailwind CSS in Ruby on Rails v8+ project.",

  // NOTE: This intro is not used currently but is here for reference as we'll want to bring it back once the rails gem is updated for a stable v4 release.
  intro: (
    <div className="prose prose-slate dark:prose-dark relative z-10 mb-16 max-w-3xl">
      <p>
        The quickest way to start using Tailwind CSS in your Rails project is to use{" "}
        <a href="https://github.com/rails/tailwindcss-rails">Tailwind CSS for Rails</a> by running{" "}
        <code>rails new my-project --css tailwind</code>. This will automatically configure your Tailwind setup based on
        the official Rails example. If you'd like to configure Tailwind manually, continue with the rest of this guide.
      </p>
    </div>
  ),
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Rails project if you don't have one set up already. The most common approach is to use
        the <a href="https://guides.rubyonrails.org/command_line.html">Rails Command Line</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        rails new my-project
        cd my-project
      `,
    },
  },
  {
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install the <code>tailwindcss-rails</code> gem then run the install command to set up Tailwind CSS in your
        project.
      </p>
    ),

    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        bundle add tailwindcss-rails
        ./bin/rails tailwindcss:install
      `,
    },
  },
  {
    title: "Start your build process",
    body: (
      <p>
        Run your build process with <code>./bin/dev</code>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        ./bin/dev
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: <p>Start using Tailwind's utility classes to style your content.</p>,
    code: {
      name: "index.html.erb",
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
