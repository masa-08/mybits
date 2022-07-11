import { Header } from '@/components/templates/Header'
import { Footer } from '@/components/templates'
import React from 'react'

type Props = {
  children: React.ReactNode
}

/**
 *
 * 各ページの基本的なレイアウトを定義する
 * Topページは特殊なレイアウトのため適用外
 */

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="md:flex md:flex-col md:min-h-screen">
        <Header />
        <div className="md:max-w-5xl md:mx-auto">{children}</div>
        <div className="md:flex-1" />
        <Footer />
      </div>
    </>
  )
}
