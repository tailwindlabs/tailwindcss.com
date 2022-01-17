const { getOptions } = require("loader-utils")
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

async function fileReplacer (source) {
  const { base, replacement } = getOptions(this)
  
  const filename = path.parse(this.resourcePath)
  
  const saveFilename = filename.base
  const targetFilename = (
    base 
    ? 
    path.join(base,String(replacement[saveFilename])) 
    :
    replacement[saveFilename]
  )

  try{
    await fsPromises.access(targetFilename, fs.constants.R_OK | fs.constants.W_OK)
    const stat = await fsPromises.lstat(targetFilename)

    if(stat.isFile()){
      const translatedFileContent = await fsPromises.readFile(targetFilename)

      console.log(`[file-replacer] replaced '${saveFilename}' to '${targetFilename}'`)
      return translatedFileContent
    } else {
      throw `Target path "${targetFilename}" is not a file.`
    }
  } catch(e) {
    // console.log(`[file-replacer] ${e}`)
    return source
  }
};

module.exports = fileReplacer