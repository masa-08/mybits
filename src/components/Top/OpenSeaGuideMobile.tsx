import { Button, BabySilhouette } from '../parts'

export const OpenSeaGuideMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className=" bg-gray-700 dark:bg-slate-600 p-6 py-12 flex items-end">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-4xl text-white">Visit NEOBABY in OpenSea</p>
            <div className="flex items-center">
              <a href="https://opensea.io/collection/neobaby">
                <Button text="view in opensea" textSize="2xl" shadowSize="sm" padding="sm" />
              </a>
            </div>
          </div>
          <div className="mx-auto -mb-5">
            <BabySilhouette size="sm" />
          </div>
        </div>
      </div>
    </>
  )
}
