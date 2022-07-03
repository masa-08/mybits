import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  path: string
  id: string
  address?: string
}

export const ListItem: React.FC<Props> = ({ path, id, address = 'Waiting 4 U' }) => {
  return (
    <>
      <div
        className="card bg-base-100 dark:bg-dark-slate rounded-xl"
        style={{ width: 'calc((100% - 2.25rem)/4)' }}
      >
        <Link to={id}>
          <figure>
            <img src={path} alt="image" className="rounded-t-xl" />
          </figure>
          <div className="card-body px-3 py-2">
            <p className="text-xl text-gray-500 dark:text-white" style={{ lineHeight: 0.5 }}>
              #{id}
            </p>
            <p className="text-xl leading-none dark:text-dark-content">{address}</p>
          </div>
        </Link>
      </div>
    </>
  )
}
