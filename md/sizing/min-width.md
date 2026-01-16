# min-width

Utilities for setting the minimum width of an element.

| Class                       | Styles                                                  |
| --------------------------- | ------------------------------------------------------- |
| `min-w-<number>`            | `min-width: calc(var(--spacing) * <number>);`           |
| `min-w-<fraction>`          | `min-width: calc(<fraction> * 100%);`                   |
| `min-w-3xs`                 | `min-width: var(--container-3xs); /* 16rem (256px) */`  |
| `min-w-2xs`                 | `min-width: var(--container-2xs); /* 18rem (288px) */`  |
| `min-w-xs`                  | `min-width: var(--container-xs); /* 20rem (320px) */`   |
| `min-w-sm`                  | `min-width: var(--container-sm); /* 24rem (384px) */`   |
| `min-w-md`                  | `min-width: var(--container-md); /* 28rem (448px) */`   |
| `min-w-lg`                  | `min-width: var(--container-lg); /* 32rem (512px) */`   |
| `min-w-xl`                  | `min-width: var(--container-xl); /* 36rem (576px) */`   |
| `min-w-2xl`                 | `min-width: var(--container-2xl); /* 42rem (672px) */`  |
| `min-w-3xl`                 | `min-width: var(--container-3xl); /* 48rem (768px) */`  |
| `min-w-4xl`                 | `min-width: var(--container-4xl); /* 56rem (896px) */`  |
| `min-w-5xl`                 | `min-width: var(--container-5xl); /* 64rem (1024px) */` |
| `min-w-6xl`                 | `min-width: var(--container-6xl); /* 72rem (1152px) */` |
| `min-w-7xl`                 | `min-width: var(--container-7xl); /* 80rem (1280px) */` |
| `min-w-auto`                | `min-width: auto;`                                      |
| `min-w-px`                  | `min-width: 1px;`                                       |
| `min-w-full`                | `min-width: 100%;`                                      |
| `min-w-screen`              | `min-width: 100vw;`                                     |
| `min-w-dvw`                 | `min-width: 100dvw;`                                    |
| `min-w-dvh`                 | `min-width: 100dvh;`                                    |
| `min-w-lvw`                 | `min-width: 100lvw;`                                    |
| `min-w-lvh`                 | `min-width: 100lvh;`                                    |
| `min-w-svw`                 | `min-width: 100svw;`                                    |
| `min-w-svh`                 | `min-width: 100svh;`                                    |
| `min-w-min`                 | `min-width: min-content;`                               |
| `min-w-max`                 | `min-width: max-content;`                               |
| `min-w-fit`                 | `min-width: fit-content;`                               |
| `min-w-(<custom-property>)` | `min-width: var(<custom-property>);`                    |
| `min-w-[<value>]`           | `min-width: <value>;`                                   |

## Examples

### Basic example

Use `min-w-<number>` utilities like `min-w-24` and `min-w-64` to set an element to a fixed minimum width based on the spacing scale:

```html
<div class="w-20 ...">
  <div class="min-w-80 ...">min-w-80</div>
  <div class="min-w-64 ...">min-w-64</div>
  <div class="min-w-48 ...">min-w-48</div>
  <div class="min-w-40 ...">min-w-40</div>
  <div class="min-w-32 ...">min-w-32</div>
  <div class="min-w-24 ...">min-w-24</div>
</div>
```

### Using a percentage

Use `min-w-full` or `min-w-<fraction>` utilities like `min-w-1/2` and `min-w-2/5` to give an element a percentage-based minimum width:

```html
<div class="flex ...">
  <div class="min-w-3/4 ...">min-w-3/4</div>
  <div class="w-full ...">w-full</div>
</div>
```

### Using the container scale

Use utilities like `min-w-sm` and `min-w-xl` to set an element to a fixed minimum width based on the container scale:

```html
<div class="w-40 ...">
  <div class="min-w-lg ...">min-w-lg</div>
  <div class="min-w-md ...">min-w-md</div>
  <div class="min-w-sm ...">min-w-sm</div>
  <div class="min-w-xs ...">min-w-xs</div>
  <div class="min-w-2xs ...">min-w-2xs</div>
  <div class="min-w-3xs ...">min-w-3xs</div>
</div>
```

### Using a custom value

Use the `min-w-[<value>]` syntax to set the minimum width based on a completely custom value:

```html
<div class="min-w-[220px] ...">...</div>
```

For CSS variables, you can also use the `min-w-(<custom-property>)` syntax:

```html
<div class="min-w-(--my-min-width) ...">...</div>
```

This is just a shorthand for `min-w-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `min-width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

The `min-w-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the [theme variable documentation](/docs/theme).