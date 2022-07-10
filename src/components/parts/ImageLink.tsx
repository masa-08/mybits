import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  imageSrc: string
}

export const ImageLink: React.FC<Props> = ({ to, imageSrc }) => {
  return (
    <figure>
      <Link to={to}>
        <img src={imageSrc} alt="image" className="rounded-xl" />
      </Link>
    </figure>
  )
}
