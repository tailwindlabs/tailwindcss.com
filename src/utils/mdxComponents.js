export const mdxComponents = {
  img: (props) => (
    <div className="relative not-prose my-[2em] first:mt-0 last:mb-0 rounded-2xl overflow-hidden">
      <img {...props} decoding="async" />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10" />
    </div>
  ),
}
