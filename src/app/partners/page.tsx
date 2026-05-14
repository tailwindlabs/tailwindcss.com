import { FooterMeta } from "@/components/footer";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { getDirectorySponsors, type DirectorySponsor } from "@/lib/sponsors";

import { PartnerDirectory } from "./partner-directory";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Become a Tailwind CSS partner to support the project and get your brand in front of millions of developers.",
  openGraph: {
    type: "article",
    title: "Partners - Tailwind CSS",
    description:
      "Become a Tailwind CSS partner to support the project and get your brand in front of millions of developers.",
    url: "https://tailwindcss.com/partners",
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
    <div className="mt-28 sm:mt-32 lg:mt-40">
      <div>
        <h1 className="inline-block rounded-md bg-gray-950/5 px-3 py-1 font-mono text-xs/5 tracking-widest text-gray-950 uppercase dark:bg-white/10 dark:text-white">
          Partners
        </h1>
        <p className="mt-6 max-w-[40ch] text-[2.5rem]/[2.75rem] tracking-tight text-pretty sm:text-[3.5rem]/[3.75rem]">
          <strong className="font-normal text-gray-950 dark:text-white">Become part of the Tailwind ecosystem.</strong>{" "}
          <span className="text-gray-500 dark:text-gray-400">
            Partner with Tailwind CSS to support the project, get your brand in front of millions of developers, and get
            direct access to the team.
          </span>
        </p>
      </div>
      <div className="mt-14 flex gap-4 whitespace-nowrap max-sm:flex-col">
        <DarkButtonLink href="#why" className="inline-flex items-center justify-center gap-2">
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
  );
}

