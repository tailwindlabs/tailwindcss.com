import dedent from "dedent";
import { CodeExample, CodeExampleGroup, CodeBlock, svelte, html, css } from "@/components/code-example.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { Iframe } from "@/components/iframe.tsx";
import { TipGood, TipBad, TipInfo } from "@/components/tips";

export const title = "Hover, focus, and other states";
export const description = "Using utilities to style elements on hover, focus, and more.";

Every utility class in Tailwind can be applied _conditionally_ by adding a variant to the beginning of the class name that describes the condition you want to target.

For example, to apply the `bg-sky-700` class on hover, use the `hover:bg-sky-700` class:

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
<!-- [!code classes:hover:bg-sky-700] -->
<button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
```

</Figure>

<details className="mb-10 rounded-xl border border-gray-200 px-6 py-3 prose open:pb-5 dark:prose-dark dark:border-gray-800">
<summary className="font-medium cursor-default select-none text-gray-900 dark:text-gray-200">How does this compare to traditional CSS?</summary>

When writing CSS the traditional way, a single class name would do different things based on the current state:

<TipBad>{<>Traditionally the same class name applies different styles on hover</>}</TipBad>

```css
.btn-primary {
  background-color: #0ea5e9;
}

.btn-primary:hover {
  background-color: #0369a1;
}
```

In Tailwind, rather than adding the styles for a hover state to an existing class, you add another class to the element that _only_ does something on hover:

<TipGood>{<>In Tailwind, separate classes are used for the default state and the hover state</>}</TipGood>

```css
.bg-sky-500 {
  background-color: #0ea5e9;
}

.hover\:bg-sky-700:hover {
  background-color: #0369a1;
}
```

Notice how `hover:bg-sky-700` _only_ defines styles for the `:hover` state? It does nothing by default, but as soon as you hover over an element with that class, the background color will change to `sky-700`.

This is what we mean when we say a utility class can be applied _conditionally_ — by using variants you can control exactly how your design behaves in different states, without ever leaving your HTML.

</details>

Tailwind includes variants for just about everything you'll ever need, including:

- [Pseudo-classes](#pseudo-classes), like `:hover`, `:focus`, `:first-child`, and `:required`
- [Pseudo-elements](#pseudo-elements), like `::before`, `::after`, `::placeholder`, and `::selection`
- [Media and feature queries](#media-and-feature-queries), like responsive breakpoints, dark mode, and `prefers-reduced-motion`
- [Attribute selectors](#attribute-selectors), like `[dir="rtl"]` and `[open]`
- [Child selectors](#child-selectors), like `& > *` and `& *`

These variants can even be stacked to target more specific situations, for example changing the background color in dark mode, at the medium breakpoint, on hover:

```html
<!-- [!code classes:dark:md:hover:bg-fuchsia-600] -->
<button class="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
```

In this guide you'll learn about every variant available in the framework, how to use them with your own custom classes, and even how to create your own.

## Pseudo-classes

### :hover, :focus, and :active

Style elements on hover, focus, and active using the `hover`, `focus`, and `active` variants:

<Figure hint="Try interacting with this button to see the hover, focus, and active states">

<Example>
  {
    <div className="grid place-items-center">
      <button
        type="button"
        className="rounded-full bg-violet-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
      >
        Save changes
      </button>
    </div>
  }
</Example>

```html
<!-- [!code classes:hover:bg-violet-600,focus:outline-2,focus:outline-offset-2,focus:outline-violet-500,active:bg-violet-700] -->
<!-- prettier-ignore -->
<button class="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
  Save changes
