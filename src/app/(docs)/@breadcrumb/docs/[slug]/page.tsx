import { Breadcrumb } from "@/components/breadcrumb";
import { getDocPageSlugs, getSectionAndTitleBySlug } from "../../../../(docs)/docs/api";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  let slugs = await getDocPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocsTitle(props: Params) {
  let params = await props.params;
  let sectionAndTitle = getSectionAndTitleBySlug(params.slug);
  if (!sectionAndTitle) return null;

  return <Breadcrumb section={sectionAndTitle.section} title={sectionAndTitle.title} />;
}
