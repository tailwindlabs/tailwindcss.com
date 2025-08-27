import { TipGood, TipBad, TipInfo } from "@/components/tips";
import { Iframe } from "@/components/iframe";
import { Example } from "@/components/example";
import { Figure } from "@/components/figure";
import { CodeExampleStack } from "@/components/code-example";

export const title = "Detecting classes in source files";
export const description = "Understanding and customizing how Tailwind scans your source files.";

## Overview

Tailwind works by scanning your project for utility classes, then generating all of the necessary CSS based on the classes you've actually used.

This makes sure your CSS is as small as possible, and is also what makes features like [arbitrary values](/docs/adding-custom-styles#using-arbitrary-values) possible.

### How classes are detected

Tailwind treats all of your source files as plain text, and doesn't attempt to actually parse your files as code in any way.

Instead it just looks for any tokens in your file that could be classes based on which characters Tailwind is expecting in class names:

```jsx
// [!code filename:JSX]
// [!code word:bg-blue-500]
// [!code word:rounded-full]
// [!code word:text-white]
// [!code word:text-black]
// [!code word:font-medium]
// [!code word:text-sm\/6]
// [!code word:font-sans]
// [!code word:bg-black]
// [!code word:bg-white]
// [!code word:className]
// [!code word:function]
// [!code word:children]
// [!code word:button]
// [!code word:shadow]
// [!code word:export]
// [!code word:colors]
// [!code word:color]
// [!code word:black]
// [!code word:white]
// [!code word:const]
// [!code word:blue]
// [!code word:return]
// [!code word:py-1.5]
// [!code word:px-2]
export function Button({ color, children }) {
  const colors = {
    black: "bg-black text-white",
    blue: "bg-blue-500 text-white",
    white: "bg-white text-black",
  };

  return (
    <button className={`${colors[color]} rounded-full px-2 py-1.5 font-sans text-sm/6 font-medium shadow`}>
      {children}
    </button>
  );
}
```

Then it tries to generate the CSS for all of these tokens, throwing away any tokens that don't map to a utility class the framework knows about.

### Dynamic class names

Since Tailwind scans your source files as plain text, it has no way of understanding string concatenation or interpolation in the programming language you're using.

<TipBad>{<>Don't construct class names dynamically</>}</TipBad>

```html
<!-- [!code filename:HTML] -->
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

In the example above, the strings `text-red-600` and `text-green-600` do not exist, so Tailwind will not generate those classes.

Instead, make sure any class names you’re using exist in full:

<TipGood>{<>Always use complete class names</>}</TipGood>

```html
<!-- [!code filename:HTML] -->
<!-- [!code word:text-red-600] -->
<!-- [!code word:text-green-600] -->
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

If you're using a component library like React or Vue, this means you shouldn't use props to dynamically construct classes:

<TipBad>Don't use props to build class names dynamically</TipBad>

```jsx
// [!code filename:JSX]
function Button({ color, children }) {
  return <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>{children}</button>;
}
```

Instead, map props to complete class names that are statically detectable at build-time:

<TipGood>Always map props to static class names</TipGood>

```jsx
// [!code filename:JSX]
function Button({ color, children }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500",
    red: "bg-red-600 hover:bg-red-500",
  };

  return <button className={`${colorVariants[color]} ...`}>{children}</button>;
}
```

This has the added benefit of letting you map different prop values to different color shades for example:

```jsx
// [!code filename:JSX]
function Button({ color, children }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500 text-white",
    red: "bg-red-500 hover:bg-red-400 text-white",
    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  };

  return <button className={`${colorVariants[color]} ...`}>{children}</button>;
}
```

As long as you always use complete class names in your code, Tailwind will generate all of your CSS perfectly every time.

### Which files are scanned

Tailwind will scan every file in your project for class names, except in the following cases:

- Files that are in your `.gitignore` file
- Files in the `node_modules` directory
- Binary files like images, videos, or zip files
- CSS files
- Common package manager lock files

If you need to scan any files that Tailwind is ignoring by default, you can [explicitly register](#explicitly-registering-sources) those sources.

## Explicitly registering sources

Use `@source` to explicitly register source paths relative to the stylesheet:

```css
/* [!code filename:CSS] */
@import "tailwindcss";
/* [!code highlight:2] */
@source "../node_modules/@acmecorp/ui-lib";
```

This is especially useful when you need to scan an external library that is built with Tailwind, since dependencies are usually listed in your `.gitignore` file and ignored by Tailwind by default.

### Setting your base path

Tailwind uses the current working directory as its starting point when scanning for class names by default.

To set the base path for source detection explicitly, use the `source()` function when importing Tailwind in your CSS:

```css
/* [!code filename:CSS] */
/* [!code word:source("../src")] */
@import "tailwindcss" source("../src");
```

This can be useful when working with monorepos where your build commands run from the root of the monorepo instead of the root of each project.

### Ignoring specific paths

Use `@source not` to ignore specific paths, relative to the stylesheet, when scanning for class names:

```css
/* [!code filename:CSS] */
@import "tailwindcss";
/* [!code highlight:2] */
@source not "../src/components/legacy";
```

This is useful when you have large directories in your project that you know don't use Tailwind classes, like legacy components or third-party libraries.

### Disabling automatic detection

Use `source(none)` to completely disable automatic source detection if you want to register all of your sources explicitly:

```css
/* [!code filename:CSS] */
/* [!code word:source("../src")] */
@import "tailwindcss" source(none);

@source "../admin";
@source "../shared";
```

This can be useful in projects that have multiple Tailwind stylesheets where you want to make sure each one only includes the classes each stylesheet needs.

## Safelisting specific utilities

If you need to make sure Tailwind generates certain class names that don’t exist in your content files, use `@source inline()` to force them to be generated:

<CodeExampleStack>
```css
/* [!code filename:CSS] */
@import "tailwindcss";
/* [!code highlight:2] */
@source inline("underline");
```

```css
/* [!code filename:Generated CSS] */
.underline {
  text-decoration-line: underline;
}
```

</CodeExampleStack>

### Safelisting variants

You can also use `@source inline()` to generate classes with variants. For example, to generate the `underline` class with hover and focus variants, add `{hover:,focus:,}` to the source input:

<CodeExampleStack>
```css
/* [!code filename:CSS] */
@import "tailwindcss";
/* [!code highlight:2] */
@source inline("{hover:,focus:,}underline");
```

```css
/* [!code filename:Generated CSS] */
.underline {
  text-decoration-line: underline;
}
@media (hover: hover) {
  .hover\:underline:hover {
    text-decoration-line: underline;
  }
}
@media (focus: focus) {
  .focus\:underline:focus {
    text-decoration-line: underline;
  }
}
```

</CodeExampleStack>

### Safelisting with ranges

The source input is [brace expanded](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html), so you can generate multiple classes at once. For example, to generate all the red background colors with hover variants, use a range:

<CodeExampleStack>
```css
/* [!code filename:CSS] */
@import "tailwindcss";
/* [!code highlight:2] */
@source inline("{hover:,}bg-red-{50,{100..900..100},950}");
```

```css
/* [!code filename:Generated CSS] */
.bg-red-50 {
  background-color: var(--color-red-50);
}
.bg-red-100 {
  background-color: var(--color-red-100);
}
.bg-red-200 {
  background-color: var(--color-red-200);
}

/* ... */

.bg-red-800 {
  background-color: var(--color-red-800);
}
.bg-red-900 {
  background-color: var(--color-red-900);
}
.bg-red-950 {
  background-color: var(--color-red-950);
}
@media (hover: hover) {
  .hover\:bg-red-50:hover {
    background-color: var(--color-red-50);
  }

  /* ... */

  .hover\:bg-red-950:hover {
    background-color: var(--color-red-950);
  }
}
```

</CodeExampleStack>

This generates red background colors from 100 to 900 in increments of 100, along with the first and last shades of 50 and 950. It also adds the `hover:` variant for each of those classes.

### Explicitly excluding classes

Use `@source not inline()` to prevent specific classes from being generated, even if they are detected in your source files:

```css
/* [!code filename:CSS] */
@import "tailwindcss";
/* [!code highlight:2] */
@source not inline("{hover:,focus:,}bg-red-{50,{100..900..100},950}");
```

This will explicitly exclude the red background utilities, along with their hover and focus variants, from being generated.
