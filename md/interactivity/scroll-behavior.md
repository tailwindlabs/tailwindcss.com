# scroll-behavior

Utilities for controlling the scroll behavior of an element.

| Class           | Styles                     |
| --------------- | -------------------------- |
| `scroll-auto`   | `scroll-behavior: auto;`   |
| `scroll-smooth` | `scroll-behavior: smooth;` |

## Examples

### Using smooth scrolling

Use the `scroll-smooth` utility to enable smooth scrolling within an element:

```html
<html class="scroll-smooth">
  <!-- ... -->
</html>
```

Setting the `scroll-behavior` only affects scroll events that are triggered by the browser.

### Using normal scrolling

Use the `scroll-auto` utility to revert to the default browser behavior for scrolling:

```html
<html class="scroll-smooth md:scroll-auto">
  <!-- ... -->
</html>
```