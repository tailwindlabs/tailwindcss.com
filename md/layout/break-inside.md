# break-inside

Utilities for controlling how a column or page should break within an element.

| Class                       | Styles                        |
| --------------------------- | ----------------------------- |
| `break-inside-auto`         | `break-inside: auto;`         |
| `break-inside-avoid`        | `break-inside: avoid;`        |
| `break-inside-avoid-page`   | `break-inside: avoid-page;`   |
| `break-inside-avoid-column` | `break-inside: avoid-column;` |

## Examples

### Basic example

Use utilities like `break-inside-column` and `break-inside-avoid-page` to control how a column or page break should behave within an element:

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

Prefix a `break-inside` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).