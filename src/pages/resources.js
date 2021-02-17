import { Community } from '@/components/Community'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import Link from 'next/link'
import { ReactComponent as RefactoringUi } from '@/img/resources/refactoring-ui.svg'
import { ReactComponent as TailwindUi } from '@/img/resources/tailwind-ui.svg'
import { ReactComponent as HeadlessUi } from '@/img/resources/headless-ui.svg'
import { ReactComponent as Heroicons } from '@/img/resources/heroicons.svg'
import { ReactComponent as Heropatterns } from '@/img/resources/heropatterns.svg'

function Logo({ title, component: Component }) {
  return (
    <div className="w-60 max-w-full">
      <div className="relative" style={{ paddingTop: `${(60 / 240) * 100}%` }}>
        <span className="sr-only">{title}</span>
        <Component className="absolute inset-0 w-full h-full" />
      </div>
    </div>
  )
}

export default function Resources() {
  return (
    <div className="px-4 sm:px-6 md:px-8 pt-10 pb-16">
      <h1 className="text-3xl text-gray-900 font-extrabold mb-4">资源</h1>
      <div className="max-w-3xl">
        <div className="text-lg mb-5 space-y-5">
          <p>
            我们认为Tailwind是一个令人惊叹的CSS框架，但你需要的不仅仅是一个CSS框架，来制作视觉上令人惊叹的工作。
          </p>
          <p>
            这里有一些资源可以帮助你把你的Tailwind项目提升到更高一个层次。
          </p>
        </div>
        <p>
          有关Tailwind CSS品牌资产和使用指南，请访问我们的
          <Link href="/brand">
            <a className="text-cyan-700 font-medium shadow-link">品牌页面</a>
          </Link>
          .
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-6 xl:gap-8 my-8 sm:my-12">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">学习UI设计</h2>
          <a
            href="https://refactoringui.com/book"
            className="h-40 sm:h-56 xl:h-64 bg-gray-900 bg-cover rounded-3xl mb-6 flex items-center justify-center"
            style={{
              backgroundImage: `url(${require('@/img/resources/refactoring-ui-bg.png').default})`,
            }}
          >
            <Logo title="Refactoring UI" component={RefactoringUi} />
          </a>
          <div className="space-y-5">
            <p>
              Refactoring UI是Adam Wathan和Steve Schoger为开发人员制作的书籍和视频系列。它涵盖了一切我们所知道的关于如何让东西看起来很棒的内容。
            </p>
            <p>
              到目前为止，已经有近一万人选择了它，并做了各种很棒的事情，来说说它是如何帮助他们改进工作的。
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">Official Tailwind CSS Components</h2>
          <a
            href="https://tailwindui.com/"
            className="h-40 sm:h-56 xl:h-64 bg-gray-300 rounded-3xl mb-6 overflow-hidden flex"
          >
            <div className="relative flex-none flex items-center justify-center px-6 xl:px-10">
              <div className="bg-gray-900 absolute inset-0 -left-64 transform -skew-x-20" />
              <Logo title="Tailwind UI" component={TailwindUi} />
            </div>
            <div
              className="flex-auto bg-cover -ml-12"
              style={{
                backgroundImage: `url(${require('@/img/resources/tailwind-ui.jpg').default})`,
              }}
            />
          </a>
          <div className="space-y-5">
            <p>
              Tailwind UI是一个专业设计、预构建、完全响应式的、HTML片段的集合，你可以把它很方便的引入你的Tailwind项目。
            </p>
            <p>
              目前有超过350个组件，分别有两个不同的类型(市场营销和应用UI)，我们一直在添加更多内容。
            </p>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 xl:gap-8 pb-10 border-b border-gray-200">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            JavaScript<span className="sr-only">: Headless UI</span>
          </h2>
          <a
            href="https://headlessui.dev/"
            className="h-40 xl:h-48 rounded-3xl bg-gray-900 mb-6 flex items-center justify-center p-6"
          >
            <Logo title="Headless UI" component={HeadlessUi} />
          </a>
          <p>
            完全无样式，完全可访问的UI组件，设计与TailwindCSS漂亮地集成。
          </p>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Icons<span className="sr-only">: Heroicons</span>
          </h2>
          <a
            href="https://heroicons.com/"
            className="relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-500 mb-6"
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-6 bg-contain"
              style={{
                backgroundImage: `url(${require('@/img/resources/heroicons-bg.svg').default})`,
              }}
            >
              <Logo title="Heroicons" component={Heroicons} />
            </div>
          </a>
          <p>
          一组免费的MIT-licensed的高质量SVG图标，供你在web项目中使用。
          </p>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Patterns<span className="sr-only">: Heropatterns</span>
          </h2>
          <a
            href="https://www.heropatterns.com/"
            className="relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-cyan-600 to-teal-500 mb-6"
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-6 bg-cover"
              style={{
                backgroundImage: `url(${require('@/img/resources/heropatterns-bg.svg').default})`,
              }}
            >
              <Logo title="Heropatterns" component={Heropatterns} />
            </div>
          </a>
          <p>
            一组免费的MIT-licensed的高质量SVG纹理，供你在web项目中使用。
          </p>
        </section>
      </div>
      <section>
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8">
          Get involved
        </h2>
        <Community />
      </section>
    </div>
  )
}

Resources.layoutProps = {
  meta: {
    title: '资源',
  },
  Layout: DocumentationLayout,
}
