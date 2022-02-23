import PostItem from '@/components/PostItem'
import { Widont } from '@/components/Widont'
import { getAllPostPreviews } from '@/utils/getAllPosts'

import post_00 from './automatic-class-sorting-with-prettier/index.mdx?preview'
import post_01 from './tailwindcss-typography-v0-5/index.mdx?preview'
import post_02 from './standalone-cli/index.mdx?preview'
import post_03 from './tailwindcss-v3/index.mdx?preview'
import post_04 from './tailwind-ui-ecommerce/index.mdx?preview'
import post_05 from './headless-ui-v1-4/index.mdx?preview'
import post_06 from './tailwindcss-2-2/index.mdx?preview'
import post_07 from './tailwind-ui-now-with-react-and-vue-support/index.mdx?preview'
import post_08 from './headless-ui-v1/index.mdx?preview'
import post_09 from './tailwindcss-2-1/index.mdx?preview'
import post_10 from './heroicons-v1/index.mdx?preview'
import post_11 from './just-in-time-the-next-generation-of-tailwind-css/index.mdx?preview'
import post_12 from './welcoming-james-mcdonald-to-tailwind-labs/index.mdx?preview'
import post_13 from './tailwindcss-from-zero-to-production/index.mdx?preview'
import post_14 from './welcoming-david-luhr-to-tailwind-labs/index.mdx?preview'
import post_15 from './multi-line-truncation-with-tailwindcss-line-clamp/index.mdx?preview'
import post_16 from './tailwindcss-v2/index.mdx?preview'
import post_17 from './tailwindcss-1-9/index.mdx?preview'
import post_18 from './introducing-tailwind-play/index.mdx?preview'
import post_19 from './headless-ui-unstyled-accessible-ui-components/index.mdx?preview'
import post_20 from './whats-new-in-tailwindcss-on-youtube/index.mdx?preview'
import post_21 from './tailwindcss-1-8/index.mdx?preview'
import post_22 from './utility-friendly-transitions-with-tailwindui-react/index.mdx?preview'
import post_23 from './introducing-heroicons/index.mdx?preview'
import post_24 from './tailwindcss-1-7/index.mdx?preview'
import post_25 from './from-900-to-1-how-we-hired-robin-malfait/index.mdx?preview'
import post_26 from './tailwindcss-1-6/index.mdx?preview'
import post_27 from './simon-vrachliotis-joins-tailwind-labs/index.mdx?preview'
import post_28 from './welcoming-brad-cornes-to-the-tailwind-team/index.mdx?preview'
import post_29 from './tailwindcss-1-5/index.mdx?preview'
import post_30 from './tailwindcss-typography/index.mdx?preview'
import post_31 from './building-the-tailwind-blog/index.mdx?preview'
import post_32 from './introducing-linting-for-tailwindcss-intellisense/index.mdx?preview'

const lookup = [
  post_00,
  post_01,
  post_02,
  post_03,
  post_04,
  post_05,
  post_06,
  post_07,
  post_08,
  post_09,
  post_10,
  post_11,
  post_12,
  post_13,
  post_14,
  post_15,
  post_16,
  post_17,
  post_18,
  post_19,
  post_20,
  post_21,
  post_22,
  post_23,
  post_24,
  post_25,
  post_26,
  post_27,
  post_28,
  post_29,
  post_30,
  post_31,
  post_32,
]

export async function getStaticProps() {
  let posts = await getAllPostPreviews()

  return {
    props: {
      posts: posts.map(({ module: { meta }, slug }) => ({ slug, meta })),
    },
  }
}

export default function Blog({ posts }) {
  return (
    <main className="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <header className="pt-16 pb-9 sm:pb-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
          Blog
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          <Widont>All the latest Tailwind CSS news, straight from the team.</Widont>
        </p>
      </header>
      <div className="space-y-16">
        {posts.map(({ slug, meta }, index) => {
          let Component = lookup[index]

          return (
            <PostItem
              key={index}
              title={meta.title}
              category={meta.category}
              date={meta.date}
              slug={slug}
              wide
            >
              <Component />
            </PostItem>
          )
        })}
      </div>
    </main>
  )
}

Blog.layoutProps = {
  meta: {
    title: 'Blog',
  },
}
