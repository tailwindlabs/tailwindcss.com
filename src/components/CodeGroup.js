import { useState } from 'react'
import cx from 'classnames'

export function CodeGroup({ children }) {
  const [activeCodeBlockIndex, setActiveCodeBlockIndex] = useState(0)
  const codeBlockLabels = children.map((codeBlock) => codeBlock.props.label)

  const selectCodeBlock = (idx) => {
    setActiveCodeBlockIndex(idx)
  }

  return (
    <div>
      <div className="flex overflow-x-auto space-x-3 border-b border-gray-300 mb-2">
        {codeBlockLabels.map((label, index) => {
          const isLabelActive = activeCodeBlockIndex === index
          return (
            <div
              key={label}
              className={cx('py-1', { 'border-b-2 border-gray-700': isLabelActive })}
            >
              <a
                className={isLabelActive ? '' : 'hover:text-gray-900 cursor-pointer'}
                onClick={() => selectCodeBlock(index)}
              >
                {label}
              </a>
            </div>
          )
        })}
      </div>

      {children[activeCodeBlockIndex]}
    </div>
  )
}

export function CodeBlock({ children }) {
  return <div>{children}</div>
}
