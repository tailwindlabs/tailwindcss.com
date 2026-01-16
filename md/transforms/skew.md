# skew

Utilities for skewing elements with transform.

| Class                        | Styles                                                                    |
| ---------------------------- | ------------------------------------------------------------------------- |
| `skew-<number>`              | `transform: skewX(<number>deg) skewY(<number>deg);`                       |
| `-skew-<number>`             | `transform: skewX(-<number>deg) skewY(-<number>deg);`                     |
| `skew-(<custom-property>)`   | `transform: skewX(var(<custom-property>)) skewY(var(<custom-property>));` |
| `skew-[<value>]`             | `transform: skewX(<value>) skewY(<value>);`                               |
| `skew-x-<number>`            | `transform: skewX(<number>deg));`                                         |
| `-skew-x-<number>`           | `transform: skewX(-<number>deg));`                                        |
| `skew-x-(<custom-property>)` | `transform: skewX(var(<custom-property>));`                               |
| `skew-x-[<value>]`           | `transform: skewX(<value>));`                                             |
| `skew-y-<number>`            | `transform: skewY(<number>deg);`                                          |
| `-skew-y-<number>`           | `transform: skewY(-<number>deg);`                                         |
| `skew-y-(<custom-property>)` | `transform: skewY(var(<custom-property>));`                               |
| `skew-y-[<value>]`           | `transform: skewY(<value>);`                                              |

## Examples

### Basic example

Use `skew-<number>` utilities like `skew-4` and `skew-10` to skew an element on both axes:

```html
<img class="skew-3 ..." src="/img/mountains.jpg" />
<img class="skew-6 ..." src="/img/mountains.jpg" />
<img class="skew-12 ..." src="/img/mountains.jpg" />
```

### Using negative values

Use `-skew-<number>` utilities like `-skew-4` and `-skew-10` to skew an element on both axes:

```html
<img class="-skew-3 ..." src="/img/mountains.jpg" />
<img class="-skew-6 ..." src="/img/mountains.jpg" />
<img class="-skew-12 ..." src="/img/mountains.jpg" />
```

### Skewing on the x-axis

Use `skew-x-<number>` utilities like `skew-x-4` and `-skew-x-10` to skew an element on the x-axis:

```html
<img class="-skew-x-12 ..." src="/img/mountains.jpg" />
<img class="skew-x-6 ..." src="/img/mountains.jpg" />
<img class="skew-x-12 ..." src="/img/mountains.jpg" />
```

### Skewing on the y-axis

Use `skew-y-<number>` utilities like `skew-y-4` and `-skew-y-10` to skew an element on the y-axis:

```html
<img class="-skew-y-12 ..." src="/img/mountains.jpg" />
<img class="skew-y-6 ..." src="/img/mountains.jpg" />
<img class="skew-y-12 ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `skew-[<value>]` syntax to set the skew based on a completely custom value:

```html
<div class="skew-[3.142rad] ...">...</div>
```

For CSS variables, you can also use the `skew-(<custom-property>)` syntax:

```html
<div class="skew-(--my-skew) ...">...</div>
```

This is just a shorthand for `skew-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix `skewX()` and `skewY()` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).