import { Example } from "@/components/example";
import { CodeExampleWrapper, CodeExampleStack } from "@/components/code-example";
import { Iframe } from "@/components/iframe.tsx";
import { Figure } from "@/components/figure";
import { TipGood, TipBad, TipCompat, TipInfo } from "@/components/tips";
import { MultiCursorAnimation, MultiCursorPreview } from "@/components/multi-cursor/animation.tsx";
import { MultiCursorCode } from "@/components/multi-cursor/example.tsx";
import erinLindford from "./img/erin-lindford.jpg";

export const title = "Styling with utility classes";
export const description = "Building complex components from a constrained set of primitive utilities.";

## Overview

You style things with Tailwind by combining many single-purpose presentational classes _(utility classes)_ directly in your markup:

<Figure>

<Example>
  {
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <svg className="size-12 shrink-0" viewBox="0 0 40 40">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
            <stop stopColor="#2397B3" offset="0%"></stop>
            <stop stopColor="#13577E" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
            <stop stopColor="#73DFF2" offset="0%"></stop>
            <stop stopColor="#47B1EB" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
            fill="url(#a)"
            transform="translate(1 1)"
          ></path>
          <path
            d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
            fill="url(#b)"
            transform="translate(1 1)"
          ></path>
          <path
            d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            fill="#FFF"
          ></path>
        </g>
      </svg>
      <div>
        <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
        <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
      </div>
    </div>
  }
</Example>

```html
<!-- prettier-ignore -->
<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>
```

</Figure>

For example, in the UI above we've used:

