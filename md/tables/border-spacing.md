# border-spacing

Utilities for controlling the spacing between table borders.

| Class                                  | Styles                                                                        |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| `border-spacing-<number>`              | `border-spacing: calc(var(--spacing) * <number>);`                            |
| `border-spacing-(<custom-property>)`   | `border-spacing: var(<custom-property>);`                                     |
| `border-spacing-[<value>]`             | `border-spacing: <value>;`                                                    |
| `border-spacing-x-<number>`            | `border-spacing: calc(var(--spacing) * <number>) var(--tw-border-spacing-y);` |
| `border-spacing-x-(<custom-property>)` | `border-spacing: var(<custom-property>) var(--tw-border-spacing-y);`          |
| `border-spacing-x-[<value>]`           | `border-spacing: <value> var(--tw-border-spacing-y);`                         |
| `border-spacing-y-<number>`            | `border-spacing: var(--tw-border-spacing-x) calc(var(--spacing) * <number>);` |
| `border-spacing-y-(<custom-property>)` | `border-spacing: var(--tw-border-spacing-x) var(<custom-property>);`          |
| `border-spacing-y-[<value>]`           | `border-spacing: var(--tw-border-spacing-x) <value>;`                         |

## Examples

### Basic example

Use `border-spacing-<number>` utilities like `border-spacing-2` and `border-spacing-x-3` to control the space between the borders of table cells with [separate borders](/docs/border-collapse#separating-table-borders):

```html
<table class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
  <thead>
    <tr>
      <th class="border border-gray-300 dark:border-gray-600">State</th>
      <th class="border border-gray-300 dark:border-gray-600">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 dark:border-gray-700">Indiana</td>
      <td class="border border-gray-300 dark:border-gray-700">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-gray-300 dark:border-gray-700">Ohio</td>
      <td class="border border-gray-300 dark:border-gray-700">Columbus</td>
    </tr>
    <tr>
      <td class="border border-gray-300 dark:border-gray-700">Michigan</td>
      <td class="border border-gray-300 dark:border-gray-700">Detroit</td>
    </tr>
  </tbody>
</table>
```

### Using a custom value

Use the `border-spacing-[<value>]` syntax to set the border spacing based on a completely custom value:

```html
<div class="border-spacing-[7px] ...">...</div>
```

For CSS variables, you can also use the `border-spacing-(<custom-property>)` syntax:

```html
<div class="border-spacing-(--my-border-spacing) ...">...</div>
```

This is just a shorthand for `border-spacing-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `border-spacing` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

The `border-spacing-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {
  --spacing: 1px;
}
```

Learn more about customizing the spacing scale in the [theme variable documentation](/docs/theme).