module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tailwindcss_package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/package.json */ "./node_modules/tailwindcss/package.json");
var tailwindcss_package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! tailwindcss/package.json */ "./node_modules/tailwindcss/package.json", 1);
var _jsxFileName = "/Users/adamwathan/Code/tailwind-docs/components/Layout.js";




const navigation = {
  'Documentation': {
    'Getting Started': {
      'Installation': '/docs/installation',
      'Release Notes': '/docs/release-notes',
      'Upgrade Guide': '/docs/upgrading-to-v1',
      'Using with Preprocessors': '/docs/using-with-preprocessors',
      'Controlling File Size': '/docs/controlling-file-size',
      'Browser Support': '/docs/browser-support'
    },
    'Core Concepts': {
      'Utility-First': '/docs/utility-first',
      'Responsive Design': '/docs/responsive-design',
      'Pseudo-Class Variants': '/docs/pseudo-class-variants',
      'Adding Base Styles': '/docs/adding-base-styles',
      'Extracting Components': '/docs/extracting-components',
      'Adding New Utilities': '/docs/adding-new-utilities',
      'Functions & Directives': '/docs/functions-and-directives'
    },
    'Customization': {
      'Configuration': '/docs/configuration',
      'Theme': '/docs/theme',
      'Breakpoints': '/docs/breakpoints',
      'Colors': '/docs/customizing-colors',
      'Spacing': '/docs/customizing-spacing',
      'Variants': '/docs/configuring-variants',
      'Writing Plugins': '/docs/plugins'
    },
    'Base styles': {
      'Preflight': '/docs/preflight'
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
      'Z-Index': '/docs/z-index'
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
      'Word Break': '/docs/word-break'
    },
    'Backgrounds': {
      'Background Attachment': '/docs/background-attachment',
      'Background Color': '/docs/background-color',
      'Background Position': '/docs/background-position',
      'Background Repeat': '/docs/background-repeat',
      'Background Size': '/docs/background-size'
    },
    'Borders': {
      'Border Color': '/docs/border-color',
      'Border Style': '/docs/border-style',
      'Border Width': '/docs/border-width',
      'Border Radius': '/docs/border-radius'
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
      'Order': '/docs/order'
    },
    'Spacing': {
      'Padding': '/docs/padding',
      'Margin': '/docs/margin'
    },
    'Sizing': {
      'Width': '/docs/width',
      'Min-Width': '/docs/min-width',
      'Max-Width': '/docs/max-width',
      'Height': '/docs/height',
      'Min-Height': '/docs/min-height',
      'Max-Height': '/docs/max-height'
    },
    'Tables': {
      'Border Collapse': '/docs/border-collapse',
      'Table Layout': '/docs/table-layout'
    },
    'Effects': {
      'Box Shadow': '/docs/box-shadow',
      'Opacity': '/docs/opacity'
    },
    'Interactivity': {
      'Appearance': '/docs/appearance',
      'Cursor': '/docs/cursor',
      'Outline': '/docs/outline',
      'Pointer Events': '/docs/pointer-events',
      'Resize': '/docs/resize',
      'User Select': '/docs/user-select'
    },
    'SVG': {
      'Fill': '/docs/fill',
      'Stroke': '/docs/stroke'
    }
  },
  'Components': {
    'Examples': {
      'Alerts': '/components/alerts',
      'Buttons': '/components/buttons',
      'Cards': '/components/cards',
      'Forms': '/components/forms',
      'Grids': '/components/grids',
      'Navigation': '/components/navigation'
    }
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
      'Optimizing for Production': '/course/optimizing-for-production'
    },
    'Designing an image card': {
      'Structuring a basic card': '/course/coming-soon',
      'Making text content feel designed': '/course/coming-soon',
      'Designing a badge': '/course/coming-soon',
      'Working with SVG icons': '/course/coming-soon',
      'Cropping and positioning images': '/course/coming-soon',
      'Locking images to a fixed aspect ratio': '/course/coming-soon',
      'Creating depth with layers and shadows': '/course/coming-soon'
    },
    'Building a responsive navbar': {
      'Laying out the elements with flexbox': '/course/coming-soon',
      'Styling the navigation links': '/course/coming-soon',
      'Making it responsive': '/course/coming-soon',
      'Building a dropdown menu': '/course/coming-soon'
    },
    'Styling form elements': {
      'Styling basic text inputs': '/course/coming-soon',
      'Using positioning to build a search input group': '/course/coming-soon',
      'Using focus-within to change the search icon color': '/course/coming-soon',
      'Styling custom select menus': '/course/coming-soon',
      'Styling custom checkboxes and radio buttons': '/course/coming-soon',
      'Using the custom forms plugin': '/course/coming-soon'
    },
    'Working with CMS content': {
      'Targeting elements when you can\'t add classes': '/course/coming-soon',
      'Styling headings': '/course/coming-soon',
      'Styling paragraph text': '/course/coming-soon',
      'Styling lists': '/course/coming-soon'
    },
    'Layout Patterns': {
      'Building a responsive sidebar layout with flexbox': '/course/coming-soon',
      'Building responsive grids': '/course/coming-soon',
      'Building a sticky footer': '/course/coming-soon',
      'Building a side-scrolling card layout': '/course/coming-soon'
    },
    'Extending Tailwind': {
      'Using custom fonts': '/course/coming-soon',
      'Using a custom color palette': '/course/coming-soon',
      'Adding custom utilities': '/course/coming-soon',
      'Working with third-party plugins': '/course/coming-soon',
      'Writing your own simple plugin': '/course/coming-soon'
    }
  },
  'Resources': {
    'On this page': {
      'Learning design': '#learning-design',
      'Images and illustrations': '#images-and-illustrations',
      'Icons': '#icons',
      'Background patterns': '#background-patterns'
    }
  },
  'Community': {
    'On this page': {
      'Discord': '#discord',
      'Forum': '#forum',
      'GitHub': '#github',
      'Twitter': '#twitter'
    }
  }
};
function Layout({
  meta,
  children
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "antialiased",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: "@tailwindcss",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:title",
    content: "{{ $page->title ? $page->title . ' - Tailwind CSS' : 'Tailwind CSS - A utility-first CSS framework for rapidly building custom designs' }}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:description",
    content: "{{ $page->description ? $page->description : 'Documentation for the Tailwind CSS framework.' }}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: "https://tailwindcss.com/img/tailwind-twitter-square.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:creator",
    content: "@tailwindcss",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https://tailwindcss.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "{{ $page->title ? $page->title . ' - Tailwind CSS' : 'Tailwind CSS - A utility-first CSS framework for rapidly building custom designs' }}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: "{{ $page->description ? $page->description : 'Documentation for the Tailwind CSS framework.' }}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: "https://tailwindcss.com/img/twitter-large-card.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full max-w-screen-xl relative mx-auto px-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center -mx-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "block lg:mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-10 w-auto hidden md:block",
    viewBox: "0 0 273 64",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Tailwind CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#paint0_linear)",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#2D3748",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M85.996 29.652H81.284V38.772C81.284 41.204 82.88 41.166 85.996 41.014V44.7C79.688 45.46 77.18 43.712 77.18 38.772V29.652H73.684V25.7H77.18V20.596L81.284 19.38V25.7H85.996V29.652ZM103.958 25.7H108.062V44.7H103.958V41.964C102.514 43.978 100.272 45.194 97.308 45.194C92.14 45.194 87.846 40.824 87.846 35.2C87.846 29.538 92.14 25.206 97.308 25.206C100.272 25.206 102.514 26.422 103.958 28.398V25.7ZM97.954 41.28C101.374 41.28 103.958 38.734 103.958 35.2C103.958 31.666 101.374 29.12 97.954 29.12C94.534 29.12 91.95 31.666 91.95 35.2C91.95 38.734 94.534 41.28 97.954 41.28ZM114.902 22.85C113.458 22.85 112.28 21.634 112.28 20.228C112.28 18.784 113.458 17.606 114.902 17.606C116.346 17.606 117.524 18.784 117.524 20.228C117.524 21.634 116.346 22.85 114.902 22.85ZM112.85 44.7V25.7H116.954V44.7H112.85ZM121.704 44.7V16.96H125.808V44.7H121.704ZM152.446 25.7H156.778L150.812 44.7H146.784L142.832 31.894L138.842 44.7H134.814L128.848 25.7H133.18L136.866 38.81L140.856 25.7H144.77L148.722 38.81L152.446 25.7ZM161.87 22.85C160.426 22.85 159.248 21.634 159.248 20.228C159.248 18.784 160.426 17.606 161.87 17.606C163.314 17.606 164.492 18.784 164.492 20.228C164.492 21.634 163.314 22.85 161.87 22.85ZM159.818 44.7V25.7H163.922V44.7H159.818ZM178.666 25.206C182.922 25.206 185.962 28.094 185.962 33.034V44.7H181.858V33.452C181.858 30.564 180.186 29.044 177.602 29.044C174.904 29.044 172.776 30.64 172.776 34.516V44.7H168.672V25.7H172.776V28.132C174.03 26.156 176.082 25.206 178.666 25.206ZM205.418 18.1H209.522V44.7H205.418V41.964C203.974 43.978 201.732 45.194 198.768 45.194C193.6 45.194 189.306 40.824 189.306 35.2C189.306 29.538 193.6 25.206 198.768 25.206C201.732 25.206 203.974 26.422 205.418 28.398V18.1ZM199.414 41.28C202.834 41.28 205.418 38.734 205.418 35.2C205.418 31.666 202.834 29.12 199.414 29.12C195.994 29.12 193.41 31.666 193.41 35.2C193.41 38.734 195.994 41.28 199.414 41.28ZM223.278 45.194C217.54 45.194 213.246 40.824 213.246 35.2C213.246 29.538 217.54 25.206 223.278 25.206C227.002 25.206 230.232 27.144 231.752 30.108L228.218 32.16C227.382 30.374 225.52 29.234 223.24 29.234C219.896 29.234 217.35 31.78 217.35 35.2C217.35 38.62 219.896 41.166 223.24 41.166C225.52 41.166 227.382 39.988 228.294 38.24L231.828 40.254C230.232 43.256 227.002 45.194 223.278 45.194ZM238.592 30.944C238.592 34.402 248.814 32.312 248.814 39.342C248.814 43.142 245.508 45.194 241.404 45.194C237.604 45.194 234.868 43.484 233.652 40.748L237.186 38.696C237.794 40.406 239.314 41.432 241.404 41.432C243.228 41.432 244.634 40.824 244.634 39.304C244.634 35.922 234.412 37.822 234.412 31.02C234.412 27.448 237.49 25.206 241.366 25.206C244.482 25.206 247.066 26.65 248.396 29.158L244.938 31.096C244.254 29.614 242.924 28.93 241.366 28.93C239.884 28.93 238.592 29.576 238.592 30.944ZM256.11 30.944C256.11 34.402 266.332 32.312 266.332 39.342C266.332 43.142 263.026 45.194 258.922 45.194C255.122 45.194 252.386 43.484 251.17 40.748L254.704 38.696C255.312 40.406 256.832 41.432 258.922 41.432C260.746 41.432 262.152 40.824 262.152 39.304C262.152 35.922 251.93 37.822 251.93 31.02C251.93 27.448 255.008 25.206 258.884 25.206C262 25.206 264.584 26.65 265.914 29.158L262.456 31.096C261.772 29.614 260.442 28.93 258.884 28.93C257.402 28.93 256.11 29.576 256.11 30.944Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "3.5",
    y1: "16",
    x2: "59",
    y2: "48",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    stopColor: "#2298BD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#0ED7B5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-10 h-10 block md:hidden",
    viewBox: "0 0 64 64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Tailwind CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z",
    transform: "translate(5 16)",
    fill: "url(#logoMarkGradient)",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    x1: "0%",
    y1: "0%",
    y2: "100%",
    id: "logoMarkGradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    stopColor: "#2298BD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopColor: "#0ED7B5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-grow lg:w-3/4 xl:w-4/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full lg:px-6 xl:w-3/4 xl:px-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "docsearch",
    className: "transition focus:outline-none border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-900 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal",
    type: "text",
    placeholder: "Search the docs (Press \"/\" to focus)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current pointer-events-none text-gray-600 w-4 h-4",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    id: "sidebar-open",
    className: "flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current w-4 h-4",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    id: "sidebar-close",
    className: "hidden flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current w-4 h-4",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    "data-version-switcher": true,
    className: "appearance-none block bg-white pl-2 pr-8 py-1 text-gray-500 font-medium text-base focus:outline-none focus:text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "v1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "v", tailwindcss_package_json__WEBPACK_IMPORTED_MODULE_3__.version), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "v0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "v0.7.4")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current h-4 w-4",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-start items-center text-gray-500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block flex items-center hover:text-gray-700 mr-5",
    href: "https://github.com/tailwindcss/tailwindcss",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current w-5 h-5",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block flex items-center hover:text-gray-700 mr-5",
    href: "https://twitter.com/tailwindcss",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current w-5 h-5",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "Twitter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block flex items-center hover:text-gray-700",
    href: "/discord",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current w-5 h-5",
    viewBox: "0 0 146 146",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "Discord"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z",
    fillRule: "nonzero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }))))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full max-w-screen-xl mx-auto px-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:flex -mx-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidebar",
    className: "hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navWrapper",
    className: "h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navGradient",
    className: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    id: "nav",
    className: "px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative -mx-2 w-24 mb-8 lg:hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    "data-version-switcher": true,
    className: "appearance-none block bg-white pl-2 pr-8 py-1 text-gray-500 font-medium text-base focus:outline-none focus:text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "v1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "v", tailwindcss_package_json__WEBPACK_IMPORTED_MODULE_3__.version), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "v0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "v0.7.4")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/docs/installation",
    className: "flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ $page->categoryActive('/docs') ? 'text-gray-900' : 'text-gray-600' }}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "text-gray-400 fill-current",
    d: "M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "text-gray-700 fill-current",
    d: "M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, "Documentation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/components",
    className: "mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ $page->categoryActive('/components') ? 'text-gray-900' : 'text-gray-600' }}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "text-gray-400 fill-current",
    d: "M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    className: "text-gray-700 fill-current",
    points: "21 6 12 10 12 22 21 18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, "Components")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/screencasts",
    "data-external": true,
    className: "mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ ($page->categoryActive('/course') || $page->categoryActive('/screencasts')) ? 'text-gray-900' : 'text-gray-600' }}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "text-gray-400 fill-current",
    d: "M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v2h2V5H4zm0 4v2h2V9H4zm0 4v2h2v-2H4zm0 4v2h2v-2H4zM18 5v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "text-gray-700 fill-current",
    d: "M9 5h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 8h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, "Screencasts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/resources",
    className: "mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ $page->categoryActive('/resources') ? 'text-gray-900' : 'text-gray-600' }}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "text-gray-400 fill-current",
    d: "M9 22c.19-.14.37-.3.54-.46L17.07 14H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9zM4 2h4a2 2 0 0 1 2 2v14a4 4 0 1 1-8 0V4c0-1.1.9-2 2-2zm2 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "text-gray-700 fill-current",
    d: "M11 18.66V7.34l2.07-2.07a2 2 0 0 1 2.83 0l2.83 2.83a2 2 0 0 1 0 2.83L11 18.66z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "Resources")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/community",
    className: "mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium {{ $page->categoryActive('/community') ? 'text-gray-900' : 'text-gray-600' }}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "text-gray-400 fill-current",
    d: "M20.3 12.04l1.01 3a1 1 0 0 1-1.26 1.27l-3.01-1a7 7 0 1 1 3.27-3.27zM11 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "text-gray-700 fill-current",
    d: "M15.88 17.8a7 7 0 0 1-8.92 2.5l-3 1.01a1 1 0 0 1-1.27-1.26l1-3.01A6.97 6.97 0 0 1 5 9.1a9 9 0 0 0 10.88 8.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, "Community"))), lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(navigation['Documentation'], (items, sectionName, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-8",
    key: sectionName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, items[0] === '/course/coming-soon' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mb-3 lg:mb-2 text-gray-400 uppercase tracking-wide font-bold text-sm lg:text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, sectionName) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, sectionName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(items, (link, name, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mb-3 lg:mb-1",
    key: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, link === '/course/coming-soon'
  /* If external don't make this a Next link */
  ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "px-2 -mx-2 py-1 relative block text-gray-400 font-medium",
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "rounded absolute inset-0 bg-teal-200 opacity-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, name)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium",
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "rounded absolute inset-0 bg-teal-200 opacity-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, name)))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content-wrapper",
    className: "min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "app",
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-24 pb-16 lg:pt-28 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, meta.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, meta.title), meta.description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-0 mb-4 text-gray-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, meta.description), meta.titleBorder && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "my-8 border-b-2 border-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }, "@yield('content')"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden xl:text-sm xl:block xl:w-1/4 xl:px-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col justify-between overflow-y-auto sticky top-16 max-h-(screen-16) pt-12 pb-4 -mt-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, "@unless($page->hideTableOfContents)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table-of-contents", {
    className: "mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }), "@endunless", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "ad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  })))))))))));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/tailwindcss/package.json":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/package.json ***!
  \***********************************************/
