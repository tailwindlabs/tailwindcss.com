# filter: saturate()

Utilities for applying saturation filters to an element.

| Class                          | Styles                                      |
| ------------------------------ | ------------------------------------------- |
| `saturate-<number>`            | `filter: saturate(<number>%);`              |
| `saturate-(<custom-property>)` | `filter: saturate(var(<custom-property>));` |
| `saturate-[<value>]`           | `filter: saturate(<value>);`                |

## Examples

### Basic example

Use utilities like `saturate-50` and `saturate-100` to control an element's saturation:

```html
<img class="saturate-50 ..." src="/img/mountains.jpg" />
<img class="saturate-100 ..." src="/img/mountains.jpg" />
<img class="saturate-150 ..." src="/img/mountains.jpg" />
<img class="saturate-200 ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `saturate-[<value>]` syntax to set the saturation based on a completely custom value:

```html
<div class="saturate-[.25] ...">...</div>
```

For CSS variables, you can also use the `saturate-(<custom-property>)` syntax:

```html
<div class="saturate-(--my-saturation) ...">...</div>
```

This is just a shorthand for `saturate-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `filter: saturate()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).