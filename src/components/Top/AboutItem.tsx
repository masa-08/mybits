import React from 'react'

type Props = {
  title: string
  body: string
  children: React.ReactNode
}

export const AboutItem: React.FC<Props> = ({ title, body, children }) => {
  return (
    <>
      <div className="card w-full rounded-2xl bg-base-100">
        <figure className="h-52 mt-4 pt-6 m-auto">{children}</figure>
        <div className="flex flex-col text-center">
          <div className="card-title px-3 pt-3 m-auto">
            <span className="text-4xl text-blue-500">{title}</span>
          </div>
          <div className="card-body p-3">
            <span className="text-xl font-fira">{body}</span>
          </div>
        </div>
      </div>
    </>
  )
}
