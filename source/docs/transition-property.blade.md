---
extends: _layouts.documentation
title: "Transition property"
description: "Utilities for controlling which property should be transitioned."
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

@include('_partials.class-table', [
  'rows' => [
    [
      '.transition',
      'transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;',
      'Sets default properties to transition.',
    ],
    [
      '.transition-all',
      'transition-property: all;',
      'All properties will use transitions.',
    ],
    [
      '.transition-none',
      'transition-property: none;',
      'No property will use transitions.',
    ],
    [
      '.transition-colors',
      'transition-property: background-color, border-color, color, fill, stroke;',
      'All color properties will use transitions.',
    ],
    [
      '.transition-opacity',
      'transition-property: opacity;',
      'Opacity will use transitions.',
    ],
    [
      '.transition-shadow',
      'transition-property: box-shadow;',
      'Box shadows will be transitioned.',
    ],
    [
      '.transition-transform',
      'transition-property: transform;',
      'Transforms will use transitions.',
    ],
  ]
])

## Usage

To create transition choose a `transition-property` class like `.transition` class together with a `transition-duration`. Transitions won't work without a duration, as there is no default duration.

@component('_partials.code-sample')
<div class="transition duration-1000 p-4 bg-gray-200 hover:bg-gray-500">
  Hover me.
</div>
@endcomponent

Note that tranistion-duration is not inherited by child elements. 

<!-- TODO: configuration -->
