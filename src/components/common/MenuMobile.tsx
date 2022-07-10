import React, { useState } from 'react'
import { Menu as MenuIcon, X } from 'react-feather'
import { Logo, MenuItem, MenuSocial } from '../parts'

// TODO: 不要なProps
type Props = {
  top?: boolean
}

export const MenuMobile: React.FC<Props> = ({ top = false }) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <MenuIcon
        className={`${top && 'text-white'} dark:text-white`}
        size={36}
        onClick={() => setModal(true)}
      />
      <div className={`h-screen w-screen rounded-none p-0 z-50 fixed ${modal || 'hidden'}`}>
        <div className="bg-gray-blue dark:bg-dark-bg h-full w-full -ml-6 -mt-8">
          <div className="navbar flex justify-between items-start px-6 pt-4">
            <Logo />
            <X className="dark:text-white" size={36} onClick={() => setModal(false)} />
          </div>
          <ul className="menu px-2 mt-2">
            <MenuItem title="About" to="/#about" onClick={() => setModal(false)} />
            <MenuItem title="Gallery" to="/#gallery" onClick={() => setModal(false)} />
            <MenuItem title="Roadmap" to="/#roadmap" onClick={() => setModal(false)} />
            <div className="border-t-gray-300 dark:border-t-dark-content border-t w-full my-4" />
            <MenuSocial type="opensea" size="md" />
            <MenuSocial type="twitter" size="md" />
          </ul>
        </div>
      </div>
    </>
  )
}
