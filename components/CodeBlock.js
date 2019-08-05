import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import theme from '@/assets/theme'

const syntaxTheme = {
  punctuation: { color: theme.colors.code.blue },
  tag: { color: theme.colors.code.red },
  'attr-name': { color: theme.colors.code.yellow },
  'attr-value': { color: theme.colors.code.green },
  class: { color: theme.colors.code.yellow },
  property: { color: theme.colors.code.yellow },
  unit: { color: theme.colors.code.red },
  number: { color: theme.colors.code.red },
  hexcode: { color: theme.colors.code.blue },
  function: { color: theme.colors.code.blue },
  comment: { color: theme.colors.code.gray },
}

export default ({ children, language = 'html' }) => (
  <SyntaxHighlighter
    language={language}
    children={children}
    style={syntaxTheme}
    className="scrollbar-none m-0 p-0 overflow-auto text-white text-sm bg-gray-800 leading-normal"
    codeTagProps={{
      className: 'inline-block p-4 scrolling-touch subpixel-antialiased'
    }}
  />
)
