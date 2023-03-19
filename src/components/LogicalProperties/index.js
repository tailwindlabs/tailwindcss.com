import { motion } from 'framer-motion'
import { useState } from 'react'
import { BorderColorExample } from './BorderColorExample'
import { BorderWidthExample } from './BorderWidthExample'
import { MarginExample } from './MarginExample'
import { PaddingExample } from './PaddingExample'
import { PositionExample } from './PositionExample'
import { RoundingExample } from './RoundingExample'
import { ScrollMarginExample } from './ScrollMarginExample'
import { ScrollPaddingExample } from './ScrollPaddingExample'

export function LogicalPropertyExample({ property = 'test' }) {
  const [direction, setDirection] = useState('ltr')
  const formattedProperty = property
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase()
  return (
    <>
      <p className="first-letter:uppercase">
        {formattedProperty} can be controlled with{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties">
          {' '}
          logical properties
        </a>{' '}
        in the inline direction, which is useful when supporting both left-to-right and
        right-to-left languages:
      </p>
      <ExampleWrapper direction={direction} handleDirectionChange={setDirection}>
        {property === 'margin' && <MarginExample direction={direction} />}
        {property === 'padding' && <PaddingExample direction={direction} />}
        {property === 'position' && <PositionExample direction={direction} />}
        {property === 'rounding' && <RoundingExample direction={direction} />}
        {property === 'borderWidth' && <BorderWidthExample direction={direction} />}
        {property === 'borderColor' && <BorderColorExample direction={direction} />}
        {property === 'scrollMargin' && <ScrollMarginExample direction={direction} />}
        {property === 'scrollPadding' && <ScrollPaddingExample direction={direction} />}
      </ExampleWrapper>
    </>
  )
}

export function ExampleWrapper({ children, direction, handleDirectionChange }) {
  return (
    <div className="grid gap-4 not-prose relative">
      <div className="grid md:grid-flow-col md:gap-1 gap-4 items-center md:px-2 pt-4">
        <div className="flex space-x-2">
          <svg
            className="flex-none w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path
              d="m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z"
              className="stroke-slate-400 dark:stroke-slate-300"
            />
            <path
              d="M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5"
              className="stroke-slate-400 dark:stroke-sky-400"
            />
          </svg>
          <p className="text-slate-700 text-sm font-medium dark:text-slate-200">
            Try toggling the layout direction
          </p>
        </div>
        <div className="grid grid-flow-col gap-0 md:justify-self-end md:justify-end border border-slate-200 dark:border-slate-700 rounded font-semibold text-sm divide-x-2 divide-slate-200 dark:divide-slate-700">
          <button
            className={
              direction === 'rtl'
                ? 'text-slate-400 dark:text-slate-400 px-4 py-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 hover:dark:bg-slate-800'
                : 'dark:bg-slate-800 text-slate-800 dark:text-slate-100 px-4 py-2 '
            }
            onClick={() => {
              handleDirectionChange('ltr')
            }}
          >
            left-to-right
          </button>
          <button
            className={
              direction === 'ltr'
                ? 'text-slate-400 dark:text-slate-400 px-4 py-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 hover:dark:bg-slate-800'
                : 'dark:bg-slate-800 text-slate-800 dark:text-slate-100 px-4 py-2'
            }
            onClick={() => {
              handleDirectionChange('rtl')
            }}
          >
            right-to-left
          </button>
        </div>
      </div>
      <div className="grid relative text-sm rounded-xl overflow-hidden gap-4">
        <div className="relative pointer">
          {children}
          <div
            className={
              '-z-10 bg-slate-50 dark:bg-slate-800/25 absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5'
            }
          />
          <div
            style={{ backgroundPosition: '10px 10px' }}
            className="-z-10 pointer-events-none absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
          />
        </div>
      </div>
    </div>
  )
}
