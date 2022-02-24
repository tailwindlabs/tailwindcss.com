export function previewRemToPx(css, { className }) {
  return (
    <td className={`text-right leading-6 font-mono text-xs whitespace-pre ${className}`}>
      {Object.entries(css).map(([k, v]) => {
        const px = v.endsWith('rem') ? `${Number.parseFloat(v) * 16}px` : undefined
        return <div className="px-6" key={k}>{px}</div>
      })}
    </td>
  )
}
