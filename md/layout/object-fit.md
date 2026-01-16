# object-fit

Utilities for controlling how a replaced element

| Class               | Styles                    |
| ------------------- | ------------------------- |
| `object-contain`    | `object-fit: contain;`    |
| `object-cover`      | `object-fit: cover;`      |
| `object-fill`       | `object-fit: fill;`       |
| `object-none`       | `object-fit: none;`       |
| `object-scale-down` | `object-fit: scale-down;` |

## Examples

### Resizing to cover

Use the `object-cover` utility to resize an element's content to cover its container:

```html
<img class="h-48 w-96 object-cover ..." src="/img/mountains.jpg" />
```

### Containing within

Use the `object-contain` utility to resize an element's content to stay contained within its container:

```html
<img class="h-48 w-96 object-contain ..." src="/img/mountains.jpg" />
```

### Stretching to fit

Use the `object-fill` utility to stretch an element's content to fit its container:

```html
<img class="h-48 w-96 object-fill ..." src="/img/mountains.jpg" />
```

### Scaling down

Use the `object-scale-down` utility to display an element's content at its original size but scale it down to fit its container if necessary:

```html
<img class="h-48 w-96 object-scale-down ..." src="/img/mountains.jpg" />
```

### Using the original size

Use the `object-none` utility to display an element's content at its original size ignoring the container size:

```html
<img class="h-48 w-96 object-none ..." src="/img/mountains.jpg" />
```

Prefix an `object-fit` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```html
<img class="object-contain md:object-cover" src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).