import { describe, it, expect } from 'vitest'
import { mdxToMarkdown } from './mdx-to-markdown'

describe('mdxToMarkdown', () => {
  it('strips imports from the top of the file', async () => {
    const input = `import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import dedent from "dedent";

export const title = "animation";

Some content here.`

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('import')
    expect(output).toContain('# animation')
    expect(output).toContain('Some content here.')
  })

  it('converts title and description to h1 and paragraph', async () => {
    const input = `export const title = "Dark mode";
export const description = "Using variants to style your site in dark mode.";

## Overview

Some content.`

    const output = await mdxToMarkdown(input)
    expect(output.startsWith('# Dark mode\n\nUsing variants to style your site in dark mode.\n\n')).toBe(true)
    expect(output).toContain('## Overview')
  })

  it('removes <Example> blocks with props', async () => {
    const input = `Some intro text.

<Example padding={false}>
  {
    <div className="grid grid-cols-1">
      <p>Visual preview stuff</p>
    </div>
  }
</Example>

\`\`\`html
<div class="bg-white">Content</div>
\`\`\`

More text.`

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('<Example')
    expect(output).not.toContain('</Example>')
    expect(output).not.toContain('Visual preview stuff')
    expect(output).toContain('```html')
    expect(output).toContain('<div class="bg-white">Content</div>')
  })

  it('removes <Figure> tags but keeps contents', async () => {
    const input = `<Figure>

\`\`\`html
<div>Code here</div>
\`\`\`

</Figure>`

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('<Figure>')
    expect(output).not.toContain('</Figure>')
    expect(output).toContain('```html')
  })

  it('removes HTML [!code ...] comments', async () => {
    const input = `\`\`\`html
<!-- [!code word:dark\\:bg-gray-800] -->
<!-- [!code filename:HTML] -->
<!-- [!code highlight:2] -->
<div class="dark:bg-gray-800">Content</div>
\`\`\``

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('[!code')
    expect(output).toContain('<div class="dark:bg-gray-800">Content</div>')
  })

  it('removes CSS [!code ...] comments', async () => {
    const input = `\`\`\`css
/* [!code filename:app.css] */
@import "tailwindcss";

/* [!code highlight:2] */
@custom-variant dark (&:where(.dark, .dark *));
\`\`\``

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('[!code')
    expect(output).toContain('@import "tailwindcss";')
    expect(output).toContain('@custom-variant dark')
  })

  it('removes JS [!code ...] comments', async () => {
    const input = `\`\`\`js
// [!code filename:spaghetti.js]
document.documentElement.classList.toggle("dark");
\`\`\``

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('[!code')
    expect(output).toContain('document.documentElement.classList.toggle("dark");')
  })

  it('removes prettier-ignore comments', async () => {
    const input = `\`\`\`html
<!-- prettier-ignore -->
<div class="long-class-list">Content</div>
\`\`\``

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('prettier-ignore')
    expect(output).toContain('<div class="long-class-list">Content</div>')
  })

  it('removes /* prettier-ignore */ comments in CSS', async () => {
    const input = `\`\`\`css
@theme {
  /* prettier-ignore */
  --font-sans: ui-sans-serif, system-ui, sans-serif;
}
\`\`\``

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('prettier-ignore')
    expect(output).toContain('--font-sans: ui-sans-serif, system-ui, sans-serif;')
  })

  it('converts JSX tables to markdown tables', async () => {
    const input = `{

<table>
  <thead>
    <tr>
      <th>Namespace</th>
      <th>Utility classes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="whitespace-nowrap">
        <code>--color-*</code>
      </td>
      <td>
        Color utilities like <code>bg-red-500</code>, <code>text-sky-300</code>, and many more
      </td>
    </tr>
    <tr>
      <td className="whitespace-nowrap">
        <code>--font-*</code>
      </td>
      <td>
        Font family utilities like <code>font-sans</code>
      </td>
    </tr>
  </tbody>
</table>
}`

    const output = await mdxToMarkdown(input)
    // Should not contain JSX/HTML table markup
    expect(output).not.toContain('<table>')
    expect(output).not.toContain('className')
    expect(output).not.toContain('<td')
    expect(output).not.toContain('<tr')
    // Should contain markdown table (with flexible spacing)
    expect(output).toMatch(/\|\s*Namespace\s*\|/)
    expect(output).toMatch(/\|\s*Utility classes\s*\|/)
    expect(output).toContain('`--color-*`')
    expect(output).toContain('`--font-*`')
  })

  it('removes standalone curly braces used for JSX expressions', async () => {
    const input = `Some text.

{

<div>JSX content</div>
}

More text.`

    const output = await mdxToMarkdown(input)
    // After JSX is processed, there shouldn't be lone { } wrappers
    expect(output).not.toMatch(/^\s*\{\s*$/m)
    expect(output).not.toMatch(/^\s*\}\s*$/m)
  })

  it('converts ApiTable to markdown table', async () => {
    const input = `<ApiTable
  rows={[
    ["break-after-auto", "break-after: auto;"],
    ["break-after-avoid", "break-after: avoid;"],
    ["break-after-column", "break-after: column;"],
  ]}
/>`

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('<ApiTable')
    expect(output).not.toContain('rows={')
    expect(output).toContain('| Class')
    expect(output).toContain('`break-after-auto`')
    expect(output).toContain('`break-after: auto;`')
  })

  it('evaluates and converts ApiTable with complex expressions (flatMap/map)', async () => {
    const input = `Some intro text.

<ApiTable
  rows={[
    { prefix: "inset", property: "inset" },
    { prefix: "top", property: "top" },
  ].flatMap(({ prefix, property }) =>
    [
      ["<number>", "calc(var(--spacing) * <number>)"],
      ["auto", "auto"],
    ].map(([suffix, value]) => [\`\${prefix}-\${suffix}\`, \`\${property}: \${value};\`]),
  )}
/>

More content here.`

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('<ApiTable')
    expect(output).not.toContain('flatMap')
    expect(output).toContain('Some intro text.')
    expect(output).toContain('More content here.')
    // Should contain the evaluated table
    expect(output).toContain('`inset-<number>`')
    expect(output).toContain('`top-auto`')
  })
})

