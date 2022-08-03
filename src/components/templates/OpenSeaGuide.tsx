import useMedia from 'use-media'
import { Button, BabySilhouette } from '../parts'

export const OpenSeaGuide = () => {
  const isWide = useMedia({ minWidth: '768px' })
  return (
    <>
      <div className="w-screen bg-gray-700 dark:bg-slate-600 flex gap-5 p-6 md:h-96 md:ml-force-screen">
        <div className="flex flex-col justify-center gap-6 lg:ml-adjusted">
          <p className="text-4xl text-white md:mb-5">Visit NEOBABY in OpenSea</p>
          <div className="flex items-center">
            <a href="https://opensea.io/collection/neobaby">
              <Button
                text="view in opensea"
                textSize={isWide ? '4xl' : '2xl'}
                shadowSize={isWide ? 'md' : 'sm'}
                padding={isWide ? 'md' : 'sm'}
              />
            </a>
          </div>
        </div>
        <div className="m-auto -mb-5 md:mb-9">
          <BabySilhouette size={isWide ? 'md' : 'sm'} />
        </div>
      </div>
    </>
  )
}
