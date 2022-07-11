import { OpenseaIcon, TwitterIcon } from '../parts'
import { MenuLinksCore } from './MenuLinksCore'

export const Menu = () => {
  return (
    <div className="flex gap-3">
      <ul className="menu menu-horizontal">
        <MenuLinksCore />
      </ul>
      <div className="flex gap-3 justify-center">
        <div className="w-8 rounded-full border-gray-500 border bg-gray-500 dark:bg-base-100">
          <a href="https://opensea.io/collection/neobaby">
            <OpenseaIcon />
          </a>
        </div>
        <div className="w-8 rounded-full border-gray-500 border bg-gray-500 dark:bg-base-100">
          <a href="https://twitter.com/harufy009">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
