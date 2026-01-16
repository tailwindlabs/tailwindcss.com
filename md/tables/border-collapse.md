# border-collapse

Utilities for controlling whether table borders should collapse or be separated.

| Class             | Styles                       |
| ----------------- | ---------------------------- |
| `border-collapse` | `border-collapse: collapse;` |
| `border-separate` | `border-collapse: separate;` |

## Examples

### Collapsing table borders

Use the `border-collapse` utility to combine adjacent cell borders into a single border when possible:

```html
<table class="border-collapse border border-gray-400 ...">
  <thead>
    <tr>
      <th class="border border-gray-300 ...">State</th>
      <th class="border border-gray-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 ...">Indiana</td>
      <td class="border border-gray-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Ohio</td>
      <td class="border border-gray-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Michigan</td>
      <td class="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
```

Note that this includes collapsing borders on the top-level `<table>` tag.

### Separating table borders

Use the `border-separate` utility to force each cell to display its own separate borders:

```html
<table class="border-separate border border-gray-400 ...">
  <thead>
    <tr>
      <th class="border border-gray-300 ...">State</th>
      <th class="border border-gray-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 ...">Indiana</td>
      <td class="border border-gray-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Ohio</td>
      <td class="border border-gray-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-gray-300 ...">Michigan</td>
      <td class="border border-gray-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
```

Prefix a `border-collapse` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).