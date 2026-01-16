# list-style-image

Utilities for controlling the marker images for list items.

| Class                            | Styles                                      |
| -------------------------------- | ------------------------------------------- |
| `list-image-[<value>]`           | `list-style-image: <value>;`                |
| `list-image-(<custom-property>)` | `list-style-image: var(<custom-property>);` |
| `list-image-none`                | `list-style-image: none;`                   |

## Examples

### Basic example

Use the `list-image-[<value>]` syntax to control the marker image for list items:

```html
<ul class="list-image-[url(/img/checkmark.png)]">
  <li>5 cups chopped Porcini mushrooms</li>
  <!-- ... -->
</ul>
```

### Using a CSS variable

Use the <code>list-image-</code> syntax to control the marker image for list items using a CSS variable:

```html
<ul class="list-image-(--my-list-image)">
  <!-- ... -->
</ul>
```

This is just a shorthand for <code>list-image-</code> that adds the `var()` function for you automatically.

### Removing a marker image

Use the `list-image-none` utility to remove an existing marker image from list items:

```html
<ul class="list-image-none">
  <!-- ... -->
</ul>
```

Prefix a `list-style-image` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).