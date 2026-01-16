# mask-type

Utilities for controlling how an SVG mask is interpreted.

| Class                 | Styles                  |
| --------------------- | ----------------------- |
| `mask-type-alpha`     | `mask-type: alpha;`     |
| `mask-type-luminance` | `mask-type: luminance;` |

## Examples

### Basic example

Use the `mask-type-alpha` and `mask-type-luminance` utilities to control the type of an SVG mask:

```html
<svg>
  <mask id="blob1" class="mask-type-alpha fill-gray-700/70">
    <path d="..."></path>
  </mask>
  <image href="/img/mountains.jpg" height="100%" width="100%" mask="url(#blob1)" />
</svg>

<svg>
  <mask id="blob2" class="mask-type-luminance fill-gray-700/70">
    <path d="..."></path>
  </mask>
  <image href="/img/mountains.jpg" height="100%" width="100%" mask="url(#blob2)" />
</svg>
```

When using `mask-type-luminance` the luminance value of the SVG mask determines visibility, so sticking with grayscale colors will produce the most predictable results. With `mask-alpha`, the opacity of the SVG mask determines the visibility of the masked element.

Prefix a `mask-type` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).