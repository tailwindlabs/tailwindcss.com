import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function Space({ children = ' ' }) {
  return (
    <motion.span
      transition={{ type: 'spring', bounce: '0', duration: 1 }}
      variants={{
        initial: {
          width: 'auto',
        },
        highlighted: {
          width: 'auto',
        },
        exiting: {
          width: '0ch',
          transition: { type: 'spring', bounce: '0', duration: 1 },
        },
        settled: {
          width: 'auto',
        },
      }}
      className="relative inline-block rounded-sm"
    >
      <span className="relative">
        <motion.span
          variants={{
            initial: {
              opacity: 0,
            },
            highlighted: {
              opacity: 0.25,
            },
            exiting: {
              opacity: 0,
              transition: { duration: 0.1 },
            },
            settled: {
              opacity: 0,
            },
          }}
          className="absolute inset-0 bg-white rounded-sm"
        />
        <motion.span
          className="relative"
          variants={{
            initial: {
              opacity: 1,
            },
            highlighted: {
              opacity: 1,
            },
            exiting: {
              opacity: 0,
              transition: { duration: 0.1 },
            },
            settled: {
              opacity: 1,
              transition: { delay: 0.2 },
            },
          }}
        >
          {children}
        </motion.span>
      </span>
    </motion.span>
  )
}

const TIMINGS = {
  initial: [1500, 'highlighted'],
  highlighted: [1000, 'exiting'],
  exiting: [2500, 'settled'],
  settled: [4000, 'highlighted'],
}

export function WhitespaceDemo() {
  let [activeState, setActiveState] = useState('initial')

  useTimeout(() => {
    setActiveState(TIMINGS[activeState][1])
  }, TIMINGS[activeState][0])

  return (
    <motion.div initial="initial" animate={activeState}>
      <pre className="language-jsx">
        <code className="language-jsx">
          <span className="token keyword">function</span>{' '}
          <span className="token function">
            <span className="token maybe-class-name">MyComponent</span>
          </span>
          <span className="token punctuation">(</span>
          <span className="token parameter">
            <span className="token punctuation">{'{'}</span> children{' '}
            <span className="token punctuation">{'}'}</span>
          </span>
          <span className="token punctuation">)</span>{' '}
          <span className="token punctuation">{'{'}</span>
          {'\n'}
          {'  '}
          <span className="token keyword control-flow">return</span>{' '}
          <span className="token punctuation">(</span>
          {'\n'}
          {'    '}
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>div
            </span>{' '}
            <span className="token attr-name">className</span>
            <span className="token attr-value">
              <span className="token punctuation attr-equals">=</span>
              <span className="token punctuation">"</span>
              <Space />
              mx-auto <Space />
              max-w-7xl px-6 lg:px-8
              <Space />
              <span className="token punctuation">"</span>
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <span className="token plain-text">
            {'\n'}
            {'      '}
          </span>
          <span className="token punctuation">{'{'}</span>children
          <span className="token punctuation">{'}'}</span>
          <span className="token plain-text">
            {'\n'}
            {'    '}
          </span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;/</span>div
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          {'\n'}
          {'  '}
          <span className="token punctuation">)</span>
          {'\n'}
          <span className="token punctuation">{'}'}</span>
        </code>
      </pre>
    </motion.div>
  )
}

export function DuplicationDemo() {
  let [activeState, setActiveState] = useState('initial')

  useTimeout(() => {
    setActiveState(TIMINGS[activeState][1])
  }, TIMINGS[activeState][0])

  return (
    <motion.div initial="initial" animate={activeState}>
      <pre className="language-jsx">
        <code className="language-jsx">
          <span className="token keyword">function</span>{' '}
          <span className="token function">
            <span className="token maybe-class-name">MyComponent</span>
          </span>
          <span className="token punctuation">(</span>
          <span className="token parameter">
            <span className="token punctuation">{'{'}</span> children{' '}
            <span className="token punctuation">{'}'}</span>
          </span>
          <span className="token punctuation">)</span>{' '}
          <span className="token punctuation">{'{'}</span>
          {'\n'}
          {'  '}
          <span className="token keyword control-flow">return</span>{' '}
          <span className="token punctuation">(</span>
          {'\n'}
          {'    '}
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;</span>div
            </span>{' '}
            <span className="token attr-name">className</span>
            <span className="token attr-value">
              <span className="token punctuation attr-equals">=</span>
              <span className="token punctuation">"</span>
              flex{' '}
              <span
                className={`${
                  activeState === 'exiting'
                    ? 'decoration-transparent'
                    : 'decoration-yellow-300 delay-200'
                } underline underline-offset-1 decoration-wavy transition decoration-1`}
              >
                bg-zinc-100
              </span>{' '}
              <Space>
                <span className="underline underline-offset-1 decoration-wavy transition decoration-1 decoration-yellow-300">
                  bg-zinc-100
                </span>{' '}
              </Space>
              px-4
              <span className="token punctuation">"</span>
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          <span className="token plain-text">
            {'\n'}
            {'      '}
          </span>
          <span className="token punctuation">{'{'}</span>children
          <span className="token punctuation">{'}'}</span>
          <span className="token plain-text">
            {'\n'}
            {'    '}
          </span>
          <span className="token tag">
            <span className="token tag">
              <span className="token punctuation">&lt;/</span>div
            </span>
            <span className="token punctuation">&gt;</span>
          </span>
          {'\n'}
          {'  '}
          <span className="token punctuation">)</span>
          {'\n'}
          <span className="token punctuation">{'}'}</span>
        </code>
      </pre>
    </motion.div>
  )
}

function useTimeout(callback, delay) {
  const timeoutRef = useRef(null)
  const savedCallback = useRef(callback)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    const tick = () => savedCallback.current()
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay)
      return () => window.clearTimeout(timeoutRef.current)
    }
  }, [delay])
  return timeoutRef
}
