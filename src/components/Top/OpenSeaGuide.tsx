import { BabyIcon } from './Icons'
import { Button } from '../common'

export const OpenSeaGuide = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="w-screen bg-gray-700 h-96 flex gap-5 ml-force-screen pl-3">
          <div className="flex flex-col justify-center gap-3 px-3 lg:ml-adjusted">
            <p className="text-6xl text-white mb-5">Visit NEOBABY in OpenSea</p>
            <Button text="Visit OpenSea" textSize="4xl" className="w-fit h-fit px-24 py-5" />
          </div>
          <div className="my-auto">
            <BabyIcon height={300} width={300} fill="#FFFFFF" />
          </div>
        </div>
      </div>
    </>
  )
}
