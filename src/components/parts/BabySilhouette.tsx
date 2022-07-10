import React from 'react'

type Props = {
  color?: 'green' | 'yellow'
  size?: 'sm' | 'md'
  padding?: 'sm' | 'md'
}

const colors = {
  green: 'bg-green-400',
  yellow: 'bg-yellow-300',
}

const sizes = {
  sm: 'w-36',
  md: 'w-60',
}

const paddings = {
  sm: 'p-3',
  md: 'p-5',
}

export const BabySilhouette: React.FC<Props> = ({ color, size, padding }) => {
  return (
    <figure>
      <img
        src="https://storage.googleapis.com/mybits-test/baby-silhouette.webp"
        alt="image"
        className={`rounded-xl ${color && colors[color]} ${size && sizes[size]} ${
          padding && paddings[padding]
        }`}
      />
    </figure>
  )
}
