import { useContext } from 'react'
import { SidebarContext } from '@/layouts/SidebarLayout'
import { useRouter } from 'next/router'

function flatPages(links, pages = []) {
  for (const link of links) {
    if (link.type ==="page"){
      pages.push(link);
    } else if (link.type ==="collapsable" || link.type ==="section") {
      flatPages(link.links, pages);
    }
  }
  return pages;
}

export function usePrevNext() {
  let router = useRouter()
  let { nav } = useContext(SidebarContext)
  let pages = flatPages(nav);
  let pageIndex = pages.findIndex((page) => page.link === router.pathname)
  return {
    prev: pageIndex > -1 ? pages[pageIndex - 1] : undefined,
    next: pageIndex > -1 ? pages[pageIndex + 1] : undefined,
  }
}
