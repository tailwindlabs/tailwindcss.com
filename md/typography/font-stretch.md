# font-stretch

Utilities for selecting the width of a font face.

| Class                              | Styles                                       |
| ---------------------------------- | -------------------------------------------- |
| `font-stretch-ultra-condensed`     | `font-stretch: ultra-condensed; /* 50% */`   |
| `font-stretch-extra-condensed`     | `font-stretch: extra-condensed; /* 62.5% */` |
| `font-stretch-condensed`           | `font-stretch: condensed; /* 75% */`         |
| `font-stretch-semi-condensed`      | `font-stretch: semi-condensed; /* 87.5% */`  |
| `font-stretch-normal`              | `font-stretch: normal; /* 100% */`           |
| `font-stretch-semi-expanded`       | `font-stretch: semi-expanded; /* 112.5% */`  |
| `font-stretch-expanded`            | `font-stretch: expanded; /* 125% */`         |
| `font-stretch-extra-expanded`      | `font-stretch: extra-expanded; /* 150% */`   |
| `font-stretch-ultra-expanded`      | `font-stretch: ultra-expanded; /* 200% */`   |
| `font-stretch-<percentage>`        | `font-stretch: <percentage>;`                |
| `font-stretch-(<custom-property>)` | `font-stretch: var(<custom-property>);`      |
| `font-stretch-[<value>]`           | `font-stretch: <value>;`                     |

## Examples

### Basic example

Use utilities like `font-stretch-condensed` and `font-stretch-expanded` to set the width of a font face:

```html
<p class="font-stretch-extra-condensed">The quick brown fox...</p>
<p class="font-stretch-condensed">The quick brown fox...</p>
<p class="font-stretch-normal">The quick brown fox...</p>
<p class="font-stretch-expanded">The quick brown fox...</p>
<p class="font-stretch-extra-expanded">The quick brown fox...</p>
```

This only applies to fonts that have multiple width variations available, otherwise the browser selects the closest match.

### Using percentages

Use `font-stretch-<percentage>` utilities like `font-stretch-50%` and `font-stretch-125%` to set the width of a font face using a percentage:

```html
<p class="font-stretch-50%">The quick brown fox...</p>
<p class="font-stretch-100%">The quick brown fox...</p>
<p class="font-stretch-150%">The quick brown fox...</p>
```

### Using a custom value

Use the `font-stretch-[<value>]` syntax to set the font width based on a completely custom value:

```html
<div class="font-stretch-[66.66%] ...">...</div>
```

For CSS variables, you can also use the `font-stretch-(<custom-property>)` syntax:

```html
<div class="font-stretch-(--my-font-width) ...">...</div>
```

This is just a shorthand for `font-stretch-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `font-stretch` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).