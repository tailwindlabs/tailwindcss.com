import { compile } from "@tailwindcss/node";
import path from "node:path";

let input = `
  @import "${path.join(process.cwd(), "node_modules/tailwindcss/theme.css")}" reference;
  @import "${path.join(process.cwd(), "node_modules/tailwindcss/utilities.css")}" layer(utilities);
`;

interface GenerateOptions {
  license: boolean;
  candidates: string[];
}

export async function generateCss({ candidates, license }: GenerateOptions) {
  let { build } = await compile(input, {
    base: process.cwd(),
    onDependency: () => {},
  });

  let css = build(candidates);

  // Drop the license header
  if (!license) {
    css = css.replace(/[\s\n]*\/\*! tailwindcss .*? \*\/[\s\n]*/g, "");
  }

  return css;
}
