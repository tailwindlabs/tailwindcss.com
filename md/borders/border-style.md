# border-style

Utilities for controlling the style of an element

| Class           | Styles                                              |
| --------------- | --------------------------------------------------- |
| `border-solid`  | `border-style: solid;`                              |
| `border-dashed` | `border-style: dashed;`                             |
| `border-dotted` | `border-style: dotted;`                             |
| `border-double` | `border-style: double;`                             |
| `border-hidden` | `border-style: hidden;`                             |
| `border-none`   | `border-style: none;`                               |
| `divide-solid`  | `& > :not(:last-child) {
  border-style: solid;
}`  |
| `divide-dashed` | `& > :not(:last-child) {
  border-style: dashed;
}` |
| `divide-dotted` | `& > :not(:last-child) {
  border-style: dotted;
}` |
| `divide-double` | `& > :not(:last-child) {
  border-style: double;
}` |
| `divide-hidden` | `& > :not(:last-child) {
  border-style: hidden;
}` |
| `divide-none`   | `& > :not(:last-child) {
  border-style: none;
}`   |

## Examples

### Basic example

Use utilities like `border-solid` and `border-dotted` to control an element's border style:

```html
<div class="border-2 border-solid ..."></div>
<div class="border-2 border-dashed ..."></div>
<div class="border-2 border-dotted ..."></div>
<div class="border-4 border-double ..."></div>
```

### Removing a border

Use the `border-none` utility to remove an existing border from an element:

```html
<button class="border-none ...">Save Changes</button>
```

This is most commonly used to remove a border style that was applied at a smaller breakpoint.

### Setting the divider style

Use utilities like `divide-dashed` and `divide-dotted` to control the border style between child elements:

```html
<div class="grid grid-cols-3 divide-x-3 divide-dashed divide-indigo-500">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

Prefix a `border-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).