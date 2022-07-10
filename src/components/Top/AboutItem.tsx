import React from 'react'
import { CardTitle, CardBody } from '../parts'

type Props = {
  title: string
  body: string
  paddingTop?: boolean
  children: React.ReactNode
}

export const AboutItem: React.FC<Props> = ({ title, body, children, paddingTop = true }) => {
  return (
    <>
      <div className="card w-full rounded-2xl bg-base-100 dark:bg-dark-slate pb-3">
        <figure className={`h-40 mt-4 m-auto ${paddingTop ? 'pt-6' : 'pt-0'}`}>{children}</figure>
        <div className="flex flex-col text-center px-3 pt-3">
          <div className="m-auto">
            <CardTitle title={title} />
          </div>
          <div className="py-3">
            <CardBody body={body} />
          </div>
        </div>
      </div>
    </>
  )
}
