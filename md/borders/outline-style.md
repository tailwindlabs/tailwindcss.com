# outline-style

Utilities for controlling the style of an element

| Class            | Styles                                                 |
| ---------------- | ------------------------------------------------------ |
| `outline-solid`  | `outline-style: solid;`                                |
| `outline-dashed` | `outline-style: dashed;`                               |
| `outline-dotted` | `outline-style: dotted;`                               |
| `outline-double` | `outline-style: double;`                               |
| `outline-none`   | `outline-style: none;`                                 |
| `outline-hidden` | `outline: 2px solid transparent;
outline-offset: 2px;` |

## Examples

### Basic example

Use utilities like `outline-solid` and `outline-dashed` to set the style of an element's outline:

```html
<button class="outline-2 outline-offset-2 outline-solid ...">Button A</button>
<button class="outline-2 outline-offset-2 outline-dashed ...">Button B</button>
<button class="outline-2 outline-offset-2 outline-dotted ...">Button C</button>
<button class="outline-3 outline-offset-2 outline-double ...">Button D</button>
```

### Hiding an outline

Use the `outline-hidden` utility to hide the default browser outline on focused elements, while still preserving the outline in forced colors mode:

```html
<input class="focus:border-indigo-600 focus:outline-hidden ..." type="text" />
```

It is highly recommended to apply your own focus styling for accessibility when using this utility.

### Removing outlines

Use the `outline-none` utility to completely remove the default browser outline on focused elements:

```html
<div class="focus-within:outline-2 focus-within:outline-indigo-600 ...">
  <textarea class="outline-none ..." placeholder="Leave a comment..." />
  <button class="..." type="button">Post</button>
</div>
```

It is highly recommended to apply your own focus styling for accessibility when using this utility.

Prefix an `outline-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).