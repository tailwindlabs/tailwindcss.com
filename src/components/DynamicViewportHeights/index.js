import React, { useState, useRef } from 'react'
import { AnimatePresence, motion, useElementScroll, useMotionValue } from 'framer-motion'
import PropTypes from 'prop-types'

MobileBrowser.propTypes = {}

export function MobileBrowser(props) {
  const parent = useRef(null)
  const { scrollY } = useElementScroll(parent)
  const [hidden, setHidden] = useState(false)

  useMotionValue(scrollY, 'change', (latest) => {
    console.log(scrollY)
    const previous = scrollY.getPrevious()
    if (latest > previous) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })
  const transition = {
    duration: 0.4,
  }

  return (
    <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 p-8">
      <div class="relative grid justify-items-center">
        <motion.div
          layout
          ref={parent}
          class="grid grid-rows-[auto_1fr] w-[320px] h-[524px] rounded-lg border border-slate-700 text-center text-xs text-white  overflow-y-scroll"
        >
          <motion.div
            layout
            variants={{
              visible: {
                height: '48px',
              },
              hidden: {
                height: '0px',
              },
            }}
            transition={{
              ...transition,
            }}
            initial={'visible'}
            animate={hidden ? 'hidden' : 'visible'}
            class="overflow-clip"
          >
            <motion.div
              layout
              transition={{
                ...transition,
              }}
              variants={{
                visible: {
                  y: 0,
                },
                hidden: {
                  y: '-100%',
                },
              }}
              initial={'visible'}
              animate={hidden ? 'hidden' : 'visible'}
              class="grid grid-cols-[auto,1fr,auto] items-center justify-start gap-4 rounded-t-lg border-b border-slate-600 bg-slate-800 p-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                class="h-5 w-5 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <div class="w-full rounded-full border border-slate-700 bg-slate-700 px-4 py-1 text-slate-400">
                tailwindcss.com
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                class="h-5 w-5 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </motion.div>
          </motion.div>
          <motion.div
            key="modal"
            layout
            class=" p-[5px] bg-stripes-blue text-slate-50 font-mono font-bold overflow-visible"
          >
            <div class="h-[600px] bg-blue-500 rounded-md  grid items-center justify-center border border-blue-400">
              h-dvh
            </div>
          </motion.div>
          {/* <motion.div
            transition={{
              repeat: Infinity,
              ...transition,
            }}
            initial={{
              height: '48px',
            }}
            animate={{
              height: '0px',
            }}
            class="bg-blue-500 border-blue-400 border opacity-20 w-full max-w-[308px] mx-[5px] rounded-b-md absolute top-[522px] left-auto right-auto"
          ></motion.div> */}
        </motion.div>
      </div>
      <div
        style={{ backgroundPosition: '10px 10px' }}
        className="  z-[-1] pointer-events-none absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
      />
      <div className=" z-[-1] pointer-events-none absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5" />
    </div>
  )
}
