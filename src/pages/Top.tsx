import { Footer, Header } from '@/components/common'
import { Filter, List } from '@/components/Top'
import { ListItem } from '@/components/Top/ListItem'

const dummy = [
  {
    path: 'https://storage.googleapis.com/mybits-test/cat.png',
    id: '#001',
    address: '0xXXXXXXXXX',
  },
  {
    path: 'https://storage.googleapis.com/mybits-test/mouse.png',
    id: '#002',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.googleapis.com/mybits-test/rabbit.png',
    id: '#003',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.googleapis.com/mybits-test/fox.png',
    id: '#004',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.googleapis.com/mybits-test/cat.png',
    id: '#005',
    address: '0xXXXXXXXXX',
  },
  {
    path: 'https://storage.googleapis.com/mybits-test/mouse.png',
    id: '#006',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.googleapis.com/mybits-test/rabbit.png',
    id: '#007',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.googleapis.com/mybits-test/fox.png',
    id: '#008',
    address: 'Waiting 4 U',
  },
]

export const Top = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Filter />
        <div className="flex-1">
          <List>
            {dummy.map((d) => {
              return <ListItem key={d.id} path={d.path} id={d.id} address={d.address} />
            })}
          </List>
        </div>
        <Footer />
      </div>
    </>
  )
}
