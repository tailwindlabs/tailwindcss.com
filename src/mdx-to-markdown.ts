import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMdx from 'remark-mdx'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import { visit } from 'unist-util-visit'
import { remove } from 'unist-util-remove'
import type { Root, Table, TableRow, TableCell, PhrasingContent, Code, Html } from 'mdast'
import type { MdxjsEsm, MdxJsxFlowElement, MdxJsxTextElement } from 'mdast-util-mdx'
import fs from 'node:fs'
import path from 'node:path'

// Load Tailwind colors from theme.css for ApiTable evaluation
let _colors: Record<string, string> | null = null
function getColors(): Record<string, string> {
  if (_colors) return _colors

  try {
    const themePath = path.join(process.cwd(), 'node_modules/tailwindcss/theme.css')
    const styles = fs.readFileSync(themePath, 'utf-8')

    const colors: Record<string, string> = {}
    for (const line of styles.split('\n')) {
      if (line.startsWith('  --color-')) {
        const [key, value] = line.split(':').map((part) => part.trim().replace(';', ''))
        const name = key.replace('--color-', '')
        colors[name] = value
      }
    }

    // Move black and white to front
    _colors = {
      black: colors.black,
      white: colors.white,
      ...colors,
    }
  } catch {
    _colors = {}
  }

  return _colors
}

// =============================================================================
// SHARED HELPER FUNCTIONS
// =============================================================================

interface UsingACustomValueProps {
  utility?: string
  utilities?: string[]
  name?: string
  value?: string
  variable?: string
  dataType?: string
}

function inlineUsingACustomValue(props: UsingACustomValueProps): string {
  const utility = props.utility || props.utilities?.[0] || ''
  const name = props.name || utility
  const value = props.value || '...'
  const variable = props.variable || utility
  const dataType = props.dataType

  const property = dataType ? `${dataType}:--my-${variable}` : `--my-${variable}`

  let md = ''

  if (props.utilities && props.utilities.length > 1) {
    let utilityList: string
    if (props.utilities.length === 2) {
      utilityList = `\`${props.utilities[0]}-[<value>]\` and \`${props.utilities[1]}-[<value>]\``
    } else {
      const allButLast = props.utilities.slice(0, -1).map(u => `\`${u}-[<value>]\``).join(', ')
      const last = `\`${props.utilities[props.utilities.length - 1]}-[<value>]\``
      utilityList = `${allButLast}, and ${last}`
    }
    md += `Use utilities like ${utilityList} to set the ${name} based on a completely custom value:\n\n`
  } else {
    md += `Use the \`${utility}-[<value>]\` syntax to set the ${name} based on a completely custom value:\n\n`
  }

  md += '```html\n'
  md += `<div class="${utility}-[${value}] ...">...</div>\n`
  md += '```\n\n'
  md += `For CSS variables, you can also use the \`${utility}-(${dataType ? `${dataType}:` : ''}<custom-property>)\` syntax:\n\n`
  md += '```html\n'
  md += `<div class="${utility}-(${property}) ...">...</div>\n`
  md += '```\n\n'
  md += `This is just a shorthand for \`${utility}-[${dataType ? `${dataType}:` : ''}var(<custom-property>)]\` that adds the \`var()\` function for you automatically.\n`

  return md
}

interface CustomizingYourSpacingScaleProps {
  utility?: string
  utilities?: string[]
}

function inlineCustomizingYourSpacingScale(props: CustomizingYourSpacingScaleProps): string {
  const utilities = props.utilities || [props.utility || '']

  let utilityList: string
  if (utilities.length === 1) {
    utilityList = `\`${utilities[0]}-<number>\``
  } else if (utilities.length === 2) {
    utilityList = `\`${utilities[0]}-<number>\` and \`${utilities[1]}-<number>\``
  } else {
    const allButLast = utilities.slice(0, -1).map(u => `\`${u}-<number>\``).join(', ')
    const last = `\`${utilities[utilities.length - 1]}-<number>\``
    utilityList = `${allButLast}, and ${last}`
  }

  let md = ''
  md += `The ${utilityList} utilities are driven by the \`--spacing\` theme variable, which can be customized in your own theme:\n\n`
  md += '```css\n'
  md += '@theme {\n'
  md += '  --spacing: 1px;\n'
  md += '}\n'
  md += '```\n\n'
  md += 'Learn more about customizing the spacing scale in the [theme variable documentation](/docs/theme).\n'

  return md
}

