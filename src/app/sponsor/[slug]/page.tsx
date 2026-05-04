import { notFound } from "next/navigation";
import { partners } from "../sponsors";
import { FooterMeta } from "@/components/footer";
import { clsx } from "clsx";

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function PartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = partners.find((p) => slugify(p.name) === slug);

  if (!partner) {
    notFound();
  }

  return (
    <div className="mt-28 sm:mt-32 lg:mt-40">
      <p className="inline-block rounded-md bg-gray-950/5 px-3 py-1 font-mono text-xs/5 tracking-widest uppercase text-gray-950 dark:bg-white/10 dark:text-white">
        Partner
      </p>
      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[3fr_7fr] lg:items-start lg:gap-20">
        <div>
          <div className="aspect-square grid place-content-center bg-white dark:bg-white/5">
            <partner.logo className="h-10 w-auto text-gray-950 dark:text-white" />
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
            {partner.name} supports Tailwind CSS
          </h1>
          <p className="mt-8 max-w-2xl text-lg/7 text-gray-700 dark:text-gray-400">
            {partner.name} is a Tailwind CSS partner. By sponsoring Tailwind CSS, {partner.name} is helping ensure the
            framework millions of developers rely on every day continues to thrive.
          </p>
          <div className="mt-8 max-w-2xl space-y-6 text-sm/7 text-gray-700 dark:text-gray-400">
            <p>
              Cursor is an AI-powered code editor built on top of VS Code that helps developers write, edit, and understand code faster. It integrates large language models directly into the editing experience, letting you ask questions about your codebase, generate code from natural language, and refactor existing code with a single command.
            </p>
            <p>
              Since its launch, Cursor has quickly become one of the most popular tools in the frontend ecosystem. Thousands of developers use it daily to build with Tailwind CSS, and its deep understanding of utility-first workflows makes it a natural fit for the Tailwind community. By partnering with Tailwind CSS, Cursor is investing in the tools and infrastructure that power modern frontend development.
            </p>
          </div>
          <div className="mt-10 flex gap-4">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-4 py-2 text-center text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              Visit {partner.name}
              <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5 -rotate-45">
                <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z" />
              </svg>
            </a>
            <a
              href="/sponsor"
              className="rounded-full px-4 py-2 text-center text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20 dark:text-gray-100 dark:ring-white/15 dark:hover:ring-white/20"
            >
              Back to sponsors
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-40 border-gray-950/10 dark:border-white/10" style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }} />
      <FooterMeta />
    </div>
  );
}
