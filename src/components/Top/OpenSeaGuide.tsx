import { BabyIcon } from './Icons'

export const OpenSeaGuide = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="w-screen bg-gray-700 h-96 flex gap-5 ml-force-screen pl-3">
          <div className="flex flex-col justify-center gap-3 px-3 lg:ml-adjusted">
            <p className="text-6xl text-white mb-5">Visit NEOBABY in OpenSea</p>
            <button className="btn shadow-flat shadow-black border-black border-2 w-fit h-fit px-24 py-5 text-4xl bg-gray-300 text-black">
              visit opensea
            </button>
          </div>
          <div className="my-auto">
            <BabyIcon height={300} width={300} fill="#FFFFFF" />
          </div>
        </div>
      </div>
    </>
  )
}
