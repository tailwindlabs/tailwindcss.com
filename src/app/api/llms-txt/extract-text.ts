export function extractTextFromMDX(mdxContent: string): string {
  if (!mdxContent) return "";

  let content = mdxContent;

  // Extract title and description from exports
  let title = extractExport("title", content);
  let description = extractExport("description", content);

  // Remove import statements
  content = removeImports(content);

  // Handle code blocks first - preserve them but clean directives
  let { content: processedContent, codeBlocks } = preserveCodeBlocks(content);

  // Clean directives from code blocks before restoring
  codeBlocks = codeBlocks.map((block) => removeCodeDirectives(block));

  // Remove JSX component tags and extract their content
  processedContent = removeJSXComponents(processedContent);

  // Remove code example directives from non-code content
  processedContent = removeCodeDirectives(processedContent);

  // Restore code blocks
  processedContent = restoreCodeBlocks(processedContent, codeBlocks);

  // Clean up extra whitespace
  processedContent = cleanWhitespace(processedContent);

  // Build result with title and description if available
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

  result += processedContent;

  return result.trim();
}

function extractExport(name: string, content: string): string | null {
  // Match: export const title = "value"; or export const title = 'value';
  let match = content.match(new RegExp(`export\\s+const\\s+${name}\\s*=\\s*["']([^"']+)["']`, "s"));
  if (match) {
    return match[1];
  }

  // Match: export const title = `value`;
  match = content.match(new RegExp(`export\\s+const\\s+${name}\\s*=\\s*\`([^\`]+)\``, "s"));
  if (match) {
    return match[1];
  }

  return null;
}

function removeImports(content: string): string {
  // Remove all import statements (single and multi-line)
  content = content.replace(/^import\s+.*?from\s+["'][^"']+["'];?\s*$/gm, "");
  // Remove export statements (but keep the content after them)
  // Handle both single and double quotes, and template literals
  content = content.replace(/^export\s+const\s+(title|description)\s*=\s*["']([^"']+)["'];?\s*$/gm, "");
  content = content.replace(/^export\s+const\s+(title|description)\s*=\s*`([^`]+)`;?\s*$/gm, "");
  // Also handle exports that might be on the same line as other content
  content = content.replace(/export\s+const\s+(title|description)\s*=\s*["']([^"']+)["'];?/g, "");
  content = content.replace(/export\s+const\s+(title|description)\s*=\s*`([^`]+)`;?/g, "");
  return content;
}

function preserveCodeBlocks(content: string): { content: string; codeBlocks: string[] } {
  // Extract code blocks temporarily to protect them from JSX removal
  let codeBlocks: string[] = [];
  let blockIndex = 0;

  // Match code blocks with optional language
  let processedContent = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    let placeholder = `__CODE_BLOCK_${blockIndex}__`;
    codeBlocks[blockIndex] = `\`\`\`${lang || ""}\n${code}\`\`\``;
    blockIndex++;
    return placeholder;
  });

  return { content: processedContent, codeBlocks };
}

function restoreCodeBlocks(content: string, codeBlocks: string[]): string {
  for (let i = 0; i < codeBlocks.length; i++) {
    content = content.replace(`__CODE_BLOCK_${i}__`, codeBlocks[i]);
  }

  return content;
}

function extractApiTableData(match: string): string {
  let rowsMatch = match.match(/rows\s*=\s*\{\s*\[([\s\S]*?)\]\s*\}/);
  if (rowsMatch) {
    let rowsContent = rowsMatch[1];
    let extracted = rowsContent
      .replace(/\[([^\]]+)\]/g, "$1")
      .replace(/["']([^"']+)["']/g, "$1")
      .replace(/dedent\s*`([^`]+)`/g, "$1")
      .replace(/dedent\\`([^`]+)\\`/g, "$1")
      .replace(/,/g, " | ")
      .replace(/\s+/g, " ")
      .trim();
    return extracted ? `\n${extracted}\n` : "";
  }
  return "";
}

