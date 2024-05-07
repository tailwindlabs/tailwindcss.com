import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import clsx from 'clsx'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { useEffect } from 'react'

export default function AnchorPositioningExample() {
  return (
    <div className="h-screen w-full overflow-y-auto scrollbar:h-2 scrollbar:w-2 scrollbar:bg-transparent scrollbar-track:rounded scrollbar-track:bg-slate-100 scrollbar-thumb:rounded scrollbar-thumb:bg-slate-300 dark:scrollbar-track:bg-slate-500/[0.16] dark:scrollbar-thumb:bg-slate-500/50 sm:overscroll-none">
      <div className="flex h-[600px] w-full items-center justify-center bg-slate-50 bg-grid-slate-100 dark:bg-slate-800/25 dark:bg-grid-slate-700/25">
        <Menu __demoMode>
          <MenuButton className="-ml-[6.5rem] inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white dark:shadow-inner dark:shadow-white/10">
            Options
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              modal={false}
              anchor="bottom start"
              className={clsx(
                'w-52 origin-top-left rounded-xl border p-1 text-sm/6 focus:outline-none backdrop-blur',
                '[--anchor-gap:8px] [--anchor-padding:8px]',
                'bg-white shadow-sm text-gray-900',
                'dark:border-white/5 dark:bg-white/5 dark:text-white'
              )}
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-100">
                  <PencilIcon className="size-4 dark:fill-white/30 fill-gray-500" />
                  Edit
                  <kbd className="ml-auto hidden font-sans text-xs text-gray-400 dark:text-white/50 group-data-[focus]:inline">
                    ⌘E
                  </kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-100">
                  <Square2StackIcon className="size-4 dark:fill-white/30 fill-gray-500" />
                  Duplicate
                  <kbd className="ml-auto hidden font-sans text-xs text-gray-400 dark:text-white/50 group-data-[focus]:inline">
                    ⌘D
                  </kbd>
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-gray-100 dark:bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-100">
                  <ArchiveBoxXMarkIcon className="size-4 dark:fill-white/30 fill-gray-500" />
                  Archive
                  <kbd className="ml-auto hidden font-sans text-xs text-gray-400 dark:text-white/50 group-data-[focus]:inline">
                    ⌘A
                  </kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-100">
                  <TrashIcon className="size-4 dark:fill-white/30 fill-gray-500" />
                  Delete
                  <kbd className="ml-auto hidden font-sans text-xs text-gray-400 dark:text-white/50 group-data-[focus]:inline">
                    ⌘D
                  </kbd>
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
