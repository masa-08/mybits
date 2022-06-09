import { Filter, List } from '@/components/Top'
import { ListItem } from '@/components/Top/ListItem'
import { dummy } from '@/store'

export const Top = () => {
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