- The [display](/docs/display#flex) and [padding](/docs/padding) utilities (`flex`, `shrink-0`, and `p-6`) to control the overall layout
- The [max-width](/docs/max-width) and [margin](/docs/margin) utilities (`max-w-sm` and `mx-auto`) to constrain the card width and center it horizontally
- The [background-color](/docs/background-color), [border-radius](/docs/border-radius), and [box-shadow](/docs/box-shadow) utilities (`bg-white`, `rounded-xl`, and `shadow-lg`) to style the card's appearance
- The [width](/docs/width) and [height](/docs/height) utilities (`size-12`) to set the width and height of the logo image
- The [gap](/docs/gap) utilities (`gap-x-4`) to handle the spacing between the logo and the text
- The [font-size](/docs/font-size), [color](/docs/text-color), and [font-weight](/docs/font-weight) utilities (`text-xl`, `text-black`, `font-medium`, etc.) to style the card text

Styling things this way contradicts a lot of traditional best practices, but once you try it you'll quickly notice some really important benefits:

- **You get things done faster** — you don't spend any time coming up with class names, making decisions about selectors, or switching between HTML and CSS files, so your designs come together very fast.
- **Making changes feels safer** — adding or removing a utility class to an element only ever affects that element, so you never have to worry about accidentally breaking something another page that's using the same CSS.
- **Maintaining old projects is easier** — changing something just means finding that element in your project and changing the classes, not trying to remember how all of that custom CSS works that you haven't touched in six months.
- **Your code is more portable** — since both the structure and styling live in the same place, you can easily copy and paste entire chunks of UI around, even between different projects.
- **Your CSS stops growing** — since utility classes are so reusable, your CSS doesn't continue to grow linearly with every new feature you add to a project.

These benefits make a big difference on small projects, but they are even more valuable for teams working on long-running projects at scale.

### Why not just use inline styles?

A common reaction to this approach is wondering, “isn’t this just inline styles?” and in some ways it is — you’re applying styles directly to elements instead of assigning them a class name and then styling that class.

But using utility classes has many important advantages over inline styles, for example:

- **Designing with constraints** — using inline styles, every value is a magic number. With utilities, you’re choosing styles from a [predefined design system](/docs/theme), which makes it much easier to build visually consistent UIs.
- **Hover, focus, and other states** — inline styles can’t target states like hover or focus, but Tailwind’s [state variants](/docs/hover-focus-and-other-states) make it easy to style those states with utility classes.
- **Media queries** — you can’t use media queries in inline styles, but you can use Tailwind’s [responsive variants](/docs/responsive-design) to build fully responsive interfaces easily.

This component is fully responsive and includes a button with hover and active styles, and is built entirely with utility classes:

<Figure>

<Example resizable>
  {
    <div className="mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg ring ring-black/5 @sm:flex @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:py-4">
      <img
        className="mx-auto block h-24 rounded-full @sm:mx-0 @sm:shrink-0"
        src={erinLindford.src}
        alt="Woman's Face"
      />
      <div className="space-y-2 text-center @sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">Erin Lindford</p>
          <p className="font-medium text-gray-500">Product Engineer</p>
        </div>
        <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
          Message
        </button>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:sm:flex-row,sm:py-4,sm:gap-6,sm:mx-0,sm:shrink-0,sm:text-left,sm:items-center] -->
<!-- [!code classes:hover:text-white,hover:bg-purple-600,hover:border-transparent,active:bg-purple-700] -->
<div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
      <p class="font-medium text-gray-500">Product Engineer</p>
    </div>
    <!-- prettier-ignore -->
    <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
  </div>
</div>
```

</Figure>

## Thinking in utility classes

### Styling hover and focus states

To style an element on states like hover or focus, prefix any utility with the state you want to target, for example `hover:bg-sky-700`:

<Figure hint="Hover over this button to see the background color change">

<Example>
  {
    <div className="grid place-items-center">
      <button className="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">
        Save changes
      </button>
    </div>
  }
</Example>

```html
<!-- [!code word:hover\:bg-sky-700] -->
<button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
```

</Figure>

These prefixes are called [variants](/docs/hover-focus-and-other-states) in Tailwind, and they only apply the styles from a utility class when the condition for that variant matches.

Here's what the generated CSS looks like for the `hover:bg-sky-700` class:

```css
/* [!code filename: Generated CSS] */
.hover\:bg-sky-700 {
  &:hover {
    background-color: var(--color-sky-700);
  }
}
```

Notice how this class does nothing _unless_ the element is hovered? Its _only_ job is to provide hover styles — nothing else.

This is different from how you'd write traditional CSS, where a single class would usually provide the styles for many states:

```html
/* [!code filename:HTML] */
<button class="btn">Save changes</button>

<style>
  .btn {
    background-color: var(--color-sky-500);
    &:hover {
      background-color: var(--color-sky-700);
    }
  }
</style>
```

You can even stack variants in Tailwind to apply a utility when multiple conditions match, like combining `hover:` and `disabled:`

```html
<!-- [!code classes:disabled:hover:bg-sky-500] -->
<button class="bg-sky-500 disabled:hover:bg-sky-500 ...">Save changes</button>
```

Learn more in the documentation styling elements on [hover, focus, and other states](/docs/hover-focus-and-other-states).

### Media queries and breakpoints

Just like hover and focus states, you can style elements at different breakpoints by prefixing any utility with the breakpoint where you want that style to apply:

<Figure hint="Resize this example to see the layout change">

<Example className="@container" resizable>
  {
    <div className="grid grid-cols-2 gap-4 text-center font-mono font-medium text-white @sm:grid-cols-3">
      <div className="rounded-lg bg-sky-500 p-4">01</div>
      <div className="rounded-lg bg-sky-500 p-4">02</div>
      <div className="rounded-lg bg-sky-500 p-4">03</div>
      <div className="rounded-lg bg-sky-500 p-4">04</div>
      <div className="rounded-lg bg-sky-500 p-4">05</div>
      <div className="rounded-lg bg-sky-500 p-4">06</div>
    </div>
  }
</Example>

```html
<!-- [!code classes:sm:grid-cols-3] -->
<div class="grid grid-cols-2 sm:grid-cols-3">
  <!-- ... -->
</div>
```

</Figure>

In the example above, the `sm:` prefix makes sure that `grid-cols-3` only triggers at the `sm` breakpoint and above, which is 40rem out of the box:

```css
/* [!code filename: Generated CSS] */
.sm\:grid-cols-3 {
  @media (width >= 40rem) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

Learn more in the [responsive design](/docs/responsive-design) documentation.

### Targeting dark mode

Styling an element in dark mode is just a matter of adding the `dark:` prefix to any utility you want to apply when dark mode is active:

<Figure>

<Example padding={false}>
  {
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="p-8 pt-7">
        <p className="mb-2 text-sm font-medium text-gray-500">Light mode</p>
        <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring ring-gray-900/5">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </span>
          </div>
          <p className="mt-5 text-base font-medium tracking-tight text-gray-900">Writes upside-down</p>
          <p
            className="mt-2 text-sm text-gray-500"
            children={`The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.`}
          />
        </div>
      </div>
      <div className="bg-gray-900 p-8 pt-7">
        <p className="mb-2 text-sm font-medium text-gray-400">Dark mode</p>
        <div className="rounded-lg bg-gray-800 px-6 py-8 shadow-xl ring ring-gray-900/5">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </span>
          </div>
          <p className="mt-5 text-base font-medium tracking-tight text-white">Writes upside-down</p>
          <p
            className="mt-2 text-sm text-gray-400"
            children={`The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.`}
          />
        </div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code word:dark\:bg-gray-800] -->
<!-- prettier-ignore -->
<div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg
        class="h-6 w-6 text-white"

        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <!-- ... -->
      </svg>
    </span>
  </div>
  <!-- prettier-ignore -->
  <!-- [!code word:dark\:text-white] -->
  <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <!-- prettier-ignore -->
  <!-- [!code word:dark\:text-gray-400] -->
  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
```

</Figure>

Just like with hover states or media queries, the important thing to understand is that a single utility class will never include _both_ the light and dark styles — you style things in dark mode by using multiple classes, one for the light mode styles and another for the dark mode styles.

```css
/* [!code filename: Generated CSS] */
.dark\:bg-gray-800 {
  @media (prefers-color-scheme: dark) {
    background-color: var(--color-gray-800);
  }
}
```

Learn more in the [dark mode](/docs/dark-mode) documentation.

### Using class composition

A lot of the time with Tailwind you'll even use multiple classes to build up the value for a single CSS property, for example adding multiple filters to an element:

```html
<!-- [!code filename:HTML] -->
<!-- [!code classes:blur-sm,grayscale] -->
<div class="blur-sm grayscale">
  <!-- ... -->
</div>
```

Both of these effects rely on the `filter` property in CSS, so Tailwind uses CSS variables to make it possible to compose these effects together:

```css
/* [!code filename:Generated CSS] */
.blur-sm {
  --tw-blur: blur(var(--blur-sm));
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-grayscale,);
}
.grayscale {
  --tw-grayscale: grayscale(100%);
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-grayscale,);
}
```

The generated CSS above is slightly simplified, but the trick here is that each utility sets a CSS variable just for the effect it's meant to apply. Then the `filter` property looks at all of these variables, falling back to nothing if the variable hasn't been set.

Tailwind uses this same approach for [gradients](/docs/background-image#adding-a-linear-gradient), [shadow colors](/docs/box-shadow#setting-the-shadow-color), [transforms](/docs/translate), and more.

### Using arbitrary values

Many utilities in Tailwind are driven by [theme variables](/docs/theme), like `bg-blue-500`, `text-xl`, and `shadow-md`, which map to your underlying color palette, type scale, and shadows.

When you need to use a one-off value outside of your theme, use the special square bracket syntax for specifying arbitrary values:

```html
<!-- [!code filename:HTML] -->
<!-- [!code classes:bg-[#316ff6]] -->
<!-- prettier-ignore -->
<button class="bg-[#316ff6] ...">
  Sign in with Facebook
</button>
```

This can be useful for one-off colors outside of your color palette _(like the Facebook blue above)_, but also when you need a complex custom value like a very specific grid:

```html
<!-- [!code filename:HTML] -->
<!-- [!code classes:grid-cols-[24rem_2.5rem_minmax(0,1fr)]] -->
<div class="grid grid-cols-[24rem_2.5rem_minmax(0,1fr)]">
  <!-- ... -->
</div>
```

It's also useful when you need to use CSS features like `calc()`, even if you are using your theme values:

```html
<!-- [!code filename:HTML] -->
<!-- [!code classes:max-h-[calc(100dvh-(--spacing(6)))]] -->
<div class="max-h-[calc(100dvh-(--spacing(6)))]">
  <!-- ... -->
</div>
```

There's even a syntax for generating completely arbitrary CSS including an arbitrary property name, which can be useful for setting CSS variables:

```html
<!-- [!code filename:HTML] -->
<!-- [!code classes:[--gutter-width:1rem],lg:[--gutter-width:2rem]] -->
<div class="[--gutter-width:1rem] lg:[--gutter-width:2rem]">
  <!-- ... -->
</div>
```

Learn more in the documentation on [using arbitrary values](/docs/adding-custom-styles#using-arbitrary-values).

#### How does this even work?

Tailwind CSS isn't one big static stylesheet like you might be used to with other CSS frameworks — it generates the CSS needed based on the classes you're actually using when you compile your CSS.

It does this by scanning all of the files in your project looking for any symbol that looks like it could be a class name:

```jsx
// [!code filename:Button.jsx]
// [!code word:px-4]
// [!code word:py-2]
// [!code word:rounded-md]
// [!code word:text-base]
// [!code word:px-5]
// [!code word:py-3]
// [!code word:rounded-lg]
// [!code word:text-lg]
// [!code word:font-bold]
export default function Button({ size, children }) {
  let sizeClasses = {
    md: "px-4 py-2 rounded-md text-base",
    lg: "px-5 py-3 rounded-lg text-lg",
  }[size];

  return (
    <button type="button" className={`font-bold ${sizeClasses}`}>
      {children}
    </button>
  );
}
```

After it's found all of the potential classes, Tailwind generates the CSS for each one and compiles it all into one stylesheet of just the styles you actually need.

Since the CSS is generated based on the class name, Tailwind can recognize classes using arbitrary values like `bg-[#316ff6]` and generate the necessary CSS, even when the value isn't part of your theme.

Learn more about how this works in [detecting classes in source files](/docs/detecting-classes-in-source-files).

### Complex selectors

Sometimes you need to style an element under a combination of conditions, for example in dark mode, at a specific breakpoint, when hovered, and when the element has a specific data attribute.

Here's an example of what that looks like with Tailwind:

<CodeExampleStack>

```html
<!-- [!code filename:HTML] -->
<!-- [!code classes:dark:lg:data-current:hover:bg-indigo-600] -->
<button class="dark:lg:data-current:hover:bg-indigo-600 ...">
  <!-- ... -->
</button>
```

```css
/* [!code filename:Simplified CSS] */
@media (prefers-color-scheme: dark) and (width >= 64rem) {
  button[data-current]:hover {
    background-color: var(--color-indigo-600);
  }
}
```

</CodeExampleStack>

Tailwind also supports things like `group-hover`, which let you style an element when a specific parent is hovered:

<CodeExampleStack>

```html
<!-- [!code filename:HTML] -->
<!-- [!code classes:group,group-hover:underline] -->
<a href="#" class="group rounded-lg p-8">
  <!-- ... -->
  <span class="group-hover:underline">Read more…</span>
</a>
```

```css
/* [!code filename:Simplified CSS] */
@media (hover: hover) {
  a:hover span {
    text-decoration-line: underline;
  }
}
```

</CodeExampleStack>

This `group-*` syntax works with other variants too, like `group-focus`, `group-active`, and [many more](/docs/hover-focus-and-other-states#styling-based-on-parent-state).

For really complex scenarios _(especially when styling HTML you don't control)_, Tailwind supports [arbitrary variants](/docs/adding-custom-styles#arbitrary-variants) which let you write any selector you want, directly in a class name:

<CodeExampleStack>

```html
<!-- [!code filename:HTML] -->
<!-- [!code classes:[&>[data-active]+span]:text-blue-600] -->
<div class="[&>[data-active]+span]:text-blue-600 ...">
  <span data-active><!-- ... --></span>
  <!-- [!code highlight:2] -->
  <span>This text will be blue</span>
</div>
```

```css
/* [!code filename:Simplified CSS] */
div > [data-active] + span {
  color: var(--color-blue-600);
}
```

</CodeExampleStack>

### When to use inline styles

Inline styles are still very useful in Tailwind CSS projects, particularly when a value is coming from a dynamic source like a database or API:

```jsx
// [!code filename:branded-button.jsx]
export function BrandedButton({ buttonColor, textColor, children }) {
  return (
    <button
      style={{
        // [!code highlight:3]
        backgroundColor: buttonColor,
        color: textColor,
      }}
      className="rounded-md px-3 py-1.5 font-medium"
    >
      {children}
    </button>
  );
}
```

You might also reach for an inline style for very complicated arbitrary values that are difficult to read when formatted as a class name:

```html
<!-- [!code filename:HTML] -->
<!-- prettier-ignore -->
<div class="grid-[2fr_max(0,var(--gutter-width))_calc(var(--gutter-width)+10px)]"> <!-- [!code --] -->
<!-- prettier-ignore -->
<div style="grid-template-columns: 2fr max(0, var(--gutter-width)) calc(var(--gutter-width) + 10px)"> <!-- [!code ++] -->
  <!-- ... -->
</div>
```

Another useful pattern is setting CSS variables based on dynamic sources using inline styles, then referencing those variables with utility classes:

```jsx
// [!code filename:branded-button.jsx]
export function BrandedButton({ buttonColor, buttonColorHover, textColor, children }) {
  return (
    <button
      style={{
        // [!code highlight:4]
        "--bg-color": buttonColor,
        "--bg-color-hover": buttonColorHover,
        "--text-color": textColor,
      }}
      // [!code classes:bg-(--bg-color),text-(--text-color),hover:bg-(--bg-color-hover)]
      className="bg-(--bg-color) text-(--text-color) hover:bg-(--bg-color-hover) ..."
    >
      {children}
    </button>
  );
}
```

## Managing duplication

When you build entire projects with just utility classes, you'll inevitably find yourself repeating certain patterns to recreate the same design in different places.

For example, here the utility classes for each avatar image are repeated five separate times:

<Figure>

<Example padding={false}>
  <div className="bg-white">
    <div className="mx-auto w-72 px-8 py-6 sm:w-96 sm:px-12 sm:py-8">
      <div className="flex items-center space-x-2 text-base">
        <h4 className="text-base font-semibold text-slate-900">Contributors</h4>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
      </div>
      <div className="mt-3 flex -space-x-2 overflow-hidden">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="mt-3 text-sm font-medium">
        <a href="#" className="text-blue-500">
          + 198 others
        </a>
      </div>
    </div>
  </div>
</Example>

```html
<!-- [!code classes:inline-block,h-12,w-12,rounded-full,ring-2,ring-white] -->
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <!-- prettier-ignore -->
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```

</Figure>

Don't panic! In practice this isn't the problem you might be worried it is, and the strategies for dealing with it are things you already do every day.

### Using loops

A lot of the time a design element that shows up more than once in the rendered page is only actually authored once because the actual markup is rendered in a loop.

For example, the duplicate avatars at the beginning of this guide would almost certainly be rendered in a loop in a real project:

<Figure>

<Example padding={false}>
  <div className="bg-white">
    <div className="mx-auto w-72 px-8 py-6 sm:w-96 sm:px-12 sm:py-8">
      <div className="flex items-center space-x-2 text-base">
        <h4 className="text-base font-semibold text-slate-900">Contributors</h4>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
      </div>
      <div className="mt-3 flex -space-x-2 overflow-hidden">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="mt-3 text-sm font-medium">
        <a href="#" className="text-blue-500">
          + 198 others
        </a>
      </div>
    </div>
  </div>
</Example>

```svelte
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <!-- prettier-ignore -->
    <!-- [!code highlight:4] -->
    {#each contributors as user}
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.avatarUrl} alt={user.handle} />
    {/each}
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```

</Figure>

When elements are rendered in a loop like this, the actual class list is only written once so there's no actual duplication problem to solve.

### Using multi-cursor editing

When duplication is localized to a group of elements in a single file, the easiest way to deal with it is to use [multi-cursor editing](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor) to quickly select and edit the class list for each element at once:

<MultiCursorAnimation>
  <Figure>
    <Example>
      <MultiCursorPreview />
    </Example>
    <CodeExampleWrapper>
      <MultiCursorCode />
    </CodeExampleWrapper>
  </Figure>
</MultiCursorAnimation>

You'd be surprised at how often this ends up being the best solution. If you can quickly edit all of the duplicated class lists simultaneously, there's no benefit to introducing any additional abstraction.

### Using components

If you need to reuse some styles across multiple files, the best strategy is to create a _component_ if you're using a front-end framework like React, Svelte, or Vue, or a _template partial_ if you're using a templating language like Blade, ERB, Twig, or Nunjucks.

<Figure>

<Example padding={false}>
<div className="bg-white">
  <div className="mx-auto w-72 bg-white px-8 py-6  sm:w-96 sm:px-12 sm:py-8">
    <div>
      <img
        className="rounded-lg"
        src="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80"
        width="512"
        height="341"
        alt="Beach"
      />
      <div className="mt-4">
          <div className="text-xs font-bold text-sky-500">Private Villa</div>
          <div className="mt-1 font-bold text-gray-700">
            <a href="#" className="hover:underline">Relaxing All-Inclusive Resort in Cancun</a>
          </div>
          <div className="mt-2 text-sm text-gray-600">$299 USD per night</div>
      </div>
    </div>
  </div>
</div>

</Example>

```jsx {{ filename: 'VacationCard.jsx' }}
export function VacationCard({ img, imgAlt, eyebrow, title, pricing, url }) {
  return (
    <div>
      <img className="rounded-lg" src={img} alt={imgAlt} />
      <div className="mt-4">
        <div className="text-xs font-bold text-sky-500">{eyebrow}</div>
        <div className="mt-1 font-bold text-gray-700">
          <a href={url} className="hover:underline">
            {title}
          </a>
        </div>
        <div className="mt-2 text-sm text-gray-600">{pricing}</div>
      </div>
    </div>
  );
}
```

</Figure>

Now you can use this component in as many places as you like, while still having a single source of truth for the styles so they can easily be updated together in one place.

### Using custom CSS

If you're using a templating language like ERB or Twig instead of something like React or Vue, creating a template partial for something as small as a button can feel like overkill compared to a simple CSS class like `btn`.

While it's highly recommended that you create proper template partials for more complex components, writing some custom CSS is totally fine when a template partial feels heavy-handed.

Here's what a `btn-primary` class might look like, using [theme variables](/docs/theme#with-custom-css) to keep the design consistent:

<Figure>

<Example>

<div className="text-center">
  <button
    type="button"
    className="rounded-full bg-violet-500 px-5 py-2 font-semibold text-white shadow-md hover:bg-violet-700"
  >
    Save changes
  </button>
</div>

</Example>

<CodeExampleStack>

```html
<!-- [!code filename:HTML] -->
<button class="btn-primary">Save changes</button>
```

```css
/* [!code filename:CSS] */
@import "tailwindcss";

@layer components {
  .btn-primary {
    border-radius: calc(infinity * 1px);
    background-color: var(--color-violet-500);
    padding-inline: --spacing(5);
    padding-block: --spacing(2);
    font-weight: var(--font-weight-semibold);
    color: var(--color-white);
    box-shadow: var(--shadow-md);
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-violet-700);
      }
    }
  }
}
```

</CodeExampleStack>

</Figure>

Again though, for anything that's more complicated than just a single HTML element, we highly recommend using template partials so the styles and structure can be encapsulated in one place.

## Managing style conflicts

### Conflicting utility classes

When you add two classes that target the same CSS property, the class that appears later in the stylesheet wins. So in this example, the element will receive `display: grid` even though `flex` comes last in the actual `class` attribute:

<CodeExampleStack>

```html
<!-- [!code filename:HTML] -->
<!-- prettier-ignore -->
<div class="grid flex">
  <!-- ... -->
</div>
```

```css
/* [!code filename: CSS] */
.flex {
  display: flex;
}
.grid {
  display: grid;
}
```

</CodeExampleStack>

In general, you should just never add two conflicting classes to the same element — only ever add the one you actually want to take effect:

```jsx
// [!code filename:example.jsx]
// [!code word:gridLayout\ \?\ \"grid\"\ \:\ \"flex\"]
export function Example({ gridLayout }) {
  return <div className={gridLayout ? "grid" : "flex"}>{/* ... */}</div>;
}
```

Using component-based libraries like React or Vue, this often means exposing specific props for styling customizations instead of letting consumers add extra classes from outside of a component, since those styles will often conflict.

### Using the important modifier

When you really need to force a specific utility class to take effect and have no other means of managing the specificity, you can add `!` to the end of the class name to make all of the declarations `!important`:

<CodeExampleStack>

```html
<!-- [!code filename:HTML] -->
<!-- [!code classes:bg-red-500!] -->
<!-- prettier-ignore -->
<div class="bg-teal-500 bg-red-500!">
  <!-- ... -->
</div>
```

```css
/* [!code filename: Generated CSS] */
/* [!code word:!important] */
.bg-red-500\! {
  background-color: var(--color-red-500) !important;
}
.bg-teal-500 {
  background-color: var(--color-teal-500);
}
```

</CodeExampleStack>

### Using the important flag

If you're adding Tailwind to a project that has existing complex CSS with high specificity rules, you can use the `important` flag when importing Tailwind to mark _all_ utilities as `!important`:

<CodeExampleStack>

```css
/* [!code filename:app.css] */
/* [!code word:important] */
@import "tailwindcss" important;
```

```css
/* [!code filename:Compiled CSS] */
/* [!code word:!important] */
@layer utilities {
  .flex {
    display: flex !important;
  }
  .gap-4 {
    gap: 1rem !important;
  }
  .underline {
    text-decoration-line: underline !important;
  }
}
```

</CodeExampleStack>

### Using the prefix option

If your project has class names that conflict with Tailwind CSS utilities, you can prefix all Tailwind-generated classes and CSS variables using the `prefix` option:

<CodeExampleStack>

```css
/* [!code filename:app.css] */
/* [!code word:important] */
@import "tailwindcss" prefix(tw);
```

```css
/* [!code filename:Compiled CSS] */
/* [!code word:tw\:] */
@layer theme {
  :root {
    --tw-color-red-500: oklch(0.637 0.237 25.331);
  }
}

@layer utilities {
  .tw\:text-red-500 {
    color: var(--tw-color-red-500);
  }
}
```

</CodeExampleStack>
