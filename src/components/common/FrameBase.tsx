import { Header } from '@/components/templates/Header'
import { Footer } from '@/components/templates'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const FrameBase: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="md:flex md:flex-col md:min-h-screen">
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="md:max-w-5xl md:mx-auto">{children}</div>
        <div className="md:flex-1" />
        <Footer />
      </div>
    </>
  )
}
