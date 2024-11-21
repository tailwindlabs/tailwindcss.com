export default function StartingStyleDemo() {
  return (
    <div className="grid justify-center h-[340px] items-center">
      <button
        popovertarget="my-popover"
        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
      >
        Check for updates
      </button>

      <div
        popover="auto"
        id="my-popover"
        className="opacity-0 [transition-behavior:allow-discrete] duration-500 [&:is([open],:popover-open)]:opacity-100 [@starting-style]:[&:is([open],:popover-open)]:opacity-0 relative transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:w-full sm:max-w-96 sm:p-6"
      >
        <div>
          <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-600/10">
            <svg
              class="size-5 text-indigo-400 dark:text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white" id="modal-title">
              Update available
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500 dark:text-gray-200">
                A new software update is available: <span className="font-semibold">v2.0.4.</span>{' '}
                <br />
                Click the button below to install it.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 ">
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  )
}

;<div
  popover="auto"
  id="my-popover"
  class="relative z-10 [transition-behavior:allow-discrete] transition-all duration-500 [&:is([open],:popover-open)]:opacity-100 [@starting-style]:[&:is([open],:popover-open)]:opacity-0"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
        <div>
          <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
            <svg
              class="size-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-base font-semibold text-gray-900" id="modal-title">
              Payment successful
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium
                explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam
                accusamus facere veritatis.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
          >
            Deactivate
          </button>
          <button
            type="button"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
