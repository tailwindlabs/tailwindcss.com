# Utility Documentation Verification Checklist

Verifying llms.txt against source documentation files.

## Issues Fixed
1. `bg-position-[value]` not `bg-[value]` for background-position arbitrary values
2. `bg-size-[value]` not `bg-[value]` for background-size arbitrary values
3. `bg-top-left` not `bg-left-top` for background-position
4. `rounded-{xs|sm|md|...}` - removed bare `rounded` (doesn't exist in v4), added `xs`
5. Added missing divide utilities (divide-width, divide-color, divide-style)
6. Added `outline-hidden` to outline-style
7. Added `start-*` and `end-*` to position utilities, added negative syntax
8. Updated flex to show `flex-{n}` and `flex-{fraction}`
9. Updated rotate to include `rotate-none`, `rotate-x/y/z` 3D rotations
10. Updated translate to include `translate-{n}` (both axes), `translate-none`
11. Removed bare `drop-shadow` (doesn't exist in v4)
12. Added `h-lh` and missing viewport units to height
13. Removed `accent-auto` (doesn't exist)
14. Fixed `scheme-*` not `color-scheme-*` for color-scheme utilities
15. Added `scale-none`, `-scale-{n}`, `scale-3d` to scale
16. Removed bare `shadow` and `shadow-inner` (don't exist in v4)
17. Removed named leading values (`leading-tight`, etc.) - only `leading-none` and `leading-{n}` exist in v4
18. Fixed font-stretch to show `font-stretch-{n%}` for any percentage
19. Added safe variants to justify-content, align-items, align-self, place-content, place-items, place-self
20. Added `-order-{n}` to order
21. Updated word-break to remove incorrect `break-words` (use `wrap-break-word` for overflow-wrap)
22. Improved mask-image documentation with linear, radial, conic gradient patterns
23. Added `-underline-offset-{n}` to text-underline-offset
24. Added `-indent-{n}` and `-indent-px` to text-indent
25. Added `grayscale-{n}`, `invert-{n}`, `sepia-{n}` for percentage-based filter utilities
26. Added `backdrop-grayscale-{n}`, `backdrop-invert-{n}`, `backdrop-sepia-{n}` for backdrop filters
27. Added `grow-{n}` and `shrink-{n}` for numeric flex-grow/flex-shrink values
28. Added `col-{n}`, `-col-{n}`, `-col-start-{n}`, `-col-end-{n}` for grid-column
29. Added `row-{n}`, `-row-{n}`, `-row-start-{n}`, `-row-end-{n}` for grid-row
30. Added `snap-mandatory` and `snap-proximity` to scroll-snap-type
31. Added `antialiased` and `subpixel-antialiased` font-smoothing utilities
32. Fixed object-position: `object-top-left` not `object-left-top`
33. Fixed sizing utilities - added fraction support, viewport units, lh, auto to min/max width/height
34. Added `transform-gpu`, `transform-cpu`, `transform-none` to transform utilities
35. Added `skew-{n}` and `-skew-{n}` for both axes to skew utilities

## Accessibility
- [x] forced-color-adjust ✓

## Backgrounds
- [x] background-attachment ✓
- [x] background-clip ✓
- [x] background-color ✓
- [x] background-image ✓
- [x] background-origin ✓
- [x] background-position ✓ (fixed)
- [x] background-repeat ✓
- [x] background-size ✓ (fixed)

## Borders
- [x] border-color ✓
- [x] border-radius ✓ (fixed)
- [x] border-style ✓
- [x] border-width ✓
- [x] outline-color ✓
- [x] outline-offset ✓
- [x] outline-style ✓ (fixed)
- [x] outline-width ✓

## Effects
- [x] background-blend-mode ✓
- [x] box-shadow ✓ (fixed)
- [x] mask-clip ✓
- [x] mask-composite ✓
- [x] mask-image ✓ (fixed)
- [x] mask-mode ✓
- [x] mask-origin ✓
- [x] mask-position ✓
- [x] mask-repeat ✓
- [x] mask-size ✓
- [x] mask-type ✓
- [x] mix-blend-mode ✓
- [x] opacity ✓
- [x] text-shadow ✓

## Filters
- [x] backdrop-filter ✓
- [x] backdrop-filter-blur ✓
- [x] backdrop-filter-brightness ✓
- [x] backdrop-filter-contrast ✓
- [x] backdrop-filter-grayscale ✓ (fixed - added {n})
- [x] backdrop-filter-hue-rotate ✓
- [x] backdrop-filter-invert ✓ (fixed - added {n})
- [x] backdrop-filter-opacity ✓
- [x] backdrop-filter-saturate ✓
- [x] backdrop-filter-sepia ✓ (fixed - added {n})
- [x] filter ✓
- [x] filter-blur ✓
- [x] filter-brightness ✓
- [x] filter-contrast ✓
- [x] filter-drop-shadow ✓ (fixed)
- [x] filter-grayscale ✓ (fixed - added {n})
- [x] filter-hue-rotate ✓
- [x] filter-invert ✓ (fixed - added {n})
- [x] filter-saturate ✓
- [x] filter-sepia ✓ (fixed - added {n})

## Flexbox & Grid
- [x] align-content ✓
- [x] align-items ✓ (fixed - added safe variants)
- [x] align-self ✓ (fixed - added safe variants)
- [x] flex ✓ (fixed)
- [x] flex-basis ✓
- [x] flex-direction ✓
- [x] flex-grow ✓ (fixed - added {n})
- [x] flex-shrink ✓ (fixed - added {n})
- [x] flex-wrap ✓
- [x] gap ✓
- [x] grid-auto-columns ✓
- [x] grid-auto-flow ✓
- [x] grid-auto-rows ✓
- [x] grid-column ✓ (fixed - added negative variants)
- [x] grid-row ✓ (fixed - added negative variants)
- [x] grid-template-columns ✓
- [x] grid-template-rows ✓
- [x] justify-content ✓ (fixed - added safe variants)
- [x] justify-items ✓
- [x] justify-self ✓
- [x] order ✓ (fixed - added negative)
- [x] place-content ✓ (fixed - added safe variants)
- [x] place-items ✓ (fixed - added safe variants)
- [x] place-self ✓ (fixed - added safe variants)

## Interactivity
- [x] accent-color ✓ (fixed)
- [x] appearance ✓
- [x] caret-color ✓
- [x] color-scheme ✓ (fixed)
- [x] cursor ✓
- [x] field-sizing ✓
- [x] pointer-events ✓
- [x] resize ✓
- [x] scroll-behavior ✓
- [x] scroll-margin ✓
- [x] scroll-padding ✓
- [x] scroll-snap-align ✓
- [x] scroll-snap-stop ✓
- [x] scroll-snap-type ✓ (fixed - added strictness modifiers)
- [x] touch-action ✓
- [x] user-select ✓
- [x] will-change ✓

## Layout
- [x] aspect-ratio ✓
- [x] box-decoration-break ✓
- [x] box-sizing ✓
- [x] break-after ✓
- [x] break-before ✓
- [x] break-inside ✓
- [x] clear ✓
- [x] columns ✓
- [x] display ✓
- [x] float ✓
- [x] isolation ✓
- [x] object-fit ✓
- [x] object-position ✓ (fixed)
- [x] overflow ✓
- [x] overscroll-behavior ✓
- [x] position ✓
- [x] top-right-bottom-left ✓ (fixed)
- [x] visibility ✓
- [x] z-index ✓

## Sizing
- [x] height ✓ (fixed)
- [x] max-height ✓ (fixed - added fraction, viewport units, lh)
- [x] max-width ✓ (fixed - added fraction, viewport units, container)
- [x] min-height ✓ (fixed - added fraction, viewport units, lh, auto)
- [x] min-width ✓ (fixed - added fraction, viewport units, auto)
- [x] width ✓

## Spacing
- [x] margin ✓
- [x] padding ✓

## SVG
- [x] fill ✓
- [x] stroke ✓
- [x] stroke-width ✓

## Tables
- [x] border-collapse ✓
- [x] border-spacing ✓
- [x] caption-side ✓
- [x] table-layout ✓

## Transforms
- [x] backface-visibility ✓
- [x] perspective ✓
- [x] perspective-origin ✓
- [x] rotate ✓ (fixed)
- [x] scale ✓ (fixed)
- [x] skew ✓ (fixed - added both-axes variant)
- [x] transform ✓ (fixed - added gpu, cpu, none)
- [x] transform-origin ✓
- [x] transform-style ✓
- [x] translate ✓ (fixed)

## Transitions & Animation
- [x] animation ✓
- [x] transition-behavior ✓
- [x] transition-delay ✓
- [x] transition-duration ✓
- [x] transition-property ✓
- [x] transition-timing-function ✓

## Typography
- [x] color ✓
- [x] content ✓
- [x] font-family ✓
- [x] font-size ✓
- [x] font-smoothing ✓ (added)
- [x] font-stretch ✓ (fixed)
- [x] font-style ✓
- [x] font-variant-numeric ✓
- [x] font-weight ✓
- [x] hyphens ✓
- [x] letter-spacing ✓
- [x] line-clamp ✓
- [x] line-height ✓ (fixed)
- [x] list-style-image ✓
- [x] list-style-position ✓
- [x] list-style-type ✓
- [x] overflow-wrap ✓
- [x] text-align ✓
- [x] text-decoration-color ✓
- [x] text-decoration-line ✓
- [x] text-decoration-style ✓
- [x] text-decoration-thickness ✓
- [x] text-indent ✓ (fixed - added negative)
- [x] text-overflow ✓
- [x] text-transform ✓
- [x] text-underline-offset ✓ (fixed - added negative)
- [x] text-wrap ✓
- [x] vertical-align ✓
- [x] white-space ✓
- [x] word-break ✓ (fixed)
