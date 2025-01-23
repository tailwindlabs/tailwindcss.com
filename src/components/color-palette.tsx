import fs from "node:fs/promises";
import path from "node:path";

import { fileURLToPath } from "node:url";
import React from "react";
import { Color } from "./color";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const styles = await fs.readFile(
	path.join(__dirname, "../../node_modules/tailwindcss/theme.css"),
	"utf-8",
);

const colors: Record<string, Record<string, string>> = {};
for (const line of styles.split("\n")) {
	if (line.startsWith("  --color-")) {
		const [key, value] = line
			.split(":")
			.map((part) => part.trim().replace(";", ""));
		const match = key.match(/^--color-([a-z]+)-(\d+)$/);

		if (match) {
			const [, group, shade] = match;

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
			<div className="col-start-2 grid grid-cols-11 justify-items-center gap-1.5 font-medium text-gray-950 *:rotate-180 *:[writing-mode:vertical-lr] sm:gap-4 sm:*:rotate-0 sm:*:[writing-mode:horizontal-tb] dark:text-white">
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
					<p className="font-medium text-gray-950 capitalize sm:pr-12 dark:text-white">
						{key}
					</p>
					<div className="grid grid-cols-11 gap-1.5 sm:gap-4">
						{Object.keys(shades).map((shade, i) => (
							<Color key={i} name={key} shade={shade} />
						))}
					</div>
				</React.Fragment>
			))}
		</div>
	);
}
