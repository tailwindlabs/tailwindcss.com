import { CodeExample } from "@/components/code-example";
import { Fragment, type ReactNode } from "react";

export interface Step {
  tabs?: string[];
  title: string;
  body: ReactNode;
  code: {
    name: string;
    lang: string;
    code: string;
  };
}

export function Steps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-[auto_repeat(5,minmax(0,1fr))] gap-x-6 xl:gap-y-10">
      {steps.map((step, stepIdx) => (
        <Fragment key={stepIdx}>
          <div data-tabs={step.tabs?.join(" ") ?? null}>
            <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 dark:border-white/50 dark:text-white">
              <div className="col-start-1 row-start-1 grid place-content-center">
                <div className="h-7 w-5 bg-white dark:bg-gray-950" />
              </div>
              <div className="col-start-1 row-start-1 grid place-content-center tracking-widest">
                {(stepIdx + 1).toString().padStart(2, "0")}
              </div>
            </div>
          </div>

          <div className="col-span-5 xl:col-span-2" data-tabs={step.tabs?.join(" ") ?? null}>
            <h4 className="mb-2 text-sm leading-6 font-semibold text-slate-900 dark:text-slate-200">{step.title}</h4>
            <div className="prose">{step.body}</div>
          </div>

          <div
            className="col-span-full mt-6 mb-16 sm:ml-13 xl:col-span-3 xl:m-0 xl:ml-0"
            data-tabs={step.tabs?.join(" ") ?? null}
          >
            <CodeExample
              filename={step.code.name}
              example={{
                lang: step.code.lang,
                code: step.code.code,
              }}
            />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
