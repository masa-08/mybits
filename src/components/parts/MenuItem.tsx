import React from 'react'
import { HashLink } from 'react-router-hash-link'

type Props = {
  title: string
  to: string
  onClick?: () => void
}

export const MenuItem: React.FC<Props> = ({ title, to, onClick }) => {
  return (
    <li>
      <HashLink smooth to={to} onClick={onClick}>
        <span className="text-3xl dark:text-white">{title}</span>
      </HashLink>
    </li>
  )
}
