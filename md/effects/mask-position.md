# mask-position

Utilities for controlling the position of an element

| Class                               | Styles                                   |
| ----------------------------------- | ---------------------------------------- |
| `mask-top-left`                     | `mask-position: top left;`               |
| `mask-top`                          | `mask-position: top;`                    |
| `mask-top-right`                    | `mask-position: top right;`              |
| `mask-left`                         | `mask-position: left;`                   |
| `mask-center`                       | `mask-position: center;`                 |
| `mask-right`                        | `mask-position: right;`                  |
| `mask-bottom-left`                  | `mask-position: bottom left;`            |
| `mask-bottom`                       | `mask-position: bottom;`                 |
| `mask-bottom-right`                 | `mask-position: bottom right;`           |
| `mask-position-(<custom-property>)` | `mask-position: var(<custom-property>);` |
| `mask-position-[<value>]`           | `mask-position: <value>;`                |

## Examples

### Basic example

Use utilities like `mask-center`, `mask-right`, and `mask-left-top` to control the position of an element's mask image:

```html
<div class="mask-top-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-top mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-top-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-center mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-bottom-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-bottom mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-bottom-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
```

### Using a custom value

Use the `mask-position-[<value>]` syntax to set the mask position based on a completely custom value:

```html
<div class="mask-position-[center_top_1rem] ...">...</div>
```

For CSS variables, you can also use the `mask-position-(<custom-property>)` syntax:

```html
<div class="mask-position-(--my-mask-position) ...">...</div>
```

This is just a shorthand for `mask-position-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `mask-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).