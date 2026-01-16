# grid-column

Utilities for controlling how elements are sized and placed across grid columns.

| Class                           | Styles                                                                    |
| ------------------------------- | ------------------------------------------------------------------------- |
| `col-span-<number>`             | `grid-column: span <number> / span <number>;`                             |
| `col-span-full`                 | `grid-column: 1 / -1;`                                                    |
| `col-span-(<custom-property>)`  | `grid-column: span var(<custom-property>) / span var(<custom-property>);` |
| `col-span-[<value>]`            | `grid-column: span <value> / span <value>;`                               |
| `col-start-<number>`            | `grid-column-start: <number>;`                                            |
| `-col-start-<number>`           | `grid-column-start: calc(<number> * -1);`                                 |
| `col-start-auto`                | `grid-column-start: auto;`                                                |
| `col-start-(<custom-property>)` | `grid-column-start: var(<custom-property>);`                              |
| `col-start-[<value>]`           | `grid-column-start: <value>;`                                             |
| `col-end-<number>`              | `grid-column-end: <number>;`                                              |
| `-col-end-<number>`             | `grid-column-end: calc(<number> * -1);`                                   |
| `col-end-auto`                  | `grid-column-end: auto;`                                                  |
| `col-end-(<custom-property>)`   | `grid-column-end: var(<custom-property>);`                                |
| `col-end-[<value>]`             | `grid-column-end: <value>;`                                               |
| `col-auto`                      | `grid-column: auto;`                                                      |
| `col-<number>`                  | `grid-column: <number>;`                                                  |
| `-col-<number>`                 | `grid-column: calc(<number> * -1);`                                       |
| `col-(<custom-property>)`       | `grid-column: var(<custom-property>);`                                    |
| `col-[<value>]`                 | `grid-column: <value>;`                                                   |

## Examples

### Spanning columns

Use `col-span-<number>` utilities like `col-span-2` and `col-span-4` to make an element span _n_ columns:

```html
<div class="grid grid-cols-3 gap-4">
  <div class="...">01</div>
  <div class="...">02</div>
  <div class="...">03</div>
  <div class="col-span-2 ...">04</div>
  <div class="...">05</div>
  <div class="...">06</div>
  <div class="col-span-2 ...">07</div>
</div>
```

### Starting and ending lines

Use `col-start-<number>` or `col-end-<number>` utilities like `col-start-2` and `col-end-3` to make an element start or end at the _nth_ grid line:

```html
<div class="grid grid-cols-6 gap-4">
  <div class="col-span-4 col-start-2 ...">01</div>
  <div class="col-start-1 col-end-3 ...">02</div>
  <div class="col-span-2 col-end-7 ...">03</div>
  <div class="col-start-1 col-end-7 ...">04</div>
</div>
```

These can also be combined with the `col-span-<number>` utilities to span a specific number of columns.

### Using a custom value

Use utilities like `col-[<value>]`, `col-span-[<value>]`, `col-start-[<value>]`, and `col-end-[<value>]` to set the grid column size and location based on a completely custom value:

```html
<div class="col-[16_/_span_16] ...">...</div>
```

For CSS variables, you can also use the `col-(<custom-property>)` syntax:

```html
<div class="col-(--my-columns) ...">...</div>
```

This is just a shorthand for `col-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix `grid-column`, `grid-column-start`, and `grid-column-end` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).