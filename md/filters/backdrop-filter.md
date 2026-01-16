# backdrop-filter

Utilities for applying backdrop filters to an element.

| Class                                 | Styles                                     |
| ------------------------------------- | ------------------------------------------ |
| `backdrop-filter-none`                | `backdrop-filter: none;`                   |
| `backdrop-filter-(<custom-property>)` | `backdrop-filter: var(<custom-property>);` |
| `backdrop-filter-[<value>]`           | `backdrop-filter: <value>;`                |

## Examples

### Basic example

Use utilities like `backdrop-blur-xs` and `backdrop-grayscale` to apply filters to an element's backdrop:

```html
<div class="bg-[url(/img/mountains.jpg)] ...">
  <div class="backdrop-blur-xs ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)] ...">
  <div class="backdrop-grayscale ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)] ...">
  <div class="backdrop-blur-xs backdrop-grayscale ..."></div>
</div>
```

You can combine the following backdrop filter utilities: [blur](/docs/backdrop-filter-blur), [brightness](/docs/backdrop-filter-brightness), [contrast](/docs/backdrop-filter-contrast), [grayscale](/docs/backdrop-filter-grayscale), [hue-rotate](/docs/backdrop-filter-hue-rotate), [invert](/docs/backdrop-filter-invert), [opacity](/docs/backdrop-filter-opacity), [saturate](/docs/backdrop-filter-saturate), and [sepia](/docs/backdrop-filter-sepia).

### Removing filters

Use the `backdrop-filter-none` utility to remove all of the backdrop filters applied to an element:

```html
<div class="backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none"></div>
```

### Using a custom value

Use the `backdrop-filter-[<value>]` syntax to set the backdrop filter based on a completely custom value:

```html
<div class="backdrop-filter-[url('filters.svg#filter-id')] ...">...</div>
```

For CSS variables, you can also use the `backdrop-filter-(<custom-property>)` syntax:

```html
<div class="backdrop-filter-(--my-backdrop-filter) ...">...</div>
```

This is just a shorthand for `backdrop-filter-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### Applying on hover

Prefix a `backdrop-filter` utility with a variant like `hover:*` to only apply the utility in that state:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

Prefix a `backdrop-filter` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).