</button>
```

</Figure>

Tailwind also includes variants for other interactive states like `:visited`, `:focus-within`, `:focus-visible`, and more.

See the [pseudo-class reference](#pseudo-class-reference) for a complete list of available pseudo-class variants.

### :first, :last, :odd, and :even

Style an element when it is the first-child or last-child using the `first` and `last` variants:

<Figure>

<Example className="py-0">
  {
    <div className="px-4">
      <div className="mx-auto max-w-md border-x border-x-gray-200 dark:border-x-gray-800 dark:bg-gray-950/10">
        <ul role="list" className="divide-y divide-gray-200 p-6 dark:divide-gray-800">
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Kristen Ramos</p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">kristen.ramos@example.com</p>
            </div>
          </li>
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Floyd Miles</p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">floyd.miles@example.com</p>
            </div>
          </li>
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Courtney Henry</p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">courtney.henry@example.com</p>
            </div>
          </li>
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Ted Fox</p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">ted.fox@example.com</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  }
</Example>

```svelte
<!-- [!code classes:first:pt-0,last:pb-0] -->
<ul role="list">
  {#each people as person}
    <!-- Remove top/bottom padding when first/last child -->
    <li class="flex py-4 first:pt-0 last:pb-0">
      <img class="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-gray-900 dark:text-white">{person.name}</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">{person.email}</p>
      </div>
    </li>
  {/each}
</ul>
```

</Figure>

You can also style an element when it's an odd or even child using the `odd` and `even` variants:

<Figure>

<Example padding={false} className="py-8">
  {
    <div className="">
      <div className="border-y border-y-gray-200 bg-white dark:border-y-gray-800 dark:bg-gray-950">
        <div>
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Jane Cooper
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      Regional Paradigm Technician
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      jane.cooper@example.com
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Cody Fisher
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      Product Directives Officer
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      cody.fisher@example.com
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Leonard Krasner
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      Senior Designer
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      leonard.krasner@example.com
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Emily Selman
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      VP, Hardware Engineering
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      emily.selman@example.com
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Anna Roberts
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      Chief Strategy Officer
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                      anna.roberts@example.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</Example>

```svelte
<!-- [!code classes:odd:bg-white,even:bg-gray-50,dark:odd:bg-gray-900/50,dark:even:bg-gray-950] -->
<table>
  <!-- ... -->
  <tbody>
    {#each people as person}
      <!-- Use different background colors for odd and even rows -->
      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr>
    {/each}
  </tbody>
</table>
```

</Figure>

Use the `nth-*` and `nth-last-*` variants to style children based on their position in the list:

```html
<!-- [!code classes:nth-3:underline,nth-last-5:underline,nth-of-type-4:underline,nth-last-of-type-6:underline] -->
<div class="nth-3:underline">
  <!-- ... -->
</div>
<div class="nth-last-5:underline">
  <!-- ... -->
</div>
<div class="nth-of-type-4:underline">
  <!-- ... -->
</div>
<div class="nth-last-of-type-6:underline">
  <!-- ... -->
</div>
```

You can pass any number you want to these by default, and use arbitrary values for more complex expressions like `nth-[2n+1_of_li]`.

Tailwind also includes variants for other structural pseudo-classes like `:only-child`, `:first-of-type`, `:empty`, and more.

See the [pseudo-class reference](#pseudo-class-reference) for a complete list of available pseudo-class variants.

### :required and :disabled

Style form elements in different states using variants like `required`, `invalid`, and `disabled`:

<Figure hint="Try making the email address valid to see the styles change">

<Example className="py-0">
  {
    <div className="mx-auto max-w-md border-x border-x-gray-200 px-6 py-5 dark:border-x-gray-800 dark:bg-gray-950/10">
      <form>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
              defaultValue="tbone"
              disabled
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email-1"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
              defaultValue="george@krugerindustrial."
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="none"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
              defaultValue="Bosco"
            />
          </div>
        </div>
        <div className="mt-6 text-right">
          <button className="rounded-md bg-sky-500 px-5 py-2.5 text-sm leading-5 font-semibold text-white hover:bg-sky-700">
            Save changes
          </button>
        </div>
      </form>
    </div>
  }
</Example>

```html
<!-- [!code classes:invalid:border-pink-500,invalid:text-pink-600,focus:border-sky-500,focus:outline,focus:outline-sky-500,focus:invalid:border-pink-500,focus:invalid:outline-pink-500,disabled:border-gray-200,disabled:bg-gray-50,disabled:text-gray-500,disabled:shadow-none,dark:disabled:border-gray-700,dark:disabled:bg-gray-800/20] -->
<input
  type="text"
  value="tbone"
  disabled
  class="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."
/>
```

</Figure>

Using variants for this sort of thing can reduce the amount of conditional logic in your templates, letting you use the same set of classes regardless of what state an input is in and letting the browser apply the right styles for you.

Tailwind also includes variants for other form states like `:read-only`, `:indeterminate`, `:checked`, and more.

See the [pseudo-class reference](#pseudo-class-reference) for a complete list of available pseudo-class variants.

### :has()

Use the `has-*` variant to style an element based on the state or content of its descendants:

<Figure>

<Example className="py-0">
  {
    <div className="mx-auto max-w-md border-x border-x-gray-200 px-4 py-6 text-gray-700 dark:border-x-gray-800 dark:bg-gray-950/10 dark:text-gray-200">
      <fieldset>
        <legend className="text-base font-semibold text-gray-900 dark:text-white">Payment method</legend>
        <div className="mt-4 space-y-2">
          <label
            htmlFor="apple"
            className="grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-gray-100 has-checked:bg-indigo-50 has-checked:text-indigo-800 has-checked:ring-indigo-200 dark:hover:bg-white/5 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900"
          >
            <svg className="w-8" fill="currentColor" viewBox="0 0 24 13">
              <path d="M3.96299 1.735C3.22833 1.73504 2.50814 1.9393 1.88285 2.32497C1.25756 2.71063 0.751781 3.26252 0.42199 3.919C0.144511 4.47115 0 5.08054 0 5.6985C0 6.31645 0.144511 6.92584 0.42199 7.478C0.751781 8.13447 1.25756 8.68636 1.88285 9.07202C2.50814 9.45769 3.22833 9.66195 3.96299 9.662C5.03299 9.662 5.93299 9.31 6.58999 8.705C7.33799 8.015 7.76999 6.995 7.76999 5.789C7.76976 5.51882 7.74634 5.24916 7.69999 4.983H3.96399V6.509H6.10399C6.06043 6.75276 5.96798 6.98519 5.83221 7.19228C5.69644 7.39937 5.52016 7.57684 5.31399 7.714C4.95799 7.955 4.49999 8.093 3.96399 8.093C2.92999 8.093 2.05299 7.396 1.73899 6.457C1.57315 5.96493 1.57315 5.43207 1.73899 4.94C2.05299 4 2.92999 3.304 3.96399 3.304C4.52899 3.29475 5.07496 3.50811 5.48399 3.898L6.61599 2.768C5.89873 2.09384 4.94728 1.72362 3.96299 1.735ZM10.464 2.285V9.185H11.35V6.39H12.815C13.418 6.39 13.925 6.194 14.337 5.802C14.5421 5.61815 14.705 5.39214 14.8146 5.13945C14.9242 4.88676 14.9779 4.61337 14.972 4.338C14.9762 4.06405 14.9216 3.79238 14.8121 3.54125C14.7026 3.29011 14.5406 3.06533 14.337 2.882C14.1354 2.68674 13.897 2.53337 13.6358 2.43073C13.3746 2.32809 13.0956 2.27822 12.815 2.284L10.464 2.285ZM12.891 3.135C13.0456 3.13769 13.1981 3.17139 13.3395 3.23408C13.4808 3.29678 13.6082 3.3872 13.714 3.5C13.8267 3.60959 13.9162 3.74065 13.9774 3.88544C14.0385 4.03024 14.07 4.18582 14.07 4.343C14.07 4.50017 14.0385 4.65576 13.9774 4.80055C13.9162 4.94534 13.8267 5.07641 13.714 5.186C13.6007 5.30328 13.4642 5.39562 13.3132 5.45709C13.1622 5.51857 13 5.54783 12.837 5.543H11.35V3.135H12.837C12.855 3.13458 12.873 3.13458 12.891 3.135ZM17.015 4.31C16.173 4.31 15.538 4.618 15.108 5.235L15.889 5.726C16.177 5.309 16.569 5.1 17.064 5.1C17.3798 5.09612 17.6855 5.21145 17.92 5.423C18.0354 5.51846 18.1282 5.63844 18.1915 5.77423C18.2548 5.91001 18.2871 6.05818 18.286 6.208V6.41C17.946 6.217 17.512 6.121 16.986 6.121C16.369 6.121 15.876 6.266 15.507 6.555C15.137 6.843 14.953 7.232 14.953 7.72C14.949 7.9396 14.994 8.15734 15.0848 8.35733C15.1757 8.55732 15.31 8.73451 15.478 8.876C15.828 9.184 16.263 9.339 16.783 9.339C17.393 9.339 17.881 9.069 18.248 8.529H18.286V9.184H19.134V6.275C19.134 5.665 18.944 5.185 18.566 4.835C18.186 4.485 17.67 4.31 17.015 4.31ZM19.278 4.464L21.224 8.886L20.126 11.266H21.041L24 4.463H23.035L21.667 7.854H21.647L20.241 4.464H19.278ZM17.132 6.832C17.626 6.832 18.012 6.942 18.288 7.162C18.288 7.534 18.141 7.858 17.848 8.135C17.5835 8.39951 17.225 8.54839 16.851 8.549C16.6011 8.55376 16.3573 8.47178 16.161 8.317C16.0697 8.25093 15.9954 8.16402 15.9445 8.06349C15.8935 7.96295 15.8673 7.85171 15.868 7.739C15.868 7.482 15.988 7.269 16.231 7.092C16.471 6.919 16.772 6.832 17.132 6.832Z" />
            </svg>
            Google Pay
            <input
              name="payment_method"
              id="apple"
              value="google"
              type="radio"
              className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding ring-1 ring-gray-950/20 outline-none checked:border-indigo-500 checked:ring-indigo-500"
              defaultChecked
            />
          </label>
          <label
            htmlFor="google"
            className="grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-gray-100 has-checked:bg-indigo-50 has-checked:text-indigo-800 has-checked:ring-indigo-200 dark:hover:bg-white/5 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900"
          >
            <svg className="mt-1 w-8 fill-current" fill="currentColor" viewBox="0 0 24 13">
              <path d="M4.38526 1.86704C4.10401 2.19606 3.65392 2.45565 3.20387 2.41854C3.14762 1.97367 3.36793 1.50091 3.62579 1.20892C3.90704 0.870635 4.39932 0.62962 4.79781 0.611084C4.84468 1.07453 4.66182 1.52871 4.38526 1.86704ZM4.79312 2.50663C4.14146 2.46956 3.5836 2.87272 3.27418 2.87272C2.96012 2.87272 2.48659 2.52517 1.97092 2.53443C1.30056 2.5437 0.677025 2.91906 0.33479 3.51694C-0.368428 4.71265 0.151978 6.48308 0.831712 7.45632C1.16457 7.9383 1.56306 8.46662 2.0881 8.44809C2.58507 8.42955 2.78195 8.12834 3.38204 8.12834C3.98677 8.12834 4.16026 8.44809 4.68531 8.43882C5.2291 8.42955 5.57134 7.95688 5.9042 7.47485C6.28388 6.92799 6.43862 6.39499 6.44799 6.36718C6.43862 6.35791 5.3979 5.96402 5.38853 4.77753C5.37915 3.78576 6.20893 3.31304 6.24643 3.28524C5.77759 2.59931 5.04629 2.52517 4.79312 2.50663ZM8.55765 1.16258V8.38789H9.69212V5.91768H11.2626C12.6971 5.91768 13.7051 4.94445 13.7051 3.53552C13.7051 2.12664 12.7159 1.16262 11.3001 1.16262H8.5576L8.55765 1.16258ZM9.69212 2.10806H11.0001C11.9846 2.10806 12.5471 2.62711 12.5471 3.54011C12.5471 4.4531 11.9846 4.97684 10.9954 4.97684H9.69212V2.10806ZM15.7772 8.44345C16.4898 8.44345 17.1508 8.08664 17.4508 7.52119H17.4743V8.38785H18.5244V4.79143C18.5244 3.74868 17.6806 3.07666 16.3819 3.07666C15.1771 3.07666 14.2864 3.75795 14.2536 4.69412H15.2756C15.36 4.24921 15.7771 3.95722 16.3491 3.95722C17.043 3.95722 17.4321 4.27701 17.4321 4.86562V5.26415L16.0163 5.34756C14.6989 5.42634 13.9864 5.95934 13.9864 6.88629C13.9864 7.82245 14.7224 8.44345 15.7772 8.44345ZM16.0819 7.58607C15.4772 7.58607 15.0927 7.29876 15.0927 6.85844C15.0927 6.4043 15.4631 6.14012 16.171 6.09841L17.4321 6.01963V6.42743C17.4321 7.10408 16.8508 7.58607 16.0819 7.58607H16.0819ZM19.9261 10.3529C21.0325 10.3529 21.5529 9.93584 22.0076 8.67057L24 3.14617H22.8467L21.5107 7.41456H21.4872L20.1511 3.14617H18.9651L20.8871 8.40638L20.784 8.72618C20.6106 9.2684 20.3293 9.47698 19.8277 9.47698C19.7386 9.47698 19.5652 9.46771 19.4948 9.45844V10.3251C19.5604 10.3436 19.8417 10.3529 19.9261 10.3529Z" />
            </svg>
            Apple Pay
            <input
              name="payment_method"
              id="google"
              value="apple"
              type="radio"
              className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding ring-1 ring-gray-950/20 outline-none checked:border-indigo-500 checked:ring-indigo-500"
            />
          </label>
          <label
            htmlFor="credit-card"
            className="grid grid-cols-[24px_1fr_auto] items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-gray-100 has-checked:bg-indigo-50 has-checked:text-indigo-800 has-checked:ring-indigo-200 dark:hover:bg-white/5 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900"
          >
            <svg className="w-8" viewBox="0 0 24 13" fill="none">
              <rect stroke="currentColor" x="0.5" y="0.5" width="23" height="11" rx="1.5" />
              <path
                fill="currentColor"
                d="M16.539 3.18591C16.0742 3.01652 15.5828 2.93152 15.088 2.93491C13.488 2.93491 12.358 3.74091 12.35 4.89791C12.34 5.74791 13.153 6.22691 13.768 6.51091C14.399 6.80291 14.61 6.98691 14.608 7.24791C14.604 7.64491 14.104 7.82491 13.639 7.82491C13 7.82491 12.651 7.73591 12.114 7.51291L11.915 7.41991L11.688 8.75191C12.077 8.91391 12.778 9.05291 13.502 9.06491C15.203 9.06491 16.315 8.26391 16.328 7.03291C16.342 6.35391 15.902 5.84091 14.976 5.41691C14.413 5.14191 14.064 4.95791 14.064 4.67891C14.064 4.43191 14.363 4.16791 14.988 4.16791C15.404 4.15785 15.8174 4.23589 16.201 4.39691L16.351 4.46391L16.578 3.17691L16.539 3.18591ZM20.691 3.04291H19.441C19.052 3.04291 18.759 3.14991 18.589 3.53591L16.185 8.98191H17.886L18.226 8.08891L20.302 8.09091C20.351 8.29991 20.501 8.98191 20.501 8.98191H22.001L20.691 3.04291ZM10.049 2.99291H11.67L10.656 8.93491H9.03705L10.049 2.99091V2.99291ZM5.93405 6.26791L6.10205 7.09291L7.68605 3.04291H9.40305L6.85205 8.97391H5.13905L3.73905 3.95191C3.71637 3.8691 3.66312 3.79798 3.59005 3.75291C3.08545 3.49225 2.55079 3.29444 1.99805 3.16391L2.02005 3.03891H4.62905C4.98305 3.05291 5.26805 3.16391 5.36305 3.54191L5.93305 6.27091L5.93405 6.26791ZM18.691 6.87391L19.337 5.21191C19.329 5.22991 19.47 4.86891 19.552 4.64591L19.663 5.15891L20.038 6.87291H18.69L18.691 6.87391Z"
              />
            </svg>
            Credit Card
            <input
              name="payment_method"
              id="credit-card"
              value="credit-card"
              type="radio"
              className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding ring-1 ring-gray-950/20 outline-none checked:border-indigo-500 checked:ring-indigo-500"
            />
          </label>
        </div>
      </fieldset>
    </div>
  }
</Example>

```html
<!-- [!code classes:has-checked:bg-indigo-50,has-checked:text-indigo-900,has-checked:ring-indigo-200,dark:has-checked:bg-indigo-950,dark:has-checked:text-indigo-200,dark:has-checked:ring-indigo-900]-->
<label
  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
>
  <svg fill="currentColor">
    <!-- ... -->
  </svg>
  Google Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label>
```

</Figure>

You can use `has-*` with a pseudo-class, like `has-[:focus]`, to style an element based on the state of its descendants. You can also use element selectors, like `has-[img]` or `has-[a]`, to style an element based on the content of its descendants.

#### Styling based on the descendants of a group

If you need to style an element based on the descendants of a parent element, you can mark the parent with the `group` class and use the `group-has-*` variant to style the target element:

<Figure>

<Example className="py-0">
  {
    <div className="mx-auto grid max-w-md divide-y divide-gray-100 border-x border-x-gray-200 text-gray-700 dark:divide-gray-800 dark:border-x-gray-800 dark:bg-gray-950/10 dark:text-gray-300">
      <div className="group grid grid-cols-[32px_1fr_auto] items-center gap-x-4 px-4 py-4 pt-6">
        <img
          className="size-[32px] rounded-full"
          src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=80"
          alt=""
        />
        {/* This is not an h4 because we're converting h4's to links in MDX files */}
        <div className="font-semibold text-gray-900 dark:text-white">Spencer Sharp</div>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hidden size-4 group-has-[a]:block"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        <p className="col-start-2 text-sm">
          Product Designer at{" "}
          <a href="#" className="dark;text-blue-400 text-blue-500 underline">
            planeteria.tech
          </a>
        </p>
      </div>
      <div className="group grid grid-cols-[32px_1fr_auto] items-center gap-x-4 px-4 py-4">
        <img
          className="size-[32px] rounded-full"
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        {/* This is not an h4 because we're converting h4's to links in MDX files */}
        <div className="font-semibold text-gray-900 dark:text-white">Casey Jordan</div>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hidden size-4 group-has-[a]:block"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        <p className="col-start-2 text-sm">Just happy to be here.</p>
      </div>
      <div className="group grid grid-cols-[32px_1fr_auto] items-center gap-x-4 px-4 py-4">
        <img
          className="size-[32px] rounded-full"
          src="https://images.unsplash.com/photo-1590895340509-793cb98788c9?q=80&w=256&h=256&&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        {/* This is not an h4 because we're converting h4's to links in MDX files */}
        <div className="font-semibold text-gray-900 dark:text-white">Alex Reed</div>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hidden size-4 group-has-[a]:block"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        <p className="col-start-2 text-sm">
          A multidisciplinary designer, working at the intersection of art and technology. <br />
          <br />
          <a href="#" className="dark;text-blue-400 text-blue-500 underline">
            alex-reed.com
          </a>
        </p>
      </div>
      <div className="group grid grid-cols-[32px_1fr_auto] items-center gap-x-4 px-4 py-4 pb-6">
        <img
          className="size-[32px] rounded-full"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        {/* This is not an h4 because we're converting h4's to links in MDX files */}
        <div className="font-semibold text-gray-900 dark:text-white">Taylor Bailey</div>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hidden size-4 group-has-[a]:block"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        <p className="col-start-2 text-sm">Pushing pixels. Slinging divs.</p>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:group-has-[a]:block,group] -->
<div class="group ...">
  <img src="..." />
  <h4>Spencer Sharp</h4>
  <svg class="hidden group-has-[a]:block ..."><!-- ... --></svg>
  <p>Product Designer at <a href="...">planeteria.tech</a></p>
</div>
```

</Figure>

#### Styling based on the descendants of a peer

If you need to style an element based on the descendants of a sibling element, you can mark the sibling with the `peer` class and use the `peer-has-*` variant to style the target element:

<Figure>

<Example className="py-0">
  {
    <div className="mx-auto max-w-md border-x border-x-gray-200 px-4 py-6 dark:border-x-gray-800 dark:bg-gray-950/10">
      <fieldset className="space-y-3">
        <legend className="text-base font-semibold text-gray-900 dark:text-white">Today</legend>
        <div className="grid grid-cols-[1fr_24px] items-center gap-6">
          <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-gray-100 dark:hover:bg-white/5">
            <input
              type="checkbox"
              className="peer size-3.5 appearance-none rounded-sm border border-gray-300 accent-pink-500 checked:appearance-auto dark:border-gray-600 dark:accent-pink-600"
              defaultChecked
            />
            <span className="text-gray-700 select-none peer-checked:text-gray-400 peer-checked:line-through dark:text-gray-300">
              Create a to do list
            </span>
          </label>
          <div className="size-[26px] rounded-md p-1 peer-has-checked:hidden hover:bg-red-50 hover:text-pink-500">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_24px] items-center gap-6">
          <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-gray-100 dark:hover:bg-white/5">
            <input
              type="checkbox"
              className="peer size-3.5 appearance-none rounded-sm border border-gray-300 accent-pink-500 checked:appearance-auto dark:border-gray-600 dark:accent-pink-600"
            />
            <span className="text-gray-700 select-none peer-checked:text-gray-400 peer-checked:line-through dark:text-gray-300">
              Check off first item
            </span>
          </label>
          <div className="size-[26px] rounded-md p-1 peer-has-checked:hidden hover:bg-red-50 hover:text-pink-500">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_24px] items-center gap-6">
          <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-gray-100 dark:hover:bg-white/5">
            <input
              type="checkbox"
              className="peer size-3.5 appearance-none rounded-sm border border-gray-300 accent-pink-500 checked:appearance-auto dark:border-gray-600 dark:accent-pink-600"
            />
            <span className="text-gray-700 select-none peer-checked:text-gray-400 peer-checked:line-through dark:text-gray-300">
              Investigate race condition
            </span>
          </label>
          <div className="block size-[26px] rounded-md p-1 peer-has-checked:hidden hover:bg-red-50 hover:text-pink-500">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </fieldset>
    </div>
  }
</Example>

```html
<!-- [!code classes:peer-has-checked:hidden,peer] -->
<div>
  <label class="peer ...">
    <input type="checkbox" name="todo[1]" checked />
    Create a to do list
  </label>
  <svg class="peer-has-checked:hidden ..."><!-- ... --></svg>
</div>
```

