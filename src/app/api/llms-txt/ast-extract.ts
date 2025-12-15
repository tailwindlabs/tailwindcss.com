import { parser, RuleType } from "markdown-to-jsx";
import { astToMarkdown } from "markdown-to-jsx/markdown";

const MEDIA_ELEMENTS = ["img", "svg", "video", "iframe", "picture", "source", "audio", "canvas", "embed", "object"];

export function extractTextFromMDX(mdxContent: string): string {
  try {
    if (!mdxContent) return "";

    let content = mdxContent;

    let title = extractExport("title", content);
    let description = extractExport("description", content);

    content = removeImportsAndExports(content);

    let ast;
    try {
      ast = parser(content);
    } catch (error) {
      console.error("Error parsing markdown:", error);
      return "";
    }
    let renderRule = (
      next: () => string,
      node: any,
      renderChildren: (children: any[]) => string,
      state: any,
    ): string => {
      if (node.type === RuleType.htmlSelfClosing || node.type === RuleType.htmlBlock) {
        if (node.tag && MEDIA_ELEMENTS.includes(node.tag.toLowerCase())) {
          return "";
        }
      }

      if (node.type === RuleType.text) {
        let text = node.text?.trim();
        if (text === "{" || text === "}") {
          return "";
        }
      }

      if (node.type === RuleType.htmlComment) {
        return "";
      }

      if (
        (node.type === RuleType.htmlBlock || node.type === RuleType.htmlSelfClosing) &&
        node.tag &&
        /^[A-Z]/.test(node.tag)
      ) {
        let tag = node.tag;

        if (tag === "ApiTable") {
          return extractApiTableText(node);
        }

        if (tag === "ResponsiveDesign") {
          return extractResponsiveDesignText(node);
        }

        if (tag === "CustomizingYourTheme") {
          return extractCustomizingYourThemeText(node);
        }

        if (tag === "TargetingSpecificStates") {
          return extractTargetingSpecificStatesText(node);
        }

        if (["Figure", "Example"].includes(tag)) {
          if (node.children && node.children.length > 0) {
            let result = "";
            for (let child of node.children) {
              if (child.type === RuleType.codeBlock) {
                result += cleanCodeBlock(child, renderChildren, state);
                result += "\n\n";
              } else if (child.tag && ["CodeExampleStack", "CodeExampleWrapper"].includes(child.tag)) {
                result += extractComponentTextContent(child, renderChildren, state);
                result += "\n\n";
              }
            }
            return result.trim();
          }
          return "";
        }

        if (["TipInfo", "TipGood", "TipBad"].includes(tag)) {
          let prefix = tag === "TipInfo" ? "INFO: " : tag === "TipGood" ? "DO: " : "DON'T: ";
          let text = extractComponentTextContent(node, renderChildren, state);
          return text ? `\n${prefix}${text.trim()}\n` : "";
        }

        if (["CodeExampleWrapper", "CodeExampleStack"].includes(tag)) {
          return extractComponentTextContent(node, renderChildren, state);
        }

        return "";
      }

      if (node.type === RuleType.codeBlock) {
        return cleanCodeBlock(node, renderChildren, state);
      }

      if (node.type === RuleType.htmlBlock || node.type === RuleType.htmlSelfClosing) {
        if (node.tag && /^[a-z]/.test(node.tag)) {
          if (node.tag === "details" || node.tag === "summary") {
            if (node.children && node.children.length > 0) {
              return renderChildren(node.children);
            }
            return "";
          }

          if (node.tag === "table" || node.tag === "thead" || node.tag === "tbody") {
            if (node.children && node.children.length > 0) {
              return renderChildren(node.children);
            }
            return "";
          }

          if (node.tag === "tr") {
            let text = (node.rawText || node.text || "")
              .replace(/<[^>]+>/g, "")
              .replace(/\s+/g, " ")
              .trim();
            return text ? text + "\n" : "";
          }

          if (node.tag === "th" || node.tag === "td") {
            let text = (node.rawText || node.text || "").replace(/<[^>]+>/g, "").trim();
            return text;
          }

          let hasCodeBlock = false;
          if (node.children && node.children.length > 0) {
            for (let child of node.children) {
              if (child.type === RuleType.codeBlock) {
                hasCodeBlock = true;
                break;
              }
            }
          }
          if (hasCodeBlock) {
            return next();
          }
          return "";
        }
      }

      if (node.type === RuleType.paragraph) {
        if (node.children && node.children.length > 0) {
          let allText = node.children
            .filter((c: any) => c.type === RuleType.text)
            .map((c: any) => c.text || "")
            .join("")
            .trim();
          if (allText.match(/^\{\/\*.*\*\/\}$/)) {
            return "";
          }

          if (node.children.length === 1) {
            let firstChild = node.children[0];

            if (firstChild.type === RuleType.text) {
              let text = firstChild.text?.trim();
              if (text === "{" || text === "}") {
                return "";
              }
            }

            if (
              (firstChild.type === RuleType.htmlSelfClosing || firstChild.type === RuleType.htmlBlock) &&
              firstChild.tag &&
              MEDIA_ELEMENTS.includes(firstChild.tag.toLowerCase())
            ) {
              return "";
            }

            if (
              (firstChild.type === RuleType.htmlBlock || firstChild.type === RuleType.htmlSelfClosing) &&
              firstChild.tag &&
              ["TipInfo", "TipGood", "TipBad"].includes(firstChild.tag)
            ) {
              let prefix = firstChild.tag === "TipInfo" ? "INFO: " : firstChild.tag === "TipGood" ? "DO: " : "DON'T: ";
              let text = extractComponentTextContent(firstChild, renderChildren, state);
              return text ? `\n${prefix}${text.trim()}\n` : "";
            }
          }
        }

        if (node.children && node.children.length > 1) {
          let transformedChildren: string[] = [];

          for (let child of node.children) {
            if (
              (child.type === RuleType.htmlSelfClosing || child.type === RuleType.htmlBlock) &&
              child.tag &&
              MEDIA_ELEMENTS.includes(child.tag.toLowerCase())
            ) {
              continue;
            }

            if (
              (child.type === RuleType.htmlBlock || child.type === RuleType.htmlSelfClosing) &&
              child.tag &&
              ["TipInfo", "TipGood", "TipBad"].includes(child.tag)
            ) {
              let prefix = child.tag === "TipInfo" ? "INFO: " : child.tag === "TipGood" ? "DO: " : "DON'T: ";
              let text = extractComponentTextContent(child, renderChildren, state);
              if (text) {
                transformedChildren.push(`\n${prefix}${text.trim()}\n`);
              }
              continue;
            }

            transformedChildren.push(renderChildren([child]));
          }

          if (transformedChildren.length === 0) {
            return "";
          }

          return transformedChildren.join("");
        }
      }

      return next();
    };

    let cleanMarkdown = astToMarkdown(ast, { renderRule });
    cleanMarkdown = cleanWhitespace(cleanMarkdown);

    let result = "";
    if (title) {
      result += `# ${title}\n\n`;
    }
    if (description) {
      result += `${description}\n\n`;
    }
    if (title || description) {
      result += "---\n\n";
    }

    result += cleanMarkdown;

    return result.trim();
  } catch (error) {
    console.error("Fatal error in extractTextFromMDX:", error);
    console.error("Error stack:", error instanceof Error ? error.stack : String(error));
    return "";
  }
}

