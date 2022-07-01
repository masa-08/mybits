import React from 'react'

type Props = {
  id: string | undefined
}

export const DescriptionMobile: React.FC<Props> = ({ id = 'unasigned' }) => {
  return (
    <>
      <div className="flex content-between text-4xl">
        <p className="flex-1">#{id}</p>
        <p className="text-gray-400">Unknown</p>
      </div>
      <p className="text-xl mt-2">Status: Waiting 4 u 2 adopt me!</p>
      <p className="text-xl">Owner : Will u b my owner?</p>
    </>
  )
}
