# filter: contrast()

Utilities for applying contrast filters to an element.

| Class                          | Styles                                      |
| ------------------------------ | ------------------------------------------- |
| `contrast-<number>`            | `filter: contrast(<number>%);`              |
| `contrast-(<custom-property>)` | `filter: contrast(var(<custom-property>));` |
| `contrast-[<value>]`           | `filter: contrast(<value>);`                |

## Examples

### Basic example

Use utilities like `contrast-50` and `contrast-100` to control an element's contrast:

```html
<img class="contrast-50 ..." src="/img/mountains.jpg" />
<img class="contrast-100 ..." src="/img/mountains.jpg" />
<img class="contrast-125 ..." src="/img/mountains.jpg" />
<img class="contrast-200 ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `contrast-[<value>]` syntax to set the contrast based on a completely custom value:

```html
<div class="contrast-[.25] ...">...</div>
```

For CSS variables, you can also use the `contrast-(<custom-property>)` syntax:

```html
<div class="contrast-(--my-contrast) ...">...</div>
```

This is just a shorthand for `contrast-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `filter: contrast()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).