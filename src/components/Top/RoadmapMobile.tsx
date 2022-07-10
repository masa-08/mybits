import { RoadmapItems } from './RoadmapItems'
import { RoadmapDivideTriangle } from './RoadmapDivideTriangle'
import { SectionHeader } from '../templates'

export const RoadmapMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="pl-3 mb-4">
          <SectionHeader title="Roadmap" />
        </div>
        <div className="flex flex-col gap-3">
          <RoadmapItems divider={<RoadmapDivideTriangle />} />
        </div>
      </div>
    </>
  )
}
