import { memo, useEffect, useRef, useState, Fragment } from 'react'
import { isObject } from '@/utils/isObject'
import { castArray } from '@/utils/castArray'
import clsx from 'clsx'
import { Heading } from '@/components/Heading'
import { Transition } from '@headlessui/react'

function renderProperties(
  properties,
  { filter = () => true, transformValue = (x) => x, indent = 0 } = {}
) {
  return Object.keys(properties).map((property) => {
    if (isObject(properties[property])) {
      return [
        `${property} {`,
        renderProperties(properties[property], { filter, transformValue, indent: indent + 1 }),
        '}',
      ].join('\n')
    } else {
      return castArray(properties[property])
        .filter((value) => filter(property, value, properties))
        .map((value, i) => {
          let transformedValue = transformValue(value)
          let px = /^[\d.]+rem$/.test(transformedValue)
            ? `${parseFloat(transformedValue) * 16}px`
            : null
          return (
            <Fragment key={i}>
              {'  '.repeat(indent)}
              {property}: {transformedValue};
              {px && <span className="text-indigo-400"> {`/* ${px} */`}</span>}
              {'\n'}
            </Fragment>
          )
        })
    }
  })
}

export const ClassTable = memo(
  ({
    utilities = {},
    filterRules = () => true,
    filterProperties,
    preview,
    rowStyle,
    sort = (x) => x,
    transformSelector = (x) => x.replace(/^\./g, '').replace(/\\/g, ''),
    transformProperties = ({ properties }) => properties,
    transformValue,
    custom,
    scroll,
    showHeading = true,
  }) => {
    utilities = Object.fromEntries(Object.entries(utilities).filter(filterRules))
    let classes = Object.keys(utilities)
    let isScrollable = scroll || classes.length > 12
    let isCollapsable = classes.length > 10
    let [isCollapsed, setIsCollapsed] = useState(isCollapsable)
    let ref = useRef()
    let isInitial = useRef(true)

    useEffect(() => {
      if (isInitial.current) {
        isInitial.current = false
        return
      }
      if (isCollapsed) {
        ref.current.scrollIntoView(true)
      }
    }, [isCollapsed])

    const [transition, setTransition] = useState({ visible: false, top: 0 });

    useEffect(() => {
      if (transition.visible) {
        const handle = window.setTimeout(() => {
          setTransition({ visible: false })
        }, 1500)
        return () => {
          window.clearTimeout(handle)
        }
      }
    }, [transition])

    const handleCopyClick = (value, offsetTop) => {
      navigator.clipboard.writeText(value).then(() => {
        const adjustTop = 18
        setTransition({ visible: true, top: offsetTop + adjustTop })
      });
    };

    return (
      <div ref={ref} className={clsx('relative', showHeading && 'mt-10')}>
        {showHeading && (
          <Heading level={2} id="class-reference" className="relative scroll-mt-[var(--scroll-mt)]">
            <span className="sr-only">Quick reference</span>
          </Heading>
        )}
        <div className="overflow-x-auto flex -mx-4 sm:-mx-6 md:mx-0">
          <div
            id="class-table"
            className={clsx(
              'flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50',
              isCollapsed && 'max-h-96',
              !isScrollable && isCollapsed && 'lg:max-h-[none]',
              isScrollable && 'lg:supports-scrollbars:pr-2 lg:max-h-96'
            )}
          >
            {custom ? (
              custom()
            ) : (
              <table className="w-full text-left border-collapse relative">
                <thead>
                  <tr>
                    <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                      <div className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">
                        Class
                      </div>
                    </th>
                    <th
                      className={clsx(
                        'sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300',
                        {
                          'hidden sm:table-cell': preview,
                        }
                      )}
                    >
                      <div
                        className={clsx(
                          'py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20',
                          { 'pr-2': preview }
                        )}
                      >
                        Properties
                      </div>
                    </th>
                    {preview && (
                      <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
                        <div className="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20">
                          <span className="sr-only">Preview</span>&nbsp;
                        </div>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="align-baseline relative">
                  {sort(classes).map((utility, i) => {
                    let selector = utility
                    let properties = { ...utilities[selector] }

                    return (
                      <tr
                        key={utility}
                        style={rowStyle ? rowStyle({ css: properties }) : undefined}
                      >
                        <td
                          translate="no"
                          className={clsx(
                            'py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 cursor-pointer',
                            {
                              'border-t border-slate-100 dark:border-slate-400/10': i !== 0,
                            }
                          )}
                          onClick={({ currentTarget: { offsetTop } }) => handleCopyClick(transformSelector(selector), offsetTop)}
                        >
                          {transformSelector(selector)}
                        </td>
                        <td
                          translate="no"
                          className={clsx(
                            'py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300',
                            {
                              'border-t border-slate-100 dark:border-slate-400/10': i !== 0,
                              'hidden sm:table-cell sm:pr-2': preview,
                            }
                          )}
                        >
                          {renderProperties(transformProperties({ selector, properties }), {
                            filter: filterProperties,
                            transformValue,
                          })}
                        </td>
                        {preview &&
                          preview(properties, {
                            utility,
                            className:
                              i === 0 ? '' : 'border-t border-slate-100 dark:border-slate-400/10',
                          })}
                      </tr>
                    )
                  })}
                </tbody>
                <Transition
                  show={transition.visible}
                  enter="transform ease-out duration-200 transition origin-bottom"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute z-10" style={{ top: transition.top }}>
                    <div className="relative bg-sky-500 text-white font-mono text-[0.625rem] leading-6 font-medium px-1.5 rounded-lg">
                      Copied
                      <svg
                        aria-hidden="true"
                        width="16"
                        height="6"
                        viewBox="0 0 16 6"
                        className="text-sky-500 absolute top-full left-1/2 -mt-px -ml-2"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </Transition>
              </table>
            )}
            <div className="sticky bottom-0 h-px -mt-px bg-slate-200 dark:bg-slate-400/20" />
          </div>
        </div>
        {isCollapsable && (
          <div
            className={clsx(
              'inset-x-0 flex justify-center pointer-events-none lg:hidden',
              isCollapsed
                ? '-mt-9 relative'
                : 'mt-4 sticky bottom-[calc(1rem+env(safe-area-inset-bottom,0))]'
            )}
          >
            <div
              className={clsx(
                'absolute inset-x-0 bg-gradient-to-t from-white dark:from-slate-900',
                isCollapsed
                  ? '-top-8 bottom-0'
                  : '-top-4 bottom-[calc(-1*(1rem+env(safe-area-inset-bottom,0)))]'
              )}
            />
            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="pointer-events-auto relative text-sm font-semibold text-slate-900 bg-white py-2 px-4 rounded-full ring-1 ring-slate-900/10 shadow-sm dark:bg-slate-800 dark:text-slate-200 dark:highlight-white/5"
            >
              {isCollapsed ? 'Show all classes' : 'Show fewer classes'}
            </button>
          </div>
        )}
      </div>
    )
  }
)
