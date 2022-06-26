import { Frame, Top, BabyList, BabyDetail } from '@/pages'
import { Route, Routes } from 'react-router-dom'

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
