import { AboutItems } from './AboutItems'

export const AboutMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="p-3 flex flex-col gap-4 mb-4">
          <p className="text-5xl dark:text-white">About NEOBABY</p>
          <p className="text-xl font-fira text-light-content dark:text-dark-content">
            NEOBABY is a NFT art collection on Ethereum, and you can buy it from OpenSea.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <AboutItems />
        </div>
      </div>
    </>
  )
}
