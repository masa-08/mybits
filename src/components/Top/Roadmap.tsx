import { RoadmapItems } from './RoadmapItems'
import { SectionHeader } from '../templates'
import { Triangle } from '../parts'

export const Roadmap = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="pl-3 mb-4">
          <SectionHeader title="Roadmap" />
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <RoadmapItems divider={<Triangle />} />
        </div>
      </div>
    </>
  )
}
