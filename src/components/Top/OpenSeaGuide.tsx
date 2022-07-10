import { Button, BabySilhouette } from '../parts'

export const OpenSeaGuide = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="w-screen bg-gray-700 dark:bg-slate-600 h-96 flex gap-5 ml-force-screen pl-3">
          <div className="flex flex-col justify-center gap-3 px-3 lg:ml-adjusted">
            <p className="text-5xl text-white mb-5">Visit NEOBABY in OpenSea</p>
            <a href="https://opensea.io/collection/neobaby">
              <Button text="view in opensea" textSize="4xl" shadowSize="md" padding="md" />
            </a>
          </div>
          <div className="m-auto">
            <BabySilhouette size="md" />
          </div>
        </div>
      </div>
    </>
  )
}
