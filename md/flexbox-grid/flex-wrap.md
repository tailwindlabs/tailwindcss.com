# flex-wrap

Utilities for controlling how flex items wrap.

| Class               | Styles                     |
| ------------------- | -------------------------- |
| `flex-nowrap`       | `flex-wrap: nowrap;`       |
| `flex-wrap`         | `flex-wrap: wrap;`         |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse;` |

## Examples

### Don't wrap

Use `flex-nowrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:

```html
<div class="flex flex-nowrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Wrap normally

Use `flex-wrap` to allow flex items to wrap:

```html
<div class="flex flex-wrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Wrap reversed

Use `flex-wrap-reverse` to wrap flex items in the reverse direction:

```html
<div class="flex flex-wrap-reverse">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Prefix a `flex-wrap` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).