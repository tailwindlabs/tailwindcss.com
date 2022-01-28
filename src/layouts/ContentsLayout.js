import { useState, useEffect, createContext, Fragment, useCallback, useContext } from 'react'
import { ClassTable } from '@/components/ClassTable'
import { useRouter } from 'next/router'
import { usePrevNext } from '@/hooks/usePrevNext'
import Link from 'next/link'
import { SidebarLayout, SidebarContext } from '@/layouts/SidebarLayout'
import { PageHeader } from '@/components/PageHeader'
import clsx from 'clsx'
import { Footer } from '@/components/Footer'
import { Heading } from '@/components/Heading'
import { MDXProvider } from '@mdx-js/react'

export const ContentsContext = createContext()

function TableOfContents({ tableOfContents, currentSection }) {
  let sidebarContext = useContext(SidebarContext)
  let isMainNav = Boolean(sidebarContext)

  function closeNav() {
    if (isMainNav) {
      sidebarContext.setNavIsOpen(false)
    }
  }

  function isActive(section) {
    if (section.slug === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  let pageHasSubsections = (section) => section.children.length > 0

  return (
    <ul className="text-nav-link not-prose font-roboto">
      {tableOfContents.map((section, index) => (
        <Fragment key={section.slug}>
          <li>
            <a
              href={`#${section.slug}`}
              onClick={closeNav}
              className={`block font-semibold ${index > 0 ? 'mt-5' : ''} ${
                isActive(section) ? 'text-orange' : 'text-dark-blue'
              }`}
            >
              {section.title}
            </a>
          </li>
          {section.children.map((subsection) => (
            <Fragment key={subsection.slug}>
              <li className="ml-2.5 mt-5">
                <a
                  href={`#${subsection.slug}`}
                  onClick={closeNav}
                  className={clsx(
                    '',
                    isActive(subsection) && section.slug !== subsection.slug
                      ? 'text-orange'
                      : 'text-[#798099]',
                    pageHasSubsections(subsection) ? 'font-bold' : 'font-normal'
                  )}
                >
                  {subsection.title}
                </a>
              </li>
              {subsection?.children.map((item) => (
                <li className="ml-5 mt-5" key={item.slug}>
                  <a
                    href={`#${item.slug}`}
                    onClick={closeNav}
                    className={isActive(item) ? 'text-orange' : 'text-[#798099]'}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </ul>
  )
}

function WasThisArticleHelpful({ className }) {
  return (
    <div
      className={`mt-[3.75rem] xl:mt-[2,5625rem] grid justify-items-center xl:justify-items-start text-dark-blue font-roboto ${className}`}
    >
      <div className="text-sidebar-right-title font-bold">Was this article helpful?</div>
      <div className="flex mt-[1.1875rem]">
        <button className="h-9 w-[4.0625rem] border border-neutral-200 rounded flex items-center justify-center font-semibold text-sm leading-6 mr-2.5">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjE1MTQgNi4wOTA4MkgxMS40NThWMi4yODkyNUMxMS40NTggMS41NzcxNyAxMC44OTk5IDEgMTAuMjExMyAxQzkuODMyODIgMSA5LjQ3NDA2IDEuMTc4MTggOS4yMzc3NiAxLjQ4MzYzTDQuNjg4OTYgNy4zNjM1M0g0LjY4OTU4SDQuNjg4OTZWMTMuNzI3MUw2LjUzNTA3IDE0Ljk5OThIMTQuMjEwNUMxNC43NTk1IDE0Ljk5OTggMTUuMjQxOSAxNC42MjMgMTUuMzkyNyAxNC4wNzY0TDE2LjkyNDkgOC41MjQyNEMxNy4yNjA5IDcuMzA0OTggMTYuMzc2NiA2LjA5MDgyIDE1LjE1MTQgNi4wOTA4MloiIHN0cm9rZT0iIzMzNDE1NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQuNjg5MDMgNi4wOTEyM0gwLjk5NjgyNlYxNS4wMDAySDQuNjg5MDNWNi4wOTEyM1oiIHN0cm9rZT0iIzMzNDE1NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuODQzMTUgMTMuMDkxMUMzLjE4MzAxIDEzLjA5MTEgMy40NTg1MiAxMi44MDYyIDMuNDU4NTIgMTIuNDU0N0MzLjQ1ODUyIDEyLjEwMzMgMy4xODMwMSAxMS44MTg0IDIuODQzMTUgMTEuODE4NEMyLjUwMzI5IDExLjgxODQgMi4yMjc3OCAxMi4xMDMzIDIuMjI3NzggMTIuNDU0N0MyLjIyNzc4IDEyLjgwNjIgMi41MDMyOSAxMy4wOTExIDIuODQzMTUgMTMuMDkxMVoiIGZpbGw9IiMzMzQxNTUiLz4KPC9zdmc+Cg=="
            alt="like button"
            className="mr-[0.375rem]"
          />
          Yes
        </button>
        <button className="h-9 w-[4.0625rem] border border-neutral-200 rounded flex items-center justify-center font-semibold text-sm leading-6">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNTU2NDQgOS45MDkwOUg2LjI0OTk2VjEzLjcxMDdDNi4yNDk5NiAxNC40MjI4IDYuODA4MTEgMTUgNy40OTY3MyAxNUM3Ljg3NTE5IDE1IDguMjMzOTUgMTQuODIxOCA4LjQ3MDI2IDE0LjUxNjRMMTMuMDE5MiA4LjYzNjM2SDEzLjAxODVIMTMuMDE5MlYyLjI3MjczTDExLjE3MyAxSDMuNDk3MzZDMi45NDkwNiAxIDIuNDY2NiAxLjM3NjczIDIuMzE1ODMgMS45MjMzNkwwLjc4MzUyNyA3LjQ3NTY0QzAuNDQ2OTEzIDguNjk0OTEgMS4zMzEyMiA5LjkwOTA5IDIuNTU2NDQgOS45MDkwOVoiIHN0cm9rZT0iIzMzNDE1NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzLjAxOTEgOS45MDkwOUwxNi43MTE0IDkuOTA5MDlMMTYuNzExNCAwLjk5OTk5N0wxMy4wMTkxIDAuOTk5OTk3TDEzLjAxOTEgOS45MDkwOVoiIHN0cm9rZT0iIzMzNDE1NSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0Ljg2NTQgNC4xODE5OEMxNS4yMDUyIDQuMTgxOTggMTUuNDgwOCAzLjg5NzA3IDE1LjQ4MDggMy41NDU2MkMxNS40ODA4IDMuMTk0MTcgMTUuMjA1MiAyLjkwOTI2IDE0Ljg2NTQgMi45MDkyNkMxNC41MjU1IDIuOTA5MjYgMTQuMjUgMy4xOTQxNyAxNC4yNSAzLjU0NTYyQzE0LjI1IDMuODk3MDcgMTQuNTI1NSA0LjE4MTk4IDE0Ljg2NTQgNC4xODE5OFoiIGZpbGw9IiMzMzQxNTUiLz4KPC9zdmc+Cg=="
            alt="like button"
            className="mr-[0.375rem]"
          />
          No
        </button>
      </div>
    </div>
  )
}

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.slug)
  let [headings, setHeadings] = useState([])

  const registerHeading = useCallback((id, top) => {
    setHeadings((headings) => [...headings.filter((h) => id !== h.id), { id, top }])
  }, [])

  const unregisterHeading = useCallback((id) => {
    setHeadings((headings) => headings.filter((h) => id !== h.id))
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0 || headings.length === 0) return
    function onScroll() {
      let y = window.pageYOffset
      let windowHeight = window.innerHeight
      let sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top)
      if (y <= 0) {
        setCurrentSection(sortedHeadings[0].id)
        return
      }
      if (y + windowHeight >= document.body.scrollHeight) {
        setCurrentSection(sortedHeadings[sortedHeadings.length - 1].id)
        return
      }
      const middle = y + windowHeight / 2
      let current = sortedHeadings[0].id
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (middle >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll, true)
  }, [headings, tableOfContents])

  return { currentSection, registerHeading, unregisterHeading }
}

export function ContentsLayoutOuter({ children, layoutProps, ...props }) {
  const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(
    layoutProps.tableOfContents
  )

  return (
    <SidebarLayout
      sidebar={
        <div className="mb-8">
          <TableOfContents
            tableOfContents={layoutProps.tableOfContents}
            currentSection={currentSection}
          />
        </div>
      }
      {...props}
    >
      <ContentsContext.Provider value={{ registerHeading, unregisterHeading }}>
        {children}
      </ContentsContext.Provider>
    </SidebarLayout>
  )
}

export function ContentsLayout({ children, meta, classes, tableOfContents }) {
  const router = useRouter()
  const toc = [
    ...(classes ? [{ title: 'Quick reference', slug: 'class-reference', children: [] }] : []),
    ...tableOfContents,
  ]

  const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(toc)
  let { prev, next } = usePrevNext()

  return (
    <div className="max-w-3xl mx-auto mt-[5.25rem] md:mt-[5.875rem] mb-[1.875rem] md:mb-[3.75rem] xl:pt-10 xl:max-w-[53.6875rem] xl:ml-0 xl:mr-[15.5rem] 2xl:mr-[22rem] xl:px-10 xl:border border-neutral-200 rounded-[0.625rem]">
      <PageHeader
        title={meta.title}
        description={meta.description}
        badge={{ key: 'Tailwind CSS version', value: meta.featureVersion }}
      />
      <ContentsContext.Provider value={{ registerHeading, unregisterHeading }}>
        {classes ? (
          <>
            <ClassTable {...classes} />
            <div
              id="content"
              className="relative z-20 prose md:prose-md prose-slate mt-12 dark:prose-dark"
            >
              <MDXProvider components={{ Heading }}>{children}</MDXProvider>
            </div>
          </>
        ) : (
          <div
            id="content"
            className="relative z-20 prose md:prose-md prose-slate mt-8 dark:prose-dark"
          >
            <MDXProvider components={{ Heading }}>{children}</MDXProvider>
          </div>
        )}
      </ContentsContext.Provider>

      <WasThisArticleHelpful className="xl:hidden" />

      <Footer previous={prev} next={next}>
        <Link
          href={`https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages${router.pathname}.mdx`}
        >
          <a className="hover:text-slate-900 dark:hover:text-slate-400">Edit this page on GitHub</a>
        </Link>
      </Footer>

      <div className="fixed z-20 top-[5.875rem] bottom-0 right-[max(0px,calc(50%-48.5rem))] 2xl:right-[max(0px,calc(50%-50rem))] w-[19.5rem] 2xl:w-[22rem] pl-[4.3125rem] pr-[1.8125rem] overflow-y-auto hidden xl:block">
        <div className="border-l-2 border-orange pl-5 pt-[0.3125rem] pb-2.5">
          {toc.length > 0 && (
            <TableOfContents tableOfContents={toc} currentSection={currentSection} />
          )}
        </div>
        <WasThisArticleHelpful />
      </div>
    </div>
  )
}
