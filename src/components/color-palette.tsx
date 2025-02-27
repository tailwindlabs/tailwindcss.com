import fs from "node:fs/promises";
import path from "node:path";

import { fileURLToPath } from "node:url";
import React from "react";
import { Color } from "./color";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let styles = await fs.readFile(path.join(__dirname, "../../node_modules/tailwindcss/theme.css"), "utf-8");

let colors: Record<string, Record<string, string>> = {};
for (let line of styles.split("\n")) {
  if (line.startsWith("  --color-")) {
    let [key, value] = line.split(":").map((part) => part.trim().replace(";", ""));
    let match = key.match(/^--color-([a-z]+)-(\d+)$/);

    if (match) {
      let [, group, shade] = match;

      if (!colors[group]) {
        colors[group] = {};
      }

      colors[group][shade] = value;
    }
  }
}

export function ColorPalette() {
  return (
    <div className="not-prose grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-4">
      <div className="sticky top-28 z-9 bg-white lg:top-14 dark:bg-gray-950">&nbsp;</div>
      <div className="sticky top-28 z-9 col-start-2 grid grid-cols-11 justify-items-center gap-1.5 bg-white font-medium text-gray-950 *:rotate-180 *:[writing-mode:vertical-lr] max-sm:py-1 sm:gap-4 sm:*:rotate-0 sm:*:[writing-mode:horizontal-tb] lg:top-14 dark:bg-gray-950 dark:text-white">
        <div>50</div>
        <div>100</div>
        <div>200</div>
        <div>300</div>
        <div>400</div>
        <div>500</div>
        <div>600</div>
        <div>700</div>
        <div>800</div>
        <div>900</div>
        <div>950</div>
      </div>
      {Object.entries(colors).map(([key, shades]) => (
        <React.Fragment key={key}>
          <p className="font-medium text-gray-950 capitalize sm:pr-12 dark:text-white">{key}</p>
          <div className="grid grid-cols-11 gap-1.5 sm:gap-4">
            {Object.keys(shades).map((shade, i) => (
              <Color key={i} name={key} shade={shade} value={shades[shade]} />
            ))}
          </div>
        </React.Fragment>
      ))}

      <div className="pt-2 text-center text-gray-500 italic max-sm:hidden sm:col-span-2 md:col-span-1 md:col-start-2 dark:text-gray-400">
        Click to copy the OKLCH value or shift+click to copy the nearest hex value.
      </div>
    </div>
  );
}