function startsWithVowel(str: string): boolean {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0]?.toLowerCase())
}

interface TargetingSpecificStatesProps {
  property?: string
  children?: string // The code example as a string
}

function inlineTargetingSpecificStates(props: TargetingSpecificStatesProps, childContent?: string): string {
  const property = props.property || 'utility'
  const article = startsWithVowel(property) ? 'an' : 'a'

  let md = ''
  md += `Prefix ${article} \`${property}\` utility with a variant like \`hover:*\` to only apply the utility in that state:\n\n`

  if (childContent) {
    md += childContent + '\n\n'
  }

  md += 'Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).\n'

  return md
}

const screens: Record<string, string> = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
}

interface ResponsiveDesignProps {
  property?: string
  properties?: string[]
  breakpoint?: string
  children?: string
}

function inlineResponsiveDesign(props: ResponsiveDesignProps, childContent?: string): string {
  const { property, properties, breakpoint = 'md' } = props
  const screenSize = screens[breakpoint] || 'medium'

  let md = ''

  if (properties && properties.length > 0) {
    let propList: string
    if (properties.length === 1) {
      propList = `\`${properties[0]}\``
    } else if (properties.length === 2) {
      propList = `\`${properties[0]}\` and \`${properties[1]}\``
    } else {
      const allButLast = properties.slice(0, -1).map(p => `\`${p}\``).join(', ')
      propList = `${allButLast}, and \`${properties[properties.length - 1]}\``
    }
    md += `Prefix ${propList} utilities with a breakpoint variant like \`${breakpoint}:\` to only apply the utility at ${screenSize} screen sizes and above:\n\n`
  } else if (property) {
    const article = startsWithVowel(property) ? 'an' : 'a'
    md += `Prefix ${article} \`${property}\` utility with a breakpoint variant like \`${breakpoint}:\` to only apply the utility at ${screenSize} screen sizes and above:\n\n`
  }

  if (childContent) {
    md += childContent + '\n\n'
  }

  md += 'Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).\n'

  return md
}

interface CustomizingYourThemeProps {
  utility?: string
  utilities?: string[]
  name?: string
  themeKey?: string
  customName?: string
  customValue?: string
  customCSS?: string
  includeSpacingNote?: boolean
}

function inlineCustomizingYourTheme(props: CustomizingYourThemeProps): string {
  const {
    utility,
    utilities,
    themeKey,
    customCSS,
    includeSpacingNote = false
  } = props

  const key = themeKey || utility || utilities?.[0] || ''
  const mainUtility = utility || utilities?.[0] || ''
  const name = props.name || key
  const customName = props.customName || 'custom'
  const customValue = props.customValue || '...'

  let md = ''
  md += `Use the \`--${key}-*\` theme variables to customize the ${name} utilities in your project:\n\n`
  md += '```css\n'
  if (customCSS) {
    md += customCSS + '\n'
  } else {
    md += '@theme {\n'
    md += `  --${key}-${customName}: ${customValue};\n`
    md += '}\n'
  }
  md += '```\n\n'

  if (utilities && utilities.length > 1) {
    let utilList: string
    if (utilities.length === 2) {
      utilList = `\`${utilities[0]}-${customName}\` and \`${utilities[1]}-${customName}\``
    } else {
      const allButLast = utilities.slice(0, -1).map(u => `\`${u}-${customName}\``).join(', ')
      utilList = `${allButLast}, and \`${utilities[utilities.length - 1]}-${customName}\``
    }
    md += `Now utilities like ${utilList} can be used in your markup:\n\n`
  } else {
    md += `Now the \`${mainUtility}-${customName}\` utility can be used in your markup:\n\n`
  }

  md += '```html\n'
  md += `<div class="${mainUtility}-${customName}">...</div>\n`
  md += '```\n\n'

  if (includeSpacingNote) {
    md += `The \`${mainUtility}-<number>\` utilities are driven by the \`--spacing\` theme variable, which you can also customize:\n\n`
    md += '```css\n'
    md += '@theme {\n'
    md += '  --spacing: 1px;\n'
    md += '}\n'
    md += '```\n\n'
    md += 'Learn more about customizing the spacing scale in the [theme documentation](/docs/theme#customizing-your-theme).\n'
  } else {
    md += 'Learn more about customizing your theme in the [theme documentation](/docs/theme#customizing-your-theme).\n'
  }

  return md
}

