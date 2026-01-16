# font-smoothing

Utilities for controlling the font smoothing of an element.

| Class                  | Styles                                                                     |
| ---------------------- | -------------------------------------------------------------------------- |
| `antialiased`          | `-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;` |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto;
-moz-osx-font-smoothing: auto;`             |

## Examples

### Grayscale antialiasing

Use the `antialiased` utility to render text using grayscale antialiasing:

```html
<p class="antialiased ...">The quick brown fox ...</p>
```

### Subpixel antialiasing

Use the `subpixel-antialiased` utility to render text using subpixel antialiasing:

```html
<p class="subpixel-antialiased ...">The quick brown fox ...</p>
```

Prefix `-webkit-font-smoothing` and `-moz-osx-font-smoothing` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).