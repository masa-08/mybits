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
      {
        // HeartIconだけサイズ感を調整するために
      }
      <div className="card w-full rounded-2xl bg-base-100">
        <div className="bg-gray-400 text-xl text-white px-2 absolute top-4 right-0">Upcoming</div>
        <figure className="h-52 mt-4 pt-0 m-auto">
          <HeartIcon />
        </figure>
        <div className="flex flex-col text-center">
          <div className="card-title px-3 pt-3 m-auto">
            <span className="text-4xl text-blue-500">Your &quot;Own&quot; baby</span>
          </div>
          <div className="card-body p-3">
            <span className="text-xl font-fira">
              Owner can change the name and take care of the baby!
            </span>
          </div>
        </div>
      </div>
      <AboutItem
        title="Crypto Buddies"
        body="Babies sympathize with you through the updowns of Crypto"
      >
        <div className="bg-gray-400 text-xl text-white px-2 absolute top-4 right-0">Upcoming</div>
        <BuddyIcon />
      </AboutItem>
    </>
  )
}
