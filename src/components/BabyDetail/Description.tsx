import React from 'react'

type Props = {
  id: string | undefined
}

export const Description: React.FC<Props> = ({ id = 'unasigned' }) => {
  return (
    <>
      <div>
        <p className="text-6xl leading-none">#{id}</p>
        <p className="text-6xl text-gray-400">Unknown</p>
      </div>
      <div>
        <p className="text-2xl mt-3">Status: Waiting 4 u 2 adopt me!</p>
        <p className="text-2xl">Owner : Will u b my owner?</p>
      </div>
    </>
  )
}
