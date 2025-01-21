export function NewsletterForm({ action }: { action: string }) {
  return (
    <form action={action} method="post" className="flex flex-nowrap gap-4">
      <div className="max-w-82 flex-1">
        <div className="group relative">
          <div className="pointer-events-none absolute left-4 flex h-full items-center">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 text-gray-950/50 group-focus-within:text-gray-950 dark:text-white/50 dark:group-focus-within:text-white"
            >
              <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
              <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
            </svg>
          </div>

          <input
            name="email_address"
            type="email"
            required
            autoComplete="email"
            aria-label="Email address"
            className="block w-full appearance-none rounded-4xl bg-white py-2 pr-3 pl-10 text-sm/6 text-gray-950 outline -outline-offset-1 outline-gray-950/8 placeholder:text-sm/6 placeholder:text-gray-950/50 focus:outline-gray-950 dark:bg-white/10 dark:text-white/50 dark:outline-white/15 dark:placeholder:text-white/50 dark:focus:outline-white"
            placeholder="Subscribe via email"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
