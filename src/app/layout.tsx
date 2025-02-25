import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { SearchProvider } from "@/components/search";
import { ThemeProvider } from "@/components/theme-toggle";
import Fathom from "@/components/fathom";
import Script from "next/script";

const inter = localFont({
  src: [
    { path: "./fonts/InterVariable.woff2", weight: "100 900", style: "normal" },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

const source = localFont({
  src: [
    {
      path: "./fonts/SourceSansPro-Regular.ttf.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-source-sans-pro",
});

const plexMono = localFont({
  src: [
    {
      path: "./fonts/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/IBMPlexMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/IBMPlexMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-plex-mono",
});
const ubuntuMono = localFont({
  src: [
    {
      path: "./fonts/Ubuntu-Mono-bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ubuntu-mono",
});

const js = String.raw;
let darkModeScript = js`
  if (!('_updateTheme' in window)) {
    window._updateTheme = function updateTheme(theme) {
      let classList = document.documentElement.classList;

      classList.remove("light", "dark", "system");
      document.querySelectorAll('meta[name="theme-color"]').forEach(el => el.remove())
      if (theme === 'dark') {
        classList.add('dark')

        let meta = document.createElement('meta')
        meta.name = 'theme-color'
        meta.content = 'oklch(.13 .028 261.692)'
        document.head.appendChild(meta)
      } else if (theme === 'light') {
        classList.add('light')

        let meta = document.createElement('meta')
        meta.name = 'theme-color'
        meta.content = 'white'
        document.head.appendChild(meta)
      } else {
        classList.add('system')

        let meta1 = document.createElement('meta')
        meta1.name = 'theme-color'
        meta1.content = 'oklch(.13 .028 261.692)'
        meta1.media = '(prefers-color-scheme: dark)'
        document.head.appendChild(meta1)

        let meta2 = document.createElement('meta')
        meta2.name = 'theme-color'
        meta2.content = 'white'
        meta2.media = '(prefers-color-scheme: light)'
        document.head.appendChild(meta2)
      }
    }

    try {
      _updateTheme(localStorage.currentTheme)
    } catch (_) {}

    try {
      if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        document.documentElement.classList.add('os-macos')
      }
    } catch (_) {}
  }
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://tailwindcss.com"),
  title: {
    default: "Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.",
    template: "%s - Tailwind CSS",
  },
  description:
    "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} ${source.variable} ${ubuntuMono.variable} antialiased dark:bg-gray-950`}
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={v("/favicons/apple-touch-icon.png")} />
        <link rel="icon" type="image/png" sizes="32x32" href={v("/favicons/favicon-32x32.png")} />
        <link rel="icon" type="image/png" sizes="16x16" href={v("/favicons/favicon-16x16.png")} />
        <link rel="manifest" href={v("/favicons/site.webmanifest")} />
        <link rel="mask-icon" href={v("/favicons/safari-pinned-tab.svg")} color="#38bdf8" />
        <link rel="shortcut icon" href={v("/favicons/favicon.ico")} />
        <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feeds/feed.xml" />
        <link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/feeds/atom.xml" />
        <link rel="alternate" type="application/json" title="JSON Feed" href="/feeds/feed.json" />
        <meta name="apple-mobile-web-app-title" content="Tailwind CSS" />
        <meta name="application-name" content="Tailwind CSS" />
        <meta name="msapplication-TileColor" content="#38bdf8" />
        <meta name="msapplication-config" content={v("/favicons/browserconfig.xml")} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: darkModeScript }}></script>
        {/*
          We inject the script via the <Script/> tag again, since we found the regular `<script>`
          tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
      </head>
      <body>
        <Fathom />
        <SearchProvider>
          <ThemeProvider>
            <div className="isolate">{children}</div>
          </ThemeProvider>
        </SearchProvider>
      </body>
    </html>
  );
}

const FAVICON_VERSION = 4;
function v(href: string) {
  return `${href}?v=${FAVICON_VERSION}`;
}
