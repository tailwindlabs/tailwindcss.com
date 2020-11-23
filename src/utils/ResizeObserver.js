import { ResizeObserver as Polyfill } from '@juggle/resize-observer'

export const ResizeObserver =
  typeof window !== 'undefined' && 'ResizeObserver' in window ? window.ResizeObserver : Polyfill
