# filter: sepia()

Utilities for applying sepia filters to an element.

| Class                       | Styles                                   |
| --------------------------- | ---------------------------------------- |
| `sepia`                     | `filter: sepia(100%);`                   |
| `sepia-<number>`            | `filter: sepia(<number>%);`              |
| `sepia-(<custom-property>)` | `filter: sepia(var(<custom-property>));` |
| `sepia-[<value>]`           | `filter: sepia(<value>);`                |

## Examples

### Basic example

Use utilities like `sepia` and `sepia-50` to control the sepia effect applied to an element:

```html
<img class="sepia-0" src="/img/mountains.jpg" />
<img class="sepia-50" src="/img/mountains.jpg" />
<img class="sepia" src="/img/mountains.jpg" />
```

### Using a custom value

Use the `sepia-[<value>]` syntax to set the sepia amount based on a completely custom value:

```html
<div class="sepia-[.25] ...">...</div>
```

For CSS variables, you can also use the `sepia-(<custom-property>)` syntax:

```html
<div class="sepia-(--my-sepia) ...">...</div>
```

This is just a shorthand for `sepia-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `filter: sepia()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).