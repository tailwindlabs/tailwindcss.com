# grid-auto-columns

Utilities for controlling the size of implicitly-created grid columns.

| Class                           | Styles                                       |
| ------------------------------- | -------------------------------------------- |
| `auto-cols-auto`                | `grid-auto-columns: auto;`                   |
| `auto-cols-min`                 | `grid-auto-columns: min-content;`            |
| `auto-cols-max`                 | `grid-auto-columns: max-content;`            |
| `auto-cols-fr`                  | `grid-auto-columns: minmax(0, 1fr);`         |
| `auto-cols-(<custom-property>)` | `grid-auto-columns: var(<custom-property>);` |
| `auto-cols-[<value>]`           | `grid-auto-columns: <value>;`                |

## Examples

### Basic example

Use utilities like `auto-cols-min` and `auto-cols-max` to control the size of implicitly-created grid columns:

```html
<div class="grid auto-cols-max grid-flow-col">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Using a custom value

Use the `auto-cols-[<value>]` syntax to set the size of implicitly-created grid columns based on a completely custom value:

```html
<div class="auto-cols-[minmax(0,2fr)] ...">...</div>
```

For CSS variables, you can also use the `auto-cols-(<custom-property>)` syntax:

```html
<div class="auto-cols-(--my-auto-cols) ...">...</div>
```

This is just a shorthand for `auto-cols-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `grid-auto-columns` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).