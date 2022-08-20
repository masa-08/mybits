import React from 'react'

type Props = {
  id: string | undefined
  status: string | undefined
  twitterName: string | undefined
  twitterLink: string | undefined
  openseaName: string | undefined
  openseaLink: string | undefined
}

export const Description: React.FC<Props> = ({
  id = 'unasigned',
  status,
  twitterName,
  twitterLink,
  openseaName,
  openseaLink,
}) => {
  return (
    <>
      <div className="flex content-between md:flex-col text-4xl md:text-5xl">
        <p className="flex-1 dark:text-white">#{id}</p>
        <p className="text-gray-400 dark:text-dark-content">Unknown</p>
      </div>
      <div className="text-xl md:text-2xl dark:text-white mt-2">
        {status === 'Waiting 4 U' ? (
          <>
            <p>Status: Waiting 4 u 2 adopt me!</p>
            <p>Owner : Will u b my owner?</p>
          </>
        ) : (
          <>
            <p>Status: {status}</p>
            <p className="flex gap-2">
              Owner :
              {twitterName && twitterLink && (
                <a href={twitterLink} className="link">
                  <span>{twitterName}</span>
                </a>
              )}
            </p>
          </>
        )}
      </div>
    </>
  )
}
