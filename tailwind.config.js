const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ['./src/**/*.{js,jsx,mjs,mdx,html}', './remark/**/*.{js,mjs}'],
  blocklist: [
    '[html:has(&)]:bg-blue-500',
    'list-image-[url(checkmark.png)]',
    'list-image-[url(carrot.png)]',
  ],
  darkMode: 'class',
  theme: {
    // `demo-*` screens are used for the "mobile-first" responsive demo
    screens: {
      sm: '640px',
      'demo-sm': '720px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      colors: {
        code: {
          highlight: 'rgb(125 211 252 / 0.1)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.slate.700'),
            hr: {
              borderColor: theme('colors.slate.100'),
              marginTop: '3em',
              marginBottom: '3em',
            },
            '.lead': {
              fontSize: '1.125em',
              lineHeight: 'calc(32 / 18)',
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              fontSize: '1.25em',
              fontWeight: '600',
              marginBottom: `1.25em`,
            },
            h3: {
              fontSize: '1.125em',
              marginTop: '2.4em',
              marginBottom: '1em',
              lineHeight: '1.4',
            },
            h4: {
              marginTop: '2.5em',
              marginBottom: '0.75em',
              fontSize: '1em',
              fontWeight: '600',
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.slate.500'),
              fontWeight: 500,
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              ...theme('fontSize.lg')[1],
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              ...theme('fontSize.base')[1],
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              ...theme('fontSize.sm')[1],
            },
            'h2, h3, h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            'h2 code, h3 code': {
              font: 'inherit',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: '1em',
              marginTop: '1em',
              marginBottom: '2em',
            },
            'ul > li': {
              position: 'relative',
              // paddingLeft: '0',
              paddingLeft: '0.5em',
              listStyleType: 'disc',
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            // 'ul > li::before': {
            //   content: '""',
            //   width: '0.75em',
            //   height: '0.125em',
            //   position: 'absolute',
            //   top: 'calc(0.875em - 0.0625em)',
            //   left: 0,
            //   borderRadius: '999px',
            //   backgroundColor: theme('colors.slate.300'),
            // },
            '--tw-prose-bullets': theme('colors.slate.300'),
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.sky.300')}`,
            },
            'a:hover': {
              borderBottomWidth: '2px',
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.slate.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            kbd: {
              background: theme('colors.slate.100'),
              borderWidth: '1px',
              borderColor: theme('colors.slate.200'),
              padding: '0.125em 0.25em',
              color: theme('colors.slate.700'),
              fontWeight: 500,
              fontSize: '0.875em',
              fontVariantLigatures: 'none',
              borderRadius: '4px',
              margin: '0 1px',
            },
            code: {
              fontWeight: 550,
              fontVariantLigatures: 'none',
            },
            'strong code': {
              fontWeight: 650,
            },
            pre: {
              color: theme('colors.slate.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`,
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`,
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%',
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.slate.700'),
              borderBottomColor: theme('colors.slate.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.slate.100'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic',
            },
            'figure > figcaption': {
              marginTop: `${12 / 14}em`,
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.400'),
            '--tw-prose-lead': theme('colors.slate.400'),
            'h2, h3, h4, thead th': {
              color: theme('colors.slate.200'),
            },
            'h2 small, h3 small, h4 small': {
              color: theme('colors.slate.400'),
            },
            kbd: {
              background: theme('colors.slate.700'),
              borderColor: theme('colors.slate.600'),
              color: theme('colors.slate.200'),
            },
            code: {
              color: theme('colors.slate.200'),
            },
            hr: {
              borderColor: theme('colors.slate.200'),
              opacity: '0.05',
            },
            pre: {
              boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
            },
            '--tw-prose-bullets': theme('colors.slate.500'),
            a: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.sky.400'),
            },
            strong: {
              color: theme('colors.slate.200'),
            },
            thead: {
              color: theme('colors.slate.300'),
              borderBottomColor: 'rgb(148 163 184 / 0.2)',
            },
            'tbody tr': {
              borderBottomColor: 'rgb(148 163 184 / 0.1)',
            },
            blockQuote: {
              color: theme('colors.white'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        18: '4.5rem',
        full: '100%',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
        'flash-code': {
          '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      animation: {
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
      },
      backgroundImage: (theme) => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.yellow.400'
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`
        )}")`,
      }),
      supports: {
        'view-transitions': 'view-transition-name: none',
      },
      transitionTimingFunction: {
        spring: {
          // https://linear-easing-generator.netlify.app/?codeType=js&code=const+%5Bduration%2C+func%5D+%3D+createSpring%28%7B%0A++mass%3A+1%2C%0A++stiffness%3A+631.65%2C%0A++damping%3A+50.26%2C%0A++velocity%3A+0%2C%0A%7D%29%3B%0A%0A%2F*%0A++Export+your+easing+function+as+a+global.%0A++The+name+you+use+here+will+appear+in+the+output.%0A++The+easing+function+must+take+a+number+as+input%2C%0A++where+0+is+the+start%2C+and+1+is+the+end.%0A++It+must+return+the+%27eased%27+value.%0A*%2F%0Aself.spring+%3D+func%3B%0A%2F*%0A++Some+easings+have+an+ideal+duration%2C+like+this+one.%0A++You+can+export+it+to+the+global%2C+in+milliseconds%2C%0A++and+it+will+be+used+in+the+output.%0A++This+is+optional.%0A*%2F%0Aself.duration+%3D+duration%3B%0A%0Afunction+createSpring%28%7B+mass%2C+stiffness%2C+damping%2C+velocity+%7D%29+%7B%0A++const+w0+%3D+Math.sqrt%28stiffness+%2F+mass%29%3B%0A++const+zeta+%3D+damping+%2F+%282+*+Math.sqrt%28stiffness+*+mass%29%29%3B%0A++const+wd+%3D+zeta+%3C+1+%3F+w0+*+Math.sqrt%281+-+zeta+*+zeta%29+%3A+0%3B%0A++const+b+%3D+zeta+%3C+1+%3F+%28zeta+*+w0+%2B+-velocity%29+%2F+wd+%3A+-velocity+%2B+w0%3B%0A%0A++function+solver%28t%29+%7B%0A++++if+%28zeta+%3C+1%29+%7B%0A++++++t+%3D%0A++++++++Math.exp%28-t+*+zeta+*+w0%29+*%0A++++++++%281+*+Math.cos%28wd+*+t%29+%2B+b+*+Math.sin%28wd+*+t%29%29%3B%0A++++%7D+else+%7B%0A++++++t+%3D+%281+%2B+b+*+t%29+*+Math.exp%28-t+*+w0%29%3B%0A++++%7D%0A%0A++++return+1+-+t%3B%0A++%7D%0A%0A++const+duration+%3D+%28%28%29+%3D%3E+%7B%0A++++const+step+%3D+1+%2F+6%3B%0A++++let+time+%3D+0%3B%0A%0A++++while+%28true%29+%7B%0A++++++if+%28Math.abs%281+-+solver%28time%29%29+%3C+0.001%29+%7B%0A++++++++const+restStart+%3D+time%3B%0A++++++++let+restSteps+%3D+1%3B%0A++++++++while+%28true%29+%7B%0A++++++++++time+%2B%3D+step%3B%0A++++++++++if+%28Math.abs%281+-+solver%28time%29%29+%3E%3D+0.001%29+break%3B%0A++++++++++restSteps%2B%2B%3B%0A++++++++++if+%28restSteps+%3D%3D%3D+16%29+return+restStart%3B%0A++++++++%7D%0A++++++%7D%0A++++++time+%2B%3D+step%3B%0A++++%7D%0A++%7D%29%28%29%3B%0A%0A++return+%5Bduration+*+1000%2C+%28t%29+%3D%3E+solver%28duration+*+t%29%5D%3B%0A%7D&simplify=0.0017&round=3
          // Perceptual duration: ~265ms, actual duration: 500ms
          '265/500': `linear(
            0, 0.005, 0.019 1.7%, 0.079 3.7%, 0.479 12.8%, 0.582, 0.668, 0.743 21.1%,
            0.807, 0.858 27.4%, 0.9 31%, 0.932 34.8%, 0.957 39.2%, 0.975 44.2%,
            0.987 50.2%, 0.994 56.9%, 0.998 65.8%, 1
          )`,
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      )
      addVariant('supports-scrollbars', '@supports selector(::-webkit-scrollbar)')
      addVariant('children', '& > *')
      addVariant('scrollbar', '&::-webkit-scrollbar')
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
      addVariant('demo-dark', '.demo-dark &')
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )

      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
    function ({ addUtilities, theme }) {
      let backgroundSize = '7.07px 7.07px'
      let backgroundImage = (color) =>
        `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`
      let colors = Object.entries(theme('backgroundColor')).filter(
        ([, value]) => typeof value === 'object' && value[400] && value[500]
      )

      addUtilities(
        Object.fromEntries(
          colors.map(([name, colors]) => {
            let backgroundColor = colors[400] + '1a' // 10% opacity
            let stripeColor = colors[500] + '80' // 50% opacity

            return [
              `.bg-stripes-${name}`,
              {
                backgroundColor,
                backgroundImage: backgroundImage(stripeColor),
                backgroundSize,
              },
            ]
          })
        )
      )

      addUtilities({
        '.bg-stripes-white': {
          backgroundImage: backgroundImage('rgba(255 255 255 / 0.75)'),
          backgroundSize,
        },
      })

      addUtilities({
        '.ligatures-none': {
          fontVariantLigatures: 'none',
        },
      })
    },
  ],
}
