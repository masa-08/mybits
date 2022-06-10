import { Filter, List, ListItem } from '@/components/BabyList'
import { dummy } from '@/store'

export const BabyList = () => {
  return (
    <>
      <Filter />
      <List>
        {dummy.map((d) => {
          return <ListItem key={d.id} path={d.path} id={d.id} address={d.address} />
        })}
      </List>
    </>
  )
}
