import { useParams } from 'react-router-dom'
import { Header } from '@/components/templates'
import { Carousel, Description, DescriptionMobile, Image } from '@/components/BabyDetail'
import { dummy } from '@/store'
import { Button } from '@/components/parts'

export const BabyDetail = () => {
  const params = useParams()
  const data = dummy.find((d) => d.id === params.id)
  return (
    <>
      <div className="hidden md:block mb-12">
        <div className="px-3">
          <div className="flex gap-6">
            <div className="w-2/4">
              <Image src={data?.path || ''} />
            </div>
            <div className="flex flex-col gap-6">
              <Description id={params.id} />
              <div className="pt-6">
                <a href="https://opensea.io/collection/neobaby">
                  <Button text="view in opensea" textSize="4xl" shadowSize="md" padding="md" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 mb-12 border-t border-light-content dark:border-dark-content" />
          <Carousel />
        </div>
      </div>
      {
        // Mobile
      }
      <div className="block md:hidden">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="px-3">
            <Image src={data?.path || ''} />
            <div className="px-3 pt-6">
              <DescriptionMobile id={params.id} />
              <div className="pt-6">
                <a href="https://opensea.io/collection/neobaby">
                  <Button
                    text="view in opensea"
                    textSize="2xl"
                    shadowSize="sm"
                    padding="sm"
                    widthFull={true}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 mb-4" />
        </div>
      </div>
    </>
  )
}
