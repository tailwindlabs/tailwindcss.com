---
extends: _layouts.documentation
title: "Transition timing function"
description: "Utilities for controlling timing functions like easing for transitions."
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

@include('_partials.class-table', [
  'rows' => [
    [
      '.ease-linear',
      'transition-timing-function: linear;',
      'Makes transitions linear.',
    ],
    [
      '.ease-in',
      'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);',
      'Transition eases in (accelerates over time).',
    ],
    [
      '.ease-out',
      'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);',
      'Transition eases out (slows over time).',
    ],
    [
      '.ease-in-out',
      'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',
      'Transition eases in and out (accelerates first, then slows down).',
    ],
  ]
])



## Usage

To create transition with a timing function, choose a `transition-property` class like `.transition` class together with a `transition-duration` and add an `ease` class.

@component('_partials.code-sample')
    <div class="transition ease-out duration-1000 p-4 bg-gray-200 transform hover:translate-y-1/2">
      Hover me.
    </div>
@endcomponent 

## Examples

Hover the elements to see the different easings.

@component('_partials.code-sample')
<div class="flex flex-wrap justify-between text-xs w-full">
    <div class="transition ease-linear duration-1000 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">linear</div>
    <div class="transition ease-in duration-1000 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">ease-in</div>
    <div class="transition ease-out duration-1000 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">ease-out</div>
    <div class="transition ease-in-out duration-1000 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">ease-in-out</div>
</div>
@endcomponent 

<!-- TODO: Customizing -->