import { RoadmapItems } from './RoadmapItems'
import { SectionIcon } from '../parts'

export const Roadmap = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex gap-3 px-3">
          <div className="my-2">
            <SectionIcon />
          </div>
          <p className="text-5xl leading-none mb-4 dark:text-white">Roadmap</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-between">
          <RoadmapItems divider={<></>} />
        </div>
      </div>
    </>
  )
}