interface CustomizingYourThemeColorsProps {
  utility?: string
  utilities?: string[]
  element?: string
}

function inlineCustomizingYourThemeColors(props: CustomizingYourThemeColorsProps): string {
  return inlineCustomizingYourTheme({
    themeKey: 'color',
    name: 'color',
    utility: props.utility,
    utilities: props.utilities,
    customName: 'regal-blue',
    customValue: '#243c5a',
  })
}

// Extract title content from Tip component AST node as an array of phrasing content nodes
function extractTipContent(node: any): PhrasingContent[] {
  const result: PhrasingContent[] = []

  function addText(text: string) {
    if (text) {
      // Merge with previous text node if possible
      const last = result[result.length - 1]
      if (last && last.type === 'text') {
        last.value += text
      } else {
        result.push({ type: 'text', value: text })
      }
    }
  }

  function addInlineCode(code: string) {
    if (code) {
      result.push({ type: 'inlineCode', value: code })
    }
  }

  function extractFromEstree(estreeNode: any): void {
    if (!estreeNode) return

    if (estreeNode.type === 'JSXText') {
      addText(estreeNode.value)
    } else if (estreeNode.type === 'JSXElement' && estreeNode.openingElement?.name?.name === 'code') {
      // Convert <code> to inline code node
      const codeText = extractTextFromEstree(estreeNode.children || [])
      addInlineCode(codeText)
    } else if (estreeNode.type === 'JSXFragment') {
      for (const child of estreeNode.children || []) {
        extractFromEstree(child)
      }
    } else if (estreeNode.children) {
      for (const child of estreeNode.children) {
        extractFromEstree(child)
      }
    } else if (estreeNode.expression) {
      extractFromEstree(estreeNode.expression)
    } else if (estreeNode.body) {
      for (const n of estreeNode.body) {
        extractFromEstree(n)
      }
    }
  }

  function extractTextFromEstree(children: any[]): string {
    let text = ''
    for (const child of children) {
      if (child.type === 'JSXText') {
        text += child.value
      } else if (child.children) {
        text += extractTextFromEstree(child.children)
      }
    }
    return text.trim()
  }

  function processChildren(children: any[]): void {
    for (const child of children || []) {
      if (child.type === 'text') {
        addText(child.value)
      } else if (child.type === 'mdxJsxTextElement' && child.name === 'code') {
        // Convert <code> to inline code node
        const codeText = extractPlainText(child.children)
        addInlineCode(codeText)
      } else if (child.type === 'mdxFlowExpression' || child.type === 'mdxTextExpression') {
        // Handle JSX expressions like {<>...</>}
        const estree = child.data?.estree
        if (estree) {
          extractFromEstree(estree)
        }
      } else if (child.children) {
        processChildren(child.children)
      }
    }
  }

  function extractPlainText(children: any[]): string {
    let text = ''
    for (const child of children || []) {
      if (child.type === 'text') {
        text += child.value
      } else if (child.children) {
        text += extractPlainText(child.children)
      }
    }
    return text.trim()
  }

  if (node.children) {
    processChildren(node.children)
  }

  // Normalize whitespace in text nodes
  for (const item of result) {
    if (item.type === 'text') {
      item.value = item.value.replace(/\s+/g, ' ')
    }
  }

  // Trim leading/trailing whitespace
  if (result.length > 0) {
    const first = result[0]
    if (first.type === 'text') {
      first.value = first.value.trimStart()
    }
    const last = result[result.length - 1]
    if (last.type === 'text') {
      last.value = last.value.trimEnd()
    }
  }

  // Remove empty text nodes
  return result.filter(item => item.type !== 'text' || item.value)
}

