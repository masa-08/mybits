import { AboutItems } from './AboutItems'
import { SectionHeader } from '../templates'

export const About = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="mb-4 pl-3">
          <SectionHeader title="About NEOBABY" />
          <p className="mt-3 text-xl font-fira text-light-content dark:text-dark-content">
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
