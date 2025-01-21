import { compile } from "@tailwindcss/node";

let input = `
  @import "tailwindcss/theme" reference;
  @import "tailwindcss/utilities" layer(utilities);
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
