import { useState, useCallback, useRef, createContext, useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DocSearchModal } from '@docsearch/react'
import clsx from 'clsx'
import { useActionKey } from '@/hooks/useActionKey'
import { startViewTransition } from '@/utils/startViewTransition'

const INDEX_NAME = 'tailwindcss'
const API_KEY = '5fc87cef58bb80203d2207578309fab6'
const APP_ID = 'KNPXZI5B0M'

function isTailwindUIURL(url) {
  return url.startsWith('https://tailwindui.com')
}

function isExternalURL(url) {
  return /^https?:\/\//.test(url) && !url.startsWith(window.location.origin)
}

const SearchContext = createContext()

export function SearchProvider({ children }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [initialQuery, setInitialQuery] = useState(null)

  const onOpen = useCallback(() => {
    startViewTransition(() => {
      setIsOpen(true)
    })
  }, [setIsOpen])

  const onClose = useCallback(() => {
    startViewTransition(() => {
      setIsOpen(false)
    })
  }, [setIsOpen])

  const onInput = useCallback(
    (e) => {
      startViewTransition(() => {
        setIsOpen(true)
        setInitialQuery(e.key)
      })
    },
    [setIsOpen, setInitialQuery]
  )

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
  })

  useEffect(() => {
    // Prepend "Components" to Tailwind UI results that are shown in the "recent" view
    if (!isOpen) {
      let key = `__DOCSEARCH_RECENT_SEARCHES__${INDEX_NAME}`
      try {
        let data = JSON.parse(window.localStorage.getItem(key))
        for (let item of data) {
          if (isTailwindUIURL(item.url) && !item.hierarchy.lvl1.startsWith('Components')) {
            item.hierarchy.lvl1 = `Components / ${item.hierarchy.lvl1}`
          }
        }
        window.localStorage.setItem(key, JSON.stringify(data))
      } catch {}
    }
  }, [isOpen])

  return (
    <>
      <Head>
        <link rel="preconnect" href={`https://${APP_ID}-dsn.algolia.net`} crossOrigin="true" />
      </Head>
      <SearchContext.Provider
        value={{
          isOpen,
          onOpen,
          onClose,
          onInput,
        }}
      >
        {children}
      </SearchContext.Provider>
      {isOpen &&
        createPortal(
          <div
            onClick={(event) => {
              let link = event.target.closest('a')
              if (!link) return
              if (isExternalURL(link.href) && link.target !== '_blank') {
                event.preventDefault()
                window.open(link.href, '_blank')
              }
            }}
          >
            <DocSearchModal
              initialQuery={initialQuery}
              initialScrollY={window.scrollY}
              searchParameters={{
                facetFilters: 'version:v3',
                distinct: 1,
                attributesToRetrieve: [
                  'hierarchy.lvl0',
                  'hierarchy.lvl1',
                  'hierarchy.lvl2',
                  'hierarchy.lvl3',
                  'hierarchy.lvl4',
                  'hierarchy.lvl5',
                  'hierarchy.lvl6',
                  'content',
                  'type',
                  'url',
                  'product',
                  'product_category',
                ],
              }}
              placeholder="Search documentation"
              onClose={onClose}
              indexName={INDEX_NAME}
              apiKey={API_KEY}
              appId={APP_ID}
              navigator={{
                navigate({ itemUrl }) {
                  setIsOpen(false)
                  if (isExternalURL(itemUrl)) {
                    window.open(itemUrl, '_blank')
                  } else {
                    router.push(itemUrl)
                  }
                },
              }}
              hitComponent={Hit}
              transformItems={(items) => {
                return items.map((item, index) => {
                  // We transform the absolute URL into a relative URL to
                  // leverage Next's preloading.
                  const a = document.createElement('a')
                  a.href = item.url

                  const hash = a.hash === '#content-wrapper' || a.hash === '#header' ? '' : a.hash

                  if (item.hierarchy?.lvl0) {
                    item.hierarchy.lvl0 = item.hierarchy.lvl0.replace(/&amp;/g, '&')
                  }

                  if (item._highlightResult?.hierarchy?.lvl0?.value) {
                    item._highlightResult.hierarchy.lvl0.value =
                      item._highlightResult.hierarchy.lvl0.value.replace(/&amp;/g, '&')
                  }

                  let isTailwindUI = isTailwindUIURL(item.url)

                  return {
                    ...item,
                    hierarchy: {
                      ...item.hierarchy,
                      ...(isTailwindUI
                        ? { lvl1: `${item.product} / ${item.product_category}` }
                        : {}),
                    },
                    url: isTailwindUI ? item.url.split('#')[0] : `${a.pathname}${hash}`,
                    __is_result: () => true,
                    __is_parent: () => item.type === 'lvl1' && items.length > 1 && index === 0,
                    __is_child: () =>
                      item.type !== 'lvl1' &&
                      items.length > 1 &&
                      items[0].type === 'lvl1' &&
                      index !== 0,
                    __is_first: () => index === 1,
                    __is_last: () => index === items.length - 1 && index !== 0,
                    __is_tailwindui: () => isTailwindUI,
                  }
                })
              }}
            />
          </div>,
          document.body
        )}
    </>
  )
}

