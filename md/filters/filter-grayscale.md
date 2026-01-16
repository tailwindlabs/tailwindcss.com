# filter: grayscale()

Utilities for applying grayscale filters to an element.

| Class                           | Styles                                       |
| ------------------------------- | -------------------------------------------- |
| `grayscale`                     | `filter: grayscale(100%);`                   |
| `grayscale-<number>`            | `filter: grayscale(<number>%);`              |
| `grayscale-(<custom-property>)` | `filter: grayscale(var(<custom-property>));` |
| `grayscale-[<value>]`           | `filter: grayscale(<value>);`                |

## Examples

### Basic example

Use utilities like `grayscale` and `grayscale-75` to control the amount of grayscale effect applied to an element:

```html
<img class="grayscale-0 ..." src="/img/mountains.jpg" />
<img class="grayscale-25 ..." src="/img/mountains.jpg" />
<img class="grayscale-50 ..." src="/img/mountains.jpg" />
<img class="grayscale ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `grayscale-[<value>]` syntax to set the grayscale based on a completely custom value:

```html
<div class="grayscale-[0.5] ...">...</div>
```

For CSS variables, you can also use the `grayscale-(<custom-property>)` syntax:

```html
<div class="grayscale-(--my-grayscale) ...">...</div>
```

This is just a shorthand for `grayscale-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `filter: grayscale()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).