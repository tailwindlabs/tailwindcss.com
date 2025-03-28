import { clsx } from "clsx";

export function Stripes({
  className,
  children,
  border = false,
  noColor = false,
  ...props
}: React.ComponentProps<"div"> & { border?: boolean | "x" | "y"; noColor?: boolean }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        border === true && "border",
        border === "x" && "border-x",
        border === "y" && "border-y",
        noColor === false && "text-black/10 dark:text-white/12.5",
        "bg-[size:8px_8px] bg-top-left",
        "bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]",
      )}
    >
      {children ? children : null}
    </div>
  );
}
