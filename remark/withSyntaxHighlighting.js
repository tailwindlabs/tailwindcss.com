const { highlightCode, addImport } = require('./utils')
const JSON5 = require('json5')

module.exports.withSyntaxHighlighting = () => {
  return (tree) => {
    let preTree = { children: [] }
    let componentName
    tree.children = tree.children.flatMap((node) => {
      if (node.type !== 'code') return node
      if (node.lang === null) return node

      let re = /(<[^>]+)\s+dark-([a-z-]+)="([^"]+)"([^>]*>)/gi

      let lightCode = node.value.replace(
        re,
        (_match, before, _key, _value, after) => `${before}${after}`
      )
      let darkCode = node.value.replace(re, (_match, before, key, value, after) =>
        `${before}${after}`.replace(new RegExp(`(\\s${key})="[^"]+"`), `$1="${value}"`)
      )

      node.type = 'html'

      if (lightCode === darkCode) {
        node.value = [
          `<pre class="language-${node.lang}">`,
          `<code class="language-${node.lang}">`,
          highlightCode(lightCode, node.lang),
          '</code>',
          '</pre>',
        ]
          .filter(Boolean)
          .join('')
      } else {
        node.value = [
          `<pre class="language-${node.lang}">`,
          `<code class="dark:hidden language-${node.lang}">`,
          highlightCode(lightCode, node.lang),
          '</code>',
          `<code class="hidden dark:block language-${node.lang}">`,
          highlightCode(darkCode, node.lang),
          '</code>',
          '</pre>',
        ]
          .filter(Boolean)
          .join('')
      }

      if (node.meta) {
        if (node.meta.startsWith('{{')) {
          node.meta = node.meta.slice(1, -1)
        } else {
          node.meta = `{ filename: '${node.meta}' }`
        }

        if (!componentName) {
          componentName = addImport(preTree, '@/components/Editor', 'Editor')
        }

        let props = JSON5.parse(node.meta)

        return [
          { type: 'jsx', value: `<${componentName} {...${JSON.stringify(props)}}>` },
          node,
          { type: 'jsx', value: `</${componentName}>` },
        ]
      }

      return node
    })
    tree.children = [...preTree.children, ...tree.children]
  }
}
