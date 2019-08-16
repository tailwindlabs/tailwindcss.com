---
extends: _layouts.documentation
title: "Accessibility"
description: "Utilities for controlling whether an element is visually hidden but still accessible to screen readers."
features:
  responsive: true
  customizable: false
  hover: false
  focus: true
---

@include('_partials.class-table', [
  'rows' => [
    [
      '.sr-only',
      "position: absolute;\nwidth: 1px;\nheight: 1px;\npadding: 0;\nmargin: -1px;\noverflow: hidden;\nclip: rect(0, 0, 0, 0);\nwhite-space: nowrap;\nborder-width: 0"
    ],
    [
      '.not-sr-only',
      "position: static;\nwidth: auto;\nheight: auto;\npadding: 0;\nmargin: 0;\noverflow: visible;\nclip: auto;\nwhite-space: normal;",
    ],
  ]
])

## Usage

Use the `.sr-only` and `.not-sr-only` to control whether an element is visually hidden but still accessible to screen readers, or whether an element is visible to sighted users as well as screen readers.

@component('_partials.code-sample')
<div class="sr-only">
  Text for screen readers only
</div>
<div class="not-sr-only">
  Text for sighted users and screen readers
</div>
@endcomponent

## Responsive

To control whether or not an element is visually hidden only at a specific breakpoint, add a `{screen}:` prefix to any existing accessibility utility. For example, adding the class `md:sr-only` to an element would apply the `sr-only` utility at medium screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](/docs/responsive-design) documentation.

@component('_partials.responsive-code-sample', ['class' => 'text-center'])
@slot('none')
<div class="inline-block bg-gray-800 text-gray-500 p-4 sr-only">Responsive element</div>
@endslot

@slot('sm')
<div class="inline-block bg-gray-800 text-gray-500 p-4 not-sr-only">Responsive element</div>
@endslot

@slot('md')
<div class="inline-block bg-gray-800 text-gray-500 p-4 sr-only">Responsive element</div>
@endslot

@slot('lg')
<div class="inline-block bg-gray-800 text-gray-500 p-4 not-sr-only">Responsive element</div>
@endslot

@slot('xl')
<div class="inline-block bg-gray-800 text-gray-500 p-4 sr-only">Responsive element</div>
@endslot

@slot('code')
<div class="none:sr-only sm:not-sr-only md:sr-only lg:not-sr-only xl:sr-only ...">
  Responsive element
</div>
@endslot
@endcomponent

## Focus

To control whether or not an element is visually hidden on focus, add the `focus:` prefix to any existing accessibility utility. For example, use `focus:not-sr-only` to apply the `not-sr-only` utility on focus.

@component('_partials.code-sample', ['lang' => 'html'])
<div class="mt-2 max-w-sm mx-auto flex items-center p-2 bg-gray-200 border-2 border-dotted border-gray-600 rounded">
  <a href="#" id="sr-only-link" class="sr-only focus:not-sr-only font-bold">Screen reader only link</a>
  <button type="button" class="ml-auto rounded appearance-none p-2 border-2 border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700" onclick="document.getElementById('sr-only-link').focus()" title="Click to focus screen reader only link">
    <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M19.8 10A11 11 0 0 0 10 4a11 11 0 0 0-9.8 6 11 11 0 0 0 9.8 6 11 11 0 0 0 9.8-6zM10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill-rule="evenodd"/>
    </svg>
  </button>
</div>
@slot('code')
<a href="#" class="sr-only focus:not-sr-only ...">...</a>
@endslot
@endcomponent

Focus utilities can also be combined with responsive utilities by adding the responsive `{screen}:` prefix *before* the `focus:` prefix.

```html
<a href="#" class="sr-only focus:not-sr-only md:focus:sr-only ...">...</a>
```

## Customizing

@include('_partials.variants-and-disabling', [
    'utility' => [
        'name' => 'accessibility',
        'property' => 'accessibility',
    ],
    'variants' => [
        'responsive',
        'focus',
    ],
])
