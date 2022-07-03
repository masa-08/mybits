import { Link } from 'react-router-dom'
import { dummy } from '@/store'

export const Gallery = () => {
  return (
    <>
      <div className="hidden md:block">
        <p className="text-5xl px-3 mb-4">Gallery</p>
        <div className="flex gap-3">
          <figure style={{ flex: '0 0 calc(50% - 6px)' }}>
            <Link to="/babies/001">
              <img src={dummy[0].path} alt="image" className="rounded-xl" />
            </Link>
          </figure>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <figure>
                <Link to="/babies/002">
                  <img src={dummy[1].path} alt="image" className="rounded-xl" />
                </Link>
              </figure>
              <figure>
                <Link to="/babies/003">
                  <img src={dummy[2].path} alt="image" className="rounded-xl" />
                </Link>
              </figure>
            </div>
            <div className="flex gap-3">
              <figure style={{ flex: '0 0 calc(50% - 6px)' }}>
                <Link to="/babies/004">
                  <img src={dummy[3].path} alt="image" className="rounded-xl" />
                </Link>
              </figure>
              <figure>
                <img
                  src="https://storage.googleapis.com/mybits-test/baby-silhouette.webp"
                  alt="image"
                  className="rounded-xl bg-yellow-300 p-5"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="my-3"></div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <figure>
                <Link to="/babies/003">
                  <img src={dummy[2].path} alt="image" className="rounded-xl" />
                </Link>
              </figure>
              <figure>
                <Link to="/babies/004">
                  <img src={dummy[3].path} alt="image" className="rounded-xl" />
                </Link>
              </figure>
            </div>
            <div className="flex gap-3">
              <figure style={{ flex: '0 0 calc(50% - 6px)' }}>
                <Link to="/babies/001">
                  <img src={dummy[0].path} alt="image" className="rounded-xl" />
                </Link>
              </figure>
              <figure>
                <img
                  src="https://storage.googleapis.com/mybits-test/baby-silhouette.webp"
                  alt="image"
                  className="rounded-xl bg-green-400 p-5"
                />
              </figure>
            </div>
          </div>
          <figure style={{ flex: '0 0 calc(50% - 6px)' }}>
            <Link to="/babies/002">
              <img src={dummy[1].path} alt="image" className="rounded-xl" />
            </Link>
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
