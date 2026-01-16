# text-decoration-thickness

Utilities for controlling the thickness of text decorations.

| Class                                   | Styles                                               |
| --------------------------------------- | ---------------------------------------------------- |
| `decoration-<number>`                   | `text-decoration-thickness: <number>px;`             |
| `decoration-from-font`                  | `text-decoration-thickness: from-font;`              |
| `decoration-auto`                       | `text-decoration-thickness: auto;`                   |
| `decoration-(length:<custom-property>)` | `text-decoration-thickness: var(<custom-property>);` |
| `decoration-[<value>]`                  | `text-decoration-thickness: <value>;`                |

## Examples

### Basic example

Use `decoration-<number>` utilities like `decoration-2` and `decoration-4` to change the [text decoration](/docs/text-decoration-line) thickness of an element:

```html
<p class="underline decoration-1">The quick brown fox...</p>
<p class="underline decoration-2">The quick brown fox...</p>
<p class="underline decoration-4">The quick brown fox...</p>
```

### Using a custom value

Use the `decoration-[<value>]` syntax to set the text decoration thickness based on a completely custom value:

```html
<div class="decoration-[0.25rem] ...">...</div>
```

For CSS variables, you can also use the `decoration-(length:<custom-property>)` syntax:

```html
<div class="decoration-(length:--my-decoration-thickness) ...">...</div>
```

This is just a shorthand for `decoration-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `text-decoration-thickness` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).