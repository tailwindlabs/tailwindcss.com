import { IconContainer, Caption, BigText, Paragraph, Link, Widont } from '@/components/home/common'
import { GradientLockup } from '@/components/GradientLockup'
import { CodeWindow, getClassNameForToken } from '@/components/CodeWindow'
import { gradients } from '@/utils/gradients'
import { tokenizeWithLines } from '../../macros/tokenize.macro'
import { Fragment, useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { ReactComponent as Icon } from '@/img/icons/home/component-driven.svg'
import { Tabs } from '@/components/Tabs'
import { ReactComponent as ReactLogo } from '@/img/icons/react.svg'
import { ReactComponent as VueLogo } from '@/img/icons/vue.svg'
import { ReactComponent as LaravelLogo } from '@/img/icons/laravel.svg'
import { AnimatePresence, AnimateSharedLayout, motion, useIsPresent } from 'framer-motion'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'
import styles from './ComponentDriven.module.css'

const recipes = [
  {
    title: 'Hank 的多汁牛肉堡',
    rating: 4.94,
    time: 20,
    difficulty: '簡單',
    servings: 4,
    author: 'Hank Douglas',
    image: require('@/img/jucy-beef-burger.jpg').default,
  },
  {
    title: '南方咔啦脆雞三明治',
    rating: 4.94,
    time: 30,
    difficulty: '中級',
    servings: 4,
    author: 'Nicholas Denver',
    image: require('@/img/chicken-sandwich.jpg').default,
  },
  {
    title: 'Lily健康牛肉堡',
    rating: 4.94,
    time: 20,
    difficulty: '簡單',
    servings: 6,
    author: 'Lily Ford',
    image: require('@/img/healthy-beef-burger.jpg').default,
  },
]

const tabs = {
  react: {
    'Recipes.js': tokenizeWithLines.jsx(
      `import Nav from './Nav.js'
import NavItem from './NavItem.js'
import List from './List.js'
import ListItem from './ListItem.js'

export default function Recipes({ recipes }) {
  return (
    <div className="divide-y divide-gray-100">
      <Nav>
        <NavItem href="/featured" isActive>特色</NavItem>
        <NavItem href="/popular">超人氣</NavItem>
        <NavItem href="/recent">最近</NavItem>
      </Nav>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} recipe={recipe} />
        ))}
      </List>
    </div>
  )
}
`
    ).lines,
    'Nav.js': tokenizeWithLines.jsx(`export default function Nav({ children }) {
  return (
    <nav className="p-4">
      <ul className="flex space-x-2">
        {children}
      </ul>
    </nav>
  )
}
`).lines,
    'NavItem.js': tokenizeWithLines.jsx(`export default function NavItem({ href, isActive, children }) {
  return (
    <li>
      <a
        href={href}
        className={\`block px-4 py-2 rounded-md \${isActive ? 'bg-amber-100 text-amber-700' : ''}\`}
      >
        {children}
      </a>
    </li>
  )
}
`).lines,
    'List.js': tokenizeWithLines.jsx(`export default function List({ children }) {
  return (
    <ul className="divide-y divide-gray-100">
      {children}
    </ul>
  )
}
`).lines,
    'ListItem.js': tokenizeWithLines.jsx(`export default function ListItem({ recipe }) {
  return (
    <article className="p-4 flex space-x-4">
      <img src={recipe.image} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="144" height="144" />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {recipe.title}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">時間</dt>
            <dd>
              <abbr title={\`\${recipe.time} 分鐘\`}>{recipe.time}m</abbr>
            </dd>
          </div>
          <div>
            <dt className="sr-only">難易度</dt>
            <dd> · {recipe.difficulty}</dd>
          </div>
          <div>
            <dt className="sr-only">份量</dt>
            <dd> · {recipe.servings} 人份</dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">By</dt>{' '}
            <dd className="inline text-black">{recipe.author}</dd>
          </div>
          <div class="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
            <dt className="text-amber-500">
              <span className="sr-only">評價</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd>{recipe.rating}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
`).lines,
  },
  vue: {
    'Recipes.vue': tokenizeWithLines.html(`<template>
  <div class="divide-y divide-gray-100">
    <Nav>
      <NavItem href="/featured" isActive>特色</NavItem>
      <NavItem href="/popular">超人氣</NavItem>
      <NavItem href="/recent">最近</NavItem>
    </Nav>
    <List>
      <ListItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </List>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import NavItem from './NavItem.vue'
import List from './List.vue'
import ListItem from './ListItem.vue'

export default {
  props: ['recipes'],
  components: {
    Nav,
    NavItem,
    List,
    ListItem,
  },
}
</script>
`).lines,
    'Nav.vue': tokenizeWithLines.html(`<template>
  <nav class="p-4">
    <ul class="flex space-x-2">
      <slot></slot>
    </ul>
  </nav>
</template>
`).lines,
    'NavItem.vue': tokenizeWithLines.html(`<template>
  <li>
    <a
      :href="href"
      :class="['block px-4 py-2 rounded-md', { 'bg-amber-100 text-amber-700': isActive }]"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    isActive: Boolean,
  },
}
</script>
`).lines,
    'List.vue': tokenizeWithLines.html(`<template>
  <ul class="divide-y divide-gray-100">
    <slot></slot>
  </ul>
</template>
`).lines,
    'ListItem.vue': tokenizeWithLines.html(`<template>
  <article class="p-4 flex space-x-4">
    <img :src="recipe.image" alt="" class="flex-none w-18 h-18 rounded-lg object-cover" width="144" height="144" />
    <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
      <h2 class="text-lg font-semibold text-black mb-0.5">
        {{ recipe.title }}
      </h2>
      <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
        <div>
          <dt class="sr-only">時間</dt>
          <dd>
            <abbr :title="\`\${recipe.time} 分鐘\`">{{ recipe.time }}m</abbr>
          </dd>
        </div>
        <div>
          <dt class="sr-only">難易度</dt>
          <dd> · {{ recipe.difficulty }}</dd>
        </div>
        <div>
          <dt class="sr-only">份量</dt>
          <dd> · {{ recipe.servings }} 人份</dd>
        </div>
        <div class="flex-none w-full mt-0.5 font-normal">
          <dt class="inline">By</dt>
          <dd class="inline text-black">{{ recipe.author }}</dd>
        </div>
        <div class="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
          <dt class="text-amber-500">
            <span class="sr-only">評價</span>
            <svg width="16" height="20" fill="currentColor">
              <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
            </svg>
          </dt>
          <dd>{{ recipe.rating }}</dd>
        </div>
      </dl>
    </div>
  </article>
</template>

<script>
export default {
  props: ['recipe'],
}
</script>
`).lines,
  },
  blade: {
    'recipes.blade.php': tokenizeWithLines.html(`<div class="divide-y divide-gray-100">
  <x-nav>
    <x-nav-item href="/featured" :isActive="true">特色</x-nav-item>
    <x-nav-item href="/popular">超人氣</x-nav-item>
    <x-nav-item href="/recent">最近</x-nav-item>
  </x-nav>
  <x-list>
    @foreach ($recipes as $recipe)
      <x-list-item :recipe="$recipe" />
    @endforeach
  </x-list>
</div>
`).lines,
    'nav.blade.php': tokenizeWithLines.html(`<nav class="p-4">
  <ul class="flex space-x-2">
    {{ $slot }}
  </ul>
</nav>
`).lines,
    'nav-item.blade.php': tokenizeWithLines.html(`<li>
  <a
    href="{{ $href }}"
    class="block px-4 py-2 rounded-md {{ $isActive ? 'bg-amber-100 text-amber-700' : '' }}"
  >
    {{ $slot }}
  </a>
</li>
`).lines,
    'list.blade.php': tokenizeWithLines.html(`<ul class="divide-y divide-gray-100">
  {{ $slot }}
</ul>
`).lines,
    'list-item.blade.php': tokenizeWithLines.html(`<article class="p-4 flex space-x-4">
  <img src="{{ $recipe->image }}" alt="" class="flex-none w-18 h-18 rounded-lg object-cover" width="144" height="144" />
  <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
    <h2 class="text-lg font-semibold text-black mb-0.5">
      {{ $recipe->title }}
    </h2>
    <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
      <div>
        <dt class="sr-only">時間</dt>
        <dd>
          <abbr title="{{ $recipe->time }} 分鐘">{{ $recipe->time }}m</abbr>
        </dd>
      </div>
      <div>
        <dt class="sr-only">難易度</dt>
        <dd> · {{ $recipe->difficulty }}</dd>
      </div>
      <div>
        <dt class="sr-only">份量</dt>
        <dd> · {{ $recipe->servings }} 人份</dd>
      </div>
      <div class="flex-none w-full mt-0.5 font-normal">
        <dt class="inline">By</dt>
        <dd class="inline text-black">{{ $recipe->author }}</dd>
      </div>
      <div class="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
        <dt class="text-amber-500">
          <span class="sr-only">評價</span>
          <svg width="16" height="20" fill="currentColor">
            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
          </svg>
        </dt>
        <dd>{{ $recipe->rating }}</dd>
      </div>
    </dl>
  </div>
</article>
`).lines,
  },
}

function ComponentLink({ onClick, children }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    function onKey(e) {
      const modifier = e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
      if (!active && modifier) {
        setActive(true)
      } else if (active && !modifier) {
        setActive(false)
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKey)
    }
  }, [active])

  return active ? (
    <button type="button" className="hover:underline" onClick={onClick}>
      {children}
    </button>
  ) : (
    children
  )
}

