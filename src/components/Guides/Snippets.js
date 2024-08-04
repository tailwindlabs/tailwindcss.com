import { highlightCode } from '../../../remark/utils'

/**
 * @typedef {object} CodeSnippet
 * @property {string} lang
 * @property {string} code
 * @property {Array<{name: string, code: string}>} [frameworks]
 */

/**
 * @param {{code: CodeSnippet|CodeSnippet[]}[]} steps
 * @returns {(string|string[]|Object)[]}
 */
export function highlightedCodeSnippets(steps) {
  /**
   * @param {CodeSnippet} code
   * @returns {Object}
   */
  function highlight(code) {
    const highlightFramework = (fw) => ({
      name: fw.name,
      code: code.lang === 'terminal' ? fw.code : highlightCode(fw.code, code.lang)
    });

    return {
      name: code.name,
      lang: code.lang,
      frameworks: code.frameworks ? code.frameworks.map(highlightFramework) : [{
        name: 'default',
        code: code.lang === 'terminal' ? code.code : highlightCode(code.code, code.lang)
      }]
    };
  }

  return steps.map(({ code }) => {
    return Array.isArray(code) ? code.map((code) => highlight(code)) : highlight(code)
  })
}
