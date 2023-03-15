import { motion } from 'framer-motion'

export function BorderWidthExample({ direction }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 justify-center py-14 md:px-10 px-4 text-sm font-medium">
      <div className="grid md:gap-8 gap-4 justify-center">
        <p className="text-center font-mono">border-l-2</p>
        <motion.div layout style={{ direction }} className="grid grid-flow-col gap-3">
          <motion.img
            layout
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <motion.div
            layout
            className="grid gap-3 ps-3 border-l-2 border-indigo-300 dark:border-indigo-400"
          >
            <p className="italic font-normal text-slate-500 dark:text-slate-300">
              {direction === 'ltr'
                ? '"This has greatly improved my productivity"'
                : 'لقد أدى هذا إلى تحسين إنتاجيتي بشكل كبير'}
            </p>
            <p className=" text-slate-700 dark:text-slate-100">
              {direction === 'ltr' ? '- Tamer Karam, CEO' : 'تامر كرام ، الرئيس التنفيذي'}
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="grid md:gap-8 gap-4 justify-center">
        <p className="text-center font-mono">border-s-2</p>
        <motion.div layout style={{ direction }} className="grid grid-flow-col gap-3">
          <motion.img
            layout
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <motion.div
            layout
            className="grid gap-3 ps-3 border-s-2 border-indigo-300 dark:border-indigo-400"
          >
            <p className="italic font-normal text-slate-500 dark:text-slate-300">
              {direction === 'ltr'
                ? '"This has greatly improved my productivity"'
                : 'لقد أدى هذا إلى تحسين إنتاجيتي بشكل كبير'}
            </p>
            <p className="text-slate-700 dark:text-slate-100">
              {direction === 'ltr' ? '- Tamer Karam, CEO' : 'تامر كرام ، الرئيس التنفيذي'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
