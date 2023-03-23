import clsx from 'clsx'
import { TabBar } from '@/components/TabBar'

export function Frame({ className = '', children }) {
  return (
    <div
      className={`${className} relative isolate bg-sky-400 pt-12 pl-12 rounded-2xl overflow-hidden`}
    >
      <div
        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white"
        aria-hidden="true"
      />

      <div className="rounded-tl-xl overflow-hidden">{children}</div>

      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl dark:ring-1 dark:ring-white/10 dark:ring-inset"
        aria-hidden="true"
      />
    </div>
  )
}

export function EditorPane({ filename, scroll = false, children }) {
  return (
    <div className="pt-2 bg-slate-800 shadow-lg">
      <TabBar primary={{ name: filename }} showTabMarkers={false} />
      <div
        className={clsx(
          'children:my-0 children:!shadow-none children:bg-transparent',
          scroll &&
            clsx(
              'overflow-y-auto max-h-96',
              'scrollbar:w-4 scrollbar:h-4 scrollbar:transparent',
              'scrollbar-thumb:border-4 scrollbar-thumb:border-solid scrollbar-thumb:border-slate-800 scrollbar-thumb:bg-slate-700 hover:scrollbar-thumb:bg-slate-600 scrollbar-thumb:rounded-full',
              'scrollbar-track:rounded'
            )
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function Editor({ filename, scroll = false, style = 'plain', children }) {
  let passthrough = { scroll }

  if (style === 'framed') {
    return (
      <Frame className="mt-5 mb-8 first:mt-0 last:mb-0">
        <EditorPane {...passthrough} filename={filename}>
          {children}
        </EditorPane>
      </Frame>
    )
  }

  return (
    <div className="mt-5 mb-8 first:mt-0 last:mb-0 relative overflow-hidden rounded-2xl">
      <EditorPane {...passthrough} filename={filename}>
        {children}
      </EditorPane>
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl dark:ring-1 dark:ring-white/10 dark:ring-inset"
        aria-hidden="true"
      />
    </div>
  )
}
