import { motion } from 'framer-motion'

export function BorderColorExample({ direction }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 justify-center py-14 md:px-10 px-4 text-sm font-medium">
      <div className="grid md:gap-8 gap-4 justify-center">
        <p className="text-center font-mono">border-l-indigo-400</p>
        <motion.div
          style={{ direction }}
          layout
          className="grid gap-3 px-4 py-3 border-l-2 border-l-indigo-400 dark:border-l-indigo-500 border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent rounded-sm shadow-sm"
        >
          <p className="italic font-normal text-slate-500 dark:text-slate-300">
            {direction === 'ltr'
              ? '"This has greatly improved my productivity"'
              : '"لقد أدى هذا إلى تحسين إنتاجيتي بشكل كبير'}
          </p>
          <div className="grid grid-flow-col grid-cols-[auto,1fr] gap-2">
            <motion.img
              layout
              className="h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-slate-700 dark:text-slate-100">
              <p>{direction === 'ltr' ? 'Tamer Karam' : 'تامر كرم'}</p>
              <p>{direction === 'ltr' ? 'CEO' : 'المدير التنفيذي'}</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="grid md:gap-8 gap-4 justify-center">
        <p className="text-center font-mono">border-s-indigo-400</p>
        <motion.div
          style={{ direction }}
          layout
          className="grid gap-3 px-4 py-3 border-s-2 border-s-indigo-400 dark:border-s-indigo-500 border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent rounded-sm shadow-sm"
        >
          <p className="italic font-normal text-slate-500 dark:text-slate-300">
            {direction === 'ltr'
              ? '"This has greatly improved my productivity"'
              : '"لقد أدى هذا إلى تحسين إنتاجيتي بشكل كبير'}
          </p>
          <div className="grid grid-flow-col grid-cols-[auto,1fr] gap-2">
            <motion.img
              layout
              className="h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-slate-700 dark:text-slate-100">
              <p>{direction === 'ltr' ? 'Tamer Karam' : 'تامر كرم'}</p>
              <p>{direction === 'ltr' ? 'CEO' : 'المدير التنفيذي'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
