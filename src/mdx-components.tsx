import type { MDXComponents } from "mdx/types";
import React from "react";
import { CodeExample } from "./components/code-example";
import Link from "next/link";

declare module "mdx/types" {
  // Augment the MDX types to make it understand React.
  namespace JSX {
    type Element = React.JSX.Element;
    type ElementClass = React.JSX.ElementClass;
    type ElementType = React.JSX.ElementType;
    type IntrinsicElements = React.JSX.IntrinsicElements;
  }
}

function getTextContent(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (React.isValidElement(node)) {
    if (node.type === "small") {
      return "";
    }

    // @ts-ignore
    return getTextContent(node.props.children);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  return ""; // If the node is neither text nor a React element
}

function slugify(str: React.ReactNode) {
  return getTextContent(str)
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  return ({ children }: React.PropsWithChildren) => {
    let slug = slugify(children);
    return React.createElement(`h${level}`, { id: slug }, [
      React.createElement(
        "a",
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        },
        children,
      ),
    ]);
  };
}

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,

  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),

  a(props) {
    return <Link {...(props as React.ComponentProps<typeof Link>)} />;
  },

  code({ children }) {
    if (typeof children !== "string") {
      return <code>{children}</code>;
    }

    if (children.startsWith("<")) {
      return <code>{children}</code>;
    }

    return (
      <code>
        {children
          .split(/(<[^>]+>)/g)
          .map((part, i) => (part.startsWith("<") && part.endsWith(">") ? <var key={i}>{part}</var> : part))}
      </code>
    );
  },

  pre(props) {
    let child = React.Children.only(props.children) as React.ReactElement;
    if (!child) return null;

    // @ts-ignore
    let { className, children: code } = child.props;
    let lang = className ? className.replace("language-", "") : "";
    let filename = undefined;

    // Extract `[!code filename:…]` directives from the first line of code
    let lines = code.split("\n");
    let filenameRegex = /\[\!code filename\:(.+)\]/;
    let match = lines[0].match(filenameRegex);
    if (match) {
      filename = match[1];
      code = lines.splice(1).join("\n");
    }

    return (
      <div>
        <CodeExample example={{ lang, code }} className="not-prose" filename={filename} />
      </div>
    );
  },
} satisfies MDXComponents;

declare global {
  // Provide type-safety of provided components inside MDX files.
  type MDXProvidedComponents = typeof components;
}

// This file is required to use MDX in `app` directory.
export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
