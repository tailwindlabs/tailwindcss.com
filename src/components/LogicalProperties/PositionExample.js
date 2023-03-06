import { motion } from 'framer-motion'

export function PositionExample({ direction }) {
  return (
    <>
      <div class="flex justify-center font-mono text-white text-sm font-bold leading-6 py-8">
        <motion.div
          layout
          style={{
            direction: direction,
          }}
          class="bg-emerald-500 bg-stripes-emerald rounded-lg  w-3/4 relative h-32"
        >
          <motion.div
            // have to set this translate in a template to avoid some framer motion weirdness
            // https://github.com/framer/motion/issues/1711#issuecomment-1265147011
            transformTemplate={(_, generated) => `translateY(-50%) ${generated}`}
            layout="position"
            class="bg-emerald-500 p-4 shadow-lg rounded-md absolute start-0 top-1/2"
          >
            start-0
          </motion.div>
          <motion.div
            // have to set this translate in a template to avoid some framer motion weirdness
            // https://github.com/framer/motion/issues/1711#issuecomment-1265147011
            transformTemplate={(_, generated) => `translateY(-50%) ${generated}`}
            layout="position"
            class="bg-emerald-500 p-4 shadow-lg rounded-md absolute end-0 top-1/2"
          >
            end-0
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
