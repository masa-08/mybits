import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  mobileTop?: boolean
}

export const Logo: React.FC<Props> = ({ mobileTop = false }) => {
  return (
    <Link to="/">
      <p
        className={`text-4xl md:text-5xl dark:text-white leading-none ${
          mobileTop ? 'text-white' : 'text-black'
        }`}
      >
        NEOBABY
      </p>
    </Link>
  )
}
