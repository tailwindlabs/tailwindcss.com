# break-before

Utilities for controlling how a column or page should break before an element.

| Class                     | Styles                      |
| ------------------------- | --------------------------- |
| `break-before-auto`       | `break-before: auto;`       |
| `break-before-avoid`      | `break-before: avoid;`      |
| `break-before-all`        | `break-before: all;`        |
| `break-before-avoid-page` | `break-before: avoid-page;` |
| `break-before-page`       | `break-before: page;`       |
| `break-before-left`       | `break-before: left;`       |
| `break-before-right`      | `break-before: right;`      |
| `break-before-column`     | `break-before: column;`     |

## Examples

### Basic example

Use utilities like `break-before-column` and `break-before-page` to control how a column or page break should behave before an element:

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-before-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

Prefix a `break-before` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).