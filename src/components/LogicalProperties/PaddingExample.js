import { motion } from 'framer-motion'

export function PaddingExample({ direction }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 justify-center py-14 md:px-10 px-4 text-sm font-medium">
      <div className="grid md:gap-8 gap-4 justify-center">
        <p className="text-center font-mono">pl-3</p>
        <motion.div layout style={{ direction }} className="grid grid-flow-col items-center">
          <motion.img
            layout
            className="shrink-0 h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <motion.div
            layout
            className="relative pl-3 border-cyan-300 dark:border-cyan-600 border-2"
          >
            <motion.div layout className="absolute left-0 w-3 bg-stripes-cyan h-full" />
            <p className="text-slate-700 dark:text-slate-300">
              {direction === 'ltr' ? 'Tamer Karam' : 'تامر كرم'}
            </p>
            <p className="text-slate-500">
              {direction === 'ltr' ? 'Chief Executive Officer' : 'الرئيس التنفيذي'}
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="grid md:gap-8 gap-4 justify-center">
        <p className="text-center font-mono">ps-3</p>
        <motion.div layout style={{ direction }} className="grid grid-flow-col items-center">
          <motion.img
            layout
            className="shrink-0 h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <motion.div
            layout
            className="relative ps-3 border-cyan-300 dark:border-cyan-600 border-2"
          >
            <motion.div layout className="absolute start-0 w-3 bg-stripes-cyan h-full" />
            <p className="text-slate-700 dark:text-slate-300">
              {direction === 'ltr' ? 'Tamer Karam' : 'تامر كرم'}
            </p>
            <p className="text-slate-500">
              {direction === 'ltr' ? 'Chief Executive Officer' : 'الرئيس التنفيذي'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
