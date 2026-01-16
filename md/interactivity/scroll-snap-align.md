# scroll-snap-align

Utilities for controlling the scroll snap alignment of an element.

| Class             | Styles                       |
| ----------------- | ---------------------------- |
| `snap-start`      | `scroll-snap-align: start;`  |
| `snap-end`        | `scroll-snap-align: end;`    |
| `snap-center`     | `scroll-snap-align: center;` |
| `snap-align-none` | `scroll-snap-align: none;`   |

## Examples

### Snapping to the center

Use the `snap-center` utility to snap an element to its center when being scrolled inside a snap container:

```html
<div class="snap-x ...">
  <div class="snap-center ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

### Snapping to the start

Use the `snap-start` utility to snap an element to its start when being scrolled inside a snap container:

```html

<div class="snap-x ...">
  <div class="snap-start ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

### Snapping to the end

Use the `snap-end` utility to snap an element to its end when being scrolled inside a snap container:

```html
<div class="snap-x ...">
  <div class="snap-end ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

Prefix a `scroll-snap-align` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).