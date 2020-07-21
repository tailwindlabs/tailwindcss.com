const { addImport, addExport } = require('./utils')

module.exports.withTableOfContents = () => {
  return (tree) => {
    const component = addImport(tree, '@/components/Section', 'Section')
    const contents = []
    const newNodes = []
    let insideSection = false

    for (let i = 0; i < tree.children.length; i++) {
      let node = tree.children[i]

      if (i === tree.children.length - 1 && insideSection) {
        newNodes.push(node)
        newNodes.push({ type: 'jsx', value: `</${component}>` })
        continue
      }

      if (node.type === 'heading') {
        const level = node.depth
        const title = node.children
          .filter((n) => n.type === 'text')
          .map((n) => n.value)
          .join('')
        const slug = title
          .replace(/\s+/g, '-')
          .replace(/[^a-z-]/gi, '')
          .replace(/-+/, '-')
          .toLowerCase()

        if (level === 2) {
          contents.push({ title, slug, children: [] })
        } else if (level === 3) {
          contents[contents.length - 1].children.push({ title, slug })
        }

        if (insideSection) {
          newNodes.push({ type: 'jsx', value: `</${component}>` })
        }

        newNodes.push({ type: 'jsx', value: `<${component} id="${slug}">` }, node)
        insideSection = true
      } else {
        newNodes.push(node)
      }
    }

    tree.children = newNodes
    addExport(tree, 'tableOfContents', contents)
  }
}
