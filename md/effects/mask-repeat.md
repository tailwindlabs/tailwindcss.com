# mask-repeat

Utilities for controlling the repetition of an element

| Class               | Styles                    |
| ------------------- | ------------------------- |
| `mask-repeat`       | `mask-repeat: repeat;`    |
| `mask-no-repeat`    | `mask-repeat: no-repeat;` |
| `mask-repeat-x`     | `mask-repeat: repeat-x;`  |
| `mask-repeat-y`     | `mask-repeat: repeat-y;`  |
| `mask-repeat-space` | `mask-repeat: space;`     |
| `mask-repeat-round` | `mask-repeat: round;`     |

## Examples

### Basic example

Use the `mask-repeat` utility to repeat the mask image both vertically and horizontally:

```html
<div class="mask-repeat mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)] ..."></div>
```

### Repeating horizontally

Use the `mask-repeat-x` utility to only repeat the mask image horizontally:

```html
<div class="mask-repeat-x mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)]..."></div>
```

### Repeating vertically

Use the `mask-repeat-y` utility to only repeat the mask image vertically:

```html
<div class="mask-repeat-y mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)]..."></div>
```

### Preventing clipping

Use the `mask-repeat-space` utility to repeat the mask image without clipping:

```html
<div class="mask-repeat-space mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)] ..."></div>
```

### Preventing clipping and gaps

Use the `mask-repeat-round` utility to repeat the mask image without clipping, stretching if needed to avoid gaps:

```html
<div class="mask-repeat-round mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)] ..."></div>
```

### Disabling repeating

Use the `mask-no-repeat` utility to prevent a mask image from repeating:

```html
<div class="mask-no-repeat mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)] ..."></div>
```

Prefix a `mask-repeat` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).