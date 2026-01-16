# text-overflow

Utilities for controlling how the text of an element overflows.

| Class           | Styles                                                            |
| --------------- | ----------------------------------------------------------------- |
| `truncate`      | `overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;` |
| `text-ellipsis` | `text-overflow: ellipsis;`                                        |
| `text-clip`     | `text-overflow: clip;`                                            |

## Examples

### Truncating text

Use the `truncate` utility to prevent text from wrapping and truncate overflowing text with an ellipsis (…) if needed:

```html
<p class="truncate">The longest word in any of the major...</p>
```

### Adding an ellipsis

Use the `text-ellipsis` utility to truncate overflowing text with an ellipsis (…) if needed:

```html
<p class="overflow-hidden text-ellipsis">The longest word in any of the major...</p>
```

### Clipping text

Use the `text-clip` utility to truncate the text at the limit of the content area:

```html
<p class="overflow-hidden text-clip">The longest word in any of the major...</p>
```

This is the default browser behavior.

Prefix a `text-overflow` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).