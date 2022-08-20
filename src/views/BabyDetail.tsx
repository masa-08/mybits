import { useParams } from 'react-router-dom'
import { useMedia } from 'use-media'
import { dummy } from '@/store'
import { Button } from '@/components/parts'
import { Carousel, Description } from '@/components/templates'

export const BabyDetail = () => {
  const params = useParams()
  const isWide = useMedia({ minWidth: '768px' })
  const data = dummy.find((d) => d.id === params.id)
  return (
    <>
      <div className="px-3">
        <div className="md:min-h-full flex flex-col md:flex-row md:gap-6">
          <div className="md:w-2/4">
            <figure>
              <img src={data?.path || ''} alt="image" className="rounded-xl" />
            </figure>
          </div>
          <div className="flex flex-col gap-0 md:gap-6 p-3 md:p-0">
            <Description
              id={params.id}
              status={data?.address}
              twitterName={data?.twitterName}
              twitterLink={data?.twitterLink}
              openseaName={data?.openseaName}
              openseaLink={data?.openseaLink}
            />
            <div className="pt-6">
              <a href="https://opensea.io/collection/neobaby">
                <Button
                  text="view in opensea"
                  textSize={isWide ? '4xl' : '2xl'}
                  shadowSize={isWide ? 'md' : 'sm'}
                  padding={isWide ? 'md' : 'sm'}
                  widthFull={!isWide && true}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="my-6 md:my-12 border-t border-light-content dark:border-dark-content" />
        <p className="text-2xl md:text-3xl px-3 mb-5 text-light-content dark:text-dark-content">
          Would u like to see other babies?
        </p>
        <div className="mb-8 flex flex-col items-center">
          <Carousel slidesToShow={isWide ? 3 : 1} />
        </div>
      </div>
    </>
  )
}
