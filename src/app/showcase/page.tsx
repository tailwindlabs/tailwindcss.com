import { FooterSitemap, FooterMeta } from "@/components/footer";
import GridContainer from "@/components/grid-container";
import ShowcaseThumbnail from "@/components/showcase-thumbnail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "A collection of beautiful websites built with Tailwind CSS, including marketing sites, SaaS applications, ecommerce stores, and more.",
  openGraph: {
    type: "article",
    title: "Showcase - Build anything",
    description: "A collection of beautiful websites built with Tailwind CSS.",
    images: "https://tailwindcss.com/api/og?path=/showcase",
    url: "https://tailwindcss.com/showcase",
  },
};

export default async function Showcase() {
  return (
    <div className="mt-24">
      <div className="mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase">Showcase</div>
      <GridContainer>
        <h1 className="mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">
          You can build anything with Tailwind CSS.
        </h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          Well not quite <em>anything</em>, like you can't build a spaceship with it. But you can definitely build the
          website for the spaceship —{" "}
          <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer">
            NASA
          </a>{" "}
          did.
        </p>
      </GridContainer>

      <div className="mt-12 mb-46 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showcase.map((showcase, siteIndex) => (
          <ShowcaseThumbnail key={showcase.name} showcase={showcase} priority={siteIndex < 8} />
        ))}
      </div>
      <GridContainer>
        <FooterSitemap className="*:first:border-l-0 *:last:border-r-0" />
      </GridContainer>
      <FooterMeta className="px-4 md:px-6 lg:px-8" />
    </div>
  );
}

