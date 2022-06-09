import { Outlet } from 'react-router-dom'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'

export const Frame = () => {
  return (
    <>
      {
        // TODO: paddingの記載場所変更
      }
      <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <div className="flex-1" />
        <Footer />
      </div>
    </>
  )
}
