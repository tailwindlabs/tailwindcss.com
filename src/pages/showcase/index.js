import { useRef } from 'react'
import Link from 'next/link'
import { showcase } from '@/showcase'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import clsx from 'clsx'

function Site({ site, priority = false }) {
  let videoContainerRef = useRef()
  let videoRef = useRef()
  let videoDarkRef = useRef()
  let state = useRef('idle')

  function forceLayout() {
    void videoRef.current.offsetWidth
  }

  function showVideo() {
    forceLayout()
    videoContainerRef.current.style.opacity = 1
    videoContainerRef.current.style.transition = ''
  }

  function hideVideo(durationSeconds = 0.5) {
    forceLayout()
    videoContainerRef.current.style.opacity = 0
    videoContainerRef.current.style.transition = `opacity ${durationSeconds}s linear`
  }
  
  function onEnded() {
    state.current = 'looping'
    hideVideo()
  }

  function getVideo() {
    return site.dark && document.documentElement.classList.contains('dark')
      ? videoDarkRef.current
      : videoRef.current
  }

  return (
    <li
      className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50"
      onMouseEnter={() => {
        if (state.current === 'idle') {
          state.current = 'playing'
          getVideo().play()
          showVideo()
        } else if (state.current === 'leaving') {
          state.current = 'looping'
        }
      }}
      onMouseLeave={() => {
         state.current = 'leaving'
         hideVideo()
      }}
    >
      <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
        <Image
          src={site.thumbnail}
          alt=""
          className={clsx('absolute inset-0 w-full h-full', site.dark && 'dark:hidden')}
          priority={priority}
          unoptimized
        />
        {site.dark && (
          <Image
            src={site.dark.thumbnail}
            alt=""
            className="absolute inset-0 w-full h-full hidden dark:block"
            priority={priority}
            unoptimized
          />
        )}
        <div
          ref={videoContainerRef}
          onTransitionEnd={() => {
            if (state.current === 'leaving') {
              state.current = 'idle'
              getVideo().currentTime = 0
              getVideo().pause()
            } else if (state.current === 'looping') {
              state.current = 'playing'
              getVideo().currentTime = 0
              getVideo().play()
              showVideo()
            }
          }}
        >
          <video
            ref={videoRef}
            preload="none"
            muted
            playsInline
            className={clsx(
              'absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]',
              site.dark && 'dark:hidden'
            )}
            onEnded={onEnded}
          >
            <source src={site.video} type={site.videoType ?? 'video/mp4'} />
          </video>
          {site.dark && (
            <video
              ref={videoDarkRef}
              preload="none"
              muted
              playsInline
              className="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)] hidden dark:block"
              onEnded={onEnded}
            >
              <source src={site.dark.video} type={site.dark.videoType ?? 'video/mp4'} />
            </video>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-6">
        <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
          <Link href={`/showcase/${site.slug}`}>
            <span className="absolute inset-0 rounded-3xl" />
            {site.name}
          </Link>
        </h2>
        {site.isTemplate && (
          <p
            aria-label="This site is a Tailwind UI template"
            className="ml-2 text-[0.6875rem] leading-5 px-1.5 border border-transparent font-semibold text-sky-500 bg-sky-100 rounded-full dark:bg-slate-600/50 dark:text-slate-200 dark:group-hover:bg-sky-500 dark:group-hover:text-white"
          >
            Template
          </p>
        )}
        <svg
          className="w-6 h-6 flex-none opacity-0 group-hover:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
            stroke="#0EA5E9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">
          {site.description}
        </p>
      </div>
    </li>
  )
}

export default function Showcase() {
  return (
    <>
      <main className="mt-16 sm:mt-20 relative">
        <Image
          src={require('@/img/showcase/beams@75.jpg')}
          alt=""
          className="hidden dark:sm:hidden sm:block absolute top-[-6.25rem] left-1/2 max-w-none w-[67.8125rem] ml-[-46.875rem] pointer-events-none"
          priority
          unoptimized
        />
        <Image
          src={require('@/img/showcase/beams-index-dark@75.jpg')}
          alt=""
          className="hidden dark:block absolute top-[-5rem] left-1/2 max-w-none w-[41.1875rem] ml-[-40rem] pointer-events-none"
          priority
          unoptimized
        />
        <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center">
          <h1 className="text-sm leading-6 font-semibold text-sky-500">Showcase</h1>
          <p className="mt-6 text-[2.5rem] leading-none sm:text-6xl tracking-tight font-bold text-slate-900 dark:text-white">
            You can build anything with Tailwind CSS.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Well not quite <em>anything</em>, like you can't build a spaceship with it. But you can
            definitely build the website for the spaceship —{' '}
            <Link
              href="/showcase/nasa"
              className="font-semibold border-b border-sky-300 text-gray-900 hover:border-b-2 dark:text-white dark:border-sky-400"
            >
              NASA did
            </Link>
            .
          </p>
        </div>
        <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          {showcase.map((site, siteIndex) => (
            <Site key={site.name} site={site} priority={siteIndex < 6} />
          ))}
        </ul>
      </main>
      <Footer className="mt-32" />
    </>
  )
}

Showcase.layoutProps = {
  meta: {
    title: 'Example Showcase',
    description:
      'Beautiful websites built with Tailwind CSS, including marketing sites, SaaS applications, ecommerce stores, and more.',
    ogImage: require('@/img/showcase/og.jpg'),
  },
}
