import { Menu } from '@headlessui/react'
import clsx from 'clsx'

const defaultLanguage = {
  hostName: 'tailwindcss.com',
  languageName: 'English',
  href: 'https://tailwindcss.com',
}
const languages = [
  defaultLanguage,
  {
    hostName: 'ko-tailwind-css-com.vercel.app',
    languageName: 'Korean',
    href: 'https://ko-tailwind-css-com.vercel.app',
  },
]

export function LanguageSwitcher({ className }) {
  const hostName = typeof window === 'undefined' ? undefined : window.location.hostname

  let currentLanguage = languages.find((host) => host.hostName === hostName)
  let otherLanguages = languages.filter((host) => host.hostName !== hostName)

  if (!currentLanguage) {
    currentLanguage = defaultLanguage
    otherLanguages = languages.filter((host) => host.hostName !== defaultLanguage.hostName)
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-xs leading-5 font-semibold bg-gray-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-gray-400/20 dark:highlight-white/5">
        Language
        <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true">
          <path
            d="M0 0L3 3L6 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-gray-900/5 text-sm leading-6 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:highlight-white/5 z-10">
        <Menu.Item disabled>
          <span className="flex items-center justify-between px-3 py-1 text-sky-500 dark:text-sky-400">
            {currentLanguage.languageName}
            <svg width="24" height="24" fill="none" aria-hidden="true">
              <path
                d="m7.75 12.75 2.25 2.5 6.25-6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Menu.Item>
        {otherLanguages.map((host) => {
          return (
            <Menu.Item key={host.languageName}>
              {({ active }) => (
                <a
                  href={host.href}
                  className={clsx(
                    'block px-3 py-1',
                    active && 'bg-gray-50 text-gray-900 dark:bg-gray-600/30 dark:text-white'
                  )}
                >
                  {host.languageName}
                </a>
              )}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
