# opacity

Utilities for controlling the opacity of an element.

| Class                         | Styles                             |
| ----------------------------- | ---------------------------------- |
| `opacity-<number>`            | `opacity: <number>%;`              |
| `opacity-(<custom-property>)` | `opacity: var(<custom-property>);` |
| `opacity-[<value>]`           | `opacity: <value>;`                |

## Examples

### Basic example

Use `opacity-<number>` utilities like `opacity-25` and `opacity-100` to set the opacity of an element:

```html
<button class="bg-indigo-500 opacity-100 ..."></button>
<button class="bg-indigo-500 opacity-75 ..."></button>
<button class="bg-indigo-500 opacity-50 ..."></button>
<button class="bg-indigo-500 opacity-25 ..."></button>
```

### Applying conditionally

Prefix an `opacity` utility with a variant like `hover:*` to only apply the utility in that state:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

### Using a custom value

Use the `opacity-[<value>]` syntax to set the opacity based on a completely custom value:

```html
<div class="opacity-[.67] ...">...</div>
```

For CSS variables, you can also use the `opacity-(<custom-property>)` syntax:

```html
<div class="opacity-(--my-opacity) ...">...</div>
```

This is just a shorthand for `opacity-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix an `opacity` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).