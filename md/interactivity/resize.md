# resize

Utilities for controlling how an element can be resized.

| Class         | Styles                |
| ------------- | --------------------- |
| `resize-none` | `resize: none;`       |
| `resize`      | `resize: both;`       |
| `resize-y`    | `resize: vertical;`   |
| `resize-x`    | `resize: horizontal;` |

## Examples

### Resizing in all directions

Use `resize` to make an element horizontally and vertically resizable:

```html
<textarea class="resize rounded-md ..."></textarea>
```

### Resizing vertically

Use `resize-y` to make an element vertically resizable:

```html
<textarea class="resize-y rounded-md ..."></textarea>
```

### Resizing horizontally

Use `resize-x` to make an element horizontally resizable:

```html
<textarea class="resize-x rounded-md ..."></textarea>
```

### Prevent resizing

Use `resize-none` to prevent an element from being resizable:

```html
<textarea class="resize-none rounded-md"></textarea>
```

Prefix a `resize` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).