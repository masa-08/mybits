import { AboutItem } from './AboutItem'
import { BuddyIcon, HeartIcon, QRIcon } from './Icons'

export const About = () => {
  return (
    <>
      <div className="p-3 flex flex-col gap-8 mb-4">
        <p className="text-5xl leading-none">About NEOBABY</p>
        <p className="text-3xl leading-none">
          NEOBABY is a NFT art collection on Ethereum, and you can buy it from OpenSea.
        </p>
      </div>
      <div className="flex gap-3 justify-between">
        <AboutItem
          title="QR Code embedded"
          body="Each babies have their own page and QR is linked to it"
        >
          <QRIcon />
        </AboutItem>
        <AboutItem
          title='Your "Own" baby'
          body="Owner can change the name and take care of the baby!"
        >
          <div className="bg-gray-400 text-xl text-white px-2 absolute top-4 right-0">Upcoming</div>
          <HeartIcon />
        </AboutItem>
        <AboutItem
          title="Crypto Buddies"
          body="Babies sympathize with you through the updowns of Crypto"
        >
          <div className="bg-gray-400 text-xl text-white px-2 absolute top-4 right-0">Upcoming</div>
          <BuddyIcon />
        </AboutItem>
      </div>
    </>
  )
}
