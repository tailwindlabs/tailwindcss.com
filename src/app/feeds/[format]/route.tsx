import { getBlogPostBySlug, getBlogPostSlugs, nonNullable } from "@/app/blog/api";
import { Feed } from "feed";
import { notFound } from "next/navigation";

const BASE_URL = "https://tailwindcss.com";
const BLOG_URL = `${BASE_URL}/blog`;

export async function generateStaticParams() {
  return [{ format: "feed.xml" }, { format: "feed.json" }, { format: "atom.xml" }];
}

export async function GET(request: Request, { params }: { params: Promise<{ format: string }> }) {
  let format = (await params).format;

  const feed = new Feed({
    title: "Tailwind CSS Blog",
    description: "All the latest Tailwind CSS news, straight from the team.",
    id: BLOG_URL,
    link: BLOG_URL,
    language: "en",
    image: `${BASE_URL}/favicons/favicon-32x32.png?v=3`,
    favicon: `${BASE_URL}/favicons/favicon.ico?v=3`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Tailwind Labs`,
    feedLinks: {
      rss: `${BASE_URL}/feeds/feed.xml`,
      json: `${BASE_URL}/feeds/feed.json`,
      atom: `${BASE_URL}/feeds/atom.xml`,
    },
    author: {
      name: "Adam Wathan",
      link: "https://twitter.com/@adamwathan",
    },
  });

  let slugs = await getBlogPostSlugs();
  let posts = (await Promise.all(slugs.map(getBlogPostBySlug)))
    .filter(nonNullable)
    .filter((post) => !post.meta.private);

  for (let { slug, meta } of posts) {
    feed.addItem({
      title: meta.title,
      id: meta.title,
      link: `${BLOG_URL}/${slug}`,
      description: meta.description,
      author: meta.authors.map(({ name, twitter }) => ({
        name,
        link: `https://twitter.com/${twitter}`,
      })),
      date: new Date(meta.date),
      image: meta.image ? `${BASE_URL}${meta.image.src}` : `${BASE_URL}/api/og?path=/blog/${slug}`,
    });
  }

  switch (format) {
    case "feed.xml":
      return new Response(feed.rss2(), {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
        },
      });
    case "feed.json":
      return new Response(feed.json1(), {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    case "atom.xml":
      return new Response(feed.atom1(), {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
        },
      });
    default:
      notFound();
  }
}
