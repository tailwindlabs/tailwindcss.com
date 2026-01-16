# backdrop-filter: grayscale()

Utilities for applying backdrop grayscale filters to an element.

| Class                                    | Styles                                                |
| ---------------------------------------- | ----------------------------------------------------- |
| `backdrop-grayscale`                     | `backdrop-filter: grayscale(100%);`                   |
| `backdrop-grayscale-<number>`            | `backdrop-filter: grayscale(<number>%);`              |
| `backdrop-grayscale-(<custom-property>)` | `backdrop-filter: grayscale(var(<custom-property>));` |
| `backdrop-grayscale-[<value>]`           | `backdrop-filter: grayscale(<value>);`                |

## Examples

### Basic example

Use utilities like `backdrop-grayscale-50` and `backdrop-grayscale` to control the grayscale effect applied to an element's backdrop:

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-grayscale-0 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-grayscale-50 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-grayscale-200 ..."></div>
</div>
```

### Using a custom value

Use the `backdrop-grayscale-[<value>]` syntax to set the backdrop grayscale based on a completely custom value:

```html
<div class="backdrop-grayscale-[0.5] ...">...</div>
```

For CSS variables, you can also use the `backdrop-grayscale-(<custom-property>)` syntax:

```html
<div class="backdrop-grayscale-(--my-backdrop-grayscale) ...">...</div>
```

This is just a shorthand for `backdrop-grayscale-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `backdrop-filter: grayscale()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).