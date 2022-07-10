import React from 'react'
import { CheckSquare, Square } from 'react-feather'

type Props = {
  done: boolean
}

export const CheckBox: React.FC<Props> = ({ done }) => {
  return (
    <>
      {done ? (
        <CheckSquare className="text-green-400 h-10 w-10" />
      ) : (
        <Square className="text-gray-300 dark:text-dark-content h-10 w-10" />
      )}
    </>
  )
}