function Hit({ hit, children }) {
  return (
    <Link
      href={hit.url}
      target={hit.__is_tailwindui?.() ? '_blank' : undefined}
      className={clsx({
        'DocSearch-Hit--Result': hit.__is_result?.(),
        'DocSearch-Hit--Parent': hit.__is_parent?.(),
        'DocSearch-Hit--FirstChild': hit.__is_first?.(),
        'DocSearch-Hit--LastChild': hit.__is_last?.(),
        'DocSearch-Hit--Child': hit.__is_child?.(),
        'DocSearch-Hit--TailwindUI': hit.__is_tailwindui?.(),
      })}
    >
      {children}
    </Link>
  )
}

export function SearchButton({ children, className = '', ...props }) {
  let searchButtonRef = useRef()
  let { onOpen, onInput, isOpen } = useContext(SearchContext)

  useEffect(() => {
    function onKeyDown(event) {
      if (searchButtonRef && searchButtonRef.current === document.activeElement && onInput) {
        if (/[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
          onInput(event)
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onInput, searchButtonRef])

  return (
    <button
      type="button"
      className={clsx(
        className,
        'relative',
        isOpen && 'supports-view-transitions:motion-safe:invisible'
      )}
      ref={searchButtonRef}
      onClick={onOpen}
      style={{ viewTransitionName: isOpen ? null : 'search-box' }}
      {...props}
    >
      {children}
      {/* Position these fake "from" elements for easier view transitions: */}
      <div
        className="absolute inset-x-0 w-full h-0 top-full left-0"
        style={{ viewTransitionName: isOpen ? null : 'search-results' }}
      ></div>
      <div
        className="absolute inset-x-0 w-full h-0 bottom-0 left-0"
        style={{ viewTransitionName: isOpen ? null : 'search-footer' }}
      ></div>
    </button>
  )
}

export function SearchIcon(props) {
  let { isOpen } = useContext(SearchContext)

  return (
    // We need a wrapping div because view transitions don't seem to work well with <svg>:
    <div {...props} style={{ viewTransitionName: isOpen ? null : 'search-icon' }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="aspect-square h-full"
        aria-hidden="true"
      >
        <path d="m19 19-3.5-3.5" />
        <circle cx="11" cy="11" r="6" />
      </svg>
    </div>
  )
}

export function SearchShortcut({ as: Component = 'kbd', children, ...props }) {
  let actionKey = useActionKey()
  let { isOpen } = useContext(SearchContext)

  return (
    <Component {...props} style={{ viewTransitionName: isOpen ? null : 'search-shortcut' }}>
      {typeof children === 'function' ? children({ actionKey }) : children}
    </Component>
  )
}

export function SearchInput({ children, ...props }) {
  let { isOpen } = useContext(SearchContext)

  return (
    <span {...props} style={{ viewTransitionName: isOpen ? null : 'search-input' }}>
      {children}
    </span>
  )
}

function useDocSearchKeyboardEvents({ isOpen, onOpen, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      function open() {
        // We check that no other DocSearch modal is showing before opening
        // another one.
        if (!document.body.classList.contains('DocSearch--active')) {
          onOpen()
        }
      }

      if (
        (event.keyCode === 27 && isOpen) ||
        (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
        (!isEditingContent(event) && event.key === '/' && !isOpen)
      ) {
        event.preventDefault()

        if (isOpen) {
          onClose()
        } else if (!document.body.classList.contains('DocSearch--active')) {
          open()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onOpen, onClose])
}

function isEditingContent(event) {
  let element = event.target
  let tagName = element.tagName
  return (
    element.isContentEditable ||
    tagName === 'INPUT' ||
    tagName === 'SELECT' ||
    tagName === 'TEXTAREA'
  )
}
