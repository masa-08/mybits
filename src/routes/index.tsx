import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Frame, Top, BabyList, BabyDetail } from '@/pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="babies" element={<Frame />}>
        <Route path="" element={<BabyList />} />
        <Route path=":id" element={<BabyDetail />} />
      </Route>
    </Routes>
  )
}

// Ref: https://v5.reactrouter.com/web/guides/scroll-restoration
export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
