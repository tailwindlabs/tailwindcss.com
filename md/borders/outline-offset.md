# outline-offset

Utilities for controlling the offset of an element

| Class                                | Styles                                    |
| ------------------------------------ | ----------------------------------------- |
| `outline-offset-<number>`            | `outline-offset: <number>px;`             |
| `-outline-offset-<number>`           | `outline-offset: calc(<number>px * -1);`  |
| `outline-offset-(<custom-property>)` | `outline-offset: var(<custom-property>);` |
| `outline-offset-[<value>]`           | `outline-offset: <value>;`                |

## Examples

### Basic example

Use utilities like `outline-offset-2` and `outline-offset-4` to change the offset of an element's outline:

```html
<button class="outline-2 outline-offset-0 ...">Button A</button>
<button class="outline-2 outline-offset-2 ...">Button B</button>
<button class="outline-2 outline-offset-4 ...">Button C</button>
```

### Using a custom value

Use the `outline-offset-[<value>]` syntax to set the outline offset based on a completely custom value:

```html
<div class="outline-offset-[2vw] ...">...</div>
```

For CSS variables, you can also use the `outline-offset-(<custom-property>)` syntax:

```html
<div class="outline-offset-(--my-outline-offset) ...">...</div>
```

This is just a shorthand for `outline-offset-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix an `outline-offset` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).