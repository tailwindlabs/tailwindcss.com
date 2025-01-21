import Link from "next/link";
import { getBlogPostBySlug, getBlogPostSlugs, formatDate, nonNullable } from "./api";
import { Fragment } from "react";
import { NewsletterForm } from "@/components/newsletter-form";
import GridContainer from "@/components/grid-container";
import { Keyboard } from "@/components/blog/keyboard";

export default async function Blog() {
  let slugs = await getBlogPostSlugs();
  let posts = (await Promise.all(slugs.map(getBlogPostBySlug)))
    .filter(nonNullable)
    .filter((post) => !post.meta.private);

  return (
    <div className="relative mt-24">
      <div className="absolute -top-24 -right-32 isolate z-0 not-xl:hidden">
        <Keyboard />
      </div>
      <GridContainer>
        <h1 className="mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">
          Latest Updates
        </h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="mx-2 text-lg">All the latest Tailwind CSS news, straight from the team.</p>
      </GridContainer>

      <GridContainer className="mt-10">
        <div className="mx-2">
          <NewsletterForm action="https://app.convertkit.com/forms/3181837/subscriptions" />
        </div>
      </GridContainer>

      <div className="mt-12 mb-46 grid grid-cols-1 lg:grid-cols-[24rem_2.5rem_minmax(0,1fr)]">
        {posts.map(({ meta, slug }, index) => (
          <Fragment key={slug}>
            <GridContainer className="p col-span-3 grid grid-cols-subgrid divide-x divide-gray-950/5 dark:divide-white/10">
              <div className="x-2 font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase max-lg:hidden">
                {formatDate(meta.date)}
              </div>
              <div className="max-lg:hidden" />
              <div className="text-md px-2">
                <div className="max-w-(--container-2xl)">
                  <div className="mb-4 font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase lg:hidden">
                    {formatDate(meta.date)}
                  </div>

                  <Link href={`/blog/${slug}`} className="font-semibold">
                    {meta.title}
                  </Link>
                  <div className="prose prose-blog mt-4 line-clamp-3 leading-7">{meta.excerpt}</div>
                  <Link
                    href={`/blog/${slug}`}
                    className="mt-4 inline-block font-semibold text-sky-500 hover:text-sky-600 dark:text-sky-400"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </GridContainer>
            {index !== posts.length - 1 && (
              <div className="contents divide-x divide-gray-950/5 dark:divide-white/10">
                <div className="h-8 max-lg:hidden" />
                <div className="h-8 max-lg:hidden" />
                <div className="h-8" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
