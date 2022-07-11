import { Menu } from '../templates/Menu'
import { Logo } from '../parts'

export const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="navbar flex justify-between items-center px-3 max-w-5xl mx-auto">
          <Logo />
          <Menu />
        </div>
      </div>
    </>
  )
}
