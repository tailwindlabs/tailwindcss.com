# align-items

| Class                 | Styles                        |
| --------------------- | ----------------------------- |
| `items-start`         | `align-items: flex-start;`    |
| `items-end`           | `align-items: flex-end;`      |
| `items-end-safe`      | `align-items: safe flex-end;` |
| `items-center`        | `align-items: center;`        |
| `items-center-safe`   | `align-items: safe center;`   |
| `items-baseline`      | `align-items: baseline;`      |
| `items-baseline-last` | `align-items: last baseline;` |
| `items-stretch`       | `align-items: stretch;`       |

## Examples

### Stretch

Use the `items-stretch` utility to stretch items to fill the container's cross axis:

```html
<div class="flex items-stretch ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
```

### Start

Use the `items-start` utility to align items to the start of the container's cross axis:

```html
<div class="flex items-start ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
```

### Center

Use the `items-center` utility to align items along the center of the container's cross axis:

```html
<div class="flex items-center ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
```

### End

Use the `items-end` utility to align items to the end of the container's cross axis:

```html
<div class="flex items-end ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
```

### Baseline

Use the `items-baseline` utility to align items along the container's cross axis such that all of their baselines align:

```html
<div class="flex items-baseline ...">
  <div class="pt-2 pb-6">01</div>
  <div class="pt-8 pb-12">02</div>
  <div class="pt-12 pb-4">03</div>
</div>
```

### Last baseline

Use the `items-baseline-last` utility to align items along the container's cross axis such that all of their baselines align with the last baseline in the container:

```html
<div class="grid grid-cols-[1fr_auto] items-baseline-last">
  <div>
    <img src="img/spencer-sharp.jpg" />
    <h4>Spencer Sharp</h4>
    <p>Working on the future of astronaut recruitment at Space Recruit.</p>
  </div>
  <p>spacerecruit.com</p>
</div>
```

This is useful for ensuring that text items align with each other, even if they have different heights.

Prefix an `align-items` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).