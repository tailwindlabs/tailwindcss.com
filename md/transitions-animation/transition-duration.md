# transition-duration

Utilities for controlling the duration of CSS transitions.

| Class                          | Styles                                         |
| ------------------------------ | ---------------------------------------------- |
| `duration-<number>`            | `transition-duration: <number>ms;`             |
| `duration-initial`             | `transition-duration: initial;`                |
| `duration-(<custom-property>)` | `transition-duration: var(<custom-property>);` |
| `duration-[<value>]`           | `transition-duration: <value>;`                |

## Examples

### Basic example

Use utilities like `duration-150` and `duration-700` to set the transition duration of an element in milliseconds:

```html
<button class="transition duration-150 ease-in-out ...">Button A</button>
<button class="transition duration-300 ease-in-out ...">Button B</button>
<button class="transition duration-700 ease-in-out ...">Button C</button>
```

### Supporting reduced motion

For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the `motion-safe` and `motion-reduce` variants:

```html
<button type="button" class="duration-300 motion-reduce:duration-0 ...">
  <!-- ... -->
</button>
```

### Using a custom value

Use the `duration-[<value>]` syntax to set the transition duration based on a completely custom value:

```html
<div class="duration-[1s,15s] ...">...</div>
```

For CSS variables, you can also use the `duration-(<custom-property>)` syntax:

```html
<div class="duration-(--my-duration) ...">...</div>
```

This is just a shorthand for `duration-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `transition-duration` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).