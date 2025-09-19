import React from "react";
import GridContainer from "@/components/grid-container";
import clsx from "clsx";

const BEFORE_AND_AFTER_ONLY_IN_FIRST_COLUMN_OF_CURRENT_GRID = [
  "before:hidden after:hidden",
  "xl:[.grid>div:nth-child(3n+1)_&]:before:block xl:[.grid>div:nth-child(3n+1)_&]:after:block",
  "lg:max-xl:[.grid>div:nth-child(3n+1)_&]:before:block lg:max-xl:[.grid>div:nth-child(3n+1)_&]:after:block",
  "max-lg:[.grid>div:nth-child(2n+1)_&]:before:block max-lg:[.grid>div:nth-child(2n+1)_&]:after:block",
].join(" ");

function formatDuration(seconds: number): string {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;

  return `${m}:${s.toString().padStart(2, "0")}`;
}

interface Lesson {
  title: string;
  description: string;
  video_thumbnail: string;
  href: string;
  video_duration: number;
  id: string;
}

interface Module {
  title: string;
  description: string;
  lessons: Lesson[];
}

interface CourseModuleProps {
  module: Module;
  moduleId: string;
}

function CourseModule({ module, moduleId }: CourseModuleProps) {
  return (
    <React.Fragment key={moduleId}>
      <GridContainer className="mt-30 p-2">
        <h2 className="text-[1.5rem]/none font-medium tracking-tight text-pretty">{module.title}</h2>
        <p className="mt-2 text-sm/7 text-gray-700 dark:text-gray-300">{module.description}</p>
      </GridContainer>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3 lg:gap-10">
        {module.lessons.map((lesson: Lesson) => {
          const { title, description, video_thumbnail, video_duration, id } = lesson;

          return (
            <div
              key={id}
              className="group dark:border-bg-white/10 relative isolate border-x border-gray-950/5 transition-colors hover:bg-gray-950/2.5 max-lg:nth-[2n]:border-r-transparent max-lg:nth-[2n+1]:border-l-transparent lg:nth-[3n]:border-r-transparent lg:nth-[3n+1]:border-l-transparent dark:border-white/10 dark:hover:bg-white/2.5"
            >
              <GridContainer className={clsx("p-2", BEFORE_AND_AFTER_ONLY_IN_FIRST_COLUMN_OF_CURRENT_GRID)}>
                <a href={`https://course.tailwind.com/${id}`} className="group/tile relative text-sm/7">
                  <div className="pointer-events-none absolute -inset-2" />
                  <div className="relative">
                    <img
                      src={video_thumbnail}
                      alt=""
                      className="aspect-video w-full rounded-lg object-cover opacity-75 outline -outline-offset-1 outline-gray-950/10 transition-opacity duration-150 group-hover/tile:opacity-100 dark:outline-white/5"
                    />
                    {video_duration && (
                      <div className="absolute right-2 bottom-2 rounded-sm bg-gray-950/50 px-1 py-0.5 text-xs text-white">
                        <p>{formatDuration(video_duration)}</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold text-gray-950 max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap dark:text-white">
                      {title}
                    </h4>
                    <p className="overflow-hidden text-sm/5 text-ellipsis whitespace-nowrap text-gray-500 dark:text-gray-400">
                      {description}
                    </p>
                  </div>
                </a>
              </GridContainer>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export async function CourseContent() {
  const headers = new Headers();
  const encodedCredentials = btoa(`${process.env.COURSE_API_USERNAME}:${process.env.COURSE_API_PASSWORD}`);
  headers.append("Authorization", `Basic ${encodedCredentials}`);

  const modules = await fetch("https://course.tailwindcss.com/api/lessons", {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));

  return (
    <section className="mt-30" id="modules">
      <div className="max-w-2xl">
        <GridContainer className="p-2">
          <h2 className="text-[2.5rem]/none tracking-tight text-pretty">What you'll learn</h2>
        </GridContainer>
        <GridContainer className="mt-2 p-2">
          <p className="text-base/7 text-gray-950 dark:text-gray-300">
            Whether you're brand new to Tailwind CSS or looking to level up your skills, this course gives you a deep
            understanding of how to build beautiful, responsive interfaces with utility-first CSS.
          </p>
          <p className="mt-6 text-sm/7 text-gray-700 dark:text-gray-300">
            In the first half, you'll learn the core concepts behind Tailwind—like working with utility classes,
            managing hover and focus states, customizing themes, and building responsive designs with ease. Then, in the
            "By Example" section, you'll see how it all comes together by building real-world UI components like
            marketing pages, checkout flows, and full dashboards—step by step, alongside the creator of Tailwind CSS
            himself.
          </p>
        </GridContainer>
      </div>
      <div>
        {modules.map((module: any, index: number) => (
          <CourseModule key={index} module={module} moduleId={index.toString()} />
        ))}
      </div>
    </section>
  );
}
