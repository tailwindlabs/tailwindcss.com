# transform-origin

Utilities for specifying the origin for an element

| Class                        | Styles                                      |
| ---------------------------- | ------------------------------------------- |
| `origin-center`              | `transform-origin: center;`                 |
| `origin-top`                 | `transform-origin: top;`                    |
| `origin-top-right`           | `transform-origin: top right;`              |
| `origin-right`               | `transform-origin: right;`                  |
| `origin-bottom-right`        | `transform-origin: bottom right;`           |
| `origin-bottom`              | `transform-origin: bottom;`                 |
| `origin-bottom-left`         | `transform-origin: bottom left;`            |
| `origin-left`                | `transform-origin: left;`                   |
| `origin-top-left`            | `transform-origin: top left;`               |
| `origin-(<custom-property>)` | `transform-origin: var(<custom-property>);` |
| `origin-[<value>]`           | `transform-origin: <value>;`                |

## Examples

### Basic example

Use utilities like `origin-top` and `origin-bottom-left` to set an element's transform origin:

```html
<img class="origin-center rotate-45 ..." src="/img/mountains.jpg" />
<img class="origin-top-left rotate-12 ..." src="/img/mountains.jpg" />
<img class="origin-bottom -rotate-12 ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `origin-[<value>]` syntax to set the transform origin based on a completely custom value:

```html
<div class="origin-[33%_75%] ...">...</div>
```

For CSS variables, you can also use the `origin-(<custom-property>)` syntax:

```html
<div class="origin-(--my-transform-origin) ...">...</div>
```

This is just a shorthand for `origin-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `transform-origin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).