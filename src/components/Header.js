import Link from 'next/link'
import { SearchButton } from '@/components/Search'
import Router from 'next/router'
import { Logo } from '@/components/Logo'
import { Dialog } from '@headlessui/react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ThemeSelect, ThemeToggle } from './ThemeToggle'
import styles from './Header.module.css'

function Featured() {
  return (
    <Link href="https://github.com/webiny/webiny-js">
      <a className="ml-9 bg-white rounded-full py-2 px-3 hidden xl:flex items-center">
        <span className="text-nav-link ml-2">
          ⭐️ If you like Webiny, give it a star on GitHub! ⭐
        </span>
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          className="ml-2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10.748L5.36872 5.95182L1.03281 0.999808"
            stroke="#334155"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </Link>
  )
}

export function NavPopover({ display = 'md:hidden', className, ...props }) {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    function handleRouteChange() {
      setIsOpen(false)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [isOpen])

  return (
    <div className={clsx(className, display)} {...props}>
      <button
        type="button"
        className="flex items-center justify-center mr-[1.6875rem] md:mr-0 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <svg
          width="4"
          height="17"
          viewBox="0 0 4 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 4.99725C3.1 4.99725 4 4.09725 4 2.99725C4 1.89725 3.1 0.997253 2 0.997253C0.9 0.997253 0 1.89725 0 2.99725C0 4.09725 0.9 4.99725 2 4.99725ZM2 6.99639C0.9 6.99639 0 7.89639 0 8.99639C0 10.0964 0.9 10.9964 2 10.9964C3.1 10.9964 4 10.0964 4 8.99639C4 7.89639 3.1 6.99639 2 6.99639ZM2 12.9955C0.9 12.9955 0 13.8955 0 14.9955C0 16.0955 0.9 16.9955 2 16.9955C3.1 16.9955 4 16.0955 4 14.9955C4 13.8955 3.1 12.9955 2 12.9955Z"
            fill="#334155"
          />
        </svg>
      </button>
      <Dialog
        as="div"
        className={clsx('fixed z-50 inset-0', display)}
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Overlay className="fixed top-[3.375rem] inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        <div
          className={clsx(
            'fixed top-[4.3125rem] right-[0.875rem] w-full max-w-[16.4375rem] bg-white rounded-lg pt-5 text-base font-semibold text-slate-900 dark:text-slate-400 dark:highlight-white/5',
            styles.headerDialog
          )}
        >
          <div className={styles.whiteCorner}></div>
          <div className="mb-5">
            <ThemeSelect />
          </div>
          <ul className="space-y-5 px-5">
            <NavItems />
          </ul>
          <div className="flex justify-between mt-5 py-2 px-11 border-t border-slate-200 dark:border-slate-200/10">
            <a>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z"
                  fill="#94A3B8"
                />
                <path
                  d="M12.3939 4.79798C10.975 4.83394 9.83685 5.99524 9.83685 7.42298C9.83685 7.62851 9.8589 7.82945 9.90385 8.02198C7.72123 7.91233 5.78614 6.86688 4.49085 5.27798C4.26479 5.66566 4.13485 6.11725 4.13485 6.59898C4.13485 7.50997 4.59918 8.31316 5.30385 8.78398C4.87356 8.77021 4.46801 8.65168 4.11385 8.45498C4.11365 8.4659 4.11385 8.47781 4.11385 8.48898C4.11385 9.76114 5.01937 10.8213 6.22085 11.063C6.00051 11.1227 5.76842 11.155 5.52885 11.155C5.35944 11.155 5.19517 11.1389 5.03485 11.108C5.36926 12.1512 6.33786 12.9109 7.48685 12.932C6.58808 13.6364 5.45744 14.056 4.22685 14.056C4.01509 14.056 3.80538 14.0444 3.59985 14.02C4.76236 14.7655 6.14197 15.2 7.62485 15.2C12.4555 15.2 15.0969 11.1984 15.0969 7.72798C15.0969 7.61418 15.0948 7.49975 15.0899 7.38698C15.6028 7.01749 16.048 6.55467 16.3999 6.02798C15.9293 6.23715 15.4232 6.37884 14.8919 6.44198C15.4344 6.11719 15.8507 5.60272 16.0469 4.98898C15.5394 5.29013 14.9773 5.50902 14.3789 5.62698C13.9 5.11666 13.2172 4.79798 12.4619 4.79798C12.4392 4.79798 12.4164 4.79741 12.3939 4.79798Z"
                  fill="white"
                />
              </svg>
              <span className="text-burger-menu-link">TWITTER</span>
            </a>
            <hr className={styles.verticalLine}></hr>
            <a href="https://github.com/webiny/webiny-js">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M10 0.570679C4.475 0.570679 0 5.04568 0 10.5707C0 14.9957 2.8625 18.7332 6.8375 20.0582C7.3375 20.1457 7.525 19.8457 7.525 19.5832C7.525 19.3457 7.5125 18.5582 7.5125 17.7207C5 18.1832 4.35 17.1082 4.15 16.5457C4.0375 16.2582 3.55 15.3707 3.125 15.1332C2.775 14.9457 2.275 14.4832 3.1125 14.4707C3.9 14.4582 4.4625 15.1957 4.65 15.4957C5.55 17.0082 6.9875 16.5832 7.5625 16.3207C7.65 15.6707 7.9125 15.2332 8.2 14.9832C5.975 14.7332 3.65 13.8707 3.65 10.0457C3.65 8.95818 4.0375 8.05818 4.675 7.35818C4.575 7.10818 4.225 6.08318 4.775 4.70818C4.775 4.70818 5.6125 4.44568 7.525 5.73318C8.325 5.50818 9.175 5.39568 10.025 5.39568C10.875 5.39568 11.725 5.50818 12.525 5.73318C14.4375 4.43318 15.275 4.70818 15.275 4.70818C15.825 6.08318 15.475 7.10818 15.375 7.35818C16.0125 8.05818 16.4 8.94568 16.4 10.0457C16.4 13.8832 14.0625 14.7332 11.8375 14.9832C12.2 15.2957 12.5125 15.8957 12.5125 16.8332C12.5125 18.1707 12.5 19.2457 12.5 19.5832C12.5 19.8457 12.6875 20.1582 13.1875 20.0582C15.1727 19.388 16.8977 18.1121 18.1198 16.4102C19.3419 14.7083 19.9995 12.6659 20 10.5707C20 5.04568 15.525 0.570679 10 0.570679Z"
                  fill="#94A3B8"
                />
              </svg>
              <span className="text-burger-menu-link">GITHUB</span>
            </a>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export function NavItems() {
  return (
    <>
      <li>
        <Link href="https://www.webiny.com/">
          <a className="text-nav-subdirectory">Webiny Home</a>
        </Link>
      </li>
      <li>
        <Link href="/docs/installation">
          <a href="/docs/installation" className="text-nav-subdirectory">
            Loremipsum
          </a>
        </Link>
      </li>
      <li>
        <Link href="/docs/installation">
          <a className="text-nav-subdirectory">Dolor</a>
        </Link>
      </li>
    </>
  )
}

export function Header({ navIsOpen, onNavToggle }) {
  let [isOpen, setIsOpen] = useState(false)
  const openDialog = () => {
    return setIsOpen(!isOpen)
  }
  return (
    <>
      <div
        className={clsx(
          'fixed top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-smoke',
          styles.mainHeader
        )}
      >
        <div className="relative flex items-center h-[3.375rem] lg:h-16 pl-[0.875rem] md:pl-8 pr-[] md:pr-8">
          <button className="lg:hidden mr-5" onClick={() => onNavToggle(!navIsOpen)}>
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.33344 3.66413C0.597 3.66413 0 3.06713 0 2.33069C0 1.59425 0.597 0.997253 1.33344 0.997253H20.6666C21.403 0.997253 22 1.59425 22 2.33069C22 3.06713 21.403 3.66413 20.6666 3.66413H1.33344ZM0 8.9963C0 9.73256 0.596861 10.3294 1.33313 10.3294H20.6669C21.4031 10.3294 22 9.73256 22 8.9963C22 8.26003 21.4031 7.66317 20.6669 7.66317H1.33313C0.596861 7.66317 0 8.26003 0 8.9963ZM0 15.6619C0 16.3983 0.597 16.9953 1.33344 16.9953H20.6666C21.403 16.9953 22 16.3983 22 15.6619C22 14.9255 21.403 14.3285 20.6666 14.3285H1.33344C0.597 14.3285 0 14.9255 0 15.6619Z"
                fill="#334155"
              />
            </svg>
          </button>
          <Link href="/docs/installation">
            <a
              className="flex-none w-[1.5925rem] lg:pr-[8.3875rem] lg:border-r border-border overflow-hidden lg:w-auto"
              onContextMenu={(e) => {
                e.preventDefault()
                Router.push('/brand')
              }}
            >
              <span className="sr-only">Tailwind CSS home page</span>
              <Logo className="w-auto h-[1.8025rem] lg:h-10" />
            </a>
          </Link>
          <Featured />
          <div className="relative hidden lg:flex items-center ml-auto">
            <button
              className="flex items-center justify-center w-8 h-8 focus:outline-none"
              onClick={openDialog}
            >
              {!isOpen ? (
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.8597 14.386L17.9474 18.4737L13.8597 14.386C10.9179 17.3279 6.14823 17.3279 3.20642 14.386C0.264525 11.4442 0.264525 6.6745 3.20642 3.7327C6.14823 0.790801 10.9179 0.790801 13.8597 3.7327C16.8016 6.6745 16.8016 11.4442 13.8597 14.386V14.386Z"
                    stroke="#334155"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 1L1 17" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
                  <path d="M1 1L17 17" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
            <nav className="flex items-center h-[2.375rem] text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 border-l border-slate-200 ml-[1.875rem] pl-[1.875rem]">
              <ul className="flex space-x-8">
                <NavItems />
              </ul>
            </nav>
            <div className="flex items-center h-[2.375rem] border-l border-slate-200 ml-[1.875rem] pl-[1.875rem] dark:border-slate-800">
              <div className="flex items-center mr-5">
                <ThemeToggle panelClassName="" />
              </div>
              <a
                href="https://github.com/webiny/webiny-js"
                className="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              >
                <span className="sr-only">Tailwind CSS on GitHub</span>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="/docs/installation"
                className="ml-5 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              >
                <span className="sr-only">Tailwind CSS on GitHub</span>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13Z" />
                  <path
                    d="M16.1121 6.23764C14.2677 6.28437 12.788 7.79407 12.788 9.65014C12.788 9.91733 12.8167 10.1785 12.8751 10.4288C10.0377 10.2863 7.5221 8.92721 5.83823 6.86164C5.54436 7.36561 5.37543 7.95268 5.37543 8.57893C5.37543 9.76322 5.97905 10.8074 6.89513 11.4194C6.33576 11.4015 5.80854 11.2474 5.34813 10.9917C5.34787 11.0059 5.34813 11.0214 5.34813 11.0359C5.34813 12.6897 6.5253 14.068 8.08723 14.3821C7.80079 14.4598 7.49907 14.5017 7.18763 14.5017C6.96739 14.5017 6.75385 14.4808 6.54543 14.4406C6.98016 15.7969 8.23933 16.7845 9.73303 16.8118C8.56462 17.7276 7.09479 18.273 5.49503 18.273C5.21974 18.273 4.94712 18.258 4.67993 18.2262C6.19119 19.1954 7.98468 19.7602 9.91243 19.7602C16.1922 19.7602 19.626 14.5581 19.626 10.0466C19.626 9.89868 19.6233 9.74993 19.6169 9.60333C20.2837 9.123 20.8626 8.52133 21.3199 7.83664C20.7082 8.10855 20.0503 8.29275 19.3595 8.37483C20.0648 7.9526 20.606 7.28379 20.861 6.48593C20.2013 6.87743 19.4706 7.16198 18.6926 7.31533C18.0701 6.65192 17.1825 6.23764 16.2005 6.23764C16.1711 6.23764 16.1414 6.23689 16.1121 6.23764Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <SearchButton className="ml-auto text-slate-500 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300">
            <span className="sr-only">Search</span>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8597 14.386L17.9474 18.4737L13.8597 14.386C10.9179 17.3279 6.14823 17.3279 3.20642 14.386C0.264525 11.4442 0.264525 6.6745 3.20642 3.7327C6.14823 0.790801 10.9179 0.790801 13.8597 3.7327C16.8016 6.6745 16.8016 11.4442 13.8597 14.386V14.386Z"
                stroke="#334155"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SearchButton>
          <NavPopover className="ml-[1.3781rem] -my-1" display="lg:hidden" />
        </div>
      </div>
      <Dialog
        as="div"
        className={clsx('hidden lg:block fixed top-[3.375rem] z-50 inset-0')}
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Overlay className="fixed top-[3.975rem] inset-1 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        <div
          className={clsx(
            'fixed z-40 top-16 hidden lg:flex items-center w-full h-[4.375rem] pl-[2.375rem] pr-[1.875rem] bg-white',
            styles.searchHeader
          )}
        >
          <button
            type="button"
            onClick={() => onNavToggle(!navIsOpen)}
            className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 mr-5 focus:outline-none"
          >
            <span className="sr-only">Navigation</span>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8597 14.386L17.9474 18.4737L13.8597 14.386C10.9179 17.3279 6.14823 17.3279 3.20642 14.386C0.264525 11.4442 0.264525 6.6745 3.20642 3.7327C6.14823 0.790801 10.9179 0.790801 13.8597 3.7327C16.8016 6.6745 16.8016 11.4442 13.8597 14.386V14.386Z"
                stroke="#334155"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            type="text"
            className={clsx(
              'text-nav-directory text-black font-roboto w-full focus:outline-none pr-4',
              styles.inputPlaceholder
            )}
            placeholder="Search..."
          />
          <div className="flex flex-row">
            <button className="cursor-auto">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="27.8627"
                  height="27.8627"
                  rx="3.5"
                  fill="white"
                  stroke="#E5E5E5"
                />
                <g clip-path="url(#clip0_15_978)">
                  <path
                    opacity="0.5"
                    d="M18.8236 8.15686C18.3244 8.15686 17.8456 8.35518 17.4926 8.70819C17.1396 9.0612 16.9413 9.53998 16.9413 10.0392V17.5686C16.9413 18.0679 17.1396 18.5466 17.4926 18.8996C17.8456 19.2527 18.3244 19.451 18.8236 19.451C19.3229 19.451 19.8016 19.2527 20.1547 18.8996C20.5077 18.5466 20.706 18.0679 20.706 17.5686C20.706 17.0694 20.5077 16.5906 20.1547 16.2376C19.8016 15.8846 19.3229 15.6863 18.8236 15.6863H11.2942C10.795 15.6863 10.3162 15.8846 9.96319 16.2376C9.61018 16.5906 9.41187 17.0694 9.41187 17.5686C9.41187 18.0679 9.61018 18.5466 9.96319 18.8996C10.3162 19.2527 10.795 19.451 11.2942 19.451C11.7934 19.451 12.2722 19.2527 12.6252 18.8996C12.9783 18.5466 13.1766 18.0679 13.1766 17.5686V10.0392C13.1766 9.53998 12.9783 9.0612 12.6252 8.70819C12.2722 8.35518 11.7934 8.15686 11.2942 8.15686C10.795 8.15686 10.3162 8.35518 9.96319 8.70819C9.61018 9.0612 9.41187 9.53998 9.41187 10.0392C9.41187 10.5384 9.61018 11.0172 9.96319 11.3702C10.3162 11.7232 10.795 11.9216 11.2942 11.9216H18.8236C19.3229 11.9216 19.8016 11.7232 20.1547 11.3702C20.5077 11.0172 20.706 10.5384 20.706 10.0392C20.706 9.53998 20.5077 9.0612 20.1547 8.70819C19.8016 8.35518 19.3229 8.15686 18.8236 8.15686Z"
                    stroke="#000E1A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_978">
                    <rect
                      width="12.549"
                      height="12.549"
                      fill="white"
                      transform="translate(8.78442 7.52942)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="ml-[0.38375rem] cursor-auto">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="28"
                  height="28"
                  rx="3.5"
                  fill="white"
                  stroke="#E5E5E5"
                />
                <path
                  opacity="0.5"
                  d="M11.7302 8.33087V19.7059H10.2224V8.33087H11.7302ZM18.5974 8.33087L13.8708 13.6356L11.2146 16.3934L10.9646 14.784L12.9646 12.5809L16.7849 8.33087H18.5974ZM17.1443 19.7059L12.9333 14.159L13.8318 12.9637L18.9412 19.7059H17.1443Z"
                  fill="#000E1A"
                />
              </svg>
            </button>
          </div>
        </div>
      </Dialog>
    </>
  )
}
