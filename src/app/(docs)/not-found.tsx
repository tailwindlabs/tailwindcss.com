export default function NotFoundPage() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row">
        <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:mr-6 sm:border-r sm:border-neutral-900/10 sm:pr-6 sm:text-3xl dark:text-neutral-200 sm:dark:border-neutral-300/10">
          404
        </h1>
        <h2 className="mt-2 text-neutral-700 sm:mt-0 dark:text-neutral-400">This page could not be found.</h2>
      </div>
    </div>
  );
}
