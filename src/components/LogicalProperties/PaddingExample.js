import { motion } from 'framer-motion'

export function PaddingExample({ direction }) {
  return (
    <>
      <motion.div
        style={{
          direction: direction,
        }}
        class="gap-5 flex justify-center font-mono text-white text-sm font-bold leading-6 py-10"
      >
        <motion.div
          layout
          style={{
            direction: direction,
          }}
          class="bg-emerald-500 bg-stripes-white rounded-lg shadow-lg ps-4"
        >
          <motion.div layout class="bg-emerald-500 p-4 rounded-e-md">
            ps-4
          </motion.div>
        </motion.div>
        <motion.div
          layout
          style={{
            direction: direction,
          }}
          class="bg-emerald-500 bg-stripes-white rounded-lg shadow-lg pe-12"
        >
          <motion.div layout class="bg-emerald-500 p-4 rounded-s-md">
            pe-12
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}
