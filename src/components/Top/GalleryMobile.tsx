import { Link } from 'react-router-dom'
import { dummy } from '@/store'
import { Button, BabySilhouette, ImageLink } from '../parts'
import { SectionHeader } from '../templates'

export const GalleryMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="pl-3 mb-4">
          <SectionHeader title="Gallery" />
        </div>
        <div className="flex gap-3">
          <div style={{ flex: '0 0 calc(66.6% - 4px)' }}>
            <ImageLink to="/babies/001" imageSrc={dummy[0].path} />
          </div>
          <div className="flex flex-col gap-3">
            <ImageLink to="/babies/002" imageSrc={dummy[1].path} />
            <BabySilhouette color="yellow" padding="sm" />
          </div>
        </div>
        <div className="my-3"></div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <ImageLink to="/babies/003" imageSrc={dummy[2].path} />
            <BabySilhouette color="green" padding="sm" />
          </div>
          <div style={{ flex: '0 0 calc(66.6% - 4px)' }}>
            <ImageLink to="/babies/004" imageSrc={dummy[3].path} />
          </div>
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
