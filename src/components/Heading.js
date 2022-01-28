import { useEffect, useContext, useRef } from 'react'
import { ContentsContext } from '@/layouts/ContentsLayout'
import { useTop } from '@/hooks/useTop'
import clsx from 'clsx'

export function Heading({
  level,
  id,
  children,
  number,
  badge,
  className = '',
  hidden = false,
  ignore = false,
  style = {},
  nextElement,
  ...props
}) {
  let Component = `h${level}`
  const context = useContext(ContentsContext)

  let ref = useRef()
  let top = useTop(ref)

  useEffect(() => {
    if (!context) return
    if (typeof top !== 'undefined') {
      context.registerHeading(id, top)
    }
    return () => {
      context.unregisterHeading(id)
    }
  }, [top, id, context?.registerHeading, context?.unregisterHeading])

  const LEVELS = {
    2: 'top-[6.5rem]',
    3: 'top-[6.3rem] md:top-[6.5rem]',
    4: 'top-[6.2rem]',
  }

  return (
    <Component className={clsx('group flex whitespace-pre-wrap', className)} ref={ref} {...props}>
      <span>{children}</span>
      <a
        id={id}
        href={`#${id}`}
        className="relative -top-[5.25rem] md:-top-[6.25rem] w-[1.375rem] ml-2.5 flex items-center opacity-0 border-0 group-hover:opacity-100"
        aria-label="Anchor"
      >
        <div className={`absolute ${LEVELS[level]} w-6 h-6 flex items-center -mt-[0.875rem]`}>
          <img
            alt="anchor"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDBIOVYySDZDMy43OTA4NiAyIDIgMy43OTA4NiAyIDZDMiA4LjIwOTE0IDMuNzkwODYgMTAgNiAxMEg5VjEySDZDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk0xNiAxMEgxM1YxMkgxNkMxOS4zMTM3IDEyIDIyIDkuMzEzNzEgMjIgNkMyMiAyLjY4NjI5IDE5LjMxMzcgMCAxNiAwSDEzVjJIMTZDMTguMjA5MSAyIDIwIDMuNzkwODYgMjAgNkMyMCA4LjIwOTE0IDE4LjIwOTEgMTAgMTYgMTBaTTggNUM3LjQ0NzcyIDUgNyA1LjQ0NzcyIDcgNkM3IDYuNTUyMjggNy40NDc3MiA3IDggN0gxNEMxNC41NTIzIDcgMTUgNi41NTIyOCAxNSA2QzE1IDUuNDQ3NzIgMTQuNTUyMyA1IDE0IDVIOFoiIGZpbGw9IiNGQTVBMjgiLz4KPC9zdmc+Cg=="
          />
        </div>
      </a>
      {badge && (
        <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-4 bg-green-150 text-green-900">
          {badge}
        </span>
      )}
    </Component>
  )
}
