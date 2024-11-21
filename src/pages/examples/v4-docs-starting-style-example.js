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
                A new software update is available: <span className="font-semibold">v2.0.4.</span>{' '}
                <br />
                Click the button below to install it.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  )
}
