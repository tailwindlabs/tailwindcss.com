import { addImport } from './utils.mjs'
import { unified } from 'unified'
import remarkStringify from 'remark-stringify'
import remarkMdx from 'remark-mdx'
import { visit } from 'unist-util-visit'

const voidElements = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]

export default () => {
  return (tree) => {
    let componentName

    visit(tree, 'mdxJsxFlowElement', (node, nodeIndex, parentNode) => {
      if (node.name !== 'Example') {
        return
      }

      let html

      if (node.children[0].type === 'code') {
        html = node.children[0].value
      } else {
        html = unified()
          .use(remarkStringify)
          .use(remarkMdx)
          .stringify({ type: 'root', children: node.children })
        html = html
          .replace(/<([a-z]+)([^>]+)\/>/g, (match, name, rest) => {
            if (voidElements.includes(name)) {
              return match
            }
            return `<${name}${rest}></${name}>`
          })
          .replace(/\{\/\*.*?\*\/\}/gs, '')
      }

      let next = parentNode.children[nodeIndex + 1]
      if (!componentName) {
        componentName = addImport(tree, '@/components/Example', 'Example')
      }

      node.name = componentName
      node.children = []

      node.attributes.push({
        type: 'mdxJsxAttribute',
        name: 'containerClassName',
        value: next?.type === 'code' ? 'mt-4 -mb-3' : 'my-6',
      })
      node.attributes.push({
        type: 'mdxJsxAttribute',
        name: 'html',
        value: html,
      })
    })
  }
}
