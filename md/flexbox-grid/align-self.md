# align-self

| Class                | Styles                       |
| -------------------- | ---------------------------- |
| `self-auto`          | `align-self: auto;`          |
| `self-start`         | `align-self: flex-start;`    |
| `self-end`           | `align-self: flex-end;`      |
| `self-end-safe`      | `align-self: safe flex-end;` |
| `self-center`        | `align-self: center;`        |
| `self-center-safe`   | `align-self: safe center;`   |
| `self-stretch`       | `align-self: stretch;`       |
| `self-baseline`      | `align-self: baseline;`      |
| `self-baseline-last` | `align-self: last baseline;` |

## Examples

### Auto

Use the `self-auto` utility to align an item based on the value of the container's `align-items` property:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-auto ...">02</div>
  <div>03</div>
</div>
```

### Start

Use the `self-start` utility to align an item to the start of the container's cross axis, despite the container's `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-start ...">02</div>
  <div>03</div>
</div>
```

### Center

Use the `self-center` utility to align an item along the center of the container's cross axis, despite the container's `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-center ...">02</div>
  <div>03</div>
</div>
```

### End

Use the `self-end` utility to align an item to the end of the container's cross axis, despite the container's `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-end ...">02</div>
  <div>03</div>
</div>
```

### Stretch

Use the `self-stretch` utility to stretch an item to fill the container's cross axis, despite the container's `align-items` value:

```html
<div class="flex items-stretch ...">
  <div>01</div>
  <div class="self-stretch ...">02</div>
  <div>03</div>
</div>
```

### Baseline

Use the `self-baseline` utility to align an item such that its baseline aligns with the baseline of the flex container's cross axis:

```html
<div class="flex ...">
  <div class="self-baseline pt-2 pb-6">01</div>
  <div class="self-baseline pt-8 pb-12">02</div>
  <div class="self-baseline pt-12 pb-4">03</div>
</div>
```

### Last baseline

Use the `self-baseline-last` utility to align an item along the container's cross axis such that its baseline aligns with the last baseline in the container:

```html
<div class="grid grid-cols-[1fr_auto]">
  <div>
    <img src="img/spencer-sharp.jpg" />
    <h4>Spencer Sharp</h4>
    <p class="self-baseline-last">Working on the future of astronaut recruitment at Space Recruit.</p>
  </div>
  <p class="self-baseline-last">spacerecruit.com</p>
</div>
```

This is useful for ensuring that text items align with each other, even if they have different heights.

Prefix an `align-self` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).