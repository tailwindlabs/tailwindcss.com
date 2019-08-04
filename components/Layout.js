import Head from 'next/head'
import map from 'lodash/map'
import tailwindMeta from 'tailwindcss/package.json'


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


export default function Layout({ meta, children }) {
  return (
    <div class="antialiased">
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tailwindcss" />
        <meta name="twitter:title" content="{{ $page->title ? $page->title . ' - Tailwind CSS' : 'Tailwind CSS - A utility-first CSS framework for rapidly building custom designs' }}" />
        <meta name="twitter:description" content="{{ $page->description ? $page->description : 'Documentation for the Tailwind CSS framework.' }}" />
        <meta name="twitter:image" content="https://tailwindcss.com/img/tailwind-twitter-square.png" />
        <meta name="twitter:creator" content="@tailwindcss" />
        <meta property="og:url" content="https://tailwindcss.com/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="{{ $page->title ? $page->title . ' - Tailwind CSS' : 'Tailwind CSS - A utility-first CSS framework for rapidly building custom designs' }}" />
        <meta property="og:description" content="{{ $page->description ? $page->description : 'Documentation for the Tailwind CSS framework.' }}" />
        <meta property="og:image" content="https://tailwindcss.com/img/twitter-large-card.png" />
      </Head>

      {/* Top nav */}
      <div>
        <div id="header">
          <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
            <div className="w-full max-w-screen-xl relative mx-auto px-6">
              <div className="flex items-center -mx-6">

                {/* Logo section */}
                <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
                  <div className="flex items-center">
                    <a href="/" className="block lg:mr-4">
                      <svg className="h-10 w-auto hidden md:block" viewBox="0 0 273 64" fill="none">
                        <title>Tailwind CSS</title>
                        <path fill="url(#paint0_linear)" fillRule="evenodd" clipRule="evenodd" d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"/>
                        <path fill="#2D3748" fillRule="evenodd" clipRule="evenodd" d="M85.996 29.652H81.284V38.772C81.284 41.204 82.88 41.166 85.996 41.014V44.7C79.688 45.46 77.18 43.712 77.18 38.772V29.652H73.684V25.7H77.18V20.596L81.284 19.38V25.7H85.996V29.652ZM103.958 25.7H108.062V44.7H103.958V41.964C102.514 43.978 100.272 45.194 97.308 45.194C92.14 45.194 87.846 40.824 87.846 35.2C87.846 29.538 92.14 25.206 97.308 25.206C100.272 25.206 102.514 26.422 103.958 28.398V25.7ZM97.954 41.28C101.374 41.28 103.958 38.734 103.958 35.2C103.958 31.666 101.374 29.12 97.954 29.12C94.534 29.12 91.95 31.666 91.95 35.2C91.95 38.734 94.534 41.28 97.954 41.28ZM114.902 22.85C113.458 22.85 112.28 21.634 112.28 20.228C112.28 18.784 113.458 17.606 114.902 17.606C116.346 17.606 117.524 18.784 117.524 20.228C117.524 21.634 116.346 22.85 114.902 22.85ZM112.85 44.7V25.7H116.954V44.7H112.85ZM121.704 44.7V16.96H125.808V44.7H121.704ZM152.446 25.7H156.778L150.812 44.7H146.784L142.832 31.894L138.842 44.7H134.814L128.848 25.7H133.18L136.866 38.81L140.856 25.7H144.77L148.722 38.81L152.446 25.7ZM161.87 22.85C160.426 22.85 159.248 21.634 159.248 20.228C159.248 18.784 160.426 17.606 161.87 17.606C163.314 17.606 164.492 18.784 164.492 20.228C164.492 21.634 163.314 22.85 161.87 22.85ZM159.818 44.7V25.7H163.922V44.7H159.818ZM178.666 25.206C182.922 25.206 185.962 28.094 185.962 33.034V44.7H181.858V33.452C181.858 30.564 180.186 29.044 177.602 29.044C174.904 29.044 172.776 30.64 172.776 34.516V44.7H168.672V25.7H172.776V28.132C174.03 26.156 176.082 25.206 178.666 25.206ZM205.418 18.1H209.522V44.7H205.418V41.964C203.974 43.978 201.732 45.194 198.768 45.194C193.6 45.194 189.306 40.824 189.306 35.2C189.306 29.538 193.6 25.206 198.768 25.206C201.732 25.206 203.974 26.422 205.418 28.398V18.1ZM199.414 41.28C202.834 41.28 205.418 38.734 205.418 35.2C205.418 31.666 202.834 29.12 199.414 29.12C195.994 29.12 193.41 31.666 193.41 35.2C193.41 38.734 195.994 41.28 199.414 41.28ZM223.278 45.194C217.54 45.194 213.246 40.824 213.246 35.2C213.246 29.538 217.54 25.206 223.278 25.206C227.002 25.206 230.232 27.144 231.752 30.108L228.218 32.16C227.382 30.374 225.52 29.234 223.24 29.234C219.896 29.234 217.35 31.78 217.35 35.2C217.35 38.62 219.896 41.166 223.24 41.166C225.52 41.166 227.382 39.988 228.294 38.24L231.828 40.254C230.232 43.256 227.002 45.194 223.278 45.194ZM238.592 30.944C238.592 34.402 248.814 32.312 248.814 39.342C248.814 43.142 245.508 45.194 241.404 45.194C237.604 45.194 234.868 43.484 233.652 40.748L237.186 38.696C237.794 40.406 239.314 41.432 241.404 41.432C243.228 41.432 244.634 40.824 244.634 39.304C244.634 35.922 234.412 37.822 234.412 31.02C234.412 27.448 237.49 25.206 241.366 25.206C244.482 25.206 247.066 26.65 248.396 29.158L244.938 31.096C244.254 29.614 242.924 28.93 241.366 28.93C239.884 28.93 238.592 29.576 238.592 30.944ZM256.11 30.944C256.11 34.402 266.332 32.312 266.332 39.342C266.332 43.142 263.026 45.194 258.922 45.194C255.122 45.194 252.386 43.484 251.17 40.748L254.704 38.696C255.312 40.406 256.832 41.432 258.922 41.432C260.746 41.432 262.152 40.824 262.152 39.304C262.152 35.922 251.93 37.822 251.93 31.02C251.93 27.448 255.008 25.206 258.884 25.206C262 25.206 264.584 26.65 265.914 29.158L262.456 31.096C261.772 29.614 260.442 28.93 258.884 28.93C257.402 28.93 256.11 29.576 256.11 30.944Z"/>
                        <defs>
                          <linearGradient id="paint0_linear" x1="3.5" y1="16" x2="59" y2="48" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2298BD"/>
                            <stop offset="1" stopColor="#0ED7B5"/>
                          </linearGradient>
                        </defs>
                      </svg>

                      <svg className="w-10 h-10 block md:hidden" viewBox="0 0 64 64">
                        <title>Tailwind CSS</title>
                        <path d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" transform="translate(5 16)" fill="url(#logoMarkGradient)" fillRule="evenodd"></path>
                        <defs>
                          <linearGradient x1="0%" y1="0%" y2="100%" id="logoMarkGradient">
                            <stop stopColor="#2298BD"/>
                            <stop offset="1" stopColor="#0ED7B5"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex flex-grow lg:w-3/4 xl:w-4/5">

                  {/* Search section */}
                  <div className="w-full lg:px-6 xl:w-3/4 xl:px-12">
                    <div className="relative">
                      <input id="docsearch" className="transition focus:outline-none border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-900 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal" type="text" placeholder="Search the docs (Press &quot;/&quot; to focus)" />
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                        <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                      </div>
                    </div>
                  </div>


                  <button type="button" id="sidebar-open" className="flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700">
                    <svg className="fill-current w-4 h-4" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>


                  <button type="button" id="sidebar-close" className="hidden flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700">
                    <svg className="fill-current w-4 h-4" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                  </button>

                  {/* Links section */}
                  <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
                    <div className="relative mr-4">
                      <select data-version-switcher className="appearance-none block bg-white pl-2 pr-8 py-1 text-gray-500 font-medium text-base focus:outline-none focus:text-gray-800">
                        <option value="v1">v{tailwindMeta.version}</option>
                        <option value="v0">v0.7.4</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    <div className="flex justify-start items-center text-gray-500">
                      <a className="block flex items-center hover:text-gray-700 mr-5" href="https://github.com/tailwindcss/tailwindcss">
                        <svg className="fill-current w-5 h-5" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"/></svg>
                      </a>
                      <a className="block flex items-center hover:text-gray-700 mr-5" href="https://twitter.com/tailwindcss">
                        <svg className="fill-current w-5 h-5" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"/></svg>
                      </a>
                      <a className="block flex items-center hover:text-gray-700" href="/discord">
                        <svg className="fill-current w-5 h-5" viewBox="0 0 146 146"><title>Discord</title><path d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z" fillRule="nonzero"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="lg:flex -mx-6">

          {/*Side nav*/}
          <div id="sidebar" className="hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">

            <div id="navWrapper" className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent">
              <div id="navGradient" className="hidden"></div>
              <nav id="nav" className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
                <div className="relative -mx-2 w-24 mb-8 lg:hidden">
                  <select data-version-switcher className="appearance-none block bg-white pl-2 pr-8 py-1 text-gray-500 font-medium text-base focus:outline-none focus:text-gray-800">
                    <option value="v1">v{tailwindMeta.version}</option>
                    <option value="v0">v0.7.4</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <div className="mb-10">
                  <a href="/docs/installation" className="flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ $page->categoryActive('/docs') ? 'text-gray-900' : 'text-gray-600' }}">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path className="text-gray-400 fill-current" d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"/>
                      <path className="text-gray-700 fill-current" d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"/>
                    </svg>
                    <span className="ml-3">Documentation</span>
                  </a>
                  <a href="/components" className="mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ $page->categoryActive('/components') ? 'text-gray-900' : 'text-gray-600' }}">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path className="text-gray-400 fill-current" d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z"/>
                      <polygon className="text-gray-700 fill-current" points="21 6 12 10 12 22 21 18"/>
                    </svg>
                    <span className="ml-3">Components</span>
                  </a>
                  <a href="/screencasts" data-external className="mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ ($page->categoryActive('/course') || $page->categoryActive('/screencasts')) ? 'text-gray-900' : 'text-gray-600' }}">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path className="text-gray-400 fill-current" d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v2h2V5H4zm0 4v2h2V9H4zm0 4v2h2v-2H4zm0 4v2h2v-2H4zM18 5v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z"/>
                      <path className="text-gray-700 fill-current" d="M9 5h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 8h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/>
                    </svg>
                    <span className="ml-3">Screencasts</span>
                  </a>
                  <a href="/resources" className="mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ $page->categoryActive('/resources') ? 'text-gray-900' : 'text-gray-600' }}">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path className="text-gray-400 fill-current" d="M9 22c.19-.14.37-.3.54-.46L17.07 14H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9zM4 2h4a2 2 0 0 1 2 2v14a4 4 0 1 1-8 0V4c0-1.1.9-2 2-2zm2 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                      <path className="text-gray-700 fill-current" d="M11 18.66V7.34l2.07-2.07a2 2 0 0 1 2.83 0l2.83 2.83a2 2 0 0 1 0 2.83L11 18.66z"/>
                    </svg>
                    <span className="ml-3">Resources</span>
                  </a>
                  <a href="/community" className="mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ $page->categoryActive('/community') ? 'text-gray-900' : 'text-gray-600' }}">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path className="text-gray-400 fill-current" d="M20.3 12.04l1.01 3a1 1 0 0 1-1.26 1.27l-3.01-1a7 7 0 1 1 3.27-3.27zM11 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      <path className="text-gray-700 fill-current" d="M15.88 17.8a7 7 0 0 1-8.92 2.5l-3 1.01a1 1 0 0 1-1.27-1.26l1-3.01A6.97 6.97 0 0 1 5 9.1a9 9 0 0 0 10.88 8.7z"/>
                    </svg>
                    <span className="ml-3">Community</span>
                  </a>
                </div>
                {
                  map(navigation['Documentation'], (items, sectionName, i) => (
                    <div className="mb-8" key={sectionName}>
                      { items[0] === '/course/coming-soon'
                        ? <h5 className="mb-3 lg:mb-2 text-gray-400 uppercase tracking-wide font-bold text-sm lg:text-xs">{sectionName}</h5>
                        : <h5 className="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs">{sectionName}</h5>
                      }
                      <ul>
                        {
                          map(items, (link, name, i) => (
                            <li className="mb-3 lg:mb-1" key={name}>
                              {
                                link === '/course/coming-soon'
                                  /* If external don't make this a Next link */
                                  ? <a className="px-2 -mx-2 py-1 relative block text-gray-400 font-medium" href={link}>
                                      <span className="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                                      <span className="relative">{name}</span>
                                    </a>
                                  : <a className="px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium" href={link}>
                                      <span className="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                                      <span className="relative">{name}</span>
                                    </a>
                              }
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </nav>
            </div>
          </div>
          {/* /Side nav */}

          {/* Right content/TOC pane */}
          <div id="content-wrapper" className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 ">

            {/* "Turbolinks" */}
            <div id="content">

              {/*Vue-enabled area*/}
              <div id="app" className="flex">

                {/*Main content area*/}
                <div className="pt-24 pb-16 lg:pt-28 w-full">
                  <div className="markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
                    {meta.title && <h1>{meta.title}</h1>}

                    {meta.description &&
                      <div className="mt-0 mb-4 text-gray-600">
                        {meta.description}
                      </div>
                    }

                    {meta.titleBorder && <hr className="my-8 border-b-2 border-gray-200"/>}
                  </div>
                  <div className="flex">
                    <div className="markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
                      @yield('content')
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
              {/* /Vue-enabled area */}
            </div>
            {/* /Turbolinks */}
          </div>
          {/* /Right content/TOC pane */}
        </div>
      </div>
    </div>
  )
}

