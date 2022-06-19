import React from 'react'

type Props = {
  title: string
  body: string
  children: React.ReactNode
}

export const AboutItem: React.FC<Props> = ({ title, body, children }) => {
  return (
    <>
      <div className="card w-full rounded-2xl border-gray-400 border">
        <figure className="h-52 mt-4 pt-6 pb-6 m-auto">{children}</figure>
        <div className="flex flex-col text-center">
          <div className="card-title px-3 pt-3 m-auto">
            <span className="text-3xl">{title}</span>
          </div>
          <div className="card-body p-3">
            <span className="text-2xl">{body}</span>
          </div>
        </div>
      </div>
    </>
  )
}
