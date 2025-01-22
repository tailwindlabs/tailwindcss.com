import React from "react";

export function TipGood({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex size-5.5 items-center justify-center rounded-full bg-teal-500/25 text-teal-800 inset-ring inset-ring-teal-600/25 dark:text-teal-400">
        <svg width="6" height="4.5" className="overflow-visible" aria-hidden="true">
          <path
            d="M6 0L2 4.5L0 2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="m-0 flex-1 text-sm font-semibold text-gray-950 dark:text-white">{children}</p>
    </div>
  );
}

export function TipBad({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex size-5.5 items-center justify-center rounded-full bg-rose-500/25 text-rose-800 inset-ring inset-ring-rose-700/25 dark:text-rose-400">
        <svg width="6" height="6" className="overflow-visible" aria-hidden="true">
          <path
            d="M0 0L6 6M6 0L0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="m-0 flex-1 text-sm font-semibold text-gray-950 dark:text-white">{children}</p>
    </div>
  );
}

export function TipCompat({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex items-center space-x-4 rounded-md border border-sky-500/10 bg-sky-500/5 p-3 text-sky-600 dark:border-sky-500/20 dark:text-sky-500">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
      <p className="m-0 text-sm font-medium text-sky-700 dark:text-sky-400">{children}</p>
    </div>
  );
}

export function TipInfo({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="-mb-1 flex items-center space-x-2 text-gray-700 dark:text-gray-200">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>

      <p className="m-0 flex-1 text-sm font-semibold text-gray-950 dark:text-white">{children}</p>
    </div>
  );
}
