---
extends: _layouts.documentation
title: "Transition duration"
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
      '.duration-75',
      'transition-duration: 75ms;',
      'Sets transition duration to 75ms.',
    ],
    [
      '.duration-100',
      'transition-duration: 100ms;',
      'Sets transition duration to 100ms.',
    ],
    [
      '.duration-150',
      'transition-duration: 150ms;',
      'Sets transition duration to 150ms.',
    ],
    [
      '.duration-200',
      'transition-duration: 200ms;',
      'Sets transition duration to 200ms.',
    ],
    [
      '.duration-300',
      'transition-duration: 300ms;',
      'Sets transition duration to 300ms.',
    ],
    [
      '.duration-500',
      'transition-duration: 500ms;',
      'Sets transition duration to 500ms.',
    ],
    [
      '.duration-700',
      'transition-duration: 700ms;',
      'Sets transition duration to 700ms.',
    ],
    [
      '.duration-1000',
      'transition-duration: 1000ms;',
      'Sets transition duration to 1000ms.',
    ],
  ]
])


## Usage

To create transition choose a `transition-property` class like `.transition` class together with a `transition-duration`. 

Note that durations are not inherited by child elements.

@component('_partials.code-sample')
<div class="transition duration-1000 p-4 bg-gray-200 hover:h-32">
  Hover me.
</div>
@endcomponent 

## Examples

A comparison of the transition times.

@component('_partials.code-sample')
<div class="flex flex-wrap justify-between text-xs w-full">
    <div class="transition duration-75 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">75 ms</div>
    <div class="transition duration-100 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">100 ms</div>
    <div class="transition duration-150 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">150 ms</div>
    <div class="transition duration-200 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">200 ms</div>
    <div class="transition duration-300 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">300 ms</div>
    <div class="transition duration-500 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">500 ms</div>
    <div class="transition duration-700 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">700 ms</div>
    <div class="transition duration-1000 p-2 bg-gray-200 h-16 transform hover:translate-y-1/2">1000 ms</div>
</div>
@endcomponent 

## Customizing

### Transition durations

By default Tailwind provides 8 `duration` utilities. You can change, add, or remove these by editing the `theme.transitionDuration` section of your Tailwind config.

@component('_partials.customized-config', ['key' => 'theme.tranistionDuration'])
- '75': '75ms',
  '100': '100ms',
- '150': '150ms',
  '200': '200ms',
  '300': '300ms',
  '500': '500ms',
+ '600': '600ms', 
  '700': '700ms',
  '1000': '1000ms',
+ '2000': '2000ms'.
@endcomponent

<!-- TODO: Disabling, while most variants probably do not make a lot of sense, you may want to remove the the responsive variants. -->
