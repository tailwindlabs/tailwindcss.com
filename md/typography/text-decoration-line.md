# text-decoration-line

Utilities for controlling the decoration of text.

| Class          | Styles                                |
| -------------- | ------------------------------------- |
| `underline`    | `text-decoration-line: underline;`    |
| `overline`     | `text-decoration-line: overline;`     |
| `line-through` | `text-decoration-line: line-through;` |
| `no-underline` | `text-decoration-line: none;`         |

## Examples

### Underling text

Use the `underline` utility to add an underline to the text of an element:

```html
<p class="underline">The quick brown fox...</p>
```

### Adding an overline to text

Use the `overline` utility to add an overline to the text of an element:

```html
<p class="overline">The quick brown fox...</p>
```

### Adding a line through text

Use the `line-through` utility to add a line through the text of an element:

```html
<p class="line-through">The quick brown fox...</p>
```

### Removing a line from text

Use the `no-underline` utility to remove a line from the text of an element:

```html
<p class="no-underline">The quick brown fox...</p>
```

### Applying on hover

Prefix a `text-decoration-line` utility with a variant like `hover:*` to only apply the utility in that state:

```html
<p>The <a href="..." class="no-underline hover:underline ...">quick brown fox</a> jumps over the lazy dog.</p>
```

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

Prefix a `text-decoration-line` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).