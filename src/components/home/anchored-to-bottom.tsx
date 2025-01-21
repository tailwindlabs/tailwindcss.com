"use client";

export function AnchoredToBottom({
  className,
  enabled,
  children,
  ...props
}: {
  className?: string;
  enabled: boolean;
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <div
      {...props}
      className={className}
      data-scroll-anchor
      ref={(container) => {
        if (!container) return;

        if (enabled) {
          container.scrollTop = container.scrollHeight;
        }

        let observer = new ResizeObserver(() => {
          if (enabled) {
            container.scrollTop = container.scrollHeight;
          }
        });

        observer.observe(container);

        return () => observer.disconnect();
      }}
    >
      {children}
    </div>
  );
}
