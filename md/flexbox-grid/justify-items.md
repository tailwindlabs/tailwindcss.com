# justify-items

Utilities for controlling how grid items are aligned along their inline axis.

| Class                       | Styles                        |
| --------------------------- | ----------------------------- |
| `justify-items-start`       | `justify-items: start;`       |
| `justify-items-end`         | `justify-items: end;`         |
| `justify-items-end-safe`    | `justify-items: safe end;`    |
| `justify-items-center`      | `justify-items: center;`      |
| `justify-items-center-safe` | `justify-items: safe center;` |
| `justify-items-stretch`     | `justify-items: stretch;`     |
| `justify-items-normal`      | `justify-items: normal;`      |

## Examples

### Start

Use the `justify-items-start` utility to justify grid items against the start of their inline axis:

```html
<div class="grid justify-items-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### End

Use the `justify-items-end` or `justify-items-end-safe` utilities to justify grid items against the end of their inline axis:

```html
<div class="grid grid-flow-col justify-items-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

```html
<div class="grid grid-flow-col justify-items-end-safe ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

When there is not enough space available, the `justify-items-end-safe` utility will align items to the start of the container instead of the end.

### Center

Use the `justify-items-center` or `justify-items-center-safe` utilities to justify grid items against the end of their inline axis:

```html
<div class="grid grid-flow-col justify-items-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

```html
<div class="grid grid-flow-col justify-items-center-safe ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

When there is not enough space available, the `justify-items-center-safe` utility will align items to the start of the container instead of the center.

### Stretch

Use the `justify-items-stretch` utility to stretch items along their inline axis:

```html
<div class="grid justify-items-stretch ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

Prefix a `justify-items` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).