const showcase = [
  {
    name: "OpenAI / ChatGPT",
    url: "https://openai.com",
    thumbnail: require("./img/openai.com.png").default,
    video: "/showcase-videos/openai.com.mp4",
    description: "Marketing website & chat interface",
  },
  {
    name: "Lemon Squeezy",
    url: "https://app.lemonsqueezy.com",
    thumbnail: require("./img/app.lemonsqueezy.com.png").default,
    video: "/showcase-videos/app.lemonsqueezy.com.mp4",
    description: "SaaS application",
  },
  {
    name: "Shopify",
    url: "https://shopify.com",
    thumbnail: require("./img/shopify.com.png").default,
    video: "/showcase-videos/shopify.com.mp4",
    description: "Ecommerce platform website",
  },
  {
    name: "Wealthfront",
    url: "https://wealthfront.com",
    thumbnail: require("./img/wealthfront.com.png").default,
    video: "/showcase-videos/wealthfront.com.mp4",
    description: "Fintech marketing website",
  },
  // {
  //   name: "Netflix Global Top 10",
  //   url: "https://top10.netflix.com",
  //   thumbnail: require("./img/top10.netflix.com.png").default,
  //   video: "/showcase-videos/top10.netflix.com.mp4",
  //   description: "Microsite",
  // },
  {
    name: "Loom",
    url: "https://www.loom.com",
    thumbnail: require("./img/loom.com.png").default,
    video: "/showcase-videos/loom.com.mp4",
    description: "SaaS marketing website",
  },
  {
    name: "The Verge",
    url: "https://www.theverge.com",
    thumbnail: require("./img/theverge.com.png").default,
    video: "/showcase-videos/theverge.com.mp4",
    description: "News website",
  },
  {
    name: "Laracon Online",
    url: "https://laracon.net",
    thumbnail: require("./img/laracon.net.png").default,
    video: "/showcase-videos/laracon.net.mp4",
    description: "Conference website",
  },
  {
    name: "Turbo",
    url: "https://turbo.build",
    thumbnail: require("./img/turbo.build.png").default,
    video: "/showcase-videos/turbo.build.mp4",
    description: "Developer tool website",
  },
  {
    name: "candycode",
    url: "https://candycode.com",
    thumbnail: require("./img/candycode.com.png").default,
    video: "/showcase-videos/candycode.com.mp4",
    description: "Agency website",
  },
  {
    name: "Column",
    url: "https://column.com",
    thumbnail: require("./img/column.com.png").default,
    video: "/showcase-videos/column.com.mp4",
    description: "Fintech marketing website",
  },
  {
    name: "Wander",
    url: "https://wander.com",
    thumbnail: require("./img/wander.com.png").default,
    video: "/showcase-videos/wander.com.mp4",
    description: "Vacation rental website",
  },
  {
    name: "New York Times Events",
    url: "https://nytimes.com/events",
    thumbnail: require("./img/nytimes.com.png").default,
    video: "/showcase-videos/nytimes.com.mp4",
    description: "News website",
  },
  {
    name: "GitHub Next",
    url: "https://githubnext.com",
    thumbnail: require("./img/githubnext.com.png").default,
    video: "/showcase-videos/githubnext.com.mp4",
    description: "Research website",
  },
  {
    name: "PlanetScale",
    url: "https://planetscale.com",
    thumbnail: require("./img/planetscale.com.png").default,
    video: "/showcase-videos/planetscale.com.mp4",
    description: "SaaS marketing website",
  },
  {
    name: "Algolia Docs",
    url: "https://www.algolia.com/doc",
    thumbnail: require("./img/algolia.com.png").default,
    video: "/showcase-videos/algolia.com.mp4",
    description: "Documentation website",
  },
  {
    name: "MrBeast Feastables",
    url: "https://feastables.com",
    thumbnail: require("./img/feastables.com.png").default,
    video: "/showcase-videos/feastables.com.mp4",
    description: "Direct-to-consumer store",
  },
  {
    name: "NASA Jet Propulsion Laboratory",
    url: "https://jpl.nasa.gov",
    thumbnail: require("./img/jpl.nasa.gov.png").default,
    video: "/showcase-videos/jpl.nasa.gov.mp4",
    description: "Space laboratory website",
  },
  {
    name: "Salient",
    url: "https://salient.tailwindui.com",
    thumbnail: require("./img/salient.tailwindui.com.png").default,
    video: "/showcase-videos/salient.tailwindui.com.mp4",
    description: "SaaS marketing website",
    isTemplate: true,
  },
  {
    name: "Mashable",
    url: "https://mashable.com",
    thumbnail: require("./img/mashable.com.png").default,
    video: "/showcase-videos/mashable.com.mp4",
    description: "News website",
  },
  {
    name: "Microsoft .NET",
    url: "https://dotnet.microsoft.com",
    thumbnail: require("./img/dotnet.microsoft.com.png").default,
    video: "/showcase-videos/dotnet.microsoft.com.mp4",
    description: "Software framework website",
  },
  {
    name: "Spotlight",
    url: "https://spotlight.tailwindui.com",
    thumbnail: require("./img/spotlight.tailwindui.com.png").default,
    video: "/showcase-videos/spotlight.tailwindui.com.mp4",
    description: "Personal website",
    isTemplate: true,
    dark: {
      thumbnail: require("./img/spotlight.tailwindui.com-dark.png").default,
      video: "/showcase-videos/spotlight.tailwindui.com-dark.mp4",
    },
  },
  {
    name: "Clearbit",
    url: "https://clearbit.com",
    thumbnail: require("./img/clearbit.com.png").default,
    video: "/showcase-videos/clearbit.com.mp4",
    description: "SaaS marketing website",
  },
  {
    name: "Dizzie",
    url: "https://getdizzie.com",
    thumbnail: require("./img/getdizzie.com.png").default,
    video: "/showcase-videos/getdizzie.com.mp4",
    description: "E-commerce store",
  },
  {
    name: "Google I/O",
    url: "https://io.google",
    thumbnail: require("./img/io.google.png").default,
    video: "/showcase-videos/io.google.mp4",
    description: "Conference website",
    dark: {
      thumbnail: require("./img/io.google-dark.png").default,
      video: "/showcase-videos/io.google-dark.mp4",
    },
  },
  {
    name: "Keynote",
    url: "https://keynote.tailwindui.com",
    thumbnail: require("./img/keynote.tailwindui.com.png").default,
    video: "/showcase-videos/keynote.tailwindui.com.mp4",
    description: "Conference website",
    isTemplate: true,
  },
  {
    name: "KeepGrading",
    url: "https://keepgrading.com",
    thumbnail: require("./img/keepgrading.com.png").default,
    video: "/showcase-videos/keepgrading.com.mp4",
    description: "Agency website",
  },
  {
    name: "Transmit",
    url: "https://transmit.tailwindui.com",
    thumbnail: require("./img/transmit.tailwindui.com.png").default,
    video: "/showcase-videos/transmit.tailwindui.com.mp4",
    description: "Podcast website",
    isTemplate: true,
  },
  {
    name: "Poolsuite Grand Leisure",
    url: "https://grandleisure.org",
    thumbnail: require("./img/grandleisure.org.png").default,
    video: "/showcase-videos/grandleisure.org.mp4",
    description: "NFT marketing website",
  },
  {
    name: "Pocket",
    url: "https://pocket.tailwindui.com",
    thumbnail: require("./img/pocket.tailwindui.com.png").default,
    video: "/showcase-videos/pocket.tailwindui.com.mp4",
    description: "Mobile app marketing website",
    isTemplate: true,
  },
  {
    name: "Modern Treasury",
    url: "https://moderntreasury.com",
    thumbnail: require("./img/moderntreasury.com.png").default,
    video: "/showcase-videos/moderntreasury.com.mp4",
    description: "Fintech marketing website",
  },
  {
    name: "National Park Foundation",
    url: "https://nationalparks.org",
    thumbnail: require("./img/nationalparks.org.png").default,
    video: "/showcase-videos/nationalparks.org.mp4",
    description: "Nonprofit website",
  },
  {
    name: "Syntax",
    url: "https://syntax.tailwindui.com",
    thumbnail: require("./img/syntax.tailwindui.com.png").default,
    video: "/showcase-videos/syntax.tailwindui.com.mp4",
    description: "Documentation website",
    isTemplate: true,
    dark: {
      thumbnail: require("./img/syntax.tailwindui.com-dark.png").default,
      video: "/showcase-videos/syntax.tailwindui.com-dark.mp4",
    },
  },
  {
    name: "SavvyCal",
    url: "https://savvycal.com",
    thumbnail: require("./img/savvycal.com.png").default,
    video: "/showcase-videos/savvycal.com.mp4",
    description: "SaaS application",
  },
  {
    name: "Opal",
    url: "https://opalcamera.com",
    thumbnail: require("./img/opalcamera.com.png").default,
    video: "/showcase-videos/opalcamera.com.mp4",
    description: "Product marketing website",
  },
  {
    name: "Coinbase NFT",
    url: "https://nft.coinbase.com",
    thumbnail: require("./img/nft.coinbase.com.png").default,
    video: "/showcase-videos/nft.coinbase.com.mp4",
    description: "Online marketplace",
    dark: {
      thumbnail: require("./img/nft.coinbase.com-dark.png").default,
      video: "/showcase-videos/nft.coinbase.com-dark.mp4",
    },
  },
  {
    name: "Primer",
    url: "https://primer.tailwindui.com",
    thumbnail: require("./img/primer.tailwindui.com.png").default,
    video: "/showcase-videos/primer.tailwindui.com.mp4",
    description: "Info product website",
    isTemplate: true,
  },
  {
    name: "Der Spiegel",
    url: "https://spiegel.de",
    thumbnail: require("./img/spiegel.de.png").default,
    video: "/showcase-videos/spiegel.de.mp4",
    description: "News website",
    dark: {
      thumbnail: require("./img/spiegel.de-dark.png").default,
      video: "/showcase-videos/spiegel.de-dark.mp4",
    },
  },
];
