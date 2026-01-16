# white-space

Utilities for controlling an element

| Class                     | Styles                       |
| ------------------------- | ---------------------------- |
| `whitespace-normal`       | `white-space: normal;`       |
| `whitespace-nowrap`       | `white-space: nowrap;`       |
| `whitespace-pre`          | `white-space: pre;`          |
| `whitespace-pre-line`     | `white-space: pre-line;`     |
| `whitespace-pre-wrap`     | `white-space: pre-wrap;`     |
| `whitespace-break-spaces` | `white-space: break-spaces;` |

## Examples

### Normal

Use the `whitespace-normal` utility to cause text to wrap normally within an element. Newlines and spaces will be collapsed:

```html
<p class="whitespace-normal">Hey everyone!

It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</p>
```

### No Wrap

Use the `whitespace-nowrap` utility to prevent text from wrapping within an element. Newlines and spaces will be collapsed:

```html
<p class="overflow-auto whitespace-nowrap">Hey everyone!

It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</p>
```

### Pre

Use the `whitespace-pre` utility to preserve newlines and spaces within an element. Text will not be wrapped:

```html
<p class="overflow-auto whitespace-pre">Hey everyone!

It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</p>
```

### Pre Line

Use the `whitespace-pre-line` utility to preserve newlines but not spaces within an element. Text will be wrapped normally:

```html
<p class="whitespace-pre-line">Hey everyone!

It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</p>
```

### Pre Wrap

Use the `whitespace-pre-wrap` utility to preserve newlines and spaces within an element. Text will be wrapped normally:

```html
<p class="whitespace-pre-wrap">Hey everyone!

It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</p>
```

### Break Spaces

Use the `whitespace-break-spaces` utility to preserve newlines and spaces within an element. White space at the end of lines will not hang, but will wrap to the next line:

```html
<p class="whitespace-break-spaces">Hey everyone!

It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</p>
```

Prefix a `white-space` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).