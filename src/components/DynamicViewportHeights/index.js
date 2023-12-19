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
  duration: 0.2,
  ease: 'linear',
  type: 'tween',
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
              d="m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z"
              className="stroke-slate-400 dark:stroke-slate-300"
            />
            <path
              d="M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5"
              className="stroke-slate-400 dark:stroke-sky-400"
            />
          </svg>
          <p className="text-slate-700 text-sm font-medium dark:text-slate-200">
            Scroll up and down in the viewport to hide/show the browser UI
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
              'relative rounded-lg border dark:border-slate-700 overscroll-none border-slate-300 text-center text-xs overflow-y-scroll no-scrollbar'
            )}
          >
            <motion.div
              className="absolute w-full overflow-hidden snap-start"
              transition={{
                ...transition,
              }}
              variants={{
                visible: {
                  y: 0,
                  height: `${viewport.lvh}px`,
                },
                hidden: {
                  y: `-${viewport.navBarHeight - 2}px`,
                  height: `${viewport.lvh + viewport.navBarHeight - 1}px`,
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
                className="w-full p-[7px] h-full pointer-events-none "
                transition={{
                  ...transition,
                  duration: 0.2,
                  // duration: unit === 'dvh' ? 0.4 : 0.2,
                  delay: unit === 'dvh' ? 0.4 : 0,
                }}
                variants={{
                  visible: {
                    maxHeight: `${unit === 'lvh' ? viewport.lvh : viewport.svh - 2}px`,
                  },
                  hidden: {
                    maxHeight: `${unit === 'svh' ? viewport.svh : viewport.lvh - 1}px`,
                  },
                }}
                initial="visible"
                animate={hidden ? 'hidden' : 'visible'}
              >
                <div
                  className={clsx(
                    colorStyles,
                    'text-slate-50 font-mono font-bold py-4 w-full h-full gap-5 rounded-md grid grid-rows-[1fr_auto_1fr] items-center content-center self-center justify-items-center  overflow-hidden'
                  )}
                >
                  {/* <div className="grid grid-rows-[1fr] h-full items-start overflow-y-hidden">
                    <svg
                      className="w-[12px] text-pink-300"
                      viewBox="0 0 9 162"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 161.5V1M4.5 1L8.5 5M4.5 1L0.5 5"
                        stroke="currentColor"
                        // strokeWidth={1.5}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div> */}
                  <div className="grid grid-rows-[1px_1fr] h-full justify-items-center">
                    <div className="bg-white/60 w-[12px] h-full"></div>
                    <div className="bg-white/40 w-[1.5px] h-full"></div>
                  </div>
                  <p>h-{unit}</p>

                  {/* <div className="grid grid-rows-[1fr] h-full items-end overflow-y-hidden">
                    <svg
                      className="w-[12px] text-pink-300"
                      viewBox="0 0 10 162"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.00001 1L5 161.5M5 161.5L1 157.5M5 161.5L9 157.5"
                        stroke="currentColor"
                        // strokeWidth={1.5}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div> */}
                  <div className="grid grid-rows-[1fr_1px] h-full justify-items-center">
                    <div className="bg-white/40 w-[1.5px] h-full"></div>
                    <div className="bg-white/60 w-[12px] h-full"></div>
                  </div>
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
