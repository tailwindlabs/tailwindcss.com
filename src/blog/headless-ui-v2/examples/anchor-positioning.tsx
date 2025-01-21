import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import clsx from "clsx";
import { ArchiveBoxXMarkIcon, PencilIcon, Square2StackIcon, TrashIcon } from "@heroicons/react/16/solid";

export default function AnchorPositioningExample() {
  return (
    <div className="scrollbar:h-2 scrollbar:w-2 scrollbar:bg-transparent scrollbar-track:rounded scrollbar-track:bg-slate-100 scrollbar-thumb:rounded scrollbar-thumb:bg-slate-300 dark:scrollbar-track:bg-slate-500/[0.16] dark:scrollbar-thumb:bg-slate-500/50 h-screen w-full overflow-y-auto sm:overscroll-none">
      <div className="bg-grid-slate-100 dark:bg-grid-slate-700/25 flex h-[600px] w-full items-center justify-center bg-slate-50 dark:bg-slate-800/25">
        <Menu __demoMode>
          <MenuButton className="-ml-[6.5rem] inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:bg-gray-700 data-[open]:bg-gray-700 dark:shadow-inner dark:shadow-white/10">
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
                "w-52 origin-top-left rounded-xl border p-1 text-sm/6 backdrop-blur focus:outline-none",
                "[--anchor-gap:8px] [--anchor-padding:8px]",
                "bg-white text-gray-900 shadow-sm",
                "border-gray-200 dark:border-white/5 dark:bg-white/5 dark:text-white",
              )}
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-100 dark:data-[focus]:bg-white/10">
                  <PencilIcon className="size-4 fill-gray-500 dark:fill-white/30" />
                  Edit
                  <kbd className="ml-auto hidden font-sans text-xs text-gray-400 group-data-[focus]:inline dark:text-white/50">
                    ⌘E
                  </kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-100 dark:data-[focus]:bg-white/10">
                  <Square2StackIcon className="size-4 fill-gray-500 dark:fill-white/30" />
                  Duplicate
                  <kbd className="ml-auto hidden font-sans text-xs text-gray-400 group-data-[focus]:inline dark:text-white/50">
                    ⌘D
                  </kbd>
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-gray-100 dark:bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-100 dark:data-[focus]:bg-white/10">
                  <ArchiveBoxXMarkIcon className="size-4 fill-gray-500 dark:fill-white/30" />
                  Archive
                  <kbd className="ml-auto hidden font-sans text-xs text-gray-400 group-data-[focus]:inline dark:text-white/50">
                    ⌘A
                  </kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-gray-100 dark:data-[focus]:bg-white/10">
                  <TrashIcon className="size-4 fill-gray-500 dark:fill-white/30" />
                  Delete
                  <kbd className="ml-auto hidden font-sans text-xs text-gray-400 group-data-[focus]:inline dark:text-white/50">
                    ⌘D
                  </kbd>
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