function TestimonialLogo({ company, ...props }: { company: string } & React.SVGProps<SVGSVGElement>) {
  switch (company) {
    case "Vercel":
      return (
        <svg viewBox="0 0 250 50" fill="currentColor" {...props}>
          <path d="M57.517 49.9594L28.76 0.0234375L0 49.9604L57.517 49.9594ZM86.525 47.6864L110.559 2.29344H100.163L83.584 35.2604L67.005 2.29444H56.609L80.643 47.6874L86.525 47.6864ZM250.316 2.29344V47.6864H241.71V2.29344H250.316ZM202.41 30.7434C202.41 27.2064 203.149 24.0944 204.628 21.4094C206.107 18.7244 208.169 16.6574 210.814 15.2084C213.458 13.7584 216.551 13.0344 220.093 13.0344C223.23 13.0344 226.054 13.7164 228.565 15.0804C231.075 16.4444 233.069 18.4684 234.548 21.1534C236.027 23.8394 236.79 27.1204 236.834 30.9994V32.9814H211.487C211.665 35.7944 212.495 38.0114 213.974 39.6304C215.498 41.2074 217.538 41.9954 220.093 41.9954C221.665 42.0078 223.206 41.5638 224.53 40.7174C225.855 39.8877 226.907 38.687 227.556 37.2644L236.364 37.9044C235.288 41.1004 233.271 43.6584 230.313 45.5764C227.354 47.4944 223.948 48.4534 220.093 48.4534C216.551 48.4534 213.458 47.7284 210.814 46.2794C208.169 44.8294 206.107 42.7634 204.628 40.0784C203.149 37.3924 202.41 34.2814 202.41 30.7434ZM227.959 27.5474C227.645 24.7774 226.772 22.7524 225.337 21.4734C223.902 20.1524 222.155 19.4914 220.093 19.4914C217.717 19.4914 215.79 20.1944 214.311 21.6014C212.83 23.0074 211.913 24.9894 211.553 27.5474H227.959ZM187.888 21.4734C189.322 22.6234 190.218 24.2234 190.577 26.2684L199.452 25.8204C199.138 23.2204 198.22 20.9624 196.695 19.0444C195.171 17.1264 193.2 15.6554 190.778 14.6324C188.403 13.5674 185.781 13.0344 182.912 13.0344C179.37 13.0344 176.278 13.7584 173.633 15.2084C170.988 16.6574 168.926 18.7244 167.447 21.4094C165.968 24.0944 165.229 27.2064 165.229 30.7434C165.229 34.2814 165.968 37.3934 167.447 40.0774C168.926 42.7634 170.988 44.8304 173.633 46.2794C176.278 47.7294 179.37 48.4534 182.912 48.4534C185.87 48.4534 188.559 47.9204 190.98 46.8544C193.401 45.7464 195.373 44.1914 196.897 42.1874C198.422 40.1844 199.34 37.8404 199.653 35.1554L190.712 34.7714C190.398 37.0304 189.523 38.7784 188.089 40.0134C186.655 41.2074 184.928 41.8034 182.912 41.8034C180.133 41.8034 177.981 40.8454 176.457 38.9274C174.933 37.0094 174.172 34.2814 174.172 30.7434C174.172 27.2064 174.933 24.4784 176.457 22.5604C177.981 20.6424 180.133 19.6834 182.912 19.6834C184.84 19.6834 186.497 20.2804 187.888 21.4734ZM144.229 13.8004H152.239L152.47 20.3214C153.038 18.4754 153.828 17.0414 154.841 16.0214C156.309 14.5404 158.356 13.8004 160.981 13.8004H164.252V20.7804H160.915C159.045 20.7804 157.511 21.0344 156.309 21.5414C155.177 22.0273 154.238 22.8757 153.64 23.9534C153.062 25.0534 152.773 26.4494 152.773 28.1414V47.6864H144.229V13.8004ZM107.288 21.4104C105.809 24.0944 105.069 27.2064 105.069 30.7434C105.069 34.2814 105.809 37.3934 107.288 40.0774C108.767 42.7634 110.829 44.8304 113.474 46.2794C116.118 47.7294 119.211 48.4534 122.752 48.4534C126.607 48.4534 130.014 47.4934 132.972 45.5764C135.931 43.6584 137.948 41.1004 139.023 37.9044L130.216 37.2644C129.567 38.687 128.515 39.8877 127.19 40.7174C125.865 41.5638 124.324 42.0077 122.752 41.9954C120.197 41.9954 118.158 41.2074 116.634 39.6304C115.154 38.0104 114.325 35.7944 114.146 32.9804H139.495V31.0004C139.449 27.1214 138.687 23.8404 137.208 21.1544C135.729 18.4694 133.735 16.4444 131.225 15.0814C128.714 13.7174 125.89 13.0354 122.752 13.0354C119.211 13.0354 116.118 13.7594 113.474 15.2094C110.829 16.6584 108.767 18.7254 107.288 21.4104ZM127.997 21.4734C129.431 22.7524 130.305 24.7764 130.619 27.5474H114.213C114.572 24.9894 115.491 23.0074 116.97 21.6014C118.449 20.1944 120.377 19.4914 122.752 19.4914C124.814 19.4914 126.562 20.1514 127.997 21.4734Z" />
        </svg>
      );
    case "Shopify":
      return (
        <svg viewBox="0 0 175 50" fill="currentColor" {...props}>
          <path d="M60.5422 27.804C59.0522 26.98 58.2682 26.314 58.2682 25.373C58.2682 24.157 59.3272 23.412 61.0132 23.412C62.9732 23.412 64.6992 24.235 64.6992 24.235L66.0712 20.039C66.0712 20.039 64.8162 19.059 61.0912 19.059C55.9152 19.059 52.3082 22.039 52.3082 26.196C52.3082 28.549 53.9942 30.353 56.2292 31.647C58.0332 32.667 58.6602 33.412 58.6602 34.471C58.6602 35.608 57.7582 36.51 56.0722 36.51C53.5632 36.51 51.2102 35.216 51.2102 35.216L49.7592 39.412C49.7592 39.412 51.9552 40.862 55.6022 40.862C60.9342 40.862 64.7382 38.235 64.7382 33.529C64.8162 30.941 62.8562 29.137 60.5422 27.804ZM81.7952 18.98C79.1682 18.98 77.1292 20.235 75.5212 22.118L75.4432 22.078L77.7172 10.157H71.7572L65.9932 40.471H71.9142L73.8742 30.118C74.6582 26.196 76.6582 23.804 78.5402 23.804C79.8732 23.804 80.3832 24.706 80.3832 26C80.3832 26.823 80.3052 27.804 80.1092 28.627L77.8742 40.51H83.7952L86.1082 28.274C86.3832 26.98 86.5392 25.451 86.5392 24.392C86.6182 20.98 84.8932 18.98 81.7952 18.98ZM100.028 18.98C92.8922 18.98 88.1472 25.412 88.1472 32.588C88.1472 37.176 90.9702 40.902 96.3032 40.902C103.322 40.902 108.027 34.627 108.027 27.294C108.066 23.019 105.596 18.98 100.028 18.98ZM97.1262 36.314C95.0872 36.314 94.2642 34.588 94.2642 32.431C94.2642 29.019 96.0282 23.49 99.2442 23.49C101.361 23.49 102.028 25.294 102.028 27.059C102.028 30.745 100.263 36.314 97.1262 36.314ZM123.241 18.98C119.242 18.98 116.967 22.51 116.967 22.51H116.889L117.242 19.333H111.988C111.713 21.49 111.243 24.745 110.772 27.216L106.655 48.863H112.576L114.223 40.078H114.34C114.34 40.078 115.556 40.863 117.83 40.863C124.81 40.863 129.358 33.725 129.358 26.51C129.358 22.549 127.594 18.98 123.241 18.98ZM117.595 36.431C116.065 36.431 115.164 35.569 115.164 35.569L116.144 30.039C116.85 26.353 118.771 23.882 120.81 23.882C122.614 23.882 123.163 25.569 123.163 27.137C123.163 30.941 120.888 36.431 117.595 36.431ZM137.828 10.47C135.946 10.47 134.417 11.96 134.417 13.921C134.417 15.686 135.514 16.901 137.201 16.901H137.279C139.122 16.901 140.73 15.647 140.769 13.451C140.808 11.686 139.632 10.47 137.828 10.47ZM129.515 40.47H135.475L139.514 19.45H133.515L129.515 40.47ZM154.571 19.412H150.454L150.65 18.432C151.003 16.392 152.179 14.588 154.179 14.588C154.82 14.5881 155.455 14.6942 156.061 14.902L157.237 10.275C157.237 10.275 156.218 9.765 154.022 9.765C151.905 9.765 149.826 10.353 148.219 11.725C146.18 13.451 145.239 15.922 144.768 18.431L144.611 19.411H141.867L141.004 23.882H143.749L140.612 40.471H146.533L149.67 23.882H153.748L154.571 19.412ZM168.844 19.45C168.844 19.45 165.119 28.784 163.472 33.882H163.393C163.276 32.235 161.943 19.451 161.943 19.451H155.708L159.276 38.745C159.355 39.176 159.315 39.451 159.159 39.725C158.453 41.059 157.316 42.353 155.943 43.295C154.845 44.118 153.591 44.627 152.61 44.98L154.257 50C155.473 49.725 157.943 48.745 160.06 46.784C162.766 44.235 165.276 40.353 167.824 35.02L175.078 19.45H168.844ZM29.3302 5.804C29.3302 5.804 28.7812 5.961 27.8802 6.235C27.6919 5.64185 27.4558 5.06495 27.1742 4.51C26.1542 2.549 24.6242 1.49 22.8212 1.49C22.7032 1.49 22.5862 1.49 22.4292 1.53C22.3892 1.451 22.3112 1.412 22.2722 1.333C21.4882 0.471002 20.4682 0.0780022 19.2522 0.118002C16.9002 0.196002 14.5472 1.882 12.6652 4.902C11.3322 7.02 10.3132 9.686 10.0382 11.765C7.33317 12.588 5.45017 13.176 5.41117 13.215C4.03917 13.647 4.00017 13.686 3.84317 14.98C3.72517 15.96 0.118164 43.569 0.118164 43.569L29.7612 48.706V5.765C29.5262 5.765 29.4092 5.804 29.3302 5.804ZM22.4682 7.922C20.9002 8.392 19.1742 8.942 17.4882 9.451C17.9582 7.608 18.9002 5.765 19.9982 4.549C20.4292 4.118 21.0182 3.608 21.6842 3.294C22.3502 4.706 22.5072 6.628 22.4682 7.922ZM19.2532 1.726C19.8025 1.726 20.2728 1.84333 20.6642 2.078C20.0372 2.392 19.4102 2.902 18.8212 3.49C17.3312 5.098 16.1942 7.608 15.7242 10C14.3122 10.431 12.9012 10.863 11.6072 11.255C12.4692 7.49 15.6452 1.805 19.2532 1.726ZM14.7042 23.293C14.8612 25.803 21.4882 26.352 21.8802 32.273C22.1542 36.94 19.4102 40.117 15.4502 40.352C10.6652 40.666 8.03817 37.842 8.03817 37.842L9.05817 33.528C9.05817 33.528 11.6852 35.528 13.8022 35.372C15.1752 35.293 15.6852 34.156 15.6452 33.372C15.4492 30.077 10.0382 30.274 9.68517 24.862C9.37117 20.312 12.3522 15.724 18.9392 15.293C21.4882 15.136 22.7822 15.763 22.7822 15.763L21.2922 21.411C21.2922 21.411 19.6062 20.626 17.6062 20.783C14.7042 20.979 14.6662 22.823 14.7042 23.293ZM24.0372 7.45C24.0372 6.273 23.8802 4.587 23.3312 3.176C25.1342 3.528 25.9972 5.528 26.3892 6.744C25.6832 6.94 24.8992 7.17534 24.0372 7.45ZM30.6632 48.628L42.9752 45.568C42.9752 45.568 37.6822 9.765 37.6432 9.53C37.6278 9.42461 37.5763 9.32782 37.4975 9.25615C37.4188 9.18448 37.3175 9.14237 37.2112 9.137C37.0152 9.137 33.5652 9.059 33.5652 9.059C33.5652 9.059 31.4472 7.019 30.6632 6.235V48.628Z" />
        </svg>
      );
    case "Resend":
      return (
        <svg viewBox="65 28 190 40" fill="currentColor" {...props}>
          <path d="M117.236 39.269c8.585 0 14.832 5.914 14.389 16.663h-20.907c.781 2.987 2.867 5.554 7.042 5.554 2.338 0 4.474-.639 6.086-2.637h7.215l-.121.64C129.69 64.963 123.403 68 117.76 68c-8.948 0-14.954-5.994-14.954-14.346 0-8.351 6.006-14.385 14.43-14.385Zm60.498 0c8.626 0 14.833 5.914 14.43 16.663h-20.913c.771 2.987 2.842 5.554 7.048 5.554 2.338 0 4.473-.639 6.046-2.637h7.255l-.121.64c-1.25 5.474-7.538 8.511-13.18 8.511-8.948 0-14.953-5.994-14.953-14.346 0-8.351 6.005-14.385 14.388-14.385ZM255 67.2h-7.819l.402-3.876c-1.088 2.317-4.594 4.595-8.988 4.595-7.255 0-13.139-5.514-13.139-14.226 0-8.711 5.804-14.225 13.139-14.225 3.991 0 6.45 1.278 8.626 3.476V28H255v39.2ZM146.981 39.109c6.369 0 11.971 2.278 13.583 7.872l.162.6h-7.941c-1.693-2.078-3.95-2.358-5.804-2.358-1.733 0-4.473.44-4.473 2.118 0 1.558 1.813 2.078 3.385 2.277l4.595.48c7.295.64 10.52 3.477 10.52 9.031 0 6.393-6.409 8.791-12.737 8.791s-12.898-2.797-14.147-8.471l-.121-.6h8.142c1.128 3.197 6.328 2.957 6.126 2.957 3.063 0 4.958-.919 4.958-2.397 0-.96-.323-2.078-3.467-2.478l-4.796-.48c-6.328-.439-10.157-3.756-10.157-8.71 0-6.075 5.804-8.632 12.172-8.632ZM89.183 28c7.658 0 12.213 4.516 12.213 10.51s-4.555 10.509-12.213 10.509h-3.869l19.226 18.182H90.957L76.326 53.415c-1.048-.96-1.532-2.078-1.532-3.037 0-1.359.968-2.558 2.822-3.077l7.537-1.998c2.861-.76 4.836-2.957 4.836-5.834 0-3.517-2.902-5.555-6.489-5.555H65V28h24.183ZM211.067 39.309c6.852 0 11.648 4.955 11.648 12.028V67.2h-7.819V52.655c0-3.996-2.136-6.393-5.925-6.393-3.789 0-6.247 2.477-6.247 6.393v14.546h-7.659V39.868h7.78l-.363 4.356c1.129-2.198 4.635-4.915 8.585-4.915Zm29.382 6.953c-4.715 0-7.214 3.476-7.214 7.432 0 4.236 2.822 7.473 7.214 7.473 4.233 0 6.973-3.277 6.973-7.473 0-4.195-2.66-7.432-6.973-7.432Zm-123.213-.8c-3.81 0-5.987 2.256-6.663 5.275h13.188c-.081-.348-.184-.72-.318-1.119-.968-2.717-3.225-4.156-6.207-4.156Zm60.498 0c-3.777 0-5.948 2.256-6.622 5.275h13.187c-.08-.348-.183-.72-.317-1.119-.968-2.717-3.225-4.156-6.248-4.156Z" />
        </svg>
      );
    case "CodeRabbit":
      return (
        <svg viewBox="35 30 250 36" fill="currentColor" {...props}>
          <path d="M89.672 42.328c1.01-1.84 2.419-3.28 4.225-4.309 1.807-1.028 3.858-1.542 6.145-1.542 2.806 0 5.204.75 7.205 2.242 2.001 1.49 3.327 3.527 4.001 6.108h-6.328c-.47-.997-1.143-1.748-2.001-2.273-.867-.524-1.847-.781-2.95-.781-1.775 0-3.204.617-4.306 1.861s-1.654 2.91-1.654 4.987q0 3.119 1.653 4.988c1.103 1.244 2.532 1.861 4.308 1.861 1.102 0 2.082-.257 2.949-.782.868-.524 1.531-1.275 2.001-2.272h6.328c-.674 2.581-2.011 4.607-4.001 6.087-2.001 1.481-4.399 2.222-7.205 2.222q-3.433 0-6.145-1.543a10.9 10.9 0 0 1-4.225-4.288c-1.01-1.83-1.51-3.918-1.51-6.273s.5-4.452 1.51-6.293M117.698 59.645c-1.47-.792-2.623-1.923-3.47-3.394-.837-1.47-1.266-3.187-1.266-5.151s.429-3.661 1.276-5.142c.857-1.48 2.021-2.612 3.501-3.404s3.143-1.182 4.98-1.182 3.501.39 4.981 1.182 2.643 1.923 3.501 3.404c.857 1.48 1.275 3.198 1.275 5.142 0 1.943-.428 3.66-1.296 5.141a8.8 8.8 0 0 1-3.531 3.404c-1.49.792-3.154 1.182-5.001 1.182s-3.491-.39-4.96-1.182zm7.777-5.05c.775-.812 1.164-1.973 1.164-3.495s-.378-2.674-1.123-3.497c-.756-.812-1.674-1.223-2.776-1.223-1.103 0-2.052.4-2.797 1.203-.745.802-1.112 1.974-1.112 3.506 0 1.533.367 2.684 1.092 3.497.724.812 1.643 1.223 2.746 1.223 1.101 0 2.041-.411 2.806-1.223zM134.824 45.938c.724-1.47 1.725-2.602 2.98-3.394 1.256-.791 2.654-1.182 4.205-1.182 1.235 0 2.358.257 3.378.782 1.021.524 1.827 1.223 2.408 2.097V35.46h5.757V60.55h-5.757v-2.714c-.54.904-1.306 1.624-2.306 2.17-1 .544-2.164.812-3.48.812-1.551 0-2.949-.401-4.205-1.203-1.255-.803-2.245-1.944-2.98-3.425-.725-1.48-1.092-3.187-1.092-5.141s.367-3.65 1.092-5.121zm11.778 1.727c-.797-.832-1.766-1.254-2.909-1.254q-1.715 0-2.909 1.234c-.796.823-1.194 1.964-1.194 3.404s.398 2.591 1.194 3.444c.796.844 1.766 1.276 2.909 1.276s2.112-.422 2.909-1.255q1.194-1.25 1.193-3.424t-1.193-3.425M174.658 52.488h-13.023c.092 1.172.47 2.077 1.123 2.694.663.617 1.48.936 2.439.936 1.44 0 2.439-.607 3.001-1.83h6.123a8.35 8.35 0 0 1-1.704 3.352c-.817.997-1.847 1.779-3.082 2.344-1.235.566-2.614.843-4.144.843-1.836 0-3.48-.39-4.909-1.182q-2.159-1.188-3.368-3.394c-.806-1.47-1.215-3.187-1.215-5.151q0-2.947 1.194-5.152c.797-1.47 1.909-2.602 3.348-3.394 1.44-.791 3.082-1.182 4.95-1.182 1.867 0 3.43.38 4.848 1.151a8.27 8.27 0 0 1 3.317 3.291q1.194 2.132 1.194 4.987c0 .545-.03 1.111-.102 1.697zm-5.786-3.219q0-1.496-1.011-2.375c-.674-.586-1.51-.885-2.521-.885s-1.776.278-2.439.844q-.996.847-1.225 2.406h7.206zM189.498 60.56l-4.908-8.988h-1.379v8.987h-5.756V36.755h9.656c1.867 0 3.449.33 4.766.987 1.316.659 2.296 1.553 2.949 2.694.654 1.142.98 2.417.98 3.816 0 1.583-.439 2.992-1.327 4.236s-2.194 2.129-3.919 2.643l5.449 9.43h-6.511m-6.296-13.09h3.572c1.05 0 1.847-.258 2.367-.782.531-.525.796-1.255.796-2.201s-.265-1.614-.796-2.139-1.317-.781-2.367-.781h-3.572zM198.673 45.937c.726-1.47 1.726-2.602 2.981-3.394 1.256-.791 2.664-1.07 4.206-1.07h11.542V60.55h-5.756v-2.674c-.561.885-1.337 1.594-2.337 2.14-1 .544-2.163.812-3.481.812-1.53 0-2.918-.401-4.174-1.203-1.255-.802-2.245-1.944-2.981-3.425-.723-1.48-1.09-3.187-1.09-5.141s.367-3.65 1.09-5.121m11.779 1.727c-.796-.833-1.766-1.254-2.908-1.254q-1.716 0-2.909 1.234c-.797.822-1.195 1.964-1.195 3.404q0 2.162 1.195 3.444c.795.844 1.766 1.275 2.909 1.275s2.112-.421 2.908-1.254q1.194-1.25 1.194-3.424t-1.194-3.425M228.986 42.174c1.011-.545 2.164-.812 3.47-.812 1.552 0 2.95.39 4.205 1.182 1.256.792 2.246 1.924 2.981 3.394.724 1.47 1.092 3.177 1.092 5.12s-.368 3.662-1.092 5.142-1.725 2.623-2.981 3.425-2.653 1.203-4.205 1.203c-1.327 0-2.479-.267-3.47-.792-.99-.535-1.766-1.234-2.327-2.118v2.643h-5.756V35.46h5.756v8.853c.541-.884 1.317-1.594 2.327-2.139m4.696 5.481q-1.192-1.234-2.95-1.234c-1.173 0-2.113.422-2.909 1.255q-1.194 1.25-1.194 3.424t1.194 3.424c.796.833 1.766 1.255 2.909 1.255s2.122-.422 2.929-1.275c.806-.843 1.215-1.995 1.215-3.445s-.399-2.581-1.194-3.404M251.165 42.174c1.011-.545 2.164-.812 3.47-.812 1.552 0 2.95.39 4.206 1.182q1.88 1.188 2.979 3.394c.725 1.47 1.092 3.177 1.092 5.12s-.367 3.662-1.092 5.142-1.725 2.623-2.979 3.425c-1.256.802-2.654 1.203-4.206 1.203-1.326 0-2.48-.267-3.47-.792-.99-.535-1.766-1.234-2.327-2.118v2.643h-5.756V35.46h5.756v8.853c.54-.884 1.317-1.594 2.327-2.139m4.695 5.481c-.796-.822-1.775-1.234-2.95-1.234-1.173 0-2.112.422-2.909 1.255q-1.192 1.25-1.193 3.424.001 2.175 1.193 3.424c.797.833 1.766 1.255 2.909 1.255s2.124-.422 2.93-1.275c.806-.843 1.214-1.995 1.214-3.445s-.397-2.581-1.194-3.404M265.689 38.77c-.644-.596-.96-1.337-.96-2.221s.316-1.656.96-2.252c.642-.596 1.459-.895 2.469-.895s1.797.298 2.439.895c.644.596.96 1.347.96 2.252s-.316 1.625-.96 2.221c-.642.597-1.45.895-2.439.895s-1.837-.298-2.469-.895m5.337 2.87v18.92h-5.756V41.629h5.756zM284.988 55.634v4.916h-2.929c-2.082 0-3.714-.515-4.878-1.543s-1.745-2.704-1.745-5.039v-7.527h-2.287V41.63h2.287v-4.607h5.756v4.607h3.766v4.812h-3.766v7.6c0 .565.132.976.409 1.223q.398.37 1.346.37h2.052z" />
          <path
            fillRule="evenodd"
            d="M53.183 30c10.04 0 18.18 8.059 18.18 18s-8.14 18-18.18 18C43.142 66 35 57.941 35 48s8.14-18 18.182-18m-3.308 5.04c.8 5.688 4.1 4.206 6.043 8.126 0 0-3.28-4.414-8.672-2.789 0 0 1.965 4.085 7.778 4.92.002.006.467 1.581.607 1.86 0 0-8.953-4.623-11.671 4.248-2.023-.453-2.702 1.721-.377 3.206 0 0 .396-1.556 1.36-2.017 0 0-2.069 2.283.363 5.017h8.726c.211-.345 1.144-2.166-1.164-3.543 1.63-.023 2.955 3.02 4.382 3.564h2.075c.07-.17.217-.675-.128-1.13-.531-.603-1.695-.522-1.684-1.638.401-5.191 8.265-3.597 8.015-9.845 0 0-2.533-3.207-5.718-3.39-2.054-.12-2.552.152-2.641.354-.128-1.05-1.034-5.912-7.294-6.943"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
}

function WhyPartner() {
  const features = [
    {
      name: "Your brand in front of millions of developers",
      description:
        "A sponsorship puts your brand in front of tens of millions of frontend developers building with Tailwind CSS.",
      testimonial: {
        company: "Resend",
        quote:
          "We've been part of the Tailwind CSS partner program since day one. Being on the homepage of a tool this widely used has put Resend in front of exactly the developers we want to reach.",
        name: "Zeno Rocha",
        title: "Founder & CEO, Resend",
      },
    },
    {
      name: "Direct access to the Tailwind CSS team",
      description:
        "Your team gets direct access to the Tailwind CSS team. A Slack channel, a call, a prioritized bug fix, or whatever it takes to unblock your team.",
      testimonial: {
        company: "Vercel",
        quote:
          "We build on Tailwind every day at Vercel. Having direct access to the Tailwind CSS team means we can move faster without worrying about getting blocked by framework-level issues. When something comes up, we can resolve it quickly with the team in Slack.",
        name: "Andrew Qu",
        title: "Chief of Software, Vercel",
      },
    },
    {
      name: "Tailored partnership opportunities",
      description:
        "Every partnership looks different. We'll work with you to find something that actually makes sense for your product.",
      testimonial: {
        company: "CodeRabbit",
        quote:
          "We worked with the Tailwind team to find a way to put CodeRabbit in front of their audience that felt native to how our product actually works. At the same time, we get to support a tool our team uses every day.",
        name: "Aravind Putrevu",
        title: "VP of Growth, CodeRabbit",
      },
    },
    {
      name: "Support the future of Tailwind CSS",
      description:
        "Tailwind CSS isn't owned by a big tech company. Your sponsorship directly funds the small team building the tool your developers use every day.",
      testimonial: {
        company: "Shopify",
        quote:
          "Tailwind has become core infrastructure for how the modern web gets built. At Shopify, we rely on it across the company, and supporting the small team behind it is an easy call.",
        name: "Ben Sehl",
        title: "Product Director, Shopify",
      },
    },
  ];

  return (
    <section id="why" className="scroll-mt-24">
      <div className="mt-20 sm:mt-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_7fr] lg:items-start lg:gap-20">
          <div>
            <h2 className="inline-block rounded-md bg-gray-950/5 px-3 py-1 font-mono text-xs/5 tracking-widest text-gray-950 uppercase dark:bg-white/10 dark:text-white">
              <a href="#why">
                <span aria-hidden="true">02 / </span>
                Why become a partner?
              </a>
            </h2>
            <p className="mt-8 text-lg/7 font-medium tracking-tight text-pretty">
              <strong className="font-medium text-gray-950 dark:text-white">More than a sponsorship.</strong>{" "}
              <span className="text-gray-500 dark:text-gray-400">
                Get your brand in front of millions of developers, direct access to the team behind Tailwind CSS, and
                help shape the future of the framework.
              </span>
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col bg-white p-8 dark:border-white/10 dark:bg-white/5">
                  <h3
                    className="text-lg/7 font-semibold text-pretty text-gray-950 dark:text-white"
                    style={{ fontVariationSettings: '"opsz" 32' }}
                  >
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm/6 text-gray-700 dark:text-gray-400">{feature.description}</p>
                  <blockquote className="mt-auto pt-16 sm:pt-24">
                    <p
                      className="max-w-[65ch] text-sm/6 text-pretty text-gray-500 dark:text-gray-400"
                      style={{ hangingPunctuation: "first last" }}
                    >
                      &ldquo;{feature.testimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm/6 font-semibold">{feature.testimonial.name}</p>
                        <p className="text-sm/6 text-gray-500">{feature.testimonial.title}</p>
                      </div>
                      <TestimonialLogo
                        aria-hidden="true"
                        company={feature.testimonial.company}
                        className={clsx(
                          "w-auto shrink-0",
                          ["Vercel", "Resend"].includes(feature.testimonial.company)
                            ? "h-4.5"
                            : ["CodeRabbit"].includes(feature.testimonial.company)
                              ? "h-5"
                              : "h-7",
                        )}
                      />
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckmarkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="mt-1 size-4 shrink-0 text-gray-950 dark:text-white"
    >
      <path
        fillRule="evenodd"
        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
        clipRule="evenodd"
      />
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
    },
  ];

  return (
    <section id="pricing" className="mt-20 scroll-mt-24 sm:mt-40">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_7fr] lg:items-start lg:gap-20">
        <div>
          <h2 className="inline-block rounded-md bg-gray-950/5 px-3 py-1 font-mono text-xs/5 tracking-widest text-gray-950 uppercase dark:bg-white/10 dark:text-white">
            <a href="#pricing">
              <span aria-hidden="true">03 / </span>
              Pricing
            </a>
          </h2>
          <p className="mt-8 text-lg/7 font-medium tracking-tight text-pretty">
            <strong className="font-medium text-gray-950 dark:text-white">Choose the right plan for your team.</strong>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Whether you&apos;re looking for visibility, access to the team, or just want to support the project.
            </span>
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="flex h-full flex-col gap-y-6 bg-white p-8 dark:bg-white/5">
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
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-y-5 text-[0.8125rem]/6 text-gray-600 dark:text-gray-300"
                >
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="grid grid-cols-[auto_1fr] gap-3">
                      <CheckmarkIcon />
                      <p className="text-pretty">
                        <strong className="font-semibold text-gray-950 dark:text-white">{feature.name}</strong> —{" "}
                        {feature.description}
                      </p>
                    </li>
                  ))}
                </ul>
                <DarkButtonLink className="mt-auto sm:max-xl:hidden" href={plan.url}>
                  {`Become ${plan.name.toLowerCase().match(/^[aeiou]/i) ? "an" : "a"} ${plan.name.toLowerCase()}`}
                </DarkButtonLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group">
      <Eyebrow as="h3">{title}</Eyebrow>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Faq({ question, children }: { question: string; children: React.ReactNode }) {
  const id =
    "faq-" +
    question
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  return (
    <details className="group border-t border-gray-950/5 py-3 dark:border-white/5">
      <summary
        id={id}
        className="flex w-full cursor-pointer justify-between gap-4 select-none group-open:text-sky-500 [&::-webkit-details-marker]:hidden"
      >
        <span className="block text-left text-sm/7 font-semibold text-pretty">{question}</span>
        <PlusIcon aria-hidden="true" className="h-7 w-4 group-open:hidden" />
        <MinusIcon aria-hidden="true" className="h-7 w-4 not-group-open:hidden" />
      </summary>
      <div className="prose mt-4">{children}</div>
    </details>
  );
}

