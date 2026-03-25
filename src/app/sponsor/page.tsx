import { FooterMeta } from "@/components/footer";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { getShuffledSponsors, type Sponsor } from "@/lib/sponsors";

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

function Partners() {
  return (
    <div id="partners" className="line-y mt-40 scroll-mt-24">
      <div className="px-4 py-2 sm:px-2">
        <Eyebrow as="h2" color="pink">
          <a href="#partners">Partners</a>
        </Eyebrow>
        <p className="max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">
          Support as a company
        </p>
        <p className="mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400">
          Become a Tailwind CSS partner to put your brand in front of 10 million developers a month, give your team
          early access to new features and our roadmap, and get direct access to the Tailwind CSS core team — all while
          helping ensure Tailwind stays around for the long haul.
        </p>
      </div>
    </div>
  );
}

function PartnerPerks() {
  return (
    <section className="mt-16">
      <h2 className="px-4 text-2xl/10 font-medium tracking-tight sm:px-2">Why become a partner?</h2>
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 gap-2 max-sm:hidden sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:gap-10 lg:grid-cols-3">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid-cols-1 gap-2 text-sm/7 text-gray-600 max-sm:line-y max-sm:overflow-x-auto max-sm:px-2 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:gap-10 lg:grid-cols-3">
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Your logo in front of millions</strong> —
              the Tailwind CSS website gets over 10 million visitors per month, and your brand will be featured on the
              homepage as a partner.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Insiders team access</strong> — get all
              the perks of the Insiders tier for everyone in your team, including early access to new features,
              specialized tooling, and more.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Tailwind Plus team access</strong> —
              access to Tailwind Plus for your whole team, including the React UI Kit, expertly crafted templates, and
              500+ thoughtfully designed components.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">
                Expedited bug fixes and issue resolution
              </strong>{" "}
              — we’ll work to address issues you run into on an expedited schedule, even if normally they would be lower
              priority due to their limited impact on the user base.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Website in the showcase</strong> — your
              website will feature prominently in our showcase, bringing more attention to your brand when new Tailwind
              users go to see what is possible with the framework.
            </p>
          </li>
          <li className="p-2 sm:max-lg:nth-[2n+1]:line-y lg:nth-[3n+1]:line-y">
            <p className="text-sm/7 text-gray-600 dark:text-gray-400">
              <strong className="font-semibold text-gray-950 dark:text-white">Support Tailwind CSS</strong> — you’ll be
              helping contribute to the sustainability of the framework, giving you peace of mind that a core technology
              in your stack will continue to function smoothly.
            </p>
          </li>
        </ul>
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

function Sponsors({
  partners,
  ambassadors,
  supporters,
}: {
  partners: Sponsor[];
  ambassadors: Sponsor[];
  supporters: Sponsor[];
}) {
  return (
    <div>
      <div id="sponsors" className="line-y mt-40 grid scroll-mt-24 grid-cols-1 gap-10 xl:grid-cols-2">
        <div className="px-4 py-2 sm:px-2">
          <Eyebrow as="h2" color="pink">
            <a href="#sponsors">Sponsors</a>
          </Eyebrow>
          <p className="max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">
            Thank you to our sponsors.
          </p>
          <p className="mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400">
            We are super grateful to all the following sponsors for supporting the ongoing development and maintenance
            of Tailwind CSS.
          </p>
        </div>
      </div>
      <h2 className="mt-16 px-4 text-2xl/10 font-medium tracking-tight sm:px-2">Partners</h2>
      <div className="relative mt-4">
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
      <h2 className="mt-16 px-4 text-2xl/10 font-medium tracking-tight sm:px-2">Ambassadors</h2>
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {ambassadors.map((company, index) => (
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
      <h2 className="mt-16 px-4 text-2xl/10 font-medium tracking-tight sm:px-2">Supporters</h2>
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-r border-gray-950/5 dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
          <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {supporters.map((company, index) => (
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
    </div>
  );
}

export default async function Sponsor() {
  const { partners, ambassadors, supporters } = getShuffledSponsors();

  return (
    <div className="mt-24">
      <Header />
      <div className="isolate">
        <FeaturedPartners partners={partners} />
        <Partners />
        <PartnerPerks />
        <PartnerPlans />
        <Faqs />
        <Sponsors partners={partners} ambassadors={ambassadors} supporters={supporters} />
        <FooterMeta className="px-4 md:px-6 lg:px-8" />
      </div>
    </div>
  );
}
