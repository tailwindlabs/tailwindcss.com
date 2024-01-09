module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'postcss-focus-visible',
    'autoprefixer',
    require.resolve('./has-fixup.js'),
  ],
}