function removeJSXComponents(content: string): string {
  // Handle ApiTable components - extract table data
  content = content.replace(/<ApiTable[\s\S]*?\/>/g, extractApiTableData);
  content = content.replace(/<ApiTable[\s\S]*?<\/ApiTable>/g, extractApiTableData);

  // Handle content components that have meaningful text - extract their props to generate text
  // ResponsiveDesign, CustomizingYourTheme, TargetingSpecificStates, etc.
  content = content.replace(/<ResponsiveDesign[^>]*\/>/g, (match) => {
    // Extract property and featuredClass to generate descriptive text
    let propertyMatch = match.match(/property=["']([^"']+)["']/);
    let featuredClassMatch = match.match(/featuredClass=["']([^"']+)["']/);
    let breakpointMatch = match.match(/breakpoint=["']([^"']+)["']/);
    let breakpoint = breakpointMatch ? breakpointMatch[1] : "md";
    let property = propertyMatch ? propertyMatch[1] : "utility";
    let featuredClass = featuredClassMatch ? featuredClassMatch[1] : "";

    if (property && featuredClass) {
      return `\n\nPrefix a ${property} utility with a breakpoint variant like ${breakpoint}: to only apply the utility at ${breakpoint} screen sizes and above. Use ${breakpoint}:${featuredClass} to apply ${featuredClass} at the ${breakpoint} breakpoint and above.\n\n`;
    }
    return "\n\nUse responsive variants to apply utilities at specific breakpoints.\n\n";
  });

  content = content.replace(/<CustomizingYourTheme[^>]*\/>/g, (match) => {
    let utilityMatch = match.match(/utility=["']([^"']+)["']/);
    let utility = utilityMatch ? utilityMatch[1] : "utility";
    return `\n\nUse the --${utility}-* theme variables to customize the ${utility} utilities in your project.\n\n`;
  });

  content = content.replace(/<TargetingSpecificStates[^>]*\/>/g, (match) => {
    let propertyMatch = match.match(/property=["']([^"']+)["']/);
    let variantMatch = match.match(/variant=["']([^"']+)["']/);
    let property = propertyMatch ? propertyMatch[1] : "utility";
    let variant = variantMatch ? variantMatch[1] : "hover";
    return `\n\nPrefix a ${property} utility with a variant like ${variant}: to only apply the utility in that state.\n\n`;
  });

  // Remove other component tags (Figure, Example, etc.) but extract text content first
  // Extract text from component children before removing the component tags
  // Match each component type separately to ensure opening/closing tags match
  for (let componentName of ["Figure", "Example", "CodeExampleWrapper", "CodeExampleStack"]) {
    let regex = new RegExp(`<${componentName}[^>]*>([\\s\\S]*?)<\\/${componentName}>`, "g");
    content = content.replace(regex, (match, innerContent) => {
      // Extract text from the inner content, removing HTML tags
      let text = innerContent
        .replace(/<[^>]+>/g, "") // Remove all HTML tags
        .replace(/\s+/g, " ") // Normalize whitespace
        .trim();
      return text ? `\n${text}\n` : "";
    });
  }

  // Remove any remaining self-closing component tags
  content = content.replace(/<(Figure|Example|CodeExampleWrapper|CodeExampleStack)[^>]*\/>/g, "");

  // Extract text from JSX expressions like {<table>...</table>} before removing them
  // Handle multi-line JSX expressions with nested content
  // We need to match braces properly, handling nested braces
  let braceDepth = 0;
  let startIndex = -1;
  let result = "";
  let i = 0;

  while (i < content.length) {
    if (content[i] === "{" && (i === 0 || content[i - 1] !== "\\")) {
      if (braceDepth === 0) {
        startIndex = i;
      }
      braceDepth++;
    } else if (content[i] === "}" && (i === 0 || content[i - 1] !== "\\")) {
      braceDepth--;
      if (braceDepth === 0 && startIndex !== -1) {
        let innerContent = content.slice(startIndex + 1, i);
        // If it contains HTML tags, extract the text content only (not HTML structure)
        if (innerContent.includes("<")) {
          // Extract text from HTML - remove all tags and get just the text
          let text = innerContent
            .replace(/<[A-Z][a-zA-Z0-9]*[^>]*>/g, "") // Remove React component tags
            .replace(/<\/[A-Z][a-zA-Z0-9]*>/g, "")
            .replace(/<[^>]+>/g, "") // Remove all remaining HTML tags
            .replace(/\s+/g, " ") // Normalize whitespace
            .trim();
          // Only add if there's actual text content
          if (text) {
            result += text;
          }
        }
        // Skip the braces and continue
        startIndex = -1;
        i++;
        continue;
      }
    }

    if (braceDepth === 0) {
      result += content[i];
    }
    i++;
  }

  // If we ended with unclosed braces, add the rest
  if (braceDepth > 0) {
    result += content.slice(startIndex);
  }

  content = result;

  // Remove remaining JSX component tags and their props (but keep HTML tags like <table>, <div>, etc.)
  // Only remove tags that start with uppercase (React components), not lowercase HTML tags
  content = content.replace(/<[A-Z][a-zA-Z0-9]*[^>]*\/>/g, "");
  content = content.replace(/<[A-Z][a-zA-Z0-9]*[^>]*>/g, "");
  content = content.replace(/<\/[A-Z][a-zA-Z0-9]*>/g, "");

  // Remove JSX attributes from remaining tags
  content = content.replace(/<([a-z][a-z0-9]*)\s+[^>]*>/g, "<$1>");

  // Remove standalone HTML blocks (not in code blocks)
  // These are leftover HTML structures that aren't useful for LLM consumption
  content = removeStandaloneHTML(content);

  return content;
}

