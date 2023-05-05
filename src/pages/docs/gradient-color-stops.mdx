---
title: "Gradient Color Stops"
description: "Utilities for controlling the color stops in background gradients."
---

import utilities from 'utilities?plugin=gradientColorStops'
import { ArbitraryValues } from '@/components/ArbitraryValues'
import { BreakpointsAndMediaQueries } from '@/components/BreakpointsAndMediaQueries'
import { CustomizePluginColors } from '@/components/CustomizePluginColors'
import { HoverFocusAndOtherStates } from '@/components/HoverFocusAndOtherStates'
import { TipGood, TipBad } from '@/components/Tip'

export const classes = {
  utilities,
  preview: (css) => {
    let color = [
      css['--tw-gradient-from'],
      css['--tw-gradient-to'],
      css['--tw-gradient-stops']
    ].filter(c => c !== undefined)[0]
    return (
      <td
        className={color === 'transparent' ? 'bg-checkered' : undefined}
        style={{
          backgroundColor: color?.match(/(#[a-f0-9]+|currentColor)/i)?.[0],
        }}
      >
        <div className="w-24" />
      </td>
    )
  },
}

<svg className="hidden">
  <symbol id="gradient-color-stop" viewBox="0 0 32 34">
    <path d="M1 4a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v19.6a4 4 0 0 1-2.118 3.53L16 34 3.118 27.13A4 4 0 0 1 1 23.6V4Z"/>
    <path fill="none" stroke="#000" strokeOpacity=".05" d="M5 .5h22A3.5 3.5 0 0 1 30.5 4v19.6a3.5 3.5 0 0 1-1.853 3.088L16 33.433 3.353 26.688A3.5 3.5 0 0 1 1.5 23.6V4A3.5 3.5 0 0 1 5 .5Z"/>
  </symbol>
</svg>

## Basic usage

### Starting color

Set the starting color of a gradient using the `from-{color}` utilities.

```html {{ example: true }}
<div class="mx-5">
  <div class="relative h-[3.625rem]">
    <div class="h-12 flex flex-col items-center absolute top-0 left-0 -ml-4">
      <svg viewBox="0 0 32 34" class="flex-none fill-indigo-500 w-8 drop-shadow">
        <use href="#gradient-color-stop" />
      </svg>
      <div class="mt-2 w-0.5 h-2 bg-gray-900/30 dark:bg-white/30"></div>
    </div>
  </div>
  <div class="h-10 rounded-lg bg-gradient-to-r from-indigo-500"></div>
</div>
```

```html
<div class="bg-gradient-to-r **from-indigo-500** ..."></div>
```

### Ending color

Set the ending color of a gradient using the `to-{color}` utilities.

```html {{ example: true }}
<div class="mx-5">
  <div class="relative h-[3.625rem]">
    <div class="h-12 flex flex-col items-center absolute top-0 left-0 -ml-4">
      <svg viewBox="0 0 32 34" class="flex-none fill-cyan-500 w-8 drop-shadow">
        <use href="#gradient-color-stop" />
      </svg>
      <div class="mt-2 w-0.5 h-2 bg-gray-900/30 dark:bg-white/30"></div>
    </div>
    <div class="h-12 flex flex-col items-center absolute top-0 right-0 -mr-4">
      <svg viewBox="0 0 32 34" class="flex-none fill-blue-500 w-8 drop-shadow">
        <use href="#gradient-color-stop" />
      </svg>
      <div class="mt-2 w-0.5 h-2 bg-gray-900/30 dark:bg-white/30"></div>
    </div>
  </div>
  <div class="h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"></div>
</div>
```

```html
<div class="bg-gradient-to-r from-cyan-500 **to-blue-500** ..."></div>
```

Gradients to **do not** fade in from transparent by default. To fade in from transparent, reverse the gradient direction and use a `from-{color}` utility.

### Middle color

Add a middle color to a gradient using the `via-{color}` utilities.

```html {{ example: true }}
<div class="mx-5">
  <div class="relative h-[3.625rem]">
    <div class="h-12 flex flex-col items-center absolute top-0 left-0 -ml-4">
      <svg viewBox="0 0 32 34" class="flex-none fill-indigo-500 w-8 drop-shadow">
        <use href="#gradient-color-stop" />
      </svg>
      <div class="mt-2 w-0.5 h-2 bg-gray-900/30 dark:bg-white/30"></div>
    </div>
    <div class="h-12 flex flex-col items-center absolute top-0 left-1/2 -ml-4">
      <svg viewBox="0 0 32 34" class="flex-none fill-purple-500 w-8 drop-shadow">
        <use href="#gradient-color-stop" />
      </svg>
      <div class="mt-2 w-0.5 h-2 bg-gray-900/30 dark:bg-white/30"></div>
    </div>
    <div class="h-12 flex flex-col items-center absolute top-0 right-0 -mr-4">
      <svg viewBox="0 0 32 34" class="flex-none fill-pink-500 w-8 drop-shadow">
        <use href="#gradient-color-stop" />
      </svg>
      <div class="mt-2 w-0.5 h-2 bg-gray-900/30 dark:bg-white/30"></div>
    </div>
  </div>
  <div class="h-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
</div>
```

```html
<div class="bg-gradient-to-r from-indigo-500 **via-purple-500** to-pink-500 ..."></div>
```

Gradients with a `from-{color}` and `via-{color}` will fade out to transparent by default if no `to-{color}` is present.

### Specifying stop positions

For more control over the gradient color stop positions, combine the `from-{position}`, `via-{position}` and `to-{position}` utilities with the gradient color utilities.

```html {{ example: true }}
<div class="mx-5">
  <div class="relative h-[3.625rem]">
    <div class="h-12 flex flex-col items-center absolute top-0 left-[10%] -ml-4">
      <svg viewBox="0 0 32 34" class="flex-none fill-indigo-500 w-8 drop-shadow">
        <use href="#gradient-color-stop" />
      </svg>
      <div class="mt-2 w-0.5 h-2 bg-gray-900/30 dark:bg-white/30"></div>
      <div class="absolute top-0 left-0 w-full h-8 flex items-center justify-center text-[0.6875rem] font-semibold text-white font-mono">10%</div>
    </div>
    <div class="h-12 flex flex-col items-center absolute top-0 left-[30%] -ml-4">
      <svg viewBox="0 0 32 34" class="flex-none fill-sky-500 w-8 drop-shadow">
        <use href="#gradient-color-stop" />
      </svg>
      <div class="mt-2 w-0.5 h-2 bg-gray-900/30 dark:bg-white/30"></div>
      <div class="absolute top-0 left-0 w-full h-8 flex items-center justify-center text-[0.6875rem] font-semibold text-white font-mono">30%</div>
    </div>
    <div class="h-12 flex flex-col items-center absolute top-0 right-[10%] -mr-4">
      <svg viewBox="0 0 32 34" class="flex-none fill-emerald-500 w-8 drop-shadow">
        <use href="#gradient-color-stop" />
      </svg>
      <div class="mt-2 w-0.5 h-2 bg-gray-900/30 dark:bg-white/30"></div>
      <div class="absolute top-0 left-0 w-full h-8 flex items-center justify-center text-[0.6875rem] font-semibold text-white font-mono">90%</div>
    </div>
  </div>
  <div class="h-10 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
</div>
```

```html
<div class="bg-gradient-to-r from-indigo-500 **from-10%** via-sky-500 **via-30%** to-emerald-500 **to-90%** ..."></div>
```

### Fading to transparent

Gradients fade out to transparent by default, without requiring you to add `to-transparent` explicitly. Tailwind intelligently calculates the _right_ "transparent" value to use based on the starting color to avoid [a bug in Safari < 15.4](https://bugs.webkit.org/show_bug.cgi?id=150940) that causes fading to simply the `transparent` keyword to fade through gray, which just looks awful.

<TipBad>Don't add `to-transparent` explicitly</TipBad>

```html
<div class="bg-gradient-to-r from-blue-500 to-transparent">
  <!-- ... -->
</div>
```

<TipGood>Only specify a from color and fade to transparent automatically</TipGood>

```html
<div class="bg-gradient-to-r from-blue-500">
  <!-- ... -->
</div>
```

---

## <Heading ignore>Applying conditionally</Heading>

### <Heading ignore>Hover, focus, and other states</Heading>

<HoverFocusAndOtherStates featuredClass="from-pink-500">

```html {{ example: true }}
<div class="flex justify-center">
  <button type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md">
    Hover me
  </button>
</div>
```

```html
<button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 **hover:from-pink-500 hover:to-yellow-500** ...">
  Hover me
</button>
```

</HoverFocusAndOtherStates>

### <Heading ignore>Breakpoints and media queries</Heading>

<BreakpointsAndMediaQueries defaultClass="bg-gradient-to-r from-purple-400" featuredClass="from-yellow-500" />

---

## Using custom values

### Customizing your theme

<CustomizePluginColors name="gradient" configKey="gradientColorStops" learnMore={false} />

In addition to the colors, you can also customize the gradient color stop positions by editing `theme.gradientColorStopPositions` or `theme.extend.gradientColorStopPositions`.

```diff-js {{ filename: 'tailwind.config.js' }}
  module.exports = {
    theme: {
      extend: {
+       gradientColorStopPositions: {
+         33: '33%',
+       }
      }
    }
  }
```

Learn more about customizing the default theme in the [theme customization](/docs/theme#customizing-the-default-theme) documentation.

### Arbitrary values

<ArbitraryValues property="from|via|to-{color|position}" featuredClass="from-[#243c5a]" />
