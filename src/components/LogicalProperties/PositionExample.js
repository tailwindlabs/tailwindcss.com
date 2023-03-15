import { motion } from 'framer-motion'

export function PositionExample({ direction }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 justify-center py-14 md:px-12 px-4 text-sm font-medium">
      <div className="grid md:gap-8 gap-4">
        <p className="text-center font-mono">right-0</p>
        <motion.div layout style={{ direction }} className="grid gap-3">
          <motion.label
            layout
            htmlFor="email"
            className="justify-self-start text-slate-900 dark:text-slate-100"
          >
            {direction === 'ltr' ? 'Email' : 'אימייל'}
          </motion.label>
          <div className="relative rounded-md shadow-sm">
            <motion.div
              layout
              style={{ direction }}
              className="pointer-events-none absolute inset-y-0 right-0 flex rounded items-center m-1 p-1 border-2 border-pink-300 dark:border-pink-400 bg-stripes-pink text-slate-400 dark:text-slate-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-5 h-5 fill-current bg-slate-50/40 dark:bg-slate-900/50 rounded"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
            </motion.div>
            <motion.input
              layout
              style={{ direction }}
              type="text"
              name="email"
              id="email"
              className="w-full bg-white dark:bg-slate-800 rounded-md border-0 py-1.5 pl-3 text-slate-900 dark:text-slate-100 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              placeholder="your@email.com"
            />
          </div>
        </motion.div>
      </div>
      <div className="grid md:gap-8 gap-4">
        <p className="text-center font-mono">end-0</p>
        <motion.div layout style={{ direction }} className="grid gap-3">
          <motion.label
            layout
            htmlFor="email"
            className="justify-self-start text-slate-900 dark:text-slate-100"
          >
            {direction === 'ltr' ? 'Email' : 'אימייל'}
          </motion.label>
          <motion.div style={{ direction }} layout className="relative rounded-md shadow-sm">
            <motion.div
              layout
              style={{ direction }}
              className="pointer-events-none absolute inset-y-0 end-0 flex rounded items-center m-1 p-1 border-2 border-pink-300 dark:border-pink-400 bg-stripes-pink text-slate-400 dark:text-slate-300"
            >
              <motion.svg
                layout
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-5 h-5 fill-current bg-slate-50/40 dark:bg-slate-900/50 rounded"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </motion.svg>
            </motion.div>
            <motion.input
              layout
              style={{ direction }}
              type="text"
              name="email"
              id="email"
              className="w-full bg-white dark:bg-slate-800 rounded-md border-0 py-1.5 ps-3 text-slate-900 dark:text-slate-100 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              placeholder="your@email.com"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
