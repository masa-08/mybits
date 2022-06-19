import { Filter, List, ListItem, ListItemMobile } from '@/components/BabyList'
import { dummy } from '@/store'

export const BabyList = () => {
  return (
    <>
      <div className="px-3">
        <Filter />
        <div className="hidden md:block">
          <List>
            {dummy.map((d) => {
              return <ListItem key={d.id} path={d.path} id={d.id} address={d.address} />
            })}
          </List>
        </div>
        <div className="block md:hidden">
          <List>
            {dummy.map((d) => {
              return <ListItemMobile key={d.id} path={d.path} id={d.id} address={d.address} />
            })}
          </List>
        </div>
      </div>
    </>
  )
}
