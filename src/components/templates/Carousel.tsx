import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider, { Settings } from 'react-slick'
import { dummy } from '@/store'
import { ImageLink } from '../parts'
import React from 'react'

type Props = {
  slidesToShow: number
}

export const Carousel: React.FC<Props> = ({ slidesToShow }) => {
  const settings: Settings = {
    autoplay: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
  }
  return (
    <>
      <Slider {...settings} className="w-carousel">
        {dummy.slice(0, 4).map((img, i) => (
          <div key={img.id} className="p-3">
            <ImageLink
              to={`/babies/${('000' + (i + 1).toString()).slice(-3)}`}
              imageSrc={img.path}
            />
          </div>
        ))}
      </Slider>
    </>
  )
}
