# filter: invert()

Utilities for applying invert filters to an element.

| Class                        | Styles                                    |
| ---------------------------- | ----------------------------------------- |
| `invert`                     | `filter: invert(100%);`                   |
| `invert-<number>`            | `filter: invert(<number>%);`              |
| `invert-(<custom-property>)` | `filter: invert(var(<custom-property>));` |
| `invert-[<value>]`           | `filter: invert(<value>);`                |

## Examples

### Basic example

Use utilities like `invert` and `invert-20` to control the color inversion of an element:

```html
<img class="invert-0" src="/img/mountains.jpg" />
<img class="invert-20" src="/img/mountains.jpg" />
<img class="invert" src="/img/mountains.jpg" />
```

### Using a custom value

Use the `invert-[<value>]` syntax to set the color inversion based on a completely custom value:

```html
<div class="invert-[.25] ...">...</div>
```

For CSS variables, you can also use the `invert-(<custom-property>)` syntax:

```html
<div class="invert-(--my-inversion) ...">...</div>
```

This is just a shorthand for `invert-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `filter: invert()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).