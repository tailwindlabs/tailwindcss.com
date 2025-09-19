import React from "react";
import Link from "next/link";
import clsx from "clsx";

const testimonials = [
  {
    name: "Alex MacCaw",
    img: "/plus-assets/img/testimonials/alex-maccaw.jpg",
    quote:
      "Tailwind Plus made it possible for me to ship the first version of Reflect entirely by myself, while still being immensely proud of the design.",
    bio: (
      <>
        Founder of{" "}
        <Link href="https://reflect.app" target="_blank">
          Reflect
        </Link>{" "}
        &{" "}
        <Link href="https://clearbit.com" target="_blank">
          Clearbit
        </Link>
      </>
    ),
  },
  {
    name: "Ben Barbersmith",
    img: "/plus-assets/img/testimonials/ben-barbersmith.jpg",
    quote:
      "Yet again Tailwind and Tailwind Plus are dramatically speeding up my frontend work. At this point Tailwind Plus is hands-down the highest ROI digital asset I’ve ever bought.",
    bio: (
      <>
        CTO & Co-Founder of{" "}
        <Link href="https://www.levellr.com" target="_blank">
          Levellr
        </Link>
      </>
    ),
  },
  {
    name: "Derrick Reimer",
    img: "/plus-assets/img/testimonials/derek-reimer.jpg",
    quote:
      "I love Catalyst because I can gradually make it my own while using the stock defaults to quickly get something on the page. I also love that it lets me see how the creators of Tailwind CSS structure their components, so I (or my AI agents) can emulate their best practices.",
    bio: (
      <>
        Founder of{" "}
        <Link href="https://savvycal.com" target="_blank">
          SavvyCal
        </Link>
      </>
    ),
  },
  {
    name: "Jason Beggs",
    img: "/plus-assets/img/testimonials/jason-beggs.jpg",
    quote:
      "Catalyst was not only a great starting point for building Laravel Cloud but also a masterclass in advanced Tailwind techniques and best practices I hadn’t considered before, created by the folks behind Tailwind CSS.",
    bio: (
      <>
        Senior software engineer at{" "}
        <Link href="https://laravel.com/" target="_blank">
          Laravel
        </Link>
      </>
    ),
  },
  {
    name: "Justin Jackson",
    img: "/plus-assets/img/testimonials/justin-jackson.jpg",
    quote:
      "We’ve gone through several iterations of our pricing page recently, and every time we wanted to try a new idea I was able to find the perfect starting point in Tailwind Plus. It’s turned a project I might have never made the time to tackle into something I could finish and ship in an hour.",
    bio: (
      <>
        Founder of{" "}
        <Link href="https://transistor.fm" target="_blank">
          Transistor
        </Link>
      </>
    ),
  },
];

export function Testimonials({ from = ["Alex MacCaw", "Ben Barbersmith"] }: { from?: string[] }) {
  return (
    <section className="mt-30">
      <h2 className="sr-only">Testimonials</h2>
      <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-x-10 max-lg:gap-y-10 lg:grid-cols-2 lg:gap-y-5">
        {testimonials
          .filter((testimonial) => from.includes(testimonial.name))
          .map((testimonial) => (
            <figure
              className="group row-span-2 grid max-lg:mx-auto max-lg:max-w-3xl max-lg:gap-y-5 lg:grid-rows-subgrid lg:border-gray-950/5 lg:first:border-r lg:last:border-l"
              key={testimonial.name}
            >
              <blockquote className="mx-auto flex items-center px-8 py-2 text-xl/9 font-medium tracking-tight max-lg:line-y sm:px-16 sm:text-2xl/10 lg:group-first:line-y">
                <p className="relative before:pointer-events-none before:absolute before:top-4 before:-left-6 before:text-[6rem] before:text-gray-950/10 before:content-['“'] sm:before:-left-8 lg:before:text-[8rem] dark:before:text-white/10">
                  {testimonial.quote}
                </p>
              </blockquote>
              <figcaption className="grid grid-cols-[max-content_1fr] gap-6 px-8 py-2 max-lg:line-y sm:px-16 lg:group-first:line-y">
                <img
                  className="aspect-square size-14 rounded-full outline -outline-offset-1 outline-gray-950/5"
                  src={testimonial.img}
                  width={56}
                  height={56}
                  alt=""
                />
                <div className="text-sm/7">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="prose text-gray-600 dark:text-gray-400">{testimonial.bio}</p>
                </div>
              </figcaption>
            </figure>
          ))}
      </div>
    </section>
  );
}
