import { Parallax } from 'react-parallax'
import { Header } from '../templates/Header'
import { Button } from '../parts'

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
          <Header mobileTop={true} />
          <div className="flex-1 mt-48">
            <div className="flex flex-col justify-center gap-3 h-full px-6">
              <p className="text-4xl text-white">NEOBABY,</p>
              <p className="text-5xl text-white">your lovable</p>
              <p className="text-5xl text-white">NFT buddy.</p>
              <div className="pt-5">
                <a href="https://opensea.io/collection/neobaby">
                  <Button
                    text="view in opensea"
                    transparent={true}
                    textSize="2xl"
                    shadowSize="sm"
                    padding="sm"
                  />
                </a>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  )
}
