import { motion } from 'framer-motion'

export function BorderWidthExample({ direction }) {
  return (
    <>
      <motion.div
        layout
        style={{
          direction: direction,
        }}
        class="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6 py-10"
      >
        <motion.div
          layout
          style={{
            direction: direction,
          }}
          class="flex flex-col items-center shrink-0"
        >
          <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
            border-s-4
          </p>
          <div class="p-4 shadow-sm bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 dark:ring-white/10 w-16 h-16 border-emerald-500 border-s-4"></div>
        </motion.div>
        <motion.div
          style={{
            direction: direction,
          }}
          class="flex flex-col items-center shrink-0"
          layout
        >
          <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
            border-e-4
          </p>
          <div class="p-4 shadow-sm bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 dark:ring-white/10 w-16 h-16 border-emerald-500 border-e-4"></div>
        </motion.div>
      </motion.div>
    </>
  )
}
