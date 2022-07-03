import { RoadmapItems } from './RoadmapItems'

export const Roadmap = () => {
  return (
    <>
      <div className="hidden md:block">
        <p className="text-5xl leading-none px-3 mb-4 dark:text-white">Roadmap</p>
        <div className="flex flex-wrap gap-3 justify-between">
          <RoadmapItems divider={<></>} />
        </div>
      </div>
    </>
  )
}
