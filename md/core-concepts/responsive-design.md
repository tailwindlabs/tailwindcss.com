# Responsive design

Using responsive utility variants to build adaptive user interfaces.

## Overview

Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.

First, make sure you've added the [viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) to the `<head>` of your document:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Then to add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the `:` character:

```html
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

There are five breakpoints by default, inspired by common device resolutions:

| Breakpoint prefix | Minimum width  | CSS                               |
| ----------------- | -------------- | --------------------------------- |
| `sm`              | 40rem (640px)  | `@media (width >= 40rem) { ... }` |
| `md`              | 48rem (768px)  | `@media (width >= 48rem) { ... }` |
| `lg`              | 64rem (1024px) | `@media (width >= 64rem) { ... }` |
| `xl`              | 80rem (1280px) | `@media (width >= 80rem) { ... }` |
| `2xl`             | 96rem (1536px) | `@media (width >= 96rem) { ... }` |

This works for **every utility class in the framework**, which means you can change literally anything at a given breakpoint — even things like letter spacing or cursor styles.

Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens:

```html
<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
    <div class="md:flex">
        <div class="md:shrink-0">
                  <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="/img/building.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
    </div>
  </div>
</div>
```

Here's how the example above works:

- By default, the outer `div` is `display: block`, but by adding the `md:flex` utility, it becomes `display: flex` on medium screens and larger.
- When the parent is a flex container, we want to make sure the image never shrinks, so we've added `md:shrink-0` to prevent shrinking on medium screens and larger. Technically we could have just used `shrink-0` since it would do nothing on smaller screens, but since it only matters on `md` screens, it's a good idea to make that clear in the class name.
- On small screens the image is automatically full width by default. On medium screens and up, we've constrained the width to a fixed size and ensured the image is full height using `md:h-full md:w-48`.

We've only used one breakpoint in this example, but you could easily customize this component at other sizes using the `sm`, `lg`, `xl`, or `2xl` responsive prefixes as well.

## Working mobile-first

Tailwind uses a mobile-first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.

What this means is that unprefixed utilities (like `uppercase`) take effect on all screen sizes, while prefixed utilities (like `md:uppercase`) only take effect at the specified breakpoint _and above_.

### Targeting mobile screens

Where this approach surprises people most often is that to style something for mobile, you need to use the unprefixed version of a utility, not the `sm:` prefixed version. Don't think of `sm:` as meaning "on small screens", think of it as "at the small _breakpoint_".

_Don't use `sm:` to target mobile devices_

```html
<!-- This will only center text on screens 640px and wider, not on small screens -->
<div class="sm:text-center"></div>
```

_Use unprefixed utilities to target mobile, and override them at larger breakpoints_

```html
<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>
```

For this reason, it's often a good idea to implement the mobile layout for a design first, then layer on any changes that make sense for `sm` screens, followed by `md` screens, etc.

### Targeting a breakpoint range

By default, styles applied by rules like `md:flex` will apply at that breakpoint and stay applied at larger breakpoints.

If you'd like to apply a utility _only_ when a specific breakpoint range is active, stack a responsive variant like `md` with a `max-*` variant to limit that style to a specific range:

```html
<div class="md:max-xl:flex">
  <!-- ... -->
</div>
```

Tailwind generates a corresponding `max-*` variant for each breakpoint, so out of the box the following variants are available:

| Variant   | Media query                      |
| --------- | -------------------------------- |
| `max-sm`  | `@media (width < 40rem) { ... }` |
| `max-md`  | `@media (width < 48rem) { ... }` |
| `max-lg`  | `@media (width < 64rem) { ... }` |
| `max-xl`  | `@media (width < 80rem) { ... }` |
| `max-2xl` | `@media (width < 96rem) { ... }` |

### Targeting a single breakpoint

To target a single breakpoint, target the range for that breakpoint by stacking a responsive variant like `md` with the `max-*` variant for the next breakpoint:

```html
<div class="md:max-lg:flex">
  <!-- ... -->
</div>
```

Read about [targeting breakpoint ranges](#targeting-a-breakpoint-range) to learn more.

## Using custom breakpoints

### Customizing your theme

Use the `--breakpoint-*` theme variables to customize your breakpoints:

```css
@import "tailwindcss";

@theme {
    --breakpoint-xs: 30rem;
  --breakpoint-2xl: 100rem;
  --breakpoint-3xl: 120rem;
}
```

This updates the `2xl` breakpoint to use `100rem` instead of the default `96rem`, and creates new `xs` and `3xl` breakpoints that can be used in your markup:

```html
<div class="grid xs:grid-cols-2 3xl:grid-cols-6">
  <!-- ... -->
