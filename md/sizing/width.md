# width

Utilities for setting the width of an element.

| Class                      | Styles                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `w-<number>`               | `width: calc(var(--spacing) * <number>);`                                          |
| `w-<fraction>`             | `width: calc(<fraction> * 100%);`                                                  |
| `w-3xs`                    | `width: var(--container-3xs); /* 16rem (256px) */`                                 |
| `w-2xs`                    | `width: var(--container-2xs); /* 18rem (288px) */`                                 |
| `w-xs`                     | `width: var(--container-xs); /* 20rem (320px) */`                                  |
| `w-sm`                     | `width: var(--container-sm); /* 24rem (384px) */`                                  |
| `w-md`                     | `width: var(--container-md); /* 28rem (448px) */`                                  |
| `w-lg`                     | `width: var(--container-lg); /* 32rem (512px) */`                                  |
| `w-xl`                     | `width: var(--container-xl); /* 36rem (576px) */`                                  |
| `w-2xl`                    | `width: var(--container-2xl); /* 42rem (672px) */`                                 |
| `w-3xl`                    | `width: var(--container-3xl); /* 48rem (768px) */`                                 |
| `w-4xl`                    | `width: var(--container-4xl); /* 56rem (896px) */`                                 |
| `w-5xl`                    | `width: var(--container-5xl); /* 64rem (1024px) */`                                |
| `w-6xl`                    | `width: var(--container-6xl); /* 72rem (1152px) */`                                |
| `w-7xl`                    | `width: var(--container-7xl); /* 80rem (1280px) */`                                |
| `w-auto`                   | `width: auto;`                                                                     |
| `w-px`                     | `width: 1px;`                                                                      |
| `w-full`                   | `width: 100%;`                                                                     |
| `w-screen`                 | `width: 100vw;`                                                                    |
| `w-dvw`                    | `width: 100dvw;`                                                                   |
| `w-dvh`                    | `width: 100dvh;`                                                                   |
| `w-lvw`                    | `width: 100lvw;`                                                                   |
| `w-lvh`                    | `width: 100lvh;`                                                                   |
| `w-svw`                    | `width: 100svw;`                                                                   |
| `w-svh`                    | `width: 100svh;`                                                                   |
| `w-min`                    | `width: min-content;`                                                              |
| `w-max`                    | `width: max-content;`                                                              |
| `w-fit`                    | `width: fit-content;`                                                              |
| `w-(<custom-property>)`    | `width: var(<custom-property>);`                                                   |
| `w-[<value>]`              | `width: <value>;`                                                                  |
| `size-<number>`            | `width: calc(var(--spacing) * <number>);
height: calc(var(--spacing) * <number>);` |
| `size-<fraction>`          | `width: calc(<fraction> * 100%);
height: calc(<fraction> * 100%);`                 |
| `size-auto`                | `width: auto;
height: auto;`                                                       |
| `size-px`                  | `width: 1px;
height: 1px;`                                                         |
| `size-full`                | `width: 100%;
height: 100%;`                                                       |
| `size-dvw`                 | `width: 100dvw;
height: 100dvw;`                                                   |
| `size-dvh`                 | `width: 100dvh;
height: 100dvh;`                                                   |
| `size-lvw`                 | `width: 100lvw;
height: 100lvw;`                                                   |
| `size-lvh`                 | `width: 100lvh;
height: 100lvh;`                                                   |
| `size-svw`                 | `width: 100svw;
height: 100svw;`                                                   |
| `size-svh`                 | `width: 100svh;
height: 100svh;`                                                   |
| `size-min`                 | `width: min-content;
height: min-content;`                                         |
| `size-max`                 | `width: max-content;
height: max-content;`                                         |
| `size-fit`                 | `width: fit-content;
height: fit-content;`                                         |
| `size-(<custom-property>)` | `width: var(<custom-property>);
height: var(<custom-property>);`                   |
| `size-[<value>]`           | `width: <value>;
height: <value>;`                                                 |

## Examples

### Basic example

Use `w-<number>` utilities like `w-24` and `w-64` to set an element to a fixed width based on the spacing scale:

```html
<div class="w-96 ...">w-96</div>
<div class="w-80 ...">w-80</div>
<div class="w-64 ...">w-64</div>
<div class="w-48 ...">w-48</div>
<div class="w-40 ...">w-40</div>
<div class="w-32 ...">w-32</div>
<div class="w-24 ...">w-24</div>
```

### Using a percentage

Use `w-full` or `w-<fraction>` utilities like `w-1/2` and `w-2/5` to give an element a percentage-based width:

```html
<div class="flex ...">
  <div class="w-1/2 ...">w-1/2</div>
  <div class="w-1/2 ...">w-1/2</div>
</div>
<div class="flex ...">
  <div class="w-2/5 ...">w-2/5</div>
  <div class="w-3/5 ...">w-3/5</div>
</div>
<div class="flex ...">
  <div class="w-1/3 ...">w-1/3</div>
  <div class="w-2/3 ...">w-2/3</div>
</div>
<div class="flex ...">
  <div class="w-1/4 ...">w-1/4</div>
  <div class="w-3/4 ...">w-3/4</div>
</div>
<div class="flex ...">
  <div class="w-1/5 ...">w-1/5</div>
  <div class="w-4/5 ...">w-4/5</div>
</div>
<div class="flex ...">
  <div class="w-1/6 ...">w-1/6</div>
  <div class="w-5/6 ...">w-5/6</div>
</div>
<div class="w-full ...">w-full</div>
```

### Using the container scale

Use utilities like `w-sm` and `w-xl` to set an element to a fixed width based on the container scale:

```html
<div class="w-xl ...">w-xl</div>
<div class="w-lg ...">w-lg</div>
<div class="w-md ...">w-md</div>
<div class="w-sm ...">w-sm</div>
<div class="w-xs ...">w-xs</div>
<div class="w-2xs ...">w-2xs</div>
<div class="w-3xs ...">w-3xs</div>
```

### Matching the viewport

Use the `w-screen` utility to make an element span the entire width of the viewport:

```html
<div class="w-screen">
  <!-- ... -->
</div>
```

Alternatively, you can match the width of the large, small or dynamic viewports using the `w-lvw`, `w-svw`, and `w-dvw` utilities.

### Resetting the width

Use the `w-auto` utility to remove an element's assigned width under a specific condition, like at a particular breakpoint:

```html
<div class="w-full md:w-auto">
  <!-- ... -->
</div>
```

### Setting both width and height

Use utilities like `size-px`, `size-4`, and `size-full` to set both the width and height of an element at the same time:

```html
<div class="size-16 ...">size-16</div>
<div class="size-20 ...">size-20</div>
<div class="size-24 ...">size-24</div>
<div class="size-32 ...">size-32</div>
<div class="size-40 ...">size-40</div>
```

### Using a custom value

Use the `w-[<value>]` syntax to set the width based on a completely custom value:

```html
<div class="w-[5px] ...">...</div>
```

For CSS variables, you can also use the `w-(<custom-property>)` syntax:

```html
<div class="w-(--my-width) ...">...</div>
```

This is just a shorthand for `w-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

The `w-<number>` and `size-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the [theme variable documentation](/docs/theme).