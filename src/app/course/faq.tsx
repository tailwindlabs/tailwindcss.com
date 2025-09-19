import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import Link from "next/link";

const teamPricing = [
  { seats: 3, price: 399 },
  { seats: 5, price: 649 },
  { seats: 10, price: 1249 },
  { seats: 15, price: 1799 },
  { seats: 25, price: 2749 },
];

export function FaqSection({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <section className="line-y mt-30 grid grid-cols-1 gap-10 lg:grid-cols-2" id="faqs">
      <div className="lg:border-r lg:border-gray-950/5 dark:lg:border-white/10">
        <div className="grid grid-cols-1 gap-y-2 px-4 py-2 max-lg:line-b sm:px-2 lg:line-b/half">
          <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty text-gray-500 uppercase dark:text-gray-300">
            Frequently asked questions
          </p>
          <p className="text-[2.5rem]/none tracking-tight text-pretty">Everything you need to know.</p>
        </div>
      </div>
      <div className="lg:border-l lg:border-gray-950/5 dark:lg:border-white/10">
        <div className={clsx(className, "grid grid-cols-1 gap-10")}>{children}</div>
      </div>
    </section>
  );
}

export function FaqGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group">
      <h3 className="px-4 py-2 font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty text-gray-500 uppercase sm:px-2 dark:text-gray-300">
        {title}
      </h3>
      <dl>{children}</dl>
    </div>
  );
}

export function Faq({ question, children }: { question: string; children: React.ReactNode }) {
  let id =
    "faq-" +
    question
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  return (
    <details
      id={id}
      className="group border-t border-gray-950/5 px-4 py-3 target:[open:true] sm:px-2 dark:border-white/10"
    >
      <summary className="flex w-full cursor-pointer justify-between gap-4 select-none group-open:text-sky-500 [&::-webkit-details-marker]:hidden">
        <div className="text-left text-sm/7 font-semibold text-pretty">{question}</div>
        <PlusIcon className="h-7 w-4 group-open:hidden" />
        <MinusIcon className="h-7 w-4 not-group-open:hidden" />
      </summary>
      <div className="prose mt-4">{children}</div>
    </details>
  );
}

