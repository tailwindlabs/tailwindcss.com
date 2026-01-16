# filter: brightness()

Utilities for applying brightness filters to an element.

| Class                            | Styles                                        |
| -------------------------------- | --------------------------------------------- |
| `brightness-<number>`            | `filter: brightness(<number>%);`              |
| `brightness-(<custom-property>)` | `filter: brightness(var(<custom-property>));` |
| `brightness-[<value>]`           | `filter: brightness(<value>);`                |

## Examples

### Basic example

Use utilities like `brightness-50` and `brightness-100` to control an element's brightness:

```html
<img class="brightness-50 ..." src="/img/mountains.jpg" />
<img class="brightness-100 ..." src="/img/mountains.jpg" />
<img class="brightness-125 ..." src="/img/mountains.jpg" />
<img class="brightness-200 ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `brightness-[<value>]` syntax to set the brightness based on a completely custom value:

```html
<div class="brightness-[1.75] ...">...</div>
```

For CSS variables, you can also use the `brightness-(<custom-property>)` syntax:

```html
<div class="brightness-(--my-brightness) ...">...</div>
```

This is just a shorthand for `brightness-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `filter: brightness()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).