# float

Utilities for controlling the wrapping of content around an element.

| Class         | Styles                 |
| ------------- | ---------------------- |
| `float-right` | `float: right;`        |
| `float-left`  | `float: left;`         |
| `float-start` | `float: inline-start;` |
| `float-end`   | `float: inline-end;`   |
| `float-none`  | `float: none;`         |

## Examples

### Floating elements to the right

Use the `float-right` utility to float an element to the right of its container:

```html
<article>
  <img class="float-right ..." src="/img/mountains.jpg" />
  <p>Maybe we can live without libraries, people like you and me. ...</p>
</article>
```

### Floating elements to the left

Use the `float-left` utility to float an element to the left of its container:

```html
<article>
  <img class="float-left ..." src="/img/mountains.jpg" />
  <p>Maybe we can live without libraries, people like you and me. ...</p>
</article>
```

### Using logical properties

Use the `float-start` and `float-end` utilities, which use [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts) to map to either the left or right side based on the text direction:

```html
<article>
  <img class="float-start ..." src="/img/mountains.jpg" />
  <p>Maybe we can live without libraries, people like you and me. ...</p>
</article>

<article dir="rtl">
  <img class="float-start ..." src="/img/mountains.jpg" />
  <p>... ربما يمكننا العيش بدون مكتبات، أشخاص مثلي ومثلك. ربما. بالتأكيد</p>
</article>
```

### Disabling a float

Use the `float-none` utility to reset any floats that are applied to an element:

```html
<article>
  <img class="float-none ..." src="/img/mountains.jpg" />
  <p>Maybe we can live without libraries, people like you and me. ...</p>
</article>
```

Prefix a `float` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="float-right md:float-left" src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).