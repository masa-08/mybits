import { MenuItem } from '../parts'

export const Menu = () => {
  return (
    <>
      <ul className="menu menu-horizontal">
        <MenuItem title="About" to="/#about" />
        <MenuItem title="Gallery" to="/#gallery" />
        <MenuItem title="Roadmap" to="/#roadmap" />
      </ul>
    </>
  )
}