function extractExport(name: string, content: string): string | null {
  let match = content.match(new RegExp(`export\\s+const\\s+${name}\\s*=\\s*["']([^"']+)["']`, "s"));
  if (match) return match[1];

  match = content.match(new RegExp(`export\\s+const\\s+${name}\\s*=\\s*\`([^\`]+)\``, "s"));
  if (match) return match[1];

  return null;
}

function removeImportsAndExports(content: string): string {
  content = content.replace(/^import\s+.*?from\s+["'][^"']+["'];?\s*$/gm, "");
  content = content.replace(/^export\s+const\s+(title|description)\s*=\s*["']([^"']+)["'];?\s*$/gm, "");
  content = content.replace(/^export\s+const\s+(title|description)\s*=\s*`([^`]+)`;?\s*$/gm, "");
  content = content.replace(/export\s+const\s+(title|description)\s*=\s*["']([^"']+)["'];?/g, "");
  content = content.replace(/export\s+const\s+(title|description)\s*=\s*`([^`]+)`;?/g, "");
  return content;
}

function extractApiTableText(node: any): string {
  let attrs = node.attrs || {};
  let rows = attrs.rows;

  // If still a string (single quotes), convert to valid JSON and parse
  if (typeof rows === "string") {
    try {
      let jsonStr = rows.trim();
      if (jsonStr.startsWith("{") && jsonStr.endsWith("}")) {
        jsonStr = jsonStr.slice(1, -1).trim();
      }
      jsonStr = jsonStr.replace(/'/g, '"').replace(/,(\s*[\]}])/g, "$1");
      rows = JSON.parse(jsonStr);
    } catch (e) {
      return "";
    }
  }

  if (Array.isArray(rows)) {
    let extracted = rows
      .map((row: any) => {
        if (Array.isArray(row)) {
          return row.map((cell: any) => String(cell || "")).join(" | ");
        }
        return "";
      })
      .filter((row: string) => row.trim())
      .join("\n");

    return extracted ? `\n${extracted}\n` : "";
  }

  return "";
}

function extractResponsiveDesignText(node: any): string {
  let attrs = node.attrs || {};
  let property = attrs.property || "utility";
  let featuredClass = attrs.featuredClass || "";
  let breakpoint = attrs.breakpoint || "md";

  if (property && featuredClass) {
    return `\n\nPrefix a ${property} utility with a breakpoint variant like ${breakpoint}: to only apply the utility at ${breakpoint} screen sizes and above. Use ${breakpoint}:${featuredClass} to apply ${featuredClass} at the ${breakpoint} breakpoint and above.\n\n`;
  }
  return "\n\nUse responsive variants to apply utilities at specific breakpoints.\n\n";
}

function extractCustomizingYourThemeText(node: any): string {
  let attrs = node.attrs || {};
  let utility = attrs.utility || "utility";
  return `\n\nUse the --${utility}-* theme variables to customize the ${utility} utilities in your project.\n\n`;
}

function extractTargetingSpecificStatesText(node: any): string {
  let attrs = node.attrs || {};
  let property = attrs.property || "utility";
  let variant = attrs.variant || "hover";
  return `\n\nPrefix a ${property} utility with a variant like ${variant}: to only apply the utility in that state.\n\n`;
}

function extractComponentTextContent(node: any, renderChildren: (children: any[]) => string, state: any): string {
  if ((node.verbatim || node.noInnerParse) && (node.rawText || node.text)) {
    let text = node.rawText || node.text;
    text = text
      .replace(/\{<>/g, "")
      .replace(/<\/>\}/g, "")
      .replace(/<>/g, "")
      .replace(/<\/>/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/\{|\}/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return text ? `${text}` : "";
  }

  if (node.children && node.children.length > 0) {
    let allText = node.children
      .filter((c: any) => c.type === RuleType.text)
      .map((c: any) => c.text || "")
      .join("");

    if (allText) {
      let text = allText
        .replace(/\{<>/g, "")
        .replace(/<\/>\}/g, "")
        .replace(/<>/g, "")
        .replace(/<\/>/g, "")
        .replace(/\{|\}/g, "")
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim();
      return text ? `${text}` : "";
    }

    let rendered = renderChildren(node.children);
    let text = rendered
      .replace(/<>/g, "")
      .replace(/<\/>/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return text ? `${text}` : "";
  }
  return "";
}

function cleanCodeBlock(node: any, renderChildren: (children: any[]) => string, state: any): string {
  let lang = node.lang || "";
  let code = node.text || "";

  let lines = code.split("\n");
  let filteredLines: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let trimmed = line.trim();

    let removeMatch = trimmed.match(/\[\!code\s+--(?::(\d+))?\]/);
    if (removeMatch) {
      let count = parseInt(removeMatch[1] || "1", 10);
      i += count - 1;
      continue;
    }

    line = line.replace(/<!--\s*\[!code[^\]]+\]\s*-->/g, "");
    line = line.replace(/\/\*\s*\[!code[^\]]+\]\s*\*\//g, "");
    line = line.replace(/#\s*\[!code[^\]]+\]/g, "");
    line = line.replace(/\/\/\s*\[!code[^\]]+\]/g, "");
    line = line.replace(/\[\!code[^\]]+\]/g, "");

    line = line.replace(/<!--\s*prettier-ignore\s*-->/g, "");
    line = line.replace(/\/\*\s*prettier-ignore\s*\*\//g, "");
    line = line.replace(/#\s*prettier-ignore/g, "");
    line = line.replace(/\/\/\s*prettier-ignore/g, "");

    if (line.trim().length === 0 && trimmed.match(/\[\!code|prettier-ignore/)) {
      continue;
    }

    filteredLines.push(line);
  }

  code = filteredLines.join("\n").trim();

  return `\`\`\`${lang}\n${code}\n\`\`\``;
}

function cleanWhitespace(content: string): string {
  content = content.replace(/\n{3,}/g, "\n\n");
  content = content
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");
  return content.trim();
}
