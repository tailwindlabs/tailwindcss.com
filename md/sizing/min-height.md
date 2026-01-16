# min-height

Utilities for setting the minimum height of an element.

| Class                       | Styles                                         |
| --------------------------- | ---------------------------------------------- |
| `min-h-<number>`            | `min-height: calc(var(--spacing) * <number>);` |
| `min-h-<fraction>`          | `min-height: calc(<fraction> * 100%);`         |
| `min-h-px`                  | `min-height: 1px;`                             |
| `min-h-full`                | `min-height: 100%;`                            |
| `min-h-screen`              | `min-height: 100vh;`                           |
| `min-h-dvh`                 | `min-height: 100dvh;`                          |
| `min-h-dvw`                 | `min-height: 100dvw;`                          |
| `min-h-lvh`                 | `min-height: 100lvh;`                          |
| `min-h-lvw`                 | `min-height: 100lvw;`                          |
| `min-h-svw`                 | `min-height: 100svw;`                          |
| `min-h-svh`                 | `min-height: 100svh;`                          |
| `min-h-auto`                | `min-height: auto;`                            |
| `min-h-min`                 | `min-height: min-content;`                     |
| `min-h-max`                 | `min-height: max-content;`                     |
| `min-h-fit`                 | `min-height: fit-content;`                     |
| `min-h-lh`                  | `min-height: 1lh;`                             |
| `min-h-(<custom-property>)` | `min-height: var(<custom-property>);`          |
| `min-h-[<value>]`           | `min-height: <value>;`                         |

## Examples

### Basic example

Use `min-h-<number>` utilities like `min-h-24` and `min-h-64` to set an element to a fixed minimum height based on the spacing scale:

```html
<div class="h-20 ...">
  <div class="min-h-80 ...">min-h-80</div>
  <div class="min-h-64 ...">min-h-64</div>
  <div class="min-h-48 ...">min-h-48</div>
  <div class="min-h-40 ...">min-h-40</div>
  <div class="min-h-32 ...">min-h-32</div>
  <div class="min-h-24 ...">min-h-24</div>
</div>
```

### Using a percentage

Use `min-h-full` or `min-h-<fraction>` utilities like `min-h-1/2`, and `min-h-2/5` to give an element a percentage-based minimum height:

```html
<div class="min-h-full ...">min-h-full</div>
<div class="min-h-9/10 ...">min-h-9/10</div>
<div class="min-h-3/4 ...">min-h-3/4</div>
<div class="min-h-1/2 ...">min-h-1/2</div>
<div class="min-h-1/3 ...">min-h-1/3</div>
```

### Using a custom value

Use the `min-h-[<value>]` syntax to set the minimum height based on a completely custom value:

```html
<div class="min-h-[220px] ...">...</div>
```

For CSS variables, you can also use the `min-h-(<custom-property>)` syntax:

```html
<div class="min-h-(--my-min-height) ...">...</div>
```

This is just a shorthand for `min-h-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `min-height` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

The `min-h-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the [theme variable documentation](/docs/theme).