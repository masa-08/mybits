import { SectionHeader } from '.'
import { AboutTag, BuddyIcon, HeartIcon, QRIcon } from '../parts'
import { AboutCard } from './AboutCard'

const WrappedAboutTag = () => (
  <div className="absolute top-4 right-0">
    <AboutTag />
  </div>
)

export const About = () => {
  const introSentence =
    'NEOBABY is a NFT art collection on Ethereum, and you can buy it from OpenSea.'
  const contents = [
    {
      title: 'QR Code embedded',
      body: 'Each babies have their own page and QR is linked to it',
      icon: <QRIcon />,
      tag: false,
    },
    {
      title: 'Your "Own" baby',
      body: 'Owner can change the name and take care of the baby!',
      icon: <HeartIcon />,
      tag: true,
    },
    {
      title: 'Crypto Buddies',
      body: 'Babies sympathize with you through the updowns of Crypto',
      icon: <BuddyIcon />,
      tag: true,
    },
  ]

  return (
    <>
      <div className="mb-4 pl-3">
        <SectionHeader title="About NEOBABY" />
        <p className="mt-3 text-xl font-fira text-light-content dark:text-dark-content">
          {introSentence}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        {contents.map((c) => (
          <AboutCard key={c.title} title={c.title} body={c.body}>
            {c.tag && <WrappedAboutTag />}
            {c.icon}
          </AboutCard>
        ))}
      </div>
    </>
  )
}
