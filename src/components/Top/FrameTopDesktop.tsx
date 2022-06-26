import React from 'react'
import { FrameBase } from '@/components/common/FrameBase'

type Props = {
  children: React.ReactNode
}

export const FrameTopDesktop: React.FC<Props> = ({ children }) => {
  return (
    <>
      <FrameBase>{children}</FrameBase>
    </>
  )
}
