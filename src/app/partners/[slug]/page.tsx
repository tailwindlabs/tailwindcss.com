import { FooterMeta } from "@/components/footer";
import { getSponsorBySlug, getSponsorSlug, hasSponsorDetail } from "@/lib/sponsors";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ambassadors, partners, supporters } from "../sponsors";

type PartnerPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...partners, ...ambassadors, ...supporters]
    .filter(hasSponsorDetail)
    .map((sponsor) => ({ slug: getSponsorSlug(sponsor.name) }));
}

export async function generateMetadata({ params }: PartnerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sponsor = getSponsorBySlug(slug);

  if (!sponsor || !hasSponsorDetail(sponsor)) {
    return {};
  }

  return {
    title: `${sponsor.name} - Tailwind CSS Partners`,
    description: sponsor.detail.summary,
    openGraph: {
      type: "article",
      title: `${sponsor.name} - Tailwind CSS Partners`,
      description: sponsor.detail.summary,
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
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-center text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20 dark:text-gray-100 dark:ring-white/15 dark:hover:ring-white/20",
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
  const sponsor = getSponsorBySlug(slug);

  if (!sponsor || !hasSponsorDetail(sponsor)) {
    notFound();
  }

  const { detail } = sponsor;
  const careersUrl =
    "careersUrl" in sponsor && typeof sponsor.careersUrl === "string" ? sponsor.careersUrl : undefined;

  return (
    <div className="mt-28 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] lg:gap-x-20">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href="/partners"
            className="flex items-center gap-1.5 text-sm/6 text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowIcon className="rotate-180" />
            Back to partners
          </a>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[3fr_7fr] lg:items-start lg:gap-20">
        <div>
          <div className="grid aspect-square place-content-center bg-white p-8 dark:bg-white/5">
            <sponsor.logo className="h-20 w-auto max-w-64 text-gray-950 dark:text-white" />
          </div>
          <p className="mt-4 text-lg/7 font-medium tracking-tight text-pretty">
            <strong className="font-medium text-gray-950 dark:text-white">{sponsor.name}</strong>
          </p>
          <p className="mt-4 inline-block rounded-md bg-gray-950/5 px-3 py-1 font-mono text-xs/5 tracking-widest text-gray-950 uppercase dark:bg-white/10 dark:text-white">
            {detail.eyebrow}
          </p>
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
            <ButtonLink href={sponsor.url} target="_blank" rel="noopener sponsored">
              Visit {sponsor.name}
              <ArrowIcon className="-rotate-45" />
            </ButtonLink>
            {careersUrl && (
              <SecondaryLink href={careersUrl} target="_blank" rel="noopener">
                Work at {sponsor.name}
                <ArrowIcon className="-rotate-45" />
              </SecondaryLink>
            )}
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
