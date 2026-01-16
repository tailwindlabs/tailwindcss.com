# font-family

Utilities for controlling the font family of an element.

| Class                                  | Styles                                                                                                                                                    |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `font-sans`                            | `font-family: var(--font-sans); /* ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' */` |
| `font-serif`                           | `font-family: var(--font-serif); /* ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif */`                                                       |
| `font-mono`                            | `font-family: var(--font-mono); /* ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace */`                 |
| `font-(family-name:<custom-property>)` | `font-family: var(<custom-property>);`                                                                                                                    |
| `font-[<value>]`                       | `font-family: <value>;`                                                                                                                                   |

## Examples

### Basic example

Use utilities like `font-sans` and `font-mono` to set the font family of an element:

```html
<p class="font-sans ...">The quick brown fox ...</p>
<p class="font-serif ...">The quick brown fox ...</p>
<p class="font-mono ...">The quick brown fox ...</p>
```

### Using a custom value

Use the `font-[<value>]` syntax to set the font family based on a completely custom value:

```html
<div class="font-[Open_Sans] ...">...</div>
```

For CSS variables, you can also use the `font-(family-name:<custom-property>)` syntax:

```html
<div class="font-(family-name:--my-font) ...">...</div>
```

This is just a shorthand for `font-[family-name:var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `font-family` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

Use the `--font-*` theme variables to customize the font family utilities in your project:

```css
@theme {
  --font-display: "Oswald", sans-serif;
}
```

Now the `font-display` utility can be used in your markup:

```html
<div class="font-display">...</div>
```

Learn more about customizing your theme in the [theme documentation](/docs/theme#customizing-your-theme).