# object-position

| Class                        | Styles                                     |
| ---------------------------- | ------------------------------------------ |
| `object-top-left`            | `object-position: top left;`               |
| `object-top`                 | `object-position: top;`                    |
| `object-top-right`           | `object-position: top right;`              |
| `object-left`                | `object-position: left;`                   |
| `object-center`              | `object-position: center;`                 |
| `object-right`               | `object-position: right;`                  |
| `object-bottom-left`         | `object-position: bottom left;`            |
| `object-bottom`              | `object-position: bottom;`                 |
| `object-bottom-right`        | `object-position: bottom right;`           |
| `object-(<custom-property>)` | `object-position: var(<custom-property>);` |
| `object-[<value>]`           | `object-position: <value>;`                |

## Examples

### Basic example

Use utilities like `object-left` and `object-bottom-right` to specify how a replaced element's content should be positioned within its container:

```html
<img class="size-24 object-top-left ..." src="/img/mountains.jpg" />
<img class="size-24 object-top ..." src="/img/mountains.jpg" />
<img class="size-24 object-top-right ..." src="/img/mountains.jpg" />
<img class="size-24 object-left ..." src="/img/mountains.jpg" />
<img class="size-24 object-center ..." src="/img/mountains.jpg" />
<img class="size-24 object-right ..." src="/img/mountains.jpg" />
<img class="size-24 object-bottom-left ..." src="/img/mountains.jpg" />
<img class="size-24 object-bottom ..." src="/img/mountains.jpg" />
<img class="size-24 object-bottom-right ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `object-[<value>]` syntax to set the object position based on a completely custom value:

```html
<div class="object-[25%_75%] ...">...</div>
```

For CSS variables, you can also use the `object-(<custom-property>)` syntax:

```html
<div class="object-(--my-object) ...">...</div>
```

This is just a shorthand for `object-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix an `object-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).