export function Faqs() {
  return (
    <FaqSection>
      <FaqGroup title="General">
        <Faq question="What does “lifetime access” mean exactly?">
          <p>
            Buying a Tailwind Plus license is a <strong>one-time purchase, with no recurring subscription</strong>. When
            you purchase a Tailwind Plus license, you get access to everything in Tailwind Plus forever.
          </p>
        </Faq>
        <Faq question="What does “free updates” include?">
          <p>
            When you purchase a Tailwind Plus license, you get access to every component package and every site template
            available today, plus any additional component packages or templates we release in the future at no
            additional cost.
          </p>
          <p>
            This means that if we add a brand new component package like “Journalism” or design a new social media
            website template, access to those products are included in your original purchase.
          </p>
          <p>
            To get an idea of what updates have looked like in the past,{" "}
            <Link href="/plus/changelog">check out our changelog</Link>.
          </p>
        </Faq>
        <Faq question="Do you offer student or purchasing power parity discounts?">
          <p>
            For situations where price is an issue, we offer a discounted restricted license you can purchase if either:
          </p>
          <ul className="list-disc *:marker:content-[auto]">
            <li>You are a student using Tailwind Plus purely for educational purposes, or</li>
            <li>
              You are an individual using Tailwind Plus for commercial projects and your annual personal income from all
              sources <strong className="font-semibold">does not exceed $30,000 USD</strong>
            </li>
          </ul>
          <p>
            To purchase a discounted restricted license, email us at{" "}
            <a href="mailto:support@tailwindcss.com">support@tailwindcss.com</a>.
          </p>
        </Faq>
      </FaqGroup>
      <FaqGroup title="Compatibility">
        <Faq question="Are Figma, Sketch, or Adobe XD files included?">
          <p>No, design assets for tools like Figma, Sketch, or Adobe XD are not included.</p>
          <p>
            We don't produce high-quality design artifacts as part of our own design and development process, so
            building these extra resources means we can't spend as much time creating new components and templates in
            code which is where we believe we can provide the most value.
          </p>
        </Faq>
        <Faq question="What JS framework is used?">
          <p>
            Our <Link href="/plus/templates">website templates</Link> are built using Next.js, so all of the markup is
            written using React.
          </p>
          <p>
            Our <Link href="/plus/ui-blocks">components</Link> are provided in three formats: React, Vue, and vanilla
            HTML.
          </p>
          <p>
            The React and Vue examples are fully interactive, and are powered by{" "}
            <a href="https://headlessui.dev">Headless UI</a> — a library of unstyled components we designed to integrate
            perfectly with Tailwind CSS.
          </p>
          <p>
            The vanilla HTML examples <strong>do not include any JavaScript</strong> and are designed for people who
            prefer to write any necessary JavaScript themselves.
          </p>
          <p>
            Most of the components do not rely on JS at all, but for the ones that do (dropdowns, dialogs, etc.) we've
            provided some simple comments in the HTML to explain things like what classes you need to use for different
            states (like a toggle switch being on or off), or what classes we recommend for transitioning elements on to
            or off of the screen (like a dialog opening).
          </p>
          <p>
            To get a better idea of how this looks in practice,{" "}
            <Link href="/plus/ui-blocks/documentation#using-html">check out our documentation</Link>.
          </p>
        </Faq>
        <Faq question="What version of Tailwind CSS is used?">
          <p>
            Everything in Tailwind Plus is designed and developed for the latest version of Tailwind CSS, which is
            currently Tailwind CSS .
          </p>
        </Faq>
        <Faq question="What browsers are supported?">
          <p>
            The components and templates in Tailwind Plus are designed to work in the latest, stable releases of all
            major browsers, including Chrome, Firefox, Safari, and Edge.
          </p>
          <p>We don't support Internet Explorer 11.</p>
        </Faq>
      </FaqGroup>
      <FaqGroup title="Licensing">
        <Faq question="Do I need to purchase a license for each project I work on?">
          <p>
            Unlike most other templates/themes, you don't have to buy a new Tailwind Plus license every time you want to
            use it on a new project.
          </p>
          <p>
            As long as what you're building is allowed as per the license, you can build as many sites as you want
            without ever having to buy an additional license.
          </p>
          <p>
            For more information and examples, <Link href="/plus/license">read through our license</Link>.
          </p>
        </Faq>
        <Faq question="Can I use Tailwind Plus for client projects?">
          <p>
            Yes! As long what you're building is a custom website developed for a single client, you can totally use
            components and templates in Tailwind Plus to help build it.
          </p>
          <p>
            The only thing you can't do is use Tailwind Plus to build a website or template that is resold to multiple
            clients.
          </p>
          <p>
            For more information and examples, <Link href="/plus/license">read through our license</Link>.
          </p>
        </Faq>
        <Faq question="Can I use Tailwind Plus for my own commercial projects?">
          <p>
            Absolutely! Your license gives you permission to build as many of your own projects as you like, whether
            those are simple public websites or SaaS applications that end users need to pay to access.
          </p>
          <p>
            As long as what you’re building isn’t a website builder or other tool that customers can use to create their
            own sites using elements that originate from Tailwind Plus, you’re good to go.
          </p>
          <p>
            For more information and examples, <Link href="/plus/license">read through our license</Link>.
          </p>
        </Faq>
        <Faq question="Can I use Tailwind Plus in open source projects?">
          <p>
            Yep! As long as what you're building is some sort of actual website and not a derivative component library,
            theme builder, or other product where the primary purpose is clearly to repackage and redistribute our
            components, it's totally okay for that project to be open source.
          </p>
          <p>
            For more information and examples of what is and isn't okay,{" "}
            <Link href="/plus/license">read through our license</Link>.
          </p>
        </Faq>
        <Faq question="Can I buy a team license?">
          <p>
            Sure! We offer team discounts on the Complete Package based on the number of licenses you’d like to
            purchase:
          </p>
          <ul className="flex-col pr-6 pl-0">
            {teamPricing.map((option) => (
              <li key={option.seats} className="mt-0 flex items-center p-0">
                <p className="grow">Up to {option.seats} seats </p>{" "}
                <a href="#" className="m-0">
                  ${option.price} →
                </a>
              </li>
            ))}
          </ul>
        </Faq>
        <Faq question="Can I upgrade to a team license later?">
          <p>
            Yup! If you're a solo developer you can start with a regular license, and then upgrade to the team license
            later if other developers join your team.
          </p>
          <p>There is an "Upgrade to Team License" option under the "Account" menu after logging in.</p>
        </Faq>
        <Faq question="Can I purchase a team license that includes more than 25 seats?">
          <p>
            In general, if you need more than 25 seats we recommend purchasing multiple team licenses — one for each
            team at your company who needs access.
          </p>
          <p>
            For example, if you run an ecommerce business, you might purchase a team license for the storefront team,
            then down the road another team license for the marketing team, then another for the data science team, and
            so on.
          </p>
          <p>
            If you need more than 25 seats because you're a large agency or other type of company that isn't really
            organized into separate divisions/teams, contact us at{" "}
            <a href="mailto:support@tailwindcss.com">support@tailwindcss.com</a> for large team pricing.
          </p>
        </Faq>
      </FaqGroup>
      <FaqGroup title="Support">
        <Faq question="Do you offer technical support?">
          <p>
            Tailwind Plus is a self-serve product, meaning that while we do offer customer support for things like
            account management and licensing related concerns, the expectation is that customers have the requisite
            knowledge of Tailwind CSS, HTML, React, and Vue to use the product successfully.
          </p>
          <p>
            Because every project is different and the way independently authored pieces of code interact can be complex
            and time-consuming to understand, <strong>we do not offer technical support or consulting</strong>.
          </p>
        </Faq>
        <Faq question="What is your refund policy?">
          <p>
            If you're unhappy with your purchase for any reason, email us at{" "}
            <a href="mailto:support@tailwindcss.com">support@tailwindcss.com</a> within 30 days and we'll refund you in
            full, no questions asked.
          </p>
        </Faq>
      </FaqGroup>
    </FaqSection>
  );
}
