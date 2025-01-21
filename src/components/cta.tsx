import Link from "next/link";

export function Cta({ children, href, label }: { children: React.ReactNode; href?: string; label?: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-3 gap-y-6 rounded-xl p-6 ring-1 ring-gray-950/10 dark:ring-white/10">
      <div>
        <svg width={22} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="fill-gray-950/5 dark:fill-white/5" cx={11} cy={14} r={11} />
          <circle className="stroke-gray-950/25 dark:stroke-white/25" cx={11} cy={14} r="10.5" />
          <path
            className="stroke-gray-950 dark:stroke-white"
            d="m12.5 19-1.011.337a1 1 0 0 1-1.253-1.3l1.528-4.074a1 1 0 0 0-1.253-1.3L9.5 13"
            strokeLinecap="round"
          />
          <path className="stroke-gray-950 dark:stroke-white" d="M12 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
        </svg>
      </div>
      <div className="col-span-2 xl:col-span-1">
        <span className="prose">{children}</span>
      </div>
      {href && (
        <div className="col-span-full place-self-center xl:col-span-1">
          <Link
            href={href}
            className="rounded-full bg-gray-950/5 px-4 py-2 text-sm/7 font-semibold text-gray-700 dark:bg-white/10 dark:text-white/75"
          >
            {label}
          </Link>
        </div>
      )}
    </div>
  );
}
