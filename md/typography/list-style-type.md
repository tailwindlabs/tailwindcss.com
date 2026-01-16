# list-style-type

Utilities for controlling the marker style of a list.

| Class                      | Styles                                     |
| -------------------------- | ------------------------------------------ |
| `list-disc`                | `list-style-type: disc;`                   |
| `list-decimal`             | `list-style-type: decimal;`                |
| `list-none`                | `list-style-type: none;`                   |
| `list-(<custom-property>)` | `list-style-type: var(<custom-property>);` |
| `list-[<value>]`           | `list-style-type: <value>;`                |

## Examples

### Basic example

Use utilities like `list-disc` and `list-decimal` to control the style of the markers in a list:

```html
<ul class="list-disc">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <!-- ... -->
</ul>

<ol class="list-decimal">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <!-- ... -->
</ol>

<ul class="list-none">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
  <!-- ... -->
</ul>
```

### Using a custom value

Use the `list-[<value>]` syntax to set the marker based on a completely custom value:

```html
<div class="list-[upper-roman] ...">...</div>
```

For CSS variables, you can also use the `list-(<custom-property>)` syntax:

```html
<div class="list-(--my-marker) ...">...</div>
```

This is just a shorthand for `list-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `list-style-type` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).