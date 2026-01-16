# aspect-ratio

Utilities for controlling the aspect ratio of an element.

| Class                        | Styles                                            |
| ---------------------------- | ------------------------------------------------- |
| `aspect-<ratio>`             | `aspect-ratio: <ratio>;`                          |
| `aspect-square`              | `aspect-ratio: 1 / 1;`                            |
| `aspect-video`               | `aspect-ratio: var(--aspect-video); /* 16 / 9 */` |
| `aspect-auto`                | `aspect-ratio: auto;`                             |
| `aspect-(<custom-property>)` | `aspect-ratio: var(<custom-property>);`           |
| `aspect-[<value>]`           | `aspect-ratio: <value>;`                          |

## Examples

### Basic example

Use <code>aspect-<var>\<ratio></var></code> utilities like `aspect-3/2` to give an element a specific aspect ratio:

```html
<img class="aspect-3/2 object-cover ..." src="/img/villas.jpg" />
```

### Using a video aspect ratio

Use the `aspect-video` utility to give a video element a 16 / 9 aspect ratio:

```html
<iframe class="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

### Using a custom value

Use the `aspect-[<value>]` syntax to set the aspect ratio based on a completely custom value:

```html
<div class="aspect-[calc(4*3+1)/3] ...">...</div>
```

For CSS variables, you can also use the `aspect-(<custom-property>)` syntax:

```html
<div class="aspect-(--my-aspect-ratio) ...">...</div>
```

This is just a shorthand for `aspect-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix an `aspect-ratio` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

Use the `--aspect-*` theme variables to customize the aspect ratio utilities in your project:

```css
@theme {
  --aspect-retro: 4 / 3;
}
```

Now the `aspect-retro` utility can be used in your markup:

```html
<div class="aspect-retro">...</div>
```

Learn more about customizing your theme in the [theme documentation](/docs/theme#customizing-your-theme).