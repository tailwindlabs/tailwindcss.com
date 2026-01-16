# font-style

Utilities for controlling the style of text.

| Class        | Styles                |
| ------------ | --------------------- |
| `italic`     | `font-style: italic;` |
| `not-italic` | `font-style: normal;` |

## Examples

### Italicizing text

Use the `italic` utility to make text italic:

```html
<p class="italic ...">The quick brown fox ...</p>
```

### Displaying text normally

Use the `not-italic` utility to display text normally:

```html
<p class="not-italic ...">The quick brown fox ...</p>
```

Prefix a `font-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).