import { ApiTable } from "@/components/api-table.tsx";
import { Example } from "@/components/example.tsx";
import { Figure } from "@/components/figure.tsx";
import { ResponsiveDesign } from "@/components/content.tsx";

export const title = "position";
export const description = "Utilities for controlling how an element is positioned in the document.";

<ApiTable
  rows={[
    ["static", "position: static;"],
    ["fixed", "position: fixed;"],
    ["absolute", "position: absolute;"],
    ["relative", "position: relative;"],
    ["sticky", "position: sticky;"],
  ]}
/>

## Examples

### Statically positioning elements

Use the `static` utility to position an element according to the normal flow of the document:

<Figure>

<Example>
  {
    <div className="relative text-sm leading-6 font-medium">
      <div className="rounded-lg border border-purple-700/10 bg-purple-400/20 p-4 dark:border-0 dark:bg-sky-900/70">
        <div className="static h-32 border border-purple-700/10 bg-purple-400/20 p-4 dark:border-0 dark:bg-sky-400/20">
          <p className="text-purple-700 dark:text-sky-200">Static parent</p>
          <div className="absolute bottom-0 left-0 rounded-lg bg-purple-500 p-4 text-white shadow-lg dark:bg-sky-500">
            <p>Absolute child</p>
          </div>
        </div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:static] -->
<div class="static ...">
  <p>Static parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

</Figure>

With statically positioned elements, any [offsets](/docs/top-right-bottom-left) will be ignored and the element will not act as a position reference for absolutely positioned children.

### Relatively positioning elements

Use the `relative` utility to position an element according to the normal flow of the document:

<Figure>

<Example>
  {
    <div className="relative text-sm leading-6 font-medium">
      <div className="rounded-lg border border-sky-700/10 bg-sky-400/20 p-4 dark:border-0 dark:bg-blue-900/70">
        <div className="relative h-32 border border-sky-700/10 bg-sky-400/20 p-4 dark:border-0 dark:bg-blue-400/20">
          <p className="text-sky-700 dark:text-white">Relative parent</p>
          <div className="absolute bottom-0 left-0 rounded-lg bg-sky-500 p-4 text-white shadow-lg dark:bg-blue-500">
            <p>Absolute child</p>
          </div>
        </div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:relative] -->
<div class="relative ...">
  <p>Relative parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

</Figure>

With relatively position elements, any [offsets](/docs/top-right-bottom-left) are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.

### Absolutely positioning elements

Use the `absolute` utility to position an element _outside_ of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist:

<Figure>

<Example>
  {
    <div className="space-y-8">
      <div>
        <p className="mb-4 text-sm font-medium text-gray-500">With static positioning</p>
        <div className="relative text-sm leading-6 font-medium">
          <div className="relative rounded-lg border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0 dark:bg-indigo-900/80">
            <p className="-mt-2 mb-2 text-indigo-700 dark:text-indigo-200">Relative parent</p>
            <div className="static flex h-32 flex-col justify-between border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0">
              <p className="text-indigo-700 dark:text-indigo-200">Static parent</p>
              <div className="flex gap-4">
                <div className="bottom-0 left-0 rounded-lg bg-indigo-500 p-4 text-white shadow-lg">
                  <p>Static child?</p>
                </div>
                <div className="rounded-lg bg-indigo-100 p-4 text-indigo-600 shadow-lg">
                  <p>Static sibling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-4 text-sm font-medium text-gray-500">With absolute positioning</p>
        <div className="relative text-sm leading-6 font-medium">
          <div className="relative rounded-lg border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0 dark:bg-indigo-900/80">
            <p className="-mt-2 mb-2 text-indigo-700 dark:text-indigo-200">Relative parent</p>
            <div className="static flex h-32 flex-col justify-between border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0">
              <p className="text-indigo-700 dark:text-indigo-200">Static parent</p>
              <div className="flex gap-4">
                <div className="absolute top-0 right-0 rounded-lg bg-indigo-500 p-4 text-white shadow-lg">
                  <p>Absolute child</p>
                </div>
                <div className="rounded-lg bg-indigo-100 p-4 text-indigo-600 shadow-lg">
                  <p>Static sibling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:absolute] -->
<div class="static ...">
  <!-- Static parent -->
  <div class="static ..."><p>Static child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
  <!-- Static parent -->
  <div class="absolute ..."><p>Absolute child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
</div>
```

</Figure>

With absolutely positioned elements, any [offsets](/docs/top-right-bottom-left) are calculated relative to the nearest parent that has a position other than `static`, and the element will act as a position reference for other absolutely positioned children.

### Fixed positioning elements

Use the `fixed` utility to position an element relative to the browser window:

<Figure hint="Scroll this element to see the fixed positioning in action">

<Example padding={false}>
  {
    <div className="px-3">
      <div className="relative mx-auto h-80 max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800">
        <div className="absolute top-0 right-0 left-0 flex items-center bg-gray-50/90 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10">
          Contacts
        </div>
        <div className="flex h-80 flex-col divide-y divide-gray-200 overflow-auto dark:divide-gray-200/5">
          <div className="flex items-center gap-4 p-4">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Andrew Alfred</strong>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Debra Houston</strong>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Jane White</strong>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Ray Flint</strong>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Mindy Albrect</strong>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">David Arnold</strong>
          </div>
        </div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:fixed] -->
<div class="relative">
  <div class="fixed top-0 right-0 left-0">Contacts</div>
  <div>
    <div>
      <img src="/img/andrew.jpg" />
      <strong>Andrew Alfred</strong>
    </div>
    <div>
      <img src="/img/debra.jpg" />
      <strong>Debra Houston</strong>
    </div>
    <!-- ... -->
  </div>
</div>
```

</Figure>

With fixed positioned elements, any [offsets](/docs/top-right-bottom-left) are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children:

### Sticky positioning elements

Use the `sticky` utility to position an element as `relative` until it crosses a specified threshold, then treat it as `fixed` until its parent is off screen:

<Figure hint="Scroll this element to see the sticky positioning in action">

<Example padding={false}>
  {
    <div className="px-3">
      <div className="relative mx-auto -my-px h-80 max-w-md overflow-auto bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800">
        <div className="relative">
          <div className="sticky top-0 flex items-center bg-gray-50/90 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10">
            A
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-200/5">
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Andrew Alfred</strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Aisha Houston</strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Anna White</strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Andy Flint</strong>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="sticky top-0 flex items-center bg-gray-50/90 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10">
            B
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-200/5">
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Bob Alfred</strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Bianca Houston</strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Brianna White</strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Bert Flint</strong>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="sticky top-0 flex items-center bg-gray-50/90 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10">
            C
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-200/5">
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Colton Alfred</strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Cynthia Houston</strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Cheyenne White</strong>
            </div>
            <div className="flex items-center gap-4 p-4">
              <img
                className="size-12 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              />
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Charlie Flint</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</Example>

```html
<!-- [!code classes:sticky,top-0] -->
<div>
  <div>
    <div class="sticky top-0 ...">A</div>
    <div>
      <div>
        <img src="/img/andrew.jpg" />
        <strong>Andrew Alfred</strong>
      </div>
      <div>
        <img src="/img/aisha.jpg" />
        <strong>Aisha Houston</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <div>
    <div class="sticky top-0">B</div>
    <div>
      <div>
        <img src="/img/bob.jpg" />
        <strong>Bob Alfred</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <!-- ... -->
</div>
```

</Figure>

With sticky positioned elements, any [offsets](/docs/top-right-bottom-left) are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.

### Responsive design

<ResponsiveDesign property="position" defaultClass="relative" featuredClass="absolute" />
