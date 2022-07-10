import { Link } from 'react-router-dom'
import { dummy } from '@/store'
import { Button, ImageDummy, ImageLink } from '../parts'
import { SectionHeader } from '../templates'

export const Gallery = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="pl-3 mb-4">
          <SectionHeader title="Gallery" />
        </div>
        <div className="flex gap-3">
          <div style={{ flex: '0 0 calc(50% - 6px)' }}>
            <ImageLink to="/babies/001" imageSrc={dummy[0].path} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <ImageLink to="/babies/002" imageSrc={dummy[1].path} />
              <ImageLink to="/babies/003" imageSrc={dummy[2].path} />
            </div>
            <div className="flex gap-3">
              <div style={{ flex: '0 0 calc(50% - 6px)' }}>
                <ImageLink to="/babies/004" imageSrc={dummy[3].path} />
              </div>
              <ImageDummy color="yellow" />
            </div>
          </div>
        </div>
        <div className="my-3"></div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <ImageLink to="/babies/003" imageSrc={dummy[2].path} />
              <ImageLink to="/babies/004" imageSrc={dummy[3].path} />
            </div>
            <div className="flex gap-3">
              <div style={{ flex: '0 0 calc(50% - 6px)' }}>
                <ImageLink to="/babies/001" imageSrc={dummy[0].path} />
              </div>
              <ImageDummy color="green" />
            </div>
          </div>
          <div style={{ flex: '0 0 calc(50% - 6px)' }}>
            <ImageLink to="/babies/002" imageSrc={dummy[1].path} />
          </div>
        </div>
        <div className="p-6 flex justify-center">
          <Link to="babies">
            <Button text="view all babies" textSize="4xl" shadowSize="md" padding="md" />
          </Link>
        </div>
      </div>
    </>
  )
}
