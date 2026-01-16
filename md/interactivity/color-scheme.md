# color-scheme

Utilities for controlling the color scheme of an element.

| Class               | Styles                      |
| ------------------- | --------------------------- |
| `scheme-normal`     | `color-scheme: normal;`     |
| `scheme-dark`       | `color-scheme: dark;`       |
| `scheme-light`      | `color-scheme: light;`      |
| `scheme-light-dark` | `color-scheme: light dark;` |
| `scheme-only-dark`  | `color-scheme: only dark;`  |
| `scheme-only-light` | `color-scheme: only light;` |

## Examples

### Basic example

Use utilities like `scheme-light` and `scheme-light-dark` to control how element should be rendered:

```html
<div class="scheme-light ...">
  <input type="date" />
</div>

<div class="scheme-dark ...">
  <input type="date" />
</div>

<div class="scheme-light-dark ...">
  <input type="date" />
</div>
```

### Applying in dark mode

Prefix a `color-scheme` utility with a variant like `hover:*` to only apply the utility in that state:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).