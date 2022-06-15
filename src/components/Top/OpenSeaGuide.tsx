import { BabyIcon } from './Icons'

export const OpenSeaGuide = () => {
  return (
    <>
      <div className="w-screen bg-gray-700 h-96 flex gap-5 ml-force-screen">
        <div className="flex flex-col justify-center gap-3 px-3 ml-adjusted">
          <p className="text-6xl text-white mb-5">Visit NEOBABY in OpenSea</p>
          <button className="btn w-fit h-fit px-24 py-5 text-4xl bg-gray-300 text-black">
            visit opensea
          </button>
        </div>
        <div className="my-auto">
          <BabyIcon />
        </div>
      </div>
    </>
  )
}
