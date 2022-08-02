import { BabyListCard, BabyListContainer } from '@/components/templates'
import { dummy } from '@/store'

export const BabyList = () => {
  return (
    <>
      <div className="px-3 mb-6">
        <BabyListContainer>
          {dummy.map((d) => {
            return <BabyListCard key={d.id} path={d.path} id={d.id} address={d.address} />
          })}
        </BabyListContainer>
      </div>
    </>
  )
}