function TabBar({ children }) {
  const isPresent = useIsPresent()
  return (
    <motion.ul
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ type: 'spring', mass: 0.4 }}
      className={`${isPresent ? '' : 'absolute top-0 left-0 w-full'} flex text-sm text-orange-300`}
    >
      {children}
    </motion.ul>
  )
}

function ComponentExample({ framework }) {
  const [activeTab, setActiveTab] = useState(0)
  const lines = tabs[framework][Object.keys(tabs[framework])[activeTab]]

  useIsomorphicLayoutEffect(() => {
    setActiveTab(0)
  }, [framework])

  return (
    <CodeWindow className="bg-orange-500">
      <div className="flex-none relative bg-orange-1000 overflow-auto whitespace-nowrap">
        <AnimateSharedLayout>
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 flex text-sm font-medium text-transparent pointer-events-none select-none"
          >
            {Object.keys(tabs[framework]).map((tab, tabIndex) => (
              <div
                key={tabIndex}
                className="flex-none relative py-2 px-4 border border-transparent"
              >
                {tabIndex === activeTab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -inset-px bg-white bg-opacity-10"
                  />
                )}
                {tab}
              </div>
            ))}
          </div>
        </AnimateSharedLayout>
        <AnimatePresence initial={false}>
          <TabBar key={framework}>
            {Object.keys(tabs[framework]).map((tab, tabIndex) => (
              <li key={tab} className="flex-none">
                <button
                  type="button"
                  className={`border border-transparent py-2 px-4 font-medium focus:outline-none hover:text-orange-100 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-orange-300 ${
                    tabIndex === activeTab ? 'text-orange-200' : ''
                  }`}
                  onClick={() => setActiveTab(tabIndex)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </TabBar>
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={framework + activeTab}
          className="w-full flex-auto flex min-h-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CodeWindow.Code2 lines={lines.length}>
            {lines.map((tokens, lineIndex) => (
              <Fragment key={framework + activeTab + lineIndex}>
                {tokens.map((token, tokenIndex) => {
                  if (
                    (token.types[token.types.length - 1] === 'class-name' ||
                      (token.types[token.types.length - 1] === 'tag' &&
                        /^([A-Z]|x-)/.test(token.content))) &&
                    tokens[tokenIndex - 1]?.types[tokens[tokenIndex - 1].types.length - 1] ===
                      'punctuation' &&
                    (tokens[tokenIndex - 1]?.content === '<' ||
                      tokens[tokenIndex - 1].content === '</')
                  ) {
                    return (
                      <span key={tokenIndex} className={getClassNameForToken(token)}>
                        <ComponentLink
                          onClick={() =>
                            setActiveTab(
                              Object.keys(tabs[framework]).findIndex((x) =>
                                x.startsWith(`${token.content.replace(/^x-/, '')}.`)
                              )
                            )
                          }
                        >
                          {token.content}
                        </ComponentLink>
                      </span>
                    )
                  }

                  if (
                    token.types[token.types.length - 1] === 'string' &&
                    /^(['"`])\.\/.*?\.(js|vue)\1$/.test(token.content)
                  ) {
                    const tab = token.content.substr(3, token.content.length - 4)
                    return (
                      <span key={tokenIndex} className={getClassNameForToken(token)}>
                        {token.content.substr(0, 1)}
                        <button
                          type="button"
                          className="underline"
                          onClick={() => setActiveTab(Object.keys(tabs[framework]).indexOf(tab))}
                        >
                          ./{tab}
                        </button>
                        {token.content.substr(0, 1)}
                      </span>
                    )
                  }

                  return (
                    <span key={tokenIndex} className={getClassNameForToken(token)}>
                      {token.content}
                    </span>
                  )
                })}
                {'\n'}
              </Fragment>
            ))}
          </CodeWindow.Code2>
        </motion.div>
      </AnimatePresence>
    </CodeWindow>
  )
}

const css = tokenizeWithLines.css(`.btn {
  @apply text-base font-medium rounded-lg p-3;
}

.btn--primary {
  @apply bg-rose-500 text-white;
}

.btn--secondary {
  @apply bg-gray-100 text-black;
}
`).lines

const html = tokenizeWithLines.html(`      </dd>
    </div>
  </dl>
  <footer class="grid grid-cols-2 gap-x-6">
    <button class="btn btn--secondary">拒絕</button>
    <button class="btn btn--primary">接受</button>
  </footer>
</article>
`).lines

function ApplyExample({ inView }) {
  return (
    <CodeWindow className={`${styles.atApplyCodeWindow} bg-pink-600`}>
      <div className="relative flex text-sm bg-pink-1000 text-pink-200">
        <h3 className="border border-transparent py-2 px-4 font-medium bg-white bg-opacity-10">
          styles.css
        </h3>
      </div>
      <div className="flex-none">
        <CodeWindow.Code2 lines={css.length}>
          {css.map((tokens, lineIndex) => (
            <Fragment key={lineIndex}>
              {tokens.map((token, tokenIndex) => {
                let className = getClassNameForToken(token)
                if (className) {
                  className = className
                    .replace(/\bclass\b/, 'selector')
                    .replace(/\b(number|color)\b/, '')
                }
                return (
                  <span key={tokenIndex} className={className}>
                    {token.content}
                  </span>
                )
              })}
              {'\n'}
            </Fragment>
          ))}
        </CodeWindow.Code2>
      </div>
      <div className="relative flex text-sm bg-pink-1000 text-pink-200">
        <h3 className="border border-transparent py-2 px-4 font-medium bg-white bg-opacity-10">
          index.html
        </h3>
      </div>
      <div className="overflow-hidden">
        <CodeWindow.Code2 lines={html.length} initialLineNumber={31} overflow="x" className="-mt-6">
          <div className={clsx('mono', { 'mono-active': inView })}>
            {html.map((tokens, lineIndex) => (
              <div
                key={lineIndex}
                className={lineIndex >= 4 && lineIndex <= 5 ? 'not-mono' : undefined}
              >
                {tokens.map((token, tokenIndex) => {
                  return (
                    <span
                      key={tokenIndex}
                      className={clsx(getClassNameForToken(token), 'delay-500')}
                      style={{ transitionDuration: '1.5s' }}
                    >
                      {token.content}
                    </span>
                  )
                })}
              </div>
            ))}
          </div>
        </CodeWindow.Code2>
      </div>
    </CodeWindow>
  )
}

function AtApplySection() {
  const { inView, ref } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <GradientLockup
      color="orange"
      rotate={1}
      left={
        <div
          ref={ref}
          className="relative z-10 bg-white rounded-tr-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 xl:mr-4"
        >
          <article className="text-gray-600 leading-6">
            <h2
              className={clsx(
                'transition-opacity duration-1500 delay-500 text-xl sm:text-2xl font-semibold text-black px-4 py-6 sm:px-6 pb-1',
                { 'opacity-25': inView }
              )}
            >
              每周1對1教學
            </h2>
            <dl
              className={clsx(
                'transition-opacity duration-1500 delay-500 flex flex-wrap divide-y divide-gray-200 border-b border-gray-200',
                { 'opacity-25': inView }
              )}
            >
              <div className="px-4 sm:px-6 pb-6">
                <dt className="sr-only">日期與時間</dt>
                <dd className="text-sm sm:text-base">
                  <time dateTime="2020-11-15T10:00:00-05:00">2020/11/15 (二) 上午 10:00</time> -{' '}
                  <time dateTime="2020-11-15T11:00:00-05:00">
                    11:00 <span className="hidden sr-only sm:not-sr-only"> UTC+8</span>
                  </time>
                </dd>
              </div>
              <div className="w-full flex-none flex items-baseline px-4 sm:px-6 py-4">
                <dt className="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
                  地點
                </dt>
                <dd className="text-black text-sm sm:text-base">
                  Kitchener, <abbr title="Ontario">ON</abbr>
                </dd>
              </div>
              <div className="w-full flex-none flex items-baseline px-4 sm:px-6 py-4">
                <dt className="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
                  描述
                </dt>
                <dd className="italic text-sm sm:text-base">無任何描述</dd>
              </div>
              <div className="w-full flex-none flex items-center px-4 sm:px-6 py-4">
                <dt className="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
                  參與者
                </dt>
                <dd className="text-sm sm:text-base font-medium text-gray-700 bg-gray-100 rounded-full py-1 pl-2 pr-4 flex items-center">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="hidden sm:block text-gray-500 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  Andrew Parsons
                </dd>
              </div>
            </dl>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 px-4 sm:px-6 py-4">
              <div className="text-base font-medium rounded-lg bg-gray-100 text-black py-3 text-center cursor-pointer">
                拒絕
              </div>
              <div className="text-base font-medium rounded-lg bg-rose-500 text-white py-3 text-center cursor-pointer">
                接受
              </div>
            </div>
          </article>
        </div>
      }
      right={<ApplyExample inView={inView} />}
    />
  )
}

export function ComponentDriven() {
  const [framework, setFramework] = useState('react')

  return (
    <section id="component-driven">
      <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <IconContainer className={`${gradients.amber[0]} mb-8`}>
          <Icon />
        </IconContainer>
        <Caption as="h2" className="text-amber-500 mb-3">
          元件驅動
        </Caption>
        <BigText className="mb-8">
          <Widont>擔心複用性的問題？ 免了啦</Widont>
        </BigText>
        <Paragraph className="mb-6">
          如果你想要一直、一直、一直地重複使用你的功能或設計，那你需要的是
		  把它們做成元件或樣板，這樣你只要改變一次，就能應用在所有地方。
        </Paragraph>
        <Link href="/docs/extracting-components" className="text-amber-500 hover:text-amber-700">
          閱讀更多 -&gt;
        </Link>
      </div>
      <GradientLockup
        color="amber"
        rotate={-2}
        pin="right"
        header={
          <div className="flex overflow-auto py-0.5 pl-0.5 -my-0.5 -mx-4 sm:-mx-6 md:-mx-8 xl:-ml-4 xl:mr-0">
            <Tabs
              tabs={{
                react: (
                  <div className="flex flex-col items-center py-1">
                    <ReactLogo className="mb-2" />
                    React
                  </div>
                ),
                vue: (
                  <div className="flex flex-col items-center py-1">
                    <VueLogo className="mb-2" />
                    Vue
                  </div>
                ),
                blade: (
                  <div className="flex flex-col items-center py-1">
                    <LaravelLogo className="mb-2" />
                    Blade
                  </div>
                ),
              }}
              grid={true}
              spacing="loose"
              selected={framework}
              onChange={setFramework}
              className="mx-auto xl:mx-0 px-4 sm:px-6 md:px-8 xl:px-0"
            />
          </div>
        }
        left={
          <div className="relative z-10 bg-white rounded-tl-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 divide-y divide-gray-100">
            <nav className="p-4 text-sm font-medium">
              <ul className="flex space-x-2">
                <li>
                  <div className="px-4 py-2 rounded-md bg-amber-100 text-amber-700 cursor-pointer">
                    特色
                  </div>
                </li>
                <li>
                  <div className="px-4 py-2 cursor-pointer">超人氣</div>
                </li>
                <li>
                  <div className="px-4 py-2 cursor-pointer">最近</div>
                </li>
              </ul>
            </nav>
            {recipes.map(({ title, rating, time, difficulty, servings, author, image }, i) => (
              <article key={i} className={`${i === 0 ? 'flex' : 'hidden sm:flex'} p-4 space-x-4`}>
                <img
                  src={image}
                  loading="lazy"
                  alt=""
                  width="144"
                  height="144"
                  className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
                />
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                  <h2 className="text-base sm:text-lg lg:text-base xl:text-lg font-semibold text-black mb-0.5 truncate">
                    {title}
                  </h2>
                  <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                    <div className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                      <dt className="text-amber-500">
                        <span className="sr-only">評價</span>
                        <svg width="16" height="20" fill="currentColor">
                          <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                        </svg>
                      </dt>
                      <dd>{rating}</dd>
                    </div>
                    <div>
                      <dt className="sr-only">時間</dt>
                      <dd>
                        <abbr title={`${time} minutes`}>{time}分鐘</abbr>
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">難度</dt>
                      <dd> · {difficulty}</dd>
                    </div>
                    <div>
                      <dt className="sr-only">份量</dt>
                      <dd> · {servings} 人份</dd>
                    </div>
                    <div className="flex-none w-full mt-0.5 font-normal">
                      <dt className="inline">By</dt> <dd className="inline text-black">{author}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        }
        right={<ComponentExample framework={framework} />}
      />
      <div className="px-4 sm:px-6 md:px-8 mt-16 sm:mt-24 md:mt-32 mb-10 sm:mb-16 md:mb-20 lg:mb-8">
        <Paragraph className="mb-6">
		  想要保持老派格調，不想加入元件框架的世界中嗎？那用 Tailwind 的 @apply 指令把你重複的
		  功能樣式集中到自訂的 CSS class 裡吧。
        </Paragraph>
        <Link href="/docs/extracting-components" className="text-orange-500 hover:text-orange-700">
          了解更多 -&gt;
        </Link>
      </div>
      <AtApplySection />
    </section>
  )
}
