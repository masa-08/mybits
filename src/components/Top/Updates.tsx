import { SectionIcon } from './SectionIcon'

export const Updates = () => {
  return (
    <>
      <div className="flex gap-3 px-3">
        <div className="my-2">
          <SectionIcon />
        </div>
        <p className="text-5xl dark:text-white">Updates</p>
      </div>
      <p className="text-xl p-3 font-fira text-light-content dark:text-dark-content">
        Coming soon!
      </p>
    </>
  )
}
