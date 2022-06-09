import { useParams } from 'react-router-dom'
import { Description, Image } from '@/components/BabyDetail'
import { dummy } from '@/store'

export const BabyDetail = () => {
  const params = useParams()
  const data = dummy.find((d) => d.id === params.id)
  return (
    <>
      <div className="pt-2">
        <Image src={data?.path || ''} />
      </div>
      <div className="px-3 pt-6">
        <Description id={params.id} />
        <div className="pt-6">
          <button className="btn w-full text-xl">View in OpenSea</button>
        </div>
      </div>
    </>
  )
}
