import type { ShikiTransformer } from "shiki";

export default function linesToDiv(): ShikiTransformer {
  return {
    name: "tailwindcss/lines-to-div",
    line(node) {
      node.tagName = "div";
    },
  };
}
