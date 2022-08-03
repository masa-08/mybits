import React from 'react'

type Props = {
  id: string | undefined
}

export const Description: React.FC<Props> = ({ id = 'unasigned' }) => {
  return (
    <>
      <div className="flex content-between md:flex-col text-4xl md:text-5xl">
        <p className="flex-1 dark:text-white">#{id}</p>
        <p className="text-gray-400 dark:text-dark-content">Unknown</p>
      </div>
      <div className="text-xl md:text-2xl dark:text-white mt-2">
        <p>Status: Waiting 4 u 2 adopt me!</p>
        <p>Owner : Will u b my owner?</p>
      </div>
    </>
  )
}
