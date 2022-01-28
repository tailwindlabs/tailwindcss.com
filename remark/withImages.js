const { addImportImage } = require('./utils')

function getImageFileName(url) {
  const pathParts = url.split('/')
  const fileName = pathParts[pathParts.length - 1]

  return fileName.split('.')[0]
}

module.exports.withImages = () => {
  return (tree) => {
    let preTree = { children: [] }
    let counter = 1

    function processImages(node) {
      if (node.type === 'image' && !node.url.startsWith('http')) {
        const imageImportName = addImportImage(preTree, node.url, 'Image' + counter++)

        node.type = 'jsx'
        node.value = `<figure><img src={${imageImportName}} alt="${
          node.alt || getImageFileName(node.url)
        }"></img>${node.alt ? `<figcaption>${node.alt}</figcaption>` : ''}</figure>`
      } else if (node.children) {
        node.children.map((nodeChild) => processImages(nodeChild))
      }

      return node
    }

    tree.children = tree.children.map((node) => {
      return processImages(node)
    })

    tree.children = [...preTree.children, ...tree.children]
  }
}
