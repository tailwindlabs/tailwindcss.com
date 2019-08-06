import Head from 'next/head'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'
import map from 'lodash/map'
import tailwindMeta from 'tailwindcss/package.json'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import theme from '@/assets/theme'

// > ol {
//   @apply list-none;
//   counter-reset: item;
//   > li {
//     @apply relative pl-10;
//   }
//   > li::before {
//     @apply absolute top-0 left-0 mt-px;
//     @apply flex items-center justify-center;
//     @apply h-6 w-6 bg-gray-300 rounded-full;
//     @apply text-gray-700 text-xs font-bold;
//     content: counter(item);
//     counter-increment: item;
//   }
// }

const components = {
  h1: ({ children, className }) => <h1 className={`mb-1 leading-none text-gray-900 font-light text-3xl ${className}`}>{children}</h1>,
  h2: ({ children, className }) => <h2 className={`mt-16 mb-4 text-gray-900 leading-none font-normal text-2xl ${className}`}>{children}</h2>,
  h3: ({ children, className }) => <h3 className={`mt-12 -mb-3 text-gray-900 leading-tight font-medium text-xl ${className}`}>{children}</h3>,
  p: ({ children, className }) => <p className={`text-base mt-6`}>{children}</p>,
  a: ({ children, href }) => <a href={href} className="text-blue-500 underline font-medium hover:text-blue-700">{children}</a>,
  // strong {
  //   @apply text-blue-500;
  // }
  // code {
  //   @apply underline text-blue-500;
  // }
  strong: ({ children }) => <strong className="font-semibold text-gray-800">{children}</strong>,
  inlineCode: ({ children }) => <code className="inline-block bg-gray-100 rounded-sm text-sm px-1 leading-none whitespace-no-wrap text-purple-600 font-mono align-baseline font-normal">{children}</code>,
  ul: ({ children }) => <ul className="mt-6">{children}</ul>,
  'ul.li': ({ children }) => (
    <li className="mt-4 relative pl-5">
      <span className="absolute left-0 text-gray-400">&bull;</span>
      {children}
    </li>
  ),
  hr: () => <hr className="border-t-0 border-r-0 border-l-0 border-b-2 border-gray-200 my-16"/>,
  code: ({ children, language }) => (
    <SyntaxHighlighter language={language} children={children}/>
  ),
  // inlineCode: Code
}

