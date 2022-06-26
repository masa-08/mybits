import { Outlet } from 'react-router-dom'
import { FrameBase } from '@/components/common/FrameBase'

export const Frame = () => {
  return (
    <>
      <FrameBase>
        <Outlet />
      </FrameBase>
    </>
  )
}
