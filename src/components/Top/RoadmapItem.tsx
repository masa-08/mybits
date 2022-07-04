import React from 'react'
import { CheckSquare, Square } from 'react-feather'

type Props = {
  title: string
  body?: string
  done?: boolean
}

export const RoadmapItem: React.FC<Props> = ({ title, body, done = false }) => {
  return (
    <div className="card w-full rounded-2xl bg-base-100 dark:bg-dark-slate py-4">
      <div className="flex flex-col">
        <div className="card-title px-5">
          {done ? (
            <CheckSquare className="text-green-400 h-10 w-10" />
          ) : (
            <Square className="text-gray-300 h-10 w-10" />
          )}
          <span className="text-3xl dark:text-white">{title}</span>
        </div>
        {body && (
          <div className="w-full">
            <div className="mx-4 mt-4 border-b border-gray-300" />
            <div className="card-body pt-4 px-6 pb-0">
              <span className="text-lg font-fira text-light-content dark:text-dark-content">
                {body}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
