import { Link } from 'react-router-dom'
import { OpenseaIcon, TwitterIcon } from './Icons'
import { Menu } from './Menu'

export const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="navbar flex justify-between items-center px-3 max-w-5xl mx-auto">
          <div className="flex flex-col items-start">
            <Link to="/">
              <p className="text-5xl leading-none">NEOBABY</p>
            </Link>
          </div>
          <div>
            <div className="hidden md:block">
              <Menu />
            </div>
            <div className="md:border-l-2 md:border-gray-400 pl-3">
              <figure className="w-7 h-7">
                <a href="#">
                  <OpenseaIcon color="#2F2F2F" />
                </a>
              </figure>
            </div>
            <div className="pl-3 align-middle">
              <figure className="w-7 h-7 align-middle">
                <a href="#">
                  <TwitterIcon color="#2F2F2F" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
