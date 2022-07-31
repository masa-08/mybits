import { Link } from 'react-router-dom'
import { useMedia } from 'use-media'
import { dummy } from '@/store'
import { Button, BabySilhouette, ImageLink } from '../parts'
import { SectionHeader } from '.'

export const Gallery = () => {
  const isWide = useMedia({ minWidth: '768px' })
  return (
    <>
      <div className="pl-3 mb-4">
        <SectionHeader title="Gallery" />
      </div>
      {
        // desktop
      }
      <div className="hidden md:block">
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
              <BabySilhouette color="yellow" padding="md" />
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
              <BabySilhouette color="green" padding="md" />
            </div>
          </div>
          <div style={{ flex: '0 0 calc(50% - 6px)' }}>
            <ImageLink to="/babies/002" imageSrc={dummy[1].path} />
          </div>
        </div>
      </div>
      {
        // mobile
      }
      <div className="block md:hidden">
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
      </div>
      <div className="pt-3 md:p-6 flex justify-center">
        <Link to="babies" className="w-full md:w-fit">
          <Button
            text="view all babies"
            textSize={isWide ? '4xl' : '2xl'}
            shadowSize={isWide ? 'md' : 'sm'}
            padding={isWide ? 'md' : 'sm'}
            widthFull={!isWide && true}
          />
        </Link>
      </div>
    </>
  )
}
