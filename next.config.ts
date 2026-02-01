import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const nextConfig = {
  serverExternalPackages: ["@tailwindcss/node"],
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  outputFileTracingIncludes: {
    "/**/*": ["./src/docs/*.mdx"],
  },
  turbopack: {
    rules: {
      // Support import .svg as react components in dev builds
      "*.react.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  async redirects() {
    return [
      // Docs
      {
        source: "/docs",
        destination: "/docs/installation/using-vite",
        permanent: false,
      },
      {
        source: "/docs/installation",
        destination: "/docs/installation/using-vite",
        permanent: false,
      },
      {
        source: "/docs/utility-first",
        destination: "/docs/styling-with-utility-classes",
        permanent: false,
      },
      {
        source: "/docs/pseudo-class-variants",
        destination: "/docs/hover-focus-and-other-states",
        permanent: false,
      },
      {
        source: "/docs/reusing-styles",
        destination: "/docs/styling-with-utility-classes#managing-duplication",
        permanent: false,
      },
      {
        source: "/docs/breakpoints",
        destination: "/docs/responsive-design#using-custom-breakpoints",
        permanent: false,
      },
      {
        source: "/docs/screens",
        destination: "/docs/responsive-design#using-custom-breakpoints",
        permanent: false,
      },
      {
        source: "/docs/browser-support",
        destination: "/docs/compatibility#browser-support",
        permanent: false,
      },
      {
        source: "/docs/container",
        destination: "/docs/max-width",
        permanent: false,
      },
      {
        source: "/docs/typography-plugin",
        destination: "https://github.com/tailwindlabs/tailwindcss-typography",
        permanent: false,
      },
      {
        source: "/docs/ring-offset-width",
        destination: "https://v3.tailwindcss.com/docs/ring-offset-width",
        permanent: false,
      },
      {
        source: "/docs/upcoming-changes",
        destination: "https://v1.tailwindcss.com/docs/upcoming-changes",
        permanent: false,
      },
      {
        source: "/docs/configuring-variants",
        destination: "https://v2.tailwindcss.com/docs/configuring-variants",
        permanent: false,
      },
      {
        source: "/docs/optimizing-for-production",
        destination: "https://v3.tailwindcss.com/docs/optimizing-for-production",
        permanent: false,
      },
      {
        source: "/docs/plugins",
        destination: "/docs/adding-custom-styles#functional-utilities",
        permanent: false,
      },
      {
        source: "/docs/just-in-time-mode",
        destination: "https://v2.tailwindcss.com/docs/just-in-time-mode",
        permanent: false,
      },
      {
        source: "/docs/upgrading-to-v2",
        destination: "https://v2.tailwindcss.com/docs/upgrading-to-v2",
        permanent: false,
      },
      {
        source: "/docs/configuration",
        destination: "/docs/theme",
        permanent: false,
      },
      {
        source: "/docs/customizing-colors",
        destination: "/docs/colors",
        permanent: false,
      },
      {
        source: "/docs/box-shadow-color",
        destination: "/docs/box-shadow#setting-the-shadow-color",
        permanent: false,
      },
      {
        source: "/docs/gradient-color-stops",
        destination: "/docs/background-image#setting-gradient-color-stops",
        permanent: false,
      },
      {
        source: "/docs/text-color",
        destination: "/docs/color",
        permanent: false,
      },
      {
        source: "/docs/text-decoration",
        destination: "/docs/text-decoration-line",
        permanent: false,
      },
      {
        source: "/docs/whitespace",
        destination: "/docs/white-space",
        permanent: false,
      },
      {
        source: "/docs/size",
        destination: "/docs/width#setting-both-width-and-height",
        permanent: false,
      },
      {
        source: "/docs/ring-width",
        destination: "/docs/box-shadow#adding-a-ring",
        permanent: false,
      },
      {
        source: "/docs/ring-color",
        destination: "/docs/box-shadow#setting-the-ring-color",
        permanent: false,
      },

      {
        source: "/docs/content-configuration",
        destination: "/docs/detecting-classes-in-source-files",
        permanent: false,
      },
      {
        source: "/docs/customizing-spacing",
        destination: "/docs/theme",
        permanent: false,
      },
      {
        source: "/docs/divide-color",
        destination: "/docs/border-color#divider-between-children",
        permanent: false,
      },
      {
        source: "/docs/divide-style",
        destination: "/docs/border-style#setting-the-divider-style",
        permanent: false,
      },
      {
        source: "/docs/divide-width",
        destination: "/docs/border-width#between-children",
        permanent: false,
      },
      {
        source: "/docs/ring-color",
        destination: "/docs/box-shadow#setting-the-ring-color",
        permanent: false,
      },
      {
        source: "/docs/screen-readers",
        destination: "/docs/display#screen-reader-only",
        permanent: false,
      },
      {
        source: "/docs/screens",
        destination: "/docs/responsive-design#using-custom-breakpoints",
        permanent: false,
      },
      {
        source: "/docs/size",
        destination: "/docs/width#setting-both-width-and-height",
        permanent: false,
      },
      {
        source: "/docs/space",
        destination: "/docs/margin#adding-space-between-children",
        permanent: false,
      },
      {
        source: "/docs/text-decoration",
        destination: "/docs/text-decoration-line",
        permanent: false,
      },
      {
        source: "/docs/v4-beta",
        destination: "/docs",
        permanent: false,
      },
      {
        source: "/resources",
        destination: "http://v3.tailwindcss.com/resources",
        permanent: false,
      },
      {
        source: "/docs/using-with-preprocessors",
        destination: "http://v3.tailwindcss.com/docs/using-with-preprocessors",
        permanent: false,
      },
      {
        source: "/docs/intellisense",
        destination: "http://v3.tailwindcss.com/docs/intellisense",
        permanent: false,
      },
      {
        source: "/docs/presets",
        destination: "http://v3.tailwindcss.com/docs/presets",
        permanent: false,
      },
      {
        source: "/docs/ring-offset-color",
        destination: "http://v3.tailwindcss.com/docs/ring-offset-color",
        permanent: false,
      },

      // Filters
      {
        source: "/docs/blur",
        destination: "/docs/filter-blur",
        permanent: false,
      },
      {
        source: "/docs/brightness",
        destination: "/docs/filter-brightness",
        permanent: false,
      },
      {
        source: "/docs/contrast",
        destination: "/docs/filter-contrast",
        permanent: false,
      },
      {
        source: "/docs/drop-shadow",
        destination: "/docs/filter-drop-shadow",
        permanent: false,
      },
      {
        source: "/docs/grayscale",
        destination: "/docs/filter-grayscale",
        permanent: false,
      },
      {
        source: "/docs/hue-rotate",
        destination: "/docs/filter-hue-rotate",
        permanent: false,
      },
      {
        source: "/docs/invert",
        destination: "/docs/filter-invert",
        permanent: false,
      },
      {
        source: "/docs/saturate",
        destination: "/docs/filter-saturate",
        permanent: false,
      },
      {
        source: "/docs/sepia",
        destination: "/docs/filter-sepia",
        permanent: false,
      },

      // Backdrop Filters
      {
        source: "/docs/backdrop-blur",
        destination: "/docs/backdrop-filter-blur",
        permanent: false,
      },
      {
        source: "/docs/backdrop-brightness",
        destination: "/docs/backdrop-filter-brightness",
        permanent: false,
      },
      {
        source: "/docs/backdrop-contrast",
        destination: "/docs/backdrop-filter-contrast",
        permanent: false,
      },
      {
        source: "/docs/backdrop-grayscale",
        destination: "/docs/backdrop-filter-grayscale",
        permanent: false,
      },
      {
        source: "/docs/backdrop-hue-rotate",
        destination: "/docs/backdrop-filter-hue-rotate",
        permanent: false,
      },
      {
        source: "/docs/backdrop-invert",
        destination: "/docs/backdrop-filter-invert",
        permanent: false,
      },
      {
        source: "/docs/backdrop-opacity",
        destination: "/docs/backdrop-filter-opacity",
        permanent: false,
      },
      {
        source: "/docs/backdrop-saturate",
        destination: "/docs/backdrop-filter-saturate",
        permanent: false,
      },
      {
        source: "/docs/backdrop-sepia",
        destination: "/docs/backdrop-filter-sepia",
        permanent: false,
      },

      // Framework guides
      {
        source: "/docs/guides/nextjs",
        destination: "/docs/installation/framework-guides/nextjs",
        permanent: false,
      },
      {
        source: "/docs/guides/laravel",
        destination: "/docs/installation/framework-guides/laravel/vite",
        permanent: false,
      },
      {
        source: "/docs/guides/vite",
        destination: "/docs/installation/using-vite",
        permanent: false,
      },
      {
        source: "/docs/guides/nuxtjs",
        destination: "/docs/installation/framework-guides/nuxt",
        permanent: false,
      },
      {
        source: "/docs/guides/solidjs",
        destination: "/docs/installation/framework-guides/solidjs",
        permanent: false,
      },
      {
        source: "/docs/guides/sveltekit",
        destination: "/docs/installation/framework-guides/sveltekit",
        permanent: false,
      },
      {
        source: "/docs/guides/angular",
        destination: "/docs/installation/framework-guides/angular",
        permanent: false,
      },
      {
        source: "/docs/guides/ruby-on-rails",
        destination: "/docs/installation/framework-guides/ruby-on-rails",
        permanent: false,
      },
      {
        source: "/docs/guides/remix",
        destination: "/docs/installation/framework-guides/react-router",
        permanent: false,
      },
      {
        source: "/docs/guides/phoenix",
        destination: "/docs/installation/framework-guides/phoenix",
        permanent: false,
      },
      {
        source: "/docs/guides/parcel",
        destination: "/docs/installation/framework-guides/parcel",
        permanent: false,
      },
      {
        source: "/docs/guides/symfony",
        destination: "/docs/installation/framework-guides/symfony",
        permanent: false,
      },
      {
        source: "/docs/guides/meteor",
        destination: "/docs/installation/framework-guides/meteor",
        permanent: false,
      },
      {
        source: "/docs/guides/adonisjs",
        destination: "/docs/installation/framework-guides/adonisjs",
        permanent: false,
      },
      {
        source: "/docs/guides/emberjs",
        destination: "/docs/installation/framework-guides/emberjs",
        permanent: false,
      },
      {
        source: "/docs/guides/astro",
        destination: "/docs/installation/framework-guides/astro",
        permanent: false,
      },
      {
        source: "/docs/guides/qwik",
        destination: "/docs/installation/framework-guides/qwik",
        permanent: false,
      },
      {
        source: "/docs/guides/rspack",
        destination: "/docs/installation/framework-guides/rspack/react",
        permanent: false,
      },
      {
        source: "/docs/guides/create-react-app",
        destination: "/docs/installation/framework-guides",
        permanent: false,
      },

      // Showcase examples
      {
        source: "/showcase/:path+",
        destination: "/showcase",
        permanent: false,
      },

      // Sponsors
      {
        source: "/sponsors",
        destination: "/sponsor",
        permanent: false,
      },

      // Tailwind UI
      {
        source: "/components",
        destination: "https://tailwindcss.com/plus/ui-blocks",
        permanent: false,
      },
      {
        source: "/components/:slug",
        destination: "https://tailwindcss.com/plus/ui-blocks",
        permanent: false,
      },

    ];
  },
  async rewrites() {
    return ["plus", "plus-assets", "vendor", "nova-api"].flatMap((path) => [
      {
        source: `/${path}`,
        destination: `https://tailwindui.com/${path}`,
      },
      {
        source: `/${path}/:path*`,
        destination: `https://tailwindui.com/${path}/:path*`,
      },
    ]);
  },
} satisfies NextConfig;

const withMDX = createMdx();
module.exports = withMDX(nextConfig);
