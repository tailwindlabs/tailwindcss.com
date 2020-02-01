---
extends: _layouts.documentation
title: "Grid Row Utilities"
description: "Utilities for controlling rows in grids"
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

By default Tailwind does not include any default utilities for controlling rows or row placement.

These utilities (`grid-rows`, `row`, `row-start`, `row-end`) can be added by using the `theme.gridTemplateRows`, `theme.gridRow`, `theme.gridRowStart`, or `theme.gridRowEnd` sections of your `tailwind.config.js` file.

@component('_partials.customized-config', ['key' => 'theme.gridTemplateRows'])
+ none: 'none',
+ '1': 'repeat(1, minmax(0, 1fr))',
+ '2': 'repeat(2, minmax(0, 1fr))',
+ '3': 'repeat(3, minmax(0, 1fr))',
+ '4': 'repeat(4, minmax(0, 1fr))',
+ '5': 'repeat(5, minmax(0, 1fr))',
+ '6': 'repeat(6, minmax(0, 1fr))',
+ '7': 'repeat(7, minmax(0, 1fr))',
+ '8': 'repeat(8, minmax(0, 1fr))',
+ '9': 'repeat(9, minmax(0, 1fr))',
+ '10': 'repeat(10, minmax(0, 1fr))',
+ '11': 'repeat(11, minmax(0, 1fr))',
+ '12': 'repeat(12, minmax(0, 1fr))',
@endcomponent

@component('_partials.customized-config', ['key' => 'theme.gridRow'])
+ auto: 'auto',
+ 'span-1': 'span 1 / span 1',
+ 'span-2': 'span 2 / span 2',
+ 'span-3': 'span 3 / span 3',
+ 'span-4': 'span 4 / span 4',
+ 'span-5': 'span 5 / span 5',
+ 'span-6': 'span 6 / span 6',
+ 'span-7': 'span 7 / span 7',
+ 'span-8': 'span 8 / span 8',
+ 'span-9': 'span 9 / span 9',
+ 'span-10': 'span 10 / span 10',
+ 'span-11': 'span 11 / span 11',
+ 'span-12': 'span 12 / span 12',
@endcomponent

@component('_partials.customized-config', ['key' => 'theme.gridRowStart'])
+ auto: 'auto',
+ '1': '1',
+ '2': '2',
+ '3': '3',
+ '4': '4',
+ '5': '5',
+ '6': '6',
+ '7': '7',
+ '8': '8',
+ '9': '9',
+ '10': '10',
+ '11': '11',
+ '12': '12',
+ '13': '13',
@endcomponent

@component('_partials.customized-config', ['key' => 'theme.gridRowEnd'])
+ auto: 'auto',
+ '1': '1',
+ '2': '2',
+ '3': '3',
+ '4': '4',
+ '5': '5',
+ '6': '6',
+ '7': '7',
+ '8': '8',
+ '9': '9',
+ '10': '10',
+ '11': '11',
+ '12': '12',
+ '13': '13',
@endcomponent
