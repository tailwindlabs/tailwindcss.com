# caption-side

Utilities for controlling the alignment of a caption element inside of a table.

| Class            | Styles                  |
| ---------------- | ----------------------- |
| `caption-top`    | `caption-side: top;`    |
| `caption-bottom` | `caption-side: bottom;` |

## Examples

### Placing at top of table

Use the `caption-top` utility to position a caption element at the top of a table:

```html
<table>
  <caption class="caption-top">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th>Wrestler</th>
      <th>Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Stone Cold" Steve Austin</td>
      <td>Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td>Bret "The Hitman" Hart</td>
      <td>The Sharpshooter</td>
    </tr>
    <tr>
      <td>Razor Ramon</td>
      <td>Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>
```

### Placing at bottom of table

Use the `caption-bottom` utility to position a caption element at the bottom of a table:

```html
<table>
  <caption class="caption-bottom">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th>Wrestler</th>
      <th>Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Stone Cold" Steve Austin</td>
      <td>Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td>Bret "The Hitman" Hart</td>
      <td>The Sharpshooter</td>
    </tr>
    <tr>
      <td>Razor Ramon</td>
      <td>Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>
```

Prefix a `caption-side` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).