import { motion } from 'framer-motion'

export function RoundingExample({ direction }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 justify-center py-14 md:px-10 px-4 text-sm font-medium">
      <div class="grid gap-8 items-start grid-rows-2">
        <p className="text-center font-mono">rounded-r-lg</p>
        <motion.div layout style={{ direction }} className="relative rounded-md shadow-sm">
          <motion.input
            layout
            style={{ direction }}
            type="text"
            name="contact"
            id="contact"
            className="justify-self-start w-full bg-white dark:bg-slate-800 rounded-lg border-0 py-1.5 ps-3 pe-12 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            placeholder={direction === 'ltr' ? ' Search contacts' : 'חפש אנשי קשר'}
          />
          <motion.button
            style={{ direction }}
            layout
            className="px-2 absolute inset-y-0 end-0 flex justify-start rounded-r-lg items-center border border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-700 hover:bg-indigo-100 text-indigo-500 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 fill-current"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
      <div class="grid gap-8 items-start grid-rows-2">
        <p className="text-center font-mono">rounded-e-lg</p>
        <motion.div layout style={{ direction }} className="relative rounded-md shadow-sm">
          <motion.input
            layout
            style={{ direction }}
            type="text"
            name="contact"
            id="contact"
            className="justify-self-start w-full bg-white dark:bg-slate-800 rounded-lg border-0 py-1.5 ps-3 pe-12 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            placeholder={direction === 'ltr' ? ' Search contacts' : 'חפש אנשי קשר'}
          />
          <motion.button
            style={{ direction }}
            layout
            className="px-2 absolute inset-y-0 end-0 flex justify-start rounded-e-lg items-center border border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-700 hover:bg-indigo-100 text-indigo-500 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 fill-current"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
