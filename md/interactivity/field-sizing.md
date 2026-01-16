# field-sizing

Utilities for controlling the sizing of form controls.

| Class                  | Styles                   |
| ---------------------- | ------------------------ |
| `field-sizing-fixed`   | `field-sizing: fixed;`   |
| `field-sizing-content` | `field-sizing: content;` |

## Examples

### Sizing based on content

Use the `field-sizing-content` utility to allow a form control to adjust it's size based on the content:

```html
<textarea class="field-sizing-content ..." rows="2">
  Latex Salesman, Vanderlay Industries
</textarea>
```

### Using a fixed size

Use the `field-sizing-fixed` utility to make a form control use a fixed size:

```html
<textarea class="field-sizing-fixed w-80 ..." rows="2">
  Latex Salesman, Vanderlay Industries
</textarea>
```

Prefix a `field-sizing` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).