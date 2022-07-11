import { Header } from '@/components/templates'
import { List, ListItem, ListItemMobile } from '@/components/BabyList'
import { dummy } from '@/store'

export const BabyList = () => {
  return (
    <>
      <div className="hidden md:block mb-12">
        <div className="px-3">
          <List>
            {dummy.map((d) => {
              return <ListItem key={d.id} path={d.path} id={d.id} address={d.address} />
            })}
          </List>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="px-3">
            <List>
              {dummy.map((d) => {
                return <ListItemMobile key={d.id} path={d.path} id={d.id} address={d.address} />
              })}
            </List>
          </div>
          <div className="flex-1 mb-4" />
        </div>
      </div>
    </>
  )
}
