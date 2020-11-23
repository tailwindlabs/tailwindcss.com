const path = require('path')
const glob = require('glob')
const fs = require('fs')

const outDir = path.resolve(__dirname, '../src/preval/output')

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}

const files = glob.sync(path.resolve(__dirname, '../src/preval/*.js'))

files.forEach((file) => {
  fs.writeFileSync(
    path.resolve(outDir, `${path.basename(file, '.js')}.json`),
    JSON.stringify(require(file), null, 2),
    'utf8'
  )
})
