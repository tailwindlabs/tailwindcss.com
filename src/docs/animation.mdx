import { ApiTable } from "@/components/api-table.tsx";
import { CustomizingYourTheme, ResponsiveDesign, UsingACustomValue } from "@/components/content.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import dedent from "dedent";

export const title = "animation";
export const description = "Utilities for animating elements with CSS animations.";

<ApiTable
  rows={[
    [
      "animate-spin",
      dedent`
        animation: var(--animate-spin); /* spin 1s linear infinite */

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `,
    ],
    [
      "animate-ping",
      dedent`
        animation: var(--animate-ping); /* ping 1s cubic-bezier(0, 0, 0.2, 1) infinite */

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `,
    ],
    [
      "animate-pulse",
      dedent`
        animation: var(--animate-pulse); /* pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite */

        @keyframes pulse {
          50% {
            opacity: 0.5;
          }
        }
      `,
    ],
    [
      "animate-bounce",
      dedent`
        animation: var(--animate-bounce); /* bounce 1s infinite */

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `,
    ],
    ["animate-none", "animation: none;"],
    ["animate-(<custom-property>)", "animation: var(<custom-property>);"],
    ["animate-[<value>]", "animation: <value>;"],

]}
/>

## Examples

### Adding a spin animation

Use the `animate-spin` utility to add a linear spin animation to elements like loading indicators:

<Figure>

<Example>
  {
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="inline-flex cursor-not-allowed items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-400"
        disabled
      >
        <svg
          className="mr-3 -ml-1 size-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Processing…
      </button>
    </div>
  }
</Example>

```html
<!-- [!code classes:animate-spin] -->
<button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Processing…
</button>
```

</Figure>

### Adding a ping animation

Use the `animate-ping` utility to make an element scale and fade like a radar ping or ripple of water—useful for things like notification badges:

<Figure>

<Example>
  {
    <div className="flex items-center justify-center">
      <span className="relative inline-flex">
        <button
          type="button"
          className="inline-flex cursor-not-allowed items-center rounded-md bg-white px-4 py-2 text-sm leading-6 font-semibold text-sky-500 ring-1 ring-gray-900/10 transition duration-150 ease-in-out dark:bg-white/5 dark:ring-white/20"
          disabled
        >
          Transactions
        </button>
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
      </span>
    </div>
  }
</Example>

```html
<!-- [!code classes:animate-ping] -->
<span class="relative flex size-3">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
</span>
```

</Figure>

### Adding a pulse animation

Use the `animate-pulse` utility to make an element gently fade in and out—useful for things like skeleton loaders:

<Figure>

<Example>
  {
    <div className="flex items-center justify-center">
      <div className="-lg h-28 w-full max-w-xs rounded-lg bg-white p-4 ring-1 ring-gray-900/5 dark:bg-gray-800">
        <div className="flex animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:animate-pulse] -->
<div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div class="flex animate-pulse space-x-4">
    <div class="size-10 rounded-full bg-gray-200"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 rounded bg-gray-200"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 h-2 rounded bg-gray-200"></div>
          <div class="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div class="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
```

</Figure>

### Adding a bounce animation

Use the `animate-bounce` utility to make an element bounce up and down—useful for things like "scroll down" indicators:

<Figure>

<Example>
  {
    <div className="flex justify-center">
      <div className="-lg flex size-10 animate-bounce items-center justify-center rounded-full bg-white p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20">
        <svg
          className="size-6 text-violet-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:animate-bounce] -->
<svg class="size-6 animate-bounce ...">
  <!-- ... -->
</svg>
```

</Figure>

### Supporting reduced motion

For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the `motion-safe` and `motion-reduce` variants:

```html
<!-- [!code classes:motion-safe:animate-spin] -->
<button type="button" class="bg-indigo-600 ..." disabled>
  <svg class="mr-3 size-5 motion-safe:animate-spin ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Processing
</button>
```

### Using a custom value

<UsingACustomValue utility="animate" name="animation" value="wiggle_1s_ease-in-out_infinite" variable="animation" />

### Responsive design

<ResponsiveDesign property="animation" defaultClass="animate-none" featuredClass="animate-spin" />

## Customizing your theme

<CustomizingYourTheme
  utility="animate"
  name="animation"
  customName="wiggle"
  customCSS={
    dedent`
      @theme {
        /* [!code highlight:12] */
        --animate-wiggle: wiggle 1s ease-in-out infinite;

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
      }
    `}

/>
