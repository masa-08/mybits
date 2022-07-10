import React from 'react'
import { SectionIcon, SectionTitle } from '../parts'

type Props = {
  title: string
}

export const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="my-2">
        <SectionIcon />
      </div>
      <SectionTitle title={title} />
    </div>
  )
}