function Faqs() {
  return (
    <section className="mt-20 sm:mt-40" id="faqs">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_7fr] lg:items-start lg:gap-20">
        <div>
          <h2 className="inline-block rounded-md bg-gray-950/5 px-3 py-1 font-mono text-xs/5 tracking-widest text-gray-950 uppercase dark:bg-white/10 dark:text-white">
            <a href="#faqs">
              <span aria-hidden="true">04 / </span>
              FAQ
            </a>
          </h2>
          <p className="mt-8 text-lg/7 font-medium tracking-tight text-pretty">
            <strong className="font-medium text-gray-950 dark:text-white">Everything you need to know.</strong>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Common questions about partnering with Tailwind CSS.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <FaqGroup title="General">
            <Faq question="Who can I contact about a sponsorship?">
              <p>
                If you have any questions about sponsoring, reach out to us at{" "}
                <a href="mailto:support@tailwindcss.com">support@tailwindcss.com</a> and we&apos;ll be happy to help.
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
              <p>
                If you&apos;re unsure whether your company qualifies, feel free to reach out — we&apos;re happy to chat.
              </p>
            </Faq>
            <Faq question="How are the sponsor perks delivered?">
              <p>
                After you check out via Polar, you&apos;ll get access to a Polar customer portal where you can manage
                your sponsorship and access any perks that come with it.
              </p>
              <p>
                If you&apos;re sponsoring as a company, we&apos;ll follow up to coordinate how to feature you on the
                Tailwind CSS website as well as how to give your team <strong>Tailwind Insider</strong> access.
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
                No — we don&apos;t offer technical support for sponsor perks. These perks are a bonus for supporters who
                want to give back to the project, but they&apos;re provided as-is.
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
                If your sponsorship ends, you&apos;ll lose access to any perks like the Insiders Discord server,
                Cursor/Claude/AGENTS.md rules, and pre-release documentation. These are only available while you&apos;re
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
    <ul role="list" className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_1fr_1fr_auto]">
      {sponsors.map((sponsor) => (
        <li
          key={sponsor.name}
          data-categories={sponsor.categories.join(",")}
          className="col-span-full grid grid-cols-subgrid items-center border-t border-gray-950/5 dark:border-white/10"
        >
          <a
            href={sponsor.url}
            target="_blank"
            rel="noopener sponsored"
            className="col-span-full grid grid-cols-subgrid items-center gap-4 py-5 pr-4 pl-6 transition-colors hover:bg-gray-950/2.5 sm:pr-2 sm:pl-4 dark:hover:bg-white/2.5"
          >
            <div className="flex items-center gap-3">
              <sponsor.icon className="size-5 shrink-0 opacity-50 dark:opacity-60" aria-hidden="true" />
              <span className="text-sm/6 font-semibold">{sponsor.name}</span>
            </div>
            <div className="max-sm:hidden">
              <TierBadge tier={sponsor.tier} />
            </div>
            <div className="max-sm:hidden">
              <span className="text-sm/6 text-gray-500 dark:text-gray-400">{sponsor.categories.join(", ")}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm/6 font-medium whitespace-nowrap text-gray-400 dark:text-gray-500">
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
  const directorySponsors = getDirectorySponsors();

  return (
    <div className="mt-24">
      <Header />
      <hr
        className="-mx-6 mt-20 border-gray-950/10 sm:mt-24 lg:-mx-10 lg:mt-28 dark:border-white/10"
        style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}
      />
      <div className="isolate">
        <PartnerDirectory>
          <DirectoryItems sponsors={directorySponsors} />
        </PartnerDirectory>
        <hr className="mt-20 border-gray-950/10 sm:mt-40 dark:border-white/10" />
        <WhyPartner />
        <hr className="mt-20 border-gray-950/10 sm:mt-40 dark:border-white/10" />
        <PartnerPlans />
        <hr className="mt-20 border-gray-950/10 sm:mt-40 dark:border-white/10" />
        <Faqs />
        <hr
          className="mt-20 border-gray-950/10 sm:mt-40 dark:border-white/10"
          style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}
        />
        <FooterMeta />
      </div>
    </div>
  );
}
