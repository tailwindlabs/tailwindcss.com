# background-repeat

Utilities for controlling the repetition of an element

| Class             | Styles                          |
| ----------------- | ------------------------------- |
| `bg-repeat`       | `background-repeat: repeat;`    |
| `bg-repeat-x`     | `background-repeat: repeat-x;`  |
| `bg-repeat-y`     | `background-repeat: repeat-y;`  |
| `bg-repeat-space` | `background-repeat: space;`     |
| `bg-repeat-round` | `background-repeat: round;`     |
| `bg-no-repeat`    | `background-repeat: no-repeat;` |

## Examples

### Basic example

Use the `bg-repeat` utility to repeat the background image both vertically and horizontally:

```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat ..."></div>
```

### Repeating horizontally

Use the `bg-repeat-x` utility to only repeat the background image horizontally:

```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-x ..."></div>
```

### Repeating vertically

Use the `bg-repeat-y` utility to only repeat the background image vertically:

```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-y ..."></div>
```

### Preventing clipping

Use the `bg-repeat-space` utility to repeat the background image without clipping:

```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-space ..."></div>
```

### Preventing clipping and gaps

Use the `bg-repeat-round` utility to repeat the background image without clipping, stretching if needed to avoid gaps:

```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-round ..."></div>
```

### Disabling repeating

Use the `bg-no-repeat` utility to prevent a background image from repeating:

```html
<div class="bg-[url(/img/clouds.svg)] bg-center bg-no-repeat ..."></div>
```

Prefix a `background-repeat` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).