// Extract props from AST JSX node attributes
function extractPropsFromJsxNode(node: MdxJsxFlowElement): Record<string, any> {
  const props: Record<string, any> = {}

  for (const attr of node.attributes || []) {
    if (attr.type === 'mdxJsxAttribute' && attr.name) {
      const value = attr.value
      if (typeof value === 'string') {
        props[attr.name] = value
      } else if (value && typeof value === 'object' && 'value' in value) {
        // Expression value like {["a", "b"]}
        try {
          props[attr.name] = eval(`(${value.value})`)
        } catch {
          // Ignore parse errors
        }
      }
    }
  }

  return props
}

export async function mdxToMarkdown(mdxContent: string): Promise<string> {
  let title = ''
  let description = ''

  const processor = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkGfm)
    .use(() => (tree: Root) => {
      // Extract and remove ESM imports/exports
      visit(tree, 'mdxjsEsm', (node: MdxjsEsm, index, parent) => {
        const value = node.value

        // Extract title
        const titleMatch = value.match(/export const title = ["'](.+?)["']/)
        if (titleMatch) {
          title = titleMatch[1]
        }

        // Extract description
        const descMatch = value.match(/export const description = ["'](.+?)["']/)
        if (descMatch) {
          description = descMatch[1]
        }
      })

      // Remove all ESM nodes (imports and exports)
      remove(tree, 'mdxjsEsm')

      // Remove <Example>, <ResponsiveDesign>, and visual-only components
      const visualComponents = ['Example', 'ResponsiveDesign', 'ColorPalette', 'MultiCursorCode', 'MultiCursorPreview', 'Stripes']
      remove(tree, (node) => {
        if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
          const jsxNode = node as MdxJsxFlowElement | MdxJsxTextElement
          return visualComponents.includes(jsxNode.name || '')
        }
        return false
      })

      // Remove "Responsive design" headings (LLMs already understand Tailwind's responsive patterns)
      remove(tree, (node: any) => {
        if (node.type === 'heading') {
          const text = node.children?.[0]?.value
          return text === 'Responsive design'
        }
        return false
      })

      // Remove wrapper JSX elements but keep their children
      visit(tree, (node, index, parent) => {
        if (node.type === 'mdxJsxFlowElement') {
          const jsxNode = node as MdxJsxFlowElement
          if ((jsxNode.name === 'Figure' || jsxNode.name === 'CodeExampleStack') && parent && typeof index === 'number') {
            // Replace with children
            const children = jsxNode.children || []
            parent.children.splice(index, 1, ...children as any)
            return index // Revisit this index
          }
        }
      })

      // Convert <ApiTable> to markdown table, or remove if complex
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxJsxFlowElement' && node.name === 'ApiTable' && parent && typeof index === 'number') {
          const mdTable = convertApiTableAstToMarkdown(node)
          if (mdTable) {
            parent.children.splice(index, 1, mdTable)
          } else {
            // Remove complex ApiTable that we can't convert
            parent.children.splice(index, 1)
          }
          return index
        }
      })

      // Convert <CodeExampleGroup> to stacked code blocks
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxJsxFlowElement' && node.name === 'CodeExampleGroup' && parent && typeof index === 'number') {
          const codeBlocks = convertCodeExampleGroupAst(node)
          if (codeBlocks.length > 0) {
            parent.children.splice(index, 1, ...codeBlocks)
          } else {
            parent.children.splice(index, 1)
          }
          return index
        }
      })

      // Convert <UsingACustomValue> to markdown
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxJsxFlowElement' && node.name === 'UsingACustomValue' && parent && typeof index === 'number') {
          const props = extractPropsFromJsxNode(node)
          const markdown = inlineUsingACustomValue(props)
          const markdownParser = unified().use(remarkParse).use(remarkGfm)
          const parsed = markdownParser.parse(markdown)
          parent.children.splice(index, 1, ...(parsed as any).children)
          return index
        }
      })

      // Convert <CustomizingYourSpacingScale> to markdown
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxJsxFlowElement' && node.name === 'CustomizingYourSpacingScale' && parent && typeof index === 'number') {
          const props = extractPropsFromJsxNode(node)
          const markdown = inlineCustomizingYourSpacingScale(props)
          const markdownParser = unified().use(remarkParse).use(remarkGfm)
          const parsed = markdownParser.parse(markdown)
          parent.children.splice(index, 1, ...(parsed as any).children)
          return index
        }
      })

      // Convert <TargetingSpecificStates> to markdown
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxJsxFlowElement' && node.name === 'TargetingSpecificStates' && parent && typeof index === 'number') {
          const props = extractPropsFromJsxNode(node)
          // Extract child code block if present
          let childContent: string | undefined
          for (const child of node.children || []) {
            if (child.type === 'code') {
              childContent = '```' + (child.lang || '') + '\n' + child.value + '\n```'
              break
            }
          }
          const markdown = inlineTargetingSpecificStates(props, childContent)
          const markdownParser = unified().use(remarkParse).use(remarkGfm)
          const parsed = markdownParser.parse(markdown)
          parent.children.splice(index, 1, ...(parsed as any).children)
          return index
        }
      })

      // Convert <ResponsiveDesign> to markdown
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxJsxFlowElement' && node.name === 'ResponsiveDesign' && parent && typeof index === 'number') {
          const props = extractPropsFromJsxNode(node)
          // Extract child code block if present
          let childContent: string | undefined
          for (const child of node.children || []) {
            if (child.type === 'code') {
              childContent = '```' + (child.lang || '') + '\n' + child.value + '\n```'
              break
            }
          }
          const markdown = inlineResponsiveDesign(props, childContent)
          const markdownParser = unified().use(remarkParse).use(remarkGfm)
          const parsed = markdownParser.parse(markdown)
          parent.children.splice(index, 1, ...(parsed as any).children)
          return index
        }
      })

      // Convert <CustomizingYourThemeColors> to markdown
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxJsxFlowElement' && node.name === 'CustomizingYourThemeColors' && parent && typeof index === 'number') {
          const props = extractPropsFromJsxNode(node)
          const markdown = inlineCustomizingYourThemeColors(props)
          const markdownParser = unified().use(remarkParse).use(remarkGfm)
          const parsed = markdownParser.parse(markdown)
          parent.children.splice(index, 1, ...(parsed as any).children)
          return index
        }
      })

      // Convert <CustomizingYourTheme> to markdown
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxJsxFlowElement' && node.name === 'CustomizingYourTheme' && parent && typeof index === 'number') {
          const props = extractPropsFromJsxNode(node)
          const markdown = inlineCustomizingYourTheme(props)
          const markdownParser = unified().use(remarkParse).use(remarkGfm)
          const parsed = markdownParser.parse(markdown)
          parent.children.splice(index, 1, ...(parsed as any).children)
          return index
        }
      })

      // Convert <TipGood>, <TipBad>, <TipInfo> to italicized text
      visit(tree, (node: any, index, parent) => {
        if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && parent && typeof index === 'number') {
          const name = node.name || ''
          if (['TipGood', 'TipBad', 'TipInfo'].includes(name)) {
            const content = extractTipContent(node)
            const emphasisNode = { type: 'emphasis', children: content }
            // If parent is a paragraph, replace inline; otherwise wrap in paragraph
            if (parent.type === 'paragraph') {
              parent.children.splice(index, 1, emphasisNode)
            } else {
              parent.children.splice(index, 1, { type: 'paragraph', children: [emphasisNode] })
            }
            return index
          }
        }
      })

      // Remove JSX div wrappers with className (keep children)
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxJsxFlowElement' && node.name === 'div' && parent && typeof index === 'number') {
          // Check if it has className attribute
          const hasClassName = node.attributes?.some((attr: any) => attr.name === 'className')
          if (hasClassName) {
            const children = node.children || []
            parent.children.splice(index, 1, ...children)
            return index
          }
        }
      })

      // Convert JSX tables to markdown tables (direct JSX elements)
      visit(tree, (node, index, parent) => {
        if (node.type === 'mdxJsxFlowElement') {
          const jsxNode = node as MdxJsxFlowElement
          if (jsxNode.name === 'table' && parent && typeof index === 'number') {
            const mdTable = convertJsxAstTableToMarkdown(jsxNode)
            if (mdTable) {
              parent.children.splice(index, 1, mdTable)
              return index
            }
          }
        }
      })

      // Convert tables inside mdxFlowExpression nodes (e.g., { <table>...</table> })
      visit(tree, (node: any, index, parent) => {
        if (node.type === 'mdxFlowExpression' && parent && typeof index === 'number') {
          const estree = node.data?.estree
          if (estree?.body?.[0]?.expression?.type === 'JSXElement') {
            const jsxElement = estree.body[0].expression
            if (jsxElement.openingElement?.name?.name === 'table') {
              const mdTable = convertEstreeTableToMarkdown(jsxElement)
              if (mdTable) {
                parent.children.splice(index, 1, mdTable)
                return index
              }
            }
          }
        }
      })

      // Remove remaining mdxFlowExpression nodes (standalone { } wrappers)
      remove(tree, 'mdxFlowExpression')
      remove(tree, 'mdxTextExpression')

      // Clean up code blocks - remove [!code ...] and prettier-ignore comments
      visit(tree, 'code', (node: Code) => {
        if (node.value) {
          node.value = cleanCodeBlockContent(node.value)
        }
      })

      // Clean up HTML nodes
      visit(tree, 'html', (node: Html) => {
        if (node.value) {
          node.value = cleanHtmlContent(node.value)
        }
      })
    })
    .use(remarkStringify, {
      bullet: '-',
      emphasis: '_',
      strong: '*',
      fence: '`',
      fences: true,
    })

  const result = await processor.process(mdxContent)
  let markdown = String(result)

  // Add title and description at the top
  let output = ''
  if (title) {
    output += `# ${title}\n\n`
  }
  if (description) {
    output += `${description}\n\n`
  }
  output += markdown.trim()

  return output
}

