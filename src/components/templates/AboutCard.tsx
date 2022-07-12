import React from 'react'
import { CardContainer, CardTitle, CardBody } from '../parts'

type Props = {
  title: string
  body: string
  children: React.ReactNode
}

export const AboutCard: React.FC<Props> = ({ title, body, children }) => {
  return (
    <CardContainer>
      <figure className="h-40 mt-4 m-auto">{children}</figure>
      <div className="m-auto mt-3">
        <CardTitle title={title} />
      </div>
      <div className="mt-3 text-center">
        <CardBody body={body} />
      </div>
      <div className="mb-3" />
    </CardContainer>
  )
}
