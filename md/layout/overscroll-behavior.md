# overscroll-behavior

| Class                  | Styles                            |
| ---------------------- | --------------------------------- |
| `overscroll-auto`      | `overscroll-behavior: auto;`      |
| `overscroll-contain`   | `overscroll-behavior: contain;`   |
| `overscroll-none`      | `overscroll-behavior: none;`      |
| `overscroll-x-auto`    | `overscroll-behavior-x: auto;`    |
| `overscroll-x-contain` | `overscroll-behavior-x: contain;` |
| `overscroll-x-none`    | `overscroll-behavior-x: none;`    |
| `overscroll-y-auto`    | `overscroll-behavior-y: auto;`    |
| `overscroll-y-contain` | `overscroll-behavior-y: contain;` |
| `overscroll-y-none`    | `overscroll-behavior-y: none;`    |

## Examples

### Preventing parent overscrolling

Use the `overscroll-contain` utility to prevent scrolling in the target area from triggering scrolling in the parent element, but preserve "bounce" effects when scrolling past the end of the container in operating systems that support it:

```html
<div class="overscroll-contain ...">Well, let me tell you something, ...</div>
```

### Preventing overscroll bouncing

Use the `overscroll-none` utility to prevent scrolling in the target area from triggering scrolling in the parent element, and also prevent "bounce" effects when scrolling past the end of the container:

```html
<div class="overscroll-none ...">Well, let me tell you something, ...</div>
```

### Using the default overscroll behavior

Use the `overscroll-auto` utility to make it possible for the user to continue scrolling a parent scroll area when they reach the boundary of the primary scroll area:

```html
<div class="overscroll-auto ...">Well, let me tell you something, ...</div>
```

Prefix an `overscroll-behavior` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).