</div>
```

Note that it's important to always use the same unit for defining your breakpoints or the generated utilities may be sorted in an unexpected order, causing breakpoint classes to override each other in unexpected ways.

Tailwind uses `rem` for the default breakpoints, so if you are adding additional breakpoints to the defaults, make sure you use `rem` as well.

Learn more about customizing your theme in the [theme documentation](/docs/theme).

### Removing default breakpoints

To remove a default breakpoint, reset its value to the `initial` keyword:

```css
@import "tailwindcss";

@theme {
    --breakpoint-2xl: initial;
}
```

You can also reset all of the default breakpoints using `--breakpoint-*: initial`, then define all of your breakpoints from scratch:

```css
@import "tailwindcss";

@theme {
    --breakpoint-*: initial;
  --breakpoint-tablet: 40rem;
  --breakpoint-laptop: 64rem;
  --breakpoint-desktop: 80rem;
}
```

Learn more removing default theme values in the [theme documentation](/docs/theme).

### Using arbitrary values

If you need to use a one-off breakpoint that doesn’t make sense to include in your theme, use the `min` or `max` variants to generate a custom breakpoint on the fly using any arbitrary value.

```html
<div class="max-[600px]:bg-sky-300 min-[320px]:text-center">
  <!-- ... -->
</div>
```

Learn more about arbitrary value support in the [arbitrary values](/docs/adding-custom-styles#using-arbitrary-values) documentation.

## Container queries

### What are container queries?

[Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) are a modern CSS feature that let you style something based on the size of a parent element instead of the size of the entire viewport. They let you build components that are a lot more portable and reusable because they can change based on the actual space available for that component.

### Basic example

Use the `@container` class to mark an element as a container, then use variants like `@sm` and `@md` to style child elements based on the size of the container:

```html
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- ... -->
  </div>
</div>
```

Just like breakpoint variants, container queries are mobile-first in Tailwind CSS and apply at the target container size and up.

### Max-width container queries

Use variants like `@max-sm` and `@max-md` to apply a style below a specific container size:

```html
<div class="@container">
  <div class="flex flex-row @max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

### Container query ranges

Stack a regular container query variant with a max-width container query variant to target a specific range:

```html
<div class="@container">
  <div class="flex flex-row @sm:@max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

### Named containers

For complex designs that use multiple nested containers, you can name containers using `@container/{name}` and target specific containers with variants like `@sm/{name}` and `@md/{name}`:

```html
<div class="@container/main">
  <!-- ... -->
  <div class="flex flex-row @sm/main:flex-col">
    <!-- ... -->
  </div>
</div>
```

This makes it possible to style something based on the size of a distant container, rather than just the nearest container.

### Using custom container sizes

Use the `--container-*` theme variables to customize your container sizes:

```css
@import "tailwindcss";

@theme {
    --container-8xl: 96rem;
}
```

This adds a new `8xl` container query variant that can be used in your markup:

```html
<div class="@container">
    <div class="flex flex-col @8xl:flex-row">
    <!-- ... -->
  </div>
</div>
```

Learn more about customizing your theme in the [theme documentation](/docs/theme).

<h3 id="using-arbitrary-container-query-values">
  <a href="#using-arbitrary-container-query-values">Using arbitrary values</a>
</h3>

Use variants like `@min-[475px]` and `@max-[960px]` for one-off container query sizes you don't want to add to your theme:

```html
<div class="@container">
  <div class="flex flex-col @min-[475px]:flex-row">
    <!-- ... -->
  </div>
</div>
```

### Using container query units

Use [container query length units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) like `cqw` as arbitrary values in other utility classes to reference the container size:

```html
<div class="@container">
  <div class="w-[50cqw]">
    <!-- ... -->
  </div>
</div>
```

### Container size reference

By default, Tailwind includes container sizes ranging from 16rem _(256px)_ to 80rem _(1280px)_:

| Variant | Minimum width  | CSS                                 |
| ------- | -------------- | ----------------------------------- |
| `@3xs`  | 16rem (256px)  | `@container (width >= 16rem) { … }` |
| `@2xs`  | 18rem (288px)  | `@container (width >= 18rem) { … }` |
| `@xs`   | 20rem (320px)  | `@container (width >= 20rem) { … }` |
| `@sm`   | 24rem (384px)  | `@container (width >= 24rem) { … }` |
| `@md`   | 28rem (448px)  | `@container (width >= 28rem) { … }` |
| `@lg`   | 32rem (512px)  | `@container (width >= 32rem) { … }` |
| `@xl`   | 36rem (576px)  | `@container (width >= 36rem) { … }` |
| `@2xl`  | 42rem (672px)  | `@container (width >= 42rem) { … }` |
| `@3xl`  | 48rem (768px)  | `@container (width >= 48rem) { … }` |
| `@4xl`  | 56rem (896px)  | `@container (width >= 56rem) { … }` |
| `@5xl`  | 64rem (1024px) | `@container (width >= 64rem) { … }` |
| `@6xl`  | 72rem (1152px) | `@container (width >= 72rem) { … }` |
| `@7xl`  | 80rem (1280px) | `@container (width >= 80rem) { … }` |