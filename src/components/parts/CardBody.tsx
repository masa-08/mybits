import React from 'react'

type Props = {
  body: string
}

export const CardBody: React.FC<Props> = ({ body }) => {
  return (
    <div>
      <span className="text-lg md:text-xl font-fira text-light-content dark:text-dark-content">
        {body}
      </span>
    </div>
  )
}