</Figure>

### :not()

Use the `not-` variant to style an element when a condition is not true.

It's particularly powerful when combined with other pseudo-class variants, for example combining `not-focus:` with `hover:` to only apply hover styles when an element is not focused:

<Figure hint="Try focusing on the button and then hovering over it">

<Example>
  {
    <div className="grid place-items-center">
      <button
        type="button"
        className="rounded-full bg-indigo-600 px-5 py-2 text-sm leading-5 font-semibold text-white hover:not-focus:bg-indigo-700 focus:outline focus:outline-violet-300 active:bg-violet-700"
        tabIndex="0"
      >
        Save changes
      </button>
    </div>
  }
</Example>

```html
<!-- [!code classes:hover:not-focus:bg-indigo-700] -->
<button class="bg-indigo-600 hover:not-focus:bg-indigo-700">
  <!-- ... -->
</button>
```

</Figure>

You can also combine the `not-` variant with media query variants like `forced-colors` or `supports` to only style an element when something about the user's environment is not true:

```html
<!-- [!code classes:not-supports-[display:grid]:flex] -->
<div class="not-supports-[display:grid]:flex">
  <!-- ... -->
</div>
```

### Styling based on parent state

When you need to style an element based on the state of some _parent_ element, mark the parent with the `group` class, and use `group-*` variants like `group-hover` to style the target element:

<Figure hint="Hover over the card to see both text elements change color">

<Example>
  {
    <a
      href="#"
      className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-900/5 hover:bg-sky-500 hover:ring-sky-500 dark:bg-white/5 dark:ring-white/10"
    >
      <div className="flex items-center space-x-3">
        <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4"
          />
        </svg>
        {/* This is not an h3 because we're converting h3's to links in MDX files */}
        <div className="text-sm font-semibold text-gray-900 group-hover:text-white dark:text-white">New project</div>
      </div>
      <p className="text-sm text-gray-500 group-hover:text-white dark:text-gray-400">
        Create a new project from a variety of starting templates.
      </p>
    </a>
  }
</Example>

```html
<!-- [!code classes:group-hover:stroke-white] -->
<!-- [!code classes:group-hover:text-white] -->
<!-- [!code classes:group-hover:text-white] -->
<!-- [!code classes:group] -->
<a href="#" class="group ...">
  <div>
    <svg class="stroke-sky-500 group-hover:stroke-white ..." fill="none" viewBox="0 0 24 24">
      <!-- ... -->
    </svg>
    <h3 class="text-gray-900 group-hover:text-white ...">New project</h3>
  </div>
  <p class="text-gray-500 group-hover:text-white ...">Create a new project from a variety of starting templates.</p>
</a>
```

</Figure>

This pattern works with every pseudo-class variant, for example `group-focus`, `group-active`, or even `group-odd`.

#### Differentiating nested groups

When nesting groups, you can style something based on the state of a _specific_ parent group by giving that parent a unique group name using a `group/{name}` class, and including that name in variants using classes like `group-hover/{name}`:

<Figure>

