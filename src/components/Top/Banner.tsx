export const Banner = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="w-screen h-banner bg-top-image bg-cover ml-force-screen">
          <div className="flex flex-col justify-center gap-3 h-full px-3 lg:ml-adjusted">
            <p className="text-5xl text-white">NEOBABY,</p>
            <p className="text-7xl text-white">your lovable NFT buddy.</p>
            <div className="pt-5">
              <a href="https://opensea.io/collection/neobaby">
                <button
                  className="btn rounded-full font-normal w-fit h-fit px-12 py-5
                  text-4xl text-white bg-transparent hover:bg-opacity-50
                  border-2 border-white shadow-flat-md shadow-white"
                >
                  view in opensea
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
