import { About, Footer, Header, Banner, BannerMobile } from '@/components/templates'
import {
  Gallery,
  GalleryMobile,
  OpenSeaGuide,
  OpenSeaGuideMobile,
  Roadmap,
  Updates,
} from '@/components/Top'
import { RoadmapMobile } from '@/components/Top/RoadmapMobile'

export const Top = () => {
  return (
    <>
      <div className="hidden md:block">
        <Header />
        <Banner />
      </div>
      <div className="block md:hidden">
        <BannerMobile />
      </div>
      <div className="px-3 md:flex md:justify-center md:max-w-5xl md:flex-grow md:mx-auto">
        <div>
          <div id="about" className="mt-14 md:mt-20">
            <About />
          </div>
          <div id="gallery" className="mt-14 md:mt-20">
            <Gallery />
            <GalleryMobile />
          </div>
          <div id="roadmap" className="mt-14 md:mt-20">
            <Roadmap />
            <RoadmapMobile />
          </div>
          <div id="updates" className="mt-14 md:mt-20">
            <Updates />
          </div>
        </div>
      </div>
      <div className="mt-14 md:mt-20 md:-mb-12">
        <OpenSeaGuide />
        <OpenSeaGuideMobile />
      </div>
      <Footer />
    </>
  )
}
