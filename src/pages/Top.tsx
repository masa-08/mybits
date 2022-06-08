import { Footer, Header } from '@/components/common'
import { Filter, List } from '@/components/Top'
import { ListItem } from '@/components/Top/ListItem'

const dummy = [
  {
    path: 'https://storage.cloud.google.com/mybits-test/cat.png?authuser=3',
    id: '#001',
    address: '0xXXXXXXXXX',
  },
  {
    path: 'https://storage.cloud.google.com/mybits-test/mouse.png?authuser=3',
    id: '#002',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.cloud.google.com/mybits-test/rabbit.png?authuser=3',
    id: '#003',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.cloud.google.com/mybits-test/fox.png?authuser=3',
    id: '#004',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.cloud.google.com/mybits-test/cat.png?authuser=3',
    id: '#005',
    address: '0xXXXXXXXXX',
  },
  {
    path: 'https://storage.cloud.google.com/mybits-test/mouse.png?authuser=3',
    id: '#006',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.cloud.google.com/mybits-test/rabbit.png?authuser=3',
    id: '#007',
    address: 'Waiting 4 U',
  },
  {
    path: 'https://storage.cloud.google.com/mybits-test/fox.png?authuser=3',
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
