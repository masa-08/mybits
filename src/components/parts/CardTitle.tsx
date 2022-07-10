import React from 'react'

type Props = {
  title: string
}

export const CardTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="card-title">
      <span className="text-4xl text-black dark:text-white">{title}</span>
    </div>
  )
}
