import { FooterMeta } from "@/components/footer";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { getShuffledSponsors, getDirectorySponsors, type Sponsor, type DirectorySponsor } from "@/lib/sponsors";
import { PartnerDirectory } from "./partner-directory";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Sponsor",
  description: "Become a Tailwind CSS partner to support the project and get your brand in front of millions of developers.",
  openGraph: {
    type: "article",
    title: "Sponsor - Tailwind CSS",
    description: "Become a Tailwind CSS partner to support the project and get your brand in front of millions of developers.",
    url: "https://tailwindcss.com/sponsor",
  },
};

function DarkButtonLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      className={clsx(
        className,
        "rounded-4xl bg-black px-4 py-2 text-center text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-white/90",
      )}
      {...props}
    />
  );
}

function LightButtonLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      className={clsx(
        className,
        "rounded-full px-4 py-2 text-center text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20 dark:bg-white/5 dark:text-gray-100 dark:ring-white/15 dark:hover:ring-white/20",
      )}
      {...props}
    />
  );
}

function Eyebrow({
  as = "p",
  className,
  color = "gray",
  ...props
}: {
  as?: React.ElementType;
  className?: string;
  color?: "gray" | "sky" | "pink" | "fuchsia";
  children: React.ReactNode;
}) {
  const Component = as;

  return (
    <Component
      className={clsx(
        className,
        "font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase",
        color === "gray" && "text-gray-600 dark:text-gray-500",
        color === "sky" && "text-sky-500",
        color === "pink" && "text-pink-500",
        color === "fuchsia" && "text-fuchsia-500 dark:text-fuchsia-400",
      )}
      {...props}
    />
  );
}

function Header() {
  return (
    <div className="line-y mt-12 grid gap-x-10 sm:mt-20 lg:mt-24 lg:grid-cols-[3fr_2fr]">
      <div className="px-4 py-2 max-lg:line-b sm:px-2 lg:border-r lg:border-gray-950/5 dark:lg:border-white/10">
        <Eyebrow>Sponsor</Eyebrow>
        <h1 className="mt-2 text-6xl tracking-tighter text-pretty sm:text-8xl">Support the future of Tailwind CSS</h1>
      </div>
      <div className="@container grid grid-cols-1 grid-rows-[1fr_auto] lg:border-l lg:border-gray-950/5 dark:lg:border-white/10">
        <div className="flex items-center px-4 py-2 max-lg:line-y max-lg:mt-6 sm:px-2">
          <p className="max-w-2xl text-lg/7 font-medium text-pretty text-gray-600 dark:text-gray-400">
            Become a Tailwind CSS partner to support the project, get your brand in front of millions of developers, and get direct access to the Tailwind CSS team.
          </p>
        </div>
        <div className="flex gap-4 px-4 py-2 whitespace-nowrap max-lg:line-t max-lg:mt-6 sm:px-2 lg:border-t lg:border-gray-950/5 @max-md:flex-col dark:lg:border-white/10">
          <DarkButtonLink href="#partners" className="inline-flex items-center justify-center gap-2">
            Become a partner
            <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5">
              <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path>
            </svg>
          </DarkButtonLink>
          <LightButtonLink href="/insiders" className="inline-flex items-center justify-center gap-2">
            Support as an individual
            <svg
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 10 10"
              className="-mr-0.5 w-2.5 fill-gray-600 dark:fill-gray-400"
            >
              <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path>
            </svg>
          </LightButtonLink>
        </div>
      </div>
    </div>
  );
}