<Example className="py-0">
  {
    <div className="px-4">
      <ul
        role="list"
        className="mx-auto max-w-md border-x border-x-gray-200 p-2 dark:border-x-gray-800 dark:bg-gray-950/10"
      >
        <li className="group/item relative flex items-center justify-between rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-white/5">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="w-full text-sm leading-6">
              <a href="#" className="font-semibold text-gray-900 dark:text-white">
                <span className="absolute inset-0 rounded-xl" aria-hidden="true"></span>Leslie Abbott
              </a>
              <div className="text-gray-500">Co-Founder / CEO</div>
            </div>
          </div>
          <a
            href="#"
            className="group/edit invisible relative flex items-center rounded-full py-1 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 transition group-hover/item:visible hover:bg-gray-200 dark:text-gray-400"
          >
            <span className="font-semibold transition group-hover/edit:text-gray-700">Call</span>
            <svg
              className="mt-px h-5 w-5 text-gray-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li className="group/item relative flex items-center justify-between rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-white/5">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="w-full text-sm leading-6">
              <a href="#" className="font-semibold text-gray-900 dark:text-white">
                <span className="absolute inset-0 rounded-xl" aria-hidden="true"></span>Hector Adams
              </a>
              <div className="text-gray-500">VP, Marketing</div>
            </div>
          </div>
          <a
            href="#"
            className="group/edit invisible relative flex items-center rounded-full py-1 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 transition group-hover/item:visible hover:bg-gray-200 dark:text-gray-400"
          >
            <span className="font-semibold transition group-hover/edit:text-gray-700">Call</span>
            <svg
              className="mt-px h-5 w-5 text-gray-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li className="group/item relative flex items-center justify-between rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-white/5">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="w-full text-sm leading-6">
              <a href="#" className="font-semibold text-gray-900 dark:text-white">
                <span className="absolute inset-0 rounded-xl" aria-hidden="true"></span>Blake Alexander
              </a>
              <div className="text-gray-500">Account Coordinator</div>
            </div>
          </div>
          <a
            href="#"
            className="group/edit invisible relative flex items-center rounded-full py-1 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 transition group-hover/item:visible hover:bg-gray-200 dark:text-gray-400"
          >
            <span className="font-semibold transition group-hover/edit:text-gray-700">Call</span>
            <svg
              className="mt-px h-5 w-5 text-gray-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  }
</Example>

```svelte
<!-- [!code classes:group-hover/item:visible] -->
<!-- [!code classes:group-hover/edit:text-gray-700] -->
<!-- [!code classes:group-hover/edit:translate-x-0.5] -->
<!-- [!code classes:group-hover/edit:text-gray-500] -->
<!-- [!code classes:group/item] -->
<!-- [!code classes:group/edit] -->
<ul role="list">
  {#each people as person}
    <li class="group/item ...">
      <!-- ... -->
      <a class="group/edit invisible group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-gray-500 ..."><!-- ... --></svg>
      </a>
    </li>
  {/each}
</ul>
```

</Figure>

Groups can be named however you like and don’t need to be configured in any way — just name your groups directly in your markup and Tailwind will automatically generate the necessary CSS.

#### Arbitrary groups

You can create one-off `group-*` variants on the fly by providing your own selector as an [arbitrary value](/docs/adding-custom-styles#using-arbitrary-values) between square brackets:

<CodeExampleGroup
  filenames={["HTML", "Generated CSS"]}
>
  <CodeBlock
    example={html`
      <!-- [!code classes:group-[.is-published]:block] -->
      <div class="group is-published">
        <div class="hidden group-[.is-published]:block">
          Published
        </div>
      </div>
    `}
  />
  <CodeBlock
    example={css`
      .group-\[\.is-published\]\:block {
        &:is(:where(.group):is(.is-published) *) {
          display: block;
        }
      }
    `}
  />
</CodeExampleGroup>

For more control, you can use the `&` character to mark where `.group` should end up in the final selector relative to the selector you are passing in:

<CodeExampleGroup
  filenames={["HTML", "Generated CSS"]}
>
  <CodeBlock
    example={html`
      <!-- [!code classes:_&] -->
      <div class="group">
        <div class="group-[:nth-of-type(3)_&]:block">
          <!-- ... -->
        </div>
      </div>
    `}
  />
  <CodeBlock
    example={css`
      .group-\[\:nth-of-type\(3\)_\&\]\:block {
        &:is(:nth-of-type(3) :where(.group) *) {
          display: block;
        }
      }
    `}
  />
</CodeExampleGroup>

#### Implicit groups

The `in-*` variant works similarly to `group` except you don't need to add `group` to the parent element:

{/* prettier-ignore */}
```html
<!-- [!code classes:in-focus:opacity-100] -->
<!-- [!code --:3] -->
<div tabindex="0" class="group">
  <div class="opacity-50 group-focus:opacity-100">
<!-- [!code ++:3] -->
<div tabindex="0">
  <div class="opacity-50 in-focus:opacity-100">
    <!-- ... -->
  </div>
</div>
```

The `in-*` variant responds to state changes in any parent, so if you want more fine-grained control you'll need to use `group` instead.

### Styling based on sibling state

When you need to style an element based on the state of a _sibling_ element, mark the sibling with the `peer` class, and use `peer-*` variants like `peer-invalid` to style the target element:

<Figure hint="Try making the email address valid to see the warning disappear">

<Example className="py-0">
  {
    <div className="mx-auto max-w-md border-x border-x-gray-200 px-6 pt-6 pb-5 dark:border-x-gray-800 dark:bg-gray-950/10">
      <form>
        <div>
          <label htmlFor="email-2" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email-2"
              className="peer block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none sm:text-sm"
              defaultValue="george@krugerindustrial."
              placeholder="you@example.com"
            />
            <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
              Please provide a valid email address.
            </p>
          </div>
        </div>
      </form>
    </div>
  }
</Example>

```html
<!-- [!code classes:peer-invalid:visible] -->
<!-- [!code classes:peer] -->
<form>
  <label class="block">
    <span class="...">Email</span>
    <input type="email" class="peer ..." />
    <p class="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
  </label>
</form>
```

</Figure>

This makes it possible to do all sorts of neat tricks, like [floating labels](https://www.youtube.com/watch?v=nJzKi6oIvBA) for example without any JS.

This pattern works with every pseudo-class variant, for example `peer-focus`, `peer-required`, and `peer-disabled`.

It's important to note that the `peer` marker can only be used on _previous_ siblings because of how the [subsequent-sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator) works in CSS:

<TipBad>{<>Won't work, only previous siblings can be marked as peers</>}</TipBad>

```html
<!-- [!code classes:peer-invalid:text-red-500] -->
<!-- [!code classes:peer] -->
<label>
  <span class="peer-invalid:text-red-500 ...">Email</span>
  <input type="email" class="peer ..." />
</label>
```

#### Differentiating peers

When using multiple peers, you can style something on the state of a _specific_ peer by giving that peer a unique name using a `peer/{name}` class, and including that name in variants using classes like `peer-checked/{name}`:

<Figure>

<Example className="py-0">
  {
    <div className="px-4">
      <fieldset className="mx-auto max-w-md border-x border-x-gray-200 p-8 text-sm text-gray-700 dark:border-x-gray-800 dark:bg-gray-950/10 dark:text-gray-100">
        <div className="mb-6 border-b border-gray-200 pb-2 text-base font-semibold dark:border-gray-800">
          Published status
        </div>
        <input
          id="draft"
          className="peer/draft form-radio mr-2 mb-0.5 border-gray-300 text-sky-400 focus:ring-sky-400"
          type="radio"
          name="status"
          defaultChecked
        />
        <label className="font-medium peer-checked/draft:text-sky-500" htmlFor="draft">
          Draft
        </label>
        <input
          id="published"
          className="peer/published form-radio mr-2 mb-0.5 ml-4 border-gray-300 text-sky-400 focus:ring-sky-400"
          type="radio"
          name="status"
        />
        <label className="font-medium peer-checked/published:text-sky-500" htmlFor="published">
          Published
        </label>
        <div className="mt-4 hidden text-gray-500 peer-checked/draft:block dark:text-gray-400">
          Drafts are only visible to administrators.
        </div>
        <div className="mt-4 hidden text-gray-500 peer-checked/published:block dark:text-gray-400">
          Your post will be publicly visible on your site.
        </div>
      </fieldset>
    </div>
  }
</Example>

```html
<!-- [!code classes:peer-checked/draft:block] -->
<!-- [!code classes:peer-checked/draft:text-sky-500] -->
<!-- [!code classes:peer-checked/published:text-sky-500] -->
<!-- [!code classes:peer-checked/published:block] -->
<!-- [!code classes:peer/draft] -->
<!-- [!code classes:peer/published] -->
<fieldset>
  <legend>Published status</legend>

  <input id="draft" class="peer/draft" type="radio" name="status" checked />
  <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

  <input id="published" class="peer/published" type="radio" name="status" />
  <label for="published" class="peer-checked/published:text-sky-500">Published</label>
  <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>
```

</Figure>

Peers can be named however you like and don’t need to be configured in any way — just name your peers directly in your markup and Tailwind will automatically generate the necessary CSS.

#### Arbitrary peers

You can create one-off `peer-*` variants on the fly by providing your own selector as an [arbitrary value](/docs/adding-custom-styles#using-arbitrary-values) between square brackets:

<CodeExampleGroup
  filenames={["HTML", "Generated CSS"]}
>
  <CodeBlock
    example={html`
      <!-- [!code classes:peer-[.is-dirty]] -->
      <form>
        <label for="email">Email:</label>
        <input id="email" name="email" type="email" class="is-dirty peer" required />
        <div class="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
        <!-- ... -->
      </form>
    `}
  />
  <CodeBlock
    example={css`
      .peer-\[\.is-dirty\]\:peer-required\:block {
        &:is(:where(.peer):is(.is-dirty) ~ *) {
          &:is(:where(.peer):required ~ *) {
            display: block;
          }
        }
      }
    `}
  />
</CodeExampleGroup>

For more control, you can use the `&` character to mark where `.peer` should end up in the final selector relative to the selector you are passing in:

<CodeExampleGroup
  filenames={["HTML", "Generated CSS"]}
>
  <CodeBlock
    filename="HTML"
    example={html`
      <!-- [!code classes:peer-[:nth-of-type(3)_&]:block] -->
      <div>
        <input type="text" class="peer" />
        <div class="hidden peer-[:nth-of-type(3)_&]:block">
          <!-- ... -->
        </div>
      </div>
    `}
  />
  <CodeBlock
    filename="Generated CSS"
    example={css`
      .peer-\[\:nth-of-type\(3\)_\&\]\:block {
        &:is(:nth-of-type(3) :where(.peer) ~ *) {
          display: block;
        }
      }
    `}
  />
</CodeExampleGroup>

## Pseudo-elements

### ::before and ::after

Style the `::before` and `::after` pseudo-elements using the `before` and `after` variants:

<Figure>

<Example className="py-0">
  {
    <div className="mx-auto max-w-sm border-x border-x-gray-200 px-6 pt-6 pb-5 dark:border-x-gray-800 dark:bg-gray-950/10">
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
            Email
          </span>
          <input
            type="email"
            name="email"
            id="email-3"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline focus:outline-sky-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </label>
      </form>
    </div>
  }
</Example>

```html
<!-- [!code classes:after:content-['*']] -->
<!-- [!code classes:after:ml-0.5] -->
<!-- [!code classes:after:text-red-500] -->
<label>
  <span class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
  <input type="email" name="email" class="..." placeholder="you@example.com" />
</label>
```

</Figure>

When using these variants, Tailwind will automatically add `content: ''` by default so you don't have to specify it unless you want a different value:

<Figure>

<Example className="py-0">
  {
    <div className="px-6">
      <div className="mx-auto max-w-lg border-x border-x-gray-200 px-6 py-8 dark:border-x-gray-800 dark:bg-gray-950/10">
        <blockquote className="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
          When you look{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span className="relative text-white dark:text-gray-950">annoyed</span>
          </span>{" "}
          all the time, people think that you're busy.
        </blockquote>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:before:block] -->
<!-- [!code classes:before:absolute] -->
<!-- [!code classes:before:-inset-1] -->
<!-- [!code classes:before:-skew-y-3] -->
<!-- [!code classes:before:bg-pink-500] -->
<blockquote class="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
  When you look
  <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
    <span class="relative text-white dark:text-gray-950">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>
```

</Figure>

It's worth noting that you don't really need `::before` and `::after` pseudo-elements for most things in Tailwind projects — it's usually simpler to just use a real HTML element.

For example, here's the same design from above but using a `<span>` instead of the `::before` pseudo-element, which is a little easier to read and is actually less code:

```html
<blockquote class="text-center text-2xl font-semibold text-gray-900 italic">
  When you look
  <span class="relative">
    <!-- [!code highlight:2] -->
    <span class="absolute -inset-1 block -skew-y-3 bg-pink-500" aria-hidden="true"></span>
    <span class="relative text-white">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>
```

Save `before` and `after` for situations where it's important that the content of the pseudo-element is not actually in the DOM and can't be selected by the user.

### ::placeholder

Style the placeholder text of any input or textarea using the `placeholder` variant:

<Figure>

<Example>
  {
    <div className="mx-auto max-w-sm">
      <form>
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="sr-only">Search</span>
          <input
            type="text"
            name="search"
            className="block w-full rounded-md border border-gray-300 py-2 pr-3 pl-9 text-gray-700 shadow-sm placeholder:text-gray-400 placeholder:italic focus:border-sky-500 focus:outline focus:outline-sky-500 sm:text-sm dark:border-gray-600 dark:text-white"
            placeholder="Search for anything..."
          />
        </label>
      </form>
    </div>
  }
</Example>

```html
<!-- [!code classes:placeholder:italic,placeholder:text-gray-500] -->
<input
  class="placeholder:text-gray-500 placeholder:italic ..."
  placeholder="Search for anything..."
  type="text"
  name="search"
/>
```

</Figure>

### ::file

Style the button in file inputs using the `file` variant:

<Figure>

<Example className="py-0">
  {
    <div className="px-6">
      <div className="mx-auto max-w-sm border-x border-x-gray-200 px-6 py-8 dark:border-x-gray-800 dark:bg-gray-950/10">
        <form className="flex items-center space-x-6">
          <div className="shrink-0">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500"
            />
          </label>
        </form>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:file:mr-4,file:rounded-full,file:border-0,file:bg-violet-50,file:px-4,file:py-2,file:text-sm,file:font-semibold,file:text-violet-700,hover:file:bg-violet-100,dark:file:bg-violet-600,dark:file:text-violet-100,dark:hover:file:bg-violet-500] -->
<input
  type="file"
  class="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
/>
```

</Figure>

### ::marker

Style the counters or bullets in lists using the `marker` variant:

<Figure>

<Example className="py-0">
  {
    <div className="px-6">
      <div className="mx-auto max-w-sm border-x border-x-gray-200 px-8 py-8 dark:border-x-gray-800 dark:bg-gray-950/10">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-200">Ingredients</h2>
        <ul role="list" className="mt-3 list-disc space-y-3 pl-5 text-gray-500 marker:text-sky-400 dark:text-gray-400">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:marker:text-sky-400] -->
<ul role="list" class="list-disc marker:text-sky-400 ...">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>
```

</Figure>

We've designed the `marker` variant to be inheritable, so although you can use it directly on an `<li>` element, you can also use it on a parent to avoid repeating yourself.

### ::selection

Style the active text selection using the `selection` variant:

<Figure hint="Try selecting some of this text with your mouse">

<Example className="py-0">
  {
    <div className="px-6">
      <div className="mx-auto max-w-lg border-x border-x-gray-200 px-6 py-8 text-gray-700 selection:bg-fuchsia-300 selection:text-fuchsia-900 dark:border-x-gray-800 dark:bg-gray-950/10 dark:text-gray-300">
        <p>
          So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made
          my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
          kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
        </p>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:selection:bg-fuchsia-300] -->
<!-- [!code classes:selection:text-fuchsia-900] -->
<div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">
  <p>
    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my
    way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all
    living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
  </p>
</div>
```

</Figure>

We've designed the `selection` variant to be inheritable, so you can add it anywhere in the tree and it will be applied to all descendant elements.

This makes it easy to set the selection color to match your brand across your entire site:

```html
<!-- [!code classes:selection:bg-pink-300] -->
<html>
  <head>
    <!-- ... -->
  </head>
  <body class="selection:bg-pink-300">
    <!-- ... -->
  </body>
</html>
```

### ::first-line and ::first-letter

Style the first line in a block of content using the `first-line` variant, and the first letter using the `first-letter` variant:

<Figure>

<Example className="py-0">
  {
    <div className="px-6">
      <div className="mx-auto max-w-lg border-x border-x-gray-200 px-6 py-8 font-serif text-gray-700 dark:border-x-gray-800 dark:bg-gray-950/10 dark:text-gray-200">
        <p
          className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:leading-none first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase dark:first-letter:text-white"
          children={`Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.`}
        />
        <p
          className="mt-6"
          children={`Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.`}
        />
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:first-line:uppercase] -->
<!-- [!code classes:first-line:tracking-widest] -->
<!-- [!code classes:first-letter:text-7xl] -->
<!-- [!code classes:first-letter:font-bold] -->
<!-- [!code classes:first-letter:text-gray-900] -->
<!-- [!code classes:first-letter:mr-3] -->
<!-- [!code classes:first-letter:float-left] -->
<!-- [!code classes:first-line:uppercase] -->
<!-- [!code classes:first-line:tracking-widest] -->
<!-- [!code classes:first-letter:text-7xl] -->
<!-- [!code classes:first-letter:font-bold] -->
<!-- [!code classes:first-letter:text-white] -->
<!-- [!code classes:first-letter:mr-3] -->
<!-- [!code classes:first-letter:float-left] -->
<div class="text-gray-700">
  <p
    class="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase"
  >
    Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"?
  </p>
  <p class="mt-6">Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</p>
</div>
```

</Figure>

### ::backdrop

Style the backdrop of a [native `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) using the `backdrop` variant:

```html
<!-- [!code classes:backdrop:bg-gray-50] -->
<dialog class="backdrop:bg-gray-50">
  <form method="dialog">
    <!-- ... -->
  </form>
</dialog>
```

If you're using native `<dialog>` elements in your project, you may also want to read about [styling open/closed states](/docs/hover-focus-and-other-states#openclosed-state) using the `open` variant.

## Media and feature queries

### Responsive breakpoints

To style an element at a specific breakpoint, use responsive variants like `md` and `lg`.

For example, this will render a 3-column grid on mobile, a 4-column grid on medium-width screens, and a 6-column grid on large-width screens:

```html
<!-- [!code classes:md:grid-cols-4,lg:grid-cols-6] -->
<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
  <!-- ... -->
</div>
```

To style an element based on the width of a parent element instead of the viewport, use variants like `@md` and `@lg`:

```html
<!-- [!code classes:@container,@md:flex-row] -->
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- ... -->
  </div>
</div>
```

Check out the [Responsive design](/docs/responsive-design) documentation for an in-depth look at how these features work.

### prefers-color-scheme

The `prefers-color-scheme` media query tells you whether the user prefers a light theme or dark theme, and is usually configured at the operating system level.

Use utilities with no variant to target light mode, and use the `dark` variant to provide overrides for dark mode:

<Figure>

<Example padding={false} className="py-0">
  {
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="p-8 pt-7">
        <p className="mb-2 text-sm font-medium text-gray-500">Light mode</p>
        <div className="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5">
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
          {/* This is not an h3 because we're converting h3's to links in MDX files */}
          <div className="mt-5 text-base font-medium tracking-tight text-gray-900">Writes upside-down</div>
          <p className="mt-2 text-sm text-gray-500">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
            space.
          </p>
        </div>
      </div>
      <div className="border-l border-l-transparent bg-black/90 p-8 pt-7 dark:border-l-white/10 dark:bg-transparent">
        <p className="mb-2 text-sm font-medium text-gray-400">Dark mode</p>
        <div className="rounded-lg bg-gray-800 px-6 py-8 shadow-xl ring-1 ring-gray-900/5">
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
          {/* This is not an h3 because we're converting h3's to links in MDX files */}
          <div className="mt-5 text-base font-medium tracking-tight text-white">Writes upside-down</div>
          <p className="mt-2 text-sm text-gray-400">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
            space.
          </p>
        </div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:dark:bg-gray-900] -->
<!-- [!code classes:dark:text-white] -->
<!-- [!code classes:dark:text-gray-400] -->
<div class="bg-white dark:bg-gray-900 ...">
  <!-- ... -->
  <h3 class="text-gray-900 dark:text-white ...">Writes upside-down</h3>
  <p class="text-gray-500 dark:text-gray-400 ...">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
```

</Figure>

Check out the [Dark Mode](/docs/dark-mode) documentation for an in-depth look at how this feature works.

### prefers-reduced-motion

The `prefers-reduced-motion` media query tells you if the user has requested that you minimize non-essential motion.

Use the `motion-reduce` variant to conditionally add styles when the user has requested reduced motion:

<Figure hint="Try emulating &#96;prefers-reduced-motion: reduce&#96; in your developer tools to hide the spinner">

<Example>
  {
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white shadow"
        disabled
      >
        <svg
          className="mr-3 -ml-1 h-5 w-5 animate-spin text-white motion-reduce:hidden"
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
        Processing...
      </button>
    </div>
  }
</Example>

```html
<!-- [!code classes:motion-reduce:hidden] -->
<button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin motion-reduce:hidden ..." viewBox="0 0 24 24"><!-- ... --></svg>
  Processing...
</button>
```

</Figure>

Tailwind also includes a `motion-safe` variant that only adds styles when the user has _not_ requested reduced motion. This can be useful when using the `motion-reduce` helper would mean having to "undo" a lot of styles:

```html
<!-- [!code classes:motion-reduce:hover:translate-y-0] -->
<!-- [!code classes:motion-reduce:transition-none] -->
<!-- [!code classes:motion-safe:hover:-translate-x-0.5] -->
<!-- [!code classes:motion-safe:transition] -->
<!-- Using `motion-reduce` can mean lots of "undoing" styles -->
<button class="transition hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ...">
  Save changes
</button>

<!-- Using `motion-safe` is less code in these situations -->
<button class="motion-safe:transition motion-safe:hover:-translate-x-0.5 ...">Save changes</button>
```

### prefers-contrast

The `prefers-contrast` media query tells you if the user has requested more or less contrast.

Use the `contrast-more` variant to conditionally add styles when the user has requested more contrast:

<Figure hint="Try emulating &#96;prefers-contrast: more&#96; in your developer tools to see the changes">

<Example className="py-0">
  {
    <div className="mx-auto max-w-sm border-x border-x-gray-200 px-6 pt-6 pb-4 dark:border-x-gray-800 dark:bg-gray-950/10">
      <form>
        <div>
          <label htmlFor="contrast-example" className="block text-sm font-medium text-gray-700 dark:text-white">
            Social Security Number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contrast-example"
              id="contrast-example"
              className="block w-full rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline focus:outline-sky-500 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 sm:text-sm dark:border-gray-900 dark:contrast-more:border-gray-700 dark:contrast-more:placeholder-gray-300"
              placeholder="000-00-0000"
            />
            <p className="mt-2 text-sm text-gray-600 opacity-10 contrast-more:opacity-100 dark:text-gray-400">
              We need this to steal your identity.
            </p>
          </div>
        </div>
      </form>
    </div>
  }
</Example>

```html
<!-- [!code classes:contrast-more:border-gray-400,contrast-more:placeholder-gray-500,contrast-more:opacity-100] -->
<label class="block">
  <span class="block text-sm font-medium text-gray-700">Social Security Number</span>
  <input
    class="border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 ..."
  />
  <p class="text-gray-600 opacity-10 contrast-more:opacity-100 ...">We need this to steal your identity.</p>
</label>
```

</Figure>

Tailwind also includes a `contrast-less` variant you can use to conditionally add styles when the user has requested less contrast.

### forced-colors

The `forced-colors` media query indicates if the user is using a forced colors mode. These modes override your site's colors with a user defined palette for text, backgrounds, links and buttons.

Use the `forced-colors` variant to conditionally add styles when the user has enabled a forced color mode:

<Figure hint="Try emulating &#96;forced-colors: active&#96; in your developer tools to see the changes">

<Example className="py-0">
  {
    <div className="mx-auto max-w-sm border-x border-x-gray-200 px-6 pt-6 pb-4 text-gray-900 dark:border-x-gray-800 dark:bg-gray-950/10 dark:text-white">
      <form>
        <legend> Choose a theme: </legend>
        <div className="mt-4 grid grid-flow-col">
          <label htmlFor="theme-1" className="text-sm font-medium text-gray-700 dark:text-white">
            <div className="relative grid h-16 w-16 items-center justify-center rounded-xl border border-transparent bg-transparent text-white hover:bg-gray-50 has-checked:border-cyan-500 has-checked:bg-cyan-50 has-checked:text-cyan-50 dark:text-gray-800 dark:hover:bg-gray-800 dark:has-checked:bg-cyan-950 dark:has-checked:text-cyan-950 forced-colors:border-0">
              <input
                type="radio"
                name="themes"
                id="theme-1"
                className="appearance-none forced-colors:appearance-auto"
                defaultChecked
              />
              <p className="hidden forced-colors:block">Cyan</p>
              <div className="absolute top-3 left-3 h-6 w-6 rounded-full bg-cyan-200 forced-colors:hidden"></div>
              <div className="absolute right-3 bottom-3 h-6 w-6 rounded-full bg-cyan-500 ring-2 ring-current forced-colors:hidden"></div>
            </div>
          </label>
          <label htmlFor="theme-2" className="text-sm font-medium text-gray-700 dark:text-white">
            <div className="relative grid h-16 w-16 items-center justify-center rounded-xl border border-transparent bg-transparent text-white hover:bg-gray-50 has-checked:border-blue-500 has-checked:bg-blue-50 has-checked:text-blue-50 dark:text-gray-800 dark:hover:bg-gray-800 dark:has-checked:bg-blue-950 dark:has-checked:text-blue-950 forced-colors:border-0">
              <input
                type="radio"
                name="themes"
                id="theme-2"
                className="appearance-none forced-colors:appearance-auto"
              />
              <p className="hidden forced-colors:block">Blue</p>
              <div className="absolute top-3 left-3 h-6 w-6 rounded-full bg-blue-200 forced-colors:hidden"></div>
              <div className="absolute right-3 bottom-3 h-6 w-6 rounded-full bg-blue-500 ring-2 ring-current forced-colors:hidden"></div>
            </div>
          </label>
          <label htmlFor="theme-3" className="text-sm font-medium text-gray-700 dark:text-white">
            <div className="relative grid h-16 w-16 items-center justify-center rounded-xl border border-transparent bg-transparent text-white hover:bg-gray-50 has-checked:border-indigo-500 has-checked:bg-indigo-50 has-checked:text-indigo-50 dark:text-gray-800 dark:hover:bg-gray-800 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-950 forced-colors:border-0">
              <input
                type="radio"
                name="themes"
                id="theme-3"
                className="appearance-none forced-colors:appearance-auto"
              />
              <p className="hidden forced-colors:block">Indigo</p>
              <div className="absolute top-3 left-3 h-6 w-6 rounded-full bg-indigo-200 forced-colors:hidden"></div>
              <div className="absolute right-3 bottom-3 h-6 w-6 rounded-full bg-indigo-500 ring-2 ring-current forced-colors:hidden"></div>
            </div>
          </label>
          <label htmlFor="theme-4" className="text-sm font-medium text-gray-700 dark:text-white">
            <div className="relative grid h-16 w-16 items-center justify-center rounded-xl border border-transparent bg-transparent text-white hover:bg-gray-50 has-checked:border-purple-500 has-checked:bg-purple-50 has-checked:text-purple-50 dark:text-gray-800 dark:hover:bg-gray-800 dark:has-checked:bg-purple-950 dark:has-checked:text-purple-950 forced-colors:border-0">
              <input
                type="radio"
                name="themes"
                id="theme-4"
                className="appearance-none forced-colors:appearance-auto"
              />
              <p className="hidden forced-colors:block">Purple</p>
              <div className="absolute top-3 left-3 h-6 w-6 rounded-full bg-purple-200 forced-colors:hidden"></div>
              <div className="absolute right-3 bottom-3 h-6 w-6 rounded-full bg-purple-500 ring-2 ring-current forced-colors:hidden"></div>
            </div>
          </label>
        </div>
      </form>
    </div>
  }
</Example>

```html
<!-- [!code classes:forced-colors:appearance-auto] -->
<!-- [!code classes:forced-colors:block] -->
<!-- [!code classes:forced-colors:hidden] -->
<!-- [!code classes:forced-colors:hidden] -->
<label>
  <input type="radio" class="appearance-none forced-colors:appearance-auto" />
  <p class="hidden forced-colors:block">Cyan</p>
  <div class="bg-cyan-200 forced-colors:hidden ..."></div>
  <div class="bg-cyan-500 forced-colors:hidden ..."></div>
</label>
```

</Figure>

Use the `not-forced-colors` variant to apply styles based when the user is _not_ using a forced colors mode:

```html
<!-- [!code classes:not-forced-colors:appearance-none] -->
<div class="not-forced-colors:appearance-none ...">
  <!-- ... -->
</div>
```

Tailwind also includes a [forced color adjust](/docs/forced-color-adjust) utilities to opt in and out of forced colors.

### inverted-colors

Use the `inverted-colors` variant to conditionally add styles when the user has enabled an inverted color scheme:

```html
<!-- [!code classes:inverted-colors:shadow-none] -->
<div class="shadow-xl inverted-colors:shadow-none ...">
  <!-- ... -->
</div>
```

### pointer and any-pointer

The `pointer` media query tells you whether the user has a primary pointing device, like a mouse, and the accuracy of that pointing device.

Use the `pointer-fine` variant to target an accurate pointing device, like a mouse or trackpad, or the `pointer-coarse` variant to target a less accurate pointing device, like a touchscreen, which can be useful for providing larger click targets on touch devices:

<Figure hint="Try emulating a touch device in your developer tools to see the changes">

<Example>
  {
    <fieldset aria-label="Choose a memory option" className="mx-auto max-w-md">
      <div className="flex items-center justify-between">
        <div className="text-sm/6 font-medium text-gray-900 dark:text-white">RAM</div>
        <a href="#" className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
          See performance specs
        </a>
      </div>
      <div className="mt-4 grid grid-cols-6 gap-2 max-sm:grid-cols-3 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
        <label className="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
          <input type="radio" name="memory-option" value="4 GB" className="sr-only" />
          <span>4 GB</span>
        </label>
        <label className="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
          <input type="radio" name="memory-option" value="8 GB" className="sr-only" defaultChecked />
          <span>8 GB</span>
        </label>
        <label className="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
          <input type="radio" name="memory-option" value="16 GB" className="sr-only" />
          <span>16 GB</span>
        </label>
        <label className="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
          <input type="radio" name="memory-option" value="32 GB" className="sr-only" />
          <span>32 GB</span>
        </label>
        <label className="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
          <input type="radio" name="memory-option" value="64 GB" className="sr-only" />
          <span>64 GB</span>
        </label>
        <label className="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
          <input type="radio" name="memory-option" value="128 GB" className="sr-only" />
          <span>128 GB</span>
        </label>
      </div>
    </fieldset>
  }
</Example>

```html
<!-- [!code classes:pointer-coarse:mt-6,pointer-coarse:grid-cols-3,pointer-coarse:gap-4,pointer-coarse:p-4] -->
<fieldset aria-label="Choose a memory option">
  <div class="flex items-center justify-between">
    <div>RAM</div>
    <a href="#"> See performance specs </a>
  </div>
  <div class="mt-4 grid grid-cols-6 gap-2 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
    <label class="p-2 pointer-coarse:p-4 ...">
      <input type="radio" name="memory-option" value="4 GB" className="sr-only" />
      <span>4 GB</span>
    </label>
    <!-- ... -->
  </div>
</fieldset>
```

</Figure>

While `pointer`only targets the primary pointing device, `any-pointer` is used to target any of the pointing devices that might be available. Use the `any-pointer-fine` and `any-pointer-coarse` variants to provide different styles if at least one connected pointing device meets the criteria.

You can use `pointer-none` and `any-pointer-none` to target the absence of a pointing device.

### orientation

Use the `portrait` and `landscape` variants to conditionally add styles when the viewport is in a specific orientation:

```html
<!-- [!code classes:portrait:hidden,landscape:hidden] -->
<div>
  <div class="portrait:hidden">
    <!-- ... -->
  </div>
  <div class="landscape:hidden">
    <p>This experience is designed to be viewed in landscape. Please rotate your device to view the site.</p>
  </div>
</div>
```

### scripting

Use the `noscript` variant to conditionally add styles based on whether the user has scripting, such as JavaScript, enabled:

```html
<!-- [!code classes:noscript:block] -->
<div class="hidden noscript:block">
  <p>This experience requires JavaScript to function. Please enable JavaScript in your browser settings.</p>
</div>
```

### print

Use the `print` variant to conditionally add styles that only apply when the document is being printed:

```html
<!-- [!code classes:print:hidden] -->
<!-- [!code classes:print:block] -->
<div>
  <article class="print:hidden">
    <h1>My Secret Pizza Recipe</h1>
    <p>This recipe is a secret, and must not be shared with anyone</p>
    <!-- ... -->
  </article>
  <div class="hidden print:block">Are you seriously trying to print this? It's secret!</div>
</div>
```

### @supports

Use the `supports-[...]` variant to style things based on whether a certain feature is supported in the user's browser:

```html
<!-- [!code classes:supports-[display:grid]:grid] -->
<div class="flex supports-[display:grid]:grid ...">
  <!-- ... -->
</div>
```

Under the hood the `supports-[...]` variant generates [`@supports rules`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) and takes anything you’d use with `@supports (...)` between the square brackets, like a property/value pair, and even expressions using `and` and `or`.

For terseness, if you only need to check if a property is supported (and not a specific value), you can just specify the property name:

```html
<!-- [!code classes:supports-backdrop-filter:bg-black/25,supports-backdrop-filter:backdrop-blur] -->
<div class="bg-black/75 supports-backdrop-filter:bg-black/25 supports-backdrop-filter:backdrop-blur ...">
  <!-- ... -->
</div>
```

Use the `not-supports-[...]` variant to style things based on whether a certain feature is not supported in the user's browser:

```html
<!-- [!code classes:not-supports-[display:grid]:flex] -->
<div class="not-supports-[display:grid]:flex">
  <!-- ... -->
</div>
```

You can configure shortcuts for common `@supports` rules you're using in your project by creating a new variant in the `supports-*` namespace:

```css
@custom-variant supports-grid {
  @supports (display: grid) {
    @slot;
  }
}
```

You can then use these custom `supports-*` variants in your project:

```html
<!-- [!code classes:supports-grid:grid] -->
<div class="supports-grid:grid">
  <!-- ... -->
</div>
```

### @starting-style

Use the `starting` variant to set the appearance of an element when it is first rendered in the DOM, or transitions from `display: none` to visible:

<Figure>

<Example className="flex py-0">
  {
    <Iframe className="h-[340px] w-full">
      <div className="grid h-full items-center justify-center">
        <button
          popoverTarget="my-popover"
          className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
        >
          Check for updates
        </button>
        <div
          popover="auto"
          id="my-popover"
          className="relative inset-y-0 mx-auto my-auto transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left opacity-0 shadow-xl transition-all [transition-behavior:allow-discrete] duration-500 sm:w-full sm:max-w-96 sm:p-6 dark:bg-gray-800 [&:is([open],:popover-open)]:opacity-100 [@starting-style]:[&:is([open],:popover-open)]:opacity-0"
        >
          <div>
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-600/10">
              <svg
                className="size-5 text-indigo-400 dark:text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white" id="modal-title">
                Update available
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  A new software update is available: <span className="font-semibold">v2.0.4.</span>
                  <br />
                  Click the button below to install it.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
            >
              Install
            </button>
          </div>
        </div>
      </div>
    </Iframe>
  }
</Example>

```html
<!-- [!code classes:starting:open:opacity-0] -->
<div>
  <button popovertarget="my-popover">Check for updates</button>
  <div popover id="my-popover" class="opacity-0 starting:open:opacity-0 ...">
    <!-- ... -->
  </div>
</div>
```

</Figure>

## Attribute selectors

### ARIA states

Use the `aria-*` variant to conditionally style things based on [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes).

For example, to apply the `bg-sky-700` class when the `aria-checked` attribute is set to `true`, use the `aria-checked:bg-sky-700` class:

```html
<!-- [!code classes:aria-checked:bg-sky-700] -->
<div aria-checked="true" class="bg-gray-600 aria-checked:bg-sky-700">
  <!-- ... -->
</div>
```

By default we've included variants for the most common boolean ARIA attributes:

{

<table>
  <thead>
    <tr>
      <th>Variant</th>
      <th>CSS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code className="before:content-none after:content-none">aria-busy</code>
      </td>
      <td>
        <code className="whitespace-nowrap before:content-none after:content-none">
          <span className="text-gray-400">&</span>[aria-busy="true"]
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code className="before:content-none after:content-none">aria-checked</code>
      </td>
      <td>
        <code className="whitespace-nowrap before:content-none after:content-none">
          <span className="text-gray-400">&</span>[aria-checked="true"]
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code className="before:content-none after:content-none">aria-disabled</code>
      </td>
      <td>
        <code className="whitespace-nowrap before:content-none after:content-none">
          <span className="text-gray-400">&</span>[aria-disabled="true"]
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code className="before:content-none after:content-none">aria-expanded</code>
      </td>
      <td>
        <code className="whitespace-nowrap before:content-none after:content-none">
          <span className="text-gray-400">&</span>[aria-expanded="true"]
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code className="before:content-none after:content-none">aria-hidden</code>
      </td>
      <td>
        <code className="whitespace-nowrap before:content-none after:content-none">
          <span className="text-gray-400">&</span>[aria-hidden="true"]
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code className="before:content-none after:content-none">aria-pressed</code>
      </td>
      <td>
        <code className="whitespace-nowrap before:content-none after:content-none">
          <span className="text-gray-400">&</span>[aria-pressed="true"]
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code className="before:content-none after:content-none">aria-readonly</code>
      </td>
      <td>
        <code className="whitespace-nowrap before:content-none after:content-none">
          <span className="text-gray-400">&</span>[aria-readonly="true"]
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code className="before:content-none after:content-none">aria-required</code>
      </td>
      <td>
        <code className="whitespace-nowrap before:content-none after:content-none">
          <span className="text-gray-400">&</span>[aria-required="true"]
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code className="before:content-none after:content-none">aria-selected</code>
      </td>
      <td>
        <code className="whitespace-nowrap before:content-none after:content-none">
          <span className="text-gray-400">&</span>[aria-selected="true"]
        </code>
      </td>
    </tr>
  </tbody>
</table>

}

You can customize which `aria-*` variants are available by creating a new variant:

```css
@custom-variant aria-asc (&[aria-sort="ascending"]);
@custom-variant aria-desc (&[aria-sort="descending"]);
```

If you need to use a one-off `aria` variant that doesn’t make sense to include in your project, or for more complex ARIA attributes that take specific values, use square brackets to generate a property on the fly using any arbitrary value:

<Figure>

<Example padding={false} className="py-0">
  {
    <div className="py-8">
      <table className="w-full border-collapse border-y border-gray-400 bg-white text-sm dark:border-white/10 dark:bg-transparent">
        <thead className="bg-gray-50 dark:bg-white/5">
          <tr>
            <th
              className="group border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900 first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-200"
              aria-sort="ascending"
            >
              <span className="flex w-full items-center justify-between gap-2">
                Invoice #
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5 fill-gray-500 group-aria-[sort=ascending]:rotate-0 group-aria-[sort=descending]:rotate-180"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900 first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-200">
              Client
            </th>
            <th className="border border-gray-300 px-4 py-3 text-right font-semibold text-gray-900 first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-200">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-gray-500 first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-400">
              #100
            </td>
            <td className="border border-gray-300 px-4 py-3 text-gray-500 first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-400">
              Pendant Publishing
            </td>
            <td className="border border-gray-300 px-4 py-3 text-right text-gray-500 tabular-nums first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-400">
              $2,000.00
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-gray-500 first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-400">
              #101
            </td>
            <td className="border border-gray-300 px-4 py-3 text-gray-500 first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-400">
              Kruger Industrial Smoothing
            </td>
            <td className="border border-gray-300 px-4 py-3 text-right text-gray-500 tabular-nums first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-400">
              $545.00
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 text-gray-500 first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-400">
              #102
            </td>
            <td className="border border-gray-300 px-4 py-3 text-gray-500 first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-400">
              J. Peterman
            </td>
            <td className="border border-gray-300 px-4 py-3 text-right text-gray-500 tabular-nums first:border-l-0 last:border-r-0 dark:border-white/10 dark:text-gray-400">
              $10,000.25
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  }
</Example>

  <CodeExampleGroup
    filenames={["HTML", "Generated CSS"]}
  >
    <CodeBlock
      example={html`
        <!-- [!code classes:aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')],aria-[sort=descending]:bg-[url('/img/up-arrow.svg')]] -->
        <table>
          <thead>
            <tr>
              <th
                aria-sort="ascending"
                class="aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')] aria-[sort=descending]:bg-[url('/img/up-arrow.svg')]"
              >
                Invoice #
              </th>
              <!-- ... -->
            </tr>
          </thead>
          <!-- ... -->
        </table>
      `}
    />
    <CodeBlock
      example={css`
        .aria-\[sort\=ascending\]\:bg-\[url\(\'\/img\/down-arrow\.svg\'\)\] {
          &[aria-sort="ascending"] {
            background-image: url('/img/down-arrow.svg');
          }
        }
        .aria-\[sort\=descending\]\:bg-\[url\(\'\/img\/up-arrow\.svg\'\)\] {
          &[aria-sort="descending"] {
            background-image: url('/img/up-arrow.svg');
          }
        }
      `}
    />

  </CodeExampleGroup>
</Figure>

ARIA state variants can also target parent and sibling elements using the `group-aria-*` and `peer-aria-*` variants:

<CodeExampleGroup
  filenames={["HTML", "Generated CSS"]}
>
  <CodeBlock
    example={html`
      <!-- [!code classes:group-aria-[sort=ascending]:rotate-0,group-aria-[sort=descending]:rotate-180] -->
      <table>
        <thead>
          <tr>
          <th aria-sort="ascending" class="group">
            Invoice #
            <svg class="group-aria-[sort=ascending]:rotate-0 group-aria-[sort=descending]:rotate-180"><!-- ... --></svg>
          </th>
          <!-- ... -->
          </tr>
        </thead>
        <!-- ... -->
      </table>
    `}
  />
  <CodeBlock
    example={css`
      .group-aria-\[sort\=ascending\]\:rotate-0 {
        &:is(:where(.group)[aria-sort="ascending"] *) {
          rotate: 0deg;
        }
      }
      .group-aria-\[sort\=descending\]\:rotate-180 {
        &:is(:where(.group)[aria-sort="descending"] *) {
          rotate: 180deg;
        }
      }
    `}

/>

</CodeExampleGroup>

### Data attributes

Use the `data-*` variant to conditionally apply styles based on [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

To check if a data attribute exists (and not a specific value), you can just specify the attribute name:

```html
<!-- Will apply -->
<!-- [!code classes:data-active:border-purple-500] -->
<div data-active class="border border-gray-300 data-active:border-purple-500">
  <!-- ... -->
</div>

<!-- Will not apply -->
<div class="border border-gray-300 data-active:border-purple-500">
  <!-- ... -->
</div>
```

If you need to check for a specific value you may use an arbitrary value:

```html
<!-- Will apply -->
<!-- [!code classes:data-[size=large]:p-8] -->
<div data-size="large" class="data-[size=large]:p-8">
  <!-- ... -->
</div>

<!-- Will not apply -->
<div data-size="medium" class="data-[size=large]:p-8">
  <!-- ... -->
</div>
```

Alternatively, you can configure shortcuts for common data attributes you're using in your project by creating a new variant in the `data-*` namespace:

```css
<!-- [!code filename:app.css] -->
@import "tailwindcss";

@custom-variant data-checked (&[data-ui~="checked"]);
```

You can then use these custom `data-*` variants in your project:

```html
<!-- [!code classes:data-checked:underline] -->
<div data-ui="checked active" class="data-checked:underline">
  <!-- ... -->
</div>
```

### RTL support

Use the `rtl` and `ltr` variants to conditionally add styles in right-to-left and left-to-right modes respectively when building multi-directional layouts:

<Figure>

<Example>
  {
    <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
      <div dir="ltr">
        <p className="mb-4 text-sm font-medium">Left-to-right</p>
        <div className="group flex items-center">
          <img
            className="h-12 w-12 shrink-0 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="ml-3 rtl:mr-3 rtl:ml-0">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white">
              Tom Cook
            </p>
            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300">
              Director of Operations
            </p>
          </div>
        </div>
      </div>
      <div dir="rtl">
        <p className="mb-4 text-sm font-medium">Right-to-left</p>
        <div className="group flex items-center">
          <img
            className="h-12 w-12 shrink-0 rounded-full"
            src="https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="ml-3 rtl:mr-3 rtl:ml-0">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white">
              تامر كرم
            </p>
            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300">
              الرئيس التنفيذي
            </p>
          </div>
        </div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:ltr:ml-3,rtl:mr-3] -->
<div class="group flex items-center">
  <img class="h-12 w-12 shrink-0 rounded-full" src="..." alt="" />
  <div class="ltr:ml-3 rtl:mr-3">
    <p class="text-gray-700 group-hover:text-gray-900 ...">...</p>
    <p class="text-gray-500 group-hover:text-gray-700 ...">...</p>
  </div>
</div>
```

</Figure>

Remember, these variants are only useful if you are building a site that needs to support _both_ left-to-right and right-to-left layouts. If you're building a site that only needs to support a single direction, you don't need these variants — just apply the styles that make sense for your content.

### Open/closed state

Use the `open` variant to conditionally add styles when a `<details>` or `<dialog>` element is in an open state:

<Figure hint="Try toggling the disclosure to see the styles change">

<Example>
  {
    <div className="mx-auto max-w-lg">
      <details
        className="rounded-lg border border-transparent p-6 open:border-black/10 open:bg-gray-100 dark:open:border-gray-700/50 dark:open:bg-gray-950/50"
        open
      >
        <summary className="text-sm leading-6 font-semibold text-gray-900 select-none dark:text-white">
          Why do they call it Ovaltine?
        </summary>
        <div className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
          <p>The mug is round. The jar is round. They should call it Roundtine.</p>
        </div>
      </details>
    </div>
  }
</Example>

```html
<!-- [!code classes:open:border-black/10,open:bg-gray-100] -->
<details class="border border-transparent open:border-black/10 open:bg-gray-100 ..." open>
  <summary class="text-sm leading-6 font-semibold text-gray-900 select-none">Why do they call it Ovaltine?</summary>
  <div class="mt-3 text-sm leading-6 text-gray-600">
    <p>The mug is round. The jar is round. They should call it Roundtine.</p>
  </div>
</details>
```

</Figure>

This variant also targets the `:popover-open` pseudo-class for popovers:

```html
<!-- [!code classes:open:opacity-100] -->
<div>
  <button popovertarget="my-popover">Open Popover</button>
  <div popover id="my-popover" class="opacity-0 open:opacity-100 ...">
    <!-- ... -->
  </div>
</div>
```

### Styling inert elements

The `inert` variant lets you style elements marked with the `inert` attribute:

<Figure>

<Example padding={false}>
  {
    <form className="mx-auto max-w-md space-y-6 border-x border-x-gray-200 p-8 dark:border-x-gray-800">
      <legend>Notification preferences</legend>
      <fieldset name="resale" defaultValue="permit">
        <div className="flex items-center gap-x-3">
          <input
            readOnly
            id="push-everything"
            name="push-notifications"
            type="radio"
            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-gray-700 dark:bg-gray-950 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
            Custom
          </label>
        </div>
        <fieldset className="mt-6 space-y-6 pl-8 inert:opacity-25" inert>
          <div className="flex gap-3">
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  defaultChecked
                  id="comments"
                  name="comments"
                  type="checkbox"
                  aria-describedby="comments-description"
                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-gray-700 dark:bg-gray-950 forced-colors:appearance-auto"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-checked:opacity-100"
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-indeterminate:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm/6">
              <label htmlFor="comments" className="font-medium text-gray-900 dark:text-white">
                Comments
              </label>
              <p id="comments-description" className="text-gray-500 dark:text-gray-400">
                Get notified when someones posts a comment on a post.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  defaultChecked
                  id="comments"
                  name="comments"
                  type="checkbox"
                  aria-describedby="comments-description"
                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-gray-700 dark:bg-gray-950 forced-colors:appearance-auto"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-checked:opacity-100"
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-indeterminate:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm/6">
              <label htmlFor="comments" className="font-medium text-gray-900 dark:text-white">
                Mentions
              </label>
              <p id="comments-description" className="text-gray-500 dark:text-gray-400">
                Get notified when someones mentions you.
              </p>
            </div>
          </div>
        </fieldset>
        <div className="mt-6 flex items-center gap-x-3">
          <input
            readOnly
            checked
            id="push-everything"
            name="push-notifications"
            type="radio"
            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-gray-700 dark:bg-gray-950 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
            Everything
          </label>
        </div>
      </fieldset>
    </form>
  }
</Example>

```html
<!-- [!code classes:inert:opacity-50] -->
<form>
  <legend>Notification preferences</legend>
  <fieldset>
    <input type="radio" />
    <label> Custom </label>
    <fieldset inert class="inert:opacity-50">
      <!-- ... -->
    </fieldset>
    <input type="radio" />
    <label> Everything </label>
  </fieldset>
</form>
```

</Figure>

This is useful for adding visual cues that make it clear that sections of content aren't interactive.

## Child selectors

### Styling direct children

While it's generally preferable to put utility classes directly on child elements, you can use the `*` variant in situations where you need to style direct children that you don’t have control over:

<Figure>

<Example className="py-0">
  {
    <div className="mx-auto max-w-md border-x border-x-gray-200 p-6 dark:border-x-gray-800 dark:bg-gray-950/10">
      <h2 className="text-base font-semibold text-gray-900 dark:text-gray-200">Categories</h2>
      <div className="flex flex-wrap gap-2 pt-4 text-sm text-sky-600 *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10">
        <div>Sales</div>
        <div>Marketing</div>
        <div>SEO</div>
        <div>Analytics</div>
        <div>Design</div>
        <div>Strategy</div>
        <div>Security</div>
        <div>Growth</div>
        <div>Mobile</div>
        <div>UX/UI</div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:*:rounded-full] -->
<!-- [!code classes:*:border] -->
<!-- [!code classes:*:border-sky-100] -->
<!-- [!code classes:*:bg-sky-50] -->
<!-- [!code classes:*:px-2] -->
<!-- [!code classes:*:py-0.5] -->
<!-- [!code classes:dark:text-sky-300] -->
<!-- [!code classes:dark:*:border-sky-500/15] -->
<!-- [!code classes:dark:*:bg-sky-500/10] -->
<div>
  <h2>Categories<h2>
  <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
    <li>Sales</li>
    <li>Marketing</li>
    <li>SEO</li>
    <!-- ... -->
  </ul>
</div>
```

</Figure>

It's important to note that overriding a style with a utility directly on the child itself won't work since children rules are generated after the regular ones and they have the same specificity:

<TipBad>{<>Won't work, children can't override styles given to them by the parent.</>}</TipBad>

```html
<!-- [!code classes:*:bg-sky-50] -->
<!-- [!code classes:bg-red-50] -->
<ul class="*:bg-sky-50 ...">
  <li class="bg-red-50 ...">Sales</li>
  <li>Marketing</li>
  <li>SEO</li>
  <!-- ... -->
</ul>
```

### Styling all descendants

Like `*`, the `**` variant can be used to style children of an element. The main difference is that `**` will apply styles to _all_ descendants, not just the direct children. This is especially useful when you combine it with another variant for narrowing the thing you're selecting:

<Figure>

<Example padding={false}>
  {
    <div className="px-4">
      <ul
        role="list"
        className="mx-auto max-w-md border-x border-x-gray-200 p-2 **:data-avatar:size-12 **:data-avatar:rounded-full dark:border-x-gray-800 dark:bg-gray-950/10"
      >
        <li className="group/item relative flex items-center justify-between rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-white/5">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img
                data-avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="w-full text-sm leading-6">
              <a href="#" className="font-semibold text-gray-900 dark:text-white">
                <span className="absolute inset-0 rounded-xl" aria-hidden="true"></span>Leslie Abbott
              </a>
              <div className="text-gray-500">Co-Founder / CEO</div>
            </div>
          </div>
        </li>
        <li className="group/item relative flex items-center justify-between rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-white/5">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img
                data-avatar
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="w-full text-sm leading-6">
              <a href="#" className="font-semibold text-gray-900 dark:text-white">
                <span className="absolute inset-0 rounded-xl" aria-hidden="true"></span>Hector Adams
              </a>
              <div className="text-gray-500">VP, Marketing</div>
            </div>
          </div>
        </li>
        <li className="group/item relative flex items-center justify-between rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-white/5">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img
                data-avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="w-full text-sm leading-6">
              <a href="#" className="font-semibold text-gray-900 dark:text-white">
                <span className="absolute inset-0 rounded-xl" aria-hidden="true"></span>Blake Alexander
              </a>
              <div className="text-gray-500">Account Coordinator</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  }
</Example>

```svelte
<!-- [!code classes:**:data-avatar:rounded-full,**:data-avatar:size-12] -->
<ul class="**:data-avatar:size-12 **:data-avatar:rounded-full ...">
  {#each items as item}
    <li>
      <img src={item.src} data-avatar />
      <p>{item.name}</p>
    </li>
  {/each}
</ul>
```

</Figure>

## Custom variants

### Using arbitrary variants

Just like [arbitrary values](/docs/adding-custom-styles#using-arbitrary-values) let you use custom values with your utility classes, arbitrary variants let you write custom selector variants directly in your HTML.

Arbitrary variants are just format strings that represent the selector, wrapped in square brackets. For example, this arbitrary variant changes the cursor to `grabbing` when the element has the `is-dragging` class:

<CodeExampleGroup
  filenames={["HTML", "Generated CSS"]}
>
  <CodeBlock
    example={svelte`
      <!-- [!code classes:[&.is-dragging]:cursor-grabbing] -->
      <ul role="list">
        {#each items as item}
          <li class="[&.is-dragging]:cursor-grabbing">{item}</li>
        {/each}
      </ul>
    `}

/>

  <CodeBlock
    example={css`
      .\[\&\.is-dragging\]\:cursor-grabbing {
        &.is-dragging {
          cursor: grabbing;
        }
      }
    `}
  />
</CodeExampleGroup>

Arbitrary variants can be stacked with built-in variants or with each other, just like the rest of the variants in Tailwind:

<CodeExampleGroup
  filenames={["HTML", "Generated CSS"]}
>
  <CodeBlock
    example={svelte`
      <!-- [!code classes:[&.is-dragging]:active:cursor-grabbing] -->
      <ul role="list">
        {#each items as item}
          <li class="[&.is-dragging]:active:cursor-grabbing">{item}</li>
        {/each}
      </ul>
    `}
  />
  <CodeBlock
    example={css`
      .\[\&\.is-dragging\]\:active\:cursor-grabbing {
        &.is-dragging {
          &:active {
            cursor: grabbing;
          }
        }
      }
    `}
  />
</CodeExampleGroup>

If you need spaces in your selector, you can use an underscore. For example, this arbitrary variant selects all `p` elements within the element where you've added the class:

<CodeExampleGroup
  filenames={["HTML", "Generated CSS"]}
>
  <CodeBlock
    example={html`
      <!-- [!code classes:[&_p]:mt-4] -->
      <div class="[&_p]:mt-4">
        <p>Lorem ipsum...</p>
        <ul>
          <li>
            <p>Lorem ipsum...</p>
          </li>
          <!-- ... -->
        </ul>
      </div>
    `}
  />
  <CodeBlock
    example={css`
      .\[\&_p\]\:mt-4 {
        & p {
          margin-top: calc(var(--spacing) * 4);
        }
      }
    `}
  />
</CodeExampleGroup>

You can also use at-rules like `@media` or `@supports` in arbitrary variants:

<CodeExampleGroup
  filenames={["HTML", "Generated CSS"]}
>
  <CodeBlock
    example={html`
      <!-- [!code classes:[@supports(display:grid)]:grid] -->
      <div class="flex [@supports(display:grid)]:grid">
        <!-- ... -->
      </div>
    `}
  />
  <CodeBlock
    example={css`
      .\[\@supports\(display\:grid\)\]\:grid {
        @supports (display:grid) {
          display: grid;
        }
      }
    `}
  />
</CodeExampleGroup>

With at-rule custom variants the `&` placeholder isn't necessary, just like when nesting with a preprocessor.

### Registering a custom variant

If you find yourself using the same arbitrary variant multiple times in your project, it might be worth creating a custom variant using the `@custom-variant` directive:

```css
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

Now you can use the `theme-midnight:<utility>` variant in your HTML:

```html
<!-- [!code classes:theme-midnight:bg-black] -->
<html data-theme="midnight">
  <button class="theme-midnight:bg-black ..."></button>
</html>
```

Learn more about adding custom variants in the [adding custom variants documentation](/docs/adding-custom-styles#adding-custom-variants).

## Appendix

### Quick reference

A quick reference table of every single variant included in Tailwind by default.

{

<div className="max-w-screen overflow-scroll">
  <table>
    <thead>
      <tr>
        <th>Variant</th>
        <th>CSS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="#hover" className="whitespace-nowrap">
            hover
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (hover: hover) {"{ "} <span className="text-gray-400">&</span>:hover {" }"}
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#focus" className="whitespace-nowrap">
            focus
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:focus
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#focus-within" className="whitespace-nowrap">
            focus-within
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:focus-within
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#focus-visible" className="whitespace-nowrap">
            focus-visible
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:focus-visible
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#active" className="whitespace-nowrap">
            active
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:active
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#visited" className="whitespace-nowrap">
            visited
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:visited
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#target" className="whitespace-nowrap">
            target
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:target
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#styling-direct-children" className="whitespace-nowrap">
            *
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            :is(<span className="text-gray-400">&</span> {" > *"})
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#styling-all-descendants" className="whitespace-nowrap">
            **
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            :is(<span className="text-gray-400">&</span> {" *"})
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#has" className="whitespace-nowrap">
            has-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:has(<span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#styling-based-on-parent-state" className="whitespace-nowrap">
            group-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:is(:where(.group)<span className="text-gray-400">...</span> *)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#styling-based-on-sibling-state" className="whitespace-nowrap">
            peer-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:is(:where(.peer)<span className="text-gray-400">...</span> ~ *)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#implicit-groups" className="whitespace-nowrap">
            in-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            :where(<span className="text-gray-400">...</span>) <span className="text-gray-400">&</span>
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#not" className="whitespace-nowrap">
            not-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:not(<span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#styling-inert-elements" className="whitespace-nowrap">
            inert
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:is([inert], [inert] *)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#first" className="whitespace-nowrap">
            first
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:first-child
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#last" className="whitespace-nowrap">
            last
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:last-child
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#only" className="whitespace-nowrap">
            only
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:only-child
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#odd" className="whitespace-nowrap">
            odd
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:nth-child(odd)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#even" className="whitespace-nowrap">
            even
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:nth-child(even)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#first-of-type" className="whitespace-nowrap">
            first-of-type
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:first-of-type
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#last-of-type" className="whitespace-nowrap">
            last-of-type
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:last-of-type
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#only-of-type" className="whitespace-nowrap">
            only-of-type
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:only-of-type
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#nth" className="whitespace-nowrap">
            nth-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:nth-child(<span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#nth-last" className="whitespace-nowrap">
            nth-last-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:nth-last-child(<span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#nth-of-type" className="whitespace-nowrap">
            nth-of-type-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:nth-of-type(<span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#nth-last-of-type" className="whitespace-nowrap">
            nth-last-of-type-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:nth-last-of-type(<span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#empty" className="whitespace-nowrap">
            empty
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:empty
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#disabled" className="whitespace-nowrap">
            disabled
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:disabled
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#enabled" className="whitespace-nowrap">
            enabled
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:enabled
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#checked" className="whitespace-nowrap">
            checked
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:checked
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#indeterminate" className="whitespace-nowrap">
            indeterminate
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:indeterminate
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#default" className="whitespace-nowrap">
            default
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:default
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#optional" className="whitespace-nowrap">
            optional
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:optional
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#required" className="whitespace-nowrap">
            required
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:required
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#valid" className="whitespace-nowrap">
            valid
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:valid
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#invalid" className="whitespace-nowrap">
            invalid
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:invalid
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#user-valid" className="whitespace-nowrap">
            user-valid
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:user-valid
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#user-invalid" className="whitespace-nowrap">
            user-invalid
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:user-invalid
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#in-range" className="whitespace-nowrap">
            in-range
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:in-range
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#out-of-range" className="whitespace-nowrap">
            out-of-range
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:out-of-range
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#placeholder-shown" className="whitespace-nowrap">
            placeholder-shown
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:placeholder-shown
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#placeholder-shown" className="whitespace-nowrap">
            details-content
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:details-content
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#autofill" className="whitespace-nowrap">
            autofill
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:autofill
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#read-only" className="whitespace-nowrap">
            read-only
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:read-only
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#before-and-after" className="whitespace-nowrap">
            before
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>::before
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#before-and-after" className="whitespace-nowrap">
            after
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>::after
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#first-line-and-first-letter" className="whitespace-nowrap">
            first-letter
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>::first-letter
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#first-line-and-first-letter" className="whitespace-nowrap">
            first-line
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>::first-line
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#marker" className="whitespace-nowrap">
            marker
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>::marker, <span className="text-gray-400">&</span> *::marker
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#selection" className="whitespace-nowrap">
            selection
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>::selection
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#file" className="whitespace-nowrap">
            file
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>::file-selector-button
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#backdrop" className="whitespace-nowrap">
            backdrop
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>::backdrop
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#placeholder" className="whitespace-nowrap">
            placeholder
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>::placeholder
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            sm
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {">="} 40rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            md
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {">="} 48rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            lg
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {">="} 64rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {">="} 80rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            2xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {">="} 96rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            min-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (width {">= "} <span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            max-sm
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {"<"} 40rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            max-md
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {"<"} 48rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            max-lg
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {"<"} 64rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            max-xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {"<"} 80rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            max-2xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (width {"<"} 96rem)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            max-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (width {"< "} <span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @3xs
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 16rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @2xs
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 18rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @xs
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 20rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @sm
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 24rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @md
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 28rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @lg
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 32rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 36rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @2xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 42rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @3xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 48rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @4xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 56rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @5xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 64rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @6xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 72rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @7xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">="} 80rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @min-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {">= "} <span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-3xs
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 16rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-2xs
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 18rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-xs
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 20rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-sm
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 24rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-md
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 28rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-lg
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 32rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 36rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-2xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 42rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-3xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 48rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-4xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 56rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-5xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 64rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-6xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 72rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-7xl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"<"} 80rem)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#responsive-breakpoints" className="whitespace-nowrap">
            @max-[<span className="text-gray-400">...</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @container (width {"< "} <span className="text-gray-400">...</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#prefers-color-scheme" className="whitespace-nowrap">
            dark
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (prefers-color-scheme: dark)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#prefers-reduced-motion" className="whitespace-nowrap">
            motion-safe
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (prefers-reduced-motion: no-preference)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#prefers-reduced-motion" className="whitespace-nowrap">
            motion-reduce
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (prefers-reduced-motion: reduce)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#prefers-contrast" className="whitespace-nowrap">
            contrast-more
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (prefers-contrast: more)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#prefers-contrast" className="whitespace-nowrap">
            contrast-less
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (prefers-contrast: less)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#forced-colors" className="whitespace-nowrap">
            forced-colors
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (forced-colors: active)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#inverted-colors" className="whitespace-nowrap">
            inverted-colors
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (inverted-colors: inverted)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#pointer-and-any-pointer" className="whitespace-nowrap">
            pointer-fine
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (pointer: fine)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#pointer-and-any-pointer" className="whitespace-nowrap">
            pointer-coarse
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (pointer: coarse)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#pointer-and-any-pointer" className="whitespace-nowrap">
            pointer-none
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (pointer: none)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#pointer-and-any-pointer" className="whitespace-nowrap">
            any-pointer-fine
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (any-pointer: fine)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#pointer-and-any-pointer" className="whitespace-nowrap">
            any-pointer-coarse
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (any-pointer: coarse)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#pointer-and-any-pointer" className="whitespace-nowrap">
            any-pointer-none
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (any-pointer: none)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#orientation" className="whitespace-nowrap">
            portrait
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (orientation: portrait)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#orientation" className="whitespace-nowrap">
            landscape
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @media (orientation: landscape)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#scripting" className="whitespace-nowrap">
            noscript
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media (scripting: none)</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#print" className="whitespace-nowrap">
            print
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@media print</code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#supports" className="whitespace-nowrap">
            supports-[<span className="text-gray-400">&hellip;</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            @supports (<span className="text-gray-400">&hellip;</span>)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-busy
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-busy="true"]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-checked
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-checked="true"]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-disabled
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-disabled="true"]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-expanded
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-expanded="true"]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-hidden
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-hidden="true"]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-pressed
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-pressed="true"]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-readonly
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-readonly="true"]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-required
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-required="true"]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-selected
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-selected="true"]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#aria-states" className="whitespace-nowrap">
            aria-[<span className="text-gray-400">&hellip;</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[aria-<span className="text-gray-400">&hellip;</span>]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#data-attributes" className="whitespace-nowrap">
            data-[<span className="text-gray-400">&hellip;</span>]
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>[data-<span className="text-gray-400">&hellip;</span>]
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#rtl-support" className="whitespace-nowrap">
            rtl
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#rtl-support" className="whitespace-nowrap">
            ltr
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#openclosed-state" className="whitespace-nowrap">
            open
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">
            <span className="text-gray-400">&</span>:is([open], :popover-open, :open)
          </code>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#starting-style" className="whitespace-nowrap">
            starting
          </a>
        </td>
        <td>
          <code className="whitespace-nowrap before:content-none after:content-none">@starting-style</code>
        </td>
      </tr>
    </tbody>
  </table>
</div>

}

### Pseudo-class reference

This is a comprehensive list of examples for all the pseudo-class variants included in Tailwind to complement the [pseudo-classes documentation](/docs/hover-focus-and-other-states#pseudo-classes) at the beginning of this guide.

#### :hover

Style an element when the user hovers over it with the mouse cursor using the `hover` variant:

```html
<!-- [!code classes:hover:bg-white] -->
<div class="bg-black hover:bg-white ...">
  <!-- ... -->
</div>
```

#### :focus

Style an element when it has focus using the `focus` variant:

```html
<!-- [!code classes:focus:border-blue-400] -->
<input class="border-gray-300 focus:border-blue-400 ..." />
```

#### :focus-within

Style an element when it or one of its descendants has focus using the `focus-within` variant:

```html
<!-- [!code classes:focus-within:shadow-lg] -->
<div class="focus-within:shadow-lg ...">
  <input type="text" />
</div>
```

#### :focus-visible

Style an element when it has been focused using the keyboard using the `focus-visible` variant:

```html
<!-- [!code classes:focus-visible:outline-2] -->
<button class="focus-visible:outline-2 ...">Submit</button>
```

#### :active

Style an element when it is being pressed using the `active` variant:

```html
<!-- [!code classes:active:bg-blue-600] -->
<button class="bg-blue-500 active:bg-blue-600 ...">Submit</button>
```

#### :visited

Style a link when it has already been visited using the `visited` variant:

```html
<!-- [!code classes:visited:text-purple-600] -->
<a href="https://seinfeldquotes.com" class="text-blue-600 visited:text-purple-600 ..."> Inspiration </a>
```

#### :target

Style an element if its ID matches the current URL fragment using the `target` variant:

```html
<!-- [!code classes:target:shadow-lg] -->
<div id="about" class="target:shadow-lg ...">
  <!-- ... -->
</div>
```

#### :first-child

Style an element if it's the first child using the `first` variant:

```svelte
<!-- [!code classes:first:pt-0] -->
<ul>
  {#each people as person}
    <li class="py-4 first:pt-0 ...">
      <!-- ... -->
    </li>
  {/each}
</ul>
```

#### :last-child

Style an element if it's the last child using the `last` variant:

```svelte
<!-- [!code classes:last:pb-0] -->
<ul>
  {#each people as person}
    <li class="py-4 last:pb-0 ...">
      <!-- ... -->
    </li>
  {/each}
</ul>
```

#### :only-child

Style an element if it's the only child using the `only` variant:

```svelte
<!-- [!code classes:only:py-0] -->
<ul>
  {#each people as person}
    <li class="py-4 only:py-0 ...">
      <!-- ... -->
    </li>
  {/each}
</ul>
```

#### :nth-child(odd)

Style an element if it's an oddly numbered child using the `odd` variant:

```svelte
<!-- [!code classes:odd:bg-gray-100] -->
<table>
  {#each people as person}
    <tr class="bg-white odd:bg-gray-100 ...">
      <!-- ... -->
    </tr>
  {/each}
</table>
```

#### :nth-child(even)

Style an element if it's an evenly numbered child using the `even` variant:

```svelte
<!-- [!code classes:even:bg-gray-100] -->
<table>
  {#each people as person}
    <tr class="bg-white even:bg-gray-100 ...">
      <!-- ... -->
    </tr>
  {/each}
</table>
```

#### :first-of-type

Style an element if it's the first child of its type using the `first-of-type` variant:

```svelte
<!-- [!code classes:first-of-type:ml-6] -->
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="ml-2 first-of-type:ml-6 ...">
      <!-- ... -->
    </a>
  {/each}
</nav>
```

#### :last-of-type

Style an element if it's the last child of its type using the `last-of-type` variant:

```svelte
<!-- [!code classes:last-of-type:mr-6] -->
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mr-2 last-of-type:mr-6 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
```

#### :only-of-type

Style an element if it's the only child of its type using the `only-of-type` variant:

```svelte
<!-- [!code classes:only-of-type:mx-6] -->
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 only-of-type:mx-6 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
```

#### :nth-child()

Style an element at a specific position using the `nth` variant:

```svelte
<!-- [!code classes:nth-3:mx-6,nth-[3n+1]:mx-7] -->
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-3:mx-6 nth-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
```

#### :nth-last-child()

Style an element at a specific position from the end using the `nth-last` variant:

```svelte
<!-- [!code classes:nth-last-3:mx-6,nth-last-[3n+1]:mx-7] -->
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-last-3:mx-6 nth-last-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
```

#### :nth-of-type()

Style an element at a specific position, of the same type using the `nth-of-type` variant:

```svelte
<!-- [!code classes:nth-of-type-3:mx-6,nth-of-type-[3n+1]:mx-7] -->
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-of-type-3:mx-6 nth-of-type-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
```

#### :nth-last-of-type()

Style an element at a specific position from the end, of the same type using the `nth-last-of-type` variant:

```svelte
<!-- [!code classes:nth-last-of-type-3:mx-6,nth-last-of-type-[3n+1]:mx-7] -->
<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-last-of-type-3:mx-6 nth-last-of-type-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
```

#### :empty

Style an element if it has no content using the `empty` variant:

```svelte
<!-- [!code classes:empty:hidden] -->
<ul>
  {#each people as person}
    <li class="empty:hidden ...">{person.hobby}</li>
  {/each}
</ul>
```

#### :disabled

Style an input when it's disabled using the `disabled` variant:

```html
<!-- [!code classes:disabled:opacity-75] -->
<input class="disabled:opacity-75 ..." />
```

#### :enabled

Style an input when it's enabled using the `enabled` variant, most helpful when you only want to apply another style when an element is not disabled:

```html
<!-- [!code classes:enabled:hover:border-gray-400] -->
<input class="enabled:hover:border-gray-400 disabled:opacity-75 ..." />
```

#### :checked

Style a checkbox or radio button when it's checked using the `checked` variant:

```html
<!-- [!code classes:checked:bg-blue-500] -->
<input type="checkbox" class="appearance-none checked:bg-blue-500 ..." />
```

#### :indeterminate

Style a checkbox or radio button in an indeterminate state using the `indeterminate` variant:

```html
<!-- [!code classes:indeterminate:bg-gray-300] -->
<input type="checkbox" class="appearance-none indeterminate:bg-gray-300 ..." />
```

#### :default

Style an option, checkbox or radio button that was the default value when the page initially loaded using the `default` variant:

```html
<!-- [!code classes:default:outline-2] -->
<input type="checkbox" class="default:outline-2 ..." />
```

#### :optional

Style an input when it's optional using the `optional` variant:

```html
<!-- [!code classes:optional:border-red-500] -->
<input class="border optional:border-red-500 ..." />
```

#### :required

Style an input when it's required using the `required` variant:

```html
<!-- [!code classes:required:border-red-500] -->
<input required class="border required:border-red-500 ..." />
```

#### :valid

Style an input when it's valid using the `valid` variant:

```html
<!-- [!code classes:valid:border-green-500] -->
<input required class="border valid:border-green-500 ..." />
```

#### :invalid

Style an input when it's invalid using the `invalid` variant:

```html
<!-- [!code classes:invalid:border-red-500] -->
<input required class="border invalid:border-red-500 ..." />
```

#### :user-valid

Style an input when it's valid and the user has interacted with it, using the `user-valid` variant:

```html
<!-- [!code classes:user-valid:border-green-500] -->
<input required class="border user-valid:border-green-500" />
```

#### :user-invalid

Style an input when it's invalid and the user has interacted with it, using the `user-invalid` variant:

```html
<!-- [!code classes:user-invalid:border-red-500] -->
<input required class="border user-invalid:border-red-500" />
```

#### :in-range

Style an input when its value is within a specified range limit using the `in-range` variant:

```html
<!-- [!code classes:in-range:border-green-500] -->
<input min="1" max="5" class="in-range:border-green-500 ..." />
```

#### :out-of-range

Style an input when its value is outside of a specified range limit using the `out-of-range` variant:

```html
<!-- [!code classes:out-of-range:border-red-500] -->
<input min="1" max="5" class="out-of-range:border-red-500 ..." />
```

#### :placeholder-shown

Style an input when the placeholder is shown using the `placeholder-shown` variant:

```html
<!-- [!code classes:placeholder-shown:border-gray-500] -->
<input class="placeholder-shown:border-gray-500 ..." placeholder="you@example.com" />
```

#### :details-content

Style the content of a `<details>` element using the `details-content` variant:

```html
<!-- [!code classes:details-content:bg-gray-100] -->
<details class="details-content:bg-gray-100 ...">
  <summary>Details</summary>
  This is a secret.
</details>
```

#### :autofill

Style an input when it has been autofilled by the browser using the `autofill` variant:

```html
<!-- [!code classes:autofill:bg-yellow-200] -->
<input class="autofill:bg-yellow-200 ..." />
```

#### :read-only

Style an input when it is read-only using the `read-only` variant:

```html
<!-- [!code classes:read-only:bg-gray-100] -->
<input class="read-only:bg-gray-100 ..." />
```
