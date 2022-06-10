export const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center px-3 py-3 bg-gray-300">
        <div className="flex divide-gray-400 divide-x-2">
          <div className="flex items-center pr-1">
            <figure className="w-5 h-5">
              <img
                src="https://storage.googleapis.com/mybits-test/opensea-icon.svg"
                alt="opensea"
              />
            </figure>
            <a href="#" className="px-1" style={{ color: '#2081E2' }}>
              OpenSea
            </a>
          </div>
          <div className="flex items-center pl-2">
            <figure className="w-5 h-5">
              <img
                src="https://storage.googleapis.com/mybits-test/twitter-icon.svg"
                alt="twitter"
              />
            </figure>
            <a href="#" className="px-1" style={{ color: '#1b9df0' }}>
              Twitter
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-400">&copy; 2022 NEOBABY</p>
      </div>
    </>
  )
}
