# position

Utilities for controlling how an element is positioned in the document.

| Class      | Styles                |
| ---------- | --------------------- |
| `static`   | `position: static;`   |
| `fixed`    | `position: fixed;`    |
| `absolute` | `position: absolute;` |
| `relative` | `position: relative;` |
| `sticky`   | `position: sticky;`   |

## Examples

### Statically positioning elements

Use the `static` utility to position an element according to the normal flow of the document:

```html
<div class="static ...">
  <p>Static parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

With statically positioned elements, any [offsets](/docs/top-right-bottom-left) will be ignored and the element will not act as a position reference for absolutely positioned children.

### Relatively positioning elements

Use the `relative` utility to position an element according to the normal flow of the document:

```html
<div class="relative ...">
  <p>Relative parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

With relatively position elements, any [offsets](/docs/top-right-bottom-left) are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.

### Absolutely positioning elements

Use the `absolute` utility to position an element _outside_ of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist:

```html
<div class="static ...">
  <!-- Static parent -->
  <div class="static ..."><p>Static child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
  <!-- Static parent -->
  <div class="absolute ..."><p>Absolute child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
</div>
```

With absolutely positioned elements, any [offsets](/docs/top-right-bottom-left) are calculated relative to the nearest parent that has a position other than `static`, and the element will act as a position reference for other absolutely positioned children.

### Fixed positioning elements

Use the `fixed` utility to position an element relative to the browser window:

```html
<div class="relative">
  <div class="fixed top-0 right-0 left-0">Contacts</div>
  <div>
    <div>
      <img src="/img/andrew.jpg" />
      <strong>Andrew Alfred</strong>
    </div>
    <div>
      <img src="/img/debra.jpg" />
      <strong>Debra Houston</strong>
    </div>
    <!-- ... -->
  </div>
</div>
```

With fixed positioned elements, any [offsets](/docs/top-right-bottom-left) are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children:

### Sticky positioning elements

Use the `sticky` utility to position an element as `relative` until it crosses a specified threshold, then treat it as `fixed` until its parent is off screen:

```html
<div>
  <div>
    <div class="sticky top-0 ...">A</div>
    <div>
      <div>
        <img src="/img/andrew.jpg" />
        <strong>Andrew Alfred</strong>
      </div>
      <div>
        <img src="/img/aisha.jpg" />
        <strong>Aisha Houston</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <div>
    <div class="sticky top-0">B</div>
    <div>
      <div>
        <img src="/img/bob.jpg" />
        <strong>Bob Alfred</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <!-- ... -->
</div>
```

With sticky positioned elements, any [offsets](/docs/top-right-bottom-left) are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.

Prefix a `position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).