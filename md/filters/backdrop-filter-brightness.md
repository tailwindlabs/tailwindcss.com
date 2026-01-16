# backdrop-filter: brightness()

Utilities for applying backdrop brightness filters to an element.

| Class                                     | Styles                                                 |
| ----------------------------------------- | ------------------------------------------------------ |
| `backdrop-brightness-<number>`            | `backdrop-filter: brightness(<number>%);`              |
| `backdrop-brightness-(<custom-property>)` | `backdrop-filter: brightness(var(<custom-property>));` |
| `backdrop-brightness-[<value>]`           | `backdrop-filter: brightness(<value>);`                |

## Examples

### Basic example

Use utilities like `backdrop-brightness-50` and `backdrop-brightness-100` to control an element's backdrop brightness:

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-brightness-50 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-brightness-150 ..."></div>
</div>
```

### Using a custom value

Use the `backdrop-brightness-[<value>]` syntax to set the backdrop brightness based on a completely custom value:

```html
<div class="backdrop-brightness-[1.75] ...">...</div>
```

For CSS variables, you can also use the `backdrop-brightness-(<custom-property>)` syntax:

```html
<div class="backdrop-brightness-(--my-backdrop-brightness) ...">...</div>
```

This is just a shorthand for `backdrop-brightness-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `backdrop-filter: brightness()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).