import { Frame } from '@/components/common'
import { Top, BabyList, BabyDetail } from '@/pages'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Frame />}>
        <Route path="/" element={<Top />} />
        <Route path="babies" element={<BabyList />} />
        <Route path="babies/:id" element={<BabyDetail />} />
      </Route>
    </Routes>
  )
}
