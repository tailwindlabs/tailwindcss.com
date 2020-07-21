import useMeasure from 'react-use-measure'
import { useEffect, useContext } from 'react'
import { DocumentContext } from '@/layouts/ContentsLayout'

export function Section({ children, id }) {
  const { currentSection, setCurrentSection, atTop, atBottom } = useContext(DocumentContext)
  const [ref, bounds] = useMeasure({ scroll: true })

  useEffect(() => {
    if (
      !atTop &&
      !atBottom &&
      currentSection !== id &&
      bounds.top < window.innerHeight / 2 &&
      bounds.top + bounds.height > window.innerHeight / 2
    ) {
      setCurrentSection(id)
    }
  }, [id, bounds.top, bounds.height, currentSection, setCurrentSection, atTop, atBottom])

  return (
    <div ref={ref} id={id}>
      {children}
    </div>
  )
}
