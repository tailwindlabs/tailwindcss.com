# transform

Utilities for transforming elements.

| Class                           | Styles                                                                                                                 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `transform-(<custom-property>)` | `transform: var(<custom-property>);`                                                                                   |
| `transform-[<value>]`           | `transform: <value>;`                                                                                                  |
| `transform-none`                | `transform: none;`                                                                                                     |
| `transform-gpu`                 | `transform: translateZ(0) var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);` |
| `transform-cpu`                 | `transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);`               |

## Examples

### Hardware acceleration

If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility:

```html
<div class="scale-150 transform-gpu">
  <!-- ... -->
</div>
```

Use the `transform-cpu` utility to force things back to the CPU if you need to undo this conditionally.

### Removing transforms

Use the `transform-none` utility to remove all of the transforms on an element at once:

```html
<div class="skew-y-3 md:transform-none">
  <!-- ... -->
</div>
```

### Using a custom value

Use the `transform-[<value>]` syntax to set the transform based on a completely custom value:

```html
<div class="transform-[matrix(1,2,3,4,5,6)] ...">...</div>
```

For CSS variables, you can also use the `transform-(<custom-property>)` syntax:

```html
<div class="transform-(--my-transform) ...">...</div>
```

This is just a shorthand for `transform-[var(<custom-property>)]` that adds the `var()` function for you automatically.