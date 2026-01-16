# mask-size

Utilities for controlling the size of an element

| Class                           | Styles                               |
| ------------------------------- | ------------------------------------ |
| `mask-auto`                     | `mask-size: auto;`                   |
| `mask-cover`                    | `mask-size: cover;`                  |
| `mask-contain`                  | `mask-size: contain;`                |
| `mask-size-(<custom-property>)` | `mask-size: var(<custom-property>);` |
| `mask-size-[<value>]`           | `mask-size: <value>;`                |

## Examples

### Filling the container

Use the `mask-cover` utility to scale the mask image until it fills the mask layer, cropping the image if needed:

```html
<div class="mask-cover mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

### Filling without cropping

Use the `mask-contain` utility to scale the mask image to the outer edges without cropping or stretching:

```html
<div class="mask-contain mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

### Using the default size

Use the `mask-auto` utility to display the mask image at its default size:

```html
<div class="mask-auto mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

### Using a custom value

Use the `mask-size-[<value>]` syntax to set the mask image size based on a completely custom value:

```html
<div class="mask-size-[auto_100px] ...">...</div>
```

For CSS variables, you can also use the `mask-size-(<custom-property>)` syntax:

```html
<div class="mask-size-(--my-mask-size) ...">...</div>
```

This is just a shorthand for `mask-size-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `mask-size` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).