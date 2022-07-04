import { HeaderMobile } from '@/components/common'
import { Parallax } from 'react-parallax'

export const BannerMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <Parallax
          blur={0}
          bgImage="https://storage.googleapis.com/mybits-test/neobaby-top-image-mobile.webp"
          bgImageAlt="image"
          strength={100}
          className="flex flex-col w-screen min-h-screen"
        >
          <HeaderMobile top={true} />
          <div className="flex-1 mt-48">
            <div className="flex flex-col justify-center gap-3 h-full px-6">
              <p className="text-4xl text-white">NEOBABY,</p>
              <p className="text-5xl text-white">your lovable</p>
              <p className="text-5xl text-white">NFT buddy.</p>
              <div className="pt-5">
                <a href="https://opensea.io/collection/neobaby">
                  <button
                    className="btn rounded-full font-normal w-fit h-fit px-6 py-2
                    text-2xl text-white bg-transparent hover:bg-opacity-50
                    border-2 border-white shadow-flat-sm shadow-white"
                  >
                    view in opensea
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  )
}
