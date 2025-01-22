import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Author } from "./authors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function getBlogPostBySlug(slug: string): Promise<{
  Component: React.FC;
  meta: {
    title: string;
    date: string;
    excerpt: React.ReactElement;
    authors: Author[];
    description: string;
    image?: {
      src: string;
    };
    private?: boolean;
  };
  slug: string;
} | null> {
  try {
    // Check if the file exists
    if (!(await fs.stat(path.join(__dirname, `../../blog/${slug}/index.mdx`)).catch(() => null))) {
      return null;
    }

    let module = await import(`../../blog/${slug}/index.mdx`);
    if (!module.default) {
      return null;
    }

    return {
      Component: module.default,
      meta: {
        authors: [],
        ...module.meta,
      },
      slug,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getBlogPostSlugs(): Promise<string[]> {
  let posts: { slug: string; date: number }[] = [];

  let folders = await fs.readdir(path.join(__dirname, "../../blog"));

  await Promise.allSettled(
    folders.map(async (folder) => {
      if (folder.startsWith(".")) return;
      try {
        let post = await getBlogPostBySlug(folder);
        if (!post) return;

        posts.push({
          slug: post.slug,
          date: new Date(post.meta.date).getTime(),
        });
      } catch (e) {
        console.error(e);
      }
    }),
  );

  posts.sort((a, b) => b.date - a.date);

  return posts.map((post) => post.slug);
}

export function formatDate(timestamp: string) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function nonNullable<T>(x: T | null): x is NonNullable<T> {
  return x !== null;
}
