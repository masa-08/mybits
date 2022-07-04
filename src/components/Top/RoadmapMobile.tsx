import { RoadmapItems } from './RoadmapItems'
import { RoadmapDivideTriangle } from './RoadmapDivideTriangle'
import { SectionIcon } from './SectionIcon'

export const RoadmapMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="flex gap-3 px-3">
          <div className="my-2">
            <SectionIcon />
          </div>
          <p className="text-5xl leading-none mb-4 dark:text-white">Roadmap</p>
        </div>
        <div className="flex flex-col gap-3">
          <RoadmapItems divider={<RoadmapDivideTriangle />} />
        </div>
      </div>
    </>
  )
}
