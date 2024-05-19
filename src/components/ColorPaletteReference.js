import { useEffect, useState } from 'react'
import colorPalette from 'tailwindcss/colors'
import { kebabToTitleCase } from '@/utils/kebabToTitleCase'
import dlv from 'dlv'
import {
  Transition,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react'

import * as colorConvert from 'color-convert'

const colorTypes = ['HEX', 'RGB', 'HSL']

export function ColorPaletteReference({ colors }) {
  const [selectedColorType, setSelectedColorType] = useState('HEX')

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
      <Listbox
        value={selectedColorType}
        onChange={setSelectedColorType}
        as="div"
        className="relative ml-auto"
      >
        <ListboxButton className="text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5">
          {selectedColorType}
          <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true">
            <path
              d="M0 0L3 3L6 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom end"
          className="absolute z-50 top-full mt-1 py-2 w-24 rounded-lg bg-white shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:highlight-white/5"
        >
          {colorTypes.map((type) => (
            <ListboxOption
              key={type}
              value={type}
              className="w-full text-left block px-3 py-1 data-[selected]:bg-slate-50 data-[focus]:bg-slate-50 data-[selected]:text-slate-900 data-[focus]:text-slate-900 data-[selected]:dark:bg-slate-600/30 data-[focus]:dark:bg-slate-600/30 data-[selected]:dark:text-white data-[focus]:dark:text-white"
              as="button"
            >
              {type}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      {colors.map((color, i) => {
        let title = kebabToTitleCase(color)
        let value = color

        let palette = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((variant) => {
          let colorValue

          switch (selectedColorType) {
            case 'HEX':
              colorValue = dlv(colorPalette, [value, variant])
              break

            case 'RGB':
              colorValue = colorConvert.hex.rgb(dlv(colorPalette, [value, variant])).join(' ')
              break

            case 'HSL':
              colorValue = colorConvert.hex.hsl(dlv(colorPalette, [value, variant])).join(' ')
              break

            default:
              colorValue = dlv(colorPalette, [value, variant])
              break
          }

          return {
            name: variant,
            value: colorValue,
          }
        })

        return (
          <div key={title} className="2xl:contents">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
              {title
                .split('')
                .flatMap((l, i) => {
                  return i !== 0 && l.toUpperCase() === l ? [' ', l] : [l]
                })
                .join('')}
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              {palette.map((props, j) => (
                <ColorPalette key={j} {...props} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ColorPalette({ name, value }) {
  const [{ state }, setState] = useState({ state: 'idle' })

  useEffect(() => {
    if (state === 'copied') {
      const handle = window.setTimeout(() => {
        setState({ state: 'idle' })
      }, 1500)
      return () => {
        window.clearTimeout(handle)
      }
    }
  }, [state])

  return (
    <div className="relative flex">
      <div
        className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5"
        onClick={() =>
          navigator.clipboard.writeText(value).then(() => {
            setState({ state: 'copied' })
          })
        }
      >
        <div
          className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
          style={{ backgroundColor: value }}
        />
        <div className="px-0.5">
          <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
            {name}
          </div>
          <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
            {value}
          </div>
        </div>
      </div>
      <Transition
        show={state === 'copied'}
        enter="transform ease-out duration-200 transition origin-bottom"
        enterFrom="scale-95 translate-y-0.5 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute bottom-full left-1/2 mb-3.5 pb-1 -translate-x-1/2">
          <div className="relative bg-sky-500 text-white font-mono text-[0.625rem] leading-6 font-medium px-1.5 rounded-lg">
            Copied
            <svg
              aria-hidden="true"
              width="16"
              height="6"
              viewBox="0 0 16 6"
              className="text-sky-500 absolute top-full left-1/2 -mt-px -ml-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </Transition>
    </div>
  )
}

function ColorTypeSelector({}) {}
