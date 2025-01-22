export default function NotFoundPage() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:mr-6 sm:border-r sm:border-gray-900/10 sm:pr-6 sm:text-3xl dark:text-gray-200 sm:dark:border-gray-300/10">
          404
        </h1>
        <h2 className="mt-2 text-gray-700 sm:mt-0 dark:text-gray-400">This page could not be found.</h2>
      </div>
    </div>
  );
}
