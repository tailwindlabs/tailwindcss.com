# hyphens

Utilities for controlling how words should be hyphenated.

| Class            | Styles             |
| ---------------- | ------------------ |
| `hyphens-none`   | `hyphens: none;`   |
| `hyphens-manual` | `hyphens: manual;` |
| `hyphens-auto`   | `hyphens: auto;`   |

## Examples

### Preventing hyphenation

Use the `hyphens-none` utility to prevent words from being hyphenated even if the line break suggestion `&shy;` is used:

```html
<p class="hyphens-none">
  ... Kraftfahrzeug&shy;haftpflichtversicherung is a ...
</p>
```

### Manual hyphenation

Use the `hyphens-manual` utility to only set hyphenation points where the line break suggestion `&shy;` is used:

```html
<p class="hyphens-manual">
  ... Kraftfahrzeug&shy;haftpflichtversicherung is a ...
</p>
```

This is the default browser behavior.

### Automatic hyphenation

Use the `hyphens-auto` utility to allow the browser to automatically choose hyphenation points based on the language:

```html
<p class="hyphens-auto" lang="de">
  ... Kraftfahrzeughaftpflichtversicherung is a ...
</p>
```

The line break suggestion `&shy;` will be preferred over automatic hyphenation points.

Prefix a `hyphens` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).