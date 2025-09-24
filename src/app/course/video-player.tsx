"use client";

import React from "react";
import type { MuxPlayerRefAttributes } from "@mux/mux-player-react";
import MuxPlayer from "@mux/mux-player-react";

export default function VideoLightbox() {
  const videoPlayerRef = React.useRef<MuxPlayerRefAttributes>(null);
  return (
    <div
      className="hidden h-screen w-full items-center justify-center bg-black/70 opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out open:flex open:opacity-100 starting:open:opacity-0"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        e.preventDefault();
        e.currentTarget.togglePopover();
        videoPlayerRef.current?.pause();
      }}
      popover="auto"
      id="video-popover"
    >
      <div className="group:open relative w-full max-w-7xl p-4" onClick={(e) => e.stopPropagation()}>
        <div className="aspect-video w-full overflow-hidden rounded-lg outline outline-gray-950/10 dark:outline-white/10">
          <MuxPlayer
            preload="auto"
            autoPlay
            ref={videoPlayerRef as React.Ref<MuxPlayerRefAttributes>}
            className="w-full"
            playbackId="e1yHArFI020101thEAI200aM00RI9bYPuSa02ori01vbhtWY01o"
            title="Intro to Tailwind CSS by Example"
            maxResolution="2160p"
            accentColor="var(--color-sky-400)"
          />
        </div>
      </div>
    </div>
  );
}
