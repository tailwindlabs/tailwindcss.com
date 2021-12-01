export function previewRemToPx(css, { className }) {
  return (
    <td className={`text-right leading-6 font-mono text-xs whitespace-pre ${className}`}>
      {Object.entries(css).filter(([_, v]) => v.endsWith('rem')).map(([k, v]) => {
        // TODO: html font size, get it from some storage, defaults to 16
        const fontSize = typeof window !== 'undefined'
          ? window.getComputedStyle(document.documentElement).fontSize
          : '16px'
        const rootFontSize = Number.parseFloat(fontSize)
        const rem = Number.parseFloat(v)
        return <div className="px-6" key={k}>{rem * rootFontSize}px</div>
      })}
    </td>
  )
}
