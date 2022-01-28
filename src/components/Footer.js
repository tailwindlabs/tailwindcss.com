import Link from 'next/link'
import { InputFooter } from '@/components/InputFooter'

export function Footer({ previous, next }) {
  return (
    <footer className="text-sm leading-6 my-[1.875rem] md:my-[3.75rem] text-dark-blue not-prose">
      {(previous || next) && (
        <div className="grid grid-cols-2 content-center w-full border-t border-b border-neutral-200 pt-2 md:pt-[1.4375rem] pb-2 md:pb-[1.8125rem] text-sm md:text-base font-semibold">
          {previous ? (
            <Link href={previous.link}>
              <a className="group flex items-center justify-start md:justify-end pr-[2.1875rem] border-r border-neutral-200">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxOCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNjQyMSAwLjI0MzYwN0M2LjMxNDgxIC0wLjA4MTE5OTkgNS43ODM5NCAtMC4wODExOTk5IDUuNDU2NjUgMC4yNDM1ODlMMC4yNDU2MTcgNS40MTIxMkMwLjA4MTg3MDggNS41NzQyOSAtMi41Mjk3NGUtMDcgNS43ODczOCAtMi42MjI2OWUtMDcgNkMtMi43MTU2NGUtMDcgNi4yMTI2NSAwLjA4MTg3MDggNi40MjU3IDAuMjQ1NjE3IDYuNTg4MDlMNS40NTY2NSAxMS43NTY2QzUuNzgzMDUgMTIuMDgwMSA2LjMxMTk0IDEyLjA4MTQgNi42Mzk2NCAxMS43NTg4QzYuOTY3NzQgMTEuNDM2MiA2Ljk3MDgxIDEwLjkxNzMgNi42NDcwNyAxMC41OTEyTDIuOTI0NjggNi44NDI1NEwxNy4xNjE3IDYuODQyNTVDMTcuNjI0OCA2Ljg0MjU1IDE4IDYuNDU5OTkgMTggNi4wMDA5NEMxOCA1LjU0MTcgMTcuNjI0OCA1LjE1OTMyIDE3LjE2MTcgNS4xNTkzMkwyLjg2MjI2IDUuMTU5MzFMNi42NDIxIDEuNDE0NzVDNi45Njk1MiAxLjA4OTk3IDYuOTY5NTIgMC41NjgzODYgNi42NDIxIDAuMjQzNjA3WiIgZmlsbD0iIzk0QTNCOCIvPgo8L3N2Zz4K"
                  className="mr-3"
                  alt="arrow"
                />
                {previous.shortTitle || previous.title}
              </a>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={next.link}>
              <a className="group flex items-center justify-end md:justify-start pl-[2.1875rem] border-l border-neutral-200">
                {next.shortTitle || next.title}

                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxOCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjM1NzkgMTEuNzU2NEMxMS42ODUyIDEyLjA4MTIgMTIuMjE2MSAxMi4wODEyIDEyLjU0MzMgMTEuNzU2NEwxNy43NTQ0IDYuNTg3ODhDMTcuOTE4MSA2LjQyNTcxIDE4IDYuMjEyNjIgMTggNkMxOCA1Ljc4NzM1IDE3LjkxODEgNS41NzQzIDE3Ljc1NDQgNS40MTE5MUwxMi41NDMzIDAuMjQzMzcxQzEyLjIxNjkgLTAuMDgwMTEwNCAxMS42ODgxIC0wLjA4MTQwODQgMTEuMzYwNCAwLjI0MTIwMkMxMS4wMzIzIDAuNTYzODMxIDExLjAyOTIgMS4wODI3NCAxMS4zNTI5IDEuNDA4ODFMMTUuMDc1MyA1LjE1NzQ2TDAuODM4MzA0IDUuMTU3NDVDMC4zNzUyNDggNS4xNTc0NSA3LjcwMzQ2ZS0wOCA1LjU0MDAxIDcuMTU2MDVlLTA4IDUuOTk5MDZDNi42MDg0ZS0wOCA2LjQ1ODMxIDAuMzc1MjQ4IDYuODQwNjggMC44MzgzMDQgNi44NDA2OEwxNS4xMzc3IDYuODQwNjlMMTEuMzU3OSAxMC41ODUzQzExLjAzMDUgMTAuOTEgMTEuMDMwNSAxMS40MzE2IDExLjM1NzkgMTEuNzU2NFoiIGZpbGw9IiM5NEEzQjgiLz4KPC9zdmc+Cg=="
                  className="ml-3"
                  alt="arrow"
                />
              </a>
            </Link>
          ) : (
            <div />
          )}
        </div>
      )}
      <div className="pt-[1.875rem] grid md:grid-cols-2 gap-y-[1.875rem] md:gap-y-0 md:gap-x-10">
        <div className="grid gap-y-1.5 text-[0.875rem] md:text-[1rem] leading-7">
          <div className="flex">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDYgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEwLjM3NEw1LjM2ODcxIDUuNTc3NzhMMS4wMzI4MSAwLjYyNTc1NCIgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
              className="mr-2.5 h-7 w-1.5"
              alt="arrow"
            />
            <p>
              Questions? &nbsp;
              <a href="#" className="font-source-sans-pro text-orange underline hover:decoration-2">
                Find us on slack.
              </a>
            </p>
          </div>
          <div className="flex">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDYgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEwLjM3NEw1LjM2ODcxIDUuNTc3NzhMMS4wMzI4MSAwLjYyNTc1NCIgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
              className="mr-2.5 h-7 w-1.5"
              alt="arrow"
            />
            <p>
              Found a bug on the page, &nbsp;
              <a href="#" className="font-source-sans-pro text-orange underline hover:decoration-2">
                submit an issue or a PR.
              </a>
            </p>
          </div>
          <div className="flex">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDYgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEwLjM3NEw1LjM2ODcxIDUuNTc3NzhMMS4wMzI4MSAwLjYyNTc1NCIgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
              className="mr-2.5 h-7 w-1.5"
              alt="arrow"
            />
            <p>
              Check out our &nbsp;
              <a href="#" className="font-source-sans-pro text-orange underline hover:decoration-2">
                roadmap.
              </a>
            </p>
          </div>
        </div>
        <div>
          <p className="text-[0.875rem] md:text-[1rem] leading-7 font-bold">
            Join our developer newsletter
          </p>
          <InputFooter className="mt-2.5 mb-[0.3125rem]" />
          <p className="text-[0.75rem] leading-[0.875rem]">You can unsubscribe at any time.</p>
        </div>
      </div>
    </footer>
  )
}
