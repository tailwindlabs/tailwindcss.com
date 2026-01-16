# border-width

Utilities for controlling the width of an element

| Class                                 | Styles                                                                                                           |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `border`                              | `border-width: 1px;`                                                                                             |
| `border-<number>`                     | `border-width: <number>px;`                                                                                      |
| `border-(length:<custom-property>)`   | `border-width: var(<custom-property>);`                                                                          |
| `border-[<value>]`                    | `border-width: <value>;`                                                                                         |
| `border-x`                            | `border-inline-width: 1px;`                                                                                      |
| `border-x-<number>`                   | `border-inline-width: <number>px;`                                                                               |
| `border-x-(length:<custom-property>)` | `border-inline-width: var(<custom-property>);`                                                                   |
| `border-x-[<value>]`                  | `border-inline-width: <value>;`                                                                                  |
| `border-y`                            | `border-block-width: 1px;`                                                                                       |
| `border-y-<number>`                   | `border-block-width: <number>px;`                                                                                |
| `border-y-(length:<custom-property>)` | `border-block-width: var(<custom-property>);`                                                                    |
| `border-y-[<value>]`                  | `border-block-width: <value>;`                                                                                   |
| `border-s`                            | `border-inline-start-width: 1px;`                                                                                |
| `border-s-<number>`                   | `border-inline-start-width: <number>px;`                                                                         |
| `border-s-(length:<custom-property>)` | `border-inline-start-width: var(<custom-property>);`                                                             |
| `border-s-[<value>]`                  | `border-inline-start-width: <value>;`                                                                            |
| `border-e`                            | `border-inline-end-width: 1px;`                                                                                  |
| `border-e-<number>`                   | `border-inline-end-width: <number>px;`                                                                           |
| `border-e-(length:<custom-property>)` | `border-inline-end-width: var(<custom-property>);`                                                               |
| `border-e-[<value>]`                  | `border-inline-end-width: <value>;`                                                                              |
| `border-t`                            | `border-top-width: 1px;`                                                                                         |
| `border-t-<number>`                   | `border-top-width: <number>px;`                                                                                  |
| `border-t-(length:<custom-property>)` | `border-top-width: var(<custom-property>);`                                                                      |
| `border-t-[<value>]`                  | `border-top-width: <value>;`                                                                                     |
| `border-r`                            | `border-right-width: 1px;`                                                                                       |
| `border-r-<number>`                   | `border-right-width: <number>px;`                                                                                |
| `border-r-(length:<custom-property>)` | `border-right-width: var(<custom-property>);`                                                                    |
| `border-r-[<value>]`                  | `border-right-width: <value>;`                                                                                   |
| `border-b`                            | `border-bottom-width: 1px;`                                                                                      |
| `border-b-<number>`                   | `border-bottom-width: <number>px;`                                                                               |
| `border-b-(length:<custom-property>)` | `border-bottom-width: var(<custom-property>);`                                                                   |
| `border-b-[<value>]`                  | `border-bottom-width: <value>;`                                                                                  |
| `border-l`                            | `border-left-width: 1px;`                                                                                        |
| `border-l-<number>`                   | `border-left-width: <number>px;`                                                                                 |
| `border-l-(length:<custom-property>)` | `border-left-width: var(<custom-property>);`                                                                     |
| `border-l-[<value>]`                  | `border-left-width: <value>;`                                                                                    |
| `divide-x`                            | `& > :not(:last-child) {
  border-inline-start-width: 0px;
  border-inline-end-width: 1px;
}`                    |
| `divide-x-<number>`                   | `& > :not(:last-child) {
  border-inline-start-width: 0px;
  border-inline-end-width: <number>px;
}`             |
| `divide-x-(length:<custom-property>)` | `& > :not(:last-child) {
  border-inline-start-width: 0px;
  border-inline-end-width: var(<custom-property>);
}` |
| `divide-x-[<value>]`                  | `& > :not(:last-child) {
  border-inline-start-width: 0px;
  border-inline-end-width: <value>;
}`                |
| `divide-y`                            | `& > :not(:last-child) {
  border-top-width: 0px;
  border-bottom-width: 1px;
}`                                 |
| `divide-y-<number>`                   | `& > :not(:last-child) {
  border-top-width: 0px;
  border-bottom-width: <number>px;
}`                          |
| `divide-y-(length:<custom-property>)` | `& > :not(:last-child) {
  border-top-width: 0px;
  border-bottom-width: var(<custom-property>);
}`              |
| `divide-y-[<value>]`                  | `& > :not(:last-child) {
  border-top-width: 0px;
  border-bottom-width: <value>;
}`                             |
| `divide-x-reverse`                    | `--tw-divide-x-reverse: 1;`                                                                                      |
| `divide-y-reverse`                    | `--tw-divide-y-reverse: 1;`                                                                                      |

## Examples

### Basic example

Use `border` or `border-<number>` utilities like `border-2` and `border-4` to set the border width for all sides of an element:

```html
<div class="border border-indigo-600 ..."></div>
<div class="border-2 border-indigo-600 ..."></div>
<div class="border-4 border-indigo-600 ..."></div>
<div class="border-8 border-indigo-600 ..."></div>
```

### Individual sides

Use utilities like `border-r` and `border-t-4` to set the border width for one side of an element:

```html
<div class="border-t-4 border-indigo-500 ..."></div>
<div class="border-r-4 border-indigo-500 ..."></div>
<div class="border-b-4 border-indigo-500 ..."></div>
<div class="border-l-4 border-indigo-500 ..."></div>
```

### Horizontal and vertical sides

Use utilities like `border-x` and `border-y-4` to set the border width on two sides of an element at the same time:

```html
<div class="border-x-4 border-indigo-500 ..."></div>
<div class="border-y-4 border-indigo-500 ..."></div>
```

### Using logical properties

Use utilities like `border-s` and `border-e-4` to set the `border-inline-start-width` and `border-inline-end-width` [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts), which map to either the left or right border based on the text direction:

```html
<div dir="ltr">
  <div class="border-s-4 ..."></div>
</div>
<div dir="rtl">
  <div class="border-s-4 ..."></div>
</div>
```

### Between children

Use utilities like `divide-x` and `divide-y-4` to add borders between child elements:

```html
<div class="grid grid-cols-3 divide-x-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

#### Reversing children order

If your elements are in reverse order (using say `flex-row-reverse` or `flex-col-reverse`), use the `divide-x-reverse` or `divide-y-reverse` utilities to ensure the border is added to the correct side of each element:

```html
<div class="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-200">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Using a custom value

Use the `border-[<value>]` syntax to set the border width based on a completely custom value:

```html
<div class="border-[2vw] ...">...</div>
```

For CSS variables, you can also use the `border-(length:<custom-property>)` syntax:

```html
<div class="border-(length:--my-border-width) ...">...</div>
```

This is just a shorthand for `border-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `border-width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).