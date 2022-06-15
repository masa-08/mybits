import { About, Banner, Gallery, OpenSeaGuide, Roadmap, Updates } from '@/components/Top'

export const Top = () => {
  return (
    <>
      <Banner />
      <div className="flex justify-center">
        <div className="max-w-5xl flex-grow">
          <div id="about" className="mt-20">
            <About />
          </div>
          <div id="gallery" className="mt-20">
            <Gallery />
          </div>
          <div id="roadmap" className="mt-20">
            <Roadmap />
          </div>
          <div id="updates" className="mt-20">
            <Updates />
          </div>
        </div>
      </div>
      <div className="mt-20 -mb-12">
        <OpenSeaGuide />
      </div>
    </>
  )
}
