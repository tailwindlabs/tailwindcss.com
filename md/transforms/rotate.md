# rotate

Utilities for rotating elements.

| Class                          | Styles                                                                              |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| `rotate-none`                  | `rotate: none;`                                                                     |
| `rotate-<number>`              | `rotate: <number>deg;`                                                              |
| `-rotate-<number>`             | `rotate: calc(<number>deg * -1);`                                                   |
| `rotate-(<custom-property>)`   | `rotate: var(<custom-property>);`                                                   |
| `rotate-[<value>]`             | `rotate: <value>;`                                                                  |
| `rotate-x-<number>`            | `transform: rotateX(<number>deg) var(--tw-rotate-y);`                               |
| `-rotate-x-<number>`           | `transform: rotateX(-<number>deg) var(--tw-rotate-y);`                              |
| `rotate-x-(<custom-property>)` | `transform: rotateX(var(<custom-property>)) var(--tw-rotate-y);`                    |
| `rotate-x-[<value>]`           | `transform: rotateX(<value>) var(--tw-rotate-y);`                                   |
| `rotate-y-<number>`            | `transform: var(--tw-rotate-x) rotateY(<number>deg);`                               |
| `-rotate-y-<number>`           | `transform: var(--tw-rotate-x) rotateY(-<number>deg);`                              |
| `rotate-y-(<custom-property>)` | `transform: var(--tw-rotate-x) rotateY(var(<custom-property>));`                    |
| `rotate-y-[<value>]`           | `transform: var(--tw-rotate-x) rotateY(<value>);`                                   |
| `rotate-z-<number>`            | `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<number>deg);`            |
| `-rotate-z-<number>`           | `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(-<number>deg);`           |
| `rotate-z-(<custom-property>)` | `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(var(<custom-property>));` |
| `rotate-z-[<value>]`           | `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<value>);`                |

## Examples

### Basic example

Use `rotate-<number>` utilities like `rotate-45` and `rotate-90` to rotate an element by degrees:

```html
<img class="rotate-45 ..." src="/img/mountains.jpg" />
<img class="rotate-90 ..." src="/img/mountains.jpg" />
<img class="rotate-210 ..." src="/img/mountains.jpg" />
```

### Using negative values

Use `-rotate-<number>` utilities like `-rotate-45` and `-rotate-90` to rotate an element counterclockwise by degrees:

```html
<img class="-rotate-45 ..." src="/img/mountains.jpg" />
<img class="-rotate-90 ..." src="/img/mountains.jpg" />
<img class="-rotate-210 ..." src="/img/mountains.jpg" />
```

### Rotating in 3D space

Use `rotate-x-<number>`, `rotate-y-<number>`, and `rotate-z-<number>` utilities like `rotate-x-50`, `-rotate-y-30`, and `rotate-z-45` together to rotate an element in 3D space:

```html
<img class="rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" />
<img class="rotate-x-15 -rotate-y-30 ..." src="/img/mountains.jpg" />
<img class="rotate-y-25 rotate-z-30 ..." src="/img/mountains.jpg" />
```

### Using a custom value

Use the `rotate-[<value>]` syntax to set the rotation based on a completely custom value:

```html
<div class="rotate-[3.142rad] ...">...</div>
```

For CSS variables, you can also use the `rotate-(<custom-property>)` syntax:

```html
<div class="rotate-(--my-rotation) ...">...</div>
```

This is just a shorthand for `rotate-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `rotate` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).