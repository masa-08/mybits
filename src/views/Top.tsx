import {
  About,
  Footer,
  Header,
  Gallery,
  Banner,
  BannerMobile,
  OpenSeaGuide,
  Roadmap,
  Updates,
} from '@/components/templates'

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
          </div>
          <div id="roadmap" className="mt-14 md:mt-20">
            <Roadmap />
          </div>
          <div id="updates" className="mt-14 md:mt-20">
            <Updates />
          </div>
        </div>
      </div>
      <div className="mt-14 md:mt-20 md:-mb-12">
        <OpenSeaGuide />
      </div>
      <Footer />
    </>
  )
}
