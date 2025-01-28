import { loadGuide, loadGuides } from "@/app/(docs)/docs/installation/framework-guides";
import { Steps } from "@/components/installation-steps";
import { TabBar } from "@/components/installation-tabs";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next/types";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  let parts = (await props.params).slug;
  if (!parts) return notFound();

  let [slug] = parts.filter((part) => part.trim() !== "");

  let guide = await loadGuide(slug);
  if (!guide) return notFound();

  let { page } = guide;

  return {
    metadataBase: new URL("https://tailwindcss.com"),
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: `/docs/${guide.slug}`,
      images: [{ url: `/api/og?path=/docs/${guide.slug}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [{ url: `/api/og?path=/docs/${guide.slug}` }],
      site: "@tailwindcss",
      creator: "@tailwindcss",
    },
  };
}

export default async function Page({ params }: Props) {
  let parts = (await params).slug;
  if (!parts) return notFound();

  let [slug, selectedTab] = parts.filter((part) => part.trim() !== "");

  let guide = await loadGuide(slug);
  if (!guide) return notFound();

  let { page, steps, tabs } = guide;

  // TODO: Tab handling might be better as a client-side thing using
  // CSS or JS to show/hide steps instead

  // Select the first tab if none is selected
  if (tabs && !selectedTab) {
    return redirect(`/docs/installation/framework-guides/${slug}/${tabs[0].slug}`);
  }

  steps = steps.filter((step) => {
    if (!step.tabs) return true;

    return step.tabs.includes(selectedTab);
  });

  // Non-existent tab selected
  if (tabs && tabs.length > 0 && steps.length === 0) return notFound();

  return (
    <>
      <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 pt-10 pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6 xl:pr-0">
          <p
            className="font-mono text-xs/6 tracking-widest text-gray-600 uppercase dark:text-gray-400"
            data-section="true"
          >
            Installation
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white" data-title="true">
            {page.title}
          </h1>
          <p className="mt-6 text-base/7 text-gray-700 dark:text-gray-400" data-description="true">
            {page.description}
          </p>

          {page.notice ? (
            <div className="relative my-4 overflow-hidden rounded-lg bg-gray-200 p-1">
              <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 dark:[--pattern-fg:var(--color-white)]/10"></div>

              <div className="relative z-10 rounded-md bg-white/75 px-4 py-3 text-sm font-medium text-gray-600 inset-ring-2 inset-ring-gray-700/25">
                {page.notice}
              </div>
            </div>
          ) : null}

          <div className="mt-6" data-content="true">
            {tabs ? (
              <TabBar
                tabs={tabs.map((tab) => ({
                  title: tab.title,
                  url: `/docs/installation/framework-guides/${slug}/${tab.slug}`,
                }))}
              />
            ) : null}
            <Steps steps={steps} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  let guides = await loadGuides();
  return guides.flatMap(({ slug, tabs = [] }) => [
    // examples:
    // - /docs/installation/framework-guides/nextjs
    // - /docs/installation/framework-guides/vite
    { slug: [slug] },

    // examples:
    // - /docs/installation/framework-guides/vite/react
    // - /docs/installation/framework-guides/vite/vue
    // - /docs/installation/framework-guides/vite/svelte
    ...tabs.map((tab) => ({
      slug: [slug, tab.slug],
    })),
  ]);
}
