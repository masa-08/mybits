import React from 'react'

export const CardContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="card w-full rounded-2xl bg-base-100 dark:bg-dark-slate">
      <div className="flex flex-col p-3">{children}</div>
    </div>
  )
}
