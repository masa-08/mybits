import React from 'react'
import { MenuItem } from '../parts'

type Props = {
  onClick?: () => void
}

export const MenuLinksCore: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <MenuItem title="About" to="/#about" onClick={onClick} />
      <MenuItem title="Gallery" to="/#gallery" onClick={onClick} />
      <MenuItem title="Roadmap" to="/#roadmap" onClick={onClick} />
    </>
  )
}
