import { flushSync } from 'react-dom'

// TODO: potentially skip this check and control reduced motion fallbacks in CSS once View Transition types are widely supported:
// https://www.w3.org/TR/css-view-transitions-2/#the-active-view-transition-type-pseudo
const motionSafe =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: no-preference)')
    : undefined

export function startViewTransition(cb, disabled = false) {
  if (!disabled && motionSafe?.matches && typeof document?.startViewTransition === 'function') {
    document.startViewTransition(() => {
      flushSync(cb)
    })
  } else cb()
}
