import NextImage from "next/image";

export function Video({ className, ...props }: React.VideoHTMLAttributes<HTMLVideoElement>) {
  return (
    <div data-media className={className}>
      <div className="not-prose relative overflow-hidden rounded-xl">
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-slate-950/10 ring-inset dark:ring-white/10"></div>
        <video autoPlay playsInline loop muted {...props} />
      </div>
    </div>
  );
}

export function YouTubeVideo({ className, id, ...props }: React.IframeHTMLAttributes<HTMLIFrameElement>) {
  return (
    <div data-media className={className}>
      <div className="not-prose relative overflow-hidden rounded-xl">
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-slate-950/10 ring-inset dark:ring-white/10"></div>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="aspect-video w-full border-0"
          {...props}
        />
      </div>
    </div>
  );
}

export function Iframe({ height = 500, children, className, ...props }: React.IframeHTMLAttributes<HTMLIFrameElement>) {
  return (
    <div data-media className={className}>
      <div className="not-prose relative overflow-hidden rounded-xl">
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-slate-950/10 ring-inset dark:ring-white/10"></div>
        <iframe
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          className="w-full border-0"
          style={{ height }}
          {...props}
        />
      </div>
    </div>
  );
}

export function Image({ src, className, ...props }: React.ComponentProps<typeof NextImage>) {
  return (
    <div data-media className={className}>
      <div className="not-prose relative overflow-hidden rounded-xl">
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-slate-950/10 ring-inset dark:ring-white/10"></div>
        {typeof src === "string" ? <img src={src} {...props} /> : <NextImage width={768 * 2} src={src} {...props} />}
      </div>
    </div>
  );
}
