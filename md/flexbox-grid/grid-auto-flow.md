# grid-auto-flow

Utilities for controlling how elements in a grid are auto-placed.

| Class                 | Styles                          |
| --------------------- | ------------------------------- |
| `grid-flow-row`       | `grid-auto-flow: row;`          |
| `grid-flow-col`       | `grid-auto-flow: column;`       |
| `grid-flow-dense`     | `grid-auto-flow: dense;`        |
| `grid-flow-row-dense` | `grid-auto-flow: row dense;`    |
| `grid-flow-col-dense` | `grid-auto-flow: column dense;` |

## Examples

### Basic example

Use utilities like `grid-flow-col` and `grid-flow-row-dense` to control how the auto-placement algorithm works for a grid layout:

```html
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

Prefix a `grid-auto-flow` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).