# mask-composite

Utilities for controlling how multiple masks are combined together.

| Class            | Styles                       |
| ---------------- | ---------------------------- |
| `mask-add`       | `mask-composite: add;`       |
| `mask-subtract`  | `mask-composite: subtract;`  |
| `mask-intersect` | `mask-composite: intersect;` |
| `mask-exclude`   | `mask-composite: exclude;`   |

## Examples

### Basic example

Use utilities like `mask-add` and `mask-intersect` to control how an element's masks are combined together:

```html
<div class="mask-add mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div>
<div class="mask-subtract mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div>
<div class="mask-intersect mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div>
<div class="mask-exclude mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div>
```

Prefix a `mask-composite` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).