describe('UsingACustomValue component', () => {
  it('inlines UsingACustomValue with single utility', async () => {
    const input = `<UsingACustomValue utility="p" name="padding" value="5px" />`
    const output = await mdxToMarkdown(input)
    expect(output).toContain('Use the `p-[<value>]` syntax to set the padding based on a completely custom value')
    expect(output).toContain('```html')
    expect(output).toContain('p-[5px]')
    expect(output).toContain('p-(<custom-property>)')
  })

  it('inlines UsingACustomValue with multiple utilities', async () => {
    const input = `<UsingACustomValue utilities={["p", "px", "py"]} name="padding" value="5px" variable="padding" />`
    const output = await mdxToMarkdown(input)
    expect(output).toContain('Use utilities like')
    expect(output).toContain('`p-[<value>]`')
    expect(output).toContain('`px-[<value>]`')
    expect(output).toContain('`py-[<value>]`')
    expect(output).toContain('--my-padding')
  })

  it('inlines UsingACustomValue with dataType', async () => {
    const input = `<UsingACustomValue utility="bg" name="background" value="url(...)" dataType="image" variable="bg" />`
    const output = await mdxToMarkdown(input)
    expect(output).toContain('bg-(image:<custom-property>)')
    expect(output).toContain('image:--my-bg')
    expect(output).toContain('`bg-[image:var(<custom-property>)]`')
  })
})

describe('CustomizingYourSpacingScale component', () => {
  it('inlines CustomizingYourSpacingScale with single utility', async () => {
    const input = `<CustomizingYourSpacingScale utility="p" />`
    const output = await mdxToMarkdown(input)
    expect(output).toContain('`p-<number>` utilities are driven by the `--spacing` theme variable')
    expect(output).toContain('```css')
    expect(output).toContain('--spacing: 1px')
  })

  it('inlines CustomizingYourSpacingScale with multiple utilities', async () => {
    const input = `<CustomizingYourSpacingScale utilities={["p", "m", "gap"]} />`
    const output = await mdxToMarkdown(input)
    expect(output).toContain('`p-<number>`')
    expect(output).toContain('`m-<number>`')
    expect(output).toContain('`gap-<number>`')
    expect(output).toContain('--spacing')
  })
})

describe('Tip components', () => {
  it('converts TipGood with plain text title to italics', async () => {
    const input = `<TipGood>Always use complete class names</TipGood>

\`\`\`html
<div class="text-red-600"></div>
\`\`\``

    const output = await mdxToMarkdown(input)
    expect(output).toContain('_Always use complete class names_')
    expect(output).not.toContain('<TipGood>')
    expect(output).toContain('```html')
  })

  it('converts TipBad with JSX expression title to italics', async () => {
    const input = `<TipBad>{<>Don't construct class names dynamically</>}</TipBad>

\`\`\`html
<div class="text-red-600"></div>
\`\`\``

    const output = await mdxToMarkdown(input)
    expect(output).toContain("_Don't construct class names dynamically_")
    expect(output).not.toContain('<TipBad>')
    expect(output).not.toContain('{<>')
  })

  it('converts TipInfo to italics', async () => {
    const input = `<TipInfo>Important information here</TipInfo>

Some context.`

    const output = await mdxToMarkdown(input)
    expect(output).toContain('_Important information here_')
    expect(output).not.toContain('<TipInfo>')
  })

  it('converts Tip with code in JSX title to italics with backticks', async () => {
    const input = `<TipBad>
  {
    <>
      Don't use <code>sm:</code> to target mobile devices
    </>
  }
</TipBad>

\`\`\`html
<div class="sm:text-center"></div>
\`\`\``

    const output = await mdxToMarkdown(input)
    expect(output).toContain("_Don't use `sm:` to target mobile devices_")
    expect(output).not.toContain('<TipBad>')
    expect(output).not.toContain('<code>')
  })
})

describe('Visual component removal', () => {
  it('removes ColorPalette component', async () => {
    const input = `Some text.

<ColorPalette />

More text.`

    const output = await mdxToMarkdown(input)
    expect(output).not.toContain('<ColorPalette')
    expect(output).toContain('Some text.')
    expect(output).toContain('More text.')
  })
})
