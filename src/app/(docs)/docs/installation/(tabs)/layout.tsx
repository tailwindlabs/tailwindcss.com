import { Metadata } from "next";
import { TabBar } from "@/components/installation-tabs";

export const metadata: Metadata = {
  title: {
    template: "%s - Tailwind CSS",
    default: "Installation",
  },
  openGraph: {
    type: "article",
    title: {
      template: "%s - Installation",
      default: "Installation",
    },
  },
};

const tabs = {
  "Using Vite": "/docs/installation/using-vite",
  "Using PostCSS": "/docs/installation/using-postcss",
  "Tailwind CLI": "/docs/installation/tailwind-cli",
  "Framework Guides": "/docs/installation/framework-guides",
  "Play CDN": "/docs/installation/play-cdn",
};

const readNext = [
  {
    title: "Styling with utility classes",
    href: "/docs/styling-with-utility-classes",
    body: (
      <p>Using a utility-first workflow to build complex components from a constrained set of primitive utilities.</p>
    ),
    // icon: {
    //   className: "dark:bg-indigo-500 dark:highlight-white/20",
    //   // light: require("@/img/icons/home/utility-first.png").default.src,
    //   // dark: require("@/img/icons/home/dark/utility-first.png").default.src,
    // },
    icon: require("@/components/home/icons/css-grid-icon").default,
  },
  {
    title: "Responsive Design",
    href: "/docs/responsive-design",
    body: <p>Build fully responsive user interfaces that adapt to any screen size using responsive modifiers.</p>,
    icon: {
      className: "dark:bg-indigo-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/mobile-first.png").default.src,
      // dark: require("@/img/icons/home/dark/mobile-first.png").default.src,
    },
  },
  {
    title: "Hover, Focus & Other States",
    href: "/docs/hover-focus-and-other-states",
    body: <p>Style elements in interactive states like hover, focus, and more using conditional modifiers.</p>,
    icon: {
      className: "dark:bg-blue-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/state-variants.png").default.src,
      // dark: require("@/img/icons/home/dark/state-variants.png").default.src,
    },
  },
  {
    title: "Dark Mode",
    href: "/docs/dark-mode",
    body: <p>Optimize your site for dark mode directly in your HTML using the dark mode modifier.</p>,
    icon: {
      className: "dark:bg-slate-600 dark:highlight-white/20",
      // light: require("@/img/icons/home/dark-mode.png").default.src,
      // dark: require("@/img/icons/home/dark/dark-mode.png").default.src,
    },
  },
  {
    title: "Reusing Styles",
    href: "/docs/reusing-styles",
    body: <p>Manage duplication and keep your projects maintainable by creating reusable abstractions.</p>,
    icon: {
      className: "dark:bg-sky-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/component-driven.png").default.src,
      // dark: require("@/img/icons/home/dark/component-driven.png").default.src,
    },
  },
  {
    title: "Customizing the Framework",
    href: "/docs/adding-custom-styles",
    body: <p>Customize the framework to match your brand and extend it with your own custom styles.</p>,
    icon: {
      className: "dark:bg-pink-500 dark:highlight-white/30",
      // light: require("@/img/icons/home/customization.png").default.src,
      // dark: require("@/img/icons/home/dark/customization.png").default.src,
    },
  },
];

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div className="isolate mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 pt-10 md:pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6">
          <p
            data-section="true"
            className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
          >
            Installation
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            Get started with Tailwind CSS
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
            Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for
            class names, generating the corresponding styles and then writing them to a static CSS file.
          </p>
          <p className="mt-4 text-base/7 text-gray-700 dark:text-gray-300">
            It's fast, flexible, and reliable — with zero-runtime.
          </p>

          <div className="mt-10" data-content="true">
            <section className="relative mb-16">
              <div className="relative z-10">
                <h2
                  data-docsearch-ignore
                  className="mb-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white"
                >
                  Installation
                </h2>
                <TabBar
                  tabs={Object.entries(tabs).map(([title, url]) => ({
                    title,
                    url,
                  }))}
                />
              </div>
              {children}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
