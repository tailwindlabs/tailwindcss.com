import { TabBar } from '@/components/TabBar'

export function Editor({ filename, children }) {
  return (
    <div className="mt-[1.875rem] lg:mt-[3.75rem] mb-[1.875rem] lg:mb-[3.75rem] first:mt-0 last:mb-0 bg-code-tab rounded-[0.625rem] shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset">
      <TabBar primary={{ name: filename }} showTabMarkers={false} />
      <div className="children:my-0 children:!shadow-none children:bg-transparent children:rounded-none">{children}</div>
    </div>
  )
}
