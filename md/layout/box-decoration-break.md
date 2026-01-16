# box-decoration-break

| Class                  | Styles                         |
| ---------------------- | ------------------------------ |
| `box-decoration-clone` | `box-decoration-break: clone;` |
| `box-decoration-slice` | `box-decoration-break: slice;` |

## Examples

### Basic example

Use the `box-decoration-slice` and `box-decoration-clone` utilities to control whether properties like background, border, border-image, box-shadow, clip-path, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks:

```html
<span class="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
  Hello<br />World
</span>
<span class="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
  Hello<br />World
</span>
```

Prefix a `box-decoration-break` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).