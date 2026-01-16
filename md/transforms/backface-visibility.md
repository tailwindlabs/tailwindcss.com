# backface-visibility

Utilities for controlling if an element

| Class              | Styles                          |
| ------------------ | ------------------------------- |
| `backface-hidden`  | `backface-visibility: hidden;`  |
| `backface-visible` | `backface-visibility: visible;` |

## Examples

### Basic example

Use the `backface-visible` utility to show the backface of an element, like a cube, even when it's rotated away from view:

```html
<div class="size-20 ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-hidden ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-hidden ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-hidden ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-hidden ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-hidden ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-hidden ...">6</div>
</div>

<div class="size-20 ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-visible ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-visible ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-visible ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-visible ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-visible ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-visible ...">6</div>
</div>
```

Prefix a `backface-visibility` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).