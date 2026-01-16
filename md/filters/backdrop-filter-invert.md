# backdrop-filter: invert()

Utilities for applying backdrop invert filters to an element.

| Class                                 | Styles                                            |
| ------------------------------------- | ------------------------------------------------- |
| `backdrop-invert`                     | `backdrop-filter: invert(100%);`                  |
| `backdrop-invert-<number>`            | `backdrop-filter: invert(<number>%);`             |
| `backdrop-invert-(<custom-property>)` | `backdrop-filter: invert(var(<custom-property>))` |
| `backdrop-invert-[<value>]`           | `backdrop-filter: invert(<value>);`               |

## Examples

### Basic example

Use utilities like `backdrop-invert` and `backdrop-invert-65` to control the color inversion of an element's backdrop:

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-invert-0 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-invert-65 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-invert ..."></div>
</div>
```

### Using a custom value

Use the `backdrop-invert-[<value>]` syntax to set the backdrop inversion based on a completely custom value:

```html
<div class="backdrop-invert-[.25] ...">...</div>
```

For CSS variables, you can also use the `backdrop-invert-(<custom-property>)` syntax:

```html
<div class="backdrop-invert-(--my-backdrop-inversion) ...">...</div>
```

This is just a shorthand for `backdrop-invert-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `backdrop-filter: invert()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).