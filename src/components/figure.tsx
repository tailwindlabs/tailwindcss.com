import { clsx } from "clsx";

function Hint({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx(className, "mb-4")}>
      <div className="flex space-x-2">
        <svg
          className="h-5 w-5 flex-none"
          viewBox="0 0 20 20"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path
            d="m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z"
            className="stroke-slate-400 dark:stroke-slate-300"
          />
          <path
            d="M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5"
            className="stroke-slate-400 dark:stroke-sky-400"
          />
        </svg>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{children}</p>
      </div>
    </div>
  );
}

export function Figure({
  children,
  hint,
  desktopHint,
  className,
}: {
  children: React.ReactNode;
  hint?: string;
  desktopHint?: string;
  className?: string;
}) {
  return (
    <div>
      <div className="not-prose isolate">
        {(hint || desktopHint) && <Hint className={desktopHint && "max-sm:hidden"}>{hint || desktopHint}</Hint>}
        <figure
          className={clsx(
            className,
            "flex flex-col gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10",
          )}
        >
          {children}
        </figure>
      </div>
    </div>
  );
}
