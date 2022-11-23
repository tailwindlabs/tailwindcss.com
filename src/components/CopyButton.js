import clsx from 'clsx'
import { useEffect, useState } from 'react'
import redent from 'redent'
import Alert from '@reach/alert'
import { Transition } from '@headlessui/react'

export function CopyButton({ code, position = 'top' }) {
  let [{ state, i }, setState] = useState({ state: 'idle', i: 0 })

  useEffect(() => {
    if (state === 'copied') {
      let handle = window.setTimeout(() => {
        setState({ state: 'idle', i: i + 1 })
      }, 1500)
      return () => {
        window.clearTimeout(handle)
      }
    }
  }, [state, i])

  return (
    <div className="relative flex -mr-2">
      <button
        type="button"
        className={clsx({
          'text-slate-500 hover:text-slate-400': state === 'idle',
          'text-sky-400': state === 'copied',
        })}
        onClick={() => {
          navigator.clipboard.writeText(redent(code.replace(/^[+>-]/gm, ' '))).then(() => {
            setState({ state: 'copied', i: i + 1 })
          })
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="w-8 h-8"
        >
          <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19" />
          <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5" />
        </svg>
      </button>
      <Transition
        className={clsx({
          absolute: true,
          'translate-x-1/2 ml-2 mt-1': position === 'right',
          'bottom-full left-1/2 mb-3.5 pb-1 -translate-x-1/2': position === 'top',
        })}
        show={state === 'copied'}
        enter="transform ease-out duration-200 transition origin-bottom"
        enterFrom="scale-95 translate-y-0.5 opacity-0"
        enterTo="scale-100 translate-y-0 opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Alert className="relative bg-sky-500 text-white font-mono text-[0.625rem] leading-6 font-medium px-1.5 rounded-lg">
          Copied
          {position === 'top' ? (
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
          ) : null}
        </Alert>
      </Transition>
    </div>
  )
}
