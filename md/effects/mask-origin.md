# mask-origin

| Class                 | Styles                      |
| --------------------- | --------------------------- |
| `mask-origin-border`  | `mask-origin: border-box;`  |
| `mask-origin-padding` | `mask-origin: padding-box;` |
| `mask-origin-content` | `mask-origin: content-box;` |
| `mask-origin-fill`    | `mask-origin: fill-box;`    |
| `mask-origin-stroke`  | `mask-origin: stroke-box;`  |
| `mask-origin-view`    | `mask-origin: view-box;`    |

## Examples

### Basic example

Use utilities like `mask-origin-border`, `mask-origin-padding`, and `mask-origin-content` to control where an element's mask is rendered:

```html
<div class="mask-origin-border border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-origin-padding border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-origin-content border-3 p-1.5 mask-[url(/img/circle.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

Prefix a `mask-origin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).