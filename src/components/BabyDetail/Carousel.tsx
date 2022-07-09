import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider, { Settings } from 'react-slick'
import { Image } from './Image'
import { dummy } from '@/store'
import { Link } from 'react-router-dom'

export const Carousel = () => {
  const settings: Settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
  }
  return (
    <>
      <p className="text-3xl px-3 mb-5 text-light-content dark:text-dark-content">
        Would u like to see other babies?
      </p>
      <Slider {...settings} className="w-carousel lg:w-full">
        {dummy.slice(0, 4).map((img, i) => (
          <div key={img.id} className="p-3">
            <Link to={`/babies/${('000' + (i + 1).toString()).slice(-3)}`}>
              <Image src={img.path} />
            </Link>
          </div>
        ))}
      </Slider>
    </>
  )
}
