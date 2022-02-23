async function importAll(r) {
  let files = []
  for (let filename of r.keys().filter((filename) => filename.startsWith('.'))) {
    let slug = filename.substr(2).replace(/\/index\.mdx$/, '')
    if (slug.includes('/snippets/')) continue

    let module = await r(filename)
    if (module.meta.private) continue

    files.push({ slug, filename, module })
  }

  return files.sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function getAllPostPreviews() {
  return importAll(require.context('../pages/blog/?preview', true, /\.mdx$/))
}

export function getAllPosts() {
  return importAll(require.context('../pages/blog/?rss', true, /\.mdx$/))
}
