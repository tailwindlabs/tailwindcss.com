# flex

Utilities for controlling how flex items both grow and shrink.

| Class                      | Styles                           |
| -------------------------- | -------------------------------- |
| `flex-<number>`            | `flex: <number>;`                |
| `flex-<fraction>`          | `flex: calc(<fraction> * 100%);` |
| `flex-auto`                | `flex: auto;`                    |
| `flex-initial`             | `flex: 0 auto;`                  |
| `flex-none`                | `flex: none;`                    |
| `flex-(<custom-property>)` | `flex: var(<custom-property>);`  |
| `flex-[<value>]`           | `flex: <value>;`                 |

## Examples

### Basic example

Use `flex-<number>` utilities like `flex-1` to allow a flex item to grow and shrink as needed, ignoring its initial size:

```html
<div class="flex">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-1 ...">02</div>
  <div class="w-32 flex-1 ...">03</div>
</div>
```

### Initial

Use `flex-initial` to allow a flex item to shrink but not grow, taking into account its initial size:

```html
<div class="flex">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-initial ...">02</div>
  <div class="w-32 flex-initial ...">03</div>
</div>
```

### Auto

Use `flex-auto` to allow a flex item to grow and shrink, taking into account its initial size:

```html
<div class="flex ...">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-auto ...">02</div>
  <div class="w-32 flex-auto ...">03</div>
</div>
```

### None

Use `flex-none` to prevent a flex item from growing or shrinking:

```html
<div class="flex ...">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-32 flex-none ...">02</div>
  <div class="flex-1 ...">03</div>
</div>
```

### Using a custom value

Use the `flex-[<value>]` syntax to set the flex shorthand property based on a completely custom value:

```html
<div class="flex-[3_1_auto] ...">...</div>
```

For CSS variables, you can also use the `flex-(<custom-property>)` syntax:

```html
<div class="flex-(--my-flex) ...">...</div>
```

This is just a shorthand for `flex-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `flex` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).