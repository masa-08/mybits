import { OpenseaIcon, TwitterIcon } from './Icons'
import { Menu } from './Menu'
import { Logo } from '../parts'

export const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="navbar flex justify-between items-center px-3 max-w-5xl mx-auto">
          <Logo />
          <div>
            <div className="hidden md:block">
              <Menu />
            </div>
            <div className="pl-3 flex gap-3 justify-center">
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
        </div>
      </div>
    </>
  )
}
