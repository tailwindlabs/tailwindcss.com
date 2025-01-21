interface BreadcrumbProps {
  section: string;
  title: string;
  category?: string;
}

export function Breadcrumb({ section, title }: BreadcrumbProps) {
  return (
    <ol className="ml-4 flex min-w-0 items-center gap-2 text-sm/6 whitespace-nowrap">
      <li className="flex items-center gap-2">
        <span className="text-gray-500 dark:text-gray-400">{section}</span>
        {CaretRight}
      </li>
      <li className="truncate text-gray-950 dark:text-white">{title}</li>
    </ol>
  );
}

let CaretRight = (
  <svg viewBox="0 0 16 16" className="size-4 fill-gray-950 dark:fill-gray-500">
    <path
      fillRule="evenodd"
      d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);
