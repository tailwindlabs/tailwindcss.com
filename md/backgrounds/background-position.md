# background-position

Utilities for controlling the position of an element

| Class                             | Styles                                         |
| --------------------------------- | ---------------------------------------------- |
| `bg-top-left`                     | `background-position: top left;`               |
| `bg-top`                          | `background-position: top;`                    |
| `bg-top-right`                    | `background-position: top right;`              |
| `bg-left`                         | `background-position: left;`                   |
| `bg-center`                       | `background-position: center;`                 |
| `bg-right`                        | `background-position: right;`                  |
| `bg-bottom-left`                  | `background-position: bottom left;`            |
| `bg-bottom`                       | `background-position: bottom;`                 |
| `bg-bottom-right`                 | `background-position: bottom right;`           |
| `bg-position-(<custom-property>)` | `background-position: var(<custom-property>);` |
| `bg-position-[<value>]`           | `background-position: <value>;`                |

## Examples

### Basic example

Use utilities like `bg-center`, `bg-right`, and `bg-top-left` to control the position of an element's background image:

```html
<div class="bg-[url(/img/mountains.jpg)] bg-top-left"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-top"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-top-right"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-left"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-center"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-right"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-bottom-left"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-bottom"></div>
<div class="bg-[url(/img/mountains.jpg)] bg-bottom-right"></div>
```

### Using a custom value

Use the `bg-position-[<value>]` syntax to set the background position based on a completely custom value:

```html
<div class="bg-position-[center_top_1rem] ...">...</div>
```

For CSS variables, you can also use the `bg-position-(<custom-property>)` syntax:

```html
<div class="bg-position-(--my-bg-position) ...">...</div>
```

This is just a shorthand for `bg-position-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `background-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).