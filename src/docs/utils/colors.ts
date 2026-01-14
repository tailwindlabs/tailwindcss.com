import fs from "node:fs/promises";
import path from "node:path";

const styles = await fs.readFile(path.join(process.cwd(), "node_modules/tailwindcss/theme.css"), "utf-8");

let colors: Record<string, string> = {};
for (let line of styles.split("\n")) {
  if (line.startsWith("  --color-")) {
    const [key, value] = line.split(":").map((part) => part.trim().replace(";", ""));

    let name = key.replace("--color-", "");
    colors[name] = value;
  }
}

// Move `black` and `white` to the front of the object as these should appear
// first in the documentation.
colors = {
  black: colors.black,
  white: colors.white,
  ...colors,
};

export default colors;
