import { HashLink } from 'react-router-hash-link'

export const Menu = () => {
  return (
    <>
      <ul className="menu menu-horizontal">
        <li>
          <HashLink smooth to="/#about">
            <span className="text-3xl dark:text-white">About</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#gallery">
            <span className="text-3xl dark:text-white">Gallery</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#roadmap">
            <span className="text-3xl dark:text-white">Roadmap</span>
          </HashLink>
        </li>
      </ul>
    </>
  )
}
