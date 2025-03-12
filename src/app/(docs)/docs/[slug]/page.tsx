import Pagination from "@/components/pagination";
import { RandomPromo } from "@/components/promos";
import TableOfContents from "@/components/table-of-contents";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { generateTableOfContents, getDocPageBySlug, getDocPageSlugs, getSectionAndTitleBySlug } from "../api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  let slugs = await getDocPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  let params = await props.params;
  let sectionAndTitle = await getSectionAndTitleBySlug(params.slug);
  let post = await getDocPageBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  let title = `${post.title} - ${sectionAndTitle?.section ?? ""}`;

  return {
    metadataBase: new URL("https://tailwindcss.com"),
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      type: "article",
      url: `/docs/${params.slug}`,
      images: [{ url: `/api/og?path=/docs/${params.slug}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [{ url: `/api/og?path=/docs/${params.slug}` }],
      site: "@tailwindcss",
      creator: "@tailwindcss",
    },
  };
}

export default async function DocPage(props: Props) {
  let params = await props.params;

  let sectionAndTitle = getSectionAndTitleBySlug(params.slug);

  let [post, tableOfContents] = await Promise.all([
    getDocPageBySlug(params.slug),
    generateTableOfContents(params.slug),
  ]);

  if (!post) {
    return notFound();
  }

  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]">
        <div className="px-4 pt-10 pb-24 sm:px-6 xl:pr-0">
          {sectionAndTitle ? (
            <p
              className="flex items-center gap-2 font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
              data-section="true"
            >
              {sectionAndTitle.section}
            </p>
          ) : null}
          <h1 data-title="true" className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            {post.title}
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-400">
            {post.description}
          </p>

          <div className="prose mt-10" data-content="true">
            <post.Component />
          </div>
          <Pagination slug={params.slug} />
        </div>
        <div className="max-xl:hidden">
          <div className="sticky top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-10 pb-24">
            <TableOfContents tableOfContents={tableOfContents} />
            <RandomPromo />
          </div>
        </div>
      </div>
    </>
  );
}