function FeaturedPartners({ partners }: { partners: Sponsor[] }) {
  return (
    <section>
      <div className="relative mt-40">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {partners.map((company, index) => (
            <li key={index} className="max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y">
              <a
                href={company.sponsorPageUrl ?? company.url}
                target="_blank"
                rel="noopener sponsored"
                className="grid place-content-center transition-colors hover:bg-gray-950/2.5 sm:px-2 sm:py-4 dark:hover:bg-white/2.5"
              >
                <company.logo className="w-full max-w-80" aria-label={`${company.name} logo`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MegaphoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.813.813 0 0 1-1.084-.293c-.757-1.3-1.321-2.726-1.646-4.232m3.755-10.08a22.09 22.09 0 0 1 4.41-1.582A1.876 1.876 0 0 1 18 5.671v12.658a1.876 1.876 0 0 1-2.245 1.84 22.098 22.098 0 0 1-5.415-1.93m0-9.48a22.09 22.09 0 0 0 0 9.48m0-9.48v9.48"
      />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
}

function WhyPartner() {
  const features = [
    {
      icon: MegaphoneIcon,
      name: "Get your brand promoted",
      description:
        "The Tailwind CSS website gets over 10 million visitors per month. Your logo will be featured on the homepage and sponsors page, and your website will get a spot in the showcase — putting your brand directly in front of the developers who matter most.",
    },
    {
      icon: UsersIcon,
      name: "Work directly with the Tailwind CSS team",
      description:
        "Get direct access to the core team through a private Discord channel, expedited bug fixes and issue resolution, and early access to new features and our roadmap — so you’re always ahead of the curve.",
    },
    {
      icon: RocketIcon,
      name: "Support the future of the project",
      description:
        "Your sponsorship directly funds the ongoing development and maintenance of Tailwind CSS. You’ll have peace of mind knowing that a core technology in your stack will continue to evolve, stay maintained, and function smoothly for years to come.",
    },
  ];

  return (
    <div id="partners" className="scroll-mt-24">
      <div className="line-y mt-40">
        <div className="px-4 py-2 sm:px-2">
          <Eyebrow as="h2" color="pink">
            <a href="#partners">Why become a partner?</a>
          </Eyebrow>
          <p className="mt-2 max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">
            More than a sponsorship — it’s a partnership.
          </p>
        </div>
      </div>
      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 max-sm:hidden sm:grid-cols-3">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-x border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 dark:border-white/10"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={clsx("p-6 sm:p-8", index === 0 && "max-sm:line-y sm:line-y", index > 0 && "max-sm:line-t")}
            >
              <feature.icon className="size-8 text-sky-500" />
              <h3 className="mt-4 text-lg/7 font-semibold">{feature.name}</h3>
              <p className="mt-2 text-sm/7 text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="mt-24">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 dark:border-white/10"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="line-y p-6 sm:p-8">
            <blockquote>
              <p className="text-base/7 font-medium text-pretty italic text-gray-600 dark:text-gray-300">
                "Working with the Tailwind team through the partner program was a game-changer for us. They helped us get
                custom utility classes we needed added to the framework, which saved our team months of workarounds."
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <div>
                  <p className="text-sm/6 font-semibold">Engineering Team</p>
                  <p className="text-sm/6 text-gray-500">Netflix</p>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="line-y p-6 sm:p-8">
            <blockquote>
              <p className="text-base/7 font-medium text-pretty italic text-gray-600 dark:text-gray-300">
                "Having expedited access to the Tailwind CSS team means we can move faster without worrying about getting
                blocked by framework-level issues. The partner program pays for itself."
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <div>
                  <p className="text-sm/6 font-semibold">Engineering Team</p>
                  <p className="text-sm/6 text-gray-500">Shopify</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckmarkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 22 22" className="h-7 w-5.5">
      <path
        className="fill-sky-400/25"
        d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11Z"
      ></path>
      <path
        className="fill-sky-400/25"
        d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Zm0 1c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
      <path
        className="fill-sky-400"
        d="m14.684 7.82-4.079 6.992L7.293 11.5 8 10.793l2.395 2.395 3.425-5.872.864.504Z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}

function PartnerPlans() {
  const plans = [
    {
      name: "Supporter",
      price: "$500",
      url: "https://buy.polar.sh/polar_cl_som3lU3ZaBEFOr4nZlkoAuRBhRbFDMoFzJUC04Jn1Sc",
      description: "For companies who want to support Tailwind while getting some extra exposure.",
      features: [
        { name: "Logo on the sponsors page", description: "your logo proudly displayed on the sponsors page." },
        { name: "Insiders team access", description: "all the perks of the Insiders tier for everyone in your team." },
        {
          name: "Support Tailwind CSS",
          description: "sleep easy knowing that you’re supporting the development of Tailwind CSS.",
        },
      ],
      remaining: null,
    },
    {
      name: "Ambassador",
      price: "$2,500",
      url: "https://buy.polar.sh/polar_cl_TqBd09tnOwN7SQf7YpOcUZnDwxMVQB58Snhas2cdEDL",
      description: "For companies looking to boost visibility and credibility with the Tailwind community.",
      features: [
        {
          name: "Logo on the Tailwind homepage",
          description: "your logo displayed in a rotating spot on the homepage.",
        },
        { name: "Logo on the sponsors page", description: "your logo proudly displayed on the sponsors page." },
        { name: "Website in the showcase", description: "a spot on the showcase page for your company’s website." },
        { name: "Insiders team access", description: "all the perks of the Insiders tier for everyone in your team." },
        {
          name: "Tailwind Plus team access",
          description: "access to the UI Kit, templates, and 500+ components for your team.",
        },
        {
          name: "Access to sponsor Discord",
          description: "A private Discord channel for sponsors to talk to the Tailwind team.",
        },
        {
          name: "Support Tailwind CSS",
          description: "sleep easy knowing that you’re supporting the development of Tailwind CSS.",
        },
      ],
      remaining: 23,
    },
    {
      name: "Partner",
      price: "$5,000",
      url: "https://buy.polar.sh/polar_cl_Ae2EFQATomRTUPq3DVTqzjOCAEsI7m7GNrmoh1n6ZRk",
      description: "For companies who want increased exposure and easy access to the Tailwind team.",
      features: [
        {
          name: "Permanent logo on the Tailwind homepage",
          description: "your logo permanently displayed on the homepage.",
        },
        {
          name: "Priority logo placement on sponsors page",
          description: "your logo will appear at the top of the sponsors page.",
        },
        {
          name: "Featured spot in the showcase",
          description: "a featured spot on the showcase page for your website.",
        },
        {
          name: "Expedited bug fixes and issue resolution",
          description: "we’ll address issues you run into on an expedited schedule.",
        },
        { name: "Insiders team access", description: "all the perks of the Insiders tier for everyone in your team." },
        {
          name: "Tailwind Plus team access",
          description: "access to the UI Kit, templates, and 500+ components for your team.",
        },
        {
          name: "Support Tailwind CSS",
          description: "sleep easy knowing that you’re supporting the development of Tailwind CSS.",
        },
      ],
      remaining: 2,
    },
  ];

  return (
    <section className="line-y mt-16 grid grid-cols-1 lg:gap-10 xl:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="bg-gray-950/5 py-[calc(--spacing(2)+1px)] max-lg:-mx-px max-lg:px-[calc(--spacing(2)+1px)] not-first:max-lg:pt-0 lg:-mx-px lg:border-gray-950/5 lg:pr-2 lg:pl-[calc(--spacing(2)+1px)] lg:not-first:border-l lg:not-last:border-r dark:bg-white/10 dark:lg:border-white/10"
        >
          <div className="flex h-full flex-col gap-y-6 rounded-2xl bg-white p-6 sm:rounded-4xl sm:p-10 xl:p-8 2xl:p-10 dark:bg-gray-950/80 dark:outline dark:outline-white/10">
            <Eyebrow as="h3">{plan.name}</Eyebrow>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <p className="text-5xl font-medium first-letter:font-light">{plan.price}</p>
                <div>
                  <p className="text-sm/6 font-semibold">per month</p>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">plus tax</p>
                </div>
              </div>

              <DarkButtonLink className="max-sm:hidden xl:hidden" href={plan.url}>
                {`Become ${plan.name.toLowerCase().match(/^[aeiou]/i) ? "an" : "a"} ${plan.name.toLowerCase()}`}
              </DarkButtonLink>
            </div>
            <p className="max-w-2xl text-sm/7 text-gray-600 dark:text-gray-400">{plan.description}</p>
            <hr className="border-gray-950/5 dark:border-white/10" />
            <div className="@container">
              <ul
                className="group grid grid-cols-1 gap-x-10 gap-y-6 text-sm/7 text-gray-600 @3xl:grid-cols-2 dark:text-gray-300"
                role="list"
              >
                {plan.features.map((feature) => (
                  <li key={feature.name} className="grid max-w-2xl grid-cols-[auto_1fr] gap-6">
                    <CheckmarkIcon />
                    <p className="text-pretty">
                      <strong className="font-semibold text-gray-950 dark:text-white">{feature.name}</strong> —{" "}
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <DarkButtonLink className="mt-auto sm:max-xl:hidden" href={plan.url}>
              {`Become ${plan.name.toLowerCase().match(/^[aeiou]/i) ? "an" : "a"} ${plan.name.toLowerCase()}`}
            </DarkButtonLink>
          </div>
        </div>
      ))}
    </section>
  );
}

function FaqGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group">
      <Eyebrow as="h3" className="px-4 py-2 sm:px-2">
        {title}
      </Eyebrow>
      <dl>{children}</dl>
    </div>
  );
}

function Faq({ question, children }: { question: string; children: React.ReactNode }) {
  let id =
    "faq-" +
    question
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  return (
    <details className="group border-t border-gray-950/5 px-4 py-3 sm:px-2 dark:border-white/5">
      <summary
        id={id}
        className="flex w-full cursor-pointer justify-between gap-4 select-none group-open:text-sky-500 [&::-webkit-details-marker]:hidden"
      >
        <div className="text-left text-sm/7 font-semibold text-pretty">{question}</div>
        <PlusIcon className="h-7 w-4 group-open:hidden" />
        <MinusIcon className="h-7 w-4 not-group-open:hidden" />
      </summary>
      <div className="prose mt-4">{children}</div>
    </details>
  );
}

function Faqs() {
  return (
    <section className="line-y mt-30 grid grid-cols-1 gap-10 lg:grid-cols-2" id="faqs">
      <div className="lg:border-r lg:border-gray-950/5 dark:lg:border-white/5">
        <div className="grid grid-cols-1 gap-y-2 px-4 py-2 max-lg:line-b sm:px-2 lg:line-b/half">
          <Eyebrow as="h2" color="fuchsia">
            Frequently asked questions
          </Eyebrow>
          <p className="text-[2.5rem]/none font-medium tracking-tight text-pretty">Everything you need to know.</p>
        </div>
      </div>
      <div className="lg:border-l lg:border-gray-950/5 dark:lg:border-white/5">
        <div className="grid grid-cols-1 gap-10">
          <FaqGroup title="General">
            <Faq question="Who can I contact about a sponsorship?">
              <p>
                If you have any questions about sponsoring, reach out to us at{" "}
                <a href="mailto:support@tailwindcss.com">support@tailwindcss.com</a> and we'll be happy to help.
              </p>
            </Faq>
            <Faq question="Can any company sponsor?">
              <p>
                We’re excited to have support from all kinds of companies who use Tailwind CSS, but we do have a few
                guidelines:
              </p>
              <ul>
                <li>
                  <strong>
                    We typically don’t accept sponsorships from companies that sell commercial Tailwind UI kits,
                    templates, or component libraries
                  </strong>
                  , since that directly overlaps with our own product offerings and can create confusion about what is
                  officially endorsed.
                </li>
                <li>
                  <strong>
                    We also reserve the right to decline sponsorships from companies or services that we feel could
                    reflect poorly on the project
                  </strong>
                  , for example products that are low-quality or deceptive.
                </li>
              </ul>
              <p>If you're unsure whether your company qualifies, feel free to reach out — we're happy to chat.</p>
            </Faq>
            <Faq question="How are the sponsor perks delivered?">
              <p>
                After you check out via Polar, you'll get access to a Polar customer portal where you can manage your
                sponsorship and access any perks that come with it.
              </p>
              <p>
                If you're sponsoring as a company, we'll follow up to coordinate how to feature you on the Tailwind CSS
                website as well as how to give your team <strong>Tailwind Insider</strong> access.
              </p>
            </Faq>
            <Faq question="How are the sponsor perks licensed?">
              <p>Sponsor perks are provided under a custom commercial license.</p>
              <p>
                They’re licensed for personal or internal use by active Tailwind CSS Insiders sponsors only.
                Redistribution, sublicensing, or public sharing of the perks — such as the VS Code theme, Raycast
                extension, or Cursor/Claude/AGENTS.md rules — is not permitted.
              </p>
            </Faq>
          </FaqGroup>
          <FaqGroup title="Support">
            <Faq question="Do you offer technical support for sponsor perks?">
              <p>
                No — we don't offer technical support for sponsor perks. These perks are a bonus for supporters who want
                to give back to the project, but they're provided as-is.
              </p>
              <p>
                That said, the <strong>Insiders Discord</strong> is a great place to ask for help with anything related
                to the perks.
              </p>
            </Faq>
            <Faq question="How do I cancel my sponsorship?">
              <p>
                You can cancel your sponsorship at any time through the Polar customer portal. Once you cancel, your
                perks will remain active until the end of your current billing period.
              </p>
            </Faq>
            <Faq question="What happens if I stop sponsoring?">
              <p>
                If your sponsorship ends, you'll lose access to any perks like the Insiders Discord server,
                Cursor/Claude/AGENTS.md rules, and pre-release documentation. These are only available while you're
                actively sponsoring.
              </p>
            </Faq>
            <Faq question="What is your refund policy?">
              <p>Sponsorships are non-refundable, but of course you can cancel your sponsorship at any time.</p>
            </Faq>
          </FaqGroup>
        </div>
      </div>
    </section>
  );
}

function TierBadge({ tier }: { tier: string }) {
  return (
    <span
      className={clsx(
        "rounded-full px-2.5 py-0.5 text-[0.6875rem]/5 font-medium",
        tier === "partner" && "bg-sky-400/10 text-sky-500",
        tier === "ambassador" && "bg-pink-400/10 text-pink-500",
        tier === "supporter" && "bg-gray-400/10 text-gray-500 dark:bg-white/5 dark:text-gray-400",
      )}
    >
      {tier.charAt(0).toUpperCase() + tier.slice(1)}
    </span>
  );
}

function DirectoryItems({ sponsors }: { sponsors: DirectorySponsor[] }) {
  return (
    <ul role="list">
      {sponsors.map((sponsor) => (
        <li
          key={sponsor.name}
          data-tier={sponsor.tier}
          data-categories={sponsor.categories.join(",")}
          className="border-t border-gray-950/5 dark:border-white/10"
        >
          <a
            href={sponsor.sponsorPageUrl ?? sponsor.url}
            target="_blank"
            rel="noopener sponsored"
            className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 pl-6 pr-4 transition-colors hover:bg-gray-950/2.5 sm:grid-cols-[auto_1fr_auto_auto] sm:pl-4 sm:pr-2 dark:hover:bg-white/2.5"
          >
            <div className="flex items-center gap-3">
              <sponsor.icon className="h-5 w-auto max-w-24 shrink-0 opacity-50 dark:opacity-60" aria-label={`${sponsor.name} logo`} />
              <span className="text-sm/6 font-semibold">{sponsor.name}</span>
            </div>
            <div className="flex items-center gap-3 max-sm:hidden">
              <TierBadge tier={sponsor.tier} />
              <span className="text-sm/6 text-gray-500 dark:text-gray-400">
                {sponsor.categories.join(", ")}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm/6 font-medium text-gray-400 whitespace-nowrap dark:text-gray-500">
              Visit site
              <svg fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" className="-mr-0.5 w-2.5 -rotate-45">
                <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z" />
              </svg>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default async function Sponsor() {
  const { partners } = getShuffledSponsors();
  const directorySponsors = getDirectorySponsors();

  return (
    <div className="mt-24">
      <Header />
      <div className="isolate">
        <FeaturedPartners partners={partners} />
        <WhyPartner />
        <Testimonials />
        <PartnerPlans />
        <Faqs />
        <PartnerDirectory>
          <DirectoryItems sponsors={directorySponsors} />
        </PartnerDirectory>
        <FooterMeta className="px-4 md:px-6 lg:px-8" />
      </div>
    </div>
  );
}
