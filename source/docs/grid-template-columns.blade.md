---
extends: _layouts.documentation
title: "Grid Template Columns"
description: "Utilities for controlling the grid template columns."
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

@include('_partials.class-table', [
  'scroll' => true,
  'rows' => $page->config['theme']['gridTemplateColumns']->map(function ($value, $name) {
    $class = ".grid-cols-{$name}";
    $code = "grid-template-columns: {$value};";
    return [$class, $code];
  })
])

## Usage

Use `.grid-cols-{number}` to build a CSS grid with `number` of columns.

@component('_partials.code-sample')
<p class="text-sm text-gray-600 mb-1">Two-column grid</p>
<div class="grid grid-cols-2 gap-4 bg-gray-200 text-gray-700 text-center mb-6">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>

<p class="text-sm text-gray-600 mb-1">Four-column grid</p>
<div class="grid grid-cols-4 gap-4 bg-gray-200 text-gray-700 text-center mb-6">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>

<p class="text-sm text-gray-600 mb-1">Six-column grid</p>
<div class="grid grid-cols-6 gap-4 bg-gray-200 text-gray-700 text-center">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>
@slot('code')
<div class="grid grid-cols-2 gap-4 bg-gray-200 text-gray-700 text-center">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>

<div class="grid grid-cols-4 gap-4 bg-gray-200 text-gray-700 text-center">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>

<div class="grid grid-cols-6 gap-4 bg-gray-200 text-gray-700 text-center">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>
@endslot
@endcomponent

## Responsive

To control how grid columns are set at a specific breakpoint, add a `{screen}:` prefix to any existing utility class. For example, use `md:grid-col-2` to apply the `grid-col-2` utility at only medium screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](/docs/responsive-design) documentation.

@component('_partials.responsive-code-sample')
@slot('none')
<div class="grid grid-cols-3 gap-4 bg-gray-200 text-gray-700 text-center">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>
@endslot
@slot('sm')
<div class="grid grid-cols-1 gap-4 bg-gray-200 text-gray-700 text-center">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>
@endslot
@slot('md')
<div class="grid grid-cols-2 gap-4 bg-gray-200 text-gray-700 text-center">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>
@endslot
@slot('lg')
<div class="grid grid-cols-4 gap-4 bg-gray-200 text-gray-700 text-center">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>
@endslot
@slot('xl')
<div class="grid grid-cols-6 gap-4 bg-gray-200 text-gray-700 text-center">
  <div class="bg-gray-400 p-2">1</div>
  <div class="bg-gray-400 p-2">2</div>
  <div class="bg-gray-400 p-2">3</div>
  <div class="bg-gray-400 p-2">4</div>
  <div class="bg-gray-400 p-2">5</div>
  <div class="bg-gray-400 p-2">6</div>
</div>
@endslot
@slot('code')
<div class="grid none:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 ...">
  <!-- ... -->
</div>
@endslot
@endcomponent

## Customizing

### Grid column values

By default, Tailwind's provides template utilities for up to twelve column grids. You change, add, or remove these by customizing the `gridTemplateColumns` section of your Tailwind theme config.

@component('_partials.customized-config', ['key' => 'theme.extend.gridTemplateColumns'])
+ '16': '16',
+ '24': '24',
@endcomponent

Learn more about customizing the default theme in the [theme customization documentation](/docs/theme#customizing-the-default-theme).

@include('_partials.variants-and-disabling', [
    'utility' => [
        'name' => 'grid template column',
        'property' => 'gridTemplateColumns',
    ],
    'variants' => [
        'responsive',
    ],
])
