export function IconButton({ className, children, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={`relative inline-grid size-7 place-items-center rounded-md text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/10 ${className}`}
      {...props}
    >
      <span className="absolute top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden" />
      {children}
    </button>
  );
}
