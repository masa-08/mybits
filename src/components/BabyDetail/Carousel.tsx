import { Image } from './Image'
import { dummy } from '@/store'

export const Carousel = () => {
  const data = dummy[0]
  return (
    <>
      {
        // ダミー実装なので、実データを扱う際に修正する
      }
      <p className="text-3xl px-3 mb-5 text-light-content dark:text-dark-content">
        Would u like to see other babies?
      </p>
      <div className="carousel carousel-center space-x-4 rounded-box">
        <button className="btn btn-circle bg-gray-300 border-gray-300 w-9 h-44">{'<'}</button>
        <Image src={data?.path || ''} />
        <Image src={data?.path || ''} />
        <Image src={data?.path || ''} />
        <Image src={data?.path || ''} />
        <Image src={data?.path || ''} />
        <button className="btn btn-circle bg-gray-300 border-gray-300 w-9 h-44">{'>'}</button>
      </div>
    </>
  )
}
