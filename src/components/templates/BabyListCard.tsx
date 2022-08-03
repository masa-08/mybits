import React from 'react'
import { useMedia } from 'use-media'
import { Link } from 'react-router-dom'

type Props = {
  path: string
  id: string
  address?: string
}

export const BabyListCard: React.FC<Props> = ({ path, id, address = 'Waiting 4 U' }) => {
  const isWide = useMedia({ minWidth: '768px' })
  return (
    <>
      <div
        className="card bg-base-100 dark:bg-dark-slate rounded-xl"
        style={{ width: `${isWide ? 'calc((100% - 2.25rem)/4)' : 'calc((100% - 0.75rem)/2)'}` }}
      >
        <Link to={id}>
          <figure>
            <img src={path} alt="image" />
          </figure>
          <div className="card-body px-3 py-2">
            <p className="text-xl text-black dark:text-white" style={{ lineHeight: 0.5 }}>
              #{id}
            </p>
            <p className="text-xl leading-none text-light-content dark:text-dark-content">
              {address}
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}
