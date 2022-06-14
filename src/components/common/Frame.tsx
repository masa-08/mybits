import { Outlet } from 'react-router-dom'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'

export const Frame = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="max-w-5xl mx-auto px-3 lg:px-0">
          <Outlet />
        </div>
        <div className="flex-1" />
        <Footer />
      </div>
    </>
  )
}
