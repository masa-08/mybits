import { OpenseaIcon, TwitterIcon } from './Icons'

export const Footer = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="p-3 pl-6 mt-12 bg-gray-300">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex divide-gray-100 divide-x">
                <a href="#" className="flex items-center gap-2 pr-2" style={{ color: '#2081E2' }}>
                  <figure className="w-5 h-5">
                    <OpenseaIcon />
                  </figure>
                  <span className="text-2xl">OpenSea</span>
                </a>
                <a href="#" className="flex items-center gap-2 pl-2" style={{ color: '#1b9df0' }}>
                  <figure className="w-5 h-5">
                    <TwitterIcon />
                  </figure>
                  <span className="text-2xl">Twitter</span>
                </a>
              </div>
              <p className="text-xl text-gray-400">&copy; 2022 NEOBABY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
