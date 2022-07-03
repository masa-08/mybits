import { HeaderMobile, Button } from '@/components/common'

export const BannerMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="h-screen w-screen bg-top-image-mobile bg-cover flex flex-col min-h-screen">
          <HeaderMobile top={true} />
          <div className="flex-1">
            <div className="flex flex-col justify-center gap-3 h-full px-6">
              <p className="text-4xl text-white">NEOBABY,</p>
              <p className="text-5xl text-white">your lovable</p>
              <p className="text-5xl text-white">NFT buddy.</p>
              <div className="pt-5">
                <Button
                  text="View in OpenSea"
                  textSize="2xl"
                  textColor="white"
                  bgColor="transparent"
                  borderColor="white"
                  className="w-fit h-fit px-6 py-2 hover:border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
