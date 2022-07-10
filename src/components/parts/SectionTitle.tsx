import React from 'react'

type Props = {
  title: string
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return <p className="text-5xl dark:text-white">{title}</p>
}
