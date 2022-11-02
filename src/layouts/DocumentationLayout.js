import { SidebarLayout } from '@/layouts/SidebarLayout'
import Head from 'next/head'
import socialSquare from '@/img/social-square.jpg'
import { Title } from '@/components/Meta'
import { documentationNav } from '@/navs/documentation'

export function DocumentationLayout(props) {
  return (
    <>
      <Title>{props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}</Title>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://tailwindcss.com${socialSquare.src}`}
        />
      </Head>
      <SidebarLayout nav={documentationNav} {...props} />
    </>
  )
}

DocumentationLayout.nav = documentationNav
