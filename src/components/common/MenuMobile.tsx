import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Menu, X } from 'react-feather'
import { HeaderMobileLogo } from './HeaderMobileLogo'
import { OpenseaIconBlue, TwitterIconBlue } from './Icons'

type Props = {
  top?: boolean
}

export const MenuMobile: React.FC<Props> = ({ top = false }) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <Menu
        className={`${top && 'text-white'} dark:text-white`}
        size={36}
        onClick={() => setModal(true)}
      />
      <div className={`h-screen w-screen rounded-none p-0 z-50 fixed ${modal || 'hidden'}`}>
        <div className="bg-base-100 h-full w-full -ml-6 -mt-8">
          <div className="navbar flex justify-between items-start px-6 pt-4">
            <HeaderMobileLogo />
            <X className="dark:text-white" size={36} onClick={() => setModal(false)} />
          </div>
          <ul className="menu px-2 mt-2">
            <li>
              <HashLink smooth to="/#about" onClick={() => setModal(false)}>
                <span className="text-3xl dark:text-white">About</span>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#gallery" onClick={() => setModal(false)}>
                <span className="text-3xl dark:text-white">Gallery</span>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#roadmap" onClick={() => setModal(false)}>
                <span className="text-3xl dark:text-white">Roadmap</span>
              </HashLink>
            </li>
            <div className="border-t-gray-300 border w-full my-4" />
            <li>
              <a
                href="https://opensea.io/collection/neobaby"
                className="flex items-center gap-2"
                style={{ color: '#2081E2' }}
              >
                <figure className="w-7 h-7">
                  <OpenseaIconBlue />
                </figure>
                <span className="text-3xl">OpenSea</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/harufy009"
                className="flex items-center gap-2"
                style={{ color: '#1b9df0' }}
              >
                <figure className="w-7 h-7">
                  <TwitterIconBlue />
                </figure>
                <span className="text-3xl">Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
