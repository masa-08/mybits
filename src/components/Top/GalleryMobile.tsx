import { Link } from 'react-router-dom'
import { dummy } from '@/store'

export const GalleryMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <p className="text-5xl px-3 mb-4">Gallery</p>
        <div className="flex gap-3">
          <figure style={{ flex: '0 0 calc(66.6% - 4px)' }}>
            <img src={dummy[0].path} alt="image" className="rounded-2xl" />
          </figure>
          <div className="flex flex-col gap-3">
            <figure>
              <img src={dummy[0].path} alt="image" className="rounded-2xl" />
            </figure>
            <figure>
              <img src={dummy[0].path} alt="image" className="rounded-2xl" />
            </figure>
          </div>
        </div>
        <div className="my-3"></div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <figure>
              <img src={dummy[0].path} alt="image" className="rounded-2xl" />
            </figure>
            <figure>
              <img src={dummy[0].path} alt="image" className="rounded-2xl" />
            </figure>
          </div>
          <figure style={{ flex: '0 0 calc(66.6% - 4px)' }}>
            <img src={dummy[0].path} alt="image" className="rounded-2xl" />
          </figure>
        </div>
        <div className="pt-3">
          <Link to="babies">
            <button className="btn rounded-full w-full h-fit text-3xl px-24 py-4 bg-base-100 text-base-content shadow-flat-sm shadow-base-content border-base-content border-2">
              View all
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
