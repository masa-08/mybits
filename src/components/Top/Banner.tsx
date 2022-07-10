import { Parallax } from 'react-parallax'
import { Button } from '../parts'

export const Banner = () => {
  return (
    <>
      <div className="hidden md:block">
        <Parallax
          blur={0}
          bgImage="https://storage.googleapis.com/mybits-test/neobaby-top-image.webp"
          bgImageAlt="image"
          strength={100}
          className="w-screen h-banner ml-force-screen"
        >
          <div className="flex flex-col justify-center gap-3 px-3 mt-12 h-banner-parallax-100 lg:ml-adjusted">
            <p className="text-5xl text-white">NEOBABY,</p>
            <p className="text-7xl text-white">your lovable NFT buddy.</p>
            <div className="pt-5">
              <a href="https://opensea.io/collection/neobaby">
                <Button
                  text="view in opensea"
                  transparent={true}
                  textSize="4xl"
                  shadowSize="md"
                  padding="md"
                />
              </a>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  )
}
