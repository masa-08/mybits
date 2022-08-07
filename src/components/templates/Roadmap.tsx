import { SectionHeader } from '.'
import { Triangle } from '../parts'
import { RoadmapCard } from './RoadmapCard'

export const Roadmap = () => {
  const contents = [
    {
      title: 'Release',
      done: false,
    },
    {
      title: 'Show Owner',
      body: "Show ownership in each baby's page.",
      done: false,
    },
    {
      title: 'Name Baby',
      body: 'Allow the owner to name the baby.',
      done: false,
    },
    {
      title: 'Sympathize',
      body: "The babies will sympathize with the selected chain's updown.",
      done: false,
    },
    {
      title: 'Take Care',
      body: 'The stats will change with the care!',
      done: false,
    },
    {
      title: 'Generative',
      body: 'New babies to be generated!',
      done: false,
    },
  ]

  return (
    <>
      <div className="pl-3 mb-4">
        <SectionHeader title="Roadmap" />
      </div>
      <div className="flex flex-col gap-3">
        {contents.map((c, index) => (
          <>
            <RoadmapCard
              key={c.title}
              title={c.title}
              body={'body' in c ? c.body : undefined}
              done={c.done}
            />
            {index !== contents.length - 1 && ( // 一番最後以外はカードの間に矢印アイコンを挟む
              <div className="self-center">
                <Triangle />
              </div>
            )}
          </>
        ))}
      </div>
    </>
  )
}
