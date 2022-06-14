import { RoadmapItem } from './RoadmapItem'

export const Roadmap = () => {
  return (
    <>
      <p className="text-5xl leading-none px-3 mb-4">Roadmap</p>
      <div className="flex gap-3 justify-between">
        <RoadmapItem title="#1 Show Owner" body="Show ownership in each baby's page" />
        <RoadmapItem title="#2 Name Baby" body="Allow the owner to name the baby" />
        <RoadmapItem title="#3 Take Care" body="The stats will change with the care!" />
        <RoadmapItem title="#4 Generative" body="New babies to be generated!" />
      </div>
    </>
  )
}
