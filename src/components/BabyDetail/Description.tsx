import React from 'react'

type Props = {
  id: string | undefined
}

export const Description: React.FC<Props> = ({ id = 'unasigned' }) => {
  return (
    <>
      <p className="text-3xl leading-none">#{id}</p>
      <p className="text-4xl text-gray-400">Unknown</p>
      <p className="text-xl mt-3">Status: Waiting 4 u 2 adopt me!</p>
      <p className="text-xl">Owner : Will u b my owner?</p>
    </>
  )
}
