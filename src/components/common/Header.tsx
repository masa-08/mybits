export const Header = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center px-3">
        <div className="flex flex-col items-start">
          <p className="text-5xl leading-none">NEOBABY</p>
          <p className="text-base leading-none text-gray-500">Lovable NFT buddy</p>
        </div>
        <div>
          <div>
            <figure className="w-7 h-7">
              <a href="#">
                <img
                  src="https://storage.googleapis.com/mybits-test/opensea-icon-gray.svg"
                  alt="opensea"
                />
              </a>
            </figure>
          </div>
          <div className="pl-3 align-middle">
            <figure className="w-7 h-7 align-middle">
              <a href="#">
                <img
                  src="https://storage.googleapis.com/mybits-test/twitter-icon-gray.svg"
                  alt="twitter"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}
