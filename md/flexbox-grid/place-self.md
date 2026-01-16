# place-self

| Class                    | Styles                     |
| ------------------------ | -------------------------- |
| `place-self-auto`        | `place-self: auto;`        |
| `place-self-start`       | `place-self: start;`       |
| `place-self-end`         | `place-self: end;`         |
| `place-self-end-safe`    | `place-self: safe end;`    |
| `place-self-center`      | `place-self: center;`      |
| `place-self-center-safe` | `place-self: safe center;` |
| `place-self-stretch`     | `place-self: stretch;`     |

## Examples

### Auto

Use `place-self-auto` to align an item based on the value of the container's `place-items` property:

```html
<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="place-self-auto ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Start

Use `place-self-start` to align an item to the start on both axes:

```html
<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="place-self-start ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Center

Use `place-self-center` to align an item at the center on both axes:

```html
<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="place-self-center ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### End

Use `place-self-end` to align an item to the end on both axes:

```html
<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="place-self-end ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

### Stretch

Use `place-self-stretch` to stretch an item on both axes:

```html
<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="place-self-stretch ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

Prefix a `place-self` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).