// Convert <ApiTable rows={[...]} /> to markdown table using eval
function convertApiTableAstToMarkdown(node: MdxJsxFlowElement): Table | null {
  // Find the rows attribute
  const rowsAttr = node.attributes?.find((attr: any) => attr.name === 'rows')
  if (!rowsAttr || rowsAttr.type !== 'mdxJsxAttribute') return null

  // The value is an expression containing an array
  const valueExpr = rowsAttr.value as any
  if (!valueExpr || valueExpr.type !== 'mdxJsxAttributeValueExpression') return null

  // Get the raw expression string and evaluate it
  const exprString = valueExpr.value
  if (!exprString) return null

  try {
    // Evaluate with colors available in scope
    const colors = getColors()
    const evalFn = new Function('colors', `return (${exprString})`)
    const rows = evalFn(colors) as [string, string][]
    if (!Array.isArray(rows) || rows.length === 0) return null

    const dataRows: TableRow[] = []
    for (const row of rows) {
      if (Array.isArray(row) && row.length >= 2) {
        dataRows.push({
          type: 'tableRow',
          children: [
            { type: 'tableCell', children: [{ type: 'inlineCode', value: row[0] }] },
            { type: 'tableCell', children: [{ type: 'inlineCode', value: row[1] }] },
          ]
        })
      }
    }

    if (dataRows.length === 0) return null

    // Build table with header row
    const headerRow: TableRow = {
      type: 'tableRow',
      children: [
        { type: 'tableCell', children: [{ type: 'text', value: 'Class' }] },
        { type: 'tableCell', children: [{ type: 'text', value: 'Styles' }] },
      ]
    }

    return {
      type: 'table',
      align: null,
      children: [headerRow, ...dataRows]
    }
  } catch {
    // Expected for ApiTables with expressions referencing imported variables
    return null
  }
}

