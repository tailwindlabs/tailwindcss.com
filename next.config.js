const path = require('path')
const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')()

module.exports = withCSS(withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack (config, options) {
    config.resolve.alias['@'] = path.join(__dirname)
    return config
  }
}))
