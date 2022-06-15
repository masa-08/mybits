export const Banner = () => {
  return (
    <>
      <div className="w-screen h-banner bg-top-image bg-cover ml-force-screen">
        <div className="flex flex-col justify-center gap-3 h-full px-3 lg:ml-adjusted">
          <p className="text-5xl text-white">NEOBABY,</p>
          <p className="text-7xl text-white">your lovable NFT buddy.</p>
          <div className="pt-5">
            <button className="btn w-fit h-fit px-12 py-5 text-4xl bg-gray-300 text-black bg-opacity-80 hover:text-gray-300">
              view in opensea
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
