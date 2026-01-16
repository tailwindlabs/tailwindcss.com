# content

Utilities for controlling the content of the before and after pseudo-elements.

| Class                         | Styles                             |
| ----------------------------- | ---------------------------------- |
| `content-[<value>]`           | `content: <value>;`                |
| `content-(<custom-property>)` | `content: var(<custom-property>);` |
| `content-none`                | `content: none;`                   |

## Examples

### Basic example

Use the `content-[<value>]` syntax, along with the `before` and `after` variants, to set the contents of the `::before` and `::after` pseudo-elements:

```html
<p>Higher resolution means more than just a better-quality image. With a
Retina 6K display, <a class="text-blue-600 after:content-['_↗']" href="...">
Pro Display XDR</a> gives you nearly 40 percent more screen real estate than
a 5K display.</p>
```

### Referencing an attribute value

Use the `content-[attr(<name>)]` syntax to reference a value stored in an attribute using the `attr()` CSS function:

```html
<p before="Hello World" class="before:content-[attr(before)] ...">
  <!-- ... -->
</p>
```

### Using spaces and underscores

Since whitespace denotes the end of a class in HTML, replace any spaces in an arbitrary value with an underscore:

```html
<p class="before:content-['Hello_World'] ..."></p>
```

If you need to include an actual underscore, you can do this by escaping it with a backslash:

```html
<p class="before:content-['Hello\_World']"></p>
```

### Using a CSS variable

Use the <code>content-</code> syntax to control the contents of the `::before` and `::after` pseudo-elements using a CSS variable:

```html
<p class="content-(--my-content)"></p>
```

This is just a shorthand for <code>content-</code> that adds the `var()` function for you automatically.

Prefix a `content` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<p class="before:content-['Mobile'] md:before:content-['Desktop'] ..."></p>
```

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).