# scroll-snap-type

Utilities for controlling how strictly snap points are enforced in a snap container.

| Class            | Styles                                                     |
| ---------------- | ---------------------------------------------------------- |
| `snap-none`      | `scroll-snap-type: none;`                                  |
| `snap-x`         | `scroll-snap-type: x var(--tw-scroll-snap-strictness);`    |
| `snap-y`         | `scroll-snap-type: y var(--tw-scroll-snap-strictness);`    |
| `snap-both`      | `scroll-snap-type: both var(--tw-scroll-snap-strictness);` |
| `snap-mandatory` | `--tw-scroll-snap-strictness: mandatory;`                  |
| `snap-proximity` | `--tw-scroll-snap-strictness: proximity;`                  |

## Examples

### Horizontal scroll snapping

Use the `snap-x` utility to enable horizontal scroll snapping within an element:

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

For scroll snapping to work, you need to also set the [scroll snap alignment](/docs/scroll-snap-align) on the children.

### Mandatory scroll snapping

Use the `snap-mandatory` utility to force a snap container to always come to rest on a snap point:

```html
<div class="snap-x snap-mandatory ...">
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

### Proximity scroll snapping

Use the `snap-proximity` utility to make a snap container come to rest on snap points that are close in proximity:

```html
<div class="snap-x snap-proximity ...">
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
</div>
```

Prefix a `scroll-snap-type` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).