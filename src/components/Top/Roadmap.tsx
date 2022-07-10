import { RoadmapItems } from './RoadmapItems'
import { SectionHeader } from '../templates'

export const Roadmap = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="pl-3 mb-4">
          <SectionHeader title="Roadmap" />
        </div>
        <div className="flex flex-wrap gap-3 justify-between">
          <RoadmapItems divider={<></>} />
        </div>
      </div>
    </>
  )
}
