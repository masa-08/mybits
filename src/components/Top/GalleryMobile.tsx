import { Link } from 'react-router-dom'
import { dummy } from '@/store'
import { Button, SectionIcon } from '../parts'

export const GalleryMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="flex gap-3 px-3">
          <div className="my-2">
            <SectionIcon />
          </div>
          <p className="text-5xl mb-4 dark:text-white">Gallery</p>
        </div>
        <div className="flex gap-3">
          <figure style={{ flex: '0 0 calc(66.6% - 4px)' }}>
            <Link to="/babies/001">
              <img src={dummy[0].path} alt="image" className="rounded-xl" />
            </Link>
          </figure>
          <div className="flex flex-col gap-3">
            <figure>
              <Link to="/babies/002">
                <img src={dummy[1].path} alt="image" className="rounded-xl" />
              </Link>
            </figure>
            <figure>
              <img
                src="https://storage.googleapis.com/mybits-test/baby-silhouette.webp"
                alt="image"
                className="rounded-xl bg-yellow-300 p-3"
              />
            </figure>
          </div>
        </div>
        <div className="my-3"></div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <figure>
              <Link to="/babies/003">
                <img src={dummy[2].path} alt="image" className="rounded-xl" />
              </Link>
            </figure>
            <figure>
              <img
                src="https://storage.googleapis.com/mybits-test/baby-silhouette.webp"
                alt="image"
                className="rounded-xl bg-green-400 p-3"
              />
            </figure>
          </div>
          <figure style={{ flex: '0 0 calc(66.6% - 4px)' }}>
            <Link to="/babies/004">
              <img src={dummy[3].path} alt="image" className="rounded-xl" />
            </Link>
          </figure>
        </div>
        <div className="pt-3 flex justify-center">
          <Link to="babies" className="w-full">
            <Button
              text="view all babies"
              textSize="2xl"
              shadowSize="sm"
              padding="sm"
              widthFull={true}
            />
          </Link>
        </div>
      </div>
    </>
  )
}
