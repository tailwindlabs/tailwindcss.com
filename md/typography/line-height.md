# line-height

Utilities for controlling the leading, or line height, of an element.

| Class                             | Styles                                                             |
| --------------------------------- | ------------------------------------------------------------------ |
| `text-<size>/<number>`            | `font-size: <size>;
line-height: calc(var(--spacing) * <number>);` |
| `text-<size>/(<custom-property>)` | `font-size: <size>;
line-height: var(<custom-property>);`          |
| `text-<size>/[<value>]`           | `font-size: <size>;
line-height: <value>;`                         |
| `leading-none`                    | `line-height: 1;`                                                  |
| `leading-<number>`                | `line-height: calc(var(--spacing) * <number>);`                    |
| `leading-(<custom-property>)`     | `line-height: var(<custom-property>);`                             |
| `leading-[<value>]`               | `line-height: <value>;`                                            |

## Examples

### Basic example

Use font size utilities like `text-sm/6` and `text-lg/7` to set the font size and line-height of an element at the same time:

```html
<p class="text-base/6 ...">So I started to walk into the water...</p>
<p class="text-base/7 ...">So I started to walk into the water...</p>
<p class="text-base/8 ...">So I started to walk into the water...</p>
```

Each font size utility also sets a default line height when one isn't provided. You can learn more about these values and how to customize them in the [font-size documentation](/docs/font-size).

### Setting independently

Use `leading-<number>` utilities like `leading-6` and `leading-7` to set the line height of an element independent of the font-size:

```html
<p class="text-sm leading-6">So I started to walk into the water...</p>
<p class="text-sm leading-7">So I started to walk into the water...</p>
<p class="text-sm leading-8">So I started to walk into the water...</p>
```

### Removing the leading

Use the `leading-none` utility to set the line height of an element equal to its font size:

```html
<p class="text-2xl leading-none ...">The quick brown fox...</p>
```

### Using a custom value

Use the `leading-[<value>]` syntax to set the line height based on a completely custom value:

```html
<div class="leading-[1.5] ...">...</div>
```

For CSS variables, you can also use the `leading-(<custom-property>)` syntax:

```html
<div class="leading-(--my-line-height) ...">...</div>
```

This is just a shorthand for `leading-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `line-height` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

The `leading-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the [theme variable documentation](/docs/theme).