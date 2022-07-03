import { AboutItems } from './AboutItems'

export const About = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="p-3 flex flex-col gap-4 mb-4">
          <p className="text-5xl dark:text-white">About NEOBABY</p>
          <p className="text-xl font-fira">
            NEOBABY is a NFT art collection on Ethereum, and you can buy it from OpenSea.
          </p>
        </div>
        <div className="flex gap-3 justify-between">
          <AboutItems />
        </div>
      </div>
    </>
  )
}
