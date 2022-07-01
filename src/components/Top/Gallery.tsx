import { Link } from 'react-router-dom'
import { dummy } from '@/store'

export const Gallery = () => {
  return (
    <>
      <div className="hidden md:block">
        <p className="text-5xl px-3 mb-4">Gallery</p>
        <div className="flex gap-3">
          <figure style={{ flex: '0 0 calc(50% - 6px)' }}>
            <img src={dummy[0].path} alt="image" className="rounded-xl" />
          </figure>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <figure>
                <img src={dummy[0].path} alt="image" className="rounded-xl" />
              </figure>
              <figure>
                <img src={dummy[0].path} alt="image" className="rounded-xl" />
              </figure>
            </div>
            <div className="flex gap-3">
              <figure>
                <img src={dummy[0].path} alt="image" className="rounded-xl" />
              </figure>
              <figure>
                <img src={dummy[0].path} alt="image" className="rounded-xl" />
              </figure>
            </div>
          </div>
        </div>
        <div className="my-3"></div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <figure>
                <img src={dummy[0].path} alt="image" className="rounded-xl" />
              </figure>
              <figure>
                <img src={dummy[0].path} alt="image" className="rounded-xl" />
              </figure>
            </div>
            <div className="flex gap-3">
              <figure>
                <img src={dummy[0].path} alt="image" className="rounded-xl" />
              </figure>
              <figure>
                <img src={dummy[0].path} alt="image" className="rounded-xl" />
              </figure>
            </div>
          </div>
          <figure style={{ flex: '0 0 calc(50% - 6px)' }}>
            <img src={dummy[0].path} alt="image" className="rounded-xl" />
          </figure>
        </div>
        <div className="p-6 flex justify-center">
          <Link to="babies">
            <button className="btn rounded-2xl w-fit h-fit text-3xl px-24 py-5 bg-base-100 border-none text-base-content">
              View all
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