const navigation = {
  'Documentation': {
    'Getting Started': {
      'Installation': '/docs/installation',
      'Release Notes': '/docs/release-notes',
      'Upgrade Guide': '/docs/upgrading-to-v1',
      'Using with Preprocessors': '/docs/using-with-preprocessors',
      'Controlling File Size': '/docs/controlling-file-size',
      'Browser Support': '/docs/browser-support',
    },
    'Core Concepts': {
      'Utility-First': '/docs/utility-first',
      'Responsive Design': '/docs/responsive-design',
      'Pseudo-Class Variants': '/docs/pseudo-class-variants',
      'Adding Base Styles': '/docs/adding-base-styles',
      'Extracting Components': '/docs/extracting-components',
      'Adding New Utilities': '/docs/adding-new-utilities',
      'Functions & Directives': '/docs/functions-and-directives',
    },
    'Customization': {
      'Configuration': '/docs/configuration',
      'Theme': '/docs/theme',
      'Breakpoints': '/docs/breakpoints',
      'Colors': '/docs/customizing-colors',
      'Spacing': '/docs/customizing-spacing',
      'Variants': '/docs/configuring-variants',
      'Writing Plugins': '/docs/plugins',
    },
    'Base styles': {
      'Preflight': '/docs/preflight',
    },
    'Layout': {
      'Container': '/docs/container',
      'Display': '/docs/display',
      'Float': '/docs/float',
      'Object Fit': '/docs/object-fit',
      'Object Position': '/docs/object-position',
      'Overflow': '/docs/overflow',
      'Position': '/docs/position',
      'Top / Right / Bottom / Left': '/docs/top-right-bottom-left',
      'Visibility': '/docs/visibility',
      'Z-Index': '/docs/z-index',
    },
    'Typography': {
      'Font Family': '/docs/font-family',
      'Font Size': '/docs/font-size',
      'Font Smoothing': '/docs/font-smoothing',
      'Font Style': '/docs/font-style',
      'Font Weight': '/docs/font-weight',
      'Letter Spacing': '/docs/letter-spacing',
      'Line Height': '/docs/line-height',
      'List Style Type': '/docs/list-style-type',
      'List Style Position': '/docs/list-style-position',
      'Text Align': '/docs/text-align',
      'Text Color': '/docs/text-color',
      'Text Decoration': '/docs/text-decoration',
      'Text Transform': '/docs/text-transform',
      'Vertical Align': '/docs/vertical-align',
      'Whitespace': '/docs/whitespace',
      'Word Break': '/docs/word-break',
    },
    'Backgrounds': {
      'Background Attachment': '/docs/background-attachment',
      'Background Color': '/docs/background-color',
      'Background Position': '/docs/background-position',
      'Background Repeat': '/docs/background-repeat',
      'Background Size': '/docs/background-size',
    },
    'Borders': {
      'Border Color': '/docs/border-color',
      'Border Style': '/docs/border-style',
      'Border Width': '/docs/border-width',
      'Border Radius': '/docs/border-radius',
    },
    'Flexbox': {
      'Flex Direction': '/docs/flex-direction',
      'Flex Wrap': '/docs/flex-wrap',
      'Align Items': '/docs/align-items',
      'Align Content': '/docs/align-content',
      'Align Self': '/docs/align-self',
      'Justify Content': '/docs/justify-content',
      'Flex': '/docs/flex',
      'Flex Grow': '/docs/flex-grow',
      'Flex Shrink': '/docs/flex-shrink',
      'Order': '/docs/order',
    },
    'Spacing': {
      'Padding': '/docs/padding',
      'Margin': '/docs/margin',
    },
    'Sizing': {
      'Width': '/docs/width',
      'Min-Width': '/docs/min-width',
      'Max-Width': '/docs/max-width',
      'Height': '/docs/height',
      'Min-Height': '/docs/min-height',
      'Max-Height': '/docs/max-height',
    },
    'Tables': {
      'Border Collapse': '/docs/border-collapse',
      'Table Layout': '/docs/table-layout',
    },
    'Effects': {
      'Box Shadow': '/docs/box-shadow',
      'Opacity': '/docs/opacity',
    },
    'Interactivity': {
      'Appearance': '/docs/appearance',
      'Cursor': '/docs/cursor',
      'Outline': '/docs/outline',
      'Pointer Events': '/docs/pointer-events',
      'Resize': '/docs/resize',
      'User Select': '/docs/user-select',
    },
    'SVG': {
      'Fill': '/docs/fill',
      'Stroke': '/docs/stroke',
    },
  },
  'Components': {
    'Examples': {
      'Alerts': '/components/alerts',
      'Buttons': '/components/buttons',
      'Cards': '/components/cards',
      'Forms': '/components/forms',
      'Grids': '/components/grids',
      'Navigation': '/components/navigation',
    },
  },
  'Screencasts': {
    'Getting Up and Running': {
      'Setting Up Tailwind and PostCSS': '/course/setting-up-tailwind-and-postcss',
      'The Utility-First Workflow': '/course/the-utility-first-workflow',
      'Responsive Design': '/course/responsive-design',
      'Hover, Focus, and Active Styles': '/course/hover-focus-and-active-styles',
      'Composing Utilities with @apply': '/course/composing-utilities-with-apply',
      'Extracting Reusable Components': '/course/extracting-reusable-components',
      'Customizing Your Design System': '/course/customizing-your-design-system',
      'Optimizing for Production': '/course/optimizing-for-production',
    },
    'Designing an image card': {
      'Structuring a basic card': '/course/coming-soon',
      'Making text content feel designed': '/course/coming-soon',
      'Designing a badge': '/course/coming-soon',
      'Working with SVG icons': '/course/coming-soon',
      'Cropping and positioning images': '/course/coming-soon',
      'Locking images to a fixed aspect ratio': '/course/coming-soon',
      'Creating depth with layers and shadows': '/course/coming-soon',
    },
    'Building a responsive navbar': {
      'Laying out the elements with flexbox': '/course/coming-soon',
      'Styling the navigation links': '/course/coming-soon',
      'Making it responsive': '/course/coming-soon',
      'Building a dropdown menu': '/course/coming-soon',
    },
    'Styling form elements': {
      'Styling basic text inputs': '/course/coming-soon',
      'Using positioning to build a search input group': '/course/coming-soon',
      'Using focus-within to change the search icon color': '/course/coming-soon',
      'Styling custom select menus': '/course/coming-soon',
      'Styling custom checkboxes and radio buttons': '/course/coming-soon',
      'Using the custom forms plugin': '/course/coming-soon',
    },
    'Working with CMS content': {
      'Targeting elements when you can\'t add classes': '/course/coming-soon',
      'Styling headings': '/course/coming-soon',
      'Styling paragraph text': '/course/coming-soon',
      'Styling lists': '/course/coming-soon',
    },
    'Layout Patterns': {
      'Building a responsive sidebar layout with flexbox': '/course/coming-soon',
      'Building responsive grids': '/course/coming-soon',
      'Building a sticky footer': '/course/coming-soon',
      'Building a side-scrolling card layout': '/course/coming-soon',
    },
    'Extending Tailwind': {
      'Using custom fonts' : '/course/coming-soon',
      'Using a custom color palette' : '/course/coming-soon',
      'Adding custom utilities' : '/course/coming-soon',
      'Working with third-party plugins' : '/course/coming-soon',
      'Writing your own simple plugin' : '/course/coming-soon',
    }
  },
  'Resources': {
    'On this page': {
      'Learning design': '#learning-design',
      'Images and illustrations': '#images-and-illustrations',
      'Icons': '#icons',
      'Background patterns': '#background-patterns',
    }
  },
  'Community': {
    'On this page': {
      'Discord': '#discord',
      'Forum': '#forum',
      'GitHub': '#github',
      'Twitter': '#twitter',
    }
  },
}


export default ({ meta, children }) => {
  return (
    <div id="app" className="flex">

      {/*Main content area*/}
      <div className="pt-24 pb-16 lg:pt-28 w-full">
        <div className="markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
          {meta.title && <h1 className="mb-1 leading-none text-gray-900 font-light text-3xl">{meta.title}</h1>}

          {meta.description &&
            <div className="mt-0 mb-4 text-gray-600">
              {meta.description}
            </div>
          }

          {meta.titleBorder && <hr className="my-8 border-b-2 border-gray-200"/>}
        </div>
        <div className="flex">
          <div className="markdown text-gray-700 leading-relaxed px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
            <MDXProvider components={components}>
              {children}
            </MDXProvider>
          </div>

          {/*Table of contents*/}
          <div className="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
            <div className="flex flex-col justify-between overflow-y-auto sticky top-16 max-h-(screen-16) pt-12 pb-4 -mt-12">
              @unless($page->hideTableOfContents)
              <table-of-contents className="mb-8"></table-of-contents>
              @endunless
              <div id="ad"></div>
            </div>
          </div>
          {/* /Table of contents */}

        </div>
      </div>
      {/* /Main content area */}
    </div>
  )
}

