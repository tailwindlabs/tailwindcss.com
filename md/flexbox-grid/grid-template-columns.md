# grid-template-columns

Utilities for specifying the columns in a grid layout.

| Class                           | Styles                                                     |
| ------------------------------- | ---------------------------------------------------------- |
| `grid-cols-<number>`            | `grid-template-columns: repeat(<number>, minmax(0, 1fr));` |
| `grid-cols-none`                | `grid-template-columns: none;`                             |
| `grid-cols-subgrid`             | `grid-template-columns: subgrid;`                          |
| `grid-cols-[<value>]`           | `grid-template-columns: <value>;`                          |
| `grid-cols-(<custom-property>)` | `grid-template-columns: var(<custom-property>);`           |

## Examples

### Specifying the grid columns

Use `grid-cols-<number>` utilities like `grid-cols-2` and `grid-cols-4` to create grids with _n_ equally sized columns:

```html
<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

### Implementing a subgrid

Use the `grid-cols-subgrid` utility to adopt the column tracks defined by the item's parent:

```html
<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>05</div>
  <div class="col-span-3 grid grid-cols-subgrid gap-4">
    <div class="col-start-2">06</div>
  </div>
</div>
```

### Using a custom value

Use the `grid-cols-[<value>]` syntax to set the columns based on a completely custom value:

```html
<div class="grid-cols-[200px_minmax(900px,_1fr)_100px] ...">...</div>
```

For CSS variables, you can also use the `grid-cols-(<custom-property>)` syntax:

```html
<div class="grid-cols-(--my-grid-cols) ...">...</div>
```

This is just a shorthand for `grid-cols-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `grid-template-columns` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).