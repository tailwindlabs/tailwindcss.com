# table-layout

Utilities for controlling the table layout algorithm.

| Class         | Styles                 |
| ------------- | ---------------------- |
| `table-auto`  | `table-layout: auto;`  |
| `table-fixed` | `table-layout: fixed;` |

## Examples

### Sizing columns automatically

Use the `table-auto` utility to automatically size table columns to fit the contents of its cells:

```html
<table class="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
```

### Using fixed column widths

Use the `table-fixed` utility to ignore the content of the table cells and use fixed widths for each column:

```html
<table class="table-fixed">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
```

You can manually set the widths for some columns and the rest of the available width will be divided evenly amongst columns without an explicit width. The widths set in the first row will set the column width for the whole table.

Prefix a `table-layout` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).