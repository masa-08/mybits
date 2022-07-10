import React from 'react'
import { OpenseaIconBlue, TwitterIconBlue } from './Icons'

type Props = {
  type: 'twitter' | 'opensea'
}

// NOTE: 共通なのでグローバルでもいい
const twitterLink = 'https://twitter.com/harufy009'
const openseaLink = 'https://opensea.io/collection/neobaby'

export const MenuSocial: React.FC<Props> = ({ type }) => {
  return (
    <li>
      <a
        href={type === 'twitter' ? twitterLink : openseaLink}
        className="flex items-center gap-2"
        style={{ color: `${type === 'twitter' ? '#1b9df0' : '#2081E2'}` }}
      >
        <figure className="w-7 h-7">
          {type === 'twitter' ? <TwitterIconBlue /> : <OpenseaIconBlue />}
        </figure>
        <span className="text-3xl">{type === 'twitter' ? 'Twitter' : 'OpenSea'}</span>
      </a>
    </li>
  )
}
