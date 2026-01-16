# background-attachment

Utilities for controlling how a background image behaves when scrolling.

| Class       | Styles                           |
| ----------- | -------------------------------- |
| `bg-fixed`  | `background-attachment: fixed;`  |
| `bg-local`  | `background-attachment: local;`  |
| `bg-scroll` | `background-attachment: scroll;` |

## Examples

### Fixing the background image

Use the `bg-fixed` utility to fix the background image relative to the viewport:

```html
<div class="bg-[url(/img/mountains.jpg)] bg-fixed ...">
  <!-- ... -->
</div>
```

### Scrolling with the container

Use the `bg-local` utility to scroll the background image with the container and the viewport:

```html
<div class="bg-[url(/img/mountains.jpg)] bg-local ...">
  <!-- ... -->
</div>
```

### Scrolling with the viewport

Use the `bg-scroll` utility to scroll the background image with the viewport, but not with the container:

```html
<div class="bg-[url(/img/mountains.jpg)] bg-scroll ...">
  <!-- ... -->
</div>
```

Prefix a `background-attachment` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).