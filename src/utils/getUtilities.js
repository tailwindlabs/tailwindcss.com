const dlv = require('dlv')
const defaultTheme = require('tailwindcss/defaultTheme')
const resolveConfig = require('tailwindcss/resolveConfig')

const defaultConfig = resolveConfig({ theme: defaultTheme })

function castArray(value) {
  return Array.isArray(value) ? value : [value]
}

function normalizeProperties(input) {
  if (typeof input !== 'object') return input
  if (Array.isArray(input)) return input.map(normalizeProperties)
  return Object.keys(input).reduce((newObj, key) => {
    let val = input[key]
    let newVal = typeof val === 'object' ? normalizeProperties(val) : val
    newObj[key.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1}-${p2.toLowerCase()}`)] = newVal
    return newObj
  }, {})
}

function getUtilities(plugin) {
  if (!plugin) return {}
  const utilities = {}
  plugin()({
    addUtilities: (utils) => {
      utils = Array.isArray(utils) ? utils : [utils]
      for (let i = 0; i < utils.length; i++) {
        for (let prop in utils[i]) {
          utilities[prop] = normalizeProperties(utils[i][prop])
        }
      }
    },
    theme: (path, defaultValue) => dlv(defaultConfig.theme, path, defaultValue),
    variants: () => [],
    e: (x) => x.replace(/([:.])/g, '\\$1'),
    target: () => 'modern',
    corePlugins: () => true,
  })
  return utilities
}

module.exports = (pluginName) => {
  const utilities = {}
  castArray(pluginName).forEach((p) => {
    Object.assign(
      utilities,
      getUtilities(require(require.resolve(`tailwindcss/lib/plugins/${p}`)).default)
    )
  })
  return utilities
}
