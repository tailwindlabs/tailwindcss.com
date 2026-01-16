# text-decoration-style

Utilities for controlling the style of text decorations.

| Class               | Styles                           |
| ------------------- | -------------------------------- |
| `decoration-solid`  | `text-decoration-style: solid;`  |
| `decoration-double` | `text-decoration-style: double;` |
| `decoration-dotted` | `text-decoration-style: dotted;` |
| `decoration-dashed` | `text-decoration-style: dashed;` |
| `decoration-wavy`   | `text-decoration-style: wavy;`   |

## Examples

### Basic example

Use utilities like `decoration-dotted` and `decoration-dashed` to change the [text decoration](/docs/text-decoration-line) style of an element:

```html
<p class="underline decoration-solid">The quick brown fox...</p>
<p class="underline decoration-double">The quick brown fox...</p>
<p class="underline decoration-dotted">The quick brown fox...</p>
<p class="underline decoration-dashed">The quick brown fox...</p>
<p class="underline decoration-wavy">The quick brown fox...</p>
```

Prefix a `text-decoration-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).