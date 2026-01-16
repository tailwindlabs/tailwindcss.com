# grid-template-rows

Utilities for specifying the rows in a grid layout.

| Class                           | Styles                                                  |
| ------------------------------- | ------------------------------------------------------- |
| `grid-rows-<number>`            | `grid-template-rows: repeat(<number>, minmax(0, 1fr));` |
| `grid-rows-none`                | `grid-template-rows: none;`                             |
| `grid-rows-subgrid`             | `grid-template-rows: subgrid;`                          |
| `grid-rows-[<value>]`           | `grid-template-rows: <value>;`                          |
| `grid-rows-(<custom-property>)` | `grid-template-rows: var(<custom-property>);`           |

## Examples

### Specifying the grid rows

Use `grid-rows-<number>` utilities like `grid-rows-2` and `grid-rows-4` to create grids with _n_ equally sized rows:

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

### Implementing a subgrid

Use the `grid-rows-subgrid` utility to adopt the row tracks defined by the item's parent:

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>05</div>
  <div class="row-span-3 grid grid-rows-subgrid gap-4">
    <div class="row-start-2">06</div>
  </div>
  <div>07</div>
  <!-- ... -->
  <div>10</div>
</div>
```

### Using a custom value

Use the `grid-rows-[<value>]` syntax to set the rows based on a completely custom value:

```html
<div class="grid-rows-[200px_minmax(900px,1fr)_100px] ...">...</div>
```

For CSS variables, you can also use the `grid-rows-(<custom-property>)` syntax:

```html
<div class="grid-rows-(--my-grid-rows) ...">...</div>
```

This is just a shorthand for `grid-rows-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `grid-template-rows` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).