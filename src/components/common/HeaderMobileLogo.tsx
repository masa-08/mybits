import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  top?: boolean
}

export const HeaderMobileLogo: React.FC<Props> = ({ top = false }) => {
  return (
    <>
      <div className="flex flex-col items-start">
        <Link to="/">
          <p className={top ? 'title-mobile-top' : 'title-mobile'}>NEOBABY</p>
        </Link>
      </div>
    </>
  )
}
