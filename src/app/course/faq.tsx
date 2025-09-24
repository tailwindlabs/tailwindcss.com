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
      <FaqGroup title="Licensing">
        <Faq question="How do I redeem my license?">
          <p>
            Once you’ve completed checkout we’ll email you a link to create an account which will effectively redeem
            your license.
          </p>
          <p>
            The email address you use to create an account does not need to match the email you used during checkout.
          </p>
        </Faq>
        <Faq question="Can I upgrade to the Complete Package later?">
          <p>
            Yup! If you start with the Essentials Package and later decide you want access to everything in the Complete
            Package, you can upgrade at any time by paying the difference in price.
          </p>
          <p>There is an "Upgrade" option under the "Account" menu after logging in.</p>
        </Faq>

        <Faq question="Do you offer student or purchasing power parity discounts?">
          <p>
            For situations where price is an issue, we offer a discounted license you can purchase. Email us at{" "}
            <a href="mailto:support@tailwindcss.com">support@tailwindcss.com</a> to apply for a discounted license.
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
        <Faq question="Can I purchase a team license that includes more than 25 seats?">
          <p>
            In general, if you need more than 25 seats we recommend purchasing multiple team licenses — one for each
            team at your company who needs access.
          </p>
          <p>
            If you need more than 25 seats because you're a large agency or other type of company that isn't really
            organized into separate divisions/teams, contact us at{" "}
            <a href="mailto:support@tailwindcss.com">support@tailwindcss.com</a> for large team pricing.
          </p>
        </Faq>
        <Faq question="Can I use course assets in my client projects?">
          <p>Yes, you can use source code or design files from the course to help build out your own projects.</p>
          <p>
            The only thing you can’t do is resell any assets from the course to multiple clients, like as templates or
            in a marketplace. You also cannot distribute the video files from the course in any way.
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
      <FaqGroup title="Compatibility">
        <Faq question="Are Figma files included?">
          <p>
            Yes, Figma files are included with the Complete Package and can be downloaded from the lessons page. Once
            downloaded, simply drag the <code>.fig</code> files into Figma to add them to your account.
          </p>
        </Faq>
        <Faq question="What JS framework is used?">
          <p>
            To keep things simple, all examples use a vanilla Vite and React setup but, because most of the examples do
            not rely on JS at all, the principles are transferrable to any framework.
          </p>
        </Faq>
        <Faq question="What version of Tailwind CSS is used?">
          <p>The course uses Tailwind CSS 4.1, which is the latest version at the time of recording.</p>
        </Faq>
      </FaqGroup>
    </FaqSection>
  );
}
