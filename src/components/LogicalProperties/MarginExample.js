import { motion } from 'framer-motion'

export function MarginExample({ direction }) {
  return (
    <motion.div
      layout
      class="gap-5 flex justify-center font-mono text-white text-sm font-bold leading-6 py-10"
      style={{
        direction: direction,
      }}
    >
      <motion.div
        style={{
          direction: direction,
        }}
        layout
      >
        <motion.div layout className="bg-stripes-emerald rounded-lg ">
          <motion.div layout className=" bg-emerald-500 rounded-lg shadow-lg p-4 ms-4">
            ms-4
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          direction: direction,
        }}
        layout
      >
        <motion.div layout className="bg-stripes-emerald rounded-lg">
          <motion.div layout className=" bg-emerald-500 rounded-lg shadow-lg p-4 me-12">
            me-12
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