/*! exports provided: name, version, description, license, main, style, repository, bugs, homepage, bin, contributors, scripts, devDependencies, dependencies, browserslist, babel, jest, engines, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"tailwindcss\",\"version\":\"1.0.5\",\"description\":\"A utility-first CSS framework for rapidly building custom user interfaces.\",\"license\":\"MIT\",\"main\":\"lib/index.js\",\"style\":\"dist/tailwind.css\",\"repository\":\"https://github.com/tailwindcss/tailwindcss.git\",\"bugs\":\"https://github.com/tailwindcss/tailwindcss/issues\",\"homepage\":\"https://tailwindcss.com\",\"bin\":{\"tailwind\":\"lib/cli.js\"},\"contributors\":[\"Adam Wathan <adam.wathan@gmail.com>\",\"Jonathan Reinink <jonathan@reinink.ca>\",\"David Hemphill <davidlee.hemphill@gmail.com>\"],\"scripts\":{\"prebabelify\":\"rimraf lib\",\"babelify\":\"babel src --out-dir lib --copy-files\",\"prepare\":\"npm run babelify && babel-node src/build.js\",\"style\":\"eslint .\",\"test\":\"jest && eslint .\"},\"devDependencies\":{\"@babel/cli\":\"^7.0.0\",\"@babel/core\":\"^7.0.0\",\"@babel/node\":\"^7.0.0\",\"@babel/preset-env\":\"^7.0.0\",\"babel-jest\":\"^24.3.1\",\"clean-css\":\"^4.1.9\",\"eslint\":\"^6.0.1\",\"eslint-config-postcss\":\"^2.0.2\",\"eslint-config-prettier\":\"^6.0.0\",\"eslint-plugin-prettier\":\"^3.0.1\",\"jest\":\"^24.3.1\",\"prettier\":\"^1.7.4\",\"rimraf\":\"^2.6.3\"},\"dependencies\":{\"autoprefixer\":\"^9.4.5\",\"bytes\":\"^3.0.0\",\"chalk\":\"^2.4.1\",\"fs-extra\":\"^8.0.0\",\"lodash\":\"^4.17.11\",\"node-emoji\":\"^1.8.1\",\"normalize.css\":\"^8.0.1\",\"postcss\":\"^7.0.11\",\"postcss-functions\":\"^3.0.0\",\"postcss-js\":\"^2.0.0\",\"postcss-nested\":\"^4.1.1\",\"postcss-selector-parser\":\"^6.0.0\",\"pretty-hrtime\":\"^1.0.3\"},\"browserslist\":[\"> 1%\"],\"babel\":{\"presets\":[[\"@babel/preset-env\",{\"targets\":{\"node\":\"8.9.0\"}}]]},\"jest\":{\"setupFilesAfterEnv\":[\"<rootDir>/jest/customMatchers.js\"],\"testPathIgnorePatterns\":[\"<rootDir>/__tests__/fixtures/\"]},\"engines\":{\"node\":\">=8.9.0\"}}");

/***/ }),

