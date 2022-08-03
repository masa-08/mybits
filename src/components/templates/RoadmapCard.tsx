import React from 'react'
import { CardBody, CardContainer, CardTitle, CheckBox } from '../parts'

type Props = {
  title: string
  body?: string
  done?: boolean
}

export const RoadmapCard: React.FC<Props> = ({ title, body, done = false }) => {
  return (
    <CardContainer>
      <div className="flex gap-3 px-2">
        <CheckBox done={done} />
        <CardTitle title={title} />
      </div>
      {body && (
        <div className="w-full">
          <div className="mt-4 border-b border-gray-300 dark:border-dark-content" />
          <div className="px-3 mt-3 mb-0">
            <CardBody body={body} />
          </div>
        </div>
      )}
    </CardContainer>
  )
}
