import React from 'react'
import { Menu } from './Menu'
import { MenuMobile } from './MenuMobile'
import { Logo } from '../parts'

type Props = {
  mobileTop?: boolean
}

export const Header: React.FC<Props> = ({ mobileTop = false }) => {
  return (
    <>
      <div className="navbar justify-between items-center px-6 py-3 max-w-5xl mx-auto hidden md:flex">
        <Logo />
        <Menu />
      </div>
      <div className="navbar justify-between items-start px-6 py-4 flex md:hidden">
        <Logo mobileTop={mobileTop} />
        <MenuMobile top={mobileTop} />
      </div>
    </>
  )
}
