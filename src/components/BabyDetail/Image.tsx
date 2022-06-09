import React from 'react'

type Props = {
  src: string
}

export const Image: React.FC<Props> = ({ src }) => {
  return (
    <>
      <figure>
        <img src={src} alt="image" className="rounded-xl" />
      </figure>
    </>
  )
}
