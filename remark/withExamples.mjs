import { addImport } from './utils.mjs'
import { unified } from 'unified'
import remarkStringify from 'remark-stringify'
import remarkMdx from 'remark-mdx'
import { visit } from 'unist-util-visit'

export default () => {
  return (tree) => {
    let componentName

    visit(tree, 'mdxJsxFlowElement', (node, nodeIndex, parentNode) => {
      if (node.name !== 'Example') {
        return
      }

      let html = unified()
        .use(remarkStringify)
        .use(remarkMdx)
        .stringify({ type: 'root', children: node.children })
      html = html.replace(/<([a-z]+)([^>]+)\/>/g, '<$1$2></$1>')

      let next = parentNode.children[nodeIndex + 1]
      if (!componentName) {
        componentName = addImport(tree, '@/components/Example', 'Example')
      }

      node.name = componentName

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
