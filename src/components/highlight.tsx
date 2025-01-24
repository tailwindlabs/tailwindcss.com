import { Components, toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, type JSX } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { createHighlighter, ShikiTransformer } from "shiki";
import atApplyInjection from "./syntax-highlighter/at-apply.json";
import atRulesInjection from "./syntax-highlighter/at-rules.json";
import themeFnInjection from "./syntax-highlighter/theme-fn.json";
import theme from "./syntax-highlighter/theme.json";

/**
 * Preprocess the code before highlighting to:
 * - Remove any prettier-ignore statements
 */
function preprocess(code: string): string {
  return code
    .split("\n")
    .filter((line) => !line.includes("prettier-ignore"))
    .join("\n")
    .trim();
}

/**
 * Remove new lines from the final HTML AST
 */
function removeNewLines(): ShikiTransformer {
  return {
    code: (el) => ({
      ...el,
      children: el.children.filter((child) => child.type !== "text" || child.value.trim() !== ""),
    }),
  };
}

/**
 * Highlight a given code block and return the JSX representation
 */
export function highlight({
  code,
  lang,
  components,
  transformers,
}: {
  code: string;
  lang: string;
  components?: Components;
  transformers?: ShikiTransformer[];
}): JSX.Element {
  let ast = highlighter.codeToHast(preprocess(code), {
    lang,
    theme: theme.name,
    transformers: [removeNewLines(), ...(transformers ?? [])],
  });

  return toJsxRuntime(ast, {
    Fragment,
    jsx,
    jsxs,
    components,
  });
}

export function HighlightedCode({
  className,
  example,
  components,
  transformers,
  ...props
}: {
  className?: string;
  example: { lang: string; code: string };
  components?: Components;
  transformers?: ShikiTransformer[];
  [key: string]: any;
}) {
  return (
    <div {...props} className={className}>
      {highlight({
        ...example,
        components,
        transformers,
      })}
    </div>
  );
}

export const highlighter = await createHighlighter({
  themes: [theme],
  langs: [
    atApplyInjection as any,
    atRulesInjection,
    themeFnInjection,
    "astro",
    "blade",
    "css",
    "edge",
    "elixir",
    "hbs",
    "html",
    "js",
    "json",
    "jsx",
    "mdx",
    "sh",
    "svelte",
    "ts",
    "tsx",
    "twig",
    "vue",
    "md",
  ],
});
