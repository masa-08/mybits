import { Button } from '../common'

export const Banner = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="w-screen h-banner bg-top-image bg-cover ml-force-screen">
          <div className="flex flex-col justify-center gap-3 h-full px-3 lg:ml-adjusted">
            <p className="text-5xl text-white">NEOBABY,</p>
            <p className="text-7xl text-white">your lovable NFT buddy.</p>
            <div className="pt-5">
              <Button
                text="View in OpenSea"
                textSize="4xl"
                textColor="white"
                bgColor="transparent"
                borderColor="white"
                className="w-fit h-fit px-12 py-5 hover:border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
