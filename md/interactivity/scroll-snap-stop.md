# scroll-snap-stop

Utilities for controlling whether you can skip past possible snap positions.

| Class         | Styles                      |
| ------------- | --------------------------- |
| `snap-normal` | `scroll-snap-stop: normal;` |
| `snap-always` | `scroll-snap-stop: always;` |

## Examples

### Forcing snap position stops

Use the `snap-always` utility together with the [snap-mandatory](/docs/scroll-snap-type#mandatory-scroll-snapping) utility to force a snap container to always stop on an element before the user can continue scrolling to the next item:

```html
<div class="snap-x snap-mandatory ...">
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-center snap-always ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

### Skipping snap position stops

Use the `snap-normal` utility to allow a snap container to skip past possible scroll snap positions:

```html
<div class="snap-x ...">
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-center snap-normal ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

Prefix a `scroll-snap-stop` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).