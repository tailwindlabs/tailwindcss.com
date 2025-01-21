import { loadGuide } from "@/app/(docs)/docs/installation/framework-guides";
import { Breadcrumb } from "@/components/breadcrumb";
import { notFound } from "next/navigation";

type Params = Promise<{
  slug: string[];
}>;

export default async function Page({ params }: { params: Params }) {
  let parts = (await params).slug;
  if (!parts) return notFound();

  let [slug] = parts.filter((part) => part.trim() !== "");

  let guide = await loadGuide(slug);
  if (!guide) return notFound();

  return <Breadcrumb section="Installation" title={guide.page.title} />;
}
