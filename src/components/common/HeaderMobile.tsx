import React from 'react'
import { HeaderMobileLogo } from './HeaderMobileLogo'
import { MenuMobile } from './MenuMobile'

type Props = {
  top?: boolean
}

export const HeaderMobile: React.FC<Props> = ({ top = false }) => {
  return (
    <>
      <div className="navbar flex justify-between items-start px-6 pt-4 md:hidden">
        <HeaderMobileLogo top={top} />
        <MenuMobile top={top} />
      </div>
    </>
  )
}
