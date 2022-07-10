import React from 'react'
import { OpenseaIconBlue, TwitterIconBlue } from './Icons'

type Props = {
  type: 'twitter' | 'opensea'
  size: 'md' | 'sm'
}

// NOTE: 共通なのでグローバルでもいい
const twitterLink = 'https://twitter.com/harufy009'
const openseaLink = 'https://opensea.io/collection/neobaby'

export const SocialLink: React.FC<Props> = ({ type, size }) => {
  return (
    <a
      href={type === 'twitter' ? twitterLink : openseaLink}
      className="flex items-center gap-2"
      style={{ color: `${type === 'twitter' ? '#1b9df0' : '#2081E2'}` }}
    >
      <figure className={size === 'sm' ? 'w-5' : 'w-7'}>
        {type === 'twitter' ? <TwitterIconBlue /> : <OpenseaIconBlue />}
      </figure>
      <span className={size === 'sm' ? 'text-xl' : 'text-3xl'}>
        {type === 'twitter' ? 'Twitter' : 'OpenSea'}
      </span>
    </a>
  )
}
