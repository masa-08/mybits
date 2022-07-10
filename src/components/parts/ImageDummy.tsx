import React from 'react'

type Props = {
  color: 'green' | 'yellow'
}

const colors = {
  green: 'bg-green-400',
  yellow: 'bg-yellow-300',
}

export const ImageDummy: React.FC<Props> = ({ color }) => {
  return (
    <figure>
      <img
        src="https://storage.googleapis.com/mybits-test/baby-silhouette.webp"
        alt="image"
        className={`rounded-xl p-3 ${colors[color]}`}
      />
    </figure>
  )
}
