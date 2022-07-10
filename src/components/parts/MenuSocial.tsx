import React from 'react'
import { SocialLink } from './SocialLink'

type Props = {
  type: 'twitter' | 'opensea'
  size: 'md' | 'sm'
}

export const MenuSocial: React.FC<Props> = ({ type, size }) => {
  return (
    <li>
      <SocialLink type={type} size={size} />
    </li>
  )
}
