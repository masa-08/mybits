import { useParams } from 'react-router-dom'
import { HeaderMobile, FooterMobile } from '@/components/common'
import { Carousel, Description, DescriptionMobile, Image } from '@/components/BabyDetail'
import { dummy } from '@/store'

export const BabyDetail = () => {
  const params = useParams()
  const data = dummy.find((d) => d.id === params.id)
  return (
    <>
      <div className="hidden md:block">
        <div className="px-3">
          <div className="mt-3" />
          <div className="flex gap-6">
            <div className="w-2/4">
              <Image src={data?.path || ''} />
            </div>
            <div className="flex flex-col gap-6">
              <Description id={params.id} />
              <div className="pt-6">
                <a href="https://opensea.io/collection/neobaby">
                  <button className="btn btn-circle w-full h-16 text-3xl bg-base-100 border-none text-base-content">
                    View in OpenSea
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 mb-12 border-t border-black" />
          <Carousel />
        </div>
      </div>
      {
        // Mobile
      }
      <div className="block md:hidden">
        <div className="flex flex-col min-h-screen">
          <HeaderMobile />
          <div className="px-3">
            <div className="pt-2">
              <Image src={data?.path || ''} />
            </div>
            <div className="px-3 pt-6">
              <DescriptionMobile id={params.id} />
              <div className="pt-6">
                <a href="https://opensea.io/collection/neobaby">
                  <button className="btn w-full text-xl bg-base-100 border-none text-base-content">
                    View in OpenSea
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 mb-4" />
          <FooterMobile />
        </div>
      </div>
    </>
  )
}
