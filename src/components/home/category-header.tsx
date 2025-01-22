import clsx from "clsx";

export default function CategoryHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={clsx(
        className,
        "top-0 -left-[var(--gutter-width)] origin-bottom-right text-left font-mono text-sm font-semibold tracking-widest uppercase max-2xl:mb-4 max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right",
      )}
    >
      {children}
    </p>
  );
}
