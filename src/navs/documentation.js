import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting started': [
    {
      ...pages['installation'],
      shortTitle: '安装',
    },
    {
      shortTitle: '发布说明',
      href: 'https://blog.tailwindcss.com/tailwindcss-v2',
    },
    {
      ...pages['upgrading-to-v2'],
      shortTitle: '升级到V2',
    },
    {
      ...pages['using-with-preprocessors'],
      shortTitle: '使用预处理器',
    },
    {
      ...pages['optimizing-for-production'],
      shortTitle: '优化生产环境',
    },
    {
      ...pages['browser-support'],
      shortTitle: '浏览器兼容性',
    },
    {
      ...pages['intellisense'],
      shortTitle: '智能提示',
    },
  ],
  'Core Concepts': [
    {
      ...pages['utility-first'],
      shortTitle: '工具类优先',
    },
    {
      ...pages['responsive-design'],
      shortTitle: '自适应设计',
    },
    {
      ...pages['hover-focus-and-other-states'],
      shortTitle: 'hover & focus & 其他各种状态',
    },
    {
      ...pages['dark-mode'],
      shortTitle: '暗黑模式',
    },
    {
      ...pages['adding-base-styles'],
      shortTitle: '添加基础样式',
    },
    {
      ...pages['extracting-components'],
      shortTitle: '扩展组件',
    },
    {
      ...pages['adding-new-utilities'],
      shortTitle: '添加工具类',
    },
    {
      ...pages['functions-and-directives'],
      shortTitle: '方法 & 指令',
    },
  ],
  Customization: [
    {
      ...pages['configuration'],
      shortTitle: '配置',
    },
    {
      ...pages['theme'],
      shortTitle: '主題',
    },
    {
      ...pages['breakpoints'],
      shortTitle: '媒体查询断点',
    },
    {
      ...pages['customizing-colors'],
      shortTitle: '自定义颜色',
    },
    {
      ...pages['customizing-spacing'],
      shortTitle: '自定义间距 & 尺寸',
    },
    {
      ...pages['configuring-variants'],
      shortTitle: '配置变体',
    },
    {
      ...pages['plugins'],
      shortTitle: '插件',
    },
    {
      ...pages['presets'],
      shortTitle: '预设',
    },
  ],
  'Base Styles': [
    {
      ...pages['preflight'],
      title: '样式初始化'
    }],
  Layout: [
    pages['container'],
    pages['box-sizing'],
    pages['display'],
    pages['float'],
    pages['clear'],
    pages['object-fit'],
    pages['object-position'],
    pages['overflow'],
    pages['overscroll-behavior'],
    pages['position'],
    pages['top-right-bottom-left'],
    pages['visibility'],
    pages['z-index'],
  ],
  Flexbox: [
    pages['flex-direction'],
    pages['flex-wrap'],
    pages['flex'],
    pages['flex-grow'],
    pages['flex-shrink'],
    pages['order'],
  ],
  Grid: [
    pages['grid-template-columns'],
    pages['grid-column'],
    pages['grid-template-rows'],
    pages['grid-row'],
    pages['grid-auto-flow'],
    pages['grid-auto-columns'],
    pages['grid-auto-rows'],
    pages['gap'],
  ],
  'Box Alignment': [
    pages['justify-content'],
    pages['justify-items'],
    pages['justify-self'],
    pages['align-content'],
    pages['align-items'],
    pages['align-self'],
    pages['place-content'],
    pages['place-items'],
    pages['place-self'],
  ],
  Spacing: [pages['padding'], pages['margin'], pages['space']],
  Sizing: [
    pages['width'],
    pages['min-width'],
    pages['max-width'],
    pages['height'],
    pages['min-height'],
    pages['max-height'],
  ],
  Typography: [
    pages['font-family'],
    pages['font-size'],
    pages['font-smoothing'],
    pages['font-style'],
    pages['font-weight'],
    pages['font-variant-numeric'],
    pages['letter-spacing'],
    pages['line-height'],
    pages['list-style-type'],
    pages['list-style-position'],
    pages['placeholder-color'],
    pages['placeholder-opacity'],
    pages['text-align'],
    pages['text-color'],
    pages['text-opacity'],
    pages['text-decoration'],
    pages['text-transform'],
    pages['text-overflow'],
    pages['vertical-align'],
    pages['whitespace'],
    pages['word-break'],
  ],
  Backgrounds: [
    pages['background-attachment'],
    pages['background-clip'],
    pages['background-color'],
    pages['background-opacity'],
    pages['background-position'],
    pages['background-repeat'],
    pages['background-size'],
    pages['background-image'],
    pages['gradient-color-stops'],
  ],
  Borders: [
    pages['border-radius'],
    pages['border-width'],
    pages['border-color'],
    pages['border-opacity'],
    pages['border-style'],
    pages['divide-width'],
    pages['divide-color'],
    pages['divide-opacity'],
    pages['divide-style'],
    pages['ring-width'],
    pages['ring-color'],
    pages['ring-opacity'],
    pages['ring-offset-width'],
    pages['ring-offset-color'],
  ],
  Effects: [pages['box-shadow'], pages['opacity']],
  Tables: [pages['border-collapse'], pages['table-layout']],
  'Transitions and Animation': [
    pages['transition-property'],
    pages['transition-duration'],
    pages['transition-timing-function'],
    pages['transition-delay'],
    pages['animation'],
  ],
  Transforms: [
    pages['transform'],
    pages['transform-origin'],
    pages['scale'],
    pages['rotate'],
    pages['translate'],
    pages['skew'],
  ],
  Interactivity: [
    pages['appearance'],
    pages['cursor'],
    pages['outline'],
    pages['pointer-events'],
    pages['resize'],
    pages['user-select'],
  ],
  SVG: [pages['fill'], pages['stroke'], pages['stroke-width']],
  Accessibility: [pages['screen-readers']],
  'Official Plugins': [
    {
      title: 'Typography',
      href: 'https://github.com/tailwindlabs/tailwindcss-typography',
    },
    {
      title: 'Forms',
      href: 'https://github.com/tailwindlabs/tailwindcss-forms',
    },
    {
      title: 'Aspect Ratio',
      href: 'https://github.com/tailwindlabs/tailwindcss-aspect-ratio',
    },
    {
      title: 'Line Clamp',
      href: 'https://github.com/tailwindlabs/tailwindcss-line-clamp',
    },
  ],
}
