import { OpenseaIconBlue, TwitterIconBlue } from './Icons'

export const FooterMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="pl-6 p-5 bg-gray-300">
          <div className="mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex">
                <a href="#" className="flex items-center gap-2 pr-2" style={{ color: '#2081E2' }}>
                  <figure className="w-5 h-5">
                    <OpenseaIconBlue />
                  </figure>
                  <span className="text-xl">OpenSea</span>
                </a>
                <a href="#" className="flex items-center gap-2 pl-2" style={{ color: '#1b9df0' }}>
                  <figure className="w-5 h-5">
                    <TwitterIconBlue />
                  </figure>
                  <span className="text-xl">Twitter</span>
                </a>
              </div>
              <p className="text-sm text-gray-400">&copy; 2022 NEOBABY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
