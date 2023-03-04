import { motion } from 'framer-motion'

export function RoundingExample({ direction }) {
  return (
    <>
      <motion.div
        layout
        style={{
          direction: direction,
        }}
        class="flex flex-col sm:flex-row items-center justify-around text-white text-sm text-center font-bold leading-6 py-10"
      >
        <motion.div
          layout
          style={{
            direction: direction,
          }}
          class="flex flex-col items-center shrink-0"
        >
          <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
            rounded-ss-lg
          </p>
          <div class="p-4 shadow-sm bg-emerald-500 w-16 h-16 rounded-ss-lg"></div>
        </motion.div>
        <motion.div
          style={{
            direction: direction,
          }}
          class="flex flex-col items-center shrink-0"
          layout
        >
          <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
            rounded-se-lg
          </p>
          <div class="p-4 shadow-sm bg-emerald-500 w-16 h-16 rounded-se-lg"></div>
        </motion.div>
        <motion.div
          style={{
            direction: direction,
          }}
          layout
          class="flex flex-col items-center shrink-0"
        >
          <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
            rounded-ee-lg
          </p>
          <div class="p-4 shadow-sm bg-emerald-500 w-16 h-16 rounded-ee-lg"></div>
        </motion.div>
        <motion.div
          style={{
            direction: direction,
          }}
          class="flex flex-col items-center shrink-0"
          layout
        >
          <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">
            rounded-es-lg
          </p>
          <div class="p-4 shadow-sm bg-emerald-500 w-16 h-16 rounded-es-lg"></div>
        </motion.div>
      </motion.div>
    </>
  )
}
