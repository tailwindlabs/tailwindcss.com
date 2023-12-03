import React, { useState, useRef, useEffect } from 'react'
import { motion, useElementScroll } from 'framer-motion'
import clsx from 'clsx'

const viewport = {
  lvh: 491,
  svh: 443,
  navBarHeight: 48,
  width: 300,
  padding: 5,
}

const transition = {
  duration: 0.4,
}
export function DynamicViewportExample({
  unit = 'dvh',
  colorStyles = 'dark:bg-blue-500 bg-blue-500 border border-blue-400',
  containerBackground = 'bg-stripes-blue',
}) {
  const [hidden, setHidden] = useState(false)
  const parent = useRef(null)

  const { scrollY } = useElementScroll(parent)

  useEffect(() => {
    const unsub = scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious()
      if (latest > previous) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    })

    return () => unsub()
  })

  // NOTE:When upgrading Framer Motion we can use useMotionValueEvent instead:

  // import {  motion, useScroll, useMotionValueEvent } from 'framer-motion'

  // const { scrollY } = useScroll({ container: parent })

  // useMotionValueEvent(scrollY, 'change', (latest) => {
  //   const previous = scrollY.getPrevious()
  //   if (latest > previous) {
  //     setHidden(true)
  //   } else {
  //     setHidden(false)
  //   }
  // })

  return (
    <>
      <div className="not-prose mb-4">
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
              d="M15.4641 2.46898C15.9584 3.57166 16.2407 5.12501 16.2407 5.12501M16.6809 13.0394C16.6809 13.0394 16.4527 15.1307 15.6923 16.7657"
              className="stroke-slate-400 dark:stroke-sky-400"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 10.375H16C16.6904 10.375 17.25 9.81535 17.25 9.12499C17.25 8.43464 16.6904 7.87499 16 7.87499H10.25V5.02199C10.25 4.15145 9.75816 3.35563 8.97953 2.96632C8.44277 2.69794 7.79526 3.12429 7.77107 3.72392C7.71877 5.02028 6.16278 6.8689 4.51168 7.58036C3.72558 7.87499 3.22027 8.4046 3.22027 8.98151L3.22027 14.5748C3.22027 15.0705 3.58339 15.4914 4.07372 15.564C7.70978 16.0846 9.60286 16.5656 10.1091 16.7042C10.2033 16.73 10.2986 16.7529 10.3959 16.7611C11.4178 16.8469 12.1318 16.1972 12.2781 15.1457L13 10.375ZM13 10.375H11.75"
              className="stroke-slate-400 dark:stroke-slate-300"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-slate-700 text-sm font-medium dark:text-slate-200">
            Scroll the viewport to hide/show the browser UI
          </p>
        </div>
      </div>
      <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 md:px-8 py-8 px-4">
        <div className="relative grid justify-items-center">
          <div
            ref={parent}
            style={{ width: `${viewport.width}px`, height: `${viewport.lvh}px` }}
            className={clsx(
              containerBackground,
              'relative rounded-lg border dark:border-slate-700 border-slate-300 text-center text-xs overflow-y-scroll no-scrollbar '
            )}
          >
            {' '}
            <motion.div
              className="absolute w-full overflow-hidden overscroll-none"
              transition={{
                ...transition,
              }}
              variants={{
                visible: {
                  y: 0,
                  height: `${viewport.lvh}px`,
                },
                hidden: {
                  y: `-${viewport.navBarHeight}px`,
                  height: `${viewport.lvh + viewport.navBarHeight}px`,
                },
              }}
              initial="visible"
              animate={hidden ? 'hidden' : 'visible'}
            >
              <div className=" w-full grid grid-cols-[auto,1fr,auto] items-center justify-start gap-4 rounded-t-lg border-b border-slate-300 dark:border-slate-600 dark:bg-slate-800 bg-slate-100 px-3 h-[48px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-slate-600 dark:text-slate-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <div className="w-full rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-4 py-1  text-slate-600 dark:text-slate-400">
                  tailwindcss.com
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-slate-600 dark:text-slate-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <motion.div
                className="w-full p-[5px] pointer-events-none "
                transition={{
                  ...transition,
                }}
                variants={{
                  visible: {
                    height: `${unit === 'lvh' ? viewport.lvh : viewport.svh}px`,
                  },
                  hidden: {
                    height: `${unit === 'svh' ? viewport.svh : viewport.lvh}px`,
                  },
                }}
                initial="visible"
                animate={hidden ? 'hidden' : 'visible'}
              >
                <div
                  className={clsx(
                    colorStyles,
                    'text-slate-50 font-mono font-bold w-full h-full rounded-md grid items-center justify-center overflow-hidden'
                  )}
                >
                  h-{unit}
                </div>
              </motion.div>
            </motion.div>
          </div>
          {unit === 'lvh' && (
            <motion.div
              transition={{
                ...transition,
              }}
              variants={{
                visible: {
                  bottom: `-${viewport.navBarHeight}px`,
                  height: `${viewport.navBarHeight}px`,
                },
                hidden: {
                  bottom: '5px',
                  height: '0px',
                },
              }}
              initial="visible"
              animate={hidden ? 'hidden' : 'visible'}
              // For some reason putting this in a tailwind class doesn't work
              style={{ width: `${viewport.width - 12}px` }}
              className={clsx(
                colorStyles,
                'opacity-20 rounded-b-md absolute left-0 right-0 mx-auto'
              )}
            ></motion.div>
          )}{' '}
        </div>
        <div
          style={{ backgroundPosition: '10px 10px' }}
          className=" z-[-1] pointer-events-none absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        />
        <div className="z-[-1] pointer-events-none absolute inset-0 border border-black/5 rounded-xl dark:border-white/5" />
      </div>
    </>
  )
}
