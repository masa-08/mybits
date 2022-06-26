import { BabyIcon } from './Icons'

export const OpenSeaGuideMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className=" bg-gray-700 px-6 pt-10 pb-6">
          <div className="flex flex-col justify-center gap-3">
            <p className="text-4xl text-white">Visit NEOBABY in OpenSea</p>
            <div className="flex items-center">
              <button className="btn rounded-full w-fit h-fit px-6 py-2 text-2xl border-white bg-transparent text-white hover:bg-opacity-50">
                view in opensea
              </button>
              <div className="my-auto">
                <BabyIcon height={100} width={100} fill="#FFFFFF" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
