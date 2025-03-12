import type { Element, ElementContent } from "hast";
import type { ShikiTransformer, ShikiTransformerContext } from "shiki";
import { segment } from "./segment";

export interface HighlightClassesOptions {
  highlightedClassName: string;
}

const enum ClassState {
  None,
  FoundAttr,
  FoundEq,
  InsideSingle,
}

export function highlightClasses(opts: HighlightClassesOptions): ShikiTransformer {
  return {
    name: "tailwindcss/highlight-classes",
    code(ast) {
      let lines = ast.children.filter((i) => i.type === "element");

      // Lines that should be removed from the output
      let toRemove = new Set<ElementContent>();

      // Classes that should be highlighted
      let toHighlight = new Set<string>();

      for (let line of lines) {
        let highlight = parseHighlightDirective(line);
        if (highlight) {
          toRemove.add(line);
          for (let cls of highlight.classes) {
            toHighlight.add(cls);
          }

          continue;
        }

        if (toHighlight.size === 0) continue;

        let classState = ClassState.None;

        for (let i = 0; i < line.children.length; ++i) {
          let el = line.children[i];
          if (el.type !== "element") continue;
          if (el.tagName !== "div" && el.tagName !== "span") continue;

          // Tiny state machine to make sure we're inside a class attribute
          let text = getTextContent(el).trim();

          if (classState === ClassState.None) {
            if (text === "class" || text === "className") {
              classState = ClassState.FoundAttr;
            }
          } else if (classState === ClassState.FoundAttr) {
            if (text === "=") {
              classState = ClassState.FoundEq;
            }
          } else if (classState === ClassState.FoundEq) {
            if (text.startsWith('"') && text.endsWith('"')) {
              classState = ClassState.InsideSingle;
            } else if (text.startsWith("'") && text.endsWith("'")) {
              classState = ClassState.InsideSingle;
            } else if (text.startsWith("`") && text.endsWith("`")) {
              classState = ClassState.InsideSingle;
            } else {
              // TODO: Handle multi-line class attributes
              classState = ClassState.None;
              console.warn("Found a potential multi-line class attribute");
              console.warn({ text });
            }
          }

          if (classState !== ClassState.InsideSingle) continue;

          let replacements = highlightClassesIn.call(this, el, toHighlight, opts);

          classState = ClassState.None;

          if (!replacements) continue;

          // Replace the current element with the new elements
          line.children.splice(i, 1, ...replacements);
        }
      }

      // Remove all lines that were marked for removal
      ast.children = ast.children.filter((i) => !toRemove.has(i));
    },
  };
}

const classListStart = /[ "'`]/;
const classListEnd = /[ "'`:]/;

function highlightClassesIn(
  this: ShikiTransformerContext,
  el: Element,
  classes: Set<string>,
  opts: HighlightClassesOptions,
): Element[] | null {
  let textNode = el.children[0];
  if (textNode.type !== "text") return null;

  function create(value: string): Element {
    return {
      ...el,
      properties: { ...el.properties },
      children: [{ type: "text", value }],
    };
  }

  let text = textNode.value;

  // A list of new <span> elements that will replace the current element
  // where classes are highlighted
  let matches: [start: number, end: number][] = [];

  // Note where every class is found in the text
  for (let cls of classes) {
    let index = text.indexOf(cls);

    while (index !== -1) {
      let prevChar = text[index - 1];
      let nextChar = text[index + cls.length];

      let isValidStart = !prevChar || classListStart.test(prevChar);
      let isValidEnd = !nextChar || classListEnd.test(nextChar);

      if (isValidStart && isValidEnd) {
        matches.push([index, index + cls.length]);
      }

      index = text.indexOf(cls, index + 1);
    }
  }

  // No matching classes were found in the text
  if (matches.length === 0) return null;

  // Sort the matches by their start index
  matches.sort(([a], [b]) => a - b);

  // Split the text into segments based on the matches
  let segments: Element[] = [];

  let last = 0;

  for (let [start, end] of matches) {
    // Add an element for the text between the last match and this match
    if (start > last) {
      segments.push(create(text.slice(last, start)));
    }

    // Add an element for the class itself
    let classEl = create(text.slice(start, end));
    segments.push(classEl);

    // Add a class to the element so we can style it
    this.addClassToHast(classEl, opts.highlightedClassName);

    last = end;
  }

  if (last < text.length) {
    segments.push(create(text.slice(last)));
  }

  return segments;
}

// All "control" comments must be on their own line
const commentStart = /^\s*(?:\/\/|#)\s*(.*)$/;
const commentMulti = /^\s*\/\*\s*(.*)\s*\*\/$/;
const commentHTML = /^\s*<!--\s*(.*)\s*-->$/;

// The class control pattern must be by itself in a comment
const classControlPattern = /^\s*\[!code classes:(.*?)\]\s*$/;

interface Highlight {
  classes: string[];
}

function parseHighlightDirective(el: Element): Highlight | null {
  let comment = getControlComment(el);
  if (!comment) return null;

  let match = comment.match(classControlPattern);
  if (!match) return null;

  let classes = segment(match[1], ",");

  if (classes.length === 0) return null;

  return { classes };
}

function getControlComment(el: Element): string | null {
  let text = getTextContent(el);
  if (text === "") return null;

  let match = text.match(commentStart);
  if (match) return match[1];

  match = text.match(commentMulti);
  if (match) return match[1];

  match = text.match(commentHTML);
  if (match) return match[1];

  return null;
}

export function getTextContent(element: ElementContent): string {
  if (element.type === "text") {
    return element.value;
  }

  if (element.type === "element" && (element.tagName === "div" || element.tagName === "span")) {
    return element.children.map(getTextContent).join("");
  }

  return "";
}
