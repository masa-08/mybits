import React from 'react'

type Props = {
  id: string | undefined
}

export const DescriptionMobile: React.FC<Props> = ({ id = 'unasigned' }) => {
  return (
    <>
      <div className="flex content-between text-4xl">
        <p className="flex-1 dark:text-white">#{id}</p>
        <p className="text-gray-400 dark:text-dark-content">Unknown</p>
      </div>
      <p className="text-xl dark:text-white mt-2">Status: Waiting 4 u 2 adopt me!</p>
      <p className="text-xl dark:text-white">Owner : Will u b my owner?</p>
    </>
  )
}
