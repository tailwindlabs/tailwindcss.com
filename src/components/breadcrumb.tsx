interface BreadcrumbProps {
  section: string;
  title: string;
  category?: string;
}

export function Breadcrumb({ section, title }: BreadcrumbProps) {
  return (
    // This element is `sticky` to fix an issue around that occurs when doing a
    // page transition on mobile.
    //
    // The way the Next.js router works is that it will find sibling elements
    // within the parent tree of the element causing the page transition. In our
    // case, we render the mobile nav as a sibling before these breadcrumbs.
    //
    // When a page transition occurs, Next will identify this element as needing
    // to be inside the viewport instead of the actual content of the page.
    //
    // Positioning this element as `sticky` will prevent Next.js from selecting
    // this element.
    //
    // See: https://github.com/vercel/next.js/discussions/45996
    <ol className="sticky ml-4 flex min-w-0 items-center gap-2 text-sm/6 whitespace-nowrap">
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
