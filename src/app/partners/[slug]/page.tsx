import { FooterMeta } from "@/components/footer";
import { getPartnerBySlug, getSponsorSlug } from "@/lib/sponsors";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { partners } from "../sponsors";

type PartnerPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return partners
    .filter((partner) => "detail" in partner && partner.detail != null)
    .map((partner) => ({ slug: getSponsorSlug(partner.name) }));
}

export async function generateMetadata({ params }: PartnerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  const detail = partner && "detail" in partner ? partner.detail : null;

  if (!partner || !detail) {
    return {};
  }

  return {
    title: `${partner.name} - Tailwind CSS Partners`,
    description: detail.summary,
    openGraph: {
      type: "article",
      title: `${partner.name} - Tailwind CSS Partners`,
      description: detail.summary,
      url: `https://tailwindcss.com/partners/${slug}`,
    },
  };
}

function ButtonLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      className={clsx(
        className,
        "inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-4 py-2 text-center text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200",
      )}
      {...props}
    />
  );
}

function SecondaryLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      className={clsx(
        className,
        "rounded-full px-4 py-2 text-center text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20 dark:text-gray-100 dark:ring-white/15 dark:hover:ring-white/20",
      )}
      {...props}
    />
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className={clsx("-mr-0.5 w-2.5", className)}>
      <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z" />
    </svg>
  );
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  const detail = partner && "detail" in partner ? partner.detail : null;

  if (!partner || !detail) {
    notFound();
  }

  return (
    <div className="mt-28 sm:mt-32 lg:mt-40">
      <p className="inline-block rounded-md bg-gray-950/5 px-3 py-1 font-mono text-xs/5 tracking-widest text-gray-950 uppercase dark:bg-white/10 dark:text-white">
        {detail.eyebrow}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[3fr_7fr] lg:items-start lg:gap-20">
        <div>
          <div className="grid aspect-square place-content-center bg-white p-8 dark:bg-white/5">
            <partner.logo className="h-10 w-auto max-w-48 text-gray-950 dark:text-white" />
          </div>
          <p className="mt-4 text-lg/7 font-medium tracking-tight text-pretty">
            <strong className="font-medium text-gray-950 dark:text-white">{partner.name}</strong>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {partner.categories.map((category) => (
              <span
                key={category}
                className="rounded-md bg-gray-950/5 px-2 py-0.5 text-xs/5 text-gray-600 dark:bg-white/10 dark:text-gray-400"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h1 className="max-w-[40ch] text-[2.5rem]/[2.75rem] tracking-tight text-pretty text-gray-950 sm:text-[3.5rem]/[3.75rem] dark:text-white">
            {detail.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg/7 text-gray-700 dark:text-gray-400">{detail.summary}</p>
          <div className="mt-8 max-w-2xl space-y-6 text-sm/7 text-gray-700 dark:text-gray-400">
            {detail.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={partner.url} target="_blank" rel="noopener sponsored">
              Visit {partner.name}
              <ArrowIcon className="-rotate-45" />
            </ButtonLink>
            <SecondaryLink href="/partners">Back to partners</SecondaryLink>
          </div>
        </div>
      </div>
      <hr
        className="mt-40 border-gray-950/10 dark:border-white/10"
        style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}
      />
      <FooterMeta />
    </div>
  );
}