// Dedent code by removing common leading whitespace
function dedent(code: string): string {
  if (typeof code !== 'string') return ''
  const lines = code.split('\n')

  // Find minimum indentation (ignoring empty lines and the first line if it has no indent)
  let minIndent = Infinity
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.trim() === '') continue

    const match = line.match(/^(\s*)/)
    if (match) {
      const indent = match[1].length
      // Skip first line if it has no indentation (common in template literals)
      if (i === 0 && indent === 0) continue
      minIndent = Math.min(minIndent, indent)
    }
  }

  if (minIndent === Infinity || minIndent === 0) return code

  // Remove the common indentation from all lines (except first if it had none)
  return lines
    .map((line, i) => {
      // Don't slice the first line if it originally had no indentation
      if (i === 0 && !line.match(/^\s/)) return line
      return line.slice(minIndent)
    })
    .join('\n')
}

// Convert <CodeExampleGroup> AST node to array of code block nodes
function convertCodeExampleGroupAst(node: MdxJsxFlowElement): Code[] {
  const codeBlocks: Code[] = []

  // Find CodeBlock children
  for (const child of node.children || []) {
    if (child.type === 'mdxJsxFlowElement') {
      const jsxChild = child as MdxJsxFlowElement
      if (jsxChild.name === 'CodeBlock') {
        // Find the example attribute
        const exampleAttr = jsxChild.attributes?.find(
          (attr: any) => attr.type === 'mdxJsxAttribute' && attr.name === 'example'
        )

        if (exampleAttr && exampleAttr.type === 'mdxJsxAttribute') {
          const attrValue = exampleAttr.value as any
          if (attrValue && attrValue.type === 'mdxJsxAttributeValueExpression') {
            // The value is something like: html`<div>...</div>`
            const exprValue = attrValue.value as string
            if (exprValue) {
              // Extract language and code from template literal
              const templateMatch = exprValue.match(/^(html|css|js|jsx|tsx|svelte)?`([\s\S]*)`$/)
              if (templateMatch) {
                const lang = templateMatch[1] || 'html'
                let code = templateMatch[2]

                // Clean up the code content
                code = code
                  // Remove [!code ...] comments
                  .replace(/<!--\s*\[!code\s[^\n]*-->\n?/g, '')
                  .replace(/\/\*\s*\[!code\s[^\n]*\*\/\n?/g, '')
                  .replace(/\/\/\s*\[!code\s[^\n]*\n?/g, '')

                // Dedent and trim
                code = dedent(code.trim())

                if (code) {
                  codeBlocks.push({
                    type: 'code',
                    lang,
                    meta: null,
                    value: code
                  })
                }
              }
            }
          }
        }
      }
    }
  }

  return codeBlocks
}

// Convert ESTree JSX table (from mdxFlowExpression) to markdown table
function convertEstreeTableToMarkdown(tableElement: any): Table | null {
  const rows: TableRow[] = []

  // Find thead and tbody in JSX children
  for (const child of tableElement.children || []) {
    if (child.type === 'JSXElement') {
      const name = child.openingElement?.name?.name
      if (name === 'thead' || name === 'tbody') {
        // Find tr elements
        for (const trChild of child.children || []) {
          if (trChild.type === 'JSXElement' && trChild.openingElement?.name?.name === 'tr') {
            const cells: TableCell[] = []
            // Find th/td elements
            for (const cellChild of trChild.children || []) {
              if (cellChild.type === 'JSXElement') {
                const cellName = cellChild.openingElement?.name?.name
                if (cellName === 'th' || cellName === 'td') {
                  cells.push({
                    type: 'tableCell',
                    children: extractPhrasingContentFromEstree(cellChild.children || [])
                  })
                }
              }
            }
            if (cells.length > 0) {
              rows.push({ type: 'tableRow', children: cells })
            }
          }
        }
      }
    }
  }

  if (rows.length === 0) return null

  return {
    type: 'table',
    align: null,
    children: rows
  }
}

function extractPhrasingContentFromEstree(children: any[]): PhrasingContent[] {
  const result: PhrasingContent[] = []

  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    const isFirst = result.length === 0
    const isLast = i === children.length - 1

    if (child.type === 'JSXText') {
      // Normalize whitespace but preserve meaningful spaces between elements
      let normalized = child.value.replace(/\s+/g, ' ')

      // Trim leading space if this is the first content
      if (isFirst) {
        normalized = normalized.trimStart()
      }
      // Trim trailing space if this is the last child
      if (isLast) {
        normalized = normalized.trimEnd()
      }

      if (normalized) {
        result.push({ type: 'text', value: normalized })
      }
    } else if (child.type === 'JSXElement') {
      const name = child.openingElement?.name?.name
      if (name === 'code') {
        // Convert <code> to inline code
        const codeText = extractTextFromEstreeChildren(child.children || [])
        result.push({ type: 'inlineCode', value: codeText })
      } else {
        // Recursively extract from other elements
        result.push(...extractPhrasingContentFromEstree(child.children || []))
      }
    }
  }

  return result
}

function extractTextFromEstreeChildren(children: any[]): string {
  let text = ''
  for (const child of children) {
    if (child.type === 'JSXText') {
      text += child.value
    } else if (child.children) {
      text += extractTextFromEstreeChildren(child.children)
    }
  }
  return text.trim()
}

function convertJsxAstTableToMarkdown(tableNode: MdxJsxFlowElement): Table | null {
  const rows: TableRow[] = []

  // Find thead and tbody
  for (const child of tableNode.children || []) {
    if (child.type === 'mdxJsxFlowElement') {
      const el = child as MdxJsxFlowElement
      if (el.name === 'thead' || el.name === 'tbody') {
        // Find tr elements
        for (const trChild of el.children || []) {
          if (trChild.type === 'mdxJsxFlowElement') {
            const tr = trChild as MdxJsxFlowElement
            if (tr.name === 'tr') {
              const cells: TableCell[] = []
              // Find th/td elements
              for (const cellChild of tr.children || []) {
                if (cellChild.type === 'mdxJsxFlowElement') {
                  const cell = cellChild as MdxJsxFlowElement
                  if (cell.name === 'th' || cell.name === 'td') {
                    cells.push({
                      type: 'tableCell',
                      children: extractPhrasingContent(cell.children || [])
                    })
                  }
                }
              }
              if (cells.length > 0) {
                rows.push({ type: 'tableRow', children: cells })
              }
            }
          }
        }
      }
    }
  }

  if (rows.length === 0) return null

  return {
    type: 'table',
    align: null,
    children: rows
  }
}

function extractPhrasingContent(children: any[]): PhrasingContent[] {
  const result: PhrasingContent[] = []

  for (const child of children) {
    if (child.type === 'text') {
      const trimmed = child.value.trim()
      if (trimmed) {
        result.push({ type: 'text', value: trimmed })
      }
    } else if (child.type === 'mdxJsxFlowElement' || child.type === 'mdxJsxTextElement') {
      const el = child as MdxJsxFlowElement | MdxJsxTextElement
      if (el.name === 'code') {
        // Convert <code> to inline code
        const codeText = extractTextFromChildren(el.children || [])
        result.push({ type: 'inlineCode', value: codeText })
      } else {
        // Recursively extract from other elements
        result.push(...extractPhrasingContent(el.children || []))
      }
    }
  }

  return result
}

function extractTextFromChildren(children: any[]): string {
  let text = ''
  for (const child of children) {
    if (child.type === 'text') {
      text += child.value
    } else if (child.children) {
      text += extractTextFromChildren(child.children)
    }
  }
  return text.trim()
}

function cleanCodeBlockContent(code: string): string {
  return code
    // Remove [!code ...] HTML comments (use [^\n]* to handle nested brackets)
    .replace(/<!--\s*\[!code\s[^\n]*-->\n?/g, '')
    // Remove [!code ...] CSS comments
    .replace(/\/\*\s*\[!code\s[^\n]*\*\/\n?/g, '')
    // Remove [!code ...] JS comments
    .replace(/\/\/\s*\[!code\s[^\n]*\n?/g, '')
    // Remove prettier-ignore HTML comments
    .replace(/<!--\s*prettier-ignore\s*-->\n?/g, '')
    // Remove prettier-ignore CSS comments
    .replace(/\/\*\s*prettier-ignore\s*\*\/\n?/g, '')
}

function cleanHtmlContent(html: string): string {
  return html
    .replace(/<!--\s*\[!code[^\]]*\]\s*-->\n?/g, '')
    .replace(/<!--\s*prettier-ignore\s*-->\n?/g, '')
}
