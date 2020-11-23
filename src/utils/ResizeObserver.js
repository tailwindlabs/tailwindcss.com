import { ResizeObserver as Polyfill } from '@juggle/resize-observer'

export const ResizeObserver = window.ResizeObserver || Polyfill
