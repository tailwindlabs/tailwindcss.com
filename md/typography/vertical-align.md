# vertical-align

Utilities for controlling the vertical alignment of an inline or table-cell box.

| Class                       | Styles                                    |
| --------------------------- | ----------------------------------------- |
| `align-baseline`            | `vertical-align: baseline;`               |
| `align-top`                 | `vertical-align: top;`                    |
| `align-middle`              | `vertical-align: middle;`                 |
| `align-bottom`              | `vertical-align: bottom;`                 |
| `align-text-top`            | `vertical-align: text-top;`               |
| `align-text-bottom`         | `vertical-align: text-bottom;`            |
| `align-sub`                 | `vertical-align: sub;`                    |
| `align-super`               | `vertical-align: super;`                  |
| `align-(<custom-property>)` | `vertical-align: var(<custom-property>);` |
| `align-[<value>]`           | `vertical-align: <value>;`                |

## Examples

### Aligning to baseline

Use the `align-baseline` utility to align the baseline of an element with the baseline of its parent:

```html
<span class="inline-block align-baseline">The quick brown fox...</span>
```

### Aligning to top

Use the `align-top` utility to align the top of an element and its descendants with the top of the entire line:

```html
<span class="inline-block align-top">The quick brown fox...</span>
```

### Aligning to middle

Use the `align-middle` utility to align the middle of an element with the baseline plus half the x-height of the parent:

```html
<span class="inline-block align-middle">The quick brown fox...</span>
```

### Aligning to bottom

Use the `align-bottom` utility to align the bottom of an element and its descendants with the bottom of the entire line:

```html
<span class="inline-block align-bottom">The quick brown fox...</span>
```

### Aligning to parent top

Use the `align-text-top` utility to align the top of an element with the top of the parent element's font:

```html
<span class="inline-block align-text-top">The quick brown fox...</span>
```

### Aligning to parent bottom

Use the `align-text-bottom` utility to align the bottom of an element with the bottom of the parent element's font:

```html
<span class="inline-block align-text-bottom">The quick brown fox...</span>
```

### Using a custom value

Use the `align-[<value>]` syntax to set the vertical alignment based on a completely custom value:

```html
<div class="align-[4px] ...">...</div>
```

For CSS variables, you can also use the `align-(<custom-property>)` syntax:

```html
<div class="align-(--my-alignment) ...">...</div>
```

This is just a shorthand for `align-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `vertical-align` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).