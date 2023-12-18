import * as icons from '@heroicons/react/16/solid'

export function IconGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,1rem)] gap-x-12 gap-y-8 justify-between">
      {Object.entries(icons)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, Icon]) => (
          <Icon key={name} className="h-4 w-4 fill-slate-950" />
        ))}
    </div>
  )
}
