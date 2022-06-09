import { Outlet } from 'react-router-dom'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'

export const Frame = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="px-3">
          <Outlet />
        </div>
        <div className="flex-1" />
        <Footer />
      </div>
    </>
  )
}
