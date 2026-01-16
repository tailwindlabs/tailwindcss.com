# translate

Utilities for translating elements.

| Class                             | Styles                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------ |
| `translate-<number>`              | `translate: calc(var(--spacing) * <number>) calc(var(--spacing) * <number>);`              |
| `-translate-<number>`             | `translate: calc(var(--spacing) * -<number>) calc(var(--spacing) * -<number>);`            |
| `translate-<fraction>`            | `translate: calc(<fraction> * 100%) calc(<fraction> * 100%);`                              |
| `-translate-<fraction>`           | `translate: calc(<fraction> * -100%) calc(<fraction> * -100%);`                            |
| `translate-full`                  | `translate: 100% 100%;`                                                                    |
| `-translate-full`                 | `translate: -100% -100%;`                                                                  |
| `translate-px`                    | `translate: 1px 1px;`                                                                      |
| `-translate-px`                   | `translate: -1px -1px;`                                                                    |
| `translate-(<custom-property>)`   | `translate: var(<custom-property>) var(<custom-property>);`                                |
| `translate-[<value>]`             | `translate: <value> <value>;`                                                              |
| `translate-x-<number>`            | `translate: calc(var(--spacing) * <number>) var(--tw-translate-y);`                        |
| `-translate-x-<number>`           | `translate: calc(var(--spacing) * -<number>) var(--tw-translate-y);`                       |
| `translate-x-<fraction>`          | `translate: calc(<fraction> * 100%) var(--tw-translate-y);`                                |
| `-translate-x-<fraction>`         | `translate: calc(<fraction> * -100%) var(--tw-translate-y);`                               |
| `translate-x-full`                | `translate: 100% var(--tw-translate-y);`                                                   |
| `-translate-x-full`               | `translate: -100% var(--tw-translate-y);`                                                  |
| `translate-x-px`                  | `translate: 1px var(--tw-translate-y);`                                                    |
| `-translate-x-px`                 | `translate: -1px var(--tw-translate-y);`                                                   |
| `translate-x-(<custom-property>)` | `translate: var(<custom-property>) var(--tw-translate-y);`                                 |
| `translate-x-[<value>]`           | `translate: <value> var(--tw-translate-y);`                                                |
| `translate-y-<number>`            | `translate: var(--tw-translate-x) calc(var(--spacing) * <number>);`                        |
| `-translate-y-<number>`           | `translate: var(--tw-translate-x) calc(var(--spacing) * -<number>);`                       |
| `translate-y-<fraction>`          | `translate: var(--tw-translate-x) calc(<fraction> * 100%);`                                |
| `-translate-y-<fraction>`         | `translate: var(--tw-translate-x) calc(<fraction> * -100%);`                               |
| `translate-y-full`                | `translate: var(--tw-translate-x) 100%;`                                                   |
| `-translate-y-full`               | `translate: var(--tw-translate-x) -100%;`                                                  |
| `translate-y-px`                  | `translate: var(--tw-translate-x) 1px;`                                                    |
| `-translate-y-px`                 | `translate: var(--tw-translate-x) -1px;`                                                   |
| `translate-y-(<custom-property>)` | `translate: var(--tw-translate-x) var(<custom-property>);`                                 |
| `translate-y-[<value>]`           | `translate: var(--tw-translate-x) <value>;`                                                |
| `translate-z-<number>`            | `translate: var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * <number>);`  |
| `-translate-z-<number>`           | `translate: var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * -<number>);` |
| `translate-z-px`                  | `translate: var(--tw-translate-x) var(--tw-translate-y) 1px;`                              |
| `-translate-z-px`                 | `translate: var(--tw-translate-x) var(--tw-translate-y) -1px;`                             |
| `translate-z-(<custom-property>)` | `translate: var(--tw-translate-x) var(--tw-translate-y) var(<custom-property>);`           |
| `translate-z-[<value>]`           | `translate: var(--tw-translate-x) var(--tw-translate-y) <value>;`                          |
| `translate-none`                  | `translate: none;`                                                                         |

## Examples

### Using the spacing scale

Use `translate-<number>` utilities like `translate-2` and `-translate-4` to translate an element on both axes based on the spacing scale:

```html
<img class="-translate-6 ..." src="/img/mountains.jpg" />
<img class="translate-2 ..." src="/img/mountains.jpg" />
<img class="translate-8 ..." src="/img/mountains.jpg" />
```

### Using a percentage

Use `translate-<fraction>` utilities like `translate-1/4` and `-translate-full` to translate an element on both axes by a percentage of the element's size:

```html
<img class="-translate-1/4 ..." src="/img/mountains.jpg" />
<img class="translate-1/6 ..." src="/img/mountains.jpg" />
<img class="translate-1/2 ..." src="/img/mountains.jpg" />
```

### Translating on the x-axis

Use `translate-x-<number>` or `translate-x-<fraction>` utilities like `translate-x-4` and `translate-x-1/4` to translate an element on the x-axis:

```html
<img class="-translate-x-4 ..." src="/img/mountains.jpg" />
<img class="translate-x-2 ..." src="/img/mountains.jpg" />
<img class="translate-x-1/2 ..." src="/img/mountains.jpg" />
```

### Translating on the y-axis

Use `translate-y-<number>` or `translate-y-<fraction>` utilities like `translate-y-6` and `translate-y-1/3` to translate an element on the y-axis:

```html
<img class="-translate-y-4 ..." src="/img/mountains.jpg" />
<img class="translate-y-2 ..." src="/img/mountains.jpg" />
<img class="translate-y-1/2 ..." src="/img/mountains.jpg" />
```

### Translating on the z-axis

Use `translate-z-<number>` utilities like `translate-z-6` and `-translate-z-12` to translate an element on the z-axis:

```html
<div class="transform-3d">
  <img class="-translate-z-8 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" />
  <img class="translate-z-2 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" />
  <img class="translate-z-1/2 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" />
</div>
```

Note that the `translate-z-<number>` utilities require the `transform-3d` utility to be applied to the parent element.

### Using a custom value

Use the `translate-[<value>]` syntax to set the translation based on a completely custom value:

```html
<div class="translate-[3.142rad] ...">...</div>
```

For CSS variables, you can also use the `translate-(<custom-property>)` syntax:

```html
<div class="translate-(--my-translate) ...">...</div>
```

This is just a shorthand for `translate-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `translate` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).