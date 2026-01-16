# text-indent

Utilities for controlling the amount of empty space shown before text in a block.

| Class                        | Styles                                           |
| ---------------------------- | ------------------------------------------------ |
| `indent-<number>`            | `text-indent: calc(var(--spacing) * <number>);`  |
| `-indent-<number>`           | `text-indent: calc(var(--spacing) * -<number>);` |
| `indent-px`                  | `text-indent: 1px;`                              |
| `-indent-px`                 | `text-indent: -1px;`                             |
| `indent-(<custom-property>)` | `text-indent: var(<custom-property>);`           |
| `indent-[<value>]`           | `text-indent: <value>;`                          |

## Examples

### Basic example

Use `indent-<number>` utilities like `indent-2` and `indent-8` to set the amount of empty space (indentation) that's shown before text in a block:

```html
<p class="indent-8">So I started to walk into the water...</p>
```

### Using negative values

To use a negative text indent value, prefix the class name with a dash to convert it to a negative value:

```html
<p class="-indent-8">So I started to walk into the water...</p>
```

### Using a custom value

Use the `indent-[<value>]` syntax to set the text indentation based on a completely custom value:

```html
<div class="indent-[50%] ...">...</div>
```

For CSS variables, you can also use the `indent-(<custom-property>)` syntax:

```html
<div class="indent-(--my-indentation) ...">...</div>
```

This is just a shorthand for `indent-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `text-indent` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).