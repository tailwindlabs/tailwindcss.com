// Note: can run these tests with `bun test` or `node --test`

import { describe, test } from "node:test";
import assert from "node:assert";
import { extractTextFromMDX } from "./ast-extract";
import dedent from "dedent";

describe("extractTextFromMDX", () => {
  describe("extracting title and description", () => {
    test("extracts title and description from exports", (t) => {
      let input = dedent`
        export const title = "Test Title";
        export const description = "Test description";

        ## Content
        Some content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("Test Title"));
      assert.ok(result.includes("Test description"));
      assert.ok(result.includes("## Content"));
      assert.ok(result.includes("Some content here"));
    });

    test("handles missing title and description", (t) => {
      let input = dedent`
        ## Content
        Some content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Content"));
      assert.ok(result.includes("Some content here"));
    });
  });

  describe("extracting markdown headings", () => {
    test("preserves heading hierarchy", (t) => {
      let input = dedent`
        ## Heading 2
        Content under h2

        ### Heading 3
        Content under h3

        #### Heading 4
        Content under h4
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Heading 2"));
      assert.ok(result.includes("### Heading 3"));
      assert.ok(result.includes("#### Heading 4"));
    });

    test("preserves heading text with special characters", (t) => {
      let input = dedent`
        ## Heading with \`code\` and **bold**
        Content here
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Heading"));
    });
  });

  describe("extracting paragraph text", () => {
    test("extracts paragraph text", (t) => {
      let input = dedent`
        ## Title

        This is a paragraph with some text.

        This is another paragraph.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("This is a paragraph with some text"));
      assert.ok(result.includes("This is another paragraph"));
    });

    test("preserves line breaks in paragraphs", (t) => {
      let input = dedent`
        This is a paragraph
        that spans multiple lines.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("This is a paragraph"));
      assert.ok(result.includes("that spans multiple lines"));
    });
  });

  describe("extracting code blocks", () => {
    test("preserves code block content with language hint", (t) => {
      let input = dedent`
        ## Code Example

        \`\`\`html
        <div class="test">Hello</div>
        \`\`\`
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("```html"));
      assert.ok(result.includes('<div class="test">Hello</div>'));
    });

    test("removes code example directives from code blocks", (t) => {
      let input = dedent`
        \`\`\`html
        <!-- [!code classes:test] -->
        <div class="test">Hello</div>
        \`\`\`
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("[!code"));
      assert.ok(result.includes('<div class="test">Hello</div>'));
    });

    test("preserves multiple code blocks", (t) => {
      let input = dedent`
        \`\`\`html
        <div>HTML</div>
        \`\`\`

        \`\`\`css
        .test { color: red; }
        \`\`\`
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("```html"));
      assert.ok(result.includes("<div>HTML</div>"));
      assert.ok(result.includes("```css"));
      assert.ok(result.includes(".test { color: red; }"));
    });
  });

  describe("stripping import statements", () => {
    test("removes import statements", (t) => {
      let input = dedent`
        import { Example } from "@/components/example";
        import dedent from "dedent";

        ## Content
        Some content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("import"));
      assert.ok(result.includes("## Content"));
      assert.ok(result.includes("Some content here"));
    });

    test("removes various import formats", (t) => {
      let input = dedent`
        import React from "react";
        import type { Component } from "./types";
        import { Example, Figure } from "@/components";

        ## Content
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("import"));
      assert.ok(result.includes("## Content"));
    });
  });

  describe("stripping JSX/React component syntax", () => {
    test("removes JSX component tags", (t) => {
      let input = dedent`
        ## Title

        <Example>
          <div>Content</div>
        </Example>

        More content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("<Example>"));
      assert.ok(!result.includes("</Example>"));
      assert.ok(result.includes("More content here"));
    });

    test("removes component props", (t) => {
      let input = dedent`
        <Figure hint="Hover over this">
          <Example padding={false}>
            Content
          </Example>
        </Figure>
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("hint="));
      assert.ok(!result.includes("padding="));
    });

    test("skips Example components (visual demonstrations)", (t) => {
      let input = dedent`
        Some text before.

        <Example>
          <div>This is demo content</div>
          <p>More demo here</p>
        </Example>

        Some text after.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("Some text before"));
      assert.ok(result.includes("Some text after"));
      assert.ok(!result.includes("This is demo content"));
      assert.ok(!result.includes("More demo here"));
    });
  });

  describe("handling ApiTable components", () => {
    test("extracts table data as text", (t) => {
      let input = dedent`
        <ApiTable
          rows={[
            ["inline", "display: inline;"],
            ["block", "display: block;"],
          ]}
        />
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("inline"));
      assert.ok(result.includes("display: inline"));
      assert.ok(result.includes("block"));
      assert.ok(result.includes("display: block"));
    });

    test("handles ApiTable with multiple rows", (t) => {
      let input = dedent`
        <ApiTable
          rows={[
            ["z-<number>", "z-index: <number>;"],
            ["z-auto", "z-index: auto;"],
            ["z-[<value>]", "z-index: <value>;"],
          ]}
        />
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("z-<number>"));
      assert.ok(result.includes("z-index: <number>"));
      assert.ok(result.includes("z-auto"));
      assert.ok(result.includes("z-index: auto"));
    });
  });

  describe("handling links", () => {
    test("converts markdown links to plain text", (t) => {
      let input = dedent`
        Check out the [display docs](/docs/display) for more info.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("display docs"));
      assert.ok(result.includes("/docs/display"));
    });

    test("handles links in headings", (t) => {
      let input = dedent`
        ## See [this page](/docs/page)
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("this page"));
      assert.ok(result.includes("/docs/page"));
    });
  });

  describe("handling code example directives", () => {
    test("removes [!code ...] directives from code", (t) => {
      let input = dedent`
        \`\`\`html
        <!-- [!code classes:test] -->
        <div class="test">Hello</div>
        <!-- [!code highlight:2] -->
        \`\`\`
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("[!code"));
      assert.ok(result.includes('<div class="test">Hello</div>'));
    });

    test("removes [!code filename:...] directives", (t) => {
      let input = dedent`
        \`\`\`html
        <!-- [!code filename:example.html] -->
        <div>Content</div>
        \`\`\`
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("[!code filename"));
      assert.ok(result.includes("<div>Content</div>"));
    });
  });

  describe("edge cases", () => {
    test("handles empty file", (t) => {
      let result = extractTextFromMDX("");
      assert.strictEqual(typeof result, "string");
    });

    test("handles file with only exports", (t) => {
      let input = dedent`
        export const title = "Title";
        export const description = "Description";
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("Title"));
      assert.ok(result.includes("Description"));
    });

    test("handles special characters", (t) => {
      let input = dedent`
        ## Title with "quotes" and 'apostrophes'
        Content with <angle brackets> and &amp; entities.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("Title"));
    });

    test("handles nested components", (t) => {
      let input = dedent`
        <Figure>
          <Example>
            <div>Nested content</div>
          </Example>
        </Figure>
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("<Figure>"));
      assert.ok(!result.includes("<Example>"));
    });
  });

  describe("removing export statements", () => {
    test("removes export const title and description", (t) => {
      let input = dedent`
        export const title = "Test Title";
        export const description = "Test description";

        ## Content
        Some content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("export const title"));
      assert.ok(!result.includes("export const description"));
      assert.ok(result.includes("## Content"));
      assert.ok(result.includes("Some content here"));
    });

    test("removes export statements with template literals", (t) => {
      let input = dedent`
        export const title = \`Test Title\`;
        export const description = \`Test description\`;

        ## Content
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("export const title"));
      assert.ok(!result.includes("export const description"));
    });
  });

  describe("handling content components", () => {
    test("extracts text from ResponsiveDesign component", (t) => {
      let input = dedent`
        ### Responsive design

        <ResponsiveDesign property="color" featuredClass="text-green-600" breakpoint="md" />
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("### Responsive design"));
      assert.ok(result.includes("Prefix a color utility"));
      assert.ok(result.includes("breakpoint variant like md:"));
      assert.ok(result.includes("md:text-green-600"));
      assert.ok(!result.includes("<ResponsiveDesign"));
    });

    test("extracts text from CustomizingYourTheme component", (t) => {
      let input = dedent`
        ## Customizing your theme

        <CustomizingYourTheme utility="spacing" />
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Customizing your theme"));
      assert.ok(result.includes("Use the --spacing-* theme variables"));
      assert.ok(!result.includes("<CustomizingYourTheme"));
    });

    test("extracts text from TargetingSpecificStates component", (t) => {
      let input = dedent`
        ### Targeting specific states

        <TargetingSpecificStates property="background-color" variant="hover" featuredClass="bg-blue-500" />
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("### Targeting specific states"));
      assert.ok(result.includes("Prefix a background-color utility"));
      assert.ok(result.includes("variant like hover:"));
      assert.ok(!result.includes("<TargetingSpecificStates"));
    });

    test("handles ResponsiveDesign without all props", (t) => {
      let input = dedent`
        <ResponsiveDesign property="color" />
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("Use responsive variants"));
      assert.ok(!result.includes("<ResponsiveDesign"));
    });
  });

  describe("removing standalone HTML blocks", () => {
    test("removes HTML blocks that are not in code blocks", (t) => {
      let input = dedent`
        ## Example

        <div>
          <p>Basic Tee</p>
          <p>$35</p>
        </div>

        More content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Example"));
      assert.ok(result.includes("More content here"));
      assert.ok(!result.includes("<div>"));
      assert.ok(!result.includes("<p>Basic Tee</p>"));
    });

    test("preserves HTML in code blocks", (t) => {
      let input = dedent`
        ## Example

        \`\`\`html
        <div>
          <p>Basic Tee</p>
        </div>
        \`\`\`

        More content.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("```html"));
      assert.ok(result.includes("<div>"));
      assert.ok(result.includes("<p>Basic Tee</p>"));
      assert.ok(result.includes("More content"));
    });

    test("removes nested HTML structures", (t) => {
      let input = dedent`
        <div>
          <div>
            <p>Text</p>
          </div>
        </div>

        Content after HTML.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("Content after HTML"));
      assert.ok(!result.includes("<div>"));
      assert.ok(!result.includes("<p>Text</p>"));
    });

    test("removes HTML with empty elements", (t) => {
      let input = dedent`
        <div>
          <span></span>
          <p>Content</p>
        </div>
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("<div>"));
      assert.ok(!result.includes("<span>"));
      assert.ok(!result.includes("<p>Content</p>"));
    });
  });

  describe("handling JSX expressions with nested braces", () => {
    test("extracts table headers from JSX expression", (t) => {
      let input = dedent`
        ## Breakpoints

        {
        <table>
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Width</th>
            </tr>
          </thead>
        </table>
        }

        More content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("Breakpoint"));
      assert.ok(result.includes("Width"));
      assert.ok(result.includes("More content here"));
      assert.ok(!result.includes("{"));
      assert.ok(!result.includes("}"));
    });

    test("handles JSX expressions with code blocks inside", (t) => {
      let input = dedent`
        {
        <div>
          \`\`\`html
          <div>Code example</div>
          \`\`\`
        </div>
        }
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("```html") || result.includes("Code example"));
    });
  });

  describe("real-world examples", () => {
    test("handles responsive-design.mdx with JSX table expression", (t) => {
      let input = dedent`
        export const title = "Responsive design";
        export const description = "Using responsive utility variants.";

        ## Overview

        There are five breakpoints:

        {
        <table>
          <thead>
            <tr>
              <th>Breakpoint prefix</th>
              <th>Minimum width</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>sm</code></td>
              <td>40rem <em>(640px)</em></td>
            </tr>
          </tbody>
        </table>
        }

        ### Customizing your theme

        More content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("Responsive design"));
      assert.ok(result.includes("Using responsive utility variants"));
      assert.ok(result.includes("## Overview"));
      assert.ok(result.includes("Breakpoint prefix"));
      assert.ok(result.includes("Minimum width"));
      assert.ok(result.includes("### Customizing your theme"));
      assert.ok(result.includes("More content here"));
      assert.ok(!result.includes("export const"));
      assert.ok(!result.includes("{"));
      assert.ok(!result.includes("}"));
    });

    test("handles display.mdx structure", (t) => {
      let input = dedent`
        import dedent from "dedent";
        import { ApiTable } from "@/components/api-table.tsx";
        import { Example } from "@/components/example.tsx";
        import { Figure } from "@/components/figure.tsx";

        export const title = "display";
        export const description = "Utilities for controlling the display box type of an element.";

        <ApiTable
          rows={[
            ["inline", "display: inline;"],
            ["block", "display: block;"],
          ]}
        />

        ## Examples

        ### Block and Inline

        Use the \`inline\`, \`inline-block\`, and \`block\` utilities:

        <Figure>
          <Example>
            {<div>Example content</div>}
          </Example>

          \`\`\`html
          <!-- [!code classes:inline,block] -->
          <div class="inline">Content</div>
          \`\`\`
        </Figure>
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("display"));
      assert.ok(result.includes("Utilities for controlling the display box type"));
      assert.ok(result.includes("## Examples"));
      assert.ok(result.includes("### Block and Inline"));
      assert.ok(result.includes("Use the"));
      assert.ok(result.includes("```html"));
      assert.ok(result.includes('<div class="inline">Content</div>'));
      assert.ok(!result.includes("import"));
      assert.ok(!result.includes("<ApiTable"));
      assert.ok(!result.includes("<Figure>"));
      assert.ok(!result.includes("[!code"));
    });
  });

  describe("handling media elements", () => {
    test("removes img tags completely", (t) => {
      let input = dedent`
        ## Editor setup

        Some content before.

        <img src="/img/photo.png" alt="Photo description" width={1344} height={672} />

        More content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Editor setup"));
      assert.ok(result.includes("Some content before"));
      assert.ok(result.includes("More content here"));
      assert.ok(!result.includes("<img"));
      assert.ok(!result.includes("src="));
      assert.ok(!result.includes("Photo description"));
    });

    test("removes img tags with JSX props", (t) => {
      let input = dedent`
        <img
          src={require("./img/zed-intellisense.png").default.src}
          alt="Built-in support for Tailwind CSS in Zed"
          width={1344}
          height={672}
          className="rounded-lg"
        />
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("<img"));
      assert.ok(!result.includes("src="));
      assert.ok(!result.includes("require"));
      assert.ok(!result.includes("zed-intellisense"));
    });

    test("removes svg tags completely", (t) => {
      let input = dedent`
        ## Icons

        Here's an icon:

        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>

        More content here.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Icons"));
      assert.ok(result.includes("More content here"));
      assert.ok(!result.includes("<svg"));
      assert.ok(!result.includes("viewBox"));
      assert.ok(!result.includes("<path"));
    });

    test("removes video tags", (t) => {
      let input = dedent`
        ## Demo

        <video src="/demo.mp4" controls />

        Watch the demo above.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Demo"));
      assert.ok(result.includes("Watch the demo above"));
      assert.ok(!result.includes("<video"));
      assert.ok(!result.includes("demo.mp4"));
    });

    test("removes iframe tags", (t) => {
      let input = dedent`
        ## Embedded content

        <iframe src="https://example.com" width="100%" height="400" />

        See the embedded content above.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Embedded content"));
      assert.ok(result.includes("See the embedded content above"));
      assert.ok(!result.includes("<iframe"));
      assert.ok(!result.includes("example.com"));
    });

    test("removes picture and source tags", (t) => {
      let input = dedent`
        ## Responsive images

        <picture>
          <source srcset="/img/photo.webp" type="image/webp" />
          <img src="/img/photo.jpg" alt="Photo" />
        </picture>

        Image shown above.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Responsive images"));
      assert.ok(result.includes("Image shown above"));
      assert.ok(!result.includes("<picture"));
      assert.ok(!result.includes("<source"));
      assert.ok(!result.includes("<img"));
      assert.ok(!result.includes("photo.webp"));
    });

    test("handles multiple img tags in content", (t) => {
      let input = dedent`
        ## Gallery

        <img src="/img/photo1.jpg" />
        <img src="/img/photo2.jpg" />
        <img src="/img/photo3.jpg" />

        Three photos above.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Gallery"));
      assert.ok(result.includes("Three photos above"));
      assert.ok(!result.includes("<img"));
      assert.ok(!result.includes("photo1"));
      assert.ok(!result.includes("photo2"));
      assert.ok(!result.includes("photo3"));
    });

    test("removes img tags but preserves surrounding text", (t) => {
      let input = dedent`
        Before image <img src="/img/test.jpg" /> after image.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("Before image"));
      assert.ok(result.includes("after image"));
      assert.ok(!result.includes("<img"));
    });
  });

  describe("handling media elements", () => {
    test("removes img tags and preserves surrounding content", (t) => {
      let input = dedent`
        ## Editor Setup

        Check out our editor:

        <img src="/img/editor.png" alt="Editor screenshot" width={1344} height={672} />

        It's great for development.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Editor Setup"));
      assert.ok(result.includes("Check out our editor"));
      assert.ok(result.includes("It's great for development"));
      assert.ok(!result.includes("<img"));
      assert.ok(!result.includes("src="));
      assert.ok(!result.includes("Editor screenshot"));
    });

    test("removes img tags with JSX props", (t) => {
      let input = dedent`
        <img
          src={require("./img/zed-intellisense.png").default.src}
          alt="Built-in support for Tailwind CSS"
          width={1344}
          height={672}
          className="rounded-lg"
        />
      `;

      let result = extractTextFromMDX(input);
      assert.ok(!result.includes("<img"));
      assert.ok(!result.includes("src="));
      assert.ok(!result.includes("require"));
      assert.ok(!result.includes("Built-in support"));
    });

    test("removes svg tags completely", (t) => {
      let input = dedent`
        ## Icons

        Here's an icon:

        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>

        Use it wisely.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Icons"));
      assert.ok(result.includes("Here's an icon"));
      assert.ok(result.includes("Use it wisely"));
      assert.ok(!result.includes("<svg"));
      assert.ok(!result.includes("viewBox"));
      assert.ok(!result.includes("<path"));
    });

    test("removes video tags", (t) => {
      let input = dedent`
        ## Demo

        <video src="/demo.mp4" controls />

        Watch the demo above.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Demo"));
      assert.ok(result.includes("Watch the demo above"));
      assert.ok(!result.includes("<video"));
      assert.ok(!result.includes("src="));
    });

    test("removes iframe tags", (t) => {
      let input = dedent`
        ## Embedded Content

        <iframe src="https://example.com" width="600" height="400" />

        Check out the embed.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Embedded Content"));
      assert.ok(result.includes("Check out the embed"));
      assert.ok(!result.includes("<iframe"));
      assert.ok(!result.includes("example.com"));
    });

    test("removes picture and source tags", (t) => {
      let input = dedent`
        ## Responsive Images

        <picture>
          <source srcset="/img/photo.webp" type="image/webp" />
          <img src="/img/photo.jpg" alt="Photo" />
        </picture>

        Beautiful image above.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Responsive Images"));
      assert.ok(result.includes("Beautiful image above"));
      assert.ok(!result.includes("<picture"));
      assert.ok(!result.includes("<source"));
      assert.ok(!result.includes("<img"));
      assert.ok(!result.includes("srcset"));
    });

    test("handles img tags in code examples", (t) => {
      let input = dedent`
        ## HTML Example

        \`\`\`html
        <img src="/logo.svg" alt="Logo" />
        \`\`\`

        The code above shows an image tag.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## HTML Example"));
      assert.ok(result.includes("```html"));
      assert.ok(result.includes('<img src="/logo.svg" alt="Logo" />'));
      assert.ok(result.includes("The code above shows an image tag"));
    });

    test("removes multiple media elements in sequence", (t) => {
      let input = dedent`
        ## Gallery

        <img src="/img/1.jpg" />
        <img src="/img/2.jpg" />
        <svg><path d="M0 0" /></svg>
        <video src="/video.mp4" />

        All media above.
      `;

      let result = extractTextFromMDX(input);
      assert.ok(result.includes("## Gallery"));
      assert.ok(result.includes("All media above"));
      assert.ok(!result.includes("<img"));
      assert.ok(!result.includes("<svg"));
      assert.ok(!result.includes("<video"));
    });
  });
});
