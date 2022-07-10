import { AboutTag } from '../parts'
import { AboutItem } from './AboutItem'
import { BuddyIcon, HeartIcon, QRIcon } from './Icons'

export const AboutItems = () => {
  return (
    <>
      <AboutItem
        title="QR Code embedded"
        body="Each babies have their own page and QR is linked to it"
      >
        <QRIcon />
      </AboutItem>
      <AboutItem
        title='Your "Own" baby'
        body="Owner can change the name and take care of the baby!"
        paddingTop={false}
      >
        <div className="absolute top-4 right-0">
          <AboutTag />
        </div>
        <HeartIcon />
      </AboutItem>
      <AboutItem
        title="Crypto Buddies"
        body="Babies sympathize with you through the updowns of Crypto"
      >
        <div className="absolute top-4 right-0">
          <AboutTag />
        </div>
        <BuddyIcon />
      </AboutItem>
    </>
  )
}
