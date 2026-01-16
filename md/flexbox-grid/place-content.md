# place-content

Utilities for controlling how content is justified and aligned at the same time.

| Class                       | Styles                          |
| --------------------------- | ------------------------------- |
| `place-content-center`      | `place-content: center;`        |
| `place-content-center-safe` | `place-content: safe center;`   |
| `place-content-start`       | `place-content: start;`         |
| `place-content-end`         | `place-content: end;`           |
| `place-content-end-safe`    | `place-content: safe end;`      |
| `place-content-between`     | `place-content: space-between;` |
| `place-content-around`      | `place-content: space-around;`  |
| `place-content-evenly`      | `place-content: space-evenly;`  |
| `place-content-baseline`    | `place-content: baseline;`      |
| `place-content-stretch`     | `place-content: stretch;`       |

## Examples

### Center

Use `place-content-center` to pack items in the center of the inline and block axes:

```html
<div class="grid h-48 grid-cols-2 place-content-center gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Start

Use `place-content-start` to pack items against the start of the inline and block axes:

```html
<div class="grid h-48 grid-cols-2 place-content-start gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### End

Use `place-content-end` to pack items against the end of the inline and block axes:

```html
<div class="grid h-48 grid-cols-2 place-content-end gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space between

Use `place-content-between` to distribute grid items along the inline and block axes so that there is an equal amount of space between each row and column on each axis respectively:

```html
<div class="grid h-48 grid-cols-2 place-content-between gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space around

Use `place-content-around` to distribute grid items along the inline and block axes so that there is an equal amount of space around each row and column on each axis respectively:

```html
<div class="grid h-48 grid-cols-2 place-content-around gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Space evenly

Use `place-content-evenly` to distribute grid items such that they are evenly spaced on the inline and block axes:

```html
<div class="grid h-48 grid-cols-2 place-content-evenly gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### Stretch

Use `place-content-stretch` to stretch grid items along their grid areas on the inline and block axes:

```html
<div class="grid h-48 grid-cols-2 place-content-stretch gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

Prefix a `place-content` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).