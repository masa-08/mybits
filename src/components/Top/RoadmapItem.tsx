import React from 'react'
import { CardBody, CardTitle, CheckBox } from '../parts'

type Props = {
  title: string
  body?: string
  done?: boolean
}

export const RoadmapItem: React.FC<Props> = ({ title, body, done = false }) => {
  return (
    <div className="card w-full rounded-2xl bg-base-100 dark:bg-dark-slate py-4">
      <div className="flex flex-col">
        <div className="flex gap-3 px-6">
          <CheckBox done={done} />
          <CardTitle title={title} />
        </div>
        {body && (
          <div className="w-full">
            <div className="mx-4 mt-4 border-b border-gray-300 dark:border-dark-content" />
            <div className="px-6 mt-3 mb-0">
              <CardBody body={body} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
