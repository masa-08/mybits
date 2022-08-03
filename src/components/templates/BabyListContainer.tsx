import React from 'react'

type Props = {
  children: React.ReactNode
}

export const BabyListContainer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-wrap gap-3">{children}</div>
    </>
  )
}
