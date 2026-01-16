# word-break

Utilities for controlling word breaks in an element.

| Class          | Styles                   |
| -------------- | ------------------------ |
| `break-normal` | `word-break: normal;`    |
| `break-all`    | `word-break: break-all;` |
| `break-keep`   | `word-break: keep-all;`  |

## Examples

### Normal

Use the `break-normal` utility to only add line breaks at normal word break points:

```html
<p class="break-normal">The longest word in any of the major...</p>
```

### Break All

Use the `break-all` utility to add line breaks whenever necessary, without trying to preserve whole words:

```html
<p class="break-all">The longest word in any of the major...</p>
```

### Break Keep

Use the `break-keep` utility to prevent line breaks from being applied to Chinese/Japanese/Korean (CJK) text:

```html
<p class="break-keep">抗衡不屈不挠...</p>
```

For non-CJK text the `break-keep` utility has the same behavior as the `break-normal` utility.

Prefix a `word-break` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).