import { motion } from 'framer-motion'

export function ScrollPaddingExample({ direction }) {
  return (
    <>
      <motion.div
        layout
        style={{
          direction: direction,
        }}
        class=" bg-stripes-pink w-6 absolute start-0 top-0 bottom-0 rounded-l-lg"
      />
      <motion.div
        layout
        style={{
          direction: direction,
        }}
        class="w-full flex gap-8 snap-x scroll-ps-6 overflow-x-auto py-14"
      >
        <motion.div layout class="snap-start shrink-0 first:ps-6 last:pe-[calc(100%-21.5rem)]">
          <img
            class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </motion.div>
        <motion.div layout class="snap-start shrink-0 first:ps-6 last:pe-[calc(100%-21.5rem)]">
          <img
            class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </motion.div>
        <motion.div layout class="snap-start shrink-0 first:ps-6 last:pe-[calc(100%-21.5rem)]">
          <img
            class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </motion.div>
        <motion.div layout class="snap-start shrink-0 first:ps-6 last:pe-[calc(100%-21.5rem)]">
          <img
            class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </motion.div>
        <motion.div layout class="snap-start shrink-0 first:ps-6 last:pe-[calc(100%-21.5rem)]">
          <img
            class="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </motion.div>
      </motion.div>
    </>
  )
}
