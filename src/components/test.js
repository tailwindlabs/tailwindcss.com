import { motion } from 'framer-motion'
import { useState } from 'react'

export function Test() {
  const [direction, setDirection] = useState('ltr')
  return (
    <div className="grid gap-4 not-prose relative ">
      <div className="grid grid-flow-col items-center px-2 pt-4">
        <div className="not-prose ">
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
        </div>
        <div className="  grid grid-flow-col gap-0 justify-self-end justify-end outline outline-slate-700 rounded font-semibold  divide-x-2  divide-slate-700 text-sm">
          <button
            className={
              direction === 'rtl'
                ? ' text-slate-400 px-4 py-2 hover:bg-slate-800'
                : ' bg-slate-800 text-slate-100 px-4 py-2 '
            }
            onClick={() => {
              setDirection('ltr')
            }}
          >
            left-to-right
          </button>
          <button
            className={
              direction === 'ltr'
                ? ' text-slate-400 px-4 py-1 hover:bg-slate-800'
                : ' bg-slate-800 text-slate-100 px-4 py-2 '
            }
            onClick={() => {
              setDirection('rtl')
            }}
          >
            right-to-left
          </button>
        </div>
      </div>
      <div className="grid not-prose relative bg-slate-50 dark:bg-slate-800/25 rounded-xl overflow-hidden py-10 px-4 gap-4 ">
        <div
          style={{ backgroundPosition: '10px 10px' }}
          className=" absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        />
        <div
          className={
            ' absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5'
          }
        />
        <div className="grid items-center px-12">
          <p className=" justify-self-center text-slate-500">Inline direction</p>
          <svg
            viewBox="0 0 580 15"
            className=" stroke-slate-500 justify-self-center"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={{
                rtl: {
                  d: 'M580.5 7.5H1M1 7.5L7.5 1M1 7.5L7.5 14',
                  transition: { type: 'tween', duration: 0.25, ease: 'easeInOut' },
                },
                ltr: {
                  d: 'M0 7.5H579.5M579.5 7.5L573 1M579.5 7.5L573 14',
                  transition: { type: 'tween', duration: 0.25, ease: 'easeInOut' },
                },
              }}
              animate={direction}
              initial={direction}
              d="M0 7.5H579.5M579.5 7.5L573 1M579.5 7.5L573 14"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="grid grid-cols-[40px,1fr,40px] gap-2 items-center">
          <p className="text-slate-500 -rotate-90 origin-center justify-self-center ">
            {direction === 'ltr' ? 'start' : 'end'}
          </p>
          <div className="relative font-mono text-white text-sm font-bold leading-6 py-20 pointer border border-slate-600 rounded ">
            <motion.div
              //   variants={{
              //     rtl: {
              //       // insetInlineStart: 'auto',
              //       // insetInlineEnd: '0',
              //       left: 'auto',
              //       right: 0,
              //       transition: { type: 'tween', duration: 0.25, ease: 'easeInOut' },
              //     },
              //     ltr: {
              //       // insetInlineStart: '0',
              //       // insetInlineEnd: 'auto',
              //       left: 0,
              //       right: 'auto',
              //       transition: { type: 'tween', duration: 0.25, ease: 'easeInOut' },
              //     },
              //   }}
              layout
              style={{
                // setting this in tailwind causes some the weirdness in the framer motion calculation
                y: '-50%',
                insetInlineStart: direction === 'ltr' ? 0 : 'auto',
                insetInlineEnd: direction === 'ltr' ? 'auto' : 0,
              }}
              //   animate={direction}
              //   initial={direction}
              className="w-24 absolute top-1/2 -translate-y-1/2"
            >
              <div className="flow-root bg-stripes-emerald rounded-l-lg justify-center">
                <motion.div
                  layout
                  style={{
                    marginInlineStart: direction === 'rtl' ? '0px' : '16px',
                    marginInlineEnd: direction === 'rtl' ? '16px' : '0px',
                  }}
                  //   variants={{
                  //     rtl: { marginInlineStart: '0px', marginInlineEnd: '16px' },
                  //     ltr: { marginInlineStart: '16px', marginInlineEnd: '0px' },
                  //   }}
                  className="w-20 justify-center flex bg-emerald-500 rounded-lg shadow-lg p-4 "
                >
                  ms-4
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              layout
              style={{
                // setting this in tailwind causes some the weirdness in the framer motion calculation
                translateY: '-50%',
                insetInlineStart: direction === 'rtl' ? 0 : 'auto',
                insetInlineEnd: direction === 'rtl' ? 'auto' : 0,
              }}
              //   variants={{
              //     rtl: {
              //       // insetInlineStart: 'auto',
              //       // insetInlineEnd: '0',
              //       right: 'auto',
              //       left: 0,
              //       transition: { type: 'tween', duration: 0.25, ease: 'easeInOut' },
              //     },
              //     ltr: {
              //       // insetInlineStart: '0',
              //       // insetInlineEnd: 'auto',
              //       right: 0,
              //       left: 'auto',
              //       transition: { type: 'tween', duration: 0.25, ease: 'easeInOut' },
              //     },
              //   }}
              //   animate={direction}
              //   initial={direction}
              className="w-32 absolute top-1/2 "
            >
              <div className="flow-root bg-stripes-emerald rounded-l-lg">
                <motion.div
                  layout
                  style={{
                    marginInlineStart: direction === 'ltr' ? '0px' : '48px',
                    marginInlineEnd: direction === 'ltr' ? '48px' : '0px',
                  }}
                  //   variants={{
                  //     rtl: { marginInlineStart: '48px', marginInlineEnd: '0px' },
                  //     ltr: { marginInlineStart: '0px', marginInlineEnd: '48px' },
                  //   }}
                  className="w-20 justify-center flex bg-emerald-500 rounded-lg shadow-lg p-4 "
                >
                  me-12
                </motion.div>
              </div>
            </motion.div>
          </div>
          <p className="text-slate-500 -rotate-90 origin-center justify-self-center ">
            {direction === 'ltr' ? 'end' : 'start'}
          </p>
        </div>
      </div>
    </div>
  )
}
