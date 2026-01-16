# max-width

Utilities for setting the maximum width of an element.

| Class                       | Styles                                                                                                                                                                                                                                               |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `max-w-<number>`            | `max-width: calc(var(--spacing) * <number>);`                                                                                                                                                                                                        |
| `max-w-<fraction>`          | `max-width: calc(<fraction> * 100%);`                                                                                                                                                                                                                |
| `max-w-3xs`                 | `max-width: var(--container-3xs); /* 16rem (256px) */`                                                                                                                                                                                               |
| `max-w-2xs`                 | `max-width: var(--container-2xs); /* 18rem (288px) */`                                                                                                                                                                                               |
| `max-w-xs`                  | `max-width: var(--container-xs); /* 20rem (320px) */`                                                                                                                                                                                                |
| `max-w-sm`                  | `max-width: var(--container-sm); /* 24rem (384px) */`                                                                                                                                                                                                |
| `max-w-md`                  | `max-width: var(--container-md); /* 28rem (448px) */`                                                                                                                                                                                                |
| `max-w-lg`                  | `max-width: var(--container-lg); /* 32rem (512px) */`                                                                                                                                                                                                |
| `max-w-xl`                  | `max-width: var(--container-xl); /* 36rem (576px) */`                                                                                                                                                                                                |
| `max-w-2xl`                 | `max-width: var(--container-2xl); /* 42rem (672px) */`                                                                                                                                                                                               |
| `max-w-3xl`                 | `max-width: var(--container-3xl); /* 48rem (768px) */`                                                                                                                                                                                               |
| `max-w-4xl`                 | `max-width: var(--container-4xl); /* 56rem (896px) */`                                                                                                                                                                                               |
| `max-w-5xl`                 | `max-width: var(--container-5xl); /* 64rem (1024px) */`                                                                                                                                                                                              |
| `max-w-6xl`                 | `max-width: var(--container-6xl); /* 72rem (1152px) */`                                                                                                                                                                                              |
| `max-w-7xl`                 | `max-width: var(--container-7xl); /* 80rem (1280px) */`                                                                                                                                                                                              |
| `max-w-none`                | `max-width: none;`                                                                                                                                                                                                                                   |
| `max-w-px`                  | `max-width: 1px;`                                                                                                                                                                                                                                    |
| `max-w-full`                | `max-width: 100%;`                                                                                                                                                                                                                                   |
| `max-w-dvw`                 | `max-width: 100dvw;`                                                                                                                                                                                                                                 |
| `max-w-dvh`                 | `max-width: 100dvh;`                                                                                                                                                                                                                                 |
| `max-w-lvw`                 | `max-width: 100lvw;`                                                                                                                                                                                                                                 |
| `max-w-lvh`                 | `max-width: 100lvh;`                                                                                                                                                                                                                                 |
| `max-w-svw`                 | `max-width: 100svw;`                                                                                                                                                                                                                                 |
| `max-w-svh`                 | `max-width: 100svh;`                                                                                                                                                                                                                                 |
| `max-w-screen`              | `max-width: 100vw;`                                                                                                                                                                                                                                  |
| `max-w-min`                 | `max-width: min-content;`                                                                                                                                                                                                                            |
| `max-w-max`                 | `max-width: max-content;`                                                                                                                                                                                                                            |
| `max-w-fit`                 | `max-width: fit-content;`                                                                                                                                                                                                                            |
| `container`                 | `width: 100%;
@media (width >= 40rem) { max-width: 40rem; }
@media (width >= 48rem) { max-width: 48rem; }
@media (width >= 64rem) { max-width: 64rem; }
@media (width >= 80rem) { max-width: 80rem; }
@media (width >= 96rem) { max-width: 96rem; }` |
| `max-w-(<custom-property>)` | `max-width: var(<custom-property>);`                                                                                                                                                                                                                 |
| `max-w-[<value>]`           | `max-width: <value>;`                                                                                                                                                                                                                                |

## Examples

### Basic example

Use `max-w-<number>` utilities like `max-w-24` and `max-w-64` to set an element to a fixed maximum width based on the spacing scale:

```html
<div class="w-full max-w-96 ...">max-w-96</div>
<div class="w-full max-w-80 ...">max-w-80</div>
<div class="w-full max-w-64 ...">max-w-64</div>
<div class="w-full max-w-48 ...">max-w-48</div>
<div class="w-full max-w-40 ...">max-w-40</div>
<div class="w-full max-w-32 ...">max-w-32</div>
<div class="w-full max-w-24 ...">max-w-24</div>
```

### Using a percentage

Use `max-w-full` or `max-w-<fraction>` utilities like `max-w-1/2` and `max-w-2/5` to give an element a percentage-based maximum width:

```html
<div class="w-full max-w-9/10 ...">max-w-9/10</div>
<div class="w-full max-w-3/4 ...">max-w-3/4</div>
<div class="w-full max-w-1/2 ...">max-w-1/2</div>
<div class="w-full max-w-1/3 ...">max-w-1/3</div>
```

### Using the container scale

Use utilities like `max-w-sm` and `max-w-xl` to set an element to a fixed maximum width based on the container scale:

```html
<div class="max-w-md ...">
  <!-- ... -->
</div>
```

### Using breakpoints container

Use the `container` utility to set the maximum width of an element to match the `min-width` of the current breakpoint. This is useful if you'd prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport:

```html
<div class="container">
  <!-- ... -->
</div>
```

Note that unlike containers you might have used in other frameworks, Tailwind's container does not center itself automatically and does not have any built-in horizontal padding. Use `mx-auto` and the `px-<number>` utilities to add these:

```html
<div class="container mx-auto px-4">
  <!-- ... -->
</div>
```

### Using a custom value

Use the `max-w-[<value>]` syntax to set the maximum width based on a completely custom value:

```html
<div class="max-w-[220px] ...">...</div>
```

For CSS variables, you can also use the `max-w-(<custom-property>)` syntax:

```html
<div class="max-w-(--my-max-width) ...">...</div>
```

This is just a shorthand for `max-w-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `max-width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

The `max-w-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the [theme variable documentation](/docs/theme).