function removeStandaloneHTML(content: string): string {
  // First, protect code blocks by replacing them with placeholders
  let codeBlockPlaceholders: string[] = [];
  let placeholderIndex = 0;

  content = content.replace(/```[\s\S]*?```/g, (match) => {
    let placeholder = `__CODE_BLOCK_PLACEHOLDER_${placeholderIndex}__`;
    codeBlockPlaceholders[placeholderIndex] = match;
    placeholderIndex++;
    return placeholder;
  });

  // Remove nested HTML structures that span multiple lines
  // These are leftover HTML blocks that aren't in code blocks
  let lines = content.split("\n");
  let result: string[] = [];
  let inHTMLBlock = false;
  let htmlBlockDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let trimmed = line.trim();

    let startsWithOpeningTag = /^\s*<[a-z][a-z0-9]*[^>]*>\s*$/.test(trimmed);
    let startsWithClosingTag = /^\s*<\/[a-z][a-z0-9]*>\s*$/.test(trimmed);
    let isSelfClosingTag = /^\s*<[a-z][a-z0-9]*[^>]*\/>\s*$/.test(trimmed);
    let hasOpeningTag = /<[a-z][a-z0-9]*[^>]*>/.test(trimmed);
    let hasClosingTag = /<\/[a-z][a-z0-9]*>/.test(trimmed);
    let isCompleteHTMLElement = /^\s*<[a-z][a-z0-9]*[^>]*>.*<\/[a-z][a-z0-9]*>\s*$/.test(trimmed) || isSelfClosingTag;

    if (isSelfClosingTag && !inHTMLBlock) {
      continue;
    } else if (isCompleteHTMLElement && !inHTMLBlock) {
      continue;
    } else if (startsWithOpeningTag && !inHTMLBlock) {
      inHTMLBlock = true;
      htmlBlockDepth = 1;
    } else if (hasOpeningTag && inHTMLBlock && !hasClosingTag) {
      htmlBlockDepth++;
    } else if (startsWithClosingTag && inHTMLBlock) {
      htmlBlockDepth--;
      if (htmlBlockDepth === 0) {
        inHTMLBlock = false;
        continue;
      }
    } else if (inHTMLBlock) {
      continue;
    } else {
      result.push(line);
    }
  }

  content = result.join("\n");

  // Restore code blocks
  for (let i = 0; i < codeBlockPlaceholders.length; i++) {
    content = content.replace(`__CODE_BLOCK_PLACEHOLDER_${i}__`, codeBlockPlaceholders[i]);
  }

  return content;
}

function removeCodeDirectives(content: string): string {
  // Remove [!code ...] directives
  // These can appear as comments in various formats
  content = content.replace(/<!--\s*\[!code[^\]]+\]\s*-->/g, "");
  content = content.replace(/\/\*\s*\[!code[^\]]+\]\s*\*\//g, "");
  content = content.replace(/#\s*\[!code[^\]]+\]/g, "");
  content = content.replace(/\/\/\s*\[!code[^\]]+\]/g, "");

  // Remove prettier-ignore comments
  content = content.replace(/<!--\s*prettier-ignore\s*-->/g, "");
  content = content.replace(/\/\*\s*prettier-ignore\s*\*\//g, "");
  content = content.replace(/#\s*prettier-ignore/g, "");
  content = content.replace(/\/\/\s*prettier-ignore/g, "");

  return content;
}

function cleanWhitespace(content: string): string {
  // Remove excessive blank lines (more than 2 consecutive)
  content = content.replace(/\n{3,}/g, "\n\n");

  // Trim each line
  content = content
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");

  // Remove leading/trailing whitespace
  return content.trim();
}