/***/ "./pages/docs/utility-first.mdx":
/*!**************************************!*\
  !*** ./pages/docs/utility-first.mdx ***!
  \**************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");


var _jsxFileName = "/Users/adamwathan/Code/tailwind-docs/pages/docs/utility-first.mdx";

/* @jsx mdx */


/* @jsx mdx */


const meta = {
  title: "Utility-First",
  description: "Building complex components from a constrained set of primitive utilities.",
  titleBorder: true
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

const layoutProps = {
  meta
};
const MDXLayout = _components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"];
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    style: {
      fontSize: 0
    },
    class: "invisible m-0 -mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Overview"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, `Traditionally, whenever you need to style something on the web, you write CSS.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    className: "flex items-start mt-8 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("svg", {
    className: "h-6 w-6 mr-2 flex-shrink-0",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "#fed7d7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("path", {
    fill: "#f56565",
    d: "M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    className: "text-base font-semibold text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Using a traditional approach where custom designs require custom CSS")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "bg-gray-200 px-8 py-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "flex-shrink-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("svg", {
    className: "h-12 w-12",
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("stop", {
    "stop-color": "#2397B3",
    offset: "0%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("stop", {
    "stop-color": "#13577E",
    offset: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("stop", {
    "stop-color": "#73DFF2",
    offset: "0%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("stop", {
    "stop-color": "#47B1EB",
    offset: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("path", {
    d: "M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z",
    fill: "url(#a)",
    transform: "translate(1 1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("path", {
    d: "M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z",
    fill: "url(#b)",
    transform: "translate(1 1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("path", {
    d: "M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    fill: "#FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "ml-6 pt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "text-xl text-gray-900 leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "ChitChat"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    className: "text-base text-gray-600 leading-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "You have a new message!"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), `<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, `@component('_partials.code-sample', `, `['class' => 'bg-gray-200 px-8 py-12']`, `)`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, `@slot('code')
@endslot
@endcomponent`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, `With Tailwind, you style elements by applying pre-existing classes directly in your HTML.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, `@component('_partials.tip-good')
Using utility classes to build custom designs without writing CSS
@endcomponent`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "bg-gray-200 px-8 py-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    class: "max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    class: "flex-shrink-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("svg", {
    class: "h-12 w-12",
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("stop", {
    "stop-color": "#2397B3",
    offset: "0%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("stop", {
    "stop-color": "#13577E",
    offset: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("stop", {
    "stop-color": "#73DFF2",
    offset: "0%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("stop", {
    "stop-color": "#47B1EB",
    offset: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("path", {
    d: "M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z",
    fill: "url(#a)",
    transform: "translate(1 1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("path", {
    d: "M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z",
    fill: "url(#b)",
    transform: "translate(1 1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("path", {
    d: "M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    fill: "#FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    class: "ml-6 pt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    class: "text-xl text-gray-900 leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "ChitChat"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    class: "text-base text-gray-600 leading-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "You have a new message!"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), `<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="ml-6 pt-1">
    <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
    <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
  </div>
</div>
`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, `In the example above, we've used:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, `Tailwind's `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/display#flex"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), `flexbox`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/padding"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), `padding`), ` utilities (`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, `flex`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, `flex-shrink-0`), `, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, `p-6`), `) to control the overall card layout`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, `The `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/max-width"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), `max-width`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/margin"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), `margin`), ` utilities (`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, `max-w-sm`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, `mx-auto`), `) to constrain the card width and center it horizontally`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, `The `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/background-color"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), `background color`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/border-radius"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), `border radius`), `, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/box-shadow"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), `box-shadow`), ` utilities (`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, `bg-white`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, `rounded-lg`), `, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, `shadow-xl`), `) to style the card's appearance`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, `The `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/width"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), `width`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/height"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), `height`), ` utilities (`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, `w-12`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, `h-12`), `) to size the logo image`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, `The `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/margin"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), `margin`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/padding"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), `padding`), ` utilities (`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, `ml-6`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, `pt-1`), `) to position the card text`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, `The `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/font-size"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), `font size`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/text-color"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), `text color`), `, and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/line-height"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), `line-height`), ` utilities (`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, `text-xl`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, `text-gray-900`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, `leading-tight`), `, etc.) to style the card text`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, `...allowing us to implement a completely custom component design, without writing a single line of custom CSS.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, `Now I know what you're thinking, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, `"this is an atrocity, what a horrible mess!"`), ` and you're right, it's kind of ugly. In fact it's just about impossible to think this is a good idea the first time you see it — `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, `you have to actually try it`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, `But once you've actually built something this way, you'll quickly notice some really important benefits:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, `You aren't wasting energy inventing class names`), `. No more adding silly class names like `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, `sidebar-inner-wrapper`), ` just to be able to style something, and no more agonizing over the perfect abstract name for something that's really just a flex container.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, `Your CSS stops growing`), `. Using a traditional approach, your CSS files get bigger every time you add a new feature. With utilities, everything is reusable so you rarely need to write new CSS.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, `Making changes feels safer`), `. CSS is global and you never know what you're breaking when you make a change. Classes in your HTML are local, so you can change them without worrying about something else breaking.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, `When you realize how productive you can be working exclusively in HTML with predefined utility classes, working any other way will feel like torture.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, `Why not just use inline styles?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, `A common reaction to this approach is wondering, "isn't this just inline styles?" and in some ways it is — you're applying styles directly to elements instead of assigning them a class name and then styling that class.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, `But using utility classes has a few important advantages over inline styles:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, `Designing with constraints`), `. Using inline styles, every value is a magic number. With utilities, you're choosing styles from a predefined `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/theme"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), `design system`), `, which makes it much easier to build visually consistent UIs.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, `Responsive design`), `. You can't use media queries in inline styles, but you can use Tailwind's `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/responsive-design"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), `responsive utilities`), ` to build fully responsive interfaces easily.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, `Pseudo-classes`), `. Inline styles can't target states like hover or focus, but Tailwind's `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "/docs/pseudo-class-variants"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), `pseudo-class variants`), ` make it easy to style those states with utility classes.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, `This component is fully responsive and includes a button with hover styles, and is built entirely with utility classes:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "p-8 bg-gray-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    class: "max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    class: "sm:flex sm:items-center px-6 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", {
    class: "block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full",
    src: "https://randomuser.me/api/portraits/women/17.jpg",
    alt: "Woman's Face",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    class: "mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    class: "text-xl leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Erin Lindford"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    class: "text-sm leading-tight text-gray-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Customer Support Specialst"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    class: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("button", {
    class: "text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Message")))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, `Maintainability concerns`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, `The biggest maintainability concern when using a utility-first approach is managing commonly repeated utility combinations.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, `This is easily solved by `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/docs/extracting-components"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), `extracting components`), `, either as template partials/JavaScript components, or using Tailwind's `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, `@@apply`), ` feature to create abstractions around common utility patterns.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("button", {
    class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), `<!-- Using utilities -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

<!-- Extracting classes using @@apply -->
<button class="btn btn-blue">
  Button
</button>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>
`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, `Aside from that, maintaining a utility-first CSS project turns out to be a lot easier than maintaining a large CSS codebase, simply because HTML is so much easier to maintain than CSS. Large companies like GitHub, Heroku, Kickstarter, Twitch, Segment, and more are using this approach with great success.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, `If you'd like to hear about others' experiences with this approach, check out the following resources:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "https://medium.com/@johnpolacek/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), `By The Numbers: A Year and a Half with Atomic CSS`), ` by John Polacek`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "https://blog.algolia.com/redesigning-our-docs-part-4-building-a-scalable-css-architecture/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), `Building a Scalable CSS Architecture`), ` by Sarah Dayan of Algolia`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "http://www.fullstackradio.com/75"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), `Diana Mounter on using utility classes at GitHub`), `, a podcast interview`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, `For even more, check out `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://johnpolacek.github.io/the-case-for-atomic-css/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), `The Case for Atomic/Utility-First CSS`), `, curated by `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://twitter.com/johnpolacek"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), `John Polacek`), `.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** multi ./pages/docs/utility-first.mdx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adamwathan/Code/tailwind-docs/pages/docs/utility-first.mdx */"./pages/docs/utility-first.mdx");


/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=utility-first.js.map