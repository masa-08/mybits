import React from 'react'
import { RoadmapItem } from './RoadmapItem'

type Props = {
  divider: React.ReactNode
}

export const RoadmapItems: React.FC<Props> = ({ divider }) => {
  return (
    <>
      <RoadmapItem title="Release" done={true} />
      <div className="self-center">{divider}</div>
      <RoadmapItem title="Show Owner" body="Show ownership in each baby's page." />
      <div className="self-center">{divider}</div>
      <RoadmapItem title="Name Baby" body="Allow the owner to name the baby." />
      <div className="self-center">{divider}</div>
      <RoadmapItem
        title="Sympathize"
        body="The babies will sympathize with the selected chain's updown."
      />
      <div className="self-center">{divider}</div>
      <RoadmapItem title="Take Care" body="The stats will change with the care!" />
      <div className="self-center">{divider}</div>
      <RoadmapItem title="Generative" body="New babies to be generated!" />
    